# -*- mode: python ; coding: utf-8 -*-
from pathlib import Path
from PyInstaller.utils.hooks import collect_all

project_dir = Path(SPECPATH)
webview_datas, webview_binaries, webview_hiddenimports = collect_all('webview')

datas = [
    (str(project_dir / 'assets' / 'background.png'), 'assets'),
    (str(project_dir / 'assets' / 'logo-title.png'), 'assets'),
    (str(project_dir / 'assets' / 'splash.png'), 'assets'),
    (str(project_dir / 'config' / 'config.json'), 'config'),
    (str(project_dir / 'config' / 'panel_users.json'), 'config'),
    (str(project_dir / 'data' / 'permissions.json'), 'data'),
    (str(project_dir / 'data' / 'serverconfig.xml'), 'data'),
    (str(project_dir / 'data' / 'store.json'), 'data'),
    (str(project_dir / 'data' / 'tasks.json'), 'data'),
    (str(project_dir / 'data' / 'teleports.json'), 'data'),
    (str(project_dir / 'data' / 'vip.json'), 'data'),
    (str(project_dir / 'static' / 'app.js'), 'static'),
    (str(project_dir / 'static' / 'index.html'), 'static'),
    (str(project_dir / 'static' / 'staff.css'), 'static'),
    (str(project_dir / 'static' / 'staff.html'), 'static'),
    (str(project_dir / 'static' / 'staff.js'), 'static'),
    (str(project_dir / 'static' / 'styles.css'), 'static'),
    (str(project_dir / 'static' / 'wallet.css'), 'static'),
    (str(project_dir / 'static' / 'wallet.html'), 'static'),
    (str(project_dir / 'static' / 'wallet.js'), 'static'),
]

a = Analysis(
    [str(project_dir / 'app.pyw')],
    pathex=[str(project_dir)],
    binaries=webview_binaries,
    datas=datas + webview_datas,
    hiddenimports=webview_hiddenimports,
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=[],
    noarchive=False,
)
pyz = PYZ(a.pure)

exe = EXE(
    pyz,
    a.scripts,
    a.binaries,
    a.datas,
    [],
    name='KarmaWorld Server Kit',
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=False,
    upx_exclude=[],
    runtime_tmpdir=None,
    console=False,
    disable_windowed_traceback=False,
    argv_emulation=False,
    target_arch=None,
    codesign_identity=None,
    entitlements_file=None,
    icon=str(project_dir / 'KarmaWorld_ServerKit.ico'),
)
