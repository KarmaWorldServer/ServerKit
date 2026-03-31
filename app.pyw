import json
import base64
import os
import queue
import re
import shutil
import signal
import urllib.request
import urllib.error
import urllib.parse
import sqlite3
import socket
import subprocess
import sys
import threading
import time
import unicodedata
import traceback
import ctypes
import secrets
import hashlib
import urllib.parse
import urllib.request
import urllib.error
import webbrowser
import zipfile
from collections import deque
from datetime import datetime

try:
    import psutil
except Exception:
    psutil = None
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse, parse_qs
from xml.sax.saxutils import escape as xml_escape

APP_NAME = 'KarmaWorld Server Kit'


def get_resource_dir() -> Path:
    if getattr(sys, 'frozen', False):
        try:
            return Path(getattr(sys, '_MEIPASS'))
        except Exception:
            return Path(sys.executable).resolve().parent
    return Path(__file__).resolve().parent


def get_app_home() -> Path:
    if not getattr(sys, 'frozen', False):
        return Path(__file__).resolve().parent
    if os.name == 'nt':
        base = Path(os.environ.get('LOCALAPPDATA') or (Path.home() / 'AppData' / 'Local'))
    elif sys.platform == 'darwin':
        base = Path.home() / 'Library' / 'Application Support'
    else:
        base = Path(os.environ.get('XDG_DATA_HOME') or (Path.home() / '.local' / 'share'))
    return base / APP_NAME


RESOURCE_DIR = get_resource_dir()
APP_HOME = get_app_home()
BASE_DIR = APP_HOME
BUNDLED_CONFIG_DIR = RESOURCE_DIR / 'config'
BUNDLED_DATA_DIR = RESOURCE_DIR / 'data'
BUNDLED_ASSETS_DIR = RESOURCE_DIR / 'assets'
CONFIG_PATH = APP_HOME / 'config' / 'config.json'
DATA_DIR = APP_HOME / 'data'
STATIC_DIR = RESOURCE_DIR / 'static'
ASSETS_DIR = APP_HOME / 'assets'
EXPORTS_DIR = DATA_DIR / 'exports'
BOT_DIR = APP_HOME / 'discord_bot'
BOT_CONF_PATH = BOT_DIR / 'conf.json'
BOT_CONFIG_PATH = BOT_DIR / 'config.json'
BOT_PID_FILE = BOT_DIR / 'bot.pid'
PID_FILE = APP_HOME / 'manager.pid'
PANEL_USERS_PATH = APP_HOME / 'config' / 'panel_users.json'
PANEL_USERS_LEGACY_PATH = DATA_DIR / 'panel_users.json'


def _copy_if_missing(src: Path, dst: Path):
    try:
        if src.exists() and src.is_file() and not dst.exists():
            dst.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(src, dst)
    except Exception:
        pass


def initialize_runtime_storage():
    APP_HOME.mkdir(parents=True, exist_ok=True)
    (APP_HOME / 'config').mkdir(parents=True, exist_ok=True)
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    ASSETS_DIR.mkdir(parents=True, exist_ok=True)
    EXPORTS_DIR.mkdir(parents=True, exist_ok=True)
    (DATA_DIR / 'logs').mkdir(parents=True, exist_ok=True)

    for rel in [
        Path('config/config.json'),
        Path('config/panel_users.json'),
        Path('data/permissions.json'),
        Path('data/teleports.json'),
        Path('data/store.json'),
        Path('data/vip.json'),
        Path('data/tasks.json'),
        Path('data/serverconfig.xml'),
        Path('assets/splash.png'),
        Path('assets/logo-title.png'),
        Path('assets/background.png'),
    ]:
        _copy_if_missing(RESOURCE_DIR / rel, APP_HOME / rel)

    cfg = safe_load_json(CONFIG_PATH, {})
    if not isinstance(cfg, dict):
        cfg = {}
    changed = False
    default_xml = str(DATA_DIR / 'serverconfig.xml')
    raw_xml = str(cfg.get('xml_path') or '').strip()
    if not raw_xml:
        cfg['xml_path'] = default_xml
        changed = True
    else:
        try:
            xml_candidate = Path(raw_xml)
        except Exception:
            xml_candidate = None
        if raw_xml.startswith('/mnt/data/') or raw_xml.startswith(str(RESOURCE_DIR)) or raw_xml.startswith(str(APP_HOME)):
            if raw_xml != default_xml:
                cfg['xml_path'] = default_xml
                changed = True
        elif xml_candidate is not None and xml_candidate.name.lower() == 'serverconfig.xml' and not xml_candidate.exists():
            cfg['xml_path'] = default_xml
            changed = True
    if not str(cfg.get('backup_folder') or '').strip():
        cfg['backup_folder'] = str(DATA_DIR / 'backups')
        changed = True
    if changed:
        safe_write_json(CONFIG_PATH, cfg)
PANEL_SECTIONS_CATALOG = ['dashboard','server','console','players','inventory','moderation','backups','tasks','serverconfig','settings','notifications','helpdocs','access']
PANEL_ACTIONS_CATALOG = [
    {'key': 'dashboard.refresh', 'section': 'dashboard', 'label_es': 'Actualizar estado general', 'label_en': 'Refresh general status'},
    {'key': 'server.start', 'section': 'server', 'label_es': 'Iniciar servidor', 'label_en': 'Start server'},
    {'key': 'server.stop', 'section': 'server', 'label_es': 'Parar servidor', 'label_en': 'Stop server'},
    {'key': 'server.restart', 'section': 'server', 'label_es': 'Reiniciar servidor', 'label_en': 'Restart server'},
    {'key': 'server.chat', 'section': 'server', 'label_es': 'Enviar mensajes al juego', 'label_en': 'Send in-game messages'},
    {'key': 'manager.stop', 'section': 'server', 'label_es': 'Parar manager', 'label_en': 'Stop manager'},
    {'key': 'manager.start', 'section': 'server', 'label_es': 'Reiniciar manager', 'label_en': 'Restart manager'},
    {'key': 'console.send', 'section': 'console', 'label_es': 'Enviar comandos por consola', 'label_en': 'Send console commands'},
    {'key': 'players.refresh', 'section': 'players', 'label_es': 'Actualizar jugadores', 'label_en': 'Refresh players'},
    {'key': 'players.kick', 'section': 'players', 'label_es': 'Expulsar jugadores', 'label_en': 'Kick players'},
    {'key': 'players.ban', 'section': 'players', 'label_es': 'Banear jugadores', 'label_en': 'Ban players'},
    {'key': 'players.unban', 'section': 'players', 'label_es': 'Quitar ban a jugadores', 'label_en': 'Unban players'},
    {'key': 'players.restore', 'section': 'players', 'label_es': 'Registrar robos y devolver objetos', 'label_en': 'Log thefts and restore items'},
    {'key': 'players.copy', 'section': 'players', 'label_es': 'Copiar datos de jugador', 'label_en': 'Copy player data'},
    {'key': 'inventory.load', 'section': 'inventory', 'label_es': 'Cargar inventario', 'label_en': 'Load inventory'},
    {'key': 'backups.refresh', 'section': 'backups', 'label_es': 'Actualizar lista de backups', 'label_en': 'Refresh backups list'},
    {'key': 'backups.create', 'section': 'backups', 'label_es': 'Crear backup', 'label_en': 'Create backup'},
    {'key': 'backups.restore', 'section': 'backups', 'label_es': 'Restaurar backup', 'label_en': 'Restore backup'},
    {'key': 'backups.delete', 'section': 'backups', 'label_es': 'Borrar backup', 'label_en': 'Delete backup'},
    {'key': 'tasks.add_restart', 'section': 'tasks', 'label_es': 'Añadir reinicio programado', 'label_en': 'Add scheduled restart'},
    {'key': 'tasks.add_backup', 'section': 'tasks', 'label_es': 'Añadir backup programado', 'label_en': 'Add scheduled backup'},
    {'key': 'tasks.save', 'section': 'tasks', 'label_es': 'Guardar tareas programadas', 'label_en': 'Save scheduled tasks'},
    {'key': 'tasks.delete', 'section': 'tasks', 'label_es': 'Eliminar tareas programadas', 'label_en': 'Delete scheduled tasks'},
    {'key': 'serverconfig.load', 'section': 'serverconfig', 'label_es': 'Cargar XML', 'label_en': 'Load XML'},
    {'key': 'serverconfig.save', 'section': 'serverconfig', 'label_es': 'Guardar XML', 'label_en': 'Save XML'},
    {'key': 'serverconfig.save_structured', 'section': 'serverconfig', 'label_es': 'Guardar editor rápido', 'label_en': 'Save quick editor'},
    {'key': 'settings.save', 'section': 'settings', 'label_es': 'Guardar ajustes', 'label_en': 'Save settings'},
    {'key': 'settings.export', 'section': 'settings', 'label_es': 'Exportar configuración', 'label_en': 'Export configuration'},
    {'key': 'settings.import', 'section': 'settings', 'label_es': 'Importar configuración', 'label_en': 'Import configuration'},
    {'key': 'settings.change_splash', 'section': 'settings', 'label_es': 'Cambiar imagen de inicio', 'label_en': 'Change startup image'},
    {'key': 'settings.browse', 'section': 'settings', 'label_es': 'Buscar rutas y archivos', 'label_en': 'Browse paths and files'},
    {'key': 'notifications.save', 'section': 'notifications', 'label_es': 'Guardar notificaciones', 'label_en': 'Save notifications'},
    {'key': 'notifications.test', 'section': 'notifications', 'label_es': 'Enviar prueba Discord', 'label_en': 'Send Discord test'},
    {'key': 'access.add_user', 'section': 'access', 'label_es': 'Añadir usuarios del panel', 'label_en': 'Add panel users'},
    {'key': 'access.remove_user', 'section': 'access', 'label_es': 'Eliminar usuarios del panel', 'label_en': 'Remove panel users'},
    {'key': 'access.save', 'section': 'access', 'label_es': 'Guardar usuarios y permisos', 'label_en': 'Save users and permissions'},
]
PROPERTY_RE = re.compile(r'<property\s+name="([^"]+)"\s+value="([^"]*)"\s*/>')

WEBVIEW = None
MAIN_WINDOW = None
LIVE_MAP_AUTH_WINDOW = None
LIVE_MAP_EMBED_WINDOW = None
LIVE_MAP_EMBED_URL = ''
LIVE_MAP_EMBED_ATTACHED = False
STAFF_SESSIONS = {}
STAFF_SESSION_COOKIE = 'kw_staff_session'
STAFF_SESSION_MAX_AGE = 60 * 60 * 12
PANEL_SESSIONS = {}
PANEL_SESSION_COOKIE = 'kw_panel_session'
PANEL_SESSION_MAX_AGE = 60 * 60 * 12



def safe_load_json(path: Path, default):
    try:
        if path.exists():
            return json.loads(path.read_text(encoding='utf-8'))
    except Exception:
        pass
    return default


def safe_write_json(path: Path, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding='utf-8')


def is_pid_running(pid):
    try:
        pid = int(pid or 0)
    except Exception:
        return False
    if pid <= 0:
        return False
    try:
        os.kill(pid, 0)
        return True
    except OSError:
        return False
    except Exception:
        return False


def read_bot_pid_file():
    try:
        if BOT_PID_FILE.exists():
            raw = BOT_PID_FILE.read_text(encoding='utf-8', errors='ignore').strip()
            return int(raw) if raw.isdigit() else None
    except Exception:
        return None
    return None


def remove_bot_pid_file():
    try:
        if BOT_PID_FILE.exists():
            BOT_PID_FILE.unlink()
    except Exception:
        pass


class ManagerState:
    def __init__(self):
        self.lock = threading.RLock()
        self.config = safe_load_json(CONFIG_PATH, {})
        self.server_process = None
        self.server_started_at = None
        self.manager_started_at = datetime.now().isoformat(timespec='seconds')
        self.manager_started_monotonic = time.monotonic()
        self.server_pid = None
        self.bot_process = None
        self.bot_started_at = None
        self.bot_pid = None
        self.console_lines = deque(maxlen=1500)
        self.chat_lines = deque(maxlen=300)
        self.last_error = ''
        self.shutdown_requested = False
        self.manager_paused = False
        self.httpd = None
        self.telnet_socket = None
        self.telnet_lock = threading.Lock()
        self.telnet_buffer = queue.Queue()
        self.players_cache = []
        self.last_players_refresh = ''
        self.desired_server_running = False
        self.auto_restart_scheduled_at = None
        self.auto_restart_last_exit_pid = None
        self.task_last_run = {}
        self.server_started_monotonic = 0.0
        self.server_last_output_at = 0.0
        self.server_last_health_check_at = 0.0
        self.server_last_telnet_ok_at = 0.0
        self.server_watchdog_fail_count = 0
        self.server_watchdog_restart_count = 0
        self.server_watchdog_last_reason = ''
        self.data_files = {
            'permissions': DATA_DIR / 'permissions.json',
            'teleports': DATA_DIR / 'teleports.json',
            'store': DATA_DIR / 'store.json',
            'vip': DATA_DIR / 'vip.json',
            'tasks': DATA_DIR / 'tasks.json',
        }
        self.player_history_path = DATA_DIR / 'player_history.json'
        self.last_inventory_snapshot_cycle = 0.0
        self._load_defaults()

    def default_config(self):
        return {
            'server_name': 'KarmaWorld',
            'server_folder': 'C:/7DTD/KarmaWorldServer',
            'executable_path': '',
            'working_directory': 'C:/7DTD/KarmaWorldServer',
            'xml_path': str(DATA_DIR / 'serverconfig.xml'),
            'telnet_host': '127.0.0.1',
            'telnet_port': 8081,
            'telnet_password': '',
            'panel_host': '127.0.0.1',
            'panel_port': 8765,
            'accent_color': '#55a7ff',
            'ui_theme': 'dark',
            'backup_folder': str(DATA_DIR / 'backups'),
            'backup_retention_days': 1,
            'language': 'es',
            'auto_open_browser': True,
            'auto_restart_enabled': False,
            'auto_restart_delay_seconds': 15,
            'watchdog_enabled': True,
            'watchdog_check_interval_seconds': 45,
            'watchdog_startup_grace_seconds': 180,
            'watchdog_no_output_seconds': 900,
            'watchdog_fail_threshold': 3,
            'watchdog_telnet_command': 'listplayers',
            'map_image_path': '',
            'live_map_url': '',
            'map_size_mode': '8192',
            'map_custom_size': 8192,
            'map_bounds_min_x': -4096,
            'map_bounds_max_x': 4096,
            'map_bounds_min_z': -4096,
            'map_bounds_max_z': 4096,
            'desktop_window': True,
            'external_bot_folder': '',
            'external_bot_entry': '',
            'kw_claim_flags': {},
            'kw_map_layers': {},
            'kw_claim_form': {},
            'inventory_api_base_url': '',
            'inventory_api_user': 'admin',
            'inventory_api_password': '',
            'item_icons_folder': str(BASE_DIR / 'ItemIcons') if (BASE_DIR / 'ItemIcons').exists() else '',
            'manager_notify_enabled': False,
            'manager_notify_webhook': '',
            'manager_notify_bot_token': '',
            'manager_notify_channel_id': '',
            'manager_notify_mentions': '',
            'manager_notify_on_start': True,
            'manager_notify_on_stop': True,
            'manager_notify_on_crash': True,
            'manager_notify_on_backup': True,
            'manager_notify_on_autorestart': True,
            'manager_notify_start_title': 'Servidor arrancado',
            'manager_notify_start_body': '{server_name} iniciado correctamente.',
            'manager_notify_stop_title': 'Servidor detenido',
            'manager_notify_stop_body': '{server_name} se ha detenido manualmente desde el manager.',
            'manager_notify_crash_title': 'Servidor caído',
            'manager_notify_crash_body': '{server_name} se ha parado de forma inesperada. Auto reinicio en {delay} segundos.',
            'manager_notify_backup_title': 'Backup creado',
            'manager_notify_backup_body': 'Se ha creado un backup del servidor: {backup_name}',
            'manager_notify_autorestart_title': 'Auto reinicio completado',
            'manager_notify_autorestart_body': '{server_name} se ha vuelto a iniciar automáticamente.',
            'manager_notify_test_title': 'Prueba manual',
            'manager_notify_test_body': 'Prueba manual de notificaciones del server kit.',
            'inventory_snapshot_enabled': True,
            'inventory_snapshot_interval_seconds': 60,
            'inventory_snapshot_max_per_player': 12,
            'panel_auth_enabled': False,
        }

    def default_store_collection(self):
        return {
            '_type': 'karmaworld_store_v2',
            'meta': {
                'version': 2,
                'updated_at': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
            },
            'categories': ['General', 'Armas', 'Munición', 'Herramientas', 'Medicina', 'Comida', 'Recursos', 'Construcción', 'Vehículos', 'Packs', 'Especiales', 'VIP'],
            'coin_packs': [
                {
                    'id': 'pack_inicio',
                    'name': 'Pack inicio',
                    'description': '500 Karmacoins para gastar en la tienda web.',
                    'coins': 500,
                    'bonus_coins': 0,
                    'price_real': 4.99,
                    'currency': 'EUR',
                    'image': '',
                    'active': True,
                    'featured': True,
                }
            ],
            'items': [],
            'wallets': [],
            'transactions': [],
            'payments': [],
            'orders': [],
            'playtime': {
                'enabled': False,
                'coins_per_interval': 5,
                'interval_minutes': 30,
                'daily_limit': 100,
                'anti_afk_minutes': 10,
                'event_multiplier': 1,
            },
            'discord': {
                'enabled': False,
                'guild_id': '',
                'channel_id': '',
                'bot_token': '',
                'dm_enabled': True,
                'public_template': '{player} compró {pack} por {amount} €',
                'dm_template': 'Pago confirmado: +{coins} Karmacoins',
            },
            'web': {
                'public_base_url': '',
                'public_ip': self.config.get('panel_host', '127.0.0.1'),
                'public_port': int(self.config.get('panel_port', 8765) or 8765),
                'domain': '',
                'steam_enabled': True,
                'discord_link_enabled': True,
                'stripe_enabled': False,
                'stripe_mode': 'test',
                'stripe_currency': 'EUR',
                'stripe_public_key': '',
                'stripe_secret_key': '',
                'stripe_webhook_secret': '',
                'success_url': '',
                'cancel_url': '',
                'discord_client_id': '',
                'discord_client_secret': '',
                'discord_redirect_uri': '',
                'staff_panel_enabled': True,
                'login_notice': 'Configure this section before publishing the store.',
            },
            'delivery': {
                'queue_mode': True,
                'requires_online_player': True,
                'warn_limits_before_buy': True,
            },
            'notes': [],
        }


    def default_permissions_collection(self):
        return [
            {
                'name': 'Fundador',
                'level': 0,
                'commands': 'all',
                'emoji': '👑',
                'color': '#f7c948',
                'discord_role_id': '',
                'panel_sections': 'dashboard,server,console,players,inventory,backups,tasks,serverconfig,settings,notifications,discordbot,helpdocs,access'
            },
            {
                'name': 'Administrador',
                'level': 10,
                'commands': 'say,listplayers,teleport',
                'emoji': '🔥',
                'color': '#ff6b57',
                'discord_role_id': '',
                'panel_sections': 'dashboard,server,console,players,inventory,backups,tasks,serverconfig,settings,notifications,discordbot,helpdocs,access'
            },
            {
                'name': 'Coordinador',
                'level': 20,
                'commands': 'say,listplayers,teleport',
                'emoji': '⚡',
                'color': '#ff9f43',
                'discord_role_id': '',
                'panel_sections': 'dashboard,server,console,players,inventory,backups,tasks,serverconfig,settings,notifications,helpdocs'
            },
            {
                'name': 'Moderador',
                'level': 30,
                'commands': 'say,listplayers',
                'emoji': '🛡️',
                'color': '#4dabf7',
                'discord_role_id': '',
                'panel_sections': 'dashboard,server,console,players,inventory,helpdocs'
            },
            {
                'name': 'Ayudante',
                'level': 40,
                'commands': 'say,listplayers',
                'emoji': '💚',
                'color': '#51cf66',
                'discord_role_id': '',
                'panel_sections': 'dashboard,players'
            },
            {
                'name': 'Staff de Eventos',
                'level': 50,
                'commands': 'say,listplayers',
                'emoji': '🎉',
                'color': '#b56cff',
                'discord_role_id': '',
                'panel_sections': 'dashboard,server,console,players,inventory,helpdocs'
            },
        ]

    def normalize_permissions_collection(self, raw):
        base = self.default_permissions_collection()
        if not isinstance(raw, list) or not raw:
            return base
        base_by_name = {str(row.get('name') or '').strip().lower(): row for row in base}
        normalized = []
        for index, row in enumerate(raw):
            if not isinstance(row, dict):
                continue
            row_name = str(row.get('name') or '').strip()
            src = base_by_name.get(row_name.lower()) or (base[index] if index < len(base) else {})
            normalized.append({
                'name': str(row_name or src.get('name') or f'Rol {index + 1}'),
                'level': int(row.get('level') or src.get('level') or ((index + 1) * 10)),
                'commands': str(row.get('commands') or src.get('commands') or ''),
                'emoji': str(row.get('emoji') or src.get('emoji') or '🛡️'),
                'color': str(row.get('color') or src.get('color') or '#55a7ff'),
                'discord_role_id': str(row.get('discord_role_id') or src.get('discord_role_id') or ''),
                'panel_sections': str(row.get('panel_sections') or src.get('panel_sections') or 'dashboard'),
            })
        return normalized

    def normalize_store_collection(self, raw):
        default = self.default_store_collection()
        if isinstance(raw, list):
            migrated = []
            for index, row in enumerate(raw):
                if not isinstance(row, dict):
                    continue
                migrated.append({
                    'id': str(row.get('id') or f'item_{index + 1}'),
                    'category': str(row.get('category') or 'General'),
                    'name': str(row.get('name') or ''),
                    'description': str(row.get('description') or ''),
                    'image': str(row.get('image') or ''),
                    'item_code': str(row.get('item_code') or row.get('item') or ''),
                    'quantity': int(row.get('quantity') or 1),
                    'quality': int(row.get('quality') or 1),
                    'price_coins': int(row.get('price') or row.get('price_coins') or 0),
                    'stock': int(row.get('stock') or 0),
                    'purchase_limit_total': int(row.get('purchase_limit_total') or 0),
                    'purchase_limit_daily': int(row.get('purchase_limit_daily') or 0),
                    'cooldown_seconds': int(row.get('cooldown_seconds') or 0),
                    'vip_required': str(row.get('vip_required') or ''),
                    'min_level': int(row.get('min_level') or 0),
                    'requires_online_player': bool(row.get('requires_online_player', True)),
                    'delivery_mode': str(row.get('delivery_mode') or 'queue'),
                    'command': str(row.get('command') or ''),
                    'active': bool(row.get('active', True)),
                    'visible': bool(row.get('visible', True)),
                    'featured': bool(row.get('featured', False)),
                })
            default['items'] = migrated
            default['meta']['updated_at'] = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            return default
        if not isinstance(raw, dict):
            return default
        data = dict(default)
        data.update(raw)
        for key in ['categories', 'coin_packs', 'items', 'wallets', 'transactions', 'payments', 'orders', 'notes']:
            value = data.get(key)
            data[key] = value if isinstance(value, list) else list(default[key])
        for key in ['playtime', 'discord', 'web', 'delivery', 'meta']:
            merged = dict(default[key])
            if isinstance(data.get(key), dict):
                merged.update(data[key])
            data[key] = merged
        cleaned_items = []
        for index, row in enumerate(data.get('items', [])):
            if not isinstance(row, dict):
                continue
            cleaned_items.append({
                'id': str(row.get('id') or f'item_{index + 1}'),
                'category': str(row.get('category') or 'General'),
                'name': str(row.get('name') or ''),
                'description': str(row.get('description') or ''),
                'image': str(row.get('image') or ''),
                'item_code': str(row.get('item_code') or ''),
                'quantity': int(row.get('quantity') or 1),
                'quality': int(row.get('quality') or 1),
                'price_coins': int(row.get('price_coins') or row.get('price') or 0),
                'stock': int(row.get('stock') or 0),
                'purchase_limit_total': int(row.get('purchase_limit_total') or 0),
                'purchase_limit_daily': int(row.get('purchase_limit_daily') or 0),
                'cooldown_seconds': int(row.get('cooldown_seconds') or 0),
                'vip_required': str(row.get('vip_required') or ''),
                'min_level': int(row.get('min_level') or 0),
                'requires_online_player': bool(row.get('requires_online_player', True)),
                'delivery_mode': str(row.get('delivery_mode') or 'queue'),
                'command': str(row.get('command') or ''),
                'active': bool(row.get('active', True)),
                'visible': bool(row.get('visible', True)),
                'featured': bool(row.get('featured', False)),
            })
        data['items'] = cleaned_items
        cleaned_packs = []
        for index, row in enumerate(data.get('coin_packs', [])):
            if not isinstance(row, dict):
                continue
            cleaned_packs.append({
                'id': str(row.get('id') or f'pack_{index + 1}'),
                'name': str(row.get('name') or f'Pack {index + 1}'),
                'description': str(row.get('description') or ''),
                'coins': int(row.get('coins') or 0),
                'bonus_coins': int(row.get('bonus_coins') or 0),
                'price_real': float(row.get('price_real') or 0),
                'currency': str(row.get('currency') or data['web'].get('stripe_currency') or 'EUR'),
                'image': str(row.get('image') or ''),
                'active': bool(row.get('active', True)),
                'featured': bool(row.get('featured', False)),
            })
        data['coin_packs'] = cleaned_packs
        cleaned_wallets = []
        for index, row in enumerate(data.get('wallets', [])):
            if not isinstance(row, dict):
                continue
            cleaned_wallets.append({
                'steam_id': str(row.get('steam_id') or ''),
                'player_name': str(row.get('player_name') or f'Jugador {index + 1}'),
                'discord_id': str(row.get('discord_id') or ''),
                'balance': int(row.get('balance') or 0),
                'total_bought': int(row.get('total_bought') or 0),
                'total_spent': int(row.get('total_spent') or 0),
                'blocked': bool(row.get('blocked', False)),
            })
        data['wallets'] = cleaned_wallets
        data['meta']['updated_at'] = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        return data

    def _load_defaults(self):
        defaults = self.default_config()
        for key, value in defaults.items():
            self.config.setdefault(key, value)
        self.config.pop('stop_bat_path', None)
        self.config.pop('worlds_folder', None)
        self.save_config(self.config)
        self._ensure_bot_templates()

    def save_config(self, new_config):
        with self.lock:
            cleaned = dict(self.config)
            cleaned.update(new_config)
            cleaned.pop('stop_bat_path', None)
            cleaned.pop('worlds_folder', None)
            try:
                cleaned['telnet_port'] = int(cleaned.get('telnet_port') or 8081)
            except Exception:
                cleaned['telnet_port'] = 8081
            try:
                cleaned['panel_port'] = int(cleaned.get('panel_port') or 8765)
            except Exception:
                cleaned['panel_port'] = 8765
            try:
                cleaned['auto_restart_delay_seconds'] = max(3, int(cleaned.get('auto_restart_delay_seconds') or 15))
            except Exception:
                cleaned['auto_restart_delay_seconds'] = 15
            try:
                cleaned['watchdog_check_interval_seconds'] = max(15, int(cleaned.get('watchdog_check_interval_seconds') or 45))
            except Exception:
                cleaned['watchdog_check_interval_seconds'] = 45
            try:
                cleaned['watchdog_startup_grace_seconds'] = max(30, int(cleaned.get('watchdog_startup_grace_seconds') or 180))
            except Exception:
                cleaned['watchdog_startup_grace_seconds'] = 180
            try:
                cleaned['watchdog_no_output_seconds'] = max(120, int(cleaned.get('watchdog_no_output_seconds') or 900))
            except Exception:
                cleaned['watchdog_no_output_seconds'] = 900
            try:
                cleaned['watchdog_fail_threshold'] = max(2, int(cleaned.get('watchdog_fail_threshold') or 3))
            except Exception:
                cleaned['watchdog_fail_threshold'] = 3
            cleaned['watchdog_enabled'] = bool(cleaned.get('watchdog_enabled', True))
            cleaned['watchdog_telnet_command'] = str(cleaned.get('watchdog_telnet_command') or 'listplayers').strip() or 'listplayers'
            try:
                cleaned['backup_retention_days'] = max(0, int(cleaned.get('backup_retention_days') or 1))
            except Exception:
                cleaned['backup_retention_days'] = 1
            cleaned['auto_restart_enabled'] = bool(cleaned.get('auto_restart_enabled'))
            cleaned['desktop_window'] = bool(cleaned.get('desktop_window', True))
            cleaned['inventory_snapshot_enabled'] = bool(cleaned.get('inventory_snapshot_enabled', True))
            try:
                cleaned['inventory_snapshot_interval_seconds'] = max(15, int(cleaned.get('inventory_snapshot_interval_seconds') or 60))
            except Exception:
                cleaned['inventory_snapshot_interval_seconds'] = 60
            try:
                cleaned['inventory_snapshot_max_per_player'] = max(3, int(cleaned.get('inventory_snapshot_max_per_player') or 12))
            except Exception:
                cleaned['inventory_snapshot_max_per_player'] = 12
            for key in ('inventory_api_base_url', 'inventory_api_user', 'inventory_api_password', 'item_icons_folder', 'panel_host'):
                cleaned[key] = str(cleaned.get(key) or '').strip()
            theme = str(cleaned.get('ui_theme') or '').strip().lower()
            cleaned['ui_theme'] = theme if theme in {'dark', 'ocean', 'emerald', 'violet', 'sunset'} else 'dark'
            for key in ('manager_notify_webhook', 'manager_notify_bot_token', 'manager_notify_channel_id', 'manager_notify_mentions',
                        'manager_notify_start_title', 'manager_notify_start_body',
                        'manager_notify_stop_title', 'manager_notify_stop_body',
                        'manager_notify_crash_title', 'manager_notify_crash_body',
                        'manager_notify_backup_title', 'manager_notify_backup_body',
                        'manager_notify_autorestart_title', 'manager_notify_autorestart_body',
                        'manager_notify_test_title', 'manager_notify_test_body'):
                cleaned[key] = str(cleaned.get(key) or '').strip()
            for key in ('manager_notify_enabled', 'manager_notify_on_start', 'manager_notify_on_stop', 'manager_notify_on_crash', 'manager_notify_on_backup', 'manager_notify_on_autorestart', 'panel_auth_enabled'):
                cleaned[key] = bool(cleaned.get(key))
            mode = str(cleaned.get('map_size_mode') or '').strip().lower()
            if mode not in {'6144', '8192', '10240', 'custom'}:
                mode = '8192'
            cleaned['map_size_mode'] = mode
            try:
                custom_size = int(cleaned.get('map_custom_size') or 8192)
            except Exception:
                custom_size = 8192
            if custom_size < 2048:
                custom_size = 2048
            if custom_size % 2048 != 0:
                custom_size = int(round(custom_size / 2048.0) * 2048)
            cleaned['map_custom_size'] = custom_size
            selected_size = custom_size if mode == 'custom' else int(mode)
            half = selected_size / 2.0
            cleaned['map_bounds_min_x'] = -half
            cleaned['map_bounds_max_x'] = half
            cleaned['map_bounds_min_z'] = -half
            cleaned['map_bounds_max_z'] = half
            if str(cleaned.get('server_folder') or '').strip() and not str(cleaned.get('working_directory') or '').strip():
                cleaned['working_directory'] = str(cleaned.get('server_folder') or '').strip()
            explicit_xml = str(cleaned.get('xml_path') or '').strip()
            server_folder = str(cleaned.get('server_folder') or '').strip()
            try:
                server_xml = Path(server_folder) / 'serverconfig.xml' if server_folder else None
            except Exception:
                server_xml = None
            if server_xml and server_xml.exists() and (not explicit_xml or explicit_xml == str(DATA_DIR / 'serverconfig.xml')):
                cleaned['xml_path'] = str(server_xml)
            self.config = cleaned
            safe_write_json(CONFIG_PATH, self.config)
        try:
            self.sync_telnet_password_from_xml()
        except Exception:
            pass

    def resolve_serverconfig_path(self):
        configured = str(self.config.get('xml_path') or '').strip()
        server_folder = str(self.config.get('server_folder') or '').strip()
        candidates = []
        if server_folder:
            try:
                candidates.append(Path(server_folder) / 'serverconfig.xml')
            except Exception:
                pass
        if configured:
            try:
                candidates.append(Path(configured))
            except Exception:
                pass
        candidates.append(DATA_DIR / 'serverconfig.xml')
        for candidate in candidates:
            try:
                if candidate and candidate.exists() and candidate.name.lower() == 'serverconfig.xml':
                    return candidate
            except Exception:
                continue
        for candidate in candidates:
            try:
                if candidate and candidate.name.lower() == 'serverconfig.xml':
                    return candidate
            except Exception:
                continue
        return DATA_DIR / 'serverconfig.xml'

    def _normalize_repeat_mode(self, mode):
        raw = str(mode or 'daily').strip().lower()
        return 'once' if raw in {'once', 'one', 'one_time', 'one-time', 'una', 'una_vez', 'una-vez'} else 'daily'

    def _derive_exact_time_from_cron(self, cron, default_hour=6, default_minute=0):
        parts = str(cron or '').strip().split()
        if len(parts) == 5:
            minute, hour = parts[0], parts[1]
            if minute.isdigit() and hour.isdigit():
                try:
                    m = max(0, min(59, int(minute)))
                    h = max(0, min(23, int(hour)))
                    return h, m
                except Exception:
                    pass
        return default_hour, default_minute

    def _extract_telnet_from_xml(self):
        xml_path = self.resolve_serverconfig_path()
        if not xml_path.exists():
            return {}
        try:
            content = xml_path.read_text(encoding='utf-8', errors='ignore')
        except Exception:
            return {}
        data = {}
        for prop in ('TelnetPassword', 'TelnetPort'):
            m = re.search(r'<property\s+name="%s"\s+value="([^"]*)"\s*/>' % re.escape(prop), content, flags=re.IGNORECASE)
            if m:
                data[prop] = m.group(1)
        return data

    def sync_telnet_password_from_xml(self):
        xml_data = self._extract_telnet_from_xml()
        changed = False
        pwd = str(xml_data.get('TelnetPassword') or '').strip()
        port = str(xml_data.get('TelnetPort') or '').strip()
        if pwd and pwd != str(self.config.get('telnet_password') or ''):
            self.config['telnet_password'] = pwd
            changed = True
        if port:
            try:
                port_num = int(port)
            except Exception:
                port_num = None
            if port_num and port_num != int(self.config.get('telnet_port') or 8081):
                self.config['telnet_port'] = port_num
                changed = True
        if changed:
            safe_write_json(CONFIG_PATH, self.config)
        return changed

    def get_bot_dir(self):
        entry = self.get_bot_entry_path()
        if entry is not None:
            return entry.parent
        raw = str(self.config.get('external_bot_folder') or '').strip()
        if not raw:
            return None
        p = Path(raw).expanduser()
        return p if p.exists() else p

    def get_bot_entry_path(self):
        raw = str(self.config.get('external_bot_entry') or '').strip()
        if raw:
            return Path(raw).expanduser()
        legacy = str(self.config.get('external_bot_folder') or '').strip()
        if legacy:
            p = Path(legacy).expanduser()
            if p.is_file():
                return p
        return None

    def get_bot_paths(self):
        bot_dir = self.get_bot_dir()
        if bot_dir is None:
            return {
                'dir': None,
                'conf': None,
                'config': None,
                'pid': None,
            }
        return {
            'dir': bot_dir,
            'conf': bot_dir / 'conf.json',
            'config': bot_dir / 'config.json',
            'pid': bot_dir / 'bot.pid',
        }

    def _read_bot_pid_dynamic(self):
        try:
            pid_path = self.get_bot_paths()['pid']
            if pid_path and pid_path.exists():
                raw = pid_path.read_text(encoding='utf-8', errors='ignore').strip()
                return int(raw) if raw.isdigit() else None
        except Exception:
            return None
        return None

    def _remove_bot_pid_dynamic(self):
        try:
            pid_path = self.get_bot_paths()['pid']
            if pid_path and pid_path.exists():
                pid_path.unlink()
        except Exception:
            pass

    def _detect_bot_entry(self, bot_dir: Path):
        candidates = ['bot_fusionado.py', 'bot.py', 'main.py', 'RUN_WINDOWS.bat', 'run.bat']
        for name in candidates:
            candidate = bot_dir / name
            if candidate.exists() and candidate.is_file():
                return candidate
        exe_candidates = list(bot_dir.glob('*.exe'))
        if exe_candidates:
            return exe_candidates[0]
        return None

    def _bot_conf_default(self):
        return {
            'DISCORD_TOKEN': '',
            'GUILD_ID': '',
            'CHANNEL_ID': '',
            'CHANNEL_ID_IN': '',
            'CHANNEL_ID_OUT': '',
            'TELNET_HOST': self.config.get('telnet_host', '127.0.0.1'),
            'TELNET_PORT': int(self.config.get('telnet_port', 8081) or 8081),
            'TELNET_PASSWORD': str(self.config.get('telnet_password', '') or ''),
            'SERVER_NAME': self.config.get('server_name', 'KarmaWorld'),
            'STARTUP_MESSAGE_ENABLED': True,
            'STARTUP_MESSAGE': '🟢`BOT DE CONTROL CONECTADO CORRECTAMENTE`🟢',
            'PRESENCE_TYPE': 'playing',
            'PRESENCE_TEXT': '7DTD | KarmaWorld',
            'PRESENCE_MODE': 'fixed',
            'PRESENCE_FIXED_TEXT': '7DTD | KarmaWorld',
            'PRESENCE_ROTATE_INTERVAL_SEC': 30,
            'PRESENCE_ROTATE_SHOW_STATE': True,
            'PRESENCE_ROTATE_SHOW_PLAYERS': True,
            'PRESENCE_ROTATE_SHOW_GAME_TIME': True,
            'PRESENCE_ROTATE_SHOW_NEXT_HORDE': True,
            'CHANNEL_ID_IN': '',
            'CHANNEL_ID_OUT': '',
            'ADMIN_COMMAND_CHANNEL_ID': '',
            'ADMIN_PANEL_CHANNEL_ID': '',
            'STATUS_PANEL_CHANNEL_ID': '',
            'RESTART_ANNOUNCE_CHANNEL_ID': '',
            'ALERT_CHANNEL_ID': '',
            'LOG_CHANNEL_ID': '',
            'ADMIN_ACTION_LOG_CHANNEL_ID': '',
            'STATE_MESSAGE_CHANNEL_ID': '',
            'SERVERCONFIG_XML_PATH': str(self.config.get('xml_path') or ''),
            'SERVER_FORCE_KILL_ENABLED': True,
            'SERVER_KILL_PROCESS_NAMES': ['7DaysToDieServer.exe', '7DaysToDieServer.x86_64.exe', 'startdedicated.exe'],
        }

    def _bot_config_default(self):
        return {
            'discord_token': '',
            'prefix': '!',
            'rpg_commands_channel': '',
            'admin_shop_channel': '',
            'embed_color': '0x8E44AD',
            'embed_footer': 'KarmaWorld RPG',
            'telnet_host': self.config.get('telnet_host', '127.0.0.1'),
            'telnet_port': int(self.config.get('telnet_port', 8081) or 8081),
            'telnet_password': str(self.config.get('telnet_password', '') or ''),
            'telnet_timeout_seconds': 5,
            'telnet_prompt': '>',
            'listplayers_command': 'listplayers',
            'give_command_template': 'give "{player}" {item} {quantity}',
            'give_command_template_inventory': 'st-GiveItem {steam_id} {item} {quantity}',
            'daily_coins': 100,
            'daily_cooldown_hours': 24,
            'daily_game_items': [],
            'salary_per_interval': 25,
            'bank_interest_percent': 1.0,
            'shop_categories': {},
            'reward_give_command_template': 'st-GiveItem {steam_id} {item} {quantity}',
            'logs_channel': '',
            'serverconfig_xml_path': str(self.config.get('xml_path') or ''),
            'maintenance_telnet_command': 'shutdown'
        }

    def _ensure_bot_templates(self):
        if not BOT_DIR.exists():
            return
        # When packaged in this environment, copy bot files later manually if present
        if not BOT_CONF_PATH.exists():
            safe_write_json(BOT_CONF_PATH, self._bot_conf_default())
        if not BOT_CONFIG_PATH.exists():
            safe_write_json(BOT_CONFIG_PATH, self._bot_config_default())

    def load_bot_config(self):
        bot_dir = self.get_bot_dir()
        bot_entry = self.get_bot_entry_path()
        cfg = safe_load_json(BOT_CONFIG_PATH, self._bot_config_default())
        if not isinstance(cfg, dict):
            cfg = self._bot_config_default()
        cfg = {**self._bot_config_default(), **cfg}
        cfg['external_bot_folder'] = str(bot_dir).replace('\\', '/') if bot_dir else ''
        cfg['external_bot_entry'] = str(bot_entry).replace('\\', '/') if bot_entry else ''
        return cfg

    def save_bot_config(self, data, sync_only=False):
        incoming = dict(data or {})
        bot_entry_raw = str(incoming.get('external_bot_entry') or incoming.get('external_bot_folder') or '').strip()
        if not bot_entry_raw:
            self.config['external_bot_entry'] = ''
            self.config['external_bot_folder'] = ''
            safe_write_json(CONFIG_PATH, self.config)
            if not sync_only:
                current_cfg = safe_load_json(BOT_CONFIG_PATH, self._bot_config_default())
                safe_write_json(BOT_CONFIG_PATH, {**self._bot_config_default(), **(current_cfg if isinstance(current_cfg, dict) else {})})
            return True, 'Archivo de arranque del bot guardado.'
        bot_entry = Path(bot_entry_raw).expanduser()
        if not bot_entry.exists() or not bot_entry.is_file():
            return False, 'El archivo del bot no existe. Elige la ruta correcta.'
        if bot_entry.suffix.lower() not in {'.bat', '.cmd', '.exe', '.py'}:
            return False, 'Elige un archivo .bat, .cmd, .exe o .py para arrancar el bot.'
        self.config['external_bot_entry'] = str(bot_entry).replace('\\', '/')
        self.config['external_bot_folder'] = str(bot_entry.parent).replace('\\', '/')
        safe_write_json(CONFIG_PATH, self.config)
        current_cfg = safe_load_json(BOT_CONFIG_PATH, self._bot_config_default())
        if not isinstance(current_cfg, dict):
            current_cfg = self._bot_config_default()
        merged = {**self._bot_config_default(), **current_cfg}
        for key, value in incoming.items():
            if key in {'external_bot_entry', 'external_bot_folder'}:
                continue
            merged[str(key)] = value
        merged['telnet_host'] = str(merged.get('telnet_host') or self.config.get('telnet_host') or '127.0.0.1').strip()
        try:
            merged['telnet_port'] = int(merged.get('telnet_port') or self.config.get('telnet_port') or 8081)
        except Exception:
            merged['telnet_port'] = int(self.config.get('telnet_port') or 8081)
        merged['telnet_password'] = str(merged.get('telnet_password') or self.config.get('telnet_password') or '').strip()
        safe_write_json(BOT_CONFIG_PATH, merged)
        return True, 'Archivo de arranque del bot guardado.'

    def _read_bot_output(self, proc: subprocess.Popen):
        try:
            if proc.stdout is None:
                return
            for raw in iter(proc.stdout.readline, ''):
                if not raw:
                    break
                self.log('[BOT] ' + raw.rstrip())
        except Exception as exc:
            self.log(f'Error leyendo salida del bot: {exc}')

    def _windows_hidden_popen_kwargs(self):
        kwargs = {}
        if os.name == 'nt':
            creationflags = getattr(subprocess, 'CREATE_NEW_PROCESS_GROUP', 0) | getattr(subprocess, 'CREATE_NO_WINDOW', 0)
            kwargs['creationflags'] = creationflags
            startupinfo = subprocess.STARTUPINFO()
            startupinfo.dwFlags |= getattr(subprocess, 'STARTF_USESHOWWINDOW', 0)
            startupinfo.wShowWindow = getattr(subprocess, 'SW_HIDE', 0)
            kwargs['startupinfo'] = startupinfo
        return kwargs

    def _windows_hidden_run_kwargs(self):
        kwargs = {}
        if os.name == 'nt':
            kwargs['creationflags'] = getattr(subprocess, 'CREATE_NO_WINDOW', 0)
            startupinfo = subprocess.STARTUPINFO()
            startupinfo.dwFlags |= getattr(subprocess, 'STARTF_USESHOWWINDOW', 0)
            startupinfo.wShowWindow = getattr(subprocess, 'SW_HIDE', 0)
            kwargs['startupinfo'] = startupinfo
        return kwargs

    def start_bot(self):
        with self.lock:
            if self.bot_process and self.bot_process.poll() is None:
                return False, 'El bot ya está arrancado.'
            paths = self.get_bot_paths()
            bot_dir = paths['dir']
            entry = self.get_bot_entry_path()
            if entry is None and bot_dir is not None:
                entry = self._detect_bot_entry(bot_dir)
            if entry is None:
                return False, 'Selecciona primero el archivo .bat, .cmd, .exe o .py del bot.'
            bot_dir = entry.parent
            if not bot_dir.exists():
                return False, 'La carpeta del bot no existe. Elige la ruta correcta.'
            if not entry.exists():
                return False, 'El archivo de arranque del bot no existe. Elige la ruta correcta.'
            try:
                stale_pid = self._read_bot_pid_dynamic()
                if stale_pid and not is_pid_running(stale_pid):
                    self._remove_bot_pid_dynamic()
                popen_hidden_kwargs = self._windows_hidden_popen_kwargs()
                if entry.suffix.lower() == '.py':
                    cmd = [sys.executable, str(entry.name)]
                elif entry.suffix.lower() in {'.bat', '.cmd'}:
                    cmd = ['cmd', '/c', str(entry.name)]
                else:
                    cmd = [str(entry.name)]
                proc = subprocess.Popen(
                    cmd,
                    cwd=str(bot_dir),
                    stdout=subprocess.PIPE,
                    stderr=subprocess.STDOUT,
                    stdin=subprocess.PIPE,
                    text=True,
                    bufsize=1,
                    shell=False,
                    env={**os.environ, 'KARMABOT_CONSOLE_SILENT': '1'},
                    **popen_hidden_kwargs
                )
                self.bot_process = proc
                self.bot_started_at = datetime.now().isoformat(timespec='seconds')
                self.bot_pid = proc.pid
                try:
                    paths['pid'].write_text(str(proc.pid), encoding='utf-8')
                except Exception:
                    pass
                self.log(f'Bot arrancado con PID {proc.pid}.')
                threading.Thread(target=self._read_bot_output, args=(proc,), daemon=True).start()
                return True, 'Bot arrancado.'
            except Exception as exc:
                self.last_error = traceback.format_exc()
                self.log(f'Error al arrancar el bot: {exc}')
                return False, f'Error al arrancar bot: {exc}'

    def stop_bot(self):
        proc = self.bot_process
        pid = self.bot_pid or (proc.pid if proc else None) or self._read_bot_pid_dynamic()
        if not proc and not pid:
            return False, 'No hay proceso del bot controlado por el manager.'
        try:
            if os.name == 'nt' and pid:
                result = subprocess.run(['taskkill', '/PID', str(pid), '/T', '/F'], stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, timeout=20, **self._windows_hidden_run_kwargs())
                if result.returncode not in (0, 128, 255):
                    raise RuntimeError(result.stdout.strip() or f'taskkill devolvió {result.returncode}')
            else:
                if proc and proc.poll() is None:
                    proc.terminate()
                    try:
                        proc.wait(timeout=10)
                    except subprocess.TimeoutExpired:
                        proc.kill()
                elif pid:
                    os.kill(pid, signal.SIGTERM)
            self.log('Bot detenido desde el manager.')
            return True, 'Bot detenido.'
        except Exception as exc:
            self.log(f'Error al detener bot: {exc}')
            return False, f'Error al detener bot: {exc}'
        finally:
            self._remove_bot_pid_dynamic()
            self.bot_process = None
            self.bot_pid = None
            self.bot_started_at = None

    def restart_bot(self):
        with self.lock:
            ok_stop, msg_stop = self.stop_bot()
            if not ok_stop and 'No hay proceso del bot' not in str(msg_stop):
                return False, msg_stop
            time.sleep(1.0)
            ok_start, msg_start = self.start_bot()
            if ok_start:
                return True, 'Bot reiniciado.'
            return False, msg_start

    def log(self, message: str):
        line = f"[{datetime.now().strftime('%H:%M:%S')}] {message}"
        with self.lock:
            self.console_lines.append(line)
        try:
            (DATA_DIR / 'logs').mkdir(parents=True, exist_ok=True)
            with (DATA_DIR / 'logs' / 'server.log').open('a', encoding='utf-8') as fh:
                fh.write(line + '\n')
        except Exception:
            pass

    def chat_log(self, message: str):
        line = f"[{datetime.now().strftime('%H:%M:%S')}] {message}"
        with self.lock:
            self.chat_lines.append(line)
        try:
            with (DATA_DIR / 'logs' / 'chat.log').open('a', encoding='utf-8') as fh:
                fh.write(line + '\n')
        except Exception:
            pass

    def _manager_notify_allowed(self, event_key: str) -> bool:
        cfg = self.config
        if not cfg.get('manager_notify_enabled'):
            return False
        mapping = {
            'start': 'manager_notify_on_start',
            'stop': 'manager_notify_on_stop',
            'crash': 'manager_notify_on_crash',
            'backup': 'manager_notify_on_backup',
            'autorestart': 'manager_notify_on_autorestart',
        }
        return bool(cfg.get(mapping.get(event_key, ''), False))

    def _post_json(self, url: str, payload: dict, headers=None):
        data = json.dumps(payload).encode('utf-8')
        req_headers = {'Content-Type': 'application/json', 'User-Agent': 'KarmaWorldServerKit/10.0', 'Accept': 'application/json, text/plain, */*'}
        if headers:
            req_headers.update(headers)
        req = urllib.request.Request(url, data=data, headers=req_headers, method='POST')
        with urllib.request.urlopen(req, timeout=10) as resp:
            return resp.read().decode('utf-8', errors='ignore')

    def _manager_embed_payload(self, title: str, message: str, cfg_override=None):
        cfg = dict(self.config)
        if isinstance(cfg_override, dict):
            cfg.update(cfg_override)
        mentions = str(cfg.get('manager_notify_mentions') or '').strip()
        raw_color = str(cfg.get('accent_color') or '#55a7ff').strip().lstrip('#')
        try:
            color = int(raw_color, 16)
        except Exception:
            color = 0x55A7FF
        embed = {
            'title': str(title or 'KarmaWorld Server Kit'),
            'description': str(message or ''),
            'color': color,
            'footer': {'text': 'KarmaWorld Server Kit'},
            'timestamp': datetime.utcnow().isoformat(timespec='seconds') + 'Z',
        }
        payload = {'embeds': [embed]}
        if mentions:
            payload['content'] = mentions
            payload['allowed_mentions'] = {'parse': ['users', 'roles', 'everyone']}
        return payload

    def _manager_notification_templates(self):
        return {
            'start': ('manager_notify_start_title', 'manager_notify_start_body', 'Servidor arrancado', '{server_name} iniciado correctamente.'),
            'stop': ('manager_notify_stop_title', 'manager_notify_stop_body', 'Servidor detenido', '{server_name} se ha detenido manualmente desde el manager.'),
            'crash': ('manager_notify_crash_title', 'manager_notify_crash_body', 'Servidor caído', '{server_name} se ha parado de forma inesperada. Auto reinicio en {delay} segundos.'),
            'backup': ('manager_notify_backup_title', 'manager_notify_backup_body', 'Backup creado', 'Se ha creado un backup del servidor: {backup_name}'),
            'autorestart': ('manager_notify_autorestart_title', 'manager_notify_autorestart_body', 'Auto reinicio completado', '{server_name} se ha vuelto a iniciar automáticamente.'),
            'test': ('manager_notify_test_title', 'manager_notify_test_body', 'Prueba manual', 'Prueba manual de notificaciones del server kit.'),
        }

    def _format_manager_template(self, template: str, values=None):
        values = {str(k): '' if v is None else str(v) for k, v in (values or {}).items()}
        class _SafeDict(dict):
            def __missing__(self, key):
                return '{' + str(key) + '}'
        try:
            return str(template or '').format_map(_SafeDict(values))
        except Exception:
            return str(template or '')

    def _manager_notification_texts(self, event_key: str, cfg_override=None, variables=None, fallback_title='', fallback_message=''):
        cfg = dict(self.config)
        if isinstance(cfg_override, dict):
            cfg.update(cfg_override)
        mapping = self._manager_notification_templates().get(event_key)
        base_values = {
            'server_name': str(cfg.get('server_name') or 'KarmaWorld'),
            'delay': '',
            'backup_name': '',
        }
        if isinstance(variables, dict):
            for key, value in variables.items():
                base_values[str(key)] = '' if value is None else str(value)
        if not mapping:
            return self._format_manager_template(fallback_title, base_values), self._format_manager_template(fallback_message, base_values)
        title_key, body_key, default_title, default_body = mapping
        title_tpl = str(cfg.get(title_key) or fallback_title or default_title)
        body_tpl = str(cfg.get(body_key) or fallback_message or default_body)
        return self._format_manager_template(title_tpl, base_values), self._format_manager_template(body_tpl, base_values)

    def notify_manager_discord(self, event_key: str, title: str, message: str, variables=None):
        if not self._manager_notify_allowed(event_key):
            return False
        final_title, final_message = self._manager_notification_texts(event_key, None, variables, title, message)
        payload = self._manager_embed_payload(final_title, final_message)
        webhook = str(self.config.get('manager_notify_webhook') or '').strip()
        if webhook:
            try:
                self._post_json(webhook, payload)
                return True
            except Exception as exc:
                self.log(f'Error enviando aviso Discord por webhook: {exc}')
        token = str(self.config.get('manager_notify_bot_token') or '').strip()
        channel_id = str(self.config.get('manager_notify_channel_id') or '').strip()
        if token and channel_id:
            try:
                self._post_json(
                    f'https://discord.com/api/v10/channels/{channel_id}/messages',
                    payload,
                    headers={'Authorization': f'Bot {token}'}
                )
                return True
            except Exception as exc:
                self.log(f'Error enviando aviso Discord por bot: {exc}')
        return False


    def test_manager_discord(self, cfg_override=None):
        cfg = dict(self.config)
        if isinstance(cfg_override, dict):
            cfg.update(cfg_override)
        title, message = self._manager_notification_texts('test', cfg)
        payload = self._manager_embed_payload(title, message, cfg)
        webhook = str(cfg.get('manager_notify_webhook') or '').strip()
        token = str(cfg.get('manager_notify_bot_token') or '').strip()
        channel_id = str(cfg.get('manager_notify_channel_id') or '').strip()
        if webhook:
            try:
                self._post_json(webhook, payload)
                return True, 'Prueba enviada por webhook.'
            except urllib.error.HTTPError as exc:
                body = ''
                try:
                    body = exc.read().decode('utf-8', errors='ignore')
                except Exception:
                    pass
                msg = f'Webhook rechazado: HTTP {exc.code}'
                if '1010' in body:
                    msg += '. Discord/Cloudflare lo bloqueó o el webhook ya no es válido.'
                return False, msg
            except Exception as exc:
                return False, f'No se pudo enviar por webhook: {exc}'
        if token and channel_id:
            try:
                self._post_json(
                    f'https://discord.com/api/v10/channels/{channel_id}/messages',
                    payload,
                    headers={'Authorization': f'Bot {token}'}
                )
                return True, 'Prueba enviada por bot.'
            except urllib.error.HTTPError as exc:
                body = ''
                try:
                    body = exc.read().decode('utf-8', errors='ignore')
                except Exception:
                    pass
                msg = f'Bot/canal rechazados: HTTP {exc.code}'
                if '50013' in body:
                    msg += '. Al bot le faltan permisos para enviar mensajes.'
                elif '50001' in body:
                    msg += '. El bot no puede ver ese canal.'
                elif '10003' in body:
                    msg += '. Channel ID no válido.'
                elif '0' in body and '401' in msg:
                    msg += '. Token no válido.'
                return False, msg
            except Exception as exc:
                return False, f'No se pudo enviar por bot: {exc}'
        return False, 'Rellena un webhook o un bot token + channel ID.'

    def _read_process_output(self, proc: subprocess.Popen):
        try:
            if proc.stdout is None:
                return
            for raw in iter(proc.stdout.readline, ''):
                if not raw:
                    break
                with self.lock:
                    self.server_last_output_at = time.time()
                self.log(raw.rstrip())
        except Exception as exc:
            self.log(f"Error leyendo salida del servidor: {exc}")

    def _build_start_command(self, exe_path: Path):
        if os.name == 'nt' and exe_path.suffix.lower() in {'.bat', '.cmd'}:
            return ['cmd', '/c', str(exe_path)]
        return [str(exe_path)]

    def start_server(self, mark_desired=True):
        with self.lock:
            if self.server_process and self.server_process.poll() is None:
                return False, 'El servidor ya está arrancado.'
            exe = (self.config.get('executable_path') or '').strip()
            if not exe:
                return False, 'Selecciona primero el ejecutable o BAT en Ajustes.'
            exe_path = Path(exe)
            if not exe_path.exists():
                return False, f'No existe el ejecutable/BAT: {exe}'
            workdir = (self.config.get('working_directory') or self.config.get('server_folder') or '').strip() or str(exe_path.parent)
            work_path = Path(workdir)
            if not work_path.exists():
                return False, f'No existe la carpeta de trabajo: {workdir}'
            try:
                stale_pid = read_bot_pid_file()
                if stale_pid and not is_pid_running(stale_pid):
                    self._remove_bot_pid_dynamic()
                popen_hidden_kwargs = self._windows_hidden_popen_kwargs()
                cmd = self._build_start_command(exe_path)
                proc = subprocess.Popen(
                    cmd,
                    cwd=str(work_path),
                    stdout=subprocess.PIPE,
                    stderr=subprocess.STDOUT,
                    stdin=subprocess.PIPE,
                    text=True,
                    bufsize=1,
                    shell=False,
                    **popen_hidden_kwargs
                )
                self.server_process = proc
                self.server_started_at = datetime.now().isoformat(timespec='seconds')
                self.server_started_monotonic = time.time()
                self.server_last_output_at = self.server_started_monotonic
                self.server_last_health_check_at = 0.0
                self.server_last_telnet_ok_at = 0.0
                self.server_watchdog_fail_count = 0
                self.server_watchdog_last_reason = ''
                self.server_pid = proc.pid
                self.auto_restart_scheduled_at = None
                self.auto_restart_last_exit_pid = None
                if mark_desired:
                    self.desired_server_running = True
                self.log(f"Servidor arrancado con PID {proc.pid}: {' '.join(cmd)}")
                try:
                    self.notify_manager_discord('start', 'Servidor arrancado', f"{self.config.get('server_name','KarmaWorld')} iniciado correctamente.", {'server_name': self.config.get('server_name','KarmaWorld')})
                except Exception:
                    pass
                threading.Thread(target=self._read_process_output, args=(proc,), daemon=True).start()
                bot_folder = str(self.config.get('external_bot_folder') or '').strip()
                bot_entry = str(self.config.get('external_bot_entry') or '').strip()
                if bot_entry or bot_folder:
                    try:
                        ok_bot, msg_bot = self.start_bot()
                        if not ok_bot and 'ya está arrancado' not in str(msg_bot):
                            self.log(f'No se pudo arrancar el bot automáticamente: {msg_bot}')
                    except Exception as exc:
                        self.log(f'No se pudo arrancar el bot automáticamente: {exc}')
                return True, 'Servidor arrancado.'
            except Exception as exc:
                self.last_error = traceback.format_exc()
                self.log(f"Error al arrancar el servidor: {exc}")
                return False, f'Error al arrancar: {exc}'

    def _stop_process_direct(self, notify_manual=False):
        proc = self.server_process
        pid = self.server_pid or (proc.pid if proc else None)
        exe_path = str(self.config.get('executable_path') or '').strip()
        candidate_names = []
        base = Path(exe_path).name if exe_path else ''
        if base.lower().endswith(('.exe', '.bat', '.cmd')):
            candidate_names.append(base)
        for extra in ['7DaysToDieServer.exe', '7DaysToDieServer.x86_64.exe', 'startdedicated.exe', 'startdedicated.bat']:
            if extra not in candidate_names:
                candidate_names.append(extra)
        if not proc and not pid:
            # Último intento: matar por nombre típico aunque el BAT ya haya soltado el proceso real.
            if os.name == 'nt':
                killed = False
                for name in candidate_names:
                    try:
                        result = subprocess.run(['taskkill', '/IM', name, '/T', '/F'], stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, timeout=20, **self._windows_hidden_run_kwargs())
                        if result.returncode in (0, 128, 255):
                            killed = True
                    except Exception:
                        pass
                if killed:
                    self.auto_restart_scheduled_at = None
                    self.log('Proceso del servidor detenido por nombre de ejecutable desde el manager.')
                    self.server_process = None
                    self.server_pid = None
                    return True, 'Proceso del servidor detenido.'
            return False, 'No hay proceso de servidor controlado por el manager.'
        try:
            killed_any = False
            if os.name == 'nt' and pid:
                result = subprocess.run(
                    ['taskkill', '/PID', str(pid), '/T', '/F'],
                    stdout=subprocess.PIPE,
                    stderr=subprocess.STDOUT,
                    text=True,
                    timeout=20,
                    **self._windows_hidden_run_kwargs(),
                )
                if result.returncode in (0, 128, 255):
                    killed_any = True
                # Si el BAT soltó el proceso real, mata también por nombre típico.
                for name in candidate_names:
                    try:
                        result_name = subprocess.run(['taskkill', '/IM', name, '/T', '/F'], stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, timeout=20, **self._windows_hidden_run_kwargs())
                        if result_name.returncode in (0, 128, 255):
                            killed_any = True
                    except Exception:
                        pass
                if not killed_any:
                    raise RuntimeError(result.stdout.strip() or f'taskkill devolvió {result.returncode}')
            else:
                if proc and proc.poll() is None:
                    proc.send_signal(signal.SIGTERM)
                    try:
                        proc.wait(timeout=15)
                    except subprocess.TimeoutExpired:
                        proc.kill()
                    killed_any = True
                elif pid:
                    os.kill(pid, signal.SIGTERM)
                    killed_any = True
            if proc:
                try:
                    proc.wait(timeout=2)
                except Exception:
                    pass
            self.auto_restart_scheduled_at = None
            self.log('Proceso del servidor detenido desde el manager.')
            if notify_manual:
                try:
                    self.notify_manager_discord('stop', 'Servidor detenido', f"{self.config.get('server_name','KarmaWorld')} se ha detenido manualmente desde el manager.", {'server_name': self.config.get('server_name','KarmaWorld')})
                except Exception:
                    pass
            return True, 'Proceso del servidor detenido.'
        except Exception as exc:
            self.log(f"Error al detener proceso: {exc}")
            return False, f'Error al detener proceso: {exc}'
        finally:
            self.server_process = None
            self.server_pid = None
            self.server_started_monotonic = 0.0
            self.server_last_health_check_at = 0.0
            self.server_last_telnet_ok_at = 0.0
            self.server_watchdog_fail_count = 0

    def stop_server(self):
        self.desired_server_running = False
        self.auto_restart_scheduled_at = None
        return self._stop_process_direct(notify_manual=True)

    def restart_server(self):
        self.desired_server_running = False
        ok, msg = self._stop_process_direct()
        if ok:
            time.sleep(2)
        return self.start_server(mark_desired=True)

    def prune_old_backups(self, days=None):
        try:
            keep_days = int(self.config.get('backup_retention_days') if days is None else days)
        except Exception:
            keep_days = 1
        if keep_days <= 0:
            return 0
        backup_root = Path((self.config.get('backup_folder') or '').strip() or (DATA_DIR / 'backups'))
        if not backup_root.exists():
            return 0
        cutoff = time.time() - (keep_days * 86400)
        removed = 0
        for file in backup_root.glob('*.zip'):
            try:
                if file.stat().st_mtime < cutoff:
                    file.unlink(missing_ok=True)
                    removed += 1
            except Exception:
                pass
        return removed

    def delete_backup(self, backup_path: str):
        backup_file = Path((backup_path or '').strip())
        if not backup_file.exists() or backup_file.suffix.lower() != '.zip':
            return False, 'El backup indicado no existe.'
        try:
            backup_file.unlink()
            self.log(f'Backup borrado: {backup_file}')
            return True, f'Backup borrado: {backup_file.name}'
        except Exception as exc:
            self.log(f'Error borrando backup: {exc}')
            return False, f'Error borrando backup: {exc}'

    def create_backup(self):
        server_folder = Path((self.config.get('server_folder') or '').strip())
        if not server_folder.exists():
            return False, 'La carpeta del servidor no existe.'
        backup_root = Path((self.config.get('backup_folder') or '').strip() or (DATA_DIR / 'backups'))
        backup_root.mkdir(parents=True, exist_ok=True)
        self.prune_old_backups()
        stamp = datetime.now().strftime('%Y%m%d_%H%M%S')
        zip_base = backup_root / f"{self.config.get('server_name','KarmaWorld')}_{stamp}"
        try:
            output = shutil.make_archive(str(zip_base), 'zip', root_dir=str(server_folder))
            self.prune_old_backups()
            self.log(f"Backup creado: {output}")
            try:
                self.notify_manager_discord('backup', 'Backup creado', f"Se ha creado un backup del servidor: {Path(output).name}", {'server_name': self.config.get('server_name','KarmaWorld'), 'backup_name': Path(output).name})
            except Exception:
                pass
            return True, output
        except Exception as exc:
            self.log(f"Error creando backup: {exc}")
            return False, f'Error creando backup: {exc}'

    def read_serverconfig(self):
        xml_path = self.resolve_serverconfig_path()
        if not xml_path.exists():
            return False, f'No existe el XML: {xml_path}'
        return True, xml_path.read_text(encoding='utf-8', errors='ignore')

    def save_serverconfig(self, content: str):
        xml_path = self.resolve_serverconfig_path()
        try:
            xml_path.parent.mkdir(parents=True, exist_ok=True)
            xml_path.write_text(content, encoding='utf-8')
            self.config['xml_path'] = str(xml_path)
            safe_write_json(CONFIG_PATH, self.config)
            self.log(f"XML guardado: {xml_path}")
            try:
                self.sync_telnet_password_from_xml()
            except Exception:
                pass
            return True, 'XML guardado.'
        except Exception as exc:
            return False, f'Error guardando XML: {exc}'

    def read_serverconfig_structured(self):
        ok, content = self.read_serverconfig()
        if not ok:
            return False, content
        lines = content.splitlines()
        items = []
        last_comment = ''
        for line in lines:
            stripped = line.strip()
            if stripped.startswith('<!--') and stripped.endswith('-->'):
                last_comment = stripped
                continue
            match = PROPERTY_RE.search(line)
            if not match:
                continue
            desc = line[match.end():].strip() or last_comment
            items.append({
                'name': match.group(1),
                'value': match.group(2),
                'description': desc,
            })
            last_comment = ''
        return True, items

    def save_serverconfig_structured(self, items):
        ok, content = self.read_serverconfig()
        if not ok:
            return False, content
        updated = content
        changed = 0
        for item in items:
            name = str(item.get('name', '')).strip()
            if not name:
                continue
            value = xml_escape(str(item.get('value', '')), {'"': '&quot;'})
            pattern = re.compile(r'(<property\s+name="%s"\s+value=")([^"]*)("\s*/>)' % re.escape(name))
            updated, count = pattern.subn(r'\1%s\3' % value, updated, count=1)
            changed += count
        if not changed:
            return False, 'No se encontraron propiedades para actualizar.'
        return self.save_serverconfig(updated)

    def _task_signature(self, task):
        return str(task.get('id') or f"{task.get('type','restart')}|{task.get('name','')}|{task.get('cron','')}")

    def _normalize_interval_unit(self, value):
        unit = str(value or 'minutes').strip().lower()
        mapping = {
            'm': 'minutes', 'min': 'minutes', 'mins': 'minutes', 'minute': 'minutes', 'minutes': 'minutes',
            'minuto': 'minutes', 'minutos': 'minutes',
            'h': 'hours', 'hr': 'hours', 'hrs': 'hours', 'hour': 'hours', 'hours': 'hours',
            'hora': 'hours', 'horas': 'hours',
            'd': 'days', 'day': 'days', 'days': 'days', 'dia': 'days', 'dias': 'days', 'día': 'days', 'días': 'days',
        }
        return mapping.get(unit, 'minutes')

    def _derive_command_interval(self, cron_expr):
        parts = str(cron_expr or '').split()
        if len(parts) != 5:
            return None, None
        minute, hour, day, month, weekday = parts
        if hour == '*' and day == '*' and month == '*' and weekday == '*':
            if minute == '*':
                return 1, 'minutes'
            if minute.startswith('*/') and minute[2:].isdigit():
                return max(1, int(minute[2:])), 'minutes'
        if minute == '0' and day == '*' and month == '*' and weekday == '*':
            if hour == '*':
                return 1, 'hours'
            if hour.startswith('*/') and hour[2:].isdigit():
                return max(1, int(hour[2:])), 'hours'
        if minute == '0' and hour == '0' and month == '*' and weekday == '*':
            if day == '*':
                return 1, 'days'
            if day.startswith('*/') and day[2:].isdigit():
                return max(1, int(day[2:])), 'days'
        return None, None

    def _interval_to_cron(self, value, unit):
        try:
            amount = max(1, int(value))
        except Exception:
            amount = 1
        unit = self._normalize_interval_unit(unit)
        if unit == 'minutes':
            if amount == 1:
                return '* * * * *'
            if amount <= 59:
                return f'*/{amount} * * * *'
            if amount % 60 == 0:
                hours = max(1, amount // 60)
                return '0 * * * *' if hours == 1 else f'0 */{hours} * * *'
            return ''
        if unit == 'hours':
            return '0 * * * *' if amount == 1 else f'0 */{amount} * * *'
        if unit == 'days':
            return '0 0 * * *' if amount == 1 else f'0 0 */{amount} * *'
        return ''

    def _command_interval_seconds(self, task):
        try:
            value = int(task.get('interval_value') or 0)
        except Exception:
            value = 0
        if value <= 0:
            return None
        unit = self._normalize_interval_unit(task.get('interval_unit'))
        factor = 60 if unit == 'minutes' else (3600 if unit == 'hours' else 86400)
        return value * factor

    def _normalize_task(self, task, default_index=0):
        if not isinstance(task, dict):
            task = {}
        name = str(task.get('name') or '').strip()
        cron = str(task.get('cron') or '').strip()
        task_type = str(task.get('type') or '').strip().lower()
        if task_type not in ('restart', 'backup', 'command'):
            lowered = name.lower()
            if 'backup' in lowered or 'copia' in lowered:
                task_type = 'backup'
            elif 'comando' in lowered or 'automat' in lowered or 'command' in lowered:
                task_type = 'command'
            else:
                task_type = 'restart'
        if not name:
            base_name = {'backup': 'Backup', 'command': 'Automatización', 'restart': 'Reinicio'}[task_type]
            name = f"{base_name} {default_index + 1}"
        command = str(task.get('command') or '').strip()
        if task_type == 'command' and not command:
            command = 'say "Mensaje automático"'
        default_hour = 12 if task_type == 'backup' else 6
        default_minute = 0
        try:
            time_hour = int(task.get('time_hour')) if task.get('time_hour') not in (None, '') else None
        except Exception:
            time_hour = None
        try:
            time_minute = int(task.get('time_minute')) if task.get('time_minute') not in (None, '') else None
        except Exception:
            time_minute = None
        if time_hour is None or time_minute is None:
            derived_hour, derived_minute = self._derive_exact_time_from_cron(cron, default_hour, default_minute)
            if time_hour is None:
                time_hour = derived_hour
            if time_minute is None:
                time_minute = derived_minute
        time_hour = max(0, min(23, int(time_hour)))
        time_minute = max(0, min(59, int(time_minute)))
        repeat_mode = self._normalize_repeat_mode(task.get('repeat_mode'))
        cron = f"{time_minute} {time_hour} * * *"
        result = {
            'id': str(task.get('id') or f'task_{default_index}_{abs(hash((name, cron, task_type, command))) % 1000000}'),
            'name': name,
            'type': task_type,
            'cron': cron,
            'command': command,
            'active': bool(task.get('active', True)),
            'time_hour': time_hour,
            'time_minute': time_minute,
            'repeat_mode': repeat_mode,
        }
        return result

    def normalize_tasks(self, items):
        normalized = [self._normalize_task(item, i) for i, item in enumerate(items or [])]
        return normalized

    def _cron_field_matches(self, field: str, value: int, min_value: int, max_value: int) -> bool:
        field = str(field or '*').strip()
        if field == '*':
            return True
        for part in field.split(','):
            part = part.strip()
            if not part:
                continue
            if '/' in part:
                base, step_text = part.split('/', 1)
                try:
                    step = int(step_text)
                except Exception:
                    continue
                if step <= 0:
                    continue
                if base in ('', '*'):
                    if (value - min_value) % step == 0:
                        return True
                    continue
                if '-' in base:
                    try:
                        start, end = [int(x) for x in base.split('-', 1)]
                    except Exception:
                        continue
                    if start <= value <= end and (value - start) % step == 0:
                        return True
                    continue
                try:
                    start = int(base)
                except Exception:
                    continue
                if start <= value <= max_value and (value - start) % step == 0:
                    return True
                continue
            if '-' in part:
                try:
                    start, end = [int(x) for x in part.split('-', 1)]
                except Exception:
                    continue
                if start <= value <= end:
                    return True
                continue
            try:
                if int(part) == value:
                    return True
            except Exception:
                continue
        return False

    def _cron_matches(self, expr: str, dt: datetime) -> bool:
        parts = str(expr or '').split()
        if len(parts) != 5:
            return False
        minute, hour, day, month, weekday = parts
        py_weekday = (dt.weekday() + 1) % 7
        return (
            self._cron_field_matches(minute, dt.minute, 0, 59) and
            self._cron_field_matches(hour, dt.hour, 0, 23) and
            self._cron_field_matches(day, dt.day, 1, 31) and
            self._cron_field_matches(month, dt.month, 1, 12) and
            self._cron_field_matches(weekday, py_weekday, 0, 7)
        )

    def run_scheduled_tasks(self):
        tasks = self.normalize_tasks(self.get_collection('tasks'))
        now = datetime.now()
        minute_key = now.strftime('%Y-%m-%d %H:%M')
        changed = False
        for task in tasks:
            if not task.get('active'):
                continue
            sig = self._task_signature(task)
            task_type = task.get('type', 'restart')
            try:
                hour = int(task.get('time_hour')) if task.get('time_hour') not in (None, '') else None
            except Exception:
                hour = None
            try:
                minute = int(task.get('time_minute')) if task.get('time_minute') not in (None, '') else None
            except Exception:
                minute = None
            if hour is None or minute is None:
                hour, minute = self._derive_exact_time_from_cron(task.get('cron', ''), 6, 0)
            hour = max(0, min(23, int(hour)))
            minute = max(0, min(59, int(minute)))
            if now.hour != hour or now.minute != minute:
                continue
            if self.task_last_run.get(sig) == minute_key:
                continue
            self.task_last_run[sig] = minute_key
            self.log(f"Tarea programada detectada ({task.get('name')}): tipo={task_type} hora={hour:02d}:{minute:02d}")
            if task_type == 'backup':
                ok, msg = self.create_backup()
                self.log(f"Tarea programada ({task.get('name')}): {msg}")
            elif task_type == 'command':
                command = str(task.get('command') or '').strip()
                if not command:
                    ok, msg = False, 'Sin comando configurado.'
                else:
                    self.log(f"Automatización ({task.get('name')}): enviando comando -> {command}")
                    ok, msg = self.send_telnet_command(command)
                self.log(f"Automatización ({task.get('name')}): {msg}")
            else:
                if self.server_process and self.server_process.poll() is None:
                    ok, msg = self.restart_server()
                else:
                    ok, msg = self.start_server()
                self.log(f"Reinicio programado ({task.get('name')}): {msg}")
            if self._normalize_repeat_mode(task.get('repeat_mode')) == 'once':
                task['active'] = False
                changed = True
        if changed:
            self.save_collection('tasks', tasks)

    def list_backups(self, limit: int = 20):
        self.prune_old_backups()
        backup_root = Path((self.config.get('backup_folder') or '').strip() or (DATA_DIR / 'backups'))
        if not backup_root.exists():
            return []
        items = []
        for file in backup_root.glob('*.zip'):
            try:
                stat = file.stat()
                items.append({
                    'name': file.name,
                    'path': str(file),
                    'size': stat.st_size,
                    'modified': datetime.fromtimestamp(stat.st_mtime).strftime('%Y-%m-%d %H:%M:%S'),
                })
            except Exception:
                continue
        items.sort(key=lambda x: x['modified'], reverse=True)
        return items[:limit]

    def restore_backup(self, backup_path: str):
        backup_file = Path((backup_path or '').strip())
        if not backup_file.exists() or backup_file.suffix.lower() != '.zip':
            return False, 'El backup indicado no existe.'
        server_folder = Path((self.config.get('server_folder') or '').strip())
        if not server_folder.exists():
            return False, 'La carpeta del servidor no existe.'
        if self.server_process and self.server_process.poll() is None:
            return False, 'Detén el servidor antes de restaurar un backup.'
        backup_root = Path((self.config.get('backup_folder') or '').strip() or str(backup_file.parent))
        backup_root.mkdir(parents=True, exist_ok=True)
        stamp = datetime.now().strftime('%Y%m%d_%H%M%S')
        safe_name = backup_root / f"PRE_RESTORE_{self.config.get('server_name','KarmaWorld')}_{stamp}"
        try:
            with zipfile.ZipFile(backup_file, 'r') as zf:
                for member in zf.namelist():
                    member_path = Path(member)
                    if member_path.is_absolute() or '..' in member_path.parts:
                        return False, 'El ZIP del backup no es válido para restaurar.'
                pre_restore_zip = shutil.make_archive(str(safe_name), 'zip', root_dir=str(server_folder))
                zf.extractall(server_folder)
            self.log(f'Restaurado backup: {backup_file} · copia previa: {pre_restore_zip}')
            return True, f'Backup restaurado: {backup_file.name}. Copia previa creada: {Path(pre_restore_zip).name}'
        except Exception as exc:
            self.log(f'Error restaurando backup: {exc}')
            return False, f'Error restaurando backup: {exc}'

    def sync_permissions_to_bot(self, items):
        try:
            conf = safe_load_json(BOT_CONF_PATH, self._bot_conf_default())
            role_names = [str((row or {}).get('name') or '').strip() for row in (items or [])]
            role_names = [x for x in role_names if x]
            conf['ADMIN_ALLOWED_ROLE_NAMES'] = role_names
            conf['MASTER_BUTTON_ROLE_NAMES'] = role_names
            safe_write_json(BOT_CONF_PATH, conf)
            self.log('Permisos sincronizados con roles del bot.')
            return True, 'Permisos sincronizados con el bot.'
        except Exception as exc:
            self.log(f'Error sincronizando permisos: {exc}')
            return False, f'Error sincronizando permisos: {exc}'

    def sync_store_to_bot(self, items):
        try:
            bot_db = BOT_DIR / 'bot.db'
            if not bot_db.exists():
                return False, 'bot.db no existe todavía.'
            conn = sqlite3.connect(bot_db)
            cur = conn.cursor()
            cur.execute("CREATE TABLE IF NOT EXISTS shop_items(id INTEGER PRIMARY KEY, category TEXT, name TEXT, item_code TEXT, quantity INTEGER, price INTEGER, created_at TEXT, updated_at TEXT)")
            cur.execute('DELETE FROM shop_items')
            now = datetime.utcnow().isoformat(timespec='seconds')
            categories = {}
            next_id = 1
            for raw in items or []:
                row = dict(raw or {})
                name = str(row.get('name') or '').strip()
                if not name:
                    continue
                category = str(row.get('category') or 'General').strip() or 'General'
                command = str(row.get('command') or row.get('item_code') or '').strip()
                item_code = str(row.get('item_code') or '').strip()
                quantity = row.get('quantity') or 1
                if not item_code:
                    tokens = [t for t in command.replace('"','').split() if t]
                    low0 = tokens[0].lower() if tokens else ''
                    if low0 in {'giveself', 'give'} and len(tokens) >= 3:
                        item_code = tokens[1]
                        quantity = tokens[2]
                    elif low0 == 'st-giveitem' and len(tokens) >= 4:
                        item_code = tokens[2]
                        quantity = tokens[3]
                    elif tokens:
                        item_code = tokens[0]
                        if len(tokens) >= 2:
                            quantity = tokens[1]
                try:
                    quantity = int(float(quantity))
                except Exception:
                    quantity = 1
                try:
                    price = int(float(row.get('price') or 0))
                except Exception:
                    price = 0
                if not item_code:
                    item_code = name.replace(' ', '_')
                cur.execute('INSERT INTO shop_items(id, category, name, item_code, quantity, price, created_at, updated_at) VALUES(?,?,?,?,?,?,?,?)', (next_id, category, name, item_code, quantity, price, now, now))
                categories.setdefault(category, []).append({'name': name, 'item_code': item_code, 'quantity': quantity, 'price': price})
                next_id += 1
            conn.commit()
            conn.close()
            cfg = safe_load_json(BOT_CONFIG_PATH, self._bot_config_default())
            cfg['shop_categories'] = categories
            safe_write_json(BOT_CONFIG_PATH, cfg)
            self.log('Tienda sincronizada con el bot.')
            return True, 'Tienda sincronizada con el bot.'
        except Exception as exc:
            self.log(f'Error sincronizando tienda: {exc}')
            return False, f'Error sincronizando tienda: {exc}'

    def get_collection(self, name: str):
        path = self.data_files[name]
        items = safe_load_json(path, [])
        if name == 'tasks':
            normalized = self.normalize_tasks(items)
            if normalized != items:
                safe_write_json(path, normalized)
            return normalized
        if name == 'store':
            normalized = self.normalize_store_collection(items)
            if normalized != items:
                safe_write_json(path, normalized)
            return normalized
        if name == 'permissions':
            normalized = self.normalize_permissions_collection(items)
            if normalized != items:
                safe_write_json(path, normalized)
            return normalized
        return items

    def save_collection(self, name: str, items):
        if name == 'tasks':
            items = self.normalize_tasks(items)
        elif name == 'store':
            items = self.normalize_store_collection(items)
        elif name == 'permissions':
            items = self.normalize_permissions_collection(items)
        safe_write_json(self.data_files[name], items)


    def export_manager_config(self, target_path: str = ''):
        EXPORTS_DIR.mkdir(parents=True, exist_ok=True)
        stamp = datetime.now().strftime('%Y-%m-%d-%H-%M-%S')
        default_name = f'KarmaWorld_config_{stamp}.zip'
        raw_target = (target_path or '').strip()
        if raw_target:
            requested = Path(raw_target)
            if requested.suffix.lower() == '.zip':
                target = requested
            else:
                target = requested / default_name
        else:
            target = EXPORTS_DIR / default_name
        files = [
            CONFIG_PATH,
            DATA_DIR / 'permissions.json',
            DATA_DIR / 'teleports.json',
            DATA_DIR / 'store.json',
            DATA_DIR / 'vip.json',
            DATA_DIR / 'tasks.json',
            DATA_DIR / 'serverconfig.xml',
            ASSETS_DIR / 'splash.png',
            ASSETS_DIR / 'logo-title.png',
            ASSETS_DIR / 'background.png',
        ]
        try:
            target.parent.mkdir(parents=True, exist_ok=True)
            with zipfile.ZipFile(target, 'w', compression=zipfile.ZIP_DEFLATED) as zf:
                for file_path in files:
                    if file_path.exists() and file_path.is_file():
                        zf.write(file_path, arcname=str(file_path.relative_to(APP_HOME)).replace('\\', '/'))
                manifest = {
                    'exported_at': datetime.now().isoformat(timespec='seconds'),
                    'type': 'karmaworld_manager_config',
                    'version': 1,
                }
                zf.writestr('manifest.json', json.dumps(manifest, ensure_ascii=False, indent=2))
            self.log(f'Configuración exportada: {target}')
            try:
                shown = str(target.relative_to(APP_HOME)).replace('\\', '/')
            except Exception:
                shown = str(target)
            return True, f'Configuración exportada en {shown}'
        except Exception as exc:
            self.log(f'Error exportando configuración: {exc}')
            return False, f'Error exportando configuración: {exc}'

    def import_manager_config(self, source_path: str):
        source = Path((source_path or '').strip())
        if not source.exists() or source.suffix.lower() != '.zip':
            return False, 'El archivo de configuración no existe o no es un ZIP válido.'
        allowed = {
            'config/config.json',
            'data/permissions.json',
            'data/teleports.json',
            'data/store.json',
            'data/vip.json',
            'data/tasks.json',
            'data/serverconfig.xml',
            'assets/splash.png',
            'assets/logo-title.png',
            'assets/background.png',
        }
        try:
            with zipfile.ZipFile(source, 'r') as zf:
                names = set(zf.namelist())
                if 'manifest.json' not in names and 'config/config.json' not in names:
                    return False, 'El ZIP no parece una exportación válida del manager.'
                for name in allowed:
                    if name in names:
                        dest = APP_HOME / name
                        dest.parent.mkdir(parents=True, exist_ok=True)
                        with zf.open(name, 'r') as src, open(dest, 'wb') as out:
                            shutil.copyfileobj(src, out)
            self.config = safe_load_json(CONFIG_PATH, self.default_config())
            self.sync_telnet_password_from_xml()
            self.log(f'Configuración importada: {source}')
            return True, 'Configuración importada correctamente. Revisa rutas si esta instalación está en otra ubicación.'
        except Exception as exc:
            self.log(f'Error importando configuración: {exc}')
            return False, f'Error importando configuración: {exc}'

def _format_size_gb(self, value):
    try:
        return round(float(value) / (1024 ** 3), 2)
    except Exception:
        return None

def _safe_disk_usage(self, path: Path):
    try:
        usage = shutil.disk_usage(str(path))
        return {
            'used_gb': self._format_size_gb(usage.used),
            'total_gb': self._format_size_gb(usage.total),
            'free_gb': self._format_size_gb(usage.free),
            'percent': round((float(usage.used) / float(usage.total)) * 100.0, 1) if usage.total else None,
        }
    except Exception:
        return {'used_gb': None, 'total_gb': None, 'free_gb': None, 'percent': None}

def _safe_windows_memory(self):
    if os.name != 'nt':
        return {'used_gb': None, 'total_gb': None, 'percent': None}
    try:
        class MEMORYSTATUSEX(ctypes.Structure):
            _fields_ = [
                ('dwLength', ctypes.c_ulong),
                ('dwMemoryLoad', ctypes.c_ulong),
                ('ullTotalPhys', ctypes.c_ulonglong),
                ('ullAvailPhys', ctypes.c_ulonglong),
                ('ullTotalPageFile', ctypes.c_ulonglong),
                ('ullAvailPageFile', ctypes.c_ulonglong),
                ('ullTotalVirtual', ctypes.c_ulonglong),
                ('ullAvailVirtual', ctypes.c_ulonglong),
                ('ullAvailExtendedVirtual', ctypes.c_ulonglong),
            ]
        stat = MEMORYSTATUSEX()
        stat.dwLength = ctypes.sizeof(MEMORYSTATUSEX)
        if ctypes.windll.kernel32.GlobalMemoryStatusEx(ctypes.byref(stat)):
            used = max(0, int(stat.ullTotalPhys) - int(stat.ullAvailPhys))
            total = int(stat.ullTotalPhys)
            return {
                'used_gb': self._format_size_gb(used),
                'total_gb': self._format_size_gb(total),
                'percent': round((float(used) / float(total)) * 100.0, 1) if total else None,
            }
    except Exception:
        pass
    return {'used_gb': None, 'total_gb': None, 'percent': None}

def _safe_process_memory(self, pid_value):
    try:
        pid_int = int(pid_value or 0)
    except Exception:
        return {'rss_gb': None}
    if pid_int <= 0:
        return {'rss_gb': None}
    if psutil is not None:
        try:
            proc = psutil.Process(pid_int)
            return {'rss_gb': self._format_size_gb(proc.memory_info().rss)}
        except Exception:
            return {'rss_gb': None}
    return {'rss_gb': None}

def performance_snapshot(self):
    server_folder = Path((self.config.get('server_folder') or '').strip() or str(APP_HOME))
    if not server_folder.exists():
        server_folder = APP_HOME
    host_cpu = None
    host_memory = {'used_gb': None, 'total_gb': None, 'percent': None}
    manager_memory = {'rss_gb': None}
    server_memory = {'rss_gb': None}
    if psutil is not None:
        try:
            host_cpu = round(float(psutil.cpu_percent(interval=0.05)), 1)
        except Exception:
            host_cpu = None
        try:
            vm = psutil.virtual_memory()
            host_memory = {
                'used_gb': self._format_size_gb(int(vm.total) - int(vm.available)),
                'total_gb': self._format_size_gb(vm.total),
                'percent': round(float(vm.percent), 1),
            }
        except Exception:
            host_memory = self._safe_windows_memory()
        try:
            manager_memory = self._safe_process_memory(os.getpid())
        except Exception:
            manager_memory = {'rss_gb': None}
    else:
        host_memory = self._safe_windows_memory()
    if self.server_pid and is_pid_running(self.server_pid):
        server_memory = self._safe_process_memory(self.server_pid)
    manager_uptime = max(0, int(time.monotonic() - float(self.manager_started_monotonic or time.monotonic())))
    server_uptime = max(0, int(time.monotonic() - float(self.server_started_monotonic or 0.0))) if self.server_started_monotonic else None
    return {
        'host_cpu_percent': host_cpu,
        'host_memory': host_memory,
        'disk': self._safe_disk_usage(server_folder),
        'manager_uptime_seconds': manager_uptime,
        'server_uptime_seconds': server_uptime,
        'manager_memory': manager_memory,
        'server_memory': server_memory,
        'psutil_available': bool(psutil is not None),
    }

def get_latest_inventory_snapshot(self, player=None, key=''):
    store = self.load_player_history_store()
    _, record = self._find_player_record(store, player=player, key=key)
    if not isinstance(record, dict):
        return False, None
    snapshots = list(record.get('inventory_snapshots') or [])
    if not snapshots:
        return False, None
    latest = dict(snapshots[-1])
    latest['snapshot_only'] = True
    latest['offline_snapshot'] = not bool(record.get('online'))
    latest['player'] = latest.get('player') or {
        'name': record.get('primary_name') or '',
        'steamid': (record.get('steamids') or [''])[0],
        'eosid': (record.get('eosids') or [''])[0],
        'entityid': (record.get('entityids') or [''])[0],
        'slot': (record.get('slots') or [''])[0],
    }
    return True, latest

    def status(self):
        proc_running = bool(self.server_process and self.server_process.poll() is None)
        bot_running = bool(self.bot_process and self.bot_process.poll() is None)
        if not bot_running:
            pid_file_pid = self._read_bot_pid_dynamic()
            if pid_file_pid and is_pid_running(pid_file_pid):
                bot_running = True
                self.bot_pid = pid_file_pid
                if not self.bot_started_at:
                    self.bot_started_at = datetime.now().isoformat(timespec='seconds')
            elif pid_file_pid:
                self._remove_bot_pid_dynamic()
        return {
            'config': self.config,
            'running': proc_running,
            'bot_running': bot_running,
            'bot_pid': self.bot_pid if bot_running else None,
            'bot_started_at': self.bot_started_at if bot_running else None,
            'bot_config': self.load_bot_config(),
            'pid': self.server_pid if proc_running else None,
            'started_at': self.server_started_at if proc_running else None,
            'console_lines': list(self.console_lines)[-300:],
            'chat_lines': list(self.chat_lines)[-100:],
            'players_cache': self.players_cache,
            'last_players_refresh': self.last_players_refresh,
            'tasks': self.get_collection('tasks'),
            'last_error': self.last_error,
            'desired_server_running': self.desired_server_running,
            'auto_restart_scheduled_at': self.auto_restart_scheduled_at,
            'manager_paused': self.manager_paused,
            'manager_started_at': self.manager_started_at,
            'performance': self.performance_snapshot(),
        }

    def browse(self, mode='file', title='Selecciona', initial='', filters=None):
        try:
            import tkinter as tk
            from tkinter import filedialog
        except Exception as exc:
            return False, f'Tkinter no está disponible: {exc}'
        try:
            root = tk.Tk()
            root.withdraw()
            root.attributes('-topmost', True)
            if mode == 'folder':
                value = filedialog.askdirectory(title=title, initialdir=initial or None)
            else:
                filetypes = filters or [('Todos los archivos', '*.*')]
                value = filedialog.askopenfilename(title=title, initialdir=initial or None, filetypes=filetypes)
            root.destroy()
            if not value:
                return False, ''
            return True, value.replace('\\', '/')
        except Exception as exc:
            return False, f'No se pudo abrir el selector: {exc}'


    def _is_noisy_telnet_line(self, line: str):
        text = str(line or '').strip()
        if not text:
            return True
        lowered = text.lower()
        noisy_contains = (
            'telnet connection from:',
            'started thread',
            'telnetclient_',
            'vehiclemanager saving',
            'vehiclemanager saved',
            'please enter password',
            'press "exit" to end session',
        )
        if any(token in lowered for token in noisy_contains):
            return True
        if lowered.startswith('version:') or lowered.startswith('game version:'):
            return True
        if re.match(r'^\d{2}-\d{2}t\d{2}:\d{2}:\d{2}.*\binf\b', lowered):
            return True
        return False

    def _clean_telnet_response_text(self, response: str):
        lines = []
        for raw in str(response or '').splitlines():
            line = str(raw or '').strip()
            if not line or self._is_noisy_telnet_line(line):
                continue
            if line not in lines:
                lines.append(line)
        return '\n'.join(lines).strip()
    def _normalize_telnet_text(self, value: str):
        raw = str(value or '')
        if not raw:
            return ''
        raw = unicodedata.normalize('NFKC', raw)
        swaps = {
            '\u201c':'"', '\u201d':'"', '\u201e':'"', '\u00ab':'"', '\u00bb':'"',
            '\u2018':"'", '\u2019':"'", '\u201a':"'", '\u2032':"'",
            '\u2013':'-', '\u2014':'-', '\u2212':'-',
            '\u00a0':' ', '\t':' ', '\r':' ', '\n':' '
        }
        for src, dst in swaps.items():
            raw = raw.replace(src, dst)
        raw = re.sub(r'\s+', ' ', raw).strip()
        return raw

    def _ascii_fallback(self, value: str):
        text = str(value or '')
        if not text:
            return ''
        normalized = unicodedata.normalize('NFKD', text)
        normalized = ''.join(ch for ch in normalized if not unicodedata.combining(ch))
        normalized = normalized.replace('ñ', 'n').replace('Ñ', 'N')
        normalized = normalized.replace('“', '"').replace('”', '"').replace('‘', "'").replace('’', "'")
        return self._normalize_telnet_text(normalized)

    def _build_telnet_candidates(self, command: str):
        cleaned = self._normalize_telnet_text(command)
        if not cleaned:
            return []
        lower = cleaned.lower()
        if not lower.startswith('say '):
            return [cleaned]
        raw_message = cleaned[4:].strip()
        if not raw_message:
            return []
        quote = ''
        message = raw_message
        if len(raw_message) >= 2 and ((raw_message[0] == '"' and raw_message[-1] == '"') or (raw_message[0] == "'" and raw_message[-1] == "'")):
            quote = raw_message[0]
            message = raw_message[1:-1].strip()
        message = self._normalize_telnet_text(message)
        if not message:
            return []
        candidates = []
        if quote:
            candidates.append(f'say {quote}{message}{quote}')
        candidates.append(f'say {message}')
        ascii_message = self._ascii_fallback(message)
        if ascii_message and ascii_message != message:
            if quote:
                candidates.append(f'say {quote}{ascii_message}{quote}')
            candidates.append(f'say {ascii_message}')
        seen = []
        for item in candidates:
            if item not in seen:
                seen.append(item)
        return seen

    def _execute_telnet_once(self, command: str, connect_timeout=5, socket_timeout=2, encoding='cp1252'):
        host = (self.config.get('telnet_host') or '127.0.0.1').strip()
        port = int(self.config.get('telnet_port') or 8081)
        password = (self.config.get('telnet_password') or '').strip()
        with socket.create_connection((host, port), timeout=connect_timeout) as sock:
            sock.settimeout(socket_timeout)
            if password:
                try:
                    sock.recv(4096)
                except Exception:
                    pass
                sock.sendall((password + '\r\n').encode(encoding, errors='replace'))
                time.sleep(0.25)
                try:
                    sock.recv(4096)
                except Exception:
                    pass
            sock.sendall((command.strip() + '\r\n').encode(encoding, errors='replace'))
            time.sleep(0.45)
            chunks = []
            while True:
                try:
                    part = sock.recv(4096)
                except socket.timeout:
                    break
                if not part:
                    break
                chunks.append(part)
                if len(part) < 4096:
                    break
            raw = b''.join(chunks)
            for dec in ('cp1252', 'latin-1', 'utf-8'):
                try:
                    response = raw.decode(dec, errors='ignore').strip()
                    break
                except Exception:
                    response = ''
            return response



    def test_task_command(self, command: str):
        prepared = self._normalize_telnet_text(command)
        if not prepared:
            return False, 'Escribe un comando.'
        self.log(f'Test manual de automatización: enviando comando -> {prepared}')
        ok, msg = self.send_telnet_command(prepared, log_response=True, chat_side_effect=True)
        if ok:
            self.log(f'Test manual de automatización completado: {msg}')
            return True, msg or 'Comando enviado.'
        self.log(f'Test manual de automatización falló: {msg}')
        return False, msg or 'No se pudo enviar el comando.'

    def send_telnet_command(self, command: str, log_response=True, chat_side_effect=True, connect_timeout=5, socket_timeout=2):
        prepared = self._normalize_telnet_text(command)
        candidates = self._build_telnet_candidates(prepared)
        if not candidates:
            return False, 'Comando vacío.'
        last_error = ''
        for candidate in candidates:
            is_say = candidate.lower().startswith('say ')
            has_non_ascii = any(ord(ch) > 127 for ch in candidate)
            # 7DTD suele llevar mejor UTF-8 para tildes/ñ en mensajes `say`.
            # Antes se probaban codepages ANSI/OEM primero y el servidor aceptaba
            # el envío, pero mostraba caracteres rotos (V�tanos, despu�s...).
            # Dejamos UTF-8 como primera opción en mensajes con caracteres no ASCII.
            if is_say and has_non_ascii:
                encodings = ('utf-8', 'cp1252', 'latin-1', 'cp850', 'cp437')
            elif is_say:
                encodings = ('utf-8', 'cp850', 'cp437', 'cp1252', 'latin-1')
            else:
                encodings = ('cp1252', 'latin-1', 'utf-8')
            last_response = ''
            for idx, encoding in enumerate(encodings):
                try:
                    if is_say:
                        self.log(f'SAY test -> {candidate} [{encoding}]')
                    response = self._execute_telnet_once(candidate, connect_timeout=connect_timeout, socket_timeout=socket_timeout, encoding=encoding)
                    cleaned_response = self._clean_telnet_response_text(response)
                    last_response = cleaned_response or response or ''
                    if chat_side_effect and is_say:
                        msg = candidate[4:].strip()
                        if len(msg) >= 2 and msg[0] == '"' and msg[-1] == '"':
                            msg = msg[1:-1]
                        self.chat_log(msg)
                    if log_response and cleaned_response:
                        for line in cleaned_response.splitlines():
                            self.log(line)
                    if is_say:
                        self.log(f'SAY enviado con codificación {encoding}.')
                    return True, last_response or 'Comando enviado.'
                except Exception as exc:
                    last_error = f'Error telnet: {exc}'
                    if is_say:
                        self.log(f'SAY falló con {encoding}: {exc}')
                    if idx < len(encodings) - 1:
                        continue
            if is_say and last_response:
                return True, last_response
        return False, last_error or 'No se pudo enviar el comando por telnet.'

    def _watchdog_telnet_ready(self):
        host = str(self.config.get('telnet_host') or '').strip()
        try:
            port = int(self.config.get('telnet_port') or 0)
        except Exception:
            port = 0
        return bool(host and port > 0)

    def _watchdog_healthcheck(self, cfg):
        if not self._watchdog_telnet_ready():
            return False, 'Telnet no configurado.'
        command = str(cfg.get('watchdog_telnet_command') or 'listplayers').strip() or 'listplayers'
        return self.send_telnet_command(command, log_response=False, chat_side_effect=False, connect_timeout=3, socket_timeout=1.5)

    def _recover_hung_server(self, reason: str, idle_for: int):
        delay = max(3, int(self.config.get('auto_restart_delay_seconds') or 15))
        server_name = str(self.config.get('server_name') or 'KarmaWorld')
        detail = str(reason or 'Sin respuesta').strip()
        self.server_watchdog_last_reason = detail
        self.server_watchdog_restart_count = int(self.server_watchdog_restart_count or 0) + 1
        self.server_watchdog_fail_count = 0
        self.auto_restart_scheduled_at = None
        self.log(f'Watchdog: servidor sin respuesta durante {idle_for}s. Reinicio forzado en curso. {detail}')
        try:
            self.notify_manager_discord('crash', 'Servidor bloqueado', f"{server_name} parece bloqueado o sin respuesta. Reinicio automático en curso.", {'server_name': server_name, 'delay': delay})
        except Exception:
            pass
        self.desired_server_running = True
        ok_stop, msg_stop = self._stop_process_direct()
        if not ok_stop:
            self.log(f'Watchdog: no se pudo detener limpiamente el proceso: {msg_stop}')
        else:
            time.sleep(2)
        ok_start, msg_start = self.start_server(mark_desired=True)
        if ok_start:
            self.log('Watchdog: servidor levantado de nuevo automáticamente.')
            try:
                self.notify_manager_discord('autorestart', 'Auto reinicio completado', f"{server_name} se ha vuelto a iniciar automáticamente tras bloqueo.", {'server_name': server_name})
            except Exception:
                pass
            return
        self.log(f'Watchdog: no se pudo relanzar el servidor: {msg_start}')
        self.auto_restart_scheduled_at = time.time() + delay

    def _maybe_run_watchdog(self, proc, cfg):
        if not cfg.get('watchdog_enabled', True):
            return
        now = time.time()
        started = float(self.server_started_monotonic or 0.0)
        grace = max(30, int(cfg.get('watchdog_startup_grace_seconds') or 180))
        if started and (now - started) < grace:
            return
        interval = max(15, int(cfg.get('watchdog_check_interval_seconds') or 45))
        last_check = float(self.server_last_health_check_at or 0.0)
        if last_check and (now - last_check) < interval:
            return
        self.server_last_health_check_at = now
        ok, response = self._watchdog_healthcheck(cfg)
        if ok:
            self.server_last_telnet_ok_at = now
            self.server_watchdog_fail_count = 0
            return
        self.server_watchdog_fail_count = int(self.server_watchdog_fail_count or 0) + 1
        threshold = max(2, int(cfg.get('watchdog_fail_threshold') or 3))
        idle_ref = max(float(self.server_last_output_at or 0.0), float(self.server_last_telnet_ok_at or 0.0), started)
        idle_for = int(max(0.0, now - idle_ref)) if idle_ref else 0
        no_output_limit = max(120, int(cfg.get('watchdog_no_output_seconds') or 900))
        if self.server_watchdog_fail_count == 1 or self.server_watchdog_fail_count >= threshold:
            self.log(f'Watchdog: chequeo fallido {self.server_watchdog_fail_count}/{threshold}. {response}')
        if self.server_watchdog_fail_count < threshold:
            return
        if idle_for < no_output_limit:
            return
        self._recover_hung_server(str(response or 'Sin respuesta telnet'), idle_for)


    def _parse_player_line(self, raw: str):
        player = {
            'raw': raw,
            'slot': '',
            'name': '',
            'entityid': '',
            'steamid': '',
            'eosid': '',
            'ip': '',
            'x': None,
            'y': None,
            'z': None,
        }
        line = raw.strip()
        m = re.match(r'^\s*(\d+)[\s\.:\)-]+', line)
        if m:
            player['slot'] = m.group(1)
        key_patterns = {
            'slot': [r'(?:slotid|slot id|slot)\s*[=:]\s*([0-9]+)'],
            'entityid': [r'(?:entityid|entity id|entity|id)\s*[=:]\s*([0-9]+)'],
            'steamid': [
                r'(?:steamid|steam id|platformid|platform id|pltfmid|pltfm id)\s*[=:]\s*([A-Za-z0-9_\-]+)',
            ],
            'eosid': [
                r'(?:crossid|cross id|crossplatformid|cross platform id|eosid|eos id|playerid)\s*[=:]\s*([A-Za-z0-9_\-]+)',
            ],
            'ip': [r'(?:ip|addr|address)\s*[=:]\s*([0-9\.]+)'],
            'name': [
                r'(?:name|playername|player name)\s*[=:]\s*"([^"]+)"',
                r'(?:name|playername|player name)\s*[=:]\s*([^,]+)',
            ],
        }
        for key, patterns in key_patterns.items():
            for pattern in patterns:
                match = re.search(pattern, line, flags=re.IGNORECASE)
                if match:
                    player[key] = match.group(1).strip()
                    break
        pos_match = re.search(r'(?:pos|position)\s*[=:]?\s*[\(\[]\s*(-?\d+(?:\.\d+)?)\s*[, ]\s*(-?\d+(?:\.\d+)?)\s*[, ]\s*(-?\d+(?:\.\d+)?)\s*[\)\]]', line, flags=re.IGNORECASE)
        if pos_match:
            player['x'] = float(pos_match.group(1))
            player['y'] = float(pos_match.group(2))
            player['z'] = float(pos_match.group(3))
        else:
            xyz_match = re.search(r'x\s*[=:]\s*(-?\d+(?:\.\d+)?)\D+y\s*[=:]\s*(-?\d+(?:\.\d+)?)\D+z\s*[=:]\s*(-?\d+(?:\.\d+)?)', line, flags=re.IGNORECASE)
            if xyz_match:
                player['x'] = float(xyz_match.group(1))
                player['y'] = float(xyz_match.group(2))
                player['z'] = float(xyz_match.group(3))
        if not player['name']:
            no_prefix = re.sub(r'^\s*\d+[\s\.:\)-]+', '', line)
            for part in [p.strip(' \t,') for p in re.split(r'\s{2,}|,', no_prefix) if p.strip()]:
                low = part.lower()
                if '=' in part or low.startswith(('pos', 'steam', 'eos', 'id', 'ip', 'level', 'score')):
                    continue
                if re.fullmatch(r'[0-9\-]+', part):
                    continue
                player['name'] = part.strip('"')
                break
        if player['name']:
            player['name'] = player['name'].strip()
        return player

    def refresh_players(self):
        for cmd in ('listplayers', 'lp'):
            ok, response = self.send_telnet_command(cmd)
            if ok:
                players = []
                for line in response.splitlines():
                    raw = line.strip()
                    if not raw:
                        continue
                    lower = raw.lower()
                    if lower.startswith('total of') or 'players in the game' in lower:
                        continue
                    if 'executing command' in lower or 'connection closed by host' in lower or 'telnet connection closed' in lower or 'exited thread telnetclient' in lower:
                        continue
                    if not re.match(r'^\s*\d+[\s\.:\)-]+', raw):
                        continue
                    parsed = self._parse_player_line(raw)
                    if not self._is_probable_player_line(raw, parsed):
                        continue
                    players.append(parsed)
                self.players_cache = players
                self.last_players_refresh = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
                try:
                    self.sync_player_history(players)
                except Exception as exc:
                    self.log(f'Error actualizando historial de jugadores: {exc}')
                return True, players
        return False, []

    def _inventory_api_base_urls(self):
        raw = str(self.config.get('inventory_api_base_url') or '').strip() or str(self.config.get('live_map_url') or '').strip()
        if not raw:
            return []
        raw = raw.rstrip('/')
        bases = [raw]
        if raw.endswith('/map'):
            bases.append(raw[:-4])
        elif raw.endswith('/webmap'):
            bases.append(raw[:-7])
        dedup = []
        for item in bases:
            if item and item not in dedup:
                dedup.append(item)
        return dedup

    def _inventory_icon_roots(self):
        candidates = []
        configured = str(self.config.get('item_icons_folder') or '').strip()
        if configured:
            candidates.append(Path(configured).expanduser())
        candidates.extend([
            RESOURCE_DIR / 'ItemIcons',
            ASSETS_DIR / 'ItemIcons',
            APP_HOME / 'ItemIcons',
        ])
        roots = []
        seen = set()
        for path in candidates:
            try:
                resolved = path.resolve()
            except Exception:
                resolved = path
            key = str(resolved).lower()
            if key in seen:
                continue
            seen.add(key)
            if path.exists() and path.is_dir():
                roots.append(path)
        return roots

    def find_item_icon(self, icon_name: str):
        raw = str(icon_name or '').strip()
        if not raw:
            return None
        raw = raw.replace('\\', '/').split('/')[-1]
        stems = []
        base = Path(raw).stem
        if base:
            stems.append(base)
        safe = re.sub(r'[^A-Za-z0-9_\-.]', '', raw)
        if safe:
            stems.append(Path(safe).stem)
        for root in self._inventory_icon_roots():
            for stem in stems:
                for suffix in ('.png', '.jpg', '.jpeg', '.webp'):
                    candidate = root / f'{stem}{suffix}'
                    if candidate.exists() and candidate.is_file():
                        return candidate
        return None

    def _http_get_json(self, url: str, username: str = '', password: str = ''):
        req = urllib.request.Request(url)
        req.add_header('Accept', 'application/json')
        user = str(username or '').strip()
        pwd = str(password or '').strip()
        if user and pwd:
            token = base64.b64encode(f'{user}:{pwd}'.encode('utf-8')).decode('ascii')
            req.add_header('Authorization', f'Basic {token}')
        with urllib.request.urlopen(req, timeout=5) as resp:
            charset = resp.headers.get_content_charset() or 'utf-8'
            raw = resp.read().decode(charset, errors='ignore')
        return json.loads(raw)

    def _parse_inventory_api_payload(self, payload, player: dict):
        if not isinstance(payload, dict):
            return None
        bag = payload.get('bag', [])
        belt = payload.get('belt', [])
        equipment = payload.get('equipment', {})

        def normalize_item(item, slot=None, location=''):
            if not item:
                return None
            if not isinstance(item, dict):
                return None
            name = str(item.get('name') or item.get('item') or '').strip()
            count = int(item.get('count') or item.get('qnty') or 0)
            if not name and count <= 0:
                return None
            icon = str(item.get('icon') or name or '').strip()
            quality = item.get('quality')
            try:
                quality = int(quality) if quality is not None else None
            except Exception:
                quality = None
            return {
                'slot': slot,
                'location': location,
                'name': name,
                'count': count,
                'icon': icon,
                'quality': quality,
                'qualitycolor': str(item.get('qualitycolor') or '').strip(),
                'iconcolor': str(item.get('iconcolor') or '').strip(),
            }

        bag_items = [normalize_item(item, idx, 'bag') for idx, item in enumerate(bag)] if isinstance(bag, list) else []
        bag_items = [item for item in bag_items if item]
        belt_items = [normalize_item(item, idx, 'belt') for idx, item in enumerate(belt)] if isinstance(belt, list) else []
        belt_items = [item for item in belt_items if item]
        equipment_items = {}
        if isinstance(equipment, dict):
            for slot_name, item in equipment.items():
                normalized = normalize_item(item, slot_name, 'equipment')
                if normalized:
                    equipment_items[str(slot_name)] = normalized
        if not bag_items and not belt_items and not equipment_items:
            return None
        return {
            'player': player,
            'source': 'allocs_api',
            'bag': bag_items,
            'belt': belt_items,
            'equipment': equipment_items,
            'updated_at': datetime.now().isoformat(timespec='seconds'),
        }

    def _fetch_inventory_via_web_api(self, player: dict):
        userid = str(player.get('steamid') or '').strip()
        if not userid:
            return False, 'Jugador sin identificador válido.'
        username = str(self.config.get('inventory_api_user') or 'admin').strip() or 'admin'
        password = str(self.config.get('inventory_api_password') or '').strip()
        errors = []
        for base in self._inventory_api_base_urls():
            candidates = [
                f"{base}/api/getplayerinventory?userid={urllib.parse.quote(userid)}&showiconname=true&showiconcolor=true",
                f"{base}/api/getplayerinventory?steamid={urllib.parse.quote(userid)}&showiconname=true&showiconcolor=true",
            ]
            for url in candidates:
                try:
                    payload = self._http_get_json(url, username=username if password else '', password=password)
                    data = self._parse_inventory_api_payload(payload, player)
                    if data:
                        return True, data
                except Exception as exc:
                    errors.append(str(exc))
        return False, errors[-1] if errors else 'API de inventario no disponible.'

    def _parse_inventory_telnet_response(self, response: str, player: dict):
        belt = []
        bag = []
        equipment = {}
        current_section = None
        found = False
        for raw in str(response or '').splitlines():
            line = raw.strip()
            if not line:
                continue
            lower = line.lower()
            if lower.startswith('tracker_item '):
                found = True
                payload = {}
                for part in line[len('tracker_item '):].split(','):
                    if '=' not in part:
                        continue
                    key, value = part.split('=', 1)
                    payload[key.strip().lower()] = value.strip()
                location = payload.get('location', '').lower()
                slot_raw = payload.get('slot', '')
                slot = int(slot_raw) if str(slot_raw).isdigit() else slot_raw
                item = {
                    'slot': slot,
                    'location': location,
                    'name': payload.get('item', ''),
                    'count': int(payload.get('qnty') or 0),
                    'icon': payload.get('item', ''),
                    'quality': int(payload.get('quality') or -1) if str(payload.get('quality', '')).strip('-').isdigit() else None,
                    'qualitycolor': '',
                    'iconcolor': '',
                }
                if location == 'belt':
                    belt.append(item)
                elif location in {'bag', 'backpack'}:
                    bag.append(item)
                else:
                    equipment[str(slot)] = item
                continue
            if lower.startswith('belt of player'):
                current_section = 'belt'
                continue
            if lower.startswith('bagpack of player') or lower.startswith('backpack of player'):
                current_section = 'bag'
                continue
            if lower.startswith('equipment of player'):
                current_section = 'equipment'
                continue
            match = re.match(r'^slot\s+([^:]+):\s*(\d{1,4})(?:\s*\*\s*|\s+)([^\-]+?)(?:\s*-\s*quality:\s*(-?\d+))?\s*$', line, flags=re.IGNORECASE)
            if match and current_section:
                found = True
                slot_raw = match.group(1).strip()
                slot = int(slot_raw) if slot_raw.isdigit() else slot_raw
                item = {
                    'slot': slot,
                    'location': current_section,
                    'name': match.group(3).strip(),
                    'count': int(match.group(2)),
                    'icon': match.group(3).strip(),
                    'quality': int(match.group(4)) if match.group(4) else None,
                    'qualitycolor': '',
                    'iconcolor': '',
                }
                if current_section == 'belt':
                    belt.append(item)
                elif current_section == 'bag':
                    bag.append(item)
                else:
                    equipment[str(slot)] = item
        if not found:
            return None
        return {
            'player': player,
            'source': 'showinventory',
            'bag': sorted(bag, key=lambda x: (isinstance(x.get('slot'), str), x.get('slot'))),
            'belt': sorted(belt, key=lambda x: (isinstance(x.get('slot'), str), x.get('slot'))),
            'equipment': equipment,
            'updated_at': datetime.now().isoformat(timespec='seconds'),
        }

    def _inventory_targets(self, player: dict):
        targets = []
        for key in ('steamid', 'entityid', 'slot', 'name'):
            value = str(player.get(key) or '').strip()
            if not value:
                continue
            if key == 'name' and ' ' in value:
                value = '"' + value.replace('"', '') + '"'
            if value not in targets:
                targets.append(value)
        return targets

    def _fetch_inventory_via_telnet(self, player: dict):
        last_error = ''
        for target in self._inventory_targets(player):
            for command in (f'showinventory {target} kwpanel', f'si {target} kwpanel', f'showinventory {target}', f'si {target}'):
                ok, response = self.send_telnet_command(command)
                if not ok:
                    last_error = str(response)
                    continue
                parsed = self._parse_inventory_telnet_response(response, player)
                if parsed:
                    return True, parsed
                last_error = str(response)
        return False, last_error or 'No se pudo leer el inventario por telnet.'

    def fetch_player_inventory(self, player: dict, snapshot_reason='manual'):
        if not isinstance(player, dict):
            return False, 'Jugador no válido.'
        ok, data = self._fetch_inventory_via_web_api(player)
        if ok:
            try:
                self.save_player_inventory_snapshot(player, data, reason=snapshot_reason)
            except Exception:
                pass
            return True, data
        ok, data = self._fetch_inventory_via_telnet(player)
        if ok:
            try:
                self.save_player_inventory_snapshot(player, data, reason=snapshot_reason)
            except Exception:
                pass
            return True, data
        return False, ('No se pudo leer el inventario. Para que funcione de verdad necesitas Allocs Server Fixes / Web API o el comando showinventory disponible en el servidor. ' + str(data or '')).strip()


    def _inventory_snapshot_supported(self):
        if self._inventory_api_base_urls():
            return True
        host = str(self.config.get('telnet_host') or '').strip()
        password = str(self.config.get('telnet_password') or '').strip()
        try:
            port = int(self.config.get('telnet_port') or 0)
        except Exception:
            port = 0
        return bool(host and port and password)

    def _inventory_snapshot_signature(self, data):
        try:
            payload = json.dumps({
                'bag': data.get('bag') or [],
                'belt': data.get('belt') or [],
                'equipment': data.get('equipment') or {},
            }, ensure_ascii=False, sort_keys=True)
        except Exception:
            payload = str(data or '')
        return hashlib.sha1(payload.encode('utf-8', errors='ignore')).hexdigest()

    def _inventory_snapshot_summary(self, data):
        bag = list((data or {}).get('bag') or [])
        belt = list((data or {}).get('belt') or [])
        equipment = list(((data or {}).get('equipment') or {}).values())
        all_items = bag + belt + equipment
        total_stacks = len(all_items)
        total_items = 0
        for row in all_items:
            try:
                total_items += int(row.get('count') or 0)
            except Exception:
                pass
        return {'total_stacks': total_stacks, 'total_items': total_items}

    def save_player_inventory_snapshot(self, player: dict, inventory_data: dict, reason='manual'):
        if not isinstance(player, dict) or not isinstance(inventory_data, dict):
            return False
        store = self.load_player_history_store()
        players_map = store.setdefault('players', {})
        key, record = self._find_player_record(store, player=player)
        if not key:
            key = self._player_history_key(player)
        if not key:
            return False
        if not isinstance(record, dict):
            record = self._new_player_record(key, player)
            players_map[key] = record
        snapshot = {
            'at': self._history_now(),
            'reason': str(reason or 'manual'),
            'source': str(inventory_data.get('source') or ''),
            'updated_at': str(inventory_data.get('updated_at') or self._history_now()),
            'player': {
                'name': str(player.get('name') or '').strip(),
                'steamid': str(player.get('steamid') or '').strip(),
                'eosid': str(player.get('eosid') or '').strip(),
                'entityid': str(player.get('entityid') or '').strip(),
                'slot': str(player.get('slot') or '').strip(),
            },
            'bag': list(inventory_data.get('bag') or []),
            'belt': list(inventory_data.get('belt') or []),
            'equipment': dict(inventory_data.get('equipment') or {}),
        }
        summary = self._inventory_snapshot_summary(snapshot)
        snapshot.update(summary)
        snapshot['signature'] = self._inventory_snapshot_signature(snapshot)
        snapshots = list(record.get('inventory_snapshots') or [])
        changed = True
        if snapshots and isinstance(snapshots[-1], dict) and snapshots[-1].get('signature') == snapshot['signature']:
            previous = dict(snapshots[-1])
            previous['at'] = snapshot['at']
            previous['updated_at'] = snapshot['updated_at']
            previous['reason'] = snapshot['reason']
            previous['source'] = snapshot['source'] or previous.get('source') or ''
            previous['player'] = snapshot['player']
            previous['total_stacks'] = snapshot['total_stacks']
            previous['total_items'] = snapshot['total_items']
            snapshots[-1] = previous
            changed = False
        else:
            snapshots.append(snapshot)
        max_items = max(3, int(self.config.get('inventory_snapshot_max_per_player') or 12))
        record['inventory_snapshots'] = snapshots[-max_items:]
        record['last_inventory_snapshot_at'] = snapshot['at']
        record['last_inventory_source'] = snapshot['source']
        record['last_inventory_summary'] = {'total_stacks': snapshot['total_stacks'], 'total_items': snapshot['total_items']}
        if changed:
            timeline_entry = {
                'at': snapshot['at'],
                'type': 'inventory_snapshot',
                'reason': snapshot['reason'],
                'source': snapshot['source'],
                'items': f"{snapshot['total_stacks']} stacks · {snapshot['total_items']} items",
            }
            record['timeline'] = self._append_history_event(record.get('timeline'), timeline_entry, 150)
        self.save_player_history_store(store)
        return True

    def run_inventory_snapshot_cycle(self):
        if not bool(self.config.get('inventory_snapshot_enabled', True)):
            return
        interval = max(15, int(self.config.get('inventory_snapshot_interval_seconds') or 60))
        now_ts = time.time()
        if now_ts - float(self.last_inventory_snapshot_cycle or 0.0) < interval:
            return
        self.last_inventory_snapshot_cycle = now_ts
        if not self._inventory_snapshot_supported():
            return
        ok, players = self.refresh_players()
        if not ok:
            return
        for player in list(players or []):
            if not isinstance(player, dict):
                continue
            try:
                self.fetch_player_inventory(player, snapshot_reason='auto_poll')
            except Exception:
                continue



    def _history_now(self):
        return datetime.now().strftime('%Y-%m-%d %H:%M:%S')

    def _player_history_empty_store(self):
        return {
            'schema': 1,
            'updated_at': self._history_now(),
            'players': {},
            'cases': [],
        }

    def load_player_history_store(self):
        data = safe_load_json(self.player_history_path, self._player_history_empty_store())
        if not isinstance(data, dict):
            data = self._player_history_empty_store()
        players = data.get('players')
        if not isinstance(players, dict):
            players = {}
        cases = data.get('cases')
        if not isinstance(cases, list):
            cases = []
        data['players'] = players
        data['cases'] = cases
        data['schema'] = 1
        data['updated_at'] = str(data.get('updated_at') or self._history_now())
        return data

    def save_player_history_store(self, store):
        payload = store if isinstance(store, dict) else self._player_history_empty_store()
        payload['schema'] = 1
        payload['updated_at'] = self._history_now()
        safe_write_json(self.player_history_path, payload)

    def _merge_text_list(self, items, value, limit=20):
        result = [str(x).strip() for x in list(items or []) if str(x or '').strip()]
        text = str(value or '').strip()
        if text and text not in result:
            result.append(text)
        return result[-limit:]

    def _player_history_key(self, player: dict):
        if not isinstance(player, dict):
            return ''
        steamid = str(player.get('steamid') or '').strip()
        if steamid:
            return f'steam:{steamid}'
        eosid = str(player.get('eosid') or '').strip()
        if eosid:
            return f'eos:{eosid}'
        name = str(player.get('name') or '').strip().lower()
        if name:
            return f'name:{name}'
        entityid = str(player.get('entityid') or '').strip()
        if entityid:
            return f'entity:{entityid}'
        slot = str(player.get('slot') or '').strip()
        if slot:
            return f'slot:{slot}'
        return ''

    def _find_player_record(self, store, player=None, key=''):
        players = store.get('players', {}) if isinstance(store, dict) else {}
        requested = str(key or '').strip()
        if requested and requested in players:
            return requested, players.get(requested)
        candidate_keys = []
        if isinstance(player, dict):
            base = self._player_history_key(player)
            if base:
                candidate_keys.append(base)
            for alt in (
                f"steam:{str(player.get('steamid') or '').strip()}",
                f"eos:{str(player.get('eosid') or '').strip()}",
                f"name:{str(player.get('name') or '').strip().lower()}",
                f"entity:{str(player.get('entityid') or '').strip()}",
            ):
                if alt and alt not in candidate_keys:
                    candidate_keys.append(alt)
        for candidate in candidate_keys:
            if candidate in players:
                return candidate, players.get(candidate)
        for rec_key, rec in players.items():
            if not isinstance(rec, dict):
                continue
            if isinstance(player, dict):
                name = str(player.get('name') or '').strip()
                if name and name in list(rec.get('names') or []):
                    return rec_key, rec
                steamid = str(player.get('steamid') or '').strip()
                if steamid and steamid in list(rec.get('steamids') or []):
                    return rec_key, rec
                eosid = str(player.get('eosid') or '').strip()
                if eosid and eosid in list(rec.get('eosids') or []):
                    return rec_key, rec
        return '', None

    def _new_player_record(self, key: str, player: dict):
        name = str((player or {}).get('name') or '').strip() or 'Jugador sin nombre'
        return {
            'key': key,
            'primary_name': name,
            'names': [name] if name else [],
            'steamids': [str((player or {}).get('steamid') or '').strip()] if str((player or {}).get('steamid') or '').strip() else [],
            'eosids': [str((player or {}).get('eosid') or '').strip()] if str((player or {}).get('eosid') or '').strip() else [],
            'entityids': [str((player or {}).get('entityid') or '').strip()] if str((player or {}).get('entityid') or '').strip() else [],
            'ips': [str((player or {}).get('ip') or '').strip()] if str((player or {}).get('ip') or '').strip() else [],
            'slots': [str((player or {}).get('slot') or '').strip()] if str((player or {}).get('slot') or '').strip() else [],
            'first_seen': self._history_now(),
            'last_seen': self._history_now(),
            'last_position': self._player_position_payload(player),
            'last_raw': str((player or {}).get('raw') or ''),
            'online': True,
            'sightings_count': 0,
            'timeline': [],
            'moderation': [],
            'inventory_snapshots': [],
            'last_inventory_snapshot_at': '',
            'last_inventory_source': '',
            'last_inventory_summary': {},
        }

    def _player_position_text(self, player: dict):
        if not isinstance(player, dict):
            return '-'
        if str(player.get('text') or '').strip() and player.get('x') is None and player.get('z') is None:
            return str(player.get('text') or '').strip()
        x = player.get('x')
        z = player.get('z')
        if x is None or z is None:
            return str(player.get('text') or '-').strip() or '-'
        try:
            x_val = round(float(x))
            z_val = round(float(z))
            y_raw = player.get('y')
            if y_raw is not None and str(y_raw) != '':
                y_val = round(float(y_raw))
                return f'{x_val}, {y_val}, {z_val}'
            return f'{x_val}, {z_val}'
        except Exception:
            return '-'

    def _player_position_payload(self, player: dict):
        if not isinstance(player, dict):
            return None
        x = player.get('x')
        z = player.get('z')
        if x is None or z is None:
            return None
        payload = {'text': self._player_position_text(player)}
        try:
            payload['x'] = float(x)
        except Exception:
            payload['x'] = None
        try:
            payload['y'] = float(player.get('y')) if player.get('y') is not None else None
        except Exception:
            payload['y'] = None
        try:
            payload['z'] = float(z)
        except Exception:
            payload['z'] = None
        return payload

    def _append_history_event(self, events, item, limit=120):
        seq = list(events or [])
        if item:
            seq.append(item)
        return seq[-limit:]

    def _is_probable_player_line(self, raw: str, player=None):
        line = str(raw or '').strip()
        if not line:
            return False
        lowered = line.lower()
        noisy_tokens = (
            ' telnet connection',
            'started thread',
            'telnetclient_',
            'vehiclemanager saving',
            'vehiclemanager saved',
            ' chat (from ',
            'chat handled by mod',
            ' sleepervolume ',
            'heap:',
            ' chunks:',
            ' rss:',
            ' killed by ',
            ' entity ',
            '[prismacore]',
        )
        if any(token in lowered for token in noisy_tokens):
            return False
        if re.match(r'^\d{2}-\d{2}t\d{2}:\d{2}:\d{2}', lowered):
            return False
        parsed = player if isinstance(player, dict) else self._parse_player_line(line)
        meaningful_id = any(str(parsed.get(key) or '').strip() for key in ('steamid', 'eosid', 'entityid', 'ip'))
        has_position = parsed.get('x') is not None and parsed.get('z') is not None
        keywords = ('steamid', 'steam id', 'entityid', 'entity id', 'eosid', 'eos id', 'crossid', 'playerid', 'position', ' pos', ' x=', ' x:', ' y=', ' y:', ' z=', ' z:', ' level', ' score', ' deaths', ' zombies', ' health', ' ip=')
        has_keywords = any(token in lowered for token in keywords)
        has_name = bool(str(parsed.get('name') or '').strip())
        return bool(has_name and (meaningful_id or has_position or has_keywords))

    def _history_record_is_noise(self, record):
        if not isinstance(record, dict):
            return True
        joined = ' | '.join([
            str(record.get('primary_name') or ''),
            ' '.join(str(x or '') for x in list(record.get('names') or [])),
            ' '.join(str(x or '') for x in list(record.get('steamids') or [])),
            ' '.join(str(x or '') for x in list(record.get('eosids') or [])),
            ' '.join(str(x or '') for x in list(record.get('entityids') or [])),
        ]).lower()
        noisy_tokens = (
            'inf ', 'wrn ', 'err ', 'sleepervolume', 'vehiclemanager', 'telnet connection',
            'started thread', 'telnetclient_', 'chat handled by mod', 'chat (from', 'non-player',
            'heap:', 'chunks:', 'rss:', 'killed by', '[prismacore]', 'time:'
        )
        if any(token in joined for token in noisy_tokens):
            return True
        has_ids = any(str(x or '').strip() for x in list(record.get('steamids') or []) + list(record.get('eosids') or []) + list(record.get('entityids') or []))
        has_name = bool(str(record.get('primary_name') or '').strip()) or any(str(x or '').strip() for x in list(record.get('names') or []))
        if not has_name:
            return True
        if not has_ids and not record.get('last_position'):
            return True
        return False

    def delete_player_history_entry(self, key: str):
        rec_key = str(key or '').strip()
        if not rec_key:
            return False, 'Falta la clave del historial.'
        store = self.load_player_history_store()
        players_map = store.setdefault('players', {})
        if rec_key not in players_map:
            return False, 'No existe esa entrada de historial.'
        players_map.pop(rec_key, None)
        cases = []
        for row in list(store.get('cases') or []):
            if not isinstance(row, dict):
                continue
            if str(row.get('offender_key') or '').strip() == rec_key:
                continue
            victim = row.get('victim') if isinstance(row.get('victim'), dict) else {}
            if str(victim.get('key') or '').strip() == rec_key:
                continue
            cases.append(row)
        store['cases'] = cases
        self.save_player_history_store(store)
        return True, 'Entrada de historial eliminada.'

    def clear_player_history(self):
        self.save_player_history_store(self._player_history_empty_store())
        return True, 'Historial eliminado.'

    def cleanup_player_history_noise(self):
        store = self.load_player_history_store()
        players_map = store.setdefault('players', {})
        removed_keys = []
        for key, record in list(players_map.items()):
            if self._history_record_is_noise(record):
                removed_keys.append(key)
                players_map.pop(key, None)
        if removed_keys:
            cleaned_cases = []
            removed_set = set(removed_keys)
            for row in list(store.get('cases') or []):
                if not isinstance(row, dict):
                    continue
                if str(row.get('offender_key') or '').strip() in removed_set:
                    continue
                victim = row.get('victim') if isinstance(row.get('victim'), dict) else {}
                if str(victim.get('key') or '').strip() in removed_set:
                    continue
                cleaned_cases.append(row)
            store['cases'] = cleaned_cases
            self.save_player_history_store(store)
        return True, {'removed': len(removed_keys), 'keys': removed_keys}

    def sync_player_history(self, players):
        store = self.load_player_history_store()
        players_map = store.setdefault('players', {})
        now = self._history_now()
        active_keys = set()
        for player in list(players or []):
            if not isinstance(player, dict):
                continue
            key, record = self._find_player_record(store, player=player)
            if not key:
                key = self._player_history_key(player)
            if not key:
                continue
            if not isinstance(record, dict):
                record = self._new_player_record(key, player)
                players_map[key] = record
            active_keys.add(key)
            name = str(player.get('name') or '').strip() or record.get('primary_name') or 'Jugador'
            record['key'] = key
            record['primary_name'] = name
            record['names'] = self._merge_text_list(record.get('names'), name)
            record['steamids'] = self._merge_text_list(record.get('steamids'), player.get('steamid'))
            record['eosids'] = self._merge_text_list(record.get('eosids'), player.get('eosid'))
            record['entityids'] = self._merge_text_list(record.get('entityids'), player.get('entityid'))
            record['ips'] = self._merge_text_list(record.get('ips'), player.get('ip'))
            record['slots'] = self._merge_text_list(record.get('slots'), player.get('slot'))
            was_online = bool(record.get('online'))
            if not str(record.get('first_seen') or '').strip():
                record['first_seen'] = now
            record['last_seen'] = now
            record['online'] = True
            record['last_raw'] = str(player.get('raw') or '')
            if not was_online:
                record['timeline'] = self._append_history_event(record.get('timeline'), {
                    'at': now,
                    'type': 'online',
                    'name': name,
                    'position': self._player_position_text(player),
                }, 150)
            record['last_position'] = self._player_position_payload(player)
            try:
                record['sightings_count'] = int(record.get('sightings_count') or 0) + 1
            except Exception:
                record['sightings_count'] = 1
            event = {
                'at': now,
                'type': 'seen',
                'name': name,
                'slot': str(player.get('slot') or ''),
                'entityid': str(player.get('entityid') or ''),
                'steamid': str(player.get('steamid') or ''),
                'eosid': str(player.get('eosid') or ''),
                'ip': str(player.get('ip') or ''),
                'position': self._player_position_text(player),
                'raw': str(player.get('raw') or ''),
            }
            timeline = list(record.get('timeline') or [])
            last_event = timeline[-1] if timeline else {}
            if not isinstance(last_event, dict) or last_event.get('raw') != event['raw']:
                record['timeline'] = self._append_history_event(timeline, event, 150)
            else:
                record['timeline'] = timeline[-150:]
        for rec_key, record in players_map.items():
            if not isinstance(record, dict):
                continue
            if rec_key not in active_keys:
                if bool(record.get('online')):
                    record['timeline'] = self._append_history_event(record.get('timeline'), {
                        'at': now,
                        'type': 'offline',
                        'position': self._player_position_text(record.get('last_position') or {}),
                        'reason': record.get('last_inventory_snapshot_at') or '',
                    }, 150)
                record['online'] = False
        self.save_player_history_store(store)

    def player_history_overview(self):
        store = self.load_player_history_store()
        rows = []
        for key, record in store.get('players', {}).items():
            if not isinstance(record, dict):
                continue
            rows.append({
                'key': key,
                'primary_name': str(record.get('primary_name') or 'Jugador'),
                'names': list(record.get('names') or []),
                'steamids': list(record.get('steamids') or []),
                'eosids': list(record.get('eosids') or []),
                'entityids': list(record.get('entityids') or []),
                'ips': list(record.get('ips') or []),
                'slots': list(record.get('slots') or []),
                'first_seen': str(record.get('first_seen') or ''),
                'last_seen': str(record.get('last_seen') or ''),
                'last_position': record.get('last_position'),
                'online': bool(record.get('online')),
                'sightings_count': int(record.get('sightings_count') or 0),
                'moderation_count': len(list(record.get('moderation') or [])),
                'last_inventory_snapshot_at': str(record.get('last_inventory_snapshot_at') or ''),
                'last_inventory_summary': record.get('last_inventory_summary') or {},
                'snapshot_count': len(list(record.get('inventory_snapshots') or [])),
            })
        rows.sort(key=lambda row: str(row.get('last_seen') or ''), reverse=True)
        return rows

    def player_history_profile(self, player=None, key=''):
        store = self.load_player_history_store()
        rec_key, record = self._find_player_record(store, player=player, key=key)
        if not isinstance(record, dict):
            if isinstance(player, dict) and self._player_history_key(player):
                rec_key = self._player_history_key(player)
                record = self._new_player_record(rec_key, player)
                record['online'] = any(self._player_history_key(p) == rec_key for p in list(self.players_cache or []) if isinstance(p, dict))
            else:
                return False, 'No hay historial para este jugador todavía.'
        related_cases = []
        names = set(str(x).strip() for x in list(record.get('names') or []) if str(x).strip())
        steamids = set(str(x).strip() for x in list(record.get('steamids') or []) if str(x).strip())
        eosids = set(str(x).strip() for x in list(record.get('eosids') or []) if str(x).strip())
        for case in list(store.get('cases') or []):
            if not isinstance(case, dict):
                continue
            victim = case.get('victim') if isinstance(case.get('victim'), dict) else {}
            offender = case.get('offender') if isinstance(case.get('offender'), dict) else {}
            if case.get('offender_key') == rec_key or victim.get('key') == rec_key:
                related_cases.append(case)
                continue
            if offender.get('steamid') in steamids or victim.get('steamid') in steamids:
                related_cases.append(case)
                continue
            if offender.get('eosid') in eosids or victim.get('eosid') in eosids:
                related_cases.append(case)
                continue
            if offender.get('name') in names or victim.get('name') in names:
                related_cases.append(case)
        related_cases = sorted(related_cases, key=lambda row: str(row.get('created_at') or ''), reverse=True)[:60]
        payload = dict(record)
        payload['timeline'] = list(payload.get('timeline') or [])[-60:]
        payload['moderation'] = list(payload.get('moderation') or [])[-60:]
        payload['inventory_snapshots'] = list(payload.get('inventory_snapshots') or [])[-8:]
        payload['latest_inventory_snapshot'] = payload['inventory_snapshots'][-1] if list(payload.get('inventory_snapshots') or []) else None
        return True, {'record': payload, 'cases': related_cases}

    def _player_target(self, player: dict, prefer_stable=False):
        ordered = ('steamid', 'eosid', 'entityid', 'slot', 'name') if prefer_stable else ('slot', 'entityid', 'steamid', 'eosid', 'name')
        for key in ordered:
            value = str((player or {}).get(key) or '').strip()
            if not value:
                continue
            if key == 'name' and ' ' in value:
                return '"' + value.replace('"', '') + '"'
            return value
        return ''

    def _record_moderation(self, player: dict, action: str, actor: str, reason: str, command: str, response: str, success: bool):
        store = self.load_player_history_store()
        key, record = self._find_player_record(store, player=player)
        if not key:
            key = self._player_history_key(player)
        if not key:
            return
        if not isinstance(record, dict):
            record = self._new_player_record(key, player or {})
            store.setdefault('players', {})[key] = record
        entry = {
            'at': self._history_now(),
            'type': 'moderation',
            'action': str(action or ''),
            'actor': str(actor or 'panel'),
            'reason': str(reason or ''),
            'command': str(command or ''),
            'response': self._clean_telnet_response_text(response),
            'ok': bool(success),
        }
        record['moderation'] = self._append_history_event(record.get('moderation'), entry, 80)
        record['timeline'] = self._append_history_event(record.get('timeline'), entry, 150)
        self.save_player_history_store(store)

    def _parse_restore_items(self, items_text='', items=None):
        parsed = []
        source = []
        if isinstance(items, list):
            source = items
        else:
            source = str(items_text or '').splitlines()
        for row in source:
            if isinstance(row, dict):
                item = str(row.get('item') or row.get('name') or '').strip()
                qty_raw = row.get('quantity')
            else:
                line = str(row or '').strip()
                if not line:
                    continue
                m = re.match(r'^\s*"?([^",;]+?)"?\s*(?:[,;]|\s+x\s+|\s+)(-?\d+)\s*$', line, flags=re.IGNORECASE)
                if m:
                    item = m.group(1).strip()
                    qty_raw = m.group(2)
                else:
                    parts = line.split()
                    if len(parts) < 2:
                        continue
                    item = ' '.join(parts[:-1]).strip('" ')
                    qty_raw = parts[-1]
            if not item:
                continue
            try:
                qty = int(float(qty_raw))
            except Exception:
                continue
            if qty <= 0:
                continue
            parsed.append({'item': item, 'quantity': qty})
        return parsed

    def _victim_payload_from_request(self, victim_player=None, victim_data=None):
        base = victim_player if isinstance(victim_player, dict) and victim_player else victim_data if isinstance(victim_data, dict) else {}
        payload = {
            'key': self._player_history_key(base) if isinstance(base, dict) else '',
            'name': str(base.get('name') or base.get('player_name') or '').strip() if isinstance(base, dict) else '',
            'steamid': str(base.get('steamid') or '').strip() if isinstance(base, dict) else '',
            'eosid': str(base.get('eosid') or '').strip() if isinstance(base, dict) else '',
            'entityid': str(base.get('entityid') or '').strip() if isinstance(base, dict) else '',
            'slot': str(base.get('slot') or '').strip() if isinstance(base, dict) else '',
        }
        if isinstance(victim_data, dict):
            for key in ('name', 'steamid', 'eosid', 'entityid', 'slot'):
                if str(victim_data.get(key) or '').strip():
                    payload[key] = str(victim_data.get(key) or '').strip()
            if str(victim_data.get('key') or '').strip():
                payload['key'] = str(victim_data.get('key') or '').strip()
        return payload

    def _restore_preview(self, victim: dict, items: list):
        victim = victim if isinstance(victim, dict) else {}
        preview = []
        online_target = self._player_target(victim, prefer_stable=False)
        stable_target = self._player_target(victim, prefer_stable=True)
        for row in list(items or []):
            if not isinstance(row, dict):
                continue
            item = str(row.get('item') or '').strip()
            qty = int(row.get('quantity') or 0)
            if not item or qty <= 0:
                continue
            preview.append({
                'item': item,
                'quantity': qty,
                'online_command': f'give {online_target} {item} {qty}' if online_target else '',
                'offline_command': f'st-GiveItem {stable_target} {item} {qty}' if stable_target else '',
            })
        return preview

    def register_theft_case(self, offender: dict, victim_player=None, victim_data=None, items_text='', items=None, actor='panel', reason='', execute_restore=False):
        if not isinstance(offender, dict):
            return False, 'Jugador infractor no válido.'
        parsed_items = self._parse_restore_items(items_text=items_text, items=items)
        if not parsed_items:
            return False, 'No se han podido leer los objetos robados. Usa una línea por objeto: item cantidad'
        victim = self._victim_payload_from_request(victim_player=victim_player, victim_data=victim_data)
        if not any(str(victim.get(k) or '').strip() for k in ('name', 'steamid', 'eosid', 'entityid', 'slot')):
            return False, 'Indica el dueño al que hay que devolverle los objetos.'
        store = self.load_player_history_store()
        offender_key, offender_record = self._find_player_record(store, player=offender)
        if not offender_key:
            offender_key = self._player_history_key(offender)
        if not isinstance(offender_record, dict) and offender_key:
            offender_record = self._new_player_record(offender_key, offender)
            store.setdefault('players', {})[offender_key] = offender_record
        preview = self._restore_preview(victim, parsed_items)
        execution = []
        restore_done = False
        if execute_restore:
            commands = [row.get('online_command') for row in preview if str(row.get('online_command') or '').strip()]
            if not commands:
                return False, 'No hay un comando de devolución automática válido. Selecciona una víctima online o usa la vista previa manual.'
            restore_done = True
            for command in commands:
                ok, msg = self.send_telnet_command(command)
                execution.append({'command': command, 'ok': bool(ok), 'message': str(msg or '')})
                if not ok:
                    restore_done = False
        case = {
            'id': f"case_{secrets.token_hex(6)}",
            'created_at': self._history_now(),
            'actor': str(actor or 'panel'),
            'reason': str(reason or 'Robo'),
            'status': 'restored' if restore_done else ('restore_failed' if execute_restore else 'logged'),
            'offender_key': offender_key,
            'offender': {
                'name': str(offender.get('name') or offender_record.get('primary_name') if isinstance(offender_record, dict) else offender.get('name') or 'Jugador').strip(),
                'steamid': str(offender.get('steamid') or '').strip(),
                'eosid': str(offender.get('eosid') or '').strip(),
                'entityid': str(offender.get('entityid') or '').strip(),
                'slot': str(offender.get('slot') or '').strip(),
            },
            'victim': victim,
            'items': parsed_items,
            'restore_preview': preview,
            'execution': execution,
            'restore_executed_at': self._history_now() if execute_restore else '',
        }
        store.setdefault('cases', []).append(case)
        store['cases'] = list(store.get('cases') or [])[-500:]
        timeline_entry = {
            'at': case['created_at'],
            'type': 'theft_case',
            'case_id': case['id'],
            'victim': victim.get('name') or victim.get('steamid') or 'dueño',
            'items': ', '.join(f"{row['item']} x{row['quantity']}" for row in parsed_items[:6]),
            'status': case['status'],
            'actor': case['actor'],
            'reason': case['reason'],
        }
        if isinstance(offender_record, dict):
            offender_record['timeline'] = self._append_history_event(offender_record.get('timeline'), timeline_entry, 150)
        self.save_player_history_store(store)
        return True, case

    def player_action(self, action: str, player: dict, actor='panel', reason='', duration_value=30, duration_unit='days'):
        action = (action or '').strip().lower()
        if action == 'kick':
            target = self._player_target(player, prefer_stable=False)
            if not target:
                return False, 'No se pudo identificar al jugador para expulsarlo.'
            command = f'kick {target}' + (f' "{str(reason).replace(chr(34), "").strip()}"' if str(reason or '').strip() else '')
            ok, msg = self.send_telnet_command(command)
            self._record_moderation(player, 'kick', actor, reason, command, msg, ok)
            return ok, msg
        if action == 'ban':
            target = self._player_target(player, prefer_stable=True)
            if not target:
                return False, 'No se pudo identificar al jugador para banearlo.'
            try:
                duration_num = max(1, int(float(duration_value or 30)))
            except Exception:
                duration_num = 30
            unit = str(duration_unit or 'days').strip().lower()
            if unit not in {'minutes', 'hours', 'days', 'weeks', 'months', 'years'}:
                unit = 'days'
            reason_clean = str(reason or 'Robo').replace('"', '').strip()
            command = f'ban add {target} {duration_num} {unit}' + (f' "{reason_clean}"' if reason_clean else '')
            ok, msg = self.send_telnet_command(command)
            self._record_moderation(player, 'ban', actor, reason_clean, command, msg, ok)
            return ok, msg
        if action == 'unban':
            target = self._player_target(player, prefer_stable=True)
            if not target:
                return False, 'No se pudo identificar al jugador para quitarle el ban.'
            command = f'ban remove {target}'
            ok, msg = self.send_telnet_command(command)
            self._record_moderation(player, 'unban', actor, reason, command, msg, ok)
            return ok, msg
        return False, 'Acción de jugador no soportada.'

    def stop_manager(self):
        self.manager_paused = True
        try:
            self.stop_bot()
        except Exception:
            pass
        self.auto_restart_scheduled_at = None
        self.log('Manager detenido temporalmente desde el panel.')
        return True, 'Manager detenido.'

    def start_manager(self):
        if not self.manager_paused:
            return True, 'El manager ya está en marcha.'
        self.manager_paused = False
        self.log('Manager reanudado desde el panel.')
        return True, 'Manager iniciado de nuevo.'

    def monitor_loop(self):
        while not self.shutdown_requested:
            time.sleep(1)
            with self.lock:
                proc = self.server_process
                cfg = dict(self.config)
                desired = bool(self.desired_server_running)
                paused = bool(self.manager_paused)
            if paused:
                self.auto_restart_scheduled_at = None
                continue
            try:
                self.run_scheduled_tasks()
            except Exception as exc:
                self.log(f'Error en tareas programadas: {exc}')
            if proc and proc.poll() is None:
                try:
                    self.run_inventory_snapshot_cycle()
                except Exception as exc:
                    self.log(f'Error guardando snapshots de inventario: {exc}')
            if not desired or not cfg.get('auto_restart_enabled'):
                self.auto_restart_scheduled_at = None
                continue
            if not proc:
                continue
            if proc.poll() is None:
                self.auto_restart_scheduled_at = None
                try:
                    self._maybe_run_watchdog(proc, cfg)
                except Exception as exc:
                    self.log(f'Error en watchdog del servidor: {exc}')
                continue
            exit_pid = proc.pid
            if self.auto_restart_last_exit_pid != exit_pid:
                delay = max(3, int(cfg.get('auto_restart_delay_seconds') or 15))
                self.auto_restart_last_exit_pid = exit_pid
                self.auto_restart_scheduled_at = time.time() + delay
                self.log(f'El servidor se ha parado. Auto reinicio programado en {delay} segundos.')
                try:
                    self.notify_manager_discord('crash', 'Servidor caído', f"{self.config.get('server_name','KarmaWorld')} se ha parado de forma inesperada. Auto reinicio en {delay} segundos.", {'server_name': self.config.get('server_name','KarmaWorld'), 'delay': delay})
                except Exception:
                    pass
                continue
            if self.auto_restart_scheduled_at and time.time() >= self.auto_restart_scheduled_at:
                self.log('Intentando auto reinicio del servidor...')
                ok, msg = self.start_server(mark_desired=True)
                if ok:
                    self.log('Auto reinicio completado.')
                    try:
                        self.notify_manager_discord('autorestart', 'Auto reinicio completado', f"{self.config.get('server_name','KarmaWorld')} se ha vuelto a iniciar automáticamente.", {'server_name': self.config.get('server_name','KarmaWorld')})
                    except Exception:
                        pass
                else:
                    delay = max(3, int(cfg.get('auto_restart_delay_seconds') or 15))
                    self.auto_restart_scheduled_at = time.time() + delay
                    self.log(f'Auto reinicio fallido: {msg}')


initialize_runtime_storage()


# --- FIX v32: reattach methods accidentally nested under get_latest_inventory_snapshot ---
ManagerState._format_size_gb = _format_size_gb
ManagerState._safe_disk_usage = _safe_disk_usage
ManagerState._safe_windows_memory = _safe_windows_memory
ManagerState._safe_process_memory = _safe_process_memory
ManagerState.performance_snapshot = performance_snapshot
ManagerState.get_latest_inventory_snapshot = get_latest_inventory_snapshot

def status(self):
    proc_running = bool(self.server_process and self.server_process.poll() is None)
    bot_running = bool(self.bot_process and self.bot_process.poll() is None)
    if not bot_running:
        pid_file_pid = self._read_bot_pid_dynamic()
        if pid_file_pid and is_pid_running(pid_file_pid):
            bot_running = True
            self.bot_pid = pid_file_pid
            if not self.bot_started_at:
                self.bot_started_at = datetime.now().isoformat(timespec='seconds')
        elif pid_file_pid:
            self._remove_bot_pid_dynamic()
    return {
        'config': self.config,
        'running': proc_running,
        'bot_running': bot_running,
        'bot_pid': self.bot_pid if bot_running else None,
        'bot_started_at': self.bot_started_at if bot_running else None,
        'bot_config': self.load_bot_config(),
        'pid': self.server_pid if proc_running else None,
        'started_at': self.server_started_at if proc_running else None,
        'console_lines': list(self.console_lines)[-300:],
        'chat_lines': list(self.chat_lines)[-100:],
        'players_cache': self.players_cache,
        'last_players_refresh': self.last_players_refresh,
        'tasks': self.get_collection('tasks'),
        'last_error': self.last_error,
        'desired_server_running': self.desired_server_running,
        'auto_restart_scheduled_at': self.auto_restart_scheduled_at,
        'manager_paused': self.manager_paused,
        'manager_started_at': self.manager_started_at,
        'performance': self.performance_snapshot(),
    }

ManagerState.status = status

def browse(self, mode='file', title='Selecciona', initial='', filters=None):
    try:
        import tkinter as tk
        from tkinter import filedialog
    except Exception as exc:
        return False, f'Tkinter no está disponible: {exc}'
    try:
        root = tk.Tk()
        root.withdraw()
        root.attributes('-topmost', True)
        if mode == 'folder':
            value = filedialog.askdirectory(title=title, initialdir=initial or None)
        else:
            filetypes = filters or [('Todos los archivos', '*.*')]
            value = filedialog.askopenfilename(title=title, initialdir=initial or None, filetypes=filetypes)
        root.destroy()
        if not value:
            return False, ''
        return True, value.replace('\\', '/')
    except Exception as exc:
        return False, f'No se pudo abrir el selector: {exc}'

ManagerState.browse = browse

def _is_noisy_telnet_line(self, line: str):
    text = str(line or '').strip()
    if not text:
        return True
    lowered = text.lower()
    noisy_contains = (
        'telnet connection from:',
        'started thread',
        'telnetclient_',
        'vehiclemanager saving',
        'vehiclemanager saved',
        'please enter password',
        'press "exit" to end session',
    )
    if any(token in lowered for token in noisy_contains):
        return True
    if lowered.startswith('version:') or lowered.startswith('game version:'):
        return True
    if re.match(r'^\d{2}-\d{2}t\d{2}:\d{2}:\d{2}.*\binf\b', lowered):
        return True
    return False

ManagerState._is_noisy_telnet_line = _is_noisy_telnet_line

def _clean_telnet_response_text(self, response: str):
    lines = []
    for raw in str(response or '').splitlines():
        line = str(raw or '').strip()
        if not line or self._is_noisy_telnet_line(line):
            continue
        if line not in lines:
            lines.append(line)
    return '\n'.join(lines).strip()

ManagerState._clean_telnet_response_text = _clean_telnet_response_text

def _normalize_telnet_text(self, value: str):
    raw = str(value or '')
    if not raw:
        return ''
    raw = unicodedata.normalize('NFKC', raw)
    swaps = {
        '\u201c':'"', '\u201d':'"', '\u201e':'"', '\u00ab':'"', '\u00bb':'"',
        '\u2018':"'", '\u2019':"'", '\u201a':"'", '\u2032':"'",
        '\u2013':'-', '\u2014':'-', '\u2212':'-',
        '\u00a0':' ', '\t':' ', '\r':' ', '\n':' '
    }
    for src, dst in swaps.items():
        raw = raw.replace(src, dst)
    raw = re.sub(r'\s+', ' ', raw).strip()
    return raw

ManagerState._normalize_telnet_text = _normalize_telnet_text

def _ascii_fallback(self, value: str):
    text = str(value or '')
    if not text:
        return ''
    normalized = unicodedata.normalize('NFKD', text)
    normalized = ''.join(ch for ch in normalized if not unicodedata.combining(ch))
    normalized = normalized.replace('ñ', 'n').replace('Ñ', 'N')
    normalized = normalized.replace('“', '"').replace('”', '"').replace('‘', "'").replace('’', "'")
    return self._normalize_telnet_text(normalized)

ManagerState._ascii_fallback = _ascii_fallback

def _build_telnet_candidates(self, command: str):
    cleaned = self._normalize_telnet_text(command)
    if not cleaned:
        return []
    lower = cleaned.lower()
    if not lower.startswith('say '):
        return [cleaned]
    raw_message = cleaned[4:].strip()
    if not raw_message:
        return []
    quote = ''
    message = raw_message
    if len(raw_message) >= 2 and ((raw_message[0] == '"' and raw_message[-1] == '"') or (raw_message[0] == "'" and raw_message[-1] == "'")):
        quote = raw_message[0]
        message = raw_message[1:-1].strip()
    message = self._normalize_telnet_text(message)
    if not message:
        return []
    candidates = []
    if quote:
        candidates.append(f'say {quote}{message}{quote}')
    candidates.append(f'say {message}')
    ascii_message = self._ascii_fallback(message)
    if ascii_message and ascii_message != message:
        if quote:
            candidates.append(f'say {quote}{ascii_message}{quote}')
        candidates.append(f'say {ascii_message}')
    seen = []
    for item in candidates:
        if item not in seen:
            seen.append(item)
    return seen

ManagerState._build_telnet_candidates = _build_telnet_candidates

def _execute_telnet_once(self, command: str, connect_timeout=5, socket_timeout=2, encoding='cp1252'):
    host = (self.config.get('telnet_host') or '127.0.0.1').strip()
    port = int(self.config.get('telnet_port') or 8081)
    password = (self.config.get('telnet_password') or '').strip()
    with socket.create_connection((host, port), timeout=connect_timeout) as sock:
        sock.settimeout(socket_timeout)
        if password:
            try:
                sock.recv(4096)
            except Exception:
                pass
            sock.sendall((password + '\r\n').encode(encoding, errors='replace'))
            time.sleep(0.25)
            try:
                sock.recv(4096)
            except Exception:
                pass
        sock.sendall((command.strip() + '\r\n').encode(encoding, errors='replace'))
        time.sleep(0.45)
        chunks = []
        while True:
            try:
                part = sock.recv(4096)
            except socket.timeout:
                break
            if not part:
                break
            chunks.append(part)
            if len(part) < 4096:
                break
        raw = b''.join(chunks)
        for dec in ('cp1252', 'latin-1', 'utf-8'):
            try:
                response = raw.decode(dec, errors='ignore').strip()
                break
            except Exception:
                response = ''
        return response

ManagerState._execute_telnet_once = _execute_telnet_once

def test_task_command(self, command: str):
    prepared = self._normalize_telnet_text(command)
    if not prepared:
        return False, 'Escribe un comando.'
    self.log(f'Test manual de automatización: enviando comando -> {prepared}')
    ok, msg = self.send_telnet_command(prepared, log_response=True, chat_side_effect=True)
    if ok:
        self.log(f'Test manual de automatización completado: {msg}')
        return True, msg or 'Comando enviado.'
    self.log(f'Test manual de automatización falló: {msg}')
    return False, msg or 'No se pudo enviar el comando.'

ManagerState.test_task_command = test_task_command

def send_telnet_command(self, command: str, log_response=True, chat_side_effect=True, connect_timeout=5, socket_timeout=2):
    prepared = self._normalize_telnet_text(command)
    candidates = self._build_telnet_candidates(prepared)
    if not candidates:
        return False, 'Comando vacío.'
    last_error = ''
    for candidate in candidates:
        is_say = candidate.lower().startswith('say ')
        has_non_ascii = any(ord(ch) > 127 for ch in candidate)
        # 7DTD suele llevar mejor UTF-8 para tildes/ñ en mensajes `say`.
        # Antes se probaban codepages ANSI/OEM primero y el servidor aceptaba
        # el envío, pero mostraba caracteres rotos (V�tanos, despu�s...).
        # Dejamos UTF-8 como primera opción en mensajes con caracteres no ASCII.
        if is_say and has_non_ascii:
            encodings = ('utf-8', 'cp1252', 'latin-1', 'cp850', 'cp437')
        elif is_say:
            encodings = ('utf-8', 'cp850', 'cp437', 'cp1252', 'latin-1')
        else:
            encodings = ('cp1252', 'latin-1', 'utf-8')
        last_response = ''
        for idx, encoding in enumerate(encodings):
            try:
                if is_say:
                    self.log(f'SAY test -> {candidate} [{encoding}]')
                response = self._execute_telnet_once(candidate, connect_timeout=connect_timeout, socket_timeout=socket_timeout, encoding=encoding)
                cleaned_response = self._clean_telnet_response_text(response)
                last_response = cleaned_response or response or ''
                if chat_side_effect and is_say:
                    msg = candidate[4:].strip()
                    if len(msg) >= 2 and msg[0] == '"' and msg[-1] == '"':
                        msg = msg[1:-1]
                    self.chat_log(msg)
                if log_response and cleaned_response:
                    for line in cleaned_response.splitlines():
                        self.log(line)
                if is_say:
                    self.log(f'SAY enviado con codificación {encoding}.')
                return True, last_response or 'Comando enviado.'
            except Exception as exc:
                last_error = f'Error telnet: {exc}'
                if is_say:
                    self.log(f'SAY falló con {encoding}: {exc}')
                if idx < len(encodings) - 1:
                    continue
        if is_say and last_response:
            return True, last_response
    return False, last_error or 'No se pudo enviar el comando por telnet.'

ManagerState.send_telnet_command = send_telnet_command

def _watchdog_telnet_ready(self):
    host = str(self.config.get('telnet_host') or '').strip()
    try:
        port = int(self.config.get('telnet_port') or 0)
    except Exception:
        port = 0
    return bool(host and port > 0)

ManagerState._watchdog_telnet_ready = _watchdog_telnet_ready

def _watchdog_healthcheck(self, cfg):
    if not self._watchdog_telnet_ready():
        return False, 'Telnet no configurado.'
    command = str(cfg.get('watchdog_telnet_command') or 'listplayers').strip() or 'listplayers'
    return self.send_telnet_command(command, log_response=False, chat_side_effect=False, connect_timeout=3, socket_timeout=1.5)

ManagerState._watchdog_healthcheck = _watchdog_healthcheck

def _recover_hung_server(self, reason: str, idle_for: int):
    delay = max(3, int(self.config.get('auto_restart_delay_seconds') or 15))
    server_name = str(self.config.get('server_name') or 'KarmaWorld')
    detail = str(reason or 'Sin respuesta').strip()
    self.server_watchdog_last_reason = detail
    self.server_watchdog_restart_count = int(self.server_watchdog_restart_count or 0) + 1
    self.server_watchdog_fail_count = 0
    self.auto_restart_scheduled_at = None
    self.log(f'Watchdog: servidor sin respuesta durante {idle_for}s. Reinicio forzado en curso. {detail}')
    try:
        self.notify_manager_discord('crash', 'Servidor bloqueado', f"{server_name} parece bloqueado o sin respuesta. Reinicio automático en curso.", {'server_name': server_name, 'delay': delay})
    except Exception:
        pass
    self.desired_server_running = True
    ok_stop, msg_stop = self._stop_process_direct()
    if not ok_stop:
        self.log(f'Watchdog: no se pudo detener limpiamente el proceso: {msg_stop}')
    else:
        time.sleep(2)
    ok_start, msg_start = self.start_server(mark_desired=True)
    if ok_start:
        self.log('Watchdog: servidor levantado de nuevo automáticamente.')
        try:
            self.notify_manager_discord('autorestart', 'Auto reinicio completado', f"{server_name} se ha vuelto a iniciar automáticamente tras bloqueo.", {'server_name': server_name})
        except Exception:
            pass
        return
    self.log(f'Watchdog: no se pudo relanzar el servidor: {msg_start}')
    self.auto_restart_scheduled_at = time.time() + delay

ManagerState._recover_hung_server = _recover_hung_server

def _maybe_run_watchdog(self, proc, cfg):
    if not cfg.get('watchdog_enabled', True):
        return
    now = time.time()
    started = float(self.server_started_monotonic or 0.0)
    grace = max(30, int(cfg.get('watchdog_startup_grace_seconds') or 180))
    if started and (now - started) < grace:
        return
    interval = max(15, int(cfg.get('watchdog_check_interval_seconds') or 45))
    last_check = float(self.server_last_health_check_at or 0.0)
    if last_check and (now - last_check) < interval:
        return
    self.server_last_health_check_at = now
    ok, response = self._watchdog_healthcheck(cfg)
    if ok:
        self.server_last_telnet_ok_at = now
        self.server_watchdog_fail_count = 0
        return
    self.server_watchdog_fail_count = int(self.server_watchdog_fail_count or 0) + 1
    threshold = max(2, int(cfg.get('watchdog_fail_threshold') or 3))
    idle_ref = max(float(self.server_last_output_at or 0.0), float(self.server_last_telnet_ok_at or 0.0), started)
    idle_for = int(max(0.0, now - idle_ref)) if idle_ref else 0
    no_output_limit = max(120, int(cfg.get('watchdog_no_output_seconds') or 900))
    if self.server_watchdog_fail_count == 1 or self.server_watchdog_fail_count >= threshold:
        self.log(f'Watchdog: chequeo fallido {self.server_watchdog_fail_count}/{threshold}. {response}')
    if self.server_watchdog_fail_count < threshold:
        return
    if idle_for < no_output_limit:
        return
    self._recover_hung_server(str(response or 'Sin respuesta telnet'), idle_for)

ManagerState._maybe_run_watchdog = _maybe_run_watchdog

def _parse_player_line(self, raw: str):
    player = {
        'raw': raw,
        'slot': '',
        'name': '',
        'entityid': '',
        'steamid': '',
        'eosid': '',
        'ip': '',
        'x': None,
        'y': None,
        'z': None,
    }
    line = raw.strip()
    m = re.match(r'^\s*(\d+)[\s\.:\)-]+', line)
    if m:
        player['slot'] = m.group(1)
    key_patterns = {
        'slot': [r'(?:slotid|slot id|slot)\s*[=:]\s*([0-9]+)'],
        'entityid': [r'(?:entityid|entity id|entity|id)\s*[=:]\s*([0-9]+)'],
        'steamid': [
            r'(?:steamid|steam id|platformid|platform id|pltfmid|pltfm id)\s*[=:]\s*([A-Za-z0-9_\-]+)',
        ],
        'eosid': [
            r'(?:crossid|cross id|crossplatformid|cross platform id|eosid|eos id|playerid)\s*[=:]\s*([A-Za-z0-9_\-]+)',
        ],
        'ip': [r'(?:ip|addr|address)\s*[=:]\s*([0-9\.]+)'],
        'name': [
            r'(?:name|playername|player name)\s*[=:]\s*"([^"]+)"',
            r'(?:name|playername|player name)\s*[=:]\s*([^,]+)',
        ],
    }
    for key, patterns in key_patterns.items():
        for pattern in patterns:
            match = re.search(pattern, line, flags=re.IGNORECASE)
            if match:
                player[key] = match.group(1).strip()
                break
    pos_match = re.search(r'(?:pos|position)\s*[=:]?\s*[\(\[]\s*(-?\d+(?:\.\d+)?)\s*[, ]\s*(-?\d+(?:\.\d+)?)\s*[, ]\s*(-?\d+(?:\.\d+)?)\s*[\)\]]', line, flags=re.IGNORECASE)
    if pos_match:
        player['x'] = float(pos_match.group(1))
        player['y'] = float(pos_match.group(2))
        player['z'] = float(pos_match.group(3))
    else:
        xyz_match = re.search(r'x\s*[=:]\s*(-?\d+(?:\.\d+)?)\D+y\s*[=:]\s*(-?\d+(?:\.\d+)?)\D+z\s*[=:]\s*(-?\d+(?:\.\d+)?)', line, flags=re.IGNORECASE)
        if xyz_match:
            player['x'] = float(xyz_match.group(1))
            player['y'] = float(xyz_match.group(2))
            player['z'] = float(xyz_match.group(3))
    if not player['name']:
        no_prefix = re.sub(r'^\s*\d+[\s\.:\)-]+', '', line)
        for part in [p.strip(' \t,') for p in re.split(r'\s{2,}|,', no_prefix) if p.strip()]:
            low = part.lower()
            if '=' in part or low.startswith(('pos', 'steam', 'eos', 'id', 'ip', 'level', 'score')):
                continue
            if re.fullmatch(r'[0-9\-]+', part):
                continue
            player['name'] = part.strip('"')
            break
    if player['name']:
        player['name'] = player['name'].strip()
    return player

ManagerState._parse_player_line = _parse_player_line

def refresh_players(self):
    for cmd in ('listplayers', 'lp'):
        ok, response = self.send_telnet_command(cmd)
        if ok:
            players = []
            for line in response.splitlines():
                raw = line.strip()
                if not raw:
                    continue
                lower = raw.lower()
                if lower.startswith('total of') or 'players in the game' in lower:
                    continue
                if 'executing command' in lower or 'connection closed by host' in lower or 'telnet connection closed' in lower or 'exited thread telnetclient' in lower:
                    continue
                if not re.match(r'^\s*\d+[\s\.:\)-]+', raw):
                    continue
                parsed = self._parse_player_line(raw)
                if not self._is_probable_player_line(raw, parsed):
                    continue
                players.append(parsed)
            self.players_cache = players
            self.last_players_refresh = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            try:
                self.sync_player_history(players)
            except Exception as exc:
                self.log(f'Error actualizando historial de jugadores: {exc}')
            return True, players
    return False, []

ManagerState.refresh_players = refresh_players

def _inventory_api_base_urls(self):
    raw = str(self.config.get('inventory_api_base_url') or '').strip() or str(self.config.get('live_map_url') or '').strip()
    if not raw:
        return []
    raw = raw.rstrip('/')
    bases = [raw]
    if raw.endswith('/map'):
        bases.append(raw[:-4])
    elif raw.endswith('/webmap'):
        bases.append(raw[:-7])
    dedup = []
    for item in bases:
        if item and item not in dedup:
            dedup.append(item)
    return dedup

ManagerState._inventory_api_base_urls = _inventory_api_base_urls

def _inventory_icon_roots(self):
    candidates = []
    configured = str(self.config.get('item_icons_folder') or '').strip()
    if configured:
        candidates.append(Path(configured).expanduser())
    candidates.extend([
        RESOURCE_DIR / 'ItemIcons',
        ASSETS_DIR / 'ItemIcons',
        APP_HOME / 'ItemIcons',
    ])
    roots = []
    seen = set()
    for path in candidates:
        try:
            resolved = path.resolve()
        except Exception:
            resolved = path
        key = str(resolved).lower()
        if key in seen:
            continue
        seen.add(key)
        if path.exists() and path.is_dir():
            roots.append(path)
    return roots

ManagerState._inventory_icon_roots = _inventory_icon_roots

def find_item_icon(self, icon_name: str):
    raw = str(icon_name or '').strip()
    if not raw:
        return None
    raw = raw.replace('\\', '/').split('/')[-1]
    stems = []
    base = Path(raw).stem
    if base:
        stems.append(base)
    safe = re.sub(r'[^A-Za-z0-9_\-.]', '', raw)
    if safe:
        stems.append(Path(safe).stem)
    for root in self._inventory_icon_roots():
        for stem in stems:
            for suffix in ('.png', '.jpg', '.jpeg', '.webp'):
                candidate = root / f'{stem}{suffix}'
                if candidate.exists() and candidate.is_file():
                    return candidate
    return None

ManagerState.find_item_icon = find_item_icon

def _http_get_json(self, url: str, username: str = '', password: str = ''):
    req = urllib.request.Request(url)
    req.add_header('Accept', 'application/json')
    user = str(username or '').strip()
    pwd = str(password or '').strip()
    if user and pwd:
        token = base64.b64encode(f'{user}:{pwd}'.encode('utf-8')).decode('ascii')
        req.add_header('Authorization', f'Basic {token}')
    with urllib.request.urlopen(req, timeout=5) as resp:
        charset = resp.headers.get_content_charset() or 'utf-8'
        raw = resp.read().decode(charset, errors='ignore')
    return json.loads(raw)

ManagerState._http_get_json = _http_get_json

def _parse_inventory_api_payload(self, payload, player: dict):
    if not isinstance(payload, dict):
        return None
    bag = payload.get('bag', [])
    belt = payload.get('belt', [])
    equipment = payload.get('equipment', {})

    def normalize_item(item, slot=None, location=''):
        if not item:
            return None
        if not isinstance(item, dict):
            return None
        name = str(item.get('name') or item.get('item') or '').strip()
        count = int(item.get('count') or item.get('qnty') or 0)
        if not name and count <= 0:
            return None
        icon = str(item.get('icon') or name or '').strip()
        quality = item.get('quality')
        try:
            quality = int(quality) if quality is not None else None
        except Exception:
            quality = None
        return {
            'slot': slot,
            'location': location,
            'name': name,
            'count': count,
            'icon': icon,
            'quality': quality,
            'qualitycolor': str(item.get('qualitycolor') or '').strip(),
            'iconcolor': str(item.get('iconcolor') or '').strip(),
        }

    bag_items = [normalize_item(item, idx, 'bag') for idx, item in enumerate(bag)] if isinstance(bag, list) else []
    bag_items = [item for item in bag_items if item]
    belt_items = [normalize_item(item, idx, 'belt') for idx, item in enumerate(belt)] if isinstance(belt, list) else []
    belt_items = [item for item in belt_items if item]
    equipment_items = {}
    if isinstance(equipment, dict):
        for slot_name, item in equipment.items():
            normalized = normalize_item(item, slot_name, 'equipment')
            if normalized:
                equipment_items[str(slot_name)] = normalized
    if not bag_items and not belt_items and not equipment_items:
        return None
    return {
        'player': player,
        'source': 'allocs_api',
        'bag': bag_items,
        'belt': belt_items,
        'equipment': equipment_items,
        'updated_at': datetime.now().isoformat(timespec='seconds'),
    }

ManagerState._parse_inventory_api_payload = _parse_inventory_api_payload

def _fetch_inventory_via_web_api(self, player: dict):
    userid = str(player.get('steamid') or '').strip()
    if not userid:
        return False, 'Jugador sin identificador válido.'
    username = str(self.config.get('inventory_api_user') or 'admin').strip() or 'admin'
    password = str(self.config.get('inventory_api_password') or '').strip()
    errors = []
    for base in self._inventory_api_base_urls():
        candidates = [
            f"{base}/api/getplayerinventory?userid={urllib.parse.quote(userid)}&showiconname=true&showiconcolor=true",
            f"{base}/api/getplayerinventory?steamid={urllib.parse.quote(userid)}&showiconname=true&showiconcolor=true",
        ]
        for url in candidates:
            try:
                payload = self._http_get_json(url, username=username if password else '', password=password)
                data = self._parse_inventory_api_payload(payload, player)
                if data:
                    return True, data
            except Exception as exc:
                errors.append(str(exc))
    return False, errors[-1] if errors else 'API de inventario no disponible.'

ManagerState._fetch_inventory_via_web_api = _fetch_inventory_via_web_api

def _parse_inventory_telnet_response(self, response: str, player: dict):
    belt = []
    bag = []
    equipment = {}
    current_section = None
    found = False
    for raw in str(response or '').splitlines():
        line = raw.strip()
        if not line:
            continue
        lower = line.lower()
        if lower.startswith('tracker_item '):
            found = True
            payload = {}
            for part in line[len('tracker_item '):].split(','):
                if '=' not in part:
                    continue
                key, value = part.split('=', 1)
                payload[key.strip().lower()] = value.strip()
            location = payload.get('location', '').lower()
            slot_raw = payload.get('slot', '')
            slot = int(slot_raw) if str(slot_raw).isdigit() else slot_raw
            item = {
                'slot': slot,
                'location': location,
                'name': payload.get('item', ''),
                'count': int(payload.get('qnty') or 0),
                'icon': payload.get('item', ''),
                'quality': int(payload.get('quality') or -1) if str(payload.get('quality', '')).strip('-').isdigit() else None,
                'qualitycolor': '',
                'iconcolor': '',
            }
            if location == 'belt':
                belt.append(item)
            elif location in {'bag', 'backpack'}:
                bag.append(item)
            else:
                equipment[str(slot)] = item
            continue
        if lower.startswith('belt of player'):
            current_section = 'belt'
            continue
        if lower.startswith('bagpack of player') or lower.startswith('backpack of player'):
            current_section = 'bag'
            continue
        if lower.startswith('equipment of player'):
            current_section = 'equipment'
            continue
        match = re.match(r'^slot\s+([^:]+):\s*(\d{1,4})(?:\s*\*\s*|\s+)([^\-]+?)(?:\s*-\s*quality:\s*(-?\d+))?\s*$', line, flags=re.IGNORECASE)
        if match and current_section:
            found = True
            slot_raw = match.group(1).strip()
            slot = int(slot_raw) if slot_raw.isdigit() else slot_raw
            item = {
                'slot': slot,
                'location': current_section,
                'name': match.group(3).strip(),
                'count': int(match.group(2)),
                'icon': match.group(3).strip(),
                'quality': int(match.group(4)) if match.group(4) else None,
                'qualitycolor': '',
                'iconcolor': '',
            }
            if current_section == 'belt':
                belt.append(item)
            elif current_section == 'bag':
                bag.append(item)
            else:
                equipment[str(slot)] = item
    if not found:
        return None
    return {
        'player': player,
        'source': 'showinventory',
        'bag': sorted(bag, key=lambda x: (isinstance(x.get('slot'), str), x.get('slot'))),
        'belt': sorted(belt, key=lambda x: (isinstance(x.get('slot'), str), x.get('slot'))),
        'equipment': equipment,
        'updated_at': datetime.now().isoformat(timespec='seconds'),
    }

ManagerState._parse_inventory_telnet_response = _parse_inventory_telnet_response

def _inventory_targets(self, player: dict):
    targets = []
    for key in ('steamid', 'entityid', 'slot', 'name'):
        value = str(player.get(key) or '').strip()
        if not value:
            continue
        if key == 'name' and ' ' in value:
            value = '"' + value.replace('"', '') + '"'
        if value not in targets:
            targets.append(value)
    return targets

ManagerState._inventory_targets = _inventory_targets

def _fetch_inventory_via_telnet(self, player: dict):
    last_error = ''
    for target in self._inventory_targets(player):
        for command in (f'showinventory {target} kwpanel', f'si {target} kwpanel', f'showinventory {target}', f'si {target}'):
            ok, response = self.send_telnet_command(command)
            if not ok:
                last_error = str(response)
                continue
            parsed = self._parse_inventory_telnet_response(response, player)
            if parsed:
                return True, parsed
            last_error = str(response)
    return False, last_error or 'No se pudo leer el inventario por telnet.'

ManagerState._fetch_inventory_via_telnet = _fetch_inventory_via_telnet

def fetch_player_inventory(self, player: dict, snapshot_reason='manual'):
    if not isinstance(player, dict):
        return False, 'Jugador no válido.'
    ok, data = self._fetch_inventory_via_web_api(player)
    if ok:
        try:
            self.save_player_inventory_snapshot(player, data, reason=snapshot_reason)
        except Exception:
            pass
        return True, data
    ok, data = self._fetch_inventory_via_telnet(player)
    if ok:
        try:
            self.save_player_inventory_snapshot(player, data, reason=snapshot_reason)
        except Exception:
            pass
        return True, data
    return False, ('No se pudo leer el inventario. Para que funcione de verdad necesitas Allocs Server Fixes / Web API o el comando showinventory disponible en el servidor. ' + str(data or '')).strip()

ManagerState.fetch_player_inventory = fetch_player_inventory

def _inventory_snapshot_supported(self):
    if self._inventory_api_base_urls():
        return True
    host = str(self.config.get('telnet_host') or '').strip()
    password = str(self.config.get('telnet_password') or '').strip()
    try:
        port = int(self.config.get('telnet_port') or 0)
    except Exception:
        port = 0
    return bool(host and port and password)

ManagerState._inventory_snapshot_supported = _inventory_snapshot_supported

def _inventory_snapshot_signature(self, data):
    try:
        payload = json.dumps({
            'bag': data.get('bag') or [],
            'belt': data.get('belt') or [],
            'equipment': data.get('equipment') or {},
        }, ensure_ascii=False, sort_keys=True)
    except Exception:
        payload = str(data or '')
    return hashlib.sha1(payload.encode('utf-8', errors='ignore')).hexdigest()

ManagerState._inventory_snapshot_signature = _inventory_snapshot_signature

def _inventory_snapshot_summary(self, data):
    bag = list((data or {}).get('bag') or [])
    belt = list((data or {}).get('belt') or [])
    equipment = list(((data or {}).get('equipment') or {}).values())
    all_items = bag + belt + equipment
    total_stacks = len(all_items)
    total_items = 0
    for row in all_items:
        try:
            total_items += int(row.get('count') or 0)
        except Exception:
            pass
    return {'total_stacks': total_stacks, 'total_items': total_items}

ManagerState._inventory_snapshot_summary = _inventory_snapshot_summary

def save_player_inventory_snapshot(self, player: dict, inventory_data: dict, reason='manual'):
    if not isinstance(player, dict) or not isinstance(inventory_data, dict):
        return False
    store = self.load_player_history_store()
    players_map = store.setdefault('players', {})
    key, record = self._find_player_record(store, player=player)
    if not key:
        key = self._player_history_key(player)
    if not key:
        return False
    if not isinstance(record, dict):
        record = self._new_player_record(key, player)
        players_map[key] = record
    snapshot = {
        'at': self._history_now(),
        'reason': str(reason or 'manual'),
        'source': str(inventory_data.get('source') or ''),
        'updated_at': str(inventory_data.get('updated_at') or self._history_now()),
        'player': {
            'name': str(player.get('name') or '').strip(),
            'steamid': str(player.get('steamid') or '').strip(),
            'eosid': str(player.get('eosid') or '').strip(),
            'entityid': str(player.get('entityid') or '').strip(),
            'slot': str(player.get('slot') or '').strip(),
        },
        'bag': list(inventory_data.get('bag') or []),
        'belt': list(inventory_data.get('belt') or []),
        'equipment': dict(inventory_data.get('equipment') or {}),
    }
    summary = self._inventory_snapshot_summary(snapshot)
    snapshot.update(summary)
    snapshot['signature'] = self._inventory_snapshot_signature(snapshot)
    snapshots = list(record.get('inventory_snapshots') or [])
    changed = True
    if snapshots and isinstance(snapshots[-1], dict) and snapshots[-1].get('signature') == snapshot['signature']:
        previous = dict(snapshots[-1])
        previous['at'] = snapshot['at']
        previous['updated_at'] = snapshot['updated_at']
        previous['reason'] = snapshot['reason']
        previous['source'] = snapshot['source'] or previous.get('source') or ''
        previous['player'] = snapshot['player']
        previous['total_stacks'] = snapshot['total_stacks']
        previous['total_items'] = snapshot['total_items']
        snapshots[-1] = previous
        changed = False
    else:
        snapshots.append(snapshot)
    max_items = max(3, int(self.config.get('inventory_snapshot_max_per_player') or 12))
    record['inventory_snapshots'] = snapshots[-max_items:]
    record['last_inventory_snapshot_at'] = snapshot['at']
    record['last_inventory_source'] = snapshot['source']
    record['last_inventory_summary'] = {'total_stacks': snapshot['total_stacks'], 'total_items': snapshot['total_items']}
    if changed:
        timeline_entry = {
            'at': snapshot['at'],
            'type': 'inventory_snapshot',
            'reason': snapshot['reason'],
            'source': snapshot['source'],
            'items': f"{snapshot['total_stacks']} stacks · {snapshot['total_items']} items",
        }
        record['timeline'] = self._append_history_event(record.get('timeline'), timeline_entry, 150)
    self.save_player_history_store(store)
    return True

ManagerState.save_player_inventory_snapshot = save_player_inventory_snapshot

def run_inventory_snapshot_cycle(self):
    if not bool(self.config.get('inventory_snapshot_enabled', True)):
        return
    interval = max(15, int(self.config.get('inventory_snapshot_interval_seconds') or 60))
    now_ts = time.time()
    if now_ts - float(self.last_inventory_snapshot_cycle or 0.0) < interval:
        return
    self.last_inventory_snapshot_cycle = now_ts
    if not self._inventory_snapshot_supported():
        return
    ok, players = self.refresh_players()
    if not ok:
        return
    for player in list(players or []):
        if not isinstance(player, dict):
            continue
        try:
            self.fetch_player_inventory(player, snapshot_reason='auto_poll')
        except Exception:
            continue

ManagerState.run_inventory_snapshot_cycle = run_inventory_snapshot_cycle

def _history_now(self):
    return datetime.now().strftime('%Y-%m-%d %H:%M:%S')

ManagerState._history_now = _history_now

def _player_history_empty_store(self):
    return {
        'schema': 1,
        'updated_at': self._history_now(),
        'players': {},
        'cases': [],
    }

ManagerState._player_history_empty_store = _player_history_empty_store

def load_player_history_store(self):
    data = safe_load_json(self.player_history_path, self._player_history_empty_store())
    if not isinstance(data, dict):
        data = self._player_history_empty_store()
    players = data.get('players')
    if not isinstance(players, dict):
        players = {}
    cases = data.get('cases')
    if not isinstance(cases, list):
        cases = []
    data['players'] = players
    data['cases'] = cases
    data['schema'] = 1
    data['updated_at'] = str(data.get('updated_at') or self._history_now())
    return data

ManagerState.load_player_history_store = load_player_history_store

def save_player_history_store(self, store):
    payload = store if isinstance(store, dict) else self._player_history_empty_store()
    payload['schema'] = 1
    payload['updated_at'] = self._history_now()
    safe_write_json(self.player_history_path, payload)

ManagerState.save_player_history_store = save_player_history_store

def _merge_text_list(self, items, value, limit=20):
    result = [str(x).strip() for x in list(items or []) if str(x or '').strip()]
    text = str(value or '').strip()
    if text and text not in result:
        result.append(text)
    return result[-limit:]

ManagerState._merge_text_list = _merge_text_list

def _player_history_key(self, player: dict):
    if not isinstance(player, dict):
        return ''
    steamid = str(player.get('steamid') or '').strip()
    if steamid:
        return f'steam:{steamid}'
    eosid = str(player.get('eosid') or '').strip()
    if eosid:
        return f'eos:{eosid}'
    name = str(player.get('name') or '').strip().lower()
    if name:
        return f'name:{name}'
    entityid = str(player.get('entityid') or '').strip()
    if entityid:
        return f'entity:{entityid}'
    slot = str(player.get('slot') or '').strip()
    if slot:
        return f'slot:{slot}'
    return ''

ManagerState._player_history_key = _player_history_key

def _find_player_record(self, store, player=None, key=''):
    players = store.get('players', {}) if isinstance(store, dict) else {}
    requested = str(key or '').strip()
    if requested and requested in players:
        return requested, players.get(requested)
    candidate_keys = []
    if isinstance(player, dict):
        base = self._player_history_key(player)
        if base:
            candidate_keys.append(base)
        for alt in (
            f"steam:{str(player.get('steamid') or '').strip()}",
            f"eos:{str(player.get('eosid') or '').strip()}",
            f"name:{str(player.get('name') or '').strip().lower()}",
            f"entity:{str(player.get('entityid') or '').strip()}",
        ):
            if alt and alt not in candidate_keys:
                candidate_keys.append(alt)
    for candidate in candidate_keys:
        if candidate in players:
            return candidate, players.get(candidate)
    for rec_key, rec in players.items():
        if not isinstance(rec, dict):
            continue
        if isinstance(player, dict):
            name = str(player.get('name') or '').strip()
            if name and name in list(rec.get('names') or []):
                return rec_key, rec
            steamid = str(player.get('steamid') or '').strip()
            if steamid and steamid in list(rec.get('steamids') or []):
                return rec_key, rec
            eosid = str(player.get('eosid') or '').strip()
            if eosid and eosid in list(rec.get('eosids') or []):
                return rec_key, rec
    return '', None

ManagerState._find_player_record = _find_player_record

def _new_player_record(self, key: str, player: dict):
    name = str((player or {}).get('name') or '').strip() or 'Jugador sin nombre'
    return {
        'key': key,
        'primary_name': name,
        'names': [name] if name else [],
        'steamids': [str((player or {}).get('steamid') or '').strip()] if str((player or {}).get('steamid') or '').strip() else [],
        'eosids': [str((player or {}).get('eosid') or '').strip()] if str((player or {}).get('eosid') or '').strip() else [],
        'entityids': [str((player or {}).get('entityid') or '').strip()] if str((player or {}).get('entityid') or '').strip() else [],
        'ips': [str((player or {}).get('ip') or '').strip()] if str((player or {}).get('ip') or '').strip() else [],
        'slots': [str((player or {}).get('slot') or '').strip()] if str((player or {}).get('slot') or '').strip() else [],
        'first_seen': self._history_now(),
        'last_seen': self._history_now(),
        'last_position': self._player_position_payload(player),
        'last_raw': str((player or {}).get('raw') or ''),
        'online': True,
        'sightings_count': 0,
        'timeline': [],
        'moderation': [],
        'inventory_snapshots': [],
        'last_inventory_snapshot_at': '',
        'last_inventory_source': '',
        'last_inventory_summary': {},
    }

ManagerState._new_player_record = _new_player_record

def _player_position_text(self, player: dict):
    if not isinstance(player, dict):
        return '-'
    if str(player.get('text') or '').strip() and player.get('x') is None and player.get('z') is None:
        return str(player.get('text') or '').strip()
    x = player.get('x')
    z = player.get('z')
    if x is None or z is None:
        return str(player.get('text') or '-').strip() or '-'
    try:
        x_val = round(float(x))
        z_val = round(float(z))
        y_raw = player.get('y')
        if y_raw is not None and str(y_raw) != '':
            y_val = round(float(y_raw))
            return f'{x_val}, {y_val}, {z_val}'
        return f'{x_val}, {z_val}'
    except Exception:
        return '-'

ManagerState._player_position_text = _player_position_text

def _player_position_payload(self, player: dict):
    if not isinstance(player, dict):
        return None
    x = player.get('x')
    z = player.get('z')
    if x is None or z is None:
        return None
    payload = {'text': self._player_position_text(player)}
    try:
        payload['x'] = float(x)
    except Exception:
        payload['x'] = None
    try:
        payload['y'] = float(player.get('y')) if player.get('y') is not None else None
    except Exception:
        payload['y'] = None
    try:
        payload['z'] = float(z)
    except Exception:
        payload['z'] = None
    return payload

ManagerState._player_position_payload = _player_position_payload

def _append_history_event(self, events, item, limit=120):
    seq = list(events or [])
    if item:
        seq.append(item)
    return seq[-limit:]

ManagerState._append_history_event = _append_history_event

def _is_probable_player_line(self, raw: str, player=None):
    line = str(raw or '').strip()
    if not line:
        return False
    lowered = line.lower()
    noisy_tokens = (
        ' telnet connection',
        'started thread',
        'telnetclient_',
        'vehiclemanager saving',
        'vehiclemanager saved',
        ' chat (from ',
        'chat handled by mod',
        ' sleepervolume ',
        'heap:',
        ' chunks:',
        ' rss:',
        ' killed by ',
        ' entity ',
        '[prismacore]',
    )
    if any(token in lowered for token in noisy_tokens):
        return False
    if re.match(r'^\d{2}-\d{2}t\d{2}:\d{2}:\d{2}', lowered):
        return False
    parsed = player if isinstance(player, dict) else self._parse_player_line(line)
    meaningful_id = any(str(parsed.get(key) or '').strip() for key in ('steamid', 'eosid', 'entityid', 'ip'))
    has_position = parsed.get('x') is not None and parsed.get('z') is not None
    keywords = ('steamid', 'steam id', 'entityid', 'entity id', 'eosid', 'eos id', 'crossid', 'playerid', 'position', ' pos', ' x=', ' x:', ' y=', ' y:', ' z=', ' z:', ' level', ' score', ' deaths', ' zombies', ' health', ' ip=')
    has_keywords = any(token in lowered for token in keywords)
    has_name = bool(str(parsed.get('name') or '').strip())
    return bool(has_name and (meaningful_id or has_position or has_keywords))

ManagerState._is_probable_player_line = _is_probable_player_line

def _history_record_is_noise(self, record):
    if not isinstance(record, dict):
        return True
    joined = ' | '.join([
        str(record.get('primary_name') or ''),
        ' '.join(str(x or '') for x in list(record.get('names') or [])),
        ' '.join(str(x or '') for x in list(record.get('steamids') or [])),
        ' '.join(str(x or '') for x in list(record.get('eosids') or [])),
        ' '.join(str(x or '') for x in list(record.get('entityids') or [])),
    ]).lower()
    noisy_tokens = (
        'inf ', 'wrn ', 'err ', 'sleepervolume', 'vehiclemanager', 'telnet connection',
        'started thread', 'telnetclient_', 'chat handled by mod', 'chat (from', 'non-player',
        'heap:', 'chunks:', 'rss:', 'killed by', '[prismacore]', 'time:'
    )
    if any(token in joined for token in noisy_tokens):
        return True
    has_ids = any(str(x or '').strip() for x in list(record.get('steamids') or []) + list(record.get('eosids') or []) + list(record.get('entityids') or []))
    has_name = bool(str(record.get('primary_name') or '').strip()) or any(str(x or '').strip() for x in list(record.get('names') or []))
    if not has_name:
        return True
    if not has_ids and not record.get('last_position'):
        return True
    return False

ManagerState._history_record_is_noise = _history_record_is_noise

def delete_player_history_entry(self, key: str):
    rec_key = str(key or '').strip()
    if not rec_key:
        return False, 'Falta la clave del historial.'
    store = self.load_player_history_store()
    players_map = store.setdefault('players', {})
    if rec_key not in players_map:
        return False, 'No existe esa entrada de historial.'
    players_map.pop(rec_key, None)
    cases = []
    for row in list(store.get('cases') or []):
        if not isinstance(row, dict):
            continue
        if str(row.get('offender_key') or '').strip() == rec_key:
            continue
        victim = row.get('victim') if isinstance(row.get('victim'), dict) else {}
        if str(victim.get('key') or '').strip() == rec_key:
            continue
        cases.append(row)
    store['cases'] = cases
    self.save_player_history_store(store)
    return True, 'Entrada de historial eliminada.'

ManagerState.delete_player_history_entry = delete_player_history_entry

def clear_player_history(self):
    self.save_player_history_store(self._player_history_empty_store())
    return True, 'Historial eliminado.'

ManagerState.clear_player_history = clear_player_history

def cleanup_player_history_noise(self):
    store = self.load_player_history_store()
    players_map = store.setdefault('players', {})
    removed_keys = []
    for key, record in list(players_map.items()):
        if self._history_record_is_noise(record):
            removed_keys.append(key)
            players_map.pop(key, None)
    if removed_keys:
        cleaned_cases = []
        removed_set = set(removed_keys)
        for row in list(store.get('cases') or []):
            if not isinstance(row, dict):
                continue
            if str(row.get('offender_key') or '').strip() in removed_set:
                continue
            victim = row.get('victim') if isinstance(row.get('victim'), dict) else {}
            if str(victim.get('key') or '').strip() in removed_set:
                continue
            cleaned_cases.append(row)
        store['cases'] = cleaned_cases
        self.save_player_history_store(store)
    return True, {'removed': len(removed_keys), 'keys': removed_keys}

ManagerState.cleanup_player_history_noise = cleanup_player_history_noise

def sync_player_history(self, players):
    store = self.load_player_history_store()
    players_map = store.setdefault('players', {})
    now = self._history_now()
    active_keys = set()
    for player in list(players or []):
        if not isinstance(player, dict):
            continue
        key, record = self._find_player_record(store, player=player)
        if not key:
            key = self._player_history_key(player)
        if not key:
            continue
        if not isinstance(record, dict):
            record = self._new_player_record(key, player)
            players_map[key] = record
        active_keys.add(key)
        name = str(player.get('name') or '').strip() or record.get('primary_name') or 'Jugador'
        record['key'] = key
        record['primary_name'] = name
        record['names'] = self._merge_text_list(record.get('names'), name)
        record['steamids'] = self._merge_text_list(record.get('steamids'), player.get('steamid'))
        record['eosids'] = self._merge_text_list(record.get('eosids'), player.get('eosid'))
        record['entityids'] = self._merge_text_list(record.get('entityids'), player.get('entityid'))
        record['ips'] = self._merge_text_list(record.get('ips'), player.get('ip'))
        record['slots'] = self._merge_text_list(record.get('slots'), player.get('slot'))
        was_online = bool(record.get('online'))
        if not str(record.get('first_seen') or '').strip():
            record['first_seen'] = now
        record['last_seen'] = now
        record['online'] = True
        record['last_raw'] = str(player.get('raw') or '')
        if not was_online:
            record['timeline'] = self._append_history_event(record.get('timeline'), {
                'at': now,
                'type': 'online',
                'name': name,
                'position': self._player_position_text(player),
            }, 150)
        record['last_position'] = self._player_position_payload(player)
        try:
            record['sightings_count'] = int(record.get('sightings_count') or 0) + 1
        except Exception:
            record['sightings_count'] = 1
        event = {
            'at': now,
            'type': 'seen',
            'name': name,
            'slot': str(player.get('slot') or ''),
            'entityid': str(player.get('entityid') or ''),
            'steamid': str(player.get('steamid') or ''),
            'eosid': str(player.get('eosid') or ''),
            'ip': str(player.get('ip') or ''),
            'position': self._player_position_text(player),
            'raw': str(player.get('raw') or ''),
        }
        timeline = list(record.get('timeline') or [])
        last_event = timeline[-1] if timeline else {}
        if not isinstance(last_event, dict) or last_event.get('raw') != event['raw']:
            record['timeline'] = self._append_history_event(timeline, event, 150)
        else:
            record['timeline'] = timeline[-150:]
    for rec_key, record in players_map.items():
        if not isinstance(record, dict):
            continue
        if rec_key not in active_keys:
            if bool(record.get('online')):
                record['timeline'] = self._append_history_event(record.get('timeline'), {
                    'at': now,
                    'type': 'offline',
                    'position': self._player_position_text(record.get('last_position') or {}),
                    'reason': record.get('last_inventory_snapshot_at') or '',
                }, 150)
            record['online'] = False
    self.save_player_history_store(store)

ManagerState.sync_player_history = sync_player_history

def player_history_overview(self):
    store = self.load_player_history_store()
    rows = []
    for key, record in store.get('players', {}).items():
        if not isinstance(record, dict):
            continue
        rows.append({
            'key': key,
            'primary_name': str(record.get('primary_name') or 'Jugador'),
            'names': list(record.get('names') or []),
            'steamids': list(record.get('steamids') or []),
            'eosids': list(record.get('eosids') or []),
            'entityids': list(record.get('entityids') or []),
            'ips': list(record.get('ips') or []),
            'slots': list(record.get('slots') or []),
            'first_seen': str(record.get('first_seen') or ''),
            'last_seen': str(record.get('last_seen') or ''),
            'last_position': record.get('last_position'),
            'online': bool(record.get('online')),
            'sightings_count': int(record.get('sightings_count') or 0),
            'moderation_count': len(list(record.get('moderation') or [])),
            'last_inventory_snapshot_at': str(record.get('last_inventory_snapshot_at') or ''),
            'last_inventory_summary': record.get('last_inventory_summary') or {},
            'snapshot_count': len(list(record.get('inventory_snapshots') or [])),
        })
    rows.sort(key=lambda row: str(row.get('last_seen') or ''), reverse=True)
    return rows

ManagerState.player_history_overview = player_history_overview

def player_history_profile(self, player=None, key=''):
    store = self.load_player_history_store()
    rec_key, record = self._find_player_record(store, player=player, key=key)
    if not isinstance(record, dict):
        if isinstance(player, dict) and self._player_history_key(player):
            rec_key = self._player_history_key(player)
            record = self._new_player_record(rec_key, player)
            record['online'] = any(self._player_history_key(p) == rec_key for p in list(self.players_cache or []) if isinstance(p, dict))
        else:
            return False, 'No hay historial para este jugador todavía.'
    related_cases = []
    names = set(str(x).strip() for x in list(record.get('names') or []) if str(x).strip())
    steamids = set(str(x).strip() for x in list(record.get('steamids') or []) if str(x).strip())
    eosids = set(str(x).strip() for x in list(record.get('eosids') or []) if str(x).strip())
    for case in list(store.get('cases') or []):
        if not isinstance(case, dict):
            continue
        victim = case.get('victim') if isinstance(case.get('victim'), dict) else {}
        offender = case.get('offender') if isinstance(case.get('offender'), dict) else {}
        if case.get('offender_key') == rec_key or victim.get('key') == rec_key:
            related_cases.append(case)
            continue
        if offender.get('steamid') in steamids or victim.get('steamid') in steamids:
            related_cases.append(case)
            continue
        if offender.get('eosid') in eosids or victim.get('eosid') in eosids:
            related_cases.append(case)
            continue
        if offender.get('name') in names or victim.get('name') in names:
            related_cases.append(case)
    related_cases = sorted(related_cases, key=lambda row: str(row.get('created_at') or ''), reverse=True)[:60]
    payload = dict(record)
    payload['timeline'] = list(payload.get('timeline') or [])[-60:]
    payload['moderation'] = list(payload.get('moderation') or [])[-60:]
    payload['inventory_snapshots'] = list(payload.get('inventory_snapshots') or [])[-8:]
    payload['latest_inventory_snapshot'] = payload['inventory_snapshots'][-1] if list(payload.get('inventory_snapshots') or []) else None
    return True, {'record': payload, 'cases': related_cases}

ManagerState.player_history_profile = player_history_profile

def _player_target(self, player: dict, prefer_stable=False):
    ordered = ('steamid', 'eosid', 'entityid', 'slot', 'name') if prefer_stable else ('slot', 'entityid', 'steamid', 'eosid', 'name')
    for key in ordered:
        value = str((player or {}).get(key) or '').strip()
        if not value:
            continue
        if key == 'name' and ' ' in value:
            return '"' + value.replace('"', '') + '"'
        return value
    return ''

ManagerState._player_target = _player_target

def _record_moderation(self, player: dict, action: str, actor: str, reason: str, command: str, response: str, success: bool):
    store = self.load_player_history_store()
    key, record = self._find_player_record(store, player=player)
    if not key:
        key = self._player_history_key(player)
    if not key:
        return
    if not isinstance(record, dict):
        record = self._new_player_record(key, player or {})
        store.setdefault('players', {})[key] = record
    entry = {
        'at': self._history_now(),
        'type': 'moderation',
        'action': str(action or ''),
        'actor': str(actor or 'panel'),
        'reason': str(reason or ''),
        'command': str(command or ''),
        'response': self._clean_telnet_response_text(response),
        'ok': bool(success),
    }
    record['moderation'] = self._append_history_event(record.get('moderation'), entry, 80)
    record['timeline'] = self._append_history_event(record.get('timeline'), entry, 150)
    self.save_player_history_store(store)

ManagerState._record_moderation = _record_moderation

def _parse_restore_items(self, items_text='', items=None):
    parsed = []
    source = []
    if isinstance(items, list):
        source = items
    else:
        source = str(items_text or '').splitlines()
    for row in source:
        if isinstance(row, dict):
            item = str(row.get('item') or row.get('name') or '').strip()
            qty_raw = row.get('quantity')
        else:
            line = str(row or '').strip()
            if not line:
                continue
            m = re.match(r'^\s*"?([^",;]+?)"?\s*(?:[,;]|\s+x\s+|\s+)(-?\d+)\s*$', line, flags=re.IGNORECASE)
            if m:
                item = m.group(1).strip()
                qty_raw = m.group(2)
            else:
                parts = line.split()
                if len(parts) < 2:
                    continue
                item = ' '.join(parts[:-1]).strip('" ')
                qty_raw = parts[-1]
        if not item:
            continue
        try:
            qty = int(float(qty_raw))
        except Exception:
            continue
        if qty <= 0:
            continue
        parsed.append({'item': item, 'quantity': qty})
    return parsed

ManagerState._parse_restore_items = _parse_restore_items

def _victim_payload_from_request(self, victim_player=None, victim_data=None):
    base = victim_player if isinstance(victim_player, dict) and victim_player else victim_data if isinstance(victim_data, dict) else {}
    payload = {
        'key': self._player_history_key(base) if isinstance(base, dict) else '',
        'name': str(base.get('name') or base.get('player_name') or '').strip() if isinstance(base, dict) else '',
        'steamid': str(base.get('steamid') or '').strip() if isinstance(base, dict) else '',
        'eosid': str(base.get('eosid') or '').strip() if isinstance(base, dict) else '',
        'entityid': str(base.get('entityid') or '').strip() if isinstance(base, dict) else '',
        'slot': str(base.get('slot') or '').strip() if isinstance(base, dict) else '',
    }
    if isinstance(victim_data, dict):
        for key in ('name', 'steamid', 'eosid', 'entityid', 'slot'):
            if str(victim_data.get(key) or '').strip():
                payload[key] = str(victim_data.get(key) or '').strip()
        if str(victim_data.get('key') or '').strip():
            payload['key'] = str(victim_data.get('key') or '').strip()
    return payload

ManagerState._victim_payload_from_request = _victim_payload_from_request

def _restore_preview(self, victim: dict, items: list):
    victim = victim if isinstance(victim, dict) else {}
    preview = []
    online_target = self._player_target(victim, prefer_stable=False)
    stable_target = self._player_target(victim, prefer_stable=True)
    for row in list(items or []):
        if not isinstance(row, dict):
            continue
        item = str(row.get('item') or '').strip()
        qty = int(row.get('quantity') or 0)
        if not item or qty <= 0:
            continue
        preview.append({
            'item': item,
            'quantity': qty,
            'online_command': f'give {online_target} {item} {qty}' if online_target else '',
            'offline_command': f'st-GiveItem {stable_target} {item} {qty}' if stable_target else '',
        })
    return preview

ManagerState._restore_preview = _restore_preview

def register_theft_case(self, offender: dict, victim_player=None, victim_data=None, items_text='', items=None, actor='panel', reason='', execute_restore=False):
    if not isinstance(offender, dict):
        return False, 'Jugador infractor no válido.'
    parsed_items = self._parse_restore_items(items_text=items_text, items=items)
    if not parsed_items:
        return False, 'No se han podido leer los objetos robados. Usa una línea por objeto: item cantidad'
    victim = self._victim_payload_from_request(victim_player=victim_player, victim_data=victim_data)
    if not any(str(victim.get(k) or '').strip() for k in ('name', 'steamid', 'eosid', 'entityid', 'slot')):
        return False, 'Indica el dueño al que hay que devolverle los objetos.'
    store = self.load_player_history_store()
    offender_key, offender_record = self._find_player_record(store, player=offender)
    if not offender_key:
        offender_key = self._player_history_key(offender)
    if not isinstance(offender_record, dict) and offender_key:
        offender_record = self._new_player_record(offender_key, offender)
        store.setdefault('players', {})[offender_key] = offender_record
    preview = self._restore_preview(victim, parsed_items)
    execution = []
    restore_done = False
    if execute_restore:
        commands = [row.get('online_command') for row in preview if str(row.get('online_command') or '').strip()]
        if not commands:
            return False, 'No hay un comando de devolución automática válido. Selecciona una víctima online o usa la vista previa manual.'
        restore_done = True
        for command in commands:
            ok, msg = self.send_telnet_command(command)
            execution.append({'command': command, 'ok': bool(ok), 'message': str(msg or '')})
            if not ok:
                restore_done = False
    case = {
        'id': f"case_{secrets.token_hex(6)}",
        'created_at': self._history_now(),
        'actor': str(actor or 'panel'),
        'reason': str(reason or 'Robo'),
        'status': 'restored' if restore_done else ('restore_failed' if execute_restore else 'logged'),
        'offender_key': offender_key,
        'offender': {
            'name': str(offender.get('name') or offender_record.get('primary_name') if isinstance(offender_record, dict) else offender.get('name') or 'Jugador').strip(),
            'steamid': str(offender.get('steamid') or '').strip(),
            'eosid': str(offender.get('eosid') or '').strip(),
            'entityid': str(offender.get('entityid') or '').strip(),
            'slot': str(offender.get('slot') or '').strip(),
        },
        'victim': victim,
        'items': parsed_items,
        'restore_preview': preview,
        'execution': execution,
        'restore_executed_at': self._history_now() if execute_restore else '',
    }
    store.setdefault('cases', []).append(case)
    store['cases'] = list(store.get('cases') or [])[-500:]
    timeline_entry = {
        'at': case['created_at'],
        'type': 'theft_case',
        'case_id': case['id'],
        'victim': victim.get('name') or victim.get('steamid') or 'dueño',
        'items': ', '.join(f"{row['item']} x{row['quantity']}" for row in parsed_items[:6]),
        'status': case['status'],
        'actor': case['actor'],
        'reason': case['reason'],
    }
    if isinstance(offender_record, dict):
        offender_record['timeline'] = self._append_history_event(offender_record.get('timeline'), timeline_entry, 150)
    self.save_player_history_store(store)
    return True, case

ManagerState.register_theft_case = register_theft_case

def player_action(self, action: str, player: dict, actor='panel', reason='', duration_value=30, duration_unit='days'):
    action = (action or '').strip().lower()
    if action == 'kick':
        target = self._player_target(player, prefer_stable=False)
        if not target:
            return False, 'No se pudo identificar al jugador para expulsarlo.'
        command = f'kick {target}' + (f' "{str(reason).replace(chr(34), "").strip()}"' if str(reason or '').strip() else '')
        ok, msg = self.send_telnet_command(command)
        self._record_moderation(player, 'kick', actor, reason, command, msg, ok)
        return ok, msg
    if action == 'ban':
        target = self._player_target(player, prefer_stable=True)
        if not target:
            return False, 'No se pudo identificar al jugador para banearlo.'
        try:
            duration_num = max(1, int(float(duration_value or 30)))
        except Exception:
            duration_num = 30
        unit = str(duration_unit or 'days').strip().lower()
        if unit not in {'minutes', 'hours', 'days', 'weeks', 'months', 'years'}:
            unit = 'days'
        reason_clean = str(reason or 'Robo').replace('"', '').strip()
        command = f'ban add {target} {duration_num} {unit}' + (f' "{reason_clean}"' if reason_clean else '')
        ok, msg = self.send_telnet_command(command)
        self._record_moderation(player, 'ban', actor, reason_clean, command, msg, ok)
        return ok, msg
    if action == 'unban':
        target = self._player_target(player, prefer_stable=True)
        if not target:
            return False, 'No se pudo identificar al jugador para quitarle el ban.'
        command = f'ban remove {target}'
        ok, msg = self.send_telnet_command(command)
        self._record_moderation(player, 'unban', actor, reason, command, msg, ok)
        return ok, msg
    return False, 'Acción de jugador no soportada.'

ManagerState.player_action = player_action

def stop_manager(self):
    self.manager_paused = True
    try:
        self.stop_bot()
    except Exception:
        pass
    self.auto_restart_scheduled_at = None
    self.log('Manager detenido temporalmente desde el panel.')
    return True, 'Manager detenido.'

ManagerState.stop_manager = stop_manager

def start_manager(self):
    if not self.manager_paused:
        return True, 'El manager ya está en marcha.'
    self.manager_paused = False
    self.log('Manager reanudado desde el panel.')
    return True, 'Manager iniciado de nuevo.'

ManagerState.start_manager = start_manager

def monitor_loop(self):
    while not self.shutdown_requested:
        time.sleep(1)
        with self.lock:
            proc = self.server_process
            cfg = dict(self.config)
            desired = bool(self.desired_server_running)
            paused = bool(self.manager_paused)
        if paused:
            self.auto_restart_scheduled_at = None
            continue
        try:
            self.run_scheduled_tasks()
        except Exception as exc:
            self.log(f'Error en tareas programadas: {exc}')
        if proc and proc.poll() is None:
            try:
                self.run_inventory_snapshot_cycle()
            except Exception as exc:
                self.log(f'Error guardando snapshots de inventario: {exc}')
        if not desired or not cfg.get('auto_restart_enabled'):
            self.auto_restart_scheduled_at = None
            continue
        if not proc:
            continue
        if proc.poll() is None:
            self.auto_restart_scheduled_at = None
            try:
                self._maybe_run_watchdog(proc, cfg)
            except Exception as exc:
                self.log(f'Error en watchdog del servidor: {exc}')
            continue
        exit_pid = proc.pid
        if self.auto_restart_last_exit_pid != exit_pid:
            delay = max(3, int(cfg.get('auto_restart_delay_seconds') or 15))
            self.auto_restart_last_exit_pid = exit_pid
            self.auto_restart_scheduled_at = time.time() + delay
            self.log(f'El servidor se ha parado. Auto reinicio programado en {delay} segundos.')
            try:
                self.notify_manager_discord('crash', 'Servidor caído', f"{self.config.get('server_name','KarmaWorld')} se ha parado de forma inesperada. Auto reinicio en {delay} segundos.", {'server_name': self.config.get('server_name','KarmaWorld'), 'delay': delay})
            except Exception:
                pass
            continue
        if self.auto_restart_scheduled_at and time.time() >= self.auto_restart_scheduled_at:
            self.log('Intentando auto reinicio del servidor...')
            ok, msg = self.start_server(mark_desired=True)
            if ok:
                self.log('Auto reinicio completado.')
                try:
                    self.notify_manager_discord('autorestart', 'Auto reinicio completado', f"{self.config.get('server_name','KarmaWorld')} se ha vuelto a iniciar automáticamente.", {'server_name': self.config.get('server_name','KarmaWorld')})
                except Exception:
                    pass
            else:
                delay = max(3, int(cfg.get('auto_restart_delay_seconds') or 15))
                self.auto_restart_scheduled_at = time.time() + delay
                self.log(f'Auto reinicio fallido: {msg}')

ManagerState.monitor_loop = monitor_loop
STATE = ManagerState()
INDEX_HTML = (STATIC_DIR / 'index.html').read_text(encoding='utf-8') if (STATIC_DIR / 'index.html').exists() else '<h1>Falta index.html</h1>'
APP_JS = (STATIC_DIR / 'app.js').read_text(encoding='utf-8') if (STATIC_DIR / 'app.js').exists() else ''
STYLES_CSS = (STATIC_DIR / 'styles.css').read_text(encoding='utf-8') if (STATIC_DIR / 'styles.css').exists() else ''
WALLET_HTML = (STATIC_DIR / 'wallet.html').read_text(encoding='utf-8') if (STATIC_DIR / 'wallet.html').exists() else '<h1>KarmaWorld Wallet</h1>'
WALLET_JS = (STATIC_DIR / 'wallet.js').read_text(encoding='utf-8') if (STATIC_DIR / 'wallet.js').exists() else ''
WALLET_CSS = (STATIC_DIR / 'wallet.css').read_text(encoding='utf-8') if (STATIC_DIR / 'wallet.css').exists() else ''
STAFF_HTML = (STATIC_DIR / 'staff.html').read_text(encoding='utf-8') if (STATIC_DIR / 'staff.html').exists() else '<h1>KarmaWorld Staff Panel</h1>'
STAFF_JS = (STATIC_DIR / 'staff.js').read_text(encoding='utf-8') if (STATIC_DIR / 'staff.js').exists() else ''
STAFF_CSS = (STATIC_DIR / 'staff.css').read_text(encoding='utf-8') if (STATIC_DIR / 'staff.css').exists() else ''


def build_public_base_url():
    store = STATE.get_collection('store')
    web = store.get('web', {}) if isinstance(store, dict) else {}
    host = str(web.get('public_ip') or STATE.config.get('panel_host') or '127.0.0.1').strip() or '127.0.0.1'
    port = int(web.get('public_port') or STATE.config.get('panel_port') or 8765)
    base = str(web.get('public_base_url') or '').strip()
    return base or f'http://{host}:{port}'


def get_discord_staff_config():
    store = STATE.get_collection('store')
    web = store.get('web', {}) if isinstance(store, dict) else {}
    discord = store.get('discord', {}) if isinstance(store, dict) else {}
    redirect_uri = str(web.get('discord_redirect_uri') or '').strip() or f"{build_public_base_url()}/auth/discord/callback"
    cfg = {
        'enabled': bool(web.get('staff_panel_enabled', True) and web.get('discord_link_enabled', True)),
        'client_id': str(web.get('discord_client_id') or '').strip(),
        'client_secret': str(web.get('discord_client_secret') or '').strip(),
        'redirect_uri': redirect_uri,
        'guild_id': str(discord.get('guild_id') or '').strip(),
        'bot_token': str(discord.get('bot_token') or '').strip(),
    }
    cfg['ready'] = bool(cfg['enabled'] and cfg['client_id'] and cfg['client_secret'] and cfg['guild_id'] and cfg['bot_token'])
    return cfg


def cleanup_staff_sessions():
    now = time.time()
    expired = [sid for sid, data in STAFF_SESSIONS.items() if now - float(data.get('created_at_ts', now)) > STAFF_SESSION_MAX_AGE]
    for sid in expired:
        STAFF_SESSIONS.pop(sid, None)


def parse_cookie_value(cookie_header, key):
    raw = str(cookie_header or '')
    for part in raw.split(';'):
        if '=' not in part:
            continue
        k, v = part.strip().split('=', 1)
        if k == key:
            return v
    return ''


def parse_csv_tokens(value):
    return [token.strip() for token in str(value or '').split(',') if token.strip()]


def build_staff_session_payload(user, member_role_ids, guild_roles=None):
    role_name_by_id = {}
    for row in guild_roles or []:
        role_name_by_id[str(row.get('id') or '')] = str(row.get('name') or '')
    matched_roles = []
    sections = set()
    commands = set()
    has_all = False
    for row in STATE.get_collection('permissions'):
        role_id = str(row.get('discord_role_id') or '').strip()
        role_name = str(row.get('name') or '').strip().lower()
        match = False
        if role_id and role_id in member_role_ids:
            match = True
        elif not role_id and role_name:
            for rid in member_role_ids:
                if role_name_by_id.get(str(rid), '').strip().lower() == role_name:
                    match = True
                    break
        if not match:
            continue
        matched_roles.append({
            'name': str(row.get('name') or ''),
            'level': int(row.get('level') or 0),
            'emoji': str(row.get('emoji') or '🛡️'),
            'color': str(row.get('color') or '#55a7ff'),
        })
        row_sections = parse_csv_tokens(row.get('panel_sections'))
        row_commands = parse_csv_tokens(row.get('commands'))
        sections.update(row_sections)
        commands.update(row_commands)
        if 'all' in [x.lower() for x in row_sections + row_commands]:
            has_all = True
    if has_all:
        sections.update(['dashboard', 'chat', 'players', 'teleports', 'store'])
    matched_roles.sort(key=lambda item: item.get('level', 9999))
    return {
        'user': user,
        'member_role_ids': list(member_role_ids),
        'matched_roles': matched_roles,
        'allowed_sections': sorted(sections),
        'allowed_commands': sorted(commands),
        'has_access': bool(matched_roles),
        'created_at_ts': time.time(),
    }


def staff_session_from_request(handler):
    cleanup_staff_sessions()
    sid = parse_cookie_value(handler.headers.get('Cookie', ''), STAFF_SESSION_COOKIE)
    if not sid:
        return None
    return STAFF_SESSIONS.get(sid)


def staff_has_access(session_data, section=None, command=None):
    if not session_data:
        return False
    sections = {str(x).lower() for x in session_data.get('allowed_sections', [])}
    commands = {str(x).lower() for x in session_data.get('allowed_commands', [])}
    if 'all' in sections or 'all' in commands:
        return True
    if section and str(section).lower() in sections:
        return True
    if command and str(command).lower() in commands:
        return True
    return False


def discord_api_request(url, method='GET', headers=None, data=None, json_body=False):
    req_headers = dict(headers or {})
    body = None
    if data is not None:
        if json_body:
            body = json.dumps(data).encode('utf-8')
            req_headers.setdefault('Content-Type', 'application/json')
        else:
            if isinstance(data, dict):
                body = urllib.parse.urlencode(data).encode('utf-8')
            elif isinstance(data, str):
                body = data.encode('utf-8')
            else:
                body = data
            req_headers.setdefault('Content-Type', 'application/x-www-form-urlencoded')
    req = urllib.request.Request(url, data=body, headers=req_headers, method=method)
    with urllib.request.urlopen(req, timeout=20) as response:
        raw = response.read().decode('utf-8')
        return json.loads(raw) if raw else {}




def _panel_hash_password(password: str) -> str:
    return hashlib.sha256(str(password or '').encode('utf-8')).hexdigest()


def _default_panel_user_template():
    return [
        {
            'id': 'admin_1',
            'username': 'cambia_este_usuario',
            'password': 'cambia_esta_contraseña',
            'enabled': False,
            'is_admin': True,
            'is_root': True,
            'sections': list(PANEL_SECTIONS_CATALOG),
            'actions': ['*'],
            '_note': 'Edita este archivo a mano para crear el acceso root principal del panel. Pon enabled=true y cambia usuario/contraseña. Ese usuario siempre tendrá todos los permisos.',
        }
    ]


def _ensure_panel_users_file():
    if PANEL_USERS_PATH.exists():
        return
    if PANEL_USERS_LEGACY_PATH.exists():
        try:
            safe_write_json(PANEL_USERS_PATH, safe_load_json(PANEL_USERS_LEGACY_PATH, []))
            return
        except Exception:
            pass
    safe_write_json(PANEL_USERS_PATH, _default_panel_user_template())


def _all_panel_action_keys():
    return [str(row.get('key') or '').strip().lower() for row in PANEL_ACTIONS_CATALOG if str(row.get('key') or '').strip()]


def _default_actions_for_sections(sections):
    section_set = {str(x or '').strip().lower() for x in (sections or []) if str(x or '').strip()}
    if not section_set or '*' in section_set or 'all' in section_set:
        return _all_panel_action_keys()
    out = []
    for row in PANEL_ACTIONS_CATALOG:
        section = str(row.get('section') or '').strip().lower()
        key = str(row.get('key') or '').strip().lower()
        if key and section in section_set and key not in out:
            out.append(key)
    return out


def _load_panel_users_raw():
    _ensure_panel_users_file()
    raw = safe_load_json(PANEL_USERS_PATH, [])
    return raw if isinstance(raw, list) else []


def _save_panel_users_raw(items):
    safe_write_json(PANEL_USERS_PATH, items if isinstance(items, list) else [])


def _normalize_panel_users(items):
    result = []
    seen = set()
    for idx, row in enumerate(items or []):
        if not isinstance(row, dict):
            continue
        username = str(row.get('username') or '').strip()
        if not username:
            continue
        key = username.lower()
        if key in seen:
            continue
        seen.add(key)
        password_hash = str(row.get('password_hash') or '').strip()
        if not password_hash and row.get('password'):
            password_hash = _panel_hash_password(str(row.get('password') or ''))
        if not password_hash:
            continue
        sections = row.get('sections') or []
        if isinstance(sections, str):
            sections = [x.strip() for x in sections.split(',') if x.strip()]
        clean_sections = []
        for sec in sections:
            sec = str(sec or '').strip().lower()
            if sec and sec not in clean_sections:
                clean_sections.append(sec)
        actions = row.get('actions') or []
        if isinstance(actions, str):
            actions = [x.strip() for x in actions.split(',') if x.strip()]
        clean_actions = []
        for act in actions:
            act = str(act or '').strip().lower()
            if act and act not in clean_actions:
                clean_actions.append(act)
        is_root = bool(row.get('is_root', False))
        is_admin = bool(row.get('is_admin', False)) or is_root
        enabled = bool(row.get('enabled', True))
        if is_root:
            clean_sections = list(PANEL_SECTIONS_CATALOG)
            clean_actions = ['*']
        elif is_admin:
            clean_actions = ['*']
        elif not clean_actions:
            clean_actions = _default_actions_for_sections(clean_sections or ['dashboard'])
        result.append({
            'id': str(row.get('id') or ('root_admin' if is_root else f'user_{idx+1}')),
            'username': username,
            'password_hash': password_hash,
            'enabled': enabled,
            'is_admin': is_admin,
            'is_root': is_root,
            'sections': clean_sections or ['dashboard'],
            'actions': clean_actions,
        })
    return result


def panel_auth_enabled():
    if bool(STATE.config.get('panel_auth_enabled')):
        return True
    try:
        for user in _normalize_panel_users(_load_panel_users_raw()):
            if bool(user.get('is_root')) and bool(user.get('enabled')):
                return True
    except Exception:
        pass
    return False


def panel_public_user_data(user):
    return {
        'id': str(user.get('id') or ''),
        'username': str(user.get('username') or ''),
        'enabled': bool(user.get('enabled', True)),
        'is_admin': bool(user.get('is_admin', False)),
        'is_root': bool(user.get('is_root', False)),
        'sections': list(user.get('sections') or []),
        'actions': list(user.get('actions') or []),
    }


def cleanup_panel_sessions():
    now = time.time()
    stale = [sid for sid, payload in PANEL_SESSIONS.items() if now - float(payload.get('created_at_ts') or 0) > PANEL_SESSION_MAX_AGE]
    for sid in stale:
        PANEL_SESSIONS.pop(sid, None)


def panel_session_from_request(handler):
    cleanup_panel_sessions()
    sid = parse_cookie_value(handler.headers.get('Cookie', ''), PANEL_SESSION_COOKIE)
    if not sid:
        return None
    return PANEL_SESSIONS.get(sid)


def panel_user_can(session_data, section=None, action=None):
    if not panel_auth_enabled():
        return True
    if not session_data:
        return False
    if session_data.get('is_root') or session_data.get('is_admin'):
        return True
    allowed_sections = {str(x).lower() for x in session_data.get('sections', [])}
    if section:
        sec = str(section).lower()
        if '*' not in allowed_sections and 'all' not in allowed_sections and sec not in allowed_sections:
            return False
    allowed_actions = {str(x).lower() for x in session_data.get('actions', [])}
    if action:
        act = str(action).lower()
        if allowed_actions and '*' not in allowed_actions and 'all' not in allowed_actions and act not in allowed_actions:
            return False
    return True


def path_required_section(path: str):
    path = str(path or '')
    mapping = [
        ('/api/serverconfig', 'serverconfig'),
        ('/api/bot/', 'discordbot'),
        ('/api/backups', 'backups'),
        ('/api/server/backup', 'backups'),
        ('/api/tasks', 'tasks'),
        ('/api/players', 'players'),
        ('/api/player/', 'inventory'),
        ('/api/console', 'server'),
        ('/api/server/', 'server'),
        ('/api/config/', 'settings'),
        ('/api/browse/', 'settings'),
        ('/api/notifications/', 'notifications'),
        ('/api/access/', 'access'),
        ('/api/state', 'dashboard'),
        ('/api/collections', 'dashboard'),
    ]
    for prefix, section in mapping:
        if path.startswith(prefix):
            return section
    return 'dashboard'


def path_required_permission(path: str, body=None):
    body = body or {}
    path = str(path or '')
    mapping = {
        '/api/state': ('dashboard', 'dashboard.refresh'),
        '/api/server/start': ('server', 'server.start'),
        '/api/server/stop': ('server', 'server.stop'),
        '/api/server/restart': ('server', 'server.restart'),
        '/api/server/backup': ('backups', 'backups.create'),
        '/api/server/manager-stop': ('server', 'manager.stop'),
        '/api/server/manager-start': ('server', 'manager.start'),
        '/api/bot/start': ('discordbot', 'discordbot.start'),
        '/api/bot/stop': ('discordbot', 'discordbot.stop'),
        '/api/bot/restart': ('discordbot', 'discordbot.restart'),
        '/api/bot/config/save': ('discordbot', 'discordbot.save'),
        '/api/telnet/send': ('console', 'console.send'),
        '/api/tasks/test-command': ('tasks', 'tasks.save'),
        '/api/chat/send': ('server', 'server.chat'),
        '/api/players/refresh': ('players', 'players.refresh'),
        '/api/players/history': ('players', None),
        '/api/players/history/delete': ('players', None),
        '/api/players/history/clear': ('players', None),
        '/api/players/history/cleanup': ('players', None),
        '/api/players/profile': ('players', None),
        '/api/players/case': ('players', 'players.restore'),
        '/api/player/inventory': ('inventory', 'inventory.load'),
        '/api/config/save': ('settings', 'settings.save'),
        '/api/config/export': ('settings', 'settings.export'),
        '/api/config/import': ('settings', 'settings.import'),
        '/api/splash/upload': ('settings', 'settings.change_splash'),
        '/api/notifications/test': ('notifications', 'notifications.test'),
        '/api/access/users/save': ('access', 'access.save'),
        '/api/access/users/list': ('access', None),
        '/api/backups': ('backups', 'backups.refresh'),
        '/api/backups/restore': ('backups', 'backups.restore'),
        '/api/backups/delete': ('backups', 'backups.delete'),
        '/api/serverconfig/save': ('serverconfig', 'serverconfig.save'),
        '/api/serverconfig/structured/save': ('serverconfig', 'serverconfig.save_structured'),
        '/api/serverconfig': ('serverconfig', 'serverconfig.load'),
        '/api/serverconfig/structured': ('serverconfig', 'serverconfig.load'),
        '/api/browse/folder': ('settings', 'settings.browse'),
        '/api/browse/file': ('settings', 'settings.browse'),
    }
    if path in mapping:
        return mapping[path]
    if path.startswith('/api/collections/tasks'):
        return ('tasks', 'tasks.save')
    if path.startswith('/api/collections/'):
        return ('dashboard', None)
    if path == '/api/player/action':
        action = str(body.get('action') or '').strip().lower()
        if action == 'kick':
            return ('players', 'players.kick')
        if action == 'ban':
            return ('players', 'players.ban')
        if action == 'unban':
            return ('players', 'players.unban')
        return ('players', None)
    return (path_required_section(path), None)


def authenticate_panel_user(username: str, password: str):
    target = str(username or '').strip().lower()
    pwd_hash = _panel_hash_password(password)
    for user in _normalize_panel_users(_load_panel_users_raw()):
        if str(user.get('username') or '').strip().lower() == target and user.get('enabled') and str(user.get('password_hash') or '') == pwd_hash:
            return user
    return None


def save_panel_users(items):
    existing = _normalize_panel_users(_load_panel_users_raw())
    locked_roots = [row for row in existing if bool(row.get('is_root'))]
    normalized = _normalize_panel_users(items)
    root_keys = {str(row.get('username') or '').strip().lower() for row in locked_roots}
    root_ids = {str(row.get('id') or '').strip().lower() for row in locked_roots}
    merged = list(locked_roots)
    seen = set(root_keys)
    for row in normalized:
        uname = str(row.get('username') or '').strip().lower()
        rid = str(row.get('id') or '').strip().lower()
        if row.get('is_root') or uname in root_keys or rid in root_ids:
            continue
        if uname in seen:
            continue
        seen.add(uname)
        merged.append(row)
    _save_panel_users_raw(merged)
    return [panel_public_user_data(row) for row in merged]


def panel_auth_status_payload(handler=None):
    session_data = panel_session_from_request(handler) if handler else None
    users = [panel_public_user_data(row) for row in _normalize_panel_users(_load_panel_users_raw())]
    return {
        'auth_enabled': panel_auth_enabled(),
        'logged_in': bool(session_data) or not panel_auth_enabled(),
        'user': panel_public_user_data(session_data) if session_data else None,
        'users': users,
        'sections_catalog': list(PANEL_SECTIONS_CATALOG),
        'actions_catalog': PANEL_ACTIONS_CATALOG,
    }

class Handler(BaseHTTPRequestHandler):
    server_version = 'KarmaWorldServerKit/9.0'

    def _json_body(self):
        try:
            length = int(self.headers.get('Content-Length', '0'))
        except ValueError:
            length = 0
        raw = self.rfile.read(length) if length else b'{}'
        if not raw:
            return {}
        try:
            return json.loads(raw.decode('utf-8'))
        except Exception:
            return {}

    def _send(self, body: bytes, content_type='text/plain; charset=utf-8', code=200):
        self.send_response(code)
        self.send_header('Content-Type', content_type)
        self.send_header('Cache-Control', 'no-store')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _send_json(self, data, code=200):
        self._send(json.dumps(data, ensure_ascii=False).encode('utf-8'), 'application/json; charset=utf-8', code)

    def _redirect(self, location: str, cookie_headers=None):
        self.send_response(302)
        self.send_header('Location', location)
        for row in cookie_headers or []:
            self.send_header('Set-Cookie', row)
        self.end_headers()

    def _not_found(self):
        self._send_json({'ok': False, 'message': 'No encontrado'}, 404)

    def log_message(self, fmt, *args):
        return

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path
        query = urllib.parse.parse_qs(parsed.query)
        if path == '/api/auth/status':
            self._send_json({'ok': True, 'data': panel_auth_status_payload(self)})
            return
        if path == '/':
            self._send(INDEX_HTML.encode('utf-8'), 'text/html; charset=utf-8')
            return
        if path == '/app.js':
            self._send(APP_JS.encode('utf-8'), 'application/javascript; charset=utf-8')
            return
        if path == '/styles.css':
            self._send(STYLES_CSS.encode('utf-8'), 'text/css; charset=utf-8')
            return
        if path in {'/wallet', '/wallet.js', '/wallet.css', '/staff', '/staff.js', '/staff.css', '/api/staff/bootstrap', '/api/staff/logout', '/auth/discord/start', '/auth/discord/callback', '/api/store/public'}:
            self._not_found()
            return
        if path == '/wallet':
            self._send(WALLET_HTML.encode('utf-8'), 'text/html; charset=utf-8')
            return
        if path == '/wallet.js':
            self._send(WALLET_JS.encode('utf-8'), 'application/javascript; charset=utf-8')
            return
        if path == '/wallet.css':
            self._send(WALLET_CSS.encode('utf-8'), 'text/css; charset=utf-8')
            return
        if path == '/staff':
            self._send(STAFF_HTML.encode('utf-8'), 'text/html; charset=utf-8')
            return
        if path == '/staff.js':
            self._send(STAFF_JS.encode('utf-8'), 'application/javascript; charset=utf-8')
            return
        if path == '/staff.css':
            self._send(STAFF_CSS.encode('utf-8'), 'text/css; charset=utf-8')
            return
        if path == '/api/staff/bootstrap':
            session_data = staff_session_from_request(self)
            store = STATE.get_collection('store')
            cfg = get_discord_staff_config()
            permissions = STATE.get_collection('permissions')
            payload = {
                'login_enabled': cfg.get('ready', False),
                'configured': cfg.get('enabled', False),
                'auth_url': '/auth/discord/start',
                'role_cards': permissions,
                'session': None,
                'state': None,
                'teleports': [],
                'store': None,
            }
            if session_data:
                payload['session'] = {
                    'user': session_data.get('user', {}),
                    'matched_roles': session_data.get('matched_roles', []),
                    'allowed_sections': session_data.get('allowed_sections', []),
                    'has_access': session_data.get('has_access', False),
                }
                payload['state'] = STATE.status()
                if staff_has_access(session_data, 'teleports'):
                    payload['teleports'] = STATE.get_collection('teleports')
                if staff_has_access(session_data, 'store'):
                    raw_store = STATE.get_collection('store')
                    payload['store'] = {
                        'coin_packs': [row for row in raw_store.get('coin_packs', []) if row.get('active')],
                        'items': [row for row in raw_store.get('items', []) if row.get('active') and row.get('visible', True)],
                        'playtime': raw_store.get('playtime', {}),
                    }
            self._send_json({'ok': True, 'data': payload})
            return
        if path == '/api/staff/logout':
            sid = parse_cookie_value(self.headers.get('Cookie', ''), STAFF_SESSION_COOKIE)
            if sid:
                STAFF_SESSIONS.pop(sid, None)
            self._redirect('/staff', [f'{STAFF_SESSION_COOKIE}=; Max-Age=0; Path=/'])
            return
        if path == '/auth/discord/start':
            cfg = get_discord_staff_config()
            if not cfg.get('ready'):
                self._redirect('/staff')
                return
            params = {
                'client_id': cfg['client_id'],
                'redirect_uri': cfg['redirect_uri'],
                'response_type': 'code',
                'scope': 'identify',
                'prompt': 'consent',
            }
            self._redirect('https://discord.com/oauth2/authorize?' + urllib.parse.urlencode(params))
            return
        if path == '/auth/discord/callback':
            cfg = get_discord_staff_config()
            code = (query.get('code') or [''])[0]
            if not cfg.get('ready') or not code:
                self._redirect('/staff')
                return
            try:
                token_data = discord_api_request('https://discord.com/api/oauth2/token', method='POST', data={
                    'client_id': cfg['client_id'],
                    'client_secret': cfg['client_secret'],
                    'grant_type': 'authorization_code',
                    'code': code,
                    'redirect_uri': cfg['redirect_uri'],
                })
                access_token = str(token_data.get('access_token') or '')
                user_data = discord_api_request('https://discord.com/api/users/@me', headers={'Authorization': f'Bearer {access_token}'})
                member_data = discord_api_request(f"https://discord.com/api/guilds/{cfg['guild_id']}/members/{user_data.get('id')}", headers={'Authorization': f"Bot {cfg['bot_token']}"})
                roles_data = discord_api_request(f"https://discord.com/api/guilds/{cfg['guild_id']}/roles", headers={'Authorization': f"Bot {cfg['bot_token']}"})
                session_payload = build_staff_session_payload({
                    'id': str(user_data.get('id') or ''),
                    'username': str(user_data.get('username') or ''),
                    'global_name': str(user_data.get('global_name') or ''),
                    'avatar': str(user_data.get('avatar') or ''),
                }, [str(x) for x in member_data.get('roles', [])], roles_data if isinstance(roles_data, list) else [])
                sid = secrets.token_urlsafe(24)
                STAFF_SESSIONS[sid] = session_payload
                self._redirect('/staff', [f'{STAFF_SESSION_COOKIE}={sid}; Max-Age={STAFF_SESSION_MAX_AGE}; Path=/'])
            except Exception as exc:
                STATE.log(f'Error en login staff Discord: {exc}')
                self._redirect('/staff')
            return
        if path.startswith('/assets/'):
            file_path = ASSETS_DIR / path.replace('/assets/', '')
            if file_path.exists() and file_path.is_file():
                ext = file_path.suffix.lower()
                ctype = {
                    '.png': 'image/png',
                    '.jpg': 'image/jpeg',
                    '.jpeg': 'image/jpeg',
                    '.ico': 'image/x-icon',
                    '.svg': 'image/svg+xml',
                }.get(ext, 'application/octet-stream')
                self._send(file_path.read_bytes(), ctype)
                return
        if path == '/api/map/image':
            image_path = Path((STATE.config.get('map_image_path') or '').strip())
            if image_path.exists() and image_path.is_file():
                ext = image_path.suffix.lower()
                ctype = {
                    '.png': 'image/png',
                    '.jpg': 'image/jpeg',
                    '.jpeg': 'image/jpeg',
                    '.webp': 'image/webp',
                }.get(ext, 'application/octet-stream')
                self._send(image_path.read_bytes(), ctype)
                return
            self._send_json({'ok': False, 'message': 'Mapa no configurado'}, 404)
            return
        if path == '/api/item-icon':
            query = parse_qs(urlparse(self.path).query)
            name = (query.get('name') or [''])[0]
            icon_path = STATE.find_item_icon(name)
            if icon_path and icon_path.exists() and icon_path.is_file():
                ext = icon_path.suffix.lower()
                ctype = {
                    '.png': 'image/png',
                    '.jpg': 'image/jpeg',
                    '.jpeg': 'image/jpeg',
                    '.webp': 'image/webp',
                }.get(ext, 'application/octet-stream')
                self._send(icon_path.read_bytes(), ctype)
                return
            self._send_json({'ok': False, 'message': 'Icono no encontrado'}, 404)
            return
        if path.startswith('/api/') and path not in {'/api/auth/status'}:
            session_data = panel_session_from_request(self)
            if panel_auth_enabled() and not session_data:
                self._send_json({'ok': False, 'message': 'Necesitas iniciar sesión.', 'code': 'AUTH_REQUIRED'}, 401)
                return
            required_section, required_action = path_required_permission(path)
            if not panel_user_can(session_data, required_section, required_action):
                self._send_json({'ok': False, 'message': 'No tienes permiso para esta zona.', 'code': 'FORBIDDEN'}, 403)
                return

        if path == '/api/state':
            self._send_json({'ok': True, 'data': STATE.status()})
            return
        if path == '/api/collections':
            self._send_json({'ok': True, 'data': {name: STATE.get_collection(name) for name in STATE.data_files}})
            return
        if path == '/api/store/public':
            store = STATE.get_collection('store')
            web = dict(store.get('web', {}))
            discord = dict(store.get('discord', {}))
            public_web = {k: web.get(k) for k in ('public_base_url','public_ip','public_port','domain','steam_enabled','discord_link_enabled','stripe_enabled','stripe_mode','stripe_currency','login_notice','staff_panel_enabled')}
            public_discord = {k: discord.get(k) for k in ('enabled','guild_id','channel_id','dm_enabled')}
            self._send_json({'ok': True, 'data': {'coin_packs': store.get('coin_packs', []), 'items': [row for row in store.get('items', []) if row.get('visible', True) and row.get('active', True)], 'web': public_web, 'playtime': store.get('playtime', {}), 'discord': public_discord, 'delivery': store.get('delivery', {}), 'categories': store.get('categories', [])}})
            return
        if path == '/api/live-map/login-window/status':
            self._send_json({'ok': True, 'open': bool(LIVE_MAP_AUTH_WINDOW is not None)})
            return
        if path == '/api/live-map/embed/status':
            self._send_json({'ok': True, 'open': bool(LIVE_MAP_EMBED_WINDOW is not None)})
            return
        if path == '/api/backups':
            self._send_json({'ok': True, 'data': STATE.list_backups()})
            return
        if path == '/api/bot/config':
            self._send_json({'ok': True, 'data': STATE.load_bot_config()})
            return
        if path == '/api/serverconfig':
            ok, data = STATE.read_serverconfig()
            self._send_json({'ok': ok, 'data': data if ok else '', 'message': '' if ok else data}, 200 if ok else 400)
            return
        if path == '/api/serverconfig/structured':
            ok, data = STATE.read_serverconfig_structured()
            self._send_json({'ok': ok, 'data': data if ok else [], 'message': '' if ok else data}, 200 if ok else 400)
            return
        if path == '/api/players/history':
            self._send_json({'ok': True, 'data': STATE.player_history_overview()})
            return
        if path == '/api/players/profile':
            query = parse_qs(urlparse(self.path).query)
            key = (query.get('key') or [''])[0]
            ok, data = STATE.player_history_profile(key=key)
            self._send_json({'ok': ok, 'data': data if ok else None, 'message': '' if ok else data}, 200 if ok else 404)
            return
        self._not_found()

    def do_POST(self):
        path = urlparse(self.path).path
        body = self._json_body()

        if path == '/api/auth/login':
            user = authenticate_panel_user(body.get('username', ''), body.get('password', ''))
            if not user:
                self._send_json({'ok': False, 'message': 'Usuario o contraseña incorrectos.'}, 401)
                return
            sid = secrets.token_urlsafe(24)
            payload = panel_public_user_data(user)
            payload['created_at_ts'] = time.time()
            PANEL_SESSIONS[sid] = payload
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Cache-Control', 'no-store')
            self.send_header('Set-Cookie', f'{PANEL_SESSION_COOKIE}={sid}; Max-Age={PANEL_SESSION_MAX_AGE}; Path=/')
            raw = json.dumps({'ok': True, 'message': 'Sesión iniciada.', 'data': panel_auth_status_payload(self)}, ensure_ascii=False).encode('utf-8')
            self.send_header('Content-Length', str(len(raw)))
            self.end_headers()
            self.wfile.write(raw)
            return
        if path == '/api/auth/logout':
            sid = parse_cookie_value(self.headers.get('Cookie', ''), PANEL_SESSION_COOKIE)
            if sid:
                PANEL_SESSIONS.pop(sid, None)
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Cache-Control', 'no-store')
            self.send_header('Set-Cookie', f'{PANEL_SESSION_COOKIE}=; Max-Age=0; Path=/')
            raw = json.dumps({'ok': True, 'message': 'Sesión cerrada.'}, ensure_ascii=False).encode('utf-8')
            self.send_header('Content-Length', str(len(raw)))
            self.end_headers()
            self.wfile.write(raw)
            return

        if path.startswith('/api/') and path not in {'/api/auth/login', '/api/auth/logout'}:
            session_data = panel_session_from_request(self)
            if panel_auth_enabled() and not session_data:
                self._send_json({'ok': False, 'message': 'Necesitas iniciar sesión.', 'code': 'AUTH_REQUIRED'}, 401)
                return
            required_section, required_action = path_required_permission(path)
            if not panel_user_can(session_data, required_section, required_action):
                self._send_json({'ok': False, 'message': 'No tienes permiso para esta zona.', 'code': 'FORBIDDEN'}, 403)
                return

        if path in {'/api/staff/chat/send', '/api/staff/players/refresh'}:
            self._not_found()
            return

        if path == '/api/staff/chat/send':
            session_data = staff_session_from_request(self)
            if not staff_has_access(session_data, 'chat', 'say'):
                self._send_json({'ok': False, 'message': 'No autorizado'}, 403)
                return
            ok, msg = STATE.send_global_message((body.get('message') or '').strip())
            self._send_json({'ok': ok, 'message': msg}, 200 if ok else 400)
            return

        if path == '/api/staff/players/refresh':
            session_data = staff_session_from_request(self)
            if not staff_has_access(session_data, 'players', 'listplayers'):
                self._send_json({'ok': False, 'message': 'No autorizado'}, 403)
                return
            ok, players = STATE.refresh_players()
            self._send_json({'ok': ok, 'data': players if ok else [], 'message': 'Jugadores actualizados.' if ok else 'No se pudieron actualizar jugadores.'}, 200 if ok else 400)
            return

        if path == '/api/access/users/list':
            self._send_json({'ok': True, 'data': [panel_public_user_data(row) for row in _normalize_panel_users(_load_panel_users_raw())]})
            return

        if path == '/api/access/users/save':
            updated = save_panel_users(body.get('users') or [])
            self._send_json({'ok': True, 'data': updated, 'message': 'Usuarios guardados.'})
            return

        if path == '/api/notifications/test':
            cfg = {k: body.get(k) for k in (
                'manager_notify_enabled','manager_notify_webhook','manager_notify_bot_token','manager_notify_channel_id','manager_notify_mentions',
                'manager_notify_on_start','manager_notify_on_stop','manager_notify_on_crash','manager_notify_on_backup','manager_notify_on_autorestart',
                'manager_notify_start_title','manager_notify_start_body',
                'manager_notify_stop_title','manager_notify_stop_body',
                'manager_notify_crash_title','manager_notify_crash_body',
                'manager_notify_backup_title','manager_notify_backup_body',
                'manager_notify_autorestart_title','manager_notify_autorestart_body',
                'manager_notify_test_title','manager_notify_test_body'
            ) if k in body}
            ok, msg = STATE.test_manager_discord(cfg)
            self._send_json({'ok': ok, 'message': msg}, 200 if ok else 400)
            return

        if path == '/api/config/save':
            # prevent enabling auth without at least one admin user
            if 'panel_auth_enabled' in body and bool(body.get('panel_auth_enabled')):
                users = _normalize_panel_users(_load_panel_users_raw())
                if not any(bool(u.get('is_admin')) and bool(u.get('enabled')) for u in users):
                    self._send_json({'ok': False, 'message': 'Crea primero al menos un usuario administrador en Accesos.'}, 400)
                    return
            STATE.save_config(body)
            self._send_json({'ok': True, 'message': 'Ajustes guardados.'})
            return

        if path == '/api/config/export':
            ok, msg = STATE.export_manager_config(body.get('target_path', ''))
            self._send_json({'ok': ok, 'message': msg}, 200 if ok else 400)
            return

        if path == '/api/config/import':
            ok, msg = STATE.import_manager_config(body.get('source_path', ''))
            self._send_json({'ok': ok, 'message': msg}, 200 if ok else 400)
            return

        if path == '/api/browse/folder':
            ok, selected = STATE.browse(mode='folder', title=body.get('title', 'Selecciona carpeta'), initial=body.get('initial', ''))
            self._send_json({'ok': ok, 'path': selected, 'message': '' if ok else selected})
            return

        if path == '/api/browse/file':
            fkind = body.get('kind', 'all')
            filters = {
                'exe_bat': [('Ejecutable o BAT', ('*.exe', '*.bat', '*.cmd')), ('Todos', '*.*')],
                'bot_entry': [('Arranque del bot', ('*.bat', '*.cmd', '*.exe', '*.py')), ('Todos', '*.*')],
                'xml': [('XML', '*.xml'), ('Todos', '*.*')],
                'image': [('Imágenes', ('*.png', '*.jpg', '*.jpeg')), ('Todos', '*.*')],
                'world_zip': [('ZIP de mundo', '*.zip'), ('Todos', '*.*')],
                'config_zip': [('ZIP de configuración', '*.zip'), ('Todos', '*.*')],
            }.get(fkind, [('Todos', '*.*')])
            ok, selected = STATE.browse(mode='file', title=body.get('title', 'Selecciona archivo'), initial=body.get('initial', ''), filters=filters)
            self._send_json({'ok': ok, 'path': selected, 'message': '' if ok else selected})
            return

        if path == '/api/browse/savefile':
            filters = [('ZIP', '*.zip'), ('Todos', '*.*')]
            ok, selected = STATE.browse(mode='savefile', title=body.get('title', 'Guardar archivo'), initial=body.get('initial', ''), filters=filters, default_name=body.get('default_name', 'KarmaWorld_config.zip'))
            self._send_json({'ok': ok, 'path': selected, 'message': '' if ok else selected})
            return

        if path == '/api/live-map/login-window':
            ok, msg = open_live_map_auth_window((body.get('url') or '').strip())
            self._send_json({'ok': ok, 'message': msg}, 200 if ok else 400)
            return

        if path == '/api/live-map/login-window/close':
            ok, msg = close_live_map_auth_window()
            self._send_json({'ok': ok, 'message': msg}, 200 if ok else 400)
            return

        if path == '/api/live-map/embed':
            rect = body.get('rect') or {}
            ok, msg = open_or_update_live_map_embed_window((body.get('url') or '').strip(), rect)
            self._send_json({'ok': ok, 'message': msg}, 200 if ok else 400)
            return

        if path == '/api/live-map/embed/close':
            ok, msg = close_live_map_embed_window()
            self._send_json({'ok': ok, 'message': msg}, 200 if ok else 400)
            return

        if path == '/api/server/start':
            ok, msg = STATE.start_server(mark_desired=True)
            self._send_json({'ok': ok, 'message': msg}, 200 if ok else 400)
            return
        if path == '/api/server/stop':
            ok, msg = STATE.stop_server()
            self._send_json({'ok': ok, 'message': msg}, 200 if ok else 400)
            return
        if path == '/api/server/restart':
            ok, msg = STATE.restart_server()
            self._send_json({'ok': ok, 'message': msg}, 200 if ok else 400)
            return
        if path == '/api/server/backup':
            ok, msg = STATE.create_backup()
            self._send_json({'ok': ok, 'message': msg}, 200 if ok else 400)
            return
        if path == '/api/server/manager-stop':
            ok, msg = STATE.stop_manager()
            self._send_json({'ok': ok, 'message': msg})
            return
        if path == '/api/server/manager-start':
            ok, msg = STATE.start_manager()
            self._send_json({'ok': ok, 'message': msg})
            return
        if path == '/api/bot/start':
            ok, msg = STATE.start_bot()
            self._send_json({'ok': ok, 'message': msg}, 200 if ok else 400)
            return
        if path == '/api/bot/stop':
            ok, msg = STATE.stop_bot()
            self._send_json({'ok': ok, 'message': msg}, 200 if ok else 400)
            return
        if path == '/api/bot/restart':
            ok, msg = STATE.restart_bot()
            self._send_json({'ok': ok, 'message': msg}, 200 if ok else 400)
            return
        if path == '/api/bot/config/save':
            ok, msg = STATE.save_bot_config(body or {})
            self._send_json({'ok': ok, 'message': msg}, 200 if ok else 400)
            return

        if path == '/api/tasks/test-command':
            cmd = (body.get('command') or '').strip()
            if not cmd:
                self._send_json({'ok': False, 'message': 'Escribe un comando.'}, 400)
                return
            ok, response = STATE.test_task_command(cmd)
            self._send_json({'ok': ok, 'message': response}, 200 if ok else 400)
            return

        if path == '/api/telnet/send':
            cmd = (body.get('command') or '').strip()
            if not cmd:
                self._send_json({'ok': False, 'message': 'Escribe un comando.'}, 400)
                return
            ok, response = STATE.send_telnet_command(cmd)
            self._send_json({'ok': ok, 'message': response}, 200 if ok else 400)
            return

        if path == '/api/chat/send':
            msg = (body.get('message') or '').strip()
            if not msg:
                self._send_json({'ok': False, 'message': 'Escribe un mensaje.'}, 400)
                return
            safe_msg = msg.replace('"', "'")
            quoted = f'"{safe_msg}"'
            ok, response = STATE.send_telnet_command(f'say {quoted}')
            if not ok:
                STATE.chat_log(quoted)
            self._send_json({'ok': True, 'message': response if ok else 'Mensaje guardado en el panel. Configura telnet para enviarlo al juego.'})
            return

        if path == '/api/players/refresh':
            ok, players = STATE.refresh_players()
            self._send_json({'ok': ok, 'data': players, 'message': 'Jugadores actualizados.' if ok else 'No se pudo refrescar jugadores. Revisa telnet.'}, 200 if ok else 400)
            return

        if path == '/api/players/history/delete':
            ok, msg = STATE.delete_player_history_entry(body.get('key') or '')
            self._send_json({'ok': ok, 'message': msg}, 200 if ok else 400)
            return

        if path == '/api/players/history/clear':
            ok, msg = STATE.clear_player_history()
            self._send_json({'ok': ok, 'message': msg}, 200 if ok else 400)
            return

        if path == '/api/players/history/cleanup':
            ok, data = STATE.cleanup_player_history_noise()
            msg = f"Limpieza completada. Eliminadas: {int((data or {}).get('removed') or 0)}" if ok else 'No se pudo limpiar el historial.'
            self._send_json({'ok': ok, 'data': data if ok else None, 'message': msg}, 200 if ok else 400)
            return

        if path == '/api/players/profile':
            player = body.get('player') or {}
            key = str(body.get('key') or '').strip()
            if player and not isinstance(player, dict):
                self._send_json({'ok': False, 'message': 'Jugador no válido.'}, 400)
                return
            ok, data = STATE.player_history_profile(player=player if isinstance(player, dict) else None, key=key)
            self._send_json({'ok': ok, 'data': data if ok else None, 'message': '' if ok else data}, 200 if ok else 404)
            return

        if path == '/api/players/case':
            offender = body.get('offender') or {}
            if not isinstance(offender, dict):
                self._send_json({'ok': False, 'message': 'Jugador infractor no válido.'}, 400)
                return
            session_data = panel_session_from_request(self)
            actor = str((session_data or {}).get('username') or 'panel')
            ok, data = STATE.register_theft_case(
                offender=offender,
                victim_player=body.get('victim_player') or {},
                victim_data=body.get('victim') or {},
                items_text=body.get('items_text') or '',
                items=body.get('items') or [],
                actor=actor,
                reason=body.get('reason') or '',
                execute_restore=bool(body.get('execute_restore')),
            )
            self._send_json({'ok': ok, 'data': data if ok else None, 'message': 'Incidente guardado.' if ok else data}, 200 if ok else 400)
            return

        if path == '/api/player/inventory':
            player = body.get('player') or {}
            if not isinstance(player, dict):
                self._send_json({'ok': False, 'message': 'Jugador no válido.'}, 400)
                return
            ok, data = STATE.fetch_player_inventory(player)
            if ok:
                self._send_json({'ok': True, 'data': data, 'message': ''}, 200)
                return
            snap_ok, snapshot = STATE.get_latest_inventory_snapshot(player=player)
            if snap_ok and isinstance(snapshot, dict):
                self._send_json({'ok': True, 'data': snapshot, 'message': 'Mostrando la última captura guardada de este jugador.'}, 200)
                return
            self._send_json({'ok': False, 'data': None, 'message': data}, 400)
            return

        if path == '/api/player/action':
            action = (body.get('action') or '').strip()
            player = body.get('player') or {}
            if not isinstance(player, dict):
                self._send_json({'ok': False, 'message': 'Jugador no válido.'}, 400)
                return
            session_data = panel_session_from_request(self)
            actor = str((session_data or {}).get('username') or 'panel')
            ok, msg = STATE.player_action(
                action,
                player,
                actor=actor,
                reason=body.get('reason') or '',
                duration_value=body.get('duration_value') or 30,
                duration_unit=body.get('duration_unit') or 'days',
            )
            self._send_json({'ok': ok, 'message': msg}, 200 if ok else 400)
            return

        if path == '/api/serverconfig/save':
            ok, msg = STATE.save_serverconfig(body.get('content', ''))
            self._send_json({'ok': ok, 'message': msg}, 200 if ok else 400)
            return
        if path == '/api/serverconfig/structured/save':
            items = body.get('items', [])
            if not isinstance(items, list):
                self._send_json({'ok': False, 'message': 'Formato no válido.'}, 400)
                return
            ok, msg = STATE.save_serverconfig_structured(items)
            self._send_json({'ok': ok, 'message': msg}, 200 if ok else 400)
            return

        if path.startswith('/api/collections/'):
            name = path.split('/')[-1]
            if name not in STATE.data_files:
                self._not_found()
                return
            if name == 'store':
                items = body.get('items', {})
                if not isinstance(items, dict):
                    self._send_json({'ok': False, 'message': 'Formato no válido.'}, 400)
                    return
            else:
                items = body.get('items', [])
                if not isinstance(items, list):
                    self._send_json({'ok': False, 'message': 'Formato no válido.'}, 400)
                    return
            STATE.save_collection(name, items)
            self._send_json({'ok': True, 'message': 'Guardado.'})
            return

        if path == '/api/splash/upload':
            source = (body.get('source_path') or '').strip()
            if not source:
                self._send_json({'ok': False, 'message': 'Ruta vacía.'}, 400)
                return
            src = Path(source)
            if not src.exists():
                self._send_json({'ok': False, 'message': 'No existe la imagen.'}, 400)
                return
            try:
                shutil.copy2(src, ASSETS_DIR / 'splash.png')
                self._send_json({'ok': True, 'message': 'Imagen de inicio actualizada.'})
            except Exception as exc:
                self._send_json({'ok': False, 'message': str(exc)}, 400)
            return

        if path == '/api/backups/restore':
            ok, msg = STATE.restore_backup((body.get('backup_path') or '').strip())
            self._send_json({'ok': ok, 'message': msg}, 200 if ok else 400)
            return
        if path == '/api/backups/delete':
            ok, msg = STATE.delete_backup((body.get('backup_path') or '').strip())
            self._send_json({'ok': ok, 'message': msg}, 200 if ok else 400)
            return

        self._not_found()



def _win32_user32():
    if os.name != 'nt':
        return None
    try:
        return ctypes.windll.user32
    except Exception:
        return None


def _screen_to_client_point(hwnd, x, y):
    user32 = _win32_user32()
    if user32 is None or not hwnd:
        return x, y
    class POINT(ctypes.Structure):
        _fields_ = [('x', ctypes.c_long), ('y', ctypes.c_long)]
    pt = POINT(int(x), int(y))
    try:
        user32.ScreenToClient(ctypes.c_void_p(hwnd), ctypes.byref(pt))
        return int(pt.x), int(pt.y)
    except Exception:
        return x, y


def _find_window_handle(title: str):
    user32 = _win32_user32()
    if user32 is None or not title:
        return None
    try:
        user32.FindWindowW.restype = ctypes.c_void_p
        hwnd = user32.FindWindowW(None, ctypes.c_wchar_p(title))
        return int(hwnd) if hwnd else None
    except Exception:
        return None


def _apply_toolwindow_style(hwnd):
    user32 = _win32_user32()
    if user32 is None or not hwnd:
        return False
    GWL_EXSTYLE = -20
    GWL_STYLE = -16
    WS_EX_APPWINDOW = 0x00040000
    WS_EX_TOOLWINDOW = 0x00000080
    WS_CHILD = 0x40000000
    WS_VISIBLE = 0x10000000
    WS_CAPTION = 0x00C00000
    WS_THICKFRAME = 0x00040000
    WS_MINIMIZEBOX = 0x00020000
    WS_MAXIMIZEBOX = 0x00010000
    WS_SYSMENU = 0x00080000
    SWP_NOMOVE = 0x0002
    SWP_NOSIZE = 0x0001
    SWP_NOZORDER = 0x0004
    SWP_FRAMECHANGED = 0x0020
    try:
        get_long = user32.GetWindowLongW
        set_long = user32.SetWindowLongW
        ex_style = int(get_long(ctypes.c_void_p(hwnd), GWL_EXSTYLE) or 0)
        style = int(get_long(ctypes.c_void_p(hwnd), GWL_STYLE) or 0)
        ex_style = (ex_style | WS_EX_TOOLWINDOW) & ~WS_EX_APPWINDOW
        style = (style | WS_CHILD | WS_VISIBLE) & ~(WS_CAPTION | WS_THICKFRAME | WS_MINIMIZEBOX | WS_MAXIMIZEBOX | WS_SYSMENU)
        set_long(ctypes.c_void_p(hwnd), GWL_EXSTYLE, ex_style)
        set_long(ctypes.c_void_p(hwnd), GWL_STYLE, style)
        user32.SetWindowPos(ctypes.c_void_p(hwnd), None, 0, 0, 0, 0, SWP_NOMOVE | SWP_NOSIZE | SWP_NOZORDER | SWP_FRAMECHANGED)
        return True
    except Exception:
        return False


def _attach_live_map_window_native(rect):
    global LIVE_MAP_EMBED_ATTACHED
    clean = _sanitize_embed_rect(rect)
    if clean is None or os.name != 'nt':
        return False
    user32 = _win32_user32()
    if user32 is None:
        return False
    child_hwnd = _find_window_handle('KarmaWorld Live Map')
    parent_hwnd = _find_window_handle('KarmaWorld Server Kit')
    if not child_hwnd or not parent_hwnd:
        return False
    try:
        _apply_toolwindow_style(child_hwnd)
        try:
            user32.SetParent(ctypes.c_void_p(child_hwnd), ctypes.c_void_p(parent_hwnd))
        except Exception:
            pass
        rel_x, rel_y = _screen_to_client_point(parent_hwnd, clean['screenX'], clean['screenY'])
        try:
            user32.MoveWindow(ctypes.c_void_p(child_hwnd), int(rel_x), int(rel_y), int(clean['width']), int(clean['height']), True)
        except Exception:
            return False
        try:
            user32.ShowWindow(ctypes.c_void_p(child_hwnd), 5)
        except Exception:
            pass
        LIVE_MAP_EMBED_ATTACHED = True
        return True
    except Exception:
        return False


def _schedule_live_map_native_attach(rect, attempts=18, delay=0.18):
    if os.name != 'nt':
        return
    clean = _sanitize_embed_rect(rect)
    if clean is None:
        return
    def _runner():
        for _ in range(max(1, int(attempts))):
            if _attach_live_map_window_native(clean):
                return
            time.sleep(delay)
    threading.Thread(target=_runner, daemon=True).start()


def _sanitize_embed_rect(rect):
    if not isinstance(rect, dict):
        return None
    try:
        x = int(float(rect.get('screenX', 0) or 0))
        y = int(float(rect.get('screenY', 0) or 0))
        width = max(320, int(float(rect.get('width', 0) or 0)))
        height = max(240, int(float(rect.get('height', 0) or 0)))
        return {'screenX': x, 'screenY': y, 'width': width, 'height': height}
    except Exception:
        return None


def _apply_live_map_embed_geometry(window_obj, rect):
    clean = _sanitize_embed_rect(rect)
    if window_obj is None or clean is None:
        return False
    native_attached = False
    try:
        native_attached = _attach_live_map_window_native(clean)
    except Exception:
        native_attached = False
    if native_attached:
        return True
    moved = False
    try:
        mover = getattr(window_obj, 'move', None)
        if callable(mover):
            mover(clean['screenX'], clean['screenY'])
            moved = True
    except Exception:
        moved = False
    resized = False
    try:
        resizer = getattr(window_obj, 'resize', None)
        if callable(resizer):
            resizer(clean['width'], clean['height'])
            resized = True
    except Exception:
        resized = False
    return moved or resized


def _mark_live_map_embed_window_closed(*_args, **_kwargs):
    global LIVE_MAP_EMBED_WINDOW, LIVE_MAP_EMBED_ATTACHED
    LIVE_MAP_EMBED_WINDOW = None
    LIVE_MAP_EMBED_ATTACHED = False


def open_or_update_live_map_embed_window(url: str = '', rect=None):
    global LIVE_MAP_EMBED_WINDOW, LIVE_MAP_EMBED_URL
    try:
        close_live_map_auth_window()
    except Exception:
        pass
    live_url = (url or STATE.config.get('live_map_url') or '').strip()
    clean = _sanitize_embed_rect(rect)
    if not live_url:
        return False, 'No hay URL del mapa en vivo configurada.'
    if WEBVIEW is None:
        return False, 'El mapa incrustado solo está disponible en modo ServerKit de escritorio.'
    if clean is None:
        return False, 'No se recibió un rectángulo válido para incrustar el mapa.'
    try:
        existing = LIVE_MAP_EMBED_WINDOW
        if existing is not None:
            try:
                if LIVE_MAP_EMBED_URL != live_url:
                    existing.load_url(live_url)
                    LIVE_MAP_EMBED_URL = live_url
            except Exception:
                pass
            _apply_live_map_embed_geometry(existing, clean)
            for method_name in ('show', 'restore'):
                try:
                    getattr(existing, method_name)()
                except Exception:
                    pass
            return True, 'Mapa incrustado actualizado.'
    except Exception:
        LIVE_MAP_EMBED_WINDOW = None
    try:
        LIVE_MAP_EMBED_URL = live_url
        LIVE_MAP_EMBED_WINDOW = WEBVIEW.create_window(
            'KarmaWorld Live Map',
            live_url,
            width=clean['width'],
            height=clean['height'],
            x=clean['screenX'],
            y=clean['screenY'],
            min_size=(320, 240),
            confirm_close=False,
            resizable=False,
            frameless=True,
            easy_drag=False,
            on_top=False,
        )
        try:
            LIVE_MAP_EMBED_WINDOW.events.closed += _mark_live_map_embed_window_closed
        except Exception:
            pass
        _schedule_live_map_native_attach(clean)
        return True, 'Mapa incrustado abierto.'
    except Exception as exc:
        return False, f'No se pudo incrustar el mapa en el panel: {exc}'


def close_live_map_embed_window():
    global LIVE_MAP_EMBED_WINDOW, LIVE_MAP_EMBED_ATTACHED
    try:
        if LIVE_MAP_EMBED_WINDOW is not None:
            try:
                LIVE_MAP_EMBED_WINDOW.destroy()
            except Exception:
                pass
            LIVE_MAP_EMBED_WINDOW = None
            LIVE_MAP_EMBED_ATTACHED = False
            return True, 'Mapa incrustado cerrado.'
    except Exception as exc:
        return False, str(exc)
    LIVE_MAP_EMBED_ATTACHED = False
    return True, 'No había mapa incrustado abierto.'


def _mark_live_map_auth_window_closed(*_args, **_kwargs):
    global LIVE_MAP_AUTH_WINDOW
    LIVE_MAP_AUTH_WINDOW = None
LIVE_MAP_EMBED_WINDOW = None
LIVE_MAP_EMBED_URL = ''


def open_live_map_auth_window(url: str = ''):
    global LIVE_MAP_AUTH_WINDOW
    live_url = (url or STATE.config.get('live_map_url') or '').strip()
    if not live_url:
        return False, 'No hay URL del mapa en vivo configurada.'
    if WEBVIEW is None:
        return False, 'El login interno solo está disponible en modo ServerKit de escritorio.'
    try:
        existing = LIVE_MAP_AUTH_WINDOW
        if existing is not None:
            try:
                existing.load_url(live_url)
            except Exception:
                pass
            for method_name in ('show', 'restore'):
                try:
                    getattr(existing, method_name)()
                except Exception:
                    pass
            try:
                existing.set_title('Steam Login - KarmaWorld')
            except Exception:
                pass
            return True, 'Ventana interna de login abierta.'
    except Exception:
        LIVE_MAP_AUTH_WINDOW = None
    try:
        LIVE_MAP_AUTH_WINDOW = WEBVIEW.create_window(
            'Steam Login - KarmaWorld',
            live_url,
            width=1040,
            height=760,
            min_size=(900, 640),
            confirm_close=False,
            resizable=True,
        )
        try:
            LIVE_MAP_AUTH_WINDOW.events.closed += _mark_live_map_auth_window_closed
        except Exception:
            pass
        return True, 'Ventana interna de login abierta.'
    except Exception as exc:
        return False, f'No se pudo abrir el login dentro del ServerKit: {exc}'


def close_live_map_auth_window():
    global LIVE_MAP_AUTH_WINDOW
    try:
        if LIVE_MAP_AUTH_WINDOW is not None:
            try:
                LIVE_MAP_AUTH_WINDOW.destroy()
            except Exception:
                pass
            LIVE_MAP_AUTH_WINDOW = None
            return True, 'Ventana de login cerrada.'
    except Exception as exc:
        return False, str(exc)
    return True, 'No había ventana de login abierta.'


def run_http_server(httpd):
    try:
        httpd.serve_forever(poll_interval=0.5)
    except Exception:
        pass


def panel_browser_host(bind_host: str):
    host = str(bind_host or '127.0.0.1').strip() or '127.0.0.1'
    low = host.lower()
    if low in {'0.0.0.0', '::', '[::]', '::0'}:
        return '127.0.0.1'
    return host


def panel_browser_url(bind_host: str, port: int):
    return f"http://{panel_browser_host(bind_host)}:{int(port)}"


def _http_server_with_fallback(bind_host: str, preferred_port: int):
    host = str(bind_host or '127.0.0.1').strip() or '127.0.0.1'
    tried = []
    candidates = []
    try:
        candidates.append(int(preferred_port or 8765))
    except Exception:
        candidates.append(8765)
    for extra in [8765, 8766, 8767, 8768, 8769, 8770]:
        if extra not in candidates:
            candidates.append(extra)
    last_exc = None
    for port in candidates:
        try:
            httpd = ThreadingHTTPServer((host, int(port)), Handler)
            return httpd, int(port), None
        except OSError as exc:
            tried.append(int(port))
            last_exc = exc
            continue
    try:
        probe = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        probe.bind((host, 0))
        free_port = int(probe.getsockname()[1])
        probe.close()
        httpd = ThreadingHTTPServer((host, free_port), Handler)
        return httpd, free_port, tried
    except Exception as exc:
        if last_exc is None:
            last_exc = exc
    raise RuntimeError(f'No se pudo abrir el panel HTTP en {host}. Puertos probados: {tried}') from last_exc


def _show_startup_error(message: str):
    try:
        (DATA_DIR / 'logs').mkdir(parents=True, exist_ok=True)
        with (DATA_DIR / 'logs' / 'startup_error.log').open('a', encoding='utf-8') as fh:
            fh.write(f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] {message}\n")
    except Exception:
        pass
    if os.name == 'nt':
        try:
            ctypes.windll.user32.MessageBoxW(None, str(message), 'KarmaWorld Server Kit', 0x10)
        except Exception:
            pass


def launch_desktop_window(url: str):
    global WEBVIEW, MAIN_WINDOW
    try:
        import webview
        WEBVIEW = webview
    except Exception as exc:
        STATE.log(f'Modo ventana no disponible todavía: {exc}')
        return False
    try:
        MAIN_WINDOW = webview.create_window('KarmaWorld Server Kit', url, width=1520, height=940, min_size=(1200, 760), confirm_close=False)
        webview.start()
        return True
    except Exception as exc:
        STATE.log(f'No se pudo abrir la ventana independiente: {exc}')
        return False


def main():
    host = str(STATE.config.get('panel_host', '127.0.0.1') or '127.0.0.1').strip() or '127.0.0.1'
    preferred_port = int(STATE.config.get('panel_port', 8765) or 8765)
    PID_FILE.write_text(str(os.getpid()), encoding='utf-8')
    monitor = threading.Thread(target=STATE.monitor_loop, daemon=True)
    monitor.start()

    httpd, active_port, fallback_info = _http_server_with_fallback(host, preferred_port)
    if active_port != preferred_port:
        STATE.config['panel_port'] = int(active_port)
        try:
            safe_write_json(CONFIG_PATH, STATE.config)
        except Exception:
            pass
    url = panel_browser_url(host, active_port)
    STATE.log(f'Manager KarmaWorld iniciado en {url} (bind {host}:{active_port})')
    if fallback_info is not None or active_port != preferred_port:
        STATE.log(f'Puerto del panel ocupado o no disponible. Se usa {active_port} en lugar de {preferred_port}.')
    STATE.httpd = httpd
    server_thread = threading.Thread(target=run_http_server, args=(httpd,), daemon=True)
    server_thread.start()

    if bool(STATE.config.get('start_server_with_manager')) and not STATE.running:
        def _kw_autostart_server_after_manager():
            try:
                time.sleep(1.25)
                ok, msg = STATE.start_server()
                STATE.log(msg if isinstance(msg, str) else ('Servidor arrancado automáticamente al iniciar el manager.' if ok else 'No se pudo arrancar el servidor automáticamente.'))
            except Exception as exc:
                STATE.log(f'Error al arrancar el servidor automáticamente con el manager: {exc}')
        threading.Thread(target=_kw_autostart_server_after_manager, daemon=True).start()

    opened_desktop = False
    if STATE.config.get('desktop_window', True):
        opened_desktop = launch_desktop_window(url)

    if not opened_desktop and STATE.config.get('auto_open_browser', True):
        threading.Timer(0.8, lambda: webbrowser.open(url)).start()

    try:
        if opened_desktop:
            STATE.shutdown_requested = True
        else:
            while not STATE.shutdown_requested:
                time.sleep(0.5)
    except KeyboardInterrupt:
        pass
    finally:
        STATE.shutdown_requested = True
        try:
            STATE.stop_bot()
        except Exception:
            pass
        try:
            httpd.shutdown()
        except Exception:
            pass
        try:
            PID_FILE.unlink(missing_ok=True)
        except Exception:
            pass
        httpd.server_close()




# --- PATCH V37: UI real, multi bots, startup with Windows ---
PATCH_V37_JS = (STATIC_DIR / 'patch-v37.js').read_text(encoding='utf-8') if (STATIC_DIR / 'patch-v37.js').exists() else ''

def _kw_bool(value, default=False):
    if value is None:
        return default
    if isinstance(value, bool):
        return value
    if isinstance(value, (int, float)):
        return bool(value)
    text = str(value).strip().lower()
    if text in {'1','true','yes','si','sí','on'}:
        return True
    if text in {'0','false','no','off',''}:
        return False
    return default

def _kw_slug(text):
    base = re.sub(r'[^a-z0-9]+', '-', str(text or '').strip().lower()).strip('-')
    return base or f'bot-{int(time.time()*1000)}'

def _kw_external_bots_clean(raw):
    items = []
    source = raw
    if isinstance(source, str):
        try:
            source = json.loads(source)
        except Exception:
            source = []
    if not isinstance(source, list):
        source = []
    seen = set()
    for idx, row in enumerate(source):
        if not isinstance(row, dict):
            continue
        name = str(row.get('name') or f'Bot {idx + 1}').strip() or f'Bot {idx + 1}'
        entry = str(row.get('entry') or '').strip().replace('\\', '/')
        bot_id = str(row.get('id') or _kw_slug(name)).strip() or _kw_slug(name)
        if bot_id in seen:
            bot_id = f'{bot_id}-{idx+1}'
        seen.add(bot_id)
        items.append({
            'id': bot_id,
            'name': name,
            'entry': entry,
            'enabled': _kw_bool(row.get('enabled'), True),
            'auto_start_with_server': _kw_bool(row.get('auto_start_with_server'), True),
            'start_with_windows': _kw_bool(row.get('start_with_windows'), False),
        })
    return items

def _kw_runtime_store(self):
    if not hasattr(self, 'extra_bot_processes') or not isinstance(getattr(self, 'extra_bot_processes'), dict):
        self.extra_bot_processes = {}
    return self.extra_bot_processes

def _kw_startup_folder():
    if os.name != 'nt':
        return None
    base = os.environ.get('APPDATA')
    if not base:
        return None
    return Path(base) / 'Microsoft' / 'Windows' / 'Start Menu' / 'Programs' / 'Startup'

def _kw_startup_script_path():
    folder = _kw_startup_folder()
    if folder is None:
        return None
    return folder / 'KarmaWorld_Server_Kit_Autostart.bat'

def _kw_entry_lines(entry_path: str):
    entry = Path(str(entry_path).strip())
    if not entry.exists() or not entry.is_file():
        return []
    lines = [f'cd /d "{str(entry.parent)}"']
    ext = entry.suffix.lower()
    if ext == '.py':
        py_exe = sys.executable
        lines.append(f'start "" "{py_exe}" "{entry.name}"')
    elif ext in {'.bat', '.cmd'}:
        lines.append(f'start "" cmd /c "{entry.name}"')
    else:
        lines.append(f'start "" "{entry.name}"')
    return lines

def _kw_sync_windows_startup_script(self):
    path = _kw_startup_script_path()
    if path is None:
        return False, 'Solo disponible en Windows.'
    bot_cfg = self.load_bot_config()
    lines = ['@echo off', 'setlocal']
    if _kw_bool(self.config.get('start_with_windows_manager'), False):
        if getattr(sys, 'frozen', False):
            lines.append(f'start "" "{sys.executable}"')
        else:
            lines.append(f'start "" "{sys.executable}" "{str(APP_HOME / "app.pyw")}"')
    if str(bot_cfg.get('external_bot_entry') or '').strip() and _kw_bool(bot_cfg.get('primary_start_with_windows'), False):
        lines.extend(_kw_entry_lines(bot_cfg.get('external_bot_entry') or ''))
    for row in bot_cfg.get('external_bots', []) or []:
        if _kw_bool(row.get('enabled'), True) and _kw_bool(row.get('start_with_windows'), False):
            lines.extend(_kw_entry_lines(row.get('entry') or ''))
    try:
        path.parent.mkdir(parents=True, exist_ok=True)
        if len(lines) <= 2:
            if path.exists():
                path.unlink()
            return True, 'Inicio con Windows desactivado.'
        path.write_text('\n'.join(lines) + '\n', encoding='utf-8')
        return True, f'Inicio con Windows actualizado: {path.name}'
    except Exception as exc:
        return False, f'No se pudo actualizar el inicio con Windows: {exc}'

def _kw_read_extra_output(self, proc, prefix):
    try:
        if proc.stdout is None:
            return
        for raw in iter(proc.stdout.readline, ''):
            if not raw:
                break
            self.log(f'[{prefix}] ' + raw.rstrip())
    except Exception as exc:
        self.log(f'Error leyendo salida de {prefix}: {exc}')

def _kw_spawn_entry(self, entry_path: str, label: str):
    entry = Path(str(entry_path).strip())
    if not entry.exists() or not entry.is_file():
        return False, None, f'No existe el archivo de arranque de {label}.'
    popen_hidden_kwargs = self._windows_hidden_popen_kwargs()
    if entry.suffix.lower() == '.py':
        cmd = [sys.executable, str(entry.name)]
    elif entry.suffix.lower() in {'.bat', '.cmd'}:
        cmd = ['cmd', '/c', str(entry.name)]
    else:
        cmd = [str(entry.name)]
    proc = subprocess.Popen(
        cmd,
        cwd=str(entry.parent),
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        stdin=subprocess.PIPE,
        text=True,
        bufsize=1,
        shell=False,
        env={**os.environ, 'KARMABOT_CONSOLE_SILENT': '1'},
        **popen_hidden_kwargs
    )
    return True, proc, ''

_orig_load_bot_config_v37 = ManagerState.load_bot_config
_orig_save_bot_config_v37 = ManagerState.save_bot_config
_orig_start_bot_v37 = ManagerState.start_bot
_orig_stop_bot_v37 = ManagerState.stop_bot
_orig_restart_bot_v37 = ManagerState.restart_bot
_orig_status_v37 = ManagerState.status
_orig_save_config_v37 = ManagerState.save_config
_orig_do_get_v37 = Handler.do_GET
_orig_do_post_v37 = Handler.do_POST


def _v37_load_bot_config(self):
    cfg = _orig_load_bot_config_v37(self)
    cfg['external_bots'] = _kw_external_bots_clean(self.config.get('external_bots') or [])
    cfg['primary_start_with_windows'] = _kw_bool(self.config.get('primary_start_with_windows'), False)
    cfg['primary_auto_start_with_server'] = _kw_bool(self.config.get('primary_auto_start_with_server'), True)
    cfg['manager_start_with_windows'] = _kw_bool(self.config.get('start_with_windows_manager'), False)
    return cfg
ManagerState.load_bot_config = _v37_load_bot_config


def _v37_save_bot_config(self, data, sync_only=False):
    incoming = dict(data or {})
    extras = _kw_external_bots_clean(incoming.pop('external_bots', self.config.get('external_bots') or []))
    self.config['external_bots'] = extras
    self.config['primary_start_with_windows'] = _kw_bool(incoming.pop('primary_start_with_windows', self.config.get('primary_start_with_windows')), False)
    self.config['primary_auto_start_with_server'] = _kw_bool(incoming.pop('primary_auto_start_with_server', self.config.get('primary_auto_start_with_server', True)), True)
    self.config['start_with_windows_manager'] = _kw_bool(incoming.pop('manager_start_with_windows', self.config.get('start_with_windows_manager')), False)
    ok, msg = _orig_save_bot_config_v37(self, incoming, sync_only=sync_only)
    if ok:
        safe_write_json(CONFIG_PATH, self.config)
        _kw_sync_windows_startup_script(self)
        return True, 'Configuración de bots guardada.'
    return ok, msg
ManagerState.save_bot_config = _v37_save_bot_config


def _v37_save_config(self, new_config):
    payload = dict(new_config or {})
    if 'start_with_windows_manager' in payload:
        payload['start_with_windows_manager'] = _kw_bool(payload.get('start_with_windows_manager'), False)
    _orig_save_config_v37(self, payload)
    _kw_sync_windows_startup_script(self)
ManagerState.save_config = _v37_save_config


def _v37_list_external_bots_status(self):
    runtime = _kw_runtime_store(self)
    rows = []
    for row in _kw_external_bots_clean(self.config.get('external_bots') or []):
        rec = runtime.get(row['id']) or {}
        proc = rec.get('proc')
        running = bool(proc and proc.poll() is None)
        rows.append({
            **row,
            'running': running,
            'pid': rec.get('pid') if running else None,
            'started_at': rec.get('started_at') if running else None,
        })
    return rows
ManagerState.list_external_bots_status = _v37_list_external_bots_status


def _v37_start_extra_bot(self, bot_id):
    runtime = _kw_runtime_store(self)
    row = next((x for x in _kw_external_bots_clean(self.config.get('external_bots') or []) if x['id'] == str(bot_id)), None)
    if not row:
        return False, 'Bot no encontrado.'
    rec = runtime.get(row['id']) or {}
    proc = rec.get('proc')
    if proc and proc.poll() is None:
        return False, f"{row['name']} ya está arrancado."
    ok, proc, err = _kw_spawn_entry(self, row.get('entry') or '', row['name'])
    if not ok:
        return False, err
    runtime[row['id']] = {'proc': proc, 'pid': proc.pid, 'started_at': datetime.now().isoformat(timespec='seconds'), 'name': row['name'], 'entry': row.get('entry') or ''}
    self.log(f"Bot adicional arrancado: {row['name']} · PID {proc.pid}")
    threading.Thread(target=_kw_read_extra_output, args=(self, proc, f"BOT:{row['name']}"), daemon=True).start()
    return True, f"Bot arrancado: {row['name']}"
ManagerState.start_extra_bot = _v37_start_extra_bot


def _v37_stop_extra_bot(self, bot_id):
    runtime = _kw_runtime_store(self)
    rec = runtime.get(str(bot_id)) or {}
    proc = rec.get('proc')
    pid = rec.get('pid') or (proc.pid if proc else None)
    if not proc and not pid:
        return False, 'Ese bot no está controlado por el manager.'
    try:
        if os.name == 'nt' and pid:
            result = subprocess.run(['taskkill', '/PID', str(pid), '/T', '/F'], stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, timeout=20, **self._windows_hidden_run_kwargs())
            if result.returncode not in (0, 128, 255):
                raise RuntimeError(result.stdout.strip() or f'taskkill devolvió {result.returncode}')
        else:
            if proc and proc.poll() is None:
                proc.terminate()
                try:
                    proc.wait(timeout=10)
                except subprocess.TimeoutExpired:
                    proc.kill()
            elif pid:
                os.kill(pid, signal.SIGTERM)
        self.log(f"Bot adicional detenido: {rec.get('name') or bot_id}")
        return True, f"Bot detenido: {rec.get('name') or bot_id}"
    except Exception as exc:
        return False, f'Error al detener bot: {exc}'
    finally:
        runtime.pop(str(bot_id), None)
ManagerState.stop_extra_bot = _v37_stop_extra_bot


def _v37_restart_extra_bot(self, bot_id):
    ok, msg = self.stop_extra_bot(bot_id)
    if not ok and 'no está controlado' not in str(msg).lower():
        return False, msg
    time.sleep(0.8)
    return self.start_extra_bot(bot_id)
ManagerState.restart_extra_bot = _v37_restart_extra_bot


def _v37_start_bot(self):
    messages = []
    started = False
    if self.get_bot_entry_path() is not None:
        ok, msg = _orig_start_bot_v37(self)
        messages.append(msg)
        started = started or ok
    for row in _kw_external_bots_clean(self.config.get('external_bots') or []):
        if not _kw_bool(row.get('enabled'), True):
            continue
        ok, msg = self.start_extra_bot(row['id'])
        messages.append(msg)
        started = started or ok
    if started:
        return True, ' | '.join([m for m in messages if m]) or 'Bots externos arrancados.'
    return False, ' | '.join([m for m in messages if m]) or 'No hay bots configurados.'
ManagerState.start_bot = _v37_start_bot


def _v37_stop_bot(self):
    messages = []
    any_ok = False
    ok, msg = _orig_stop_bot_v37(self)
    if ok or 'No hay proceso del bot' not in str(msg):
        messages.append(msg)
        any_ok = any_ok or ok
    for row in list((_kw_runtime_store(self)).keys()):
        ok2, msg2 = self.stop_extra_bot(row)
        messages.append(msg2)
        any_ok = any_ok or ok2
    if any_ok:
        return True, ' | '.join([m for m in messages if m])
    return False, ' | '.join([m for m in messages if m]) or 'No hay bots arrancados.'
ManagerState.stop_bot = _v37_stop_bot


def _v37_restart_bot(self):
    ok_stop, msg_stop = self.stop_bot()
    if not ok_stop and 'No hay bots' not in str(msg_stop):
        return False, msg_stop
    time.sleep(1.0)
    return self.start_bot()
ManagerState.restart_bot = _v37_restart_bot


def _v37_status(self):
    payload = _orig_status_v37(self)
    payload['external_bots_status'] = self.list_external_bots_status()
    startup_path = _kw_startup_script_path()
    payload['windows_startup'] = {
        'manager': _kw_bool(self.config.get('start_with_windows_manager'), False),
        'path': str(startup_path) if startup_path else '',
        'exists': bool(startup_path and startup_path.exists())
    }
    return payload
ManagerState.status = _v37_status


def _v37_start_all_for_server(self):
    try:
        primary = self.get_bot_entry_path()
        if primary is not None and _kw_bool(self.config.get('primary_auto_start_with_server'), True):
            try:
                _orig_start_bot_v37(self)
            except Exception:
                pass
        for row in _kw_external_bots_clean(self.config.get('external_bots') or []):
            if _kw_bool(row.get('enabled'), True) and _kw_bool(row.get('auto_start_with_server'), True):
                try:
                    self.start_extra_bot(row['id'])
                except Exception:
                    pass
    except Exception:
        pass

# patch auto-start on server start by wrapping original start_server behaviour later via helper in existing method call location
_old_start_server_v37 = ManagerState.start_server if hasattr(ManagerState, 'start_server') else None
if _old_start_server_v37 is not None:
    def _wrapped_start_server_v37(self, *args, **kwargs):
        ok, msg = _old_start_server_v37(self, *args, **kwargs)
        if ok:
            _v37_start_all_for_server(self)
        return ok, msg
    ManagerState.start_server = _wrapped_start_server_v37


def _patched_do_get_v37(self):
    parsed = urlparse(self.path)
    path = parsed.path
    if path == '/patch-v37.js':
        self._send(PATCH_V37_JS.encode('utf-8'), 'application/javascript; charset=utf-8')
        return
    return _orig_do_get_v37(self)
Handler.do_GET = _patched_do_get_v37


def _patched_do_post_v37(self):
    parsed = urlparse(self.path)
    path = parsed.path
    if path in {'/api/bots/start', '/api/bots/stop', '/api/bots/restart'}:
        length = int(self.headers.get('Content-Length', '0') or '0')
        raw = self.rfile.read(length) if length else b''
        try:
            body = json.loads(raw.decode('utf-8')) if raw else {}
        except Exception:
            body = {}
        bot_id = str((body or {}).get('id') or '').strip()
        if not bot_id:
            self._send_json({'ok': False, 'message': 'Falta el id del bot.'}, 400)
            return
        if path.endswith('/start'):
            ok, msg = STATE.start_extra_bot(bot_id)
        elif path.endswith('/stop'):
            ok, msg = STATE.stop_extra_bot(bot_id)
        else:
            ok, msg = STATE.restart_extra_bot(bot_id)
        self._send_json({'ok': ok, 'message': msg}, 200 if ok else 400)
        return
    return _orig_do_post_v37(self)
Handler.do_POST = _patched_do_post_v37

if not hasattr(STATE, 'extra_bot_processes'):
    STATE.extra_bot_processes = {}
try:
    _kw_sync_windows_startup_script(STATE)
except Exception:
    pass




# --- FIX v38 backend: primary bot selection + startup flags ---
try:
    if 'start_server_with_manager' not in STATE.config:
        STATE.config['start_server_with_manager'] = False
except Exception:
    pass

_v38_prev_save_config = ManagerState.save_config

def _v38_save_config(self, new_config):
    payload = dict(new_config or {})
    if 'start_server_with_manager' in payload:
        payload['start_server_with_manager'] = bool(payload.get('start_server_with_manager'))
    return _v38_prev_save_config(self, payload)
ManagerState.save_config = _v38_save_config

_v38_prev_status = ManagerState.status

def _v38_status(self):
    payload = _v38_prev_status(self)
    try:
        payload['config']['start_server_with_manager'] = bool(self.config.get('start_server_with_manager', False))
    except Exception:
        pass
    return payload
ManagerState.status = _v38_status


def _v38_start_primary_bot(self):
    if self.get_bot_entry_path() is None:
        return False, 'No hay bot principal configurado.'
    return _orig_start_bot_v37(self)
ManagerState.start_primary_bot = _v38_start_primary_bot


def _v38_stop_primary_bot(self):
    if self.get_bot_entry_path() is None:
        return False, 'No hay bot principal configurado.'
    return _orig_stop_bot_v37(self)
ManagerState.stop_primary_bot = _v38_stop_primary_bot


def _v38_restart_primary_bot(self):
    ok, msg = self.stop_primary_bot()
    if not ok and 'No hay proceso del bot' not in str(msg):
        return False, msg
    time.sleep(0.9)
    return self.start_primary_bot()
ManagerState.restart_primary_bot = _v38_restart_primary_bot

_v38_prev_do_post = Handler.do_POST

def _v38_do_post(self):
    parsed = urlparse(self.path)
    path = parsed.path
    if path in {'/api/bots/start', '/api/bots/stop', '/api/bots/restart'}:
        length = int(self.headers.get('Content-Length', '0') or '0')
        raw = self.rfile.read(length) if length else b''
        try:
            body = json.loads(raw.decode('utf-8')) if raw else {}
        except Exception:
            body = {}
        bot_id = str((body or {}).get('id') or '').strip()
        if not bot_id:
            self._send_json({'ok': False, 'message': 'Falta el bot a controlar.'}, 400)
            return
        if bot_id == 'primary':
            if path.endswith('/start'):
                ok, msg = STATE.start_primary_bot()
            elif path.endswith('/stop'):
                ok, msg = STATE.stop_primary_bot()
            else:
                ok, msg = STATE.restart_primary_bot()
            self._send_json({'ok': ok, 'message': msg}, 200 if ok else 400)
            return
    return _v38_prev_do_post(self)
Handler.do_POST = _v38_do_post

# --- FIX v39: sync real server process, safe refresh metrics, startup in settings ---

def _v39_server_candidate_names(self):
    names = []
    exe = str(self.config.get('executable_path') or '').strip()
    if exe:
        base = Path(exe).name.lower()
        if base:
            names.append(base)
    for extra in ['7DaysToDieServer.exe', '7DaysToDieServer.x86_64.exe', 'startdedicated.exe']:
        low = extra.lower()
        if low not in names:
            names.append(low)
    return names
ManagerState._v39_server_candidate_names = _v39_server_candidate_names


def _v39_find_existing_server_process(self):
    names = set(self._v39_server_candidate_names())
    server_folder = str(self.config.get('server_folder') or '').strip().lower()
    exe_name = Path(str(self.config.get('executable_path') or '')).name.lower()
    best = None
    if psutil is not None:
        try:
            for proc in psutil.process_iter(['pid','name','exe','cmdline','create_time']):
                try:
                    info = proc.info or {}
                    pid = int(info.get('pid') or 0)
                    if pid <= 0 or pid == os.getpid():
                        continue
                    name = str(info.get('name') or '').lower()
                    exe = str(info.get('exe') or '').lower()
                    cmdline = ' '.join(info.get('cmdline') or []).lower()
                    hay = ' '.join([name, exe, cmdline])
                    if not any(n and n in hay for n in names):
                        continue
                    if server_folder and server_folder not in hay and exe_name and exe_name not in hay and '7 days to die' not in hay and '7daystodie' not in hay:
                        continue
                    rec = {
                        'pid': pid,
                        'name': name or exe_name or 'server',
                        'exe': str(info.get('exe') or ''),
                        'cmdline': info.get('cmdline') or [],
                        'create_time': float(info.get('create_time') or 0.0),
                    }
                    if best is None or (rec['create_time'] and rec['create_time'] > best.get('create_time', 0.0)):
                        best = rec
                except Exception:
                    continue
        except Exception:
            best = None
    if best is None and os.name == 'nt':
        try:
            result = subprocess.run(['tasklist', '/FO', 'CSV', '/NH'], stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, timeout=10, **self._windows_hidden_run_kwargs())
            for raw in (result.stdout or '').splitlines():
                line = raw.strip().strip('\ufeff')
                if not line:
                    continue
                try:
                    row = next(csv.reader([line]))
                except Exception:
                    continue
                if len(row) < 2:
                    continue
                name = str(row[0] or '').strip().lower()
                if name not in names:
                    continue
                try:
                    pid = int(str(row[1] or '0').replace(',', ''))
                except Exception:
                    pid = 0
                if pid <= 0 or pid == os.getpid():
                    continue
                best = {'pid': pid, 'name': name, 'exe': '', 'cmdline': [], 'create_time': 0.0}
                break
        except Exception:
            pass
    return best
ManagerState._v39_find_existing_server_process = _v39_find_existing_server_process


def _v39_sync_server_process(self, mark_desired=False):
    proc = getattr(self, 'server_process', None)
    if proc and proc.poll() is None:
        try:
            self.server_pid = proc.pid
        except Exception:
            pass
        if mark_desired:
            self.desired_server_running = True
        return True, {'pid': self.server_pid, 'name': 'managed', 'create_time': 0.0}
    found = self._v39_find_existing_server_process()
    if found:
        self.server_process = None
        self.server_pid = int(found.get('pid') or 0) or None
        if not self.server_started_at:
            ct = float(found.get('create_time') or 0.0)
            if ct > 0:
                try:
                    self.server_started_at = datetime.fromtimestamp(ct).isoformat(timespec='seconds')
                except Exception:
                    self.server_started_at = datetime.now().isoformat(timespec='seconds')
            else:
                self.server_started_at = datetime.now().isoformat(timespec='seconds')
        if mark_desired:
            self.desired_server_running = True
        return True, found
    if self.server_process and self.server_process.poll() is not None:
        self.server_process = None
    self.server_pid = None
    self.server_started_monotonic = 0.0
    return False, None
ManagerState._v39_sync_server_process = _v39_sync_server_process


def _v39_host_cpu_percent(self):
    if psutil is not None:
        try:
            return round(float(psutil.cpu_percent(interval=0.1)), 1)
        except Exception:
            pass
    if os.name != 'nt':
        return None
    try:
        class FILETIME(ctypes.Structure):
            _fields_ = [('dwLowDateTime', ctypes.c_ulong), ('dwHighDateTime', ctypes.c_ulong)]
        idle = FILETIME(); kernel = FILETIME(); user = FILETIME()
        if not ctypes.windll.kernel32.GetSystemTimes(ctypes.byref(idle), ctypes.byref(kernel), ctypes.byref(user)):
            return None
        def _to_int(ft):
            return (int(ft.dwHighDateTime) << 32) + int(ft.dwLowDateTime)
        now = (_to_int(idle), _to_int(kernel), _to_int(user))
        prev = getattr(self, '_v39_cpu_prev', None)
        self._v39_cpu_prev = now
        if not prev:
            return None
        idle_diff = now[0] - prev[0]
        kernel_diff = now[1] - prev[1]
        user_diff = now[2] - prev[2]
        total = kernel_diff + user_diff
        if total <= 0:
            return None
        value = max(0.0, min(100.0, (1.0 - (float(idle_diff) / float(total))) * 100.0))
        return round(value, 1)
    except Exception:
        return None
ManagerState._v39_host_cpu_percent = _v39_host_cpu_percent


def _v39_safe_process_memory(self, pid_value):
    try:
        pid_int = int(pid_value or 0)
    except Exception:
        pid_int = 0
    if pid_int <= 0:
        return {'rss_gb': None}
    if psutil is not None:
        try:
            proc = psutil.Process(pid_int)
            return {'rss_gb': self._format_size_gb(proc.memory_info().rss)}
        except Exception:
            pass
    if os.name == 'nt':
        try:
            PROCESS_QUERY_INFORMATION = 0x0400
            PROCESS_VM_READ = 0x0010
            class PROCESS_MEMORY_COUNTERS(ctypes.Structure):
                _fields_ = [
                    ('cb', ctypes.c_ulong),
                    ('PageFaultCount', ctypes.c_ulong),
                    ('PeakWorkingSetSize', ctypes.c_size_t),
                    ('WorkingSetSize', ctypes.c_size_t),
                    ('QuotaPeakPagedPoolUsage', ctypes.c_size_t),
                    ('QuotaPagedPoolUsage', ctypes.c_size_t),
                    ('QuotaPeakNonPagedPoolUsage', ctypes.c_size_t),
                    ('QuotaNonPagedPoolUsage', ctypes.c_size_t),
                    ('PagefileUsage', ctypes.c_size_t),
                    ('PeakPagefileUsage', ctypes.c_size_t),
                ]
            handle = ctypes.windll.kernel32.OpenProcess(PROCESS_QUERY_INFORMATION | PROCESS_VM_READ, False, pid_int)
            if handle:
                counters = PROCESS_MEMORY_COUNTERS()
                counters.cb = ctypes.sizeof(PROCESS_MEMORY_COUNTERS)
                if ctypes.windll.psapi.GetProcessMemoryInfo(handle, ctypes.byref(counters), counters.cb):
                    ctypes.windll.kernel32.CloseHandle(handle)
                    return {'rss_gb': self._format_size_gb(int(counters.WorkingSetSize))}
                ctypes.windll.kernel32.CloseHandle(handle)
        except Exception:
            pass
    return {'rss_gb': None}
ManagerState._safe_process_memory = _v39_safe_process_memory


_v39_prev_performance_snapshot = ManagerState.performance_snapshot

def _v39_performance_snapshot(self):
    self._v39_sync_server_process(mark_desired=False)
    server_folder = Path((self.config.get('server_folder') or '').strip() or str(APP_HOME))
    if not server_folder.exists():
        server_folder = APP_HOME
    host_cpu = self._v39_host_cpu_percent()
    if psutil is not None:
        try:
            vm = psutil.virtual_memory()
            host_memory = {
                'used_gb': self._format_size_gb(int(vm.total) - int(vm.available)),
                'total_gb': self._format_size_gb(vm.total),
                'percent': round(float(vm.percent), 1),
            }
        except Exception:
            host_memory = self._safe_windows_memory()
    else:
        host_memory = self._safe_windows_memory()
    manager_memory = self._safe_process_memory(os.getpid())
    server_memory = self._safe_process_memory(self.server_pid)
    manager_uptime = max(0, int(time.monotonic() - float(self.manager_started_monotonic or time.monotonic())))
    server_uptime = None
    if self.server_started_at:
        try:
            dt = datetime.fromisoformat(str(self.server_started_at))
            server_uptime = max(0, int((datetime.now() - dt).total_seconds()))
        except Exception:
            pass
    if server_uptime is None and self.server_started_monotonic:
        server_uptime = max(0, int(time.monotonic() - float(self.server_started_monotonic or 0.0)))
    return {
        'host_cpu_percent': host_cpu,
        'host_memory': host_memory,
        'disk': self._safe_disk_usage(server_folder),
        'manager_uptime_seconds': manager_uptime,
        'server_uptime_seconds': server_uptime,
        'manager_memory': manager_memory,
        'server_memory': server_memory,
        'psutil_available': bool(psutil is not None),
    }
ManagerState.performance_snapshot = _v39_performance_snapshot


_v39_prev_start_server = ManagerState.start_server

def _v39_start_server(self, mark_desired=True):
    synced, found = self._v39_sync_server_process(mark_desired=mark_desired)
    if synced:
        self.auto_restart_scheduled_at = None
        self.server_watchdog_fail_count = 0
        return True, f"El servidor ya estaba arrancado. Panel sincronizado con PID {self.server_pid}."
    ok, msg = _v39_prev_start_server(self, mark_desired=mark_desired)
    if ok:
        try:
            time.sleep(1.2)
            self._v39_sync_server_process(mark_desired=mark_desired)
        except Exception:
            pass
    return ok, msg
ManagerState.start_server = _v39_start_server


_v39_prev_status = ManagerState.status

def _v39_status(self):
    synced, found = self._v39_sync_server_process(mark_desired=False)
    payload = _v39_prev_status(self)
    running = bool(synced)
    if not running and payload.get('running'):
        running = True
    payload['running'] = running
    payload['pid'] = self.server_pid if running else None
    payload['started_at'] = self.server_started_at if running else None
    payload['performance'] = self.performance_snapshot()
    return payload
ManagerState.status = _v39_status


def _v39_update_refresh_button_index(index_text: str):
    return index_text.replace("<button class=\"btn\" id=\"btnManualRefreshTop\" onclick=\"refreshNow()\">Actualizar</button>", "<button class=\"btn\" id=\"btnManualRefreshTop\" type=\"button\" onclick=\"return refreshNow(event)\">Actualizar ahora</button>").replace("<button class=\"btn\" id=\"btnBackupTop\" onclick=\"serverAction('backup')\">Backup</button>", "")

try:
    INDEX_HTML = _v39_update_refresh_button_index(INDEX_HTML)
except Exception:
    pass



# ===== V45 repairs: CPU host más estable + filtro de ruido en jugadores =====
_V45_NOISE_TOKENS = (
    'roboticinbox', 'cntroboticinbox', 'bloodmoonparty', 'spawnzombie grp',
    'verified as a robotic inbox block', 'storagemanager', 'feralhordestage', 'day/time '
)


def _v45_join_history_record(record):
    if not isinstance(record, dict):
        return ''
    return ' | '.join([
        str(record.get('primary_name') or ''),
        ' '.join(str(x or '') for x in list(record.get('names') or [])),
        ' '.join(str(x or '') for x in list(record.get('steamids') or [])),
        ' '.join(str(x or '') for x in list(record.get('eosids') or [])),
        ' '.join(str(x or '') for x in list(record.get('entityids') or [])),
        str(record.get('last_raw') or ''),
    ]).lower()


def _v45_record_is_noise_strict(self, record):
    try:
        if self._history_record_is_noise(record):
            return True
    except Exception:
        pass
    joined = _v45_join_history_record(record)
    if any(token in joined for token in _V45_NOISE_TOKENS):
        return True
    name = str((record or {}).get('primary_name') or '').strip()
    if re.match(r'^\d{2}-\d{2}t\d{2}:\d{2}:\d{2}', name, flags=re.IGNORECASE):
        return True
    if re.match(r'^\d{4}-\d{2}-\d{2}t\d{2}:\d{2}:\d{2}', name, flags=re.IGNORECASE):
        return True
    return False
ManagerState._v45_record_is_noise_strict = _v45_record_is_noise_strict


def _v45_player_is_noise(player):
    if not isinstance(player, dict):
        return True
    joined = ' | '.join([
        str(player.get('name') or ''),
        str(player.get('raw') or ''),
        str(player.get('steamid') or ''),
        str(player.get('eosid') or ''),
        str(player.get('entityid') or ''),
    ]).lower()
    if any(token in joined for token in _V45_NOISE_TOKENS):
        return True
    name = str(player.get('name') or '').strip()
    if not name:
        return True
    if re.match(r'^\d{2}-\d{2}t\d{2}:\d{2}:\d{2}', name, flags=re.IGNORECASE):
        return True
    if re.match(r'^\d{4}-\d{2}-\d{2}t\d{2}:\d{2}:\d{2}', name, flags=re.IGNORECASE):
        return True
    return False


_v45_prev_host_cpu_percent = ManagerState._v39_host_cpu_percent

def _v45_host_cpu_percent(self):
    if psutil is not None:
        try:
            if not getattr(self, '_v45_cpu_psutil_primed', False):
                psutil.cpu_percent(interval=None)
                self._v45_cpu_psutil_primed = True
                last = getattr(self, '_v45_last_host_cpu_percent', None)
                if last is not None:
                    return last
            value = round(float(psutil.cpu_percent(interval=None)), 1)
            self._v45_last_host_cpu_percent = value
            return value
        except Exception:
            pass
    value = _v45_prev_host_cpu_percent(self)
    if value is not None:
        try:
            self._v45_last_host_cpu_percent = value
        except Exception:
            pass
    return value
ManagerState._v39_host_cpu_percent = _v45_host_cpu_percent


_v45_prev_status = ManagerState.status

def _v45_status(self):
    payload = _v45_prev_status(self)
    try:
        payload['players_cache'] = [row for row in list(payload.get('players_cache') or []) if not _v45_player_is_noise(row)]
    except Exception:
        pass
    try:
        self.players_cache = [row for row in list(self.players_cache or []) if not _v45_player_is_noise(row)]
    except Exception:
        pass
    return payload
ManagerState.status = _v45_status


_v45_prev_player_history_overview = ManagerState.player_history_overview

def _v45_player_history_overview(self):
    rows = _v45_prev_player_history_overview(self)
    return [row for row in list(rows or []) if not self._v45_record_is_noise_strict(row)]
ManagerState.player_history_overview = _v45_player_history_overview


_v45_prev_player_history_profile = ManagerState.player_history_profile

def _v45_player_history_profile(self, player=None, key=''):
    ok, data = _v45_prev_player_history_profile(self, player=player, key=key)
    if not ok:
        return ok, data
    record = data.get('record') if isinstance(data, dict) else None
    if self._v45_record_is_noise_strict(record):
        return False, 'No hay historial para este jugador todavía.'
    return ok, data
ManagerState.player_history_profile = _v45_player_history_profile


_v45_prev_init = ManagerState.__init__

def _v45_init(self):
    _v45_prev_init(self)
    try:
        self.cleanup_player_history_noise()
    except Exception:
        pass
    try:
        if psutil is not None:
            psutil.cpu_percent(interval=None)
            self._v45_cpu_psutil_primed = True
    except Exception:
        pass
ManagerState.__init__ = _v45_init

if __name__ == '__main__':
    try:
        main()
    except Exception:
        _show_startup_error(traceback.format_exc())
        raise
