const T = {
  es: {
    appTitle: 'KarmaWorld Server Kit',
    splashLoading: 'Cargando KarmaWorld Server Kit...',
    eyebrow: 'PANEL ESTILO SERVER KIT',
    heroSubtitle: 'Panel local funcional con arranque real, parada por proceso, auto reinicio opcional y edición clara del serverconfig.',
    language: 'Idioma',
    dashboard: 'Dashboard',
    server: 'Server',
    console: 'Consola',
    liveChat: 'Chat en vivo',
    players: 'Jugadores',
    permissions: 'Permisos',
    teleports: 'Teleport',
    backups: 'Backups',
    store: 'Tienda',
    vip: 'VIP',
    serverconfig: 'ServerConfig',
    settings: 'Ajustes',
    helpGuide: 'Ayuda',
    discordBot: 'Bot externo',
    liveMap: 'Mapa en vivo',
    level: 'Nivel',
    commands: 'Comandos',
    category: 'Categoría',
    itemCode: 'Código item',
    quantity: 'Cantidad',
    roleName: 'Rol Discord',
    dailyBonusPercent: 'Bonus daily %',
    salaryBonusPercent: 'Bonus salario %',
    price: 'Precio',
    benefits: 'Beneficios',
    noMessagesYet: 'Sin mensajes todavía.',
    start: 'Iniciar',
    restart: 'Reiniciar',
    stop: 'Parar',
    backup: 'Backup',
    startBot: 'Iniciar bot',
    stopBot: 'Parar bot',
    stopManager: 'Parar manager',
    status: 'Estado',
    on: 'Encendido',
    off: 'Apagado',
    panel: 'Panel',
    pid: 'PID',
    telnet: 'Telnet',
    autoRestart: 'Auto reinicio',
    serverControl: 'Control del servidor',
    startServer: 'Iniciar servidor',
    stopServer: 'Parar servidor',
    restartServer: 'Reiniciar servidor',
    createBackup: 'Crear backup',
    scheduledTasks: 'Tareas programadas',
    recentActivity: 'Actividad reciente',
    technicalStatus: 'Estado técnico',
    configuredPaths: 'Rutas configuradas',
    startedAt: 'Arrancado el',
    panelAddress: 'Panel',
    recentManagerEvents: 'Últimos eventos del manager',
    sameXmlOrder: 'Mismo orden que en el XML real',
    serverSummary: 'Resumen del servidor',
    xmlOrderHint: 'Aquí ves y editas las propiedades en el mismo orden en que aparecen en el serverconfig.xml real.',
    noRecentEvents: 'Todavía no hay eventos recientes del manager.',
    name: 'Nombre',
    cron: 'Cron',
    active: 'Activo',
    yes: 'Sí',
    no: 'No',
    enabled: 'Activado',
    disabled: 'Desactivado',
    serverFolder: 'Carpeta del servidor',
    executable: 'Ejecutable / BAT',
    workingFolder: 'Carpeta desde la que se ejecuta',
    realXml: 'XML real',
    delaySeconds: 'Segundos',
    serverOn: '● Servidor encendido',
    serverOff: '● Servidor apagado',
    send: 'Enviar',
    refresh: 'Refrescar',
    consolePlaceholder: 'Escribe comando telnet y pulsa enviar',
    globalMessagePlaceholder: 'Mensaje global para say',
    sendToGame: 'Enviar al juego',
    configureTelnetHint: 'Para enviar al juego de verdad, configura telnet host, puerto y contraseña en Ajustes.',
    refreshPlayers: 'Actualizar jugadores',
    lastRefresh: 'Última actualización',
    rawOutput: 'Salida raw',
    noPlayerData: 'Sin datos. Usa el botón para consultar por telnet.',
    backupNow: 'Crear backup ahora',
    backupHint: 'Se guarda como ZIP dentro de la carpeta de backups configurada.',
    backupRoute: 'Ruta de backups',
    backupHowWorks: 'Cómo funcionan los backups: “Crear backup ahora” guarda una copia ZIP del servidor en la carpeta configurada. En Tareas programadas puedes poner cron para hacer copias automáticas. Ejemplos: */30 * * * * = cada 30 minutos, 0 * * * * = cada hora, 0 */12 * * * = cada 12 horas. Los backups antiguos se borran solos a partir de 1 día. Después puedes restaurar o borrar una copia desde esta misma pestaña con el servidor parado para restaurar.',
    loadRealXml: 'Cargar XML real',
    saveXml: 'Guardar XML bruto',
    saveOrderedXml: 'Guardar',
    saveXmlConfirm: '¿Guardar cambios en serverconfig.xml?',
    generalSettings: 'Ajustes generales',
    startupImage: 'Imagen de inicio',
    changeStartupImage: 'Cambiar imagen de inicio',
    saveSettings: 'Guardar ajustes',
    exportConfig: 'Exportar configuración',
    importConfig: 'Importar configuración',
    selectExportFile: 'Elige dónde guardar la configuración',
    selectImportFile: 'Selecciona un ZIP de configuración',
    exportConfigDone: 'Configuración exportada.',
    importConfigDone: 'Configuración importada.',
    importConfigConfirm: '¿Importar esta configuración y sobrescribir la actual?',
    serverName: 'Nombre del servidor',
    serverPath: 'Ruta del servidor',
    exeOrBat: 'Ejecutable o BAT para arrancar',
    workingDirectory: 'Carpeta desde la que se ejecuta el servidor',
    realServerConfig: 'Ruta real de serverconfig.xml',
    telnetHost: 'Telnet host',
    telnetPort: 'Telnet puerto',
    telnetPassword: 'Telnet password',
    panelHost: 'Host panel',
    panelPort: 'Puerto panel',
    accentColor: 'Color acento',
    backupFolder: 'Carpeta backups',
    botConfigTitle: 'Bot externo',
    botConfigHint: 'Aquí eliges el archivo real de arranque del bot externo (.bat, .cmd, .exe o .py). Al iniciar el servidor, el manager intentará arrancarlo también si está configurado. El bot solo se detiene manualmente o al cerrar el manager.',
    botToken: 'Token del bot',
    botFolder: 'Archivo de arranque del bot',
    selectBotFolder: 'Selecciona el archivo de arranque del bot',
    botGeneralSection: 'Chat general',
    botGeneralSectionText: 'Campos generales del bot externo. Se guardan en la carpeta del bot que elijas.',
    botAdminSection: 'Administración',
    botAdminSectionText: 'Estos campos se guardan en la configuración del bot externo. El manager no crea ni sincroniza estos paneles automáticamente.',
    botRpgSection: 'RPG',
    botRpgSectionText: 'Estos canales y opciones se guardan en la carpeta del bot externo. La tienda, VIP y permisos del manager ya no se vinculan automáticamente al bot.',
    rpgLogChannel: 'RPG · canal logs / historial',

    presenceSection: 'Estado visible del bot',
    presenceSectionText: 'Configura el texto que muestra el bot en Discord. Puede ser fijo o ir rotando con el estado del servidor.',
    presenceMode: 'Modo del mensaje',
    presenceModeFixed: 'Fijo',
    presenceModeRotate: 'Rotativo',
    presenceFixedText: 'Mensaje fijo',
    presenceRotateInterval: 'Segundos entre cambios',
    presenceRotateState: 'Mostrar estado del servidor',
    presenceRotatePlayers: 'Mostrar jugadores conectados',
    presenceRotateGameTime: 'Mostrar día y hora del servidor',
    presenceRotateNextHorde: 'Mostrar próxima horda',
    serverThumbnailUrl: 'URL imagen del servidor / paneles (vacío = usa imagen de inicio)',
    serverAlertsThumbnailUrl: 'URL imagen alertas (vacío = usa imagen de inicio)',
    guildId: 'Guild ID',
    mainChannel: 'Canal Chat',
    inputChannel: 'Canal entrada Discord',
    outputChannel: 'Canal salida Discord',
    adminCommandChannel: 'Administración · canal comandos admin',
    adminPanelChannel: 'Administración · canal panel admin',
    statusPanelChannel: 'Administración · canal panel estado',
    restartChannel: 'Administración · canal avisos reinicio / mantenimiento',
    alertChannel: 'Administración · canal avisos importantes',
    logChannel: 'Administración · canal logs del bot',
    adminActionLogChannel: 'Administración · canal historial de acciones',
    stateMessageChannel: 'Administración · canal mensaje fijo de estado',
    rpgCommandsChannel: 'RPG · canal panel usuario / comandos',
    adminShopChannel: 'RPG · canal panel administración tienda',
    telnetSyncedFromXml: 'Telnet sincronizado desde serverconfig.xml',
    saveBotConfig: 'Guardar bot',
    botRunning: 'Bot encendido',
    botStopped: 'Bot apagado',
    botOnBadge: '● Bot encendido',
    botOffBadge: '● Bot apagado',
    autoRestartEnabled: 'Auto reinicio si el servidor se para',
    autoRestartDelay: 'Espera antes de reiniciar (segundos)',
    selectServerFolder: 'Selecciona carpeta del servidor',
    selectExecutable: 'Selecciona ejecutable o BAT',
    selectWorkingDirectory: 'Selecciona carpeta de trabajo',
    selectServerConfig: 'Selecciona serverconfig.xml',
    selectBackupFolder: 'Selecciona carpeta de backups',
    selectStartupImage: 'Selecciona imagen de inicio',
    browse: 'Buscar',
    addRow: 'Añadir fila',
    saveList: 'Guardar lista',
    delete: 'Eliminar',
    panelUpdated: 'Panel actualizado.',
    pathSelected: 'Ruta seleccionada.',
    settingsSaved: 'Ajustes guardados.',
    startupImageUpdated: 'Imagen de inicio actualizada. Recarga el panel para verla.',
    writeCommand: 'Escribe un comando.',
    writeMessage: 'Escribe un mensaje.',
    invalidResponse: 'Respuesta inválida',
    error: 'Error',
    managerStoppedScreen: 'Manager detenido. Puedes volver a iniciarlo desde este botón.',
    restartManager: 'Volver a iniciar',
    managerStoppedHint: 'El panel sigue abierto pero el manager está detenido. El bot se apaga y no se ejecutan tareas automáticas hasta volver a iniciarlo.',
    howItWorks: 'Cómo funciona',
    howItWorksA: 'Ruta del servidor: carpeta general del server. Ejecutable/BAT: archivo real que arranca 7DTD. Carpeta de trabajo: carpeta desde la que se lanza ese archivo.',
    howItWorksB: 'Parar servidor: ahora mata el proceso controlado por el manager. Ya no usa archivo stop.',
    howItWorksC: 'Imagen de inicio: es la pantalla que sale al abrir el manager antes de cargar el panel.',
    moduleBaseTitle: 'Estado actual del módulo',
    moduleBaseText: 'Ahora mismo es una base editable dentro del panel. En el siguiente paso la conectamos con la lógica real del servidor, telnet o economía.',
    propName: 'Propiedad',
    propValue: 'Valor',
    propDescription: 'Descripción',
    orderedEditor: 'Editor de propiedades',
    rawEditor: 'Editor XML bruto',
    reloadOrdered: 'Recargar ordenado',
    loadXmlFirst: 'Carga primero el XML real.',
    noStructuredData: 'No se han podido leer propiedades del XML.',
    autoRestartScheduled: 'Reinicio programado',
    notConfigured: 'No configurado',
    imageStartHint: 'Esta imagen sale al abrir el manager antes del panel.',
    managerStateStopped: 'Parado',
    managerStateRunning: 'En marcha',
    playersOnline: 'Jugadores online',
    options: 'Opciones',
    kickPlayer: 'Expulsar',
    copyName: 'Copiar nombre',
    copyId: 'Copiar ID',
    copySteam: 'Copiar Steam/EOS',
    copyRaw: 'Copiar línea',
    viewOnMap: 'Ver en mapa',
    close: 'Cerrar',
    playerName: 'Jugador',
    slot: 'Slot',
    entityId: 'Entity ID',
    steamId: 'Steam/EOS',
    position: 'Posición',
    mapNoCoords: 'No hay coordenadas de jugadores para mostrar todavía.',
    mapLegend: 'Vista en vivo basada en las coordenadas X/Z recibidas por telnet.',
    centeredOnPlayer: 'Centrado en jugador',
    idCopied: 'Dato copiado.',
    invalidPlayer: 'Jugador no válido.',
    kickSent: 'Comando de expulsión enviado.',
    liveUpdating: 'Actualización automática activa',
    clickRefreshIfNeeded: 'Si no aparecen, revisa telnet y pulsa actualizar.',
    mapFocusCleared: 'Mapa centrado en todos los jugadores.',
    mapImage: 'Imagen del mapa',
    selectMapImage: 'Selecciona imagen del mapa',
    mapImagePath: 'Ruta de imagen del mapa',
    mapBoundsTitle: 'Tamaño del mapa',
    mapSizeMode: 'Tamaño del mapa RWG',
    mapCustomSize: 'Tamaño personalizado',
    mapSizeOfficial: 'Oficial',
    mapHowItWorks: 'El tamaño RWG define automáticamente los bordes del mapa usando los valores típicos del juego. El panel calcula los límites X/Z a partir de ese tamaño y coloca a los jugadores encima de la imagen.',
    mapNotConfigured: 'Configura una imagen del mapa y sus límites en Ajustes para ver a los jugadores sobre el mundo real.',
    mapUseSameWorld: 'Usa una captura o imagen exportada del mismo mundo que está jugando el servidor.',
    mousePos: 'Ratón',
    mapViewAll: 'Ver todo',
    mapZoomIn: 'Zoom +',
    mapZoomOut: 'Zoom -',
    mapResetZoom: 'Reset zoom',
    mapPlayersPanel: 'Jugadores en mapa',
    mapFocusPlayer: 'Centrar',
    mapNoImage: 'No hay imagen de mapa configurada.',
    mapCoordsHint: 'Los jugadores se colocan usando X/Z del telnet sobre la imagen del mapa. X mueve izquierda/derecha y Z mueve arriba/abajo.',
    importWorld: 'Subir mundo nuevo',
    worldsFolder: 'Carpeta de mundos',
    selectWorldFolder: 'Selecciona carpeta de mundos',
    selectWorldZip: 'Selecciona mundo o ZIP',
    worldImported: 'Mundo importado.',
    worldSourceMissing: 'Selecciona primero el mundo o ZIP origen.',
    worldFolderMissing: 'Selecciona primero la carpeta de mundos destino.',
    mapSize6144: '6144',
    mapSize8192: '8192',
    mapSize10240: '10240',
    mapSizeCustom: 'Personalizado',
    helpAllTitle: 'Guía rápida del panel',
    helpServerPathsTitle: 'Rutas básicas',
    helpServerPathsText: 'Ruta del servidor: carpeta general del server. Ejecutable/BAT: archivo real que arranca 7DTD. Carpeta de trabajo: carpeta desde la que se lanza ese archivo.',
    helpMapTitle: 'Mapa en vivo',
    helpMapText: 'Selecciona el tamaño RWG y una imagen del mismo mundo. El panel calcula automáticamente los límites del mapa y coloca jugadores o selecciones usando las coordenadas X/Z del servidor.',
    helpRestartTitle: 'Auto reinicio',
    helpRestartText: 'Si está activado y el proceso del servidor se cierra, el manager intentará volver a arrancarlo tras los segundos indicados.',
    helpClaimsTitle: 'Claims y protecciones',
    helpClaimsText: 'En Mapa en vivo puedes seleccionar una zona, abrir el creador de claim y enviar el comando por telnet. Sirve para proteger contra entrada, daño, horarios, portal y más.',
    helpWorldsTitle: 'Subir mundo',
    helpWorldsText: 'El botón de subir mundo copia una carpeta de mundo o extrae un ZIP a la carpeta de mundos que indiques.',
    helpPlayersTitle: 'Jugadores',
    helpPlayersText: 'Haz clic en el nombre para abrir la ficha del jugador. Desde ahí puedes ver datos, copiar identificadores y enviarlo al mapa o expulsarlo.',
    helpBotTitle: 'Bot externo',
    helpBotText: 'En la pestaña Bot externo eliges el archivo real de arranque del bot (.bat, .cmd, .exe o .py). Al iniciar el servidor, el manager intentará iniciarlo también si está configurado. El bot solo se detiene manualmente o al cerrar el manager.'
  },
  en: {
    appTitle: 'KarmaWorld Server Kit',
    splashLoading: 'Loading KarmaWorld Server Kit...',
    eyebrow: 'SERVER KIT STYLE PANEL',
    heroSubtitle: 'Functional local panel with real launch, process stop, optional auto restart and clear serverconfig editing.',
    language: 'Language',
    dashboard: 'Dashboard',
    server: 'Server',
    console: 'Console',
    liveChat: 'Live chat',
    players: 'Players',
    permissions: 'Permissions',
    teleports: 'Teleport',
    backups: 'Backups',
    store: 'Store',
    vip: 'VIP',
    serverconfig: 'ServerConfig',
    settings: 'Settings',
    helpGuide: 'Help',
    discordBot: 'External Bot',
    liveMap: 'Live map',
    level: 'Level',
    commands: 'Commands',
    category: 'Category',
    itemCode: 'Item code',
    quantity: 'Quantity',
    roleName: 'Discord role',
    dailyBonusPercent: 'Daily bonus %',
    salaryBonusPercent: 'Salary bonus %',
    price: 'Price',
    benefits: 'Benefits',
    noMessagesYet: 'No messages yet.',
    start: 'Start',
    restart: 'Restart',
    stop: 'Stop',
    backup: 'Backup',
    startBot: 'Start bot',
    stopBot: 'Stop bot',
    stopManager: 'Stop manager',
    status: 'Status',
    on: 'Online',
    off: 'Offline',
    panel: 'Panel',
    pid: 'PID',
    telnet: 'Telnet',
    autoRestart: 'Auto restart',
    serverControl: 'Server control',
    startServer: 'Start server',
    stopServer: 'Stop server',
    restartServer: 'Restart server',
    createBackup: 'Create backup',
    scheduledTasks: 'Scheduled tasks',
    recentActivity: 'Recent activity',
    technicalStatus: 'Technical status',
    configuredPaths: 'Configured paths',
    startedAt: 'Started at',
    panelAddress: 'Panel',
    recentManagerEvents: 'Latest manager events',
    sameXmlOrder: 'Same order as the real XML',
    serverSummary: 'Server summary',
    xmlOrderHint: 'Here you see and edit properties in the same order they appear in the real serverconfig.xml.',
    noRecentEvents: 'There are no recent manager events yet.',
    name: 'Name',
    cron: 'Cron',
    active: 'Active',
    yes: 'Yes',
    no: 'No',
    enabled: 'Enabled',
    disabled: 'Disabled',
    serverFolder: 'Server folder',
    executable: 'Executable / BAT',
    workingFolder: 'Launch working folder',
    realXml: 'Real XML',
    delaySeconds: 'Seconds',
    serverOn: '● Server online',
    serverOff: '● Server offline',
    send: 'Send',
    refresh: 'Refresh',
    consolePlaceholder: 'Type a telnet command and press send',
    globalMessagePlaceholder: 'Global message for say',
    sendToGame: 'Send to game',
    configureTelnetHint: 'To send to the game for real, configure telnet host, port and password in Settings.',
    refreshPlayers: 'Refresh players',
    lastRefresh: 'Last refresh',
    rawOutput: 'Raw output',
    noPlayerData: 'No data yet. Use the button to query telnet.',
    backupNow: 'Create backup now',
    backupHint: 'It is saved as ZIP inside the configured backups folder.',
    backupRoute: 'Backups path',
    backupHowWorks: 'How backups work: “Create backup now” saves a ZIP copy of the server into the configured folder. In Scheduled tasks you can use cron for automatic backups. Examples: */30 * * * * = every 30 minutes, 0 * * * * = every hour, 0 */12 * * * = every 12 hours. Old backups are auto-deleted after 1 day. You can later restore or delete a copy from this tab, with the server stopped for restore.',
    loadRealXml: 'Load real XML',
    saveXml: 'Save raw XML',
    saveOrderedXml: 'Save',
    saveXmlConfirm: 'Save changes to serverconfig.xml?',
    generalSettings: 'General settings',
    startupImage: 'Startup image',
    changeStartupImage: 'Change startup image',
    saveSettings: 'Save settings',
    exportConfig: 'Export configuration',
    importConfig: 'Import configuration',
    selectExportFile: 'Choose where to save the configuration',
    selectImportFile: 'Select a configuration ZIP',
    exportConfigDone: 'Configuration exported.',
    importConfigDone: 'Configuration imported.',
    importConfigConfirm: 'Import this configuration and overwrite the current one?',
    serverName: 'Server name',
    serverPath: 'Server path',
    exeOrBat: 'Executable or BAT to launch',
    workingDirectory: 'Folder used to launch the server',
    realServerConfig: 'Real serverconfig.xml path',
    telnetHost: 'Telnet host',
    telnetPort: 'Telnet port',
    telnetPassword: 'Telnet password',
    panelHost: 'Panel host',
    panelPort: 'Panel port',
    accentColor: 'Accent color',
    backupFolder: 'Backups folder',
    botConfigTitle: 'External bot',
    botConfigHint: 'Here you choose the real startup file for the external bot (.bat, .cmd, .exe or .py). When the server starts, the manager will also try to start it if configured. The bot only stops manually or when the manager closes.',
    botToken: 'Bot token',
    botFolder: 'Bot startup file',
    selectBotFolder: 'Select the bot startup file',
    botGeneralSection: 'General chat',
    botGeneralSectionText: 'General fields of the external bot. They are saved in the bot folder you choose.',
    botAdminSection: 'Administration',
    botAdminSectionText: 'These fields are saved in the external bot configuration. The manager does not create or sync these panels automatically.',
    botRpgSection: 'RPG',
    botRpgSectionText: 'These channels and options are saved in the external bot folder. Store, VIP and permissions are no longer auto-linked from the manager.',
    rpgLogChannel: 'RPG · logs / history channel',
    presenceSection: 'Bot visible status',
    presenceSectionText: 'Configure the text shown by the bot in Discord. It can be fixed or rotate with live server data.',
    presenceMode: 'Message mode',
    presenceModeFixed: 'Fixed',
    presenceModeRotate: 'Rotating',
    presenceFixedText: 'Fixed message',
    presenceRotateInterval: 'Seconds between changes',
    presenceRotateState: 'Show server status',
    presenceRotatePlayers: 'Show connected players',
    presenceRotateGameTime: 'Show server day and time',
    presenceRotateNextHorde: 'Show next horde',
    serverThumbnailUrl: 'Server / panels image URL',
    serverAlertsThumbnailUrl: 'Alerts image URL (empty = use splash image)',
    guildId: 'Guild ID',
    mainChannel: 'Chat channel',
    inputChannel: 'Discord input channel',
    outputChannel: 'Discord output channel',
    adminCommandChannel: 'Administration · admin commands channel',
    adminPanelChannel: 'Administration · admin panel channel',
    statusPanelChannel: 'Administration · status panel channel',
    restartChannel: 'Administration · restart / maintenance notices channel',
    alertChannel: 'Administration · important alerts channel',
    logChannel: 'Administration · bot logs channel',
    adminActionLogChannel: 'Administration · action history channel',
    stateMessageChannel: 'Administration · fixed status message channel',
    rpgCommandsChannel: 'RPG · user panel / commands channel',
    adminShopChannel: 'RPG · shop admin panel channel',
    telnetSyncedFromXml: 'Telnet synced from serverconfig.xml',
    saveBotConfig: 'Save bot',
    botRunning: 'Bot running',
    botStopped: 'Bot stopped',
    botOnBadge: '● Bot on',
    botOffBadge: '● Bot off',
    autoRestartEnabled: 'Auto restart if the server stops',
    autoRestartDelay: 'Wait before restarting (seconds)',
    selectServerFolder: 'Select server folder',
    selectExecutable: 'Select executable or BAT',
    selectWorkingDirectory: 'Select working directory',
    selectServerConfig: 'Select serverconfig.xml',
    selectBackupFolder: 'Select backups folder',
    selectStartupImage: 'Select startup image',
    browse: 'Browse',
    addRow: 'Add row',
    saveList: 'Save list',
    delete: 'Delete',
    panelUpdated: 'Panel refreshed.',
    pathSelected: 'Path selected.',
    settingsSaved: 'Settings saved.',
    startupImageUpdated: 'Startup image updated. Reload the panel to see it.',
    writeCommand: 'Type a command.',
    writeMessage: 'Type a message.',
    invalidResponse: 'Invalid response',
    error: 'Error',
    managerStoppedScreen: 'Manager stopped. You can start it again with this button.',
    restartManager: 'Start again',
    managerStoppedHint: 'The panel stays open but the manager is stopped. The bot turns off and automatic tasks will not run until you start it again.',
    howItWorks: 'How it works',
    howItWorksA: 'Server path: general server folder. Executable/BAT: real file that starts 7DTD. Working folder: folder used to launch that file.',
    howItWorksB: 'Stop server: now kills the process controlled by the manager. It no longer uses a stop file.',
    howItWorksC: 'Startup image: the splash screen shown before the panel loads.',
    moduleBaseTitle: 'Current module state',
    moduleBaseText: 'Right now this is an editable base inside the panel. In the next step we connect it to the real server logic, telnet or economy.',
    propName: 'Property',
    propValue: 'Value',
    propDescription: 'Description',
    orderedEditor: 'Property editor',
    rawEditor: 'Raw XML editor',
    reloadOrdered: 'Reload ordered',
    loadXmlFirst: 'Load the real XML first.',
    noStructuredData: 'XML properties could not be read.',
    autoRestartScheduled: 'Restart scheduled',
    notConfigured: 'Not configured',
    imageStartHint: 'This image appears before the panel opens.',
    managerStateStopped: 'Stopped',
    managerStateRunning: 'Running',
    playersOnline: 'Players online',
    options: 'Options',
    kickPlayer: 'Kick',
    copyName: 'Copy name',
    copyId: 'Copy ID',
    copySteam: 'Copy Steam/EOS',
    copyRaw: 'Copy line',
    viewOnMap: 'View on map',
    close: 'Close',
    playerName: 'Player',
    slot: 'Slot',
    entityId: 'Entity ID',
    steamId: 'Steam/EOS',
    position: 'Position',
    mapNoCoords: 'There are no player coordinates to display yet.',
    mapLegend: 'Live view based on X/Z coordinates received through telnet.',
    centeredOnPlayer: 'Centered on player',
    idCopied: 'Copied.',
    invalidPlayer: 'Invalid player.',
    kickSent: 'Kick command sent.',
    liveUpdating: 'Auto refresh active',
    clickRefreshIfNeeded: 'If players do not appear, check telnet and refresh.',
    mapFocusCleared: 'Map centered on all players.',
    mapImage: 'Map image',
    selectMapImage: 'Select map image',
    mapImagePath: 'Map image path',
    mapBoundsTitle: 'Map size',
    mapMinX: 'Map min X',
    mapMaxX: 'Map max X',
    mapMinZ: 'Map min Z',
    mapMaxZ: 'Map max Z',
    mapHowItWorks: 'The live map uses a real world image and places players on top using X/Z. Min X and Max X define the left and right edges of the map. Min Z and Max Z define the top and bottom edges. If those four values match the real world, every player is drawn in the correct place on the image.',
    mapNotConfigured: 'Set a map image and bounds in Settings to see players over the real world.',
    mapUseSameWorld: 'Use a capture or exported image from the same world the server is running.',
    mousePos: 'Mouse',
    mapViewAll: 'View all',
    mapZoomIn: 'Zoom +',
    mapZoomOut: 'Zoom -',
    mapResetZoom: 'Reset zoom',
    mapPlayersPanel: 'Players on map',
    mapFocusPlayer: 'Center',
    mapNoImage: 'No map image configured.',
    mapCoordsHint: 'Players are placed using telnet X/Z over the map image.',
    importWorld: 'Upload new world',
    worldsFolder: 'Worlds folder',
    selectWorldFolder: 'Select worlds folder',
    selectWorldZip: 'Select world or ZIP',
    worldImported: 'World imported.',
    worldSourceMissing: 'Select the source world or ZIP first.',
    worldFolderMissing: 'Select the destination worlds folder first.',
    mapSize6144: '6144',
    mapSize8192: '8192',
    mapSize10240: '10240',
    mapSizeCustom: 'Custom',
    helpAllTitle: 'Quick guide',
    helpServerPathsTitle: 'Basic paths',
    helpServerPathsText: 'Server path: general server folder. Executable/BAT: real file that starts 7DTD. Working folder: folder used to launch that file.',
    helpMapTitle: 'Live map',
    helpMapText: 'Choose the RWG size and an image from the same world. The panel automatically calculates map bounds and places players or selections using the server X/Z coordinates.',
    helpRestartTitle: 'Auto restart',
    helpRestartText: 'If enabled and the server process stops, the manager will try to start it again after the selected delay.',
    helpClaimsTitle: 'Claims and protections',
    helpClaimsText: 'In Live map you can select an area, open the claim creator and send the command through telnet. It can protect entry, damage, schedules, portal and more.',
    helpWorldsTitle: 'Upload world',
    helpWorldsText: 'The upload world button copies a world folder or extracts a ZIP into the worlds folder you choose.',
    helpPlayersTitle: 'Players',
    helpPlayersText: 'Click a player name to open the player card. From there you can view data, copy identifiers and send the player to the map or kick them.',
    helpBotTitle: 'External bot',
    helpBotText: 'In the External Bot tab you choose the real startup file for the bot (.bat, .cmd, .exe or .py). Starting the server also starts the bot if it is configured. The bot stops only manually or when the manager closes.'
  }
};

const sectionKeys = ['dashboard','server','console','players','inventory','backups','tasks','serverconfig','settings','notifications','access','helpdocs'];
const footerSectionKeys = [];

const state = {
  section: 'dashboard',
  state: null,
  collections: { teleports: [], tasks: [] },
  xml: '',
  structuredXml: [],
  lang: 'es',
  playerMenuIndex: null,
  selectedPlayerIndex: null,
  mapFocusIndex: null,
  mapZoom: 1,
  mapMouseText: '-',
  mapImageVersion: Date.now(),
  backups: [],
  storeAdminTab: 'overview'
};

function $(id) { return document.getElementById(id); }
function t(key) { return (T[state.lang] && T[state.lang][key]) || T.es[key] || key; }

function formatDateTime(value) {
  if (!value) return '-';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleString(state.lang === 'en' ? 'en-US' : 'es-ES');
}

function menuLabel(key) {
  const map = {
    dashboard: 'generalStatus', server: 'logsTitle', console: 'console', players: 'players', inventory: 'inventory', teleports: 'teleports', backups: 'backups', tasks: 'scheduledTasks', serverconfig: 'serverconfig', settings: 'settings', helpdocs: 'helpGuide'
  };
  return t(map[key] || key);
}

function translateServerMessage(msg) {
  if (!msg) return '';
  if (state.lang === 'es') return msg;
  const exact = {
    'Panel actualizado.': 'Panel refreshed.',
    'Ruta seleccionada.': 'Path selected.',
    'Ajustes guardados.': 'Settings saved.',
    'Imagen de inicio actualizada.': 'Startup image updated.',
    'Imagen de inicio actualizada. Recarga el panel para verla.': 'Startup image updated. Reload the panel to see it.',
    'Escribe un comando.': 'Type a command.',
    'Escribe un mensaje.': 'Type a message.',
    'Respuesta inválida': 'Invalid response',
    'Error': 'Error',
    'No encontrado': 'Not found',
    'Manager detenido.': 'Manager stopped.',
    'Mensaje guardado en el panel. Configura telnet para enviarlo al juego.': 'Message saved in the panel. Configure telnet to send it to the game.',
    'Jugadores actualizados.': 'Players refreshed.',
    'No se pudo refrescar jugadores. Revisa telnet.': 'Could not refresh players. Check telnet.',
    'Servidor arrancado.': 'Server started.',
    'El servidor ya está arrancado.': 'The server is already running.',
    'Selecciona primero el ejecutable o BAT en Ajustes.': 'Select the executable or BAT in Settings first.',
    'No hay proceso de servidor controlado por el manager.': 'There is no server process controlled by the manager.',
    'Proceso del servidor detenido.': 'Server process stopped.',
    'La carpeta del servidor no existe.': 'The server folder does not exist.',
    'XML guardado.': 'XML saved.',
    'Guardado.': 'Saved.',
    'Formato no válido.': 'Invalid format.',
    'Ruta vacía.': 'Empty path.',
    'No existe la imagen.': 'The image does not exist.',
    'No se encontraron propiedades para actualizar.': 'No properties were found to update.',
    'Comando enviado.': 'Command sent.'
  };
  if (exact[msg]) return exact[msg];
  let out = msg;
  const replacements = [
    [/^No existe el ejecutable\/BAT: /, 'Executable/BAT not found: '],
    [/^No existe la carpeta de trabajo: /, 'Working folder not found: '],
    [/^Error al arrancar: /, 'Start error: '],
    [/^Error al detener proceso: /, 'Error stopping process: '],
    [/^Error creando backup: /, 'Error creating backup: '],
    [/^Error guardando XML: /, 'Error saving XML: '],
    [/^Error telnet: /, 'Telnet error: '],
    [/^Backup creado: /, 'Backup created: '],
    [/^Error leyendo salida del servidor: /, 'Error reading server output: '],
    [/^No se pudo abrir el selector: /, 'Could not open the picker: '],
    [/^Tkinter no está disponible: /, 'Tkinter is not available: '],
    [/^No existe el XML: /, 'XML not found: '],
    [/^El servidor se ha parado\. Auto reinicio programado en (\d+) segundos\.$/, 'The server stopped. Auto restart scheduled in $1 seconds.'],
    [/^Intentando auto reinicio del servidor\.\.\.$/, 'Trying auto restart of the server...'],
    [/^Auto reinicio completado\.$/, 'Auto restart completed.'],
    [/^Auto reinicio fallido: /, 'Auto restart failed: '],
    [/^Manager detenido\. Puedes cerrar esta ventana\.$/, 'Manager stopped. You can close this window.']
  ];
  replacements.forEach(([pattern, replacement]) => { out = out.replace(pattern, replacement); });
  return out;
}

function escapeHtml(text) {
  return String(text ?? '').replace(/[&<>"']/g, s => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[s]));
}


function stripXmlComment(text) {
  return String(text || '').replace(/^<!--\s*/, '').replace(/\s*-->$/, '').trim();
}

function translateServerConfigDescription(text) {
  const original = stripXmlComment(text);
  if (!original) return '';
  const exact = {
    'Whatever you want the name of the server to be.': 'El nombre que quieras poner al servidor.',
    'Whatever you want the server description to be, will be shown in the server browser.': 'La descripción que quieras para el servidor; se mostrará en el buscador de servidores.',
    'Website URL for the server, will be shown in the serverbrowser as a clickable link.': 'La URL web del servidor; se mostrará en el buscador de servidores como un enlace pulsable.',
    'Password to gain entry to the server.': 'Contraseña para entrar al servidor.',
    'The region this server is in. Values: NorthAmericaEast, NorthAmericaWest, CentralAmerica, SouthAmerica, Europe, Russia, Asia, MiddleEast, Africa, Oceania': 'La región en la que está este servidor. Valores: NorthAmericaEast, NorthAmericaWest, CentralAmerica, SouthAmerica, Europe, Russia, Asia, MiddleEast, Africa, Oceania.',
    'Primary language for players on this server. Values: Use any language name that you would users expect to search for. Should be the English name of the language, e.g. not "Deutsch" but "German".': 'Idioma principal para los jugadores de este servidor. Usa el nombre del idioma tal y como los usuarios lo buscarían. Debe ser el nombre en inglés del idioma; por ejemplo, no "Deutsch", sino "German".',
    'Port you want the server to listen on. Keep it in the ranges 26900 to 26905 or 27015 to 27020 if you want PCs on the same LAN to find it as a LAN server.': 'Puerto en el que quieres que escuche el servidor. Manténlo en los rangos 26900 a 26905 o 27015 a 27020 si quieres que los PCs de la misma LAN lo encuentren como servidor LAN.',
    'UDP port to use for Steam query. Recommended to set to the same port as GamePort + 1.': 'Puerto UDP que se usará para la consulta de Steam. Se recomienda poner el mismo puerto que GamePort + 1.',
    'UDP port used for Steam and EOS networking.': 'Puerto UDP usado para la red de Steam y EOS.',
    'Enable/disable the web dashboard': 'Activar o desactivar el panel web.',
    'Password to gain entry to the control panel': 'Contraseña para acceder al panel de control.',
    'Port you want the control panel to listen on. Keep it in the ranges 8080 to 8085 or 8087 to 8088 if you want PCs on the same LAN to find it as a LAN server.': 'Puerto en el que quieres que escuche el panel de control. Manténlo en los rangos 8080 a 8085 o 8087 a 8088 si quieres que los PCs de la misma LAN lo encuentren como servidor LAN.',
    'Enable/Disable EasyAntiCheat': 'Activar o desactivar EasyAntiCheat.',
    'Maximum allowed players to spawn in.': 'Número máximo de jugadores permitidos en el servidor.',
    'Maximum world size, this is done, to keep (distant) memory use and world file size down.': 'Tamaño máximo del mundo; se usa para reducir el consumo de memoria y el tamaño del archivo del mundo.',
    'If disabled a player can join with any selected profile. If true they will join with the last profile they joined on this server with.': 'Si se desactiva, un jugador puede entrar con cualquier perfil seleccionado. Si se activa, entrará con el último perfil con el que jugó en este servidor.',
    'If disabled a player can join with any selected profile. If true they will join with the last profile they joined on this server with. Use this option to increase performance if your players all use the same profile to play on your server.': 'Si se desactiva, un jugador puede entrar con cualquier perfil seleccionado. Si se activa, entrará con el último perfil con el que jugó en este servidor. Usa esta opción para mejorar el rendimiento si tus jugadores usan siempre el mismo perfil.',
    'If set the user will see the message during joining the server and has to confirm it before continuing. For more complex changes to this window you can change the "serverjoinrulesdialog" window in XUi': 'Si se establece, el usuario verá este mensaje al entrar al servidor y deberá confirmarlo antes de continuar. Para cambios más complejos en esta ventana puedes modificar la ventana "serverjoinrulesdialog" en XUi.',
    'World seed': 'Semilla del mundo.',
    'Save game name': 'Nombre de la partida guardada.',
    'Game mode': 'Modo de juego.',
    'Difficulty setting': 'Ajuste de dificultad.',
    'Day/Night length in real minutes': 'Duración del ciclo día/noche en minutos reales.',
    'Drop on death': 'Qué se pierde al morir.',
    'Drop on quit': 'Qué se pierde al salir del servidor.',
    'Block durability modifier': 'Modificador de durabilidad de bloques.',
    'Loot abundance percentage': 'Porcentaje de abundancia de botín.',
    'Loot respawn days': 'Días para que reaparezca el botín.',
    'Air drop frequency in in-game days': 'Frecuencia de airdrops en días del juego.',
    'Blood moon frequency in days': 'Frecuencia de Blood Moon en días.',
    'Blood moon warning in hours': 'Aviso previo de Blood Moon en horas.',
    'Enemy spawn mode': 'Modo de aparición de enemigos.',
    'Enemy difficulty': 'Dificultad de los enemigos.'
  };
  if (exact[original]) return exact[original];
  const patterns = [
    [/^Visibility of this server: 2 = public, 1 = only shown to friends, 0 = not listed\./i, 'Visibilidad de este servidor: 2 = público, 1 = solo visible para amigos, 0 = no listado.'],
    [/^If disabled a player can join with any selected profile\./i, 'Si se desactiva, el jugador puede entrar con cualquier perfil seleccionado. Si se activa, usará el último perfil con el que entró a este servidor.'],
    [/^Port you want the server to listen on\./i, 'Puerto en el que quieres que escuche el servidor.'],
    [/^Port you want the control panel to listen on\./i, 'Puerto en el que quieres que escuche el panel de control.'],
    [/^Website URL for the server/i, 'La URL web del servidor se mostrará como enlace en el buscador de servidores.'],
    [/^Maximum allowed players/i, 'Número máximo de jugadores permitidos.'],
    [/^If set the user will see the message during joining the server/i, 'Si se establece, el usuario verá este mensaje al entrar al servidor y tendrá que confirmarlo antes de continuar.'],
    [/^The region this server is in\./i, 'La región en la que está este servidor.'],
    [/^Primary language for players on this server\./i, 'Idioma principal para los jugadores de este servidor.'],
    [/^Password to gain entry to the server\./i, 'Contraseña para entrar al servidor.'],
    [/^Password to gain entry to the control panel/i, 'Contraseña para acceder al panel de control.'],
    [/^Enable\/Disable EasyAntiCheat/i, 'Activar o desactivar EasyAntiCheat.'],
    [/^Enable\/disable the web dashboard/i, 'Activar o desactivar el panel web.'],
    [/^Max view distance/i, 'Distancia de visión máxima.'],
    [/^World seed/i, 'Semilla del mundo.'],
    [/^Save game name/i, 'Nombre de la partida guardada.'],
    [/^Game mode/i, 'Modo de juego.'],
    [/^Difficulty/i, 'Dificultad.'],
    [/^Air drop/i, 'Frecuencia de airdrops.'],
    [/^Loot /i, 'Ajuste relacionado con el botín.'],
    [/^Blood moon/i, 'Ajuste relacionado con la Blood Moon.']
  ];
  for (const [pattern, replacement] of patterns) {
    if (pattern.test(original)) return replacement;
  }
  return original;
}

function formatServerConfigDescription(text) {
  const original = stripXmlComment(text);
  if (!original) return '';
  const translated = translateServerConfigDescription(original);
  return `<div class="xml-desc-bilingual"><div><strong>ES:</strong> ${escapeHtml(translated)}</div><div style="margin-top:6px;opacity:.86"><strong>EN:</strong> ${escapeHtml(original)}</div></div>`;
}

function toast(message, isError = false) {
  const el = $('toast');
  el.textContent = translateServerMessage(message);
  el.classList.remove('hidden');
  el.style.borderColor = isError ? 'rgba(240,103,103,.4)' : 'rgba(113,151,196,.18)';
  setTimeout(() => el.classList.add('hidden'), 3200);
}

async function api(url, method = 'GET', body = null) {
  const opts = { method, headers: {} };
  if (body !== null) {
    opts.headers['Content-Type'] = 'application/json';
    opts.body = JSON.stringify(body);
  }
  const res = await fetch(url, opts);
  const data = await res.json().catch(() => ({ ok: false, message: t('invalidResponse') }));
  if (!res.ok || data.ok === false) throw new Error(data.message || t('error'));
  return data;
}

function buildMenu() {
  $('menu').innerHTML = sectionKeys.map(key =>
    `<button class="${state.section === key ? 'active' : ''}" onclick="go('${key}')">${menuLabel(key)}</button>`
  ).join('');
  if ($('sidebarFooter')) {
    $('sidebarFooter').innerHTML = footerSectionKeys.map(key => `<button class="${state.section === key ? 'active' : ''}" onclick="go('${key}')">${menuLabel(key)}</button>`).join('');
  }
}

function renderStaticTexts() {
  document.documentElement.lang = state.lang;
  document.title = t('appTitle');
  const splashTextEl = $('splashText');
  if (splashTextEl) splashTextEl.textContent = t('splashLoading');
  const setText = (id, value) => {
    const el = $(id);
    if (el) el.textContent = value;
  };
  setText('eyebrow', t('eyebrow'));
  setText('heroTitle', (state.state && state.state.config.server_name) || 'KarmaWorld');
  setText('heroSubtitle', t('heroSubtitle'));
  setText('btnStartTop', t('start'));
  setText('btnRestartTop', t('restart'));
  setText('btnStopTop', t('stop'));
  setText('btnBackupTop', t('backup'));
  setText('btnStopManagerTop', t('stopManager'));
  setText('langLabel', t('language'));
  const langEsBtn = $('langEsBtn');
  if (langEsBtn) langEsBtn.classList.toggle('active-lang', state.lang === 'es');
  const langEnBtn = $('langEnBtn');
  if (langEnBtn) langEnBtn.classList.toggle('active-lang', state.lang === 'en');
  renderTopStatusBar();
}


function renderTopStatusBar() {
  if (!$('topStatusBar')) return;
  if (!state.state) {
    $('topStatusBar').innerHTML = '';
    return;
  }
  const s = state.state;
  const playerCount = (s.players_cache || []).length;
  $('topStatusBar').innerHTML = `
    <div class="top-status-card card">
      <div class="top-status-left">
        <span class="badge ${s.running ? 'ok' : 'off'}">${s.running ? t('serverOn') : t('serverOff')}</span>
        <span class="top-status-item"><strong>${t('pid')}:</strong> ${escapeHtml(s.pid || '-')}</span>
        <span class="top-status-item"><strong>${t('playersOnline')}:</strong> ${escapeHtml(playerCount)}</span>
        <span class="top-status-item"><strong>${t('autoRestart')}:</strong> ${s.config.auto_restart_enabled ? `${t('enabled')} · ${escapeHtml(s.config.auto_restart_delay_seconds || 15)}s` : t('disabled')}</span>
      </div>
      <div class="top-status-right empty-note">${t('lastRefresh')}: ${escapeHtml(s.last_players_refresh || '-')}</div>
    </div>`;
}

function playerDisplayName(player) {
  return player.name || `#${player.slot || player.entityid || '?'}`;
}

function playerPosText(player) {
  const hasX = typeof player.x === 'number' && !Number.isNaN(player.x);
  const hasZ = typeof player.z === 'number' && !Number.isNaN(player.z);
  if (!hasX || !hasZ) return '-';
  const y = typeof player.y === 'number' && !Number.isNaN(player.y) ? `, ${Math.round(player.y)}` : '';
  return `${Math.round(player.x)}${y}, ${Math.round(player.z)}`;
}

function selectedPlayer() {
  const players = state.state?.players_cache || [];
  if (!players.length) {
    state.selectedPlayerIndex = null;
    return null;
  }
  if (state.selectedPlayerIndex === null || !players[state.selectedPlayerIndex]) {
    state.selectedPlayerIndex = 0;
  }
  return players[state.selectedPlayerIndex] || null;
}

function selectPlayer(index) {
  state.selectedPlayerIndex = index;
  state.playerMenuIndex = null;
  render(true);
}

function playerSteamText(player, fallback = '-') {
  if (!player) return fallback;
  const values = [];
  const push = (value) => {
    const text = String(value || '').trim();
    if (text && !values.includes(text)) values.push(text);
  };
  push(player.steamid);
  push(player.eosid);
  return values.length ? values.join(' / ') : fallback;
}

function playerIdentity(player) {
  if (!player) return '-';
  return player.steamid || player.eosid || player.entityid || player.slot || '-';
}

function playerCard(player) {
  if (!player) return `<div class="empty-note">${t('noPlayerSelected')}</div>`;
  return `
    <div class="player-detail-card">
      <div class="player-detail-top">
        <div>
          <div class="eyebrow" style="font-size:11px">${t('selectedPlayer')}</div>
          <h3 style="margin:4px 0 0 0">${escapeHtml(playerDisplayName(player))}</h3>
        </div>
        <span class="badge default">${t('slot')}: ${escapeHtml(player.slot || '-')}</span>
      </div>
      <div class="player-detail-grid">
        <div><strong>${t('entityId')}</strong><span>${escapeHtml(player.entityid || '-')}</span></div>
        <div><strong>${t('steamId')}</strong><span>${escapeHtml(playerSteamText(player))}</span></div>
        <div><strong>${t('position')}</strong><span>${escapeHtml(playerPosText(player))}</span></div>
        <div><strong>${t('status')}</strong><span>${t('on')}</span></div>
      </div>
      <div class="player-detail-actions">
        <button class="small-btn" type="button" onclick="event.preventDefault();event.stopPropagation();copyPlayerField(${state.selectedPlayerIndex ?? 0},'name')">${t('copyName')}</button>
        <button class="small-btn" type="button" onclick="event.preventDefault();event.stopPropagation();copyPlayerField(${state.selectedPlayerIndex ?? 0},'id')">${t('copyId')}</button>
        <button class="small-btn" type="button" onclick="event.preventDefault();event.stopPropagation();copyPlayerField(${state.selectedPlayerIndex ?? 0},'steam')">${t('copySteam')}</button>
        <button class="small-btn danger" type="button" onclick="event.preventDefault();event.stopPropagation();kickPlayer(${state.selectedPlayerIndex ?? 0})">${t('kickPlayer')}</button>
      </div>
      <div class="player-detail-raw"><strong>RAW</strong><pre>${escapeHtml(player.raw || '-')}</pre></div>
    </div>`;
}

function playerInventoryCard(player) {
  if (!player) return `<div class="empty-note">${t('noPlayerSelected')}</div>`;
  return `
    <div class="inventory-shell">
      <div class="info-box" style="margin-bottom:14px">
        <h3>${t('inventoryTitle')}</h3>
        <div class="help-text">${t('inventoryHint')}</div>
      </div>
      <div class="label-grid inventory-grid-meta">
        <div>${t('playerName')}</div><div>${escapeHtml(playerDisplayName(player))}</div>
        <div>${t('steamId')}</div><div>${escapeHtml(playerSteamText(player))}</div>
        <div>${t('entityId')}</div><div>${escapeHtml(player.entityid || '-')}</div>
        <div>${t('position')}</div><div>${escapeHtml(playerPosText(player))}</div>
      </div>
      <div class="inventory-panels">
        <div class="card panel inventory-panel"><h3>${t('belt')}</h3><div class="empty-note">${t('inventoryUnavailable')}</div></div>
        <div class="card panel inventory-panel"><h3>${t('bag')}</h3><div class="empty-note">${t('inventoryUnavailable')}</div></div>
        <div class="card panel inventory-panel"><h3>${t('equipment')}</h3><div class="empty-note">${t('inventoryUnavailable')}</div></div>
      </div>
      <div class="help-text" style="margin-top:14px">${t('inventoryFutureNote')}</div>
    </div>`;
}

function getConfiguredMapBounds() {
  const c = state.state?.config || {};
  const mode = String(c.map_size_mode || '').toLowerCase();
  let size = 8192;
  if (mode === '6144' || mode === '8192' || mode === '10240') size = Number(mode);
  else if (mode === 'custom') size = Number(c.map_custom_size || 8192);
  else if (!Number.isNaN(Number(c.map_bounds_max_x)) && !Number.isNaN(Number(c.map_bounds_min_x))) size = Math.abs(Number(c.map_bounds_max_x) - Number(c.map_bounds_min_x));
  if (!size || Number.isNaN(size)) return null;
  const half = size / 2;
  return { minX: -half, maxX: half, minZ: -half, maxZ: half };
}

function playerMapStyleFromBounds(player, bounds) {
  if (!bounds) return '';
  const xPct = ((player.x - bounds.minX) / (bounds.maxX - bounds.minX)) * 100;
  const zPct = ((bounds.maxZ - player.z) / (bounds.maxZ - bounds.minZ)) * 100;
  return `left:${Math.min(98, Math.max(2, xPct)).toFixed(2)}%;top:${Math.min(98, Math.max(2, zPct)).toFixed(2)}%;`;
}

function mapMouseWorldText(clientX, clientY) {
  const overlay = document.getElementById('mapOverlay');
  const bounds = getConfiguredMapBounds();
  if (!overlay || !bounds) return '-';
  const rect = overlay.getBoundingClientRect();
  if (!rect.width || !rect.height) return '-';
  const relX = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
  const relY = Math.min(1, Math.max(0, (clientY - rect.top) / rect.height));
  const worldX = bounds.minX + relX * (bounds.maxX - bounds.minX);
  const worldZ = bounds.maxZ - relY * (bounds.maxZ - bounds.minZ);
  return `X ${Math.round(worldX)} / Z ${Math.round(worldZ)}`;
}

function renderMapMouseText() {
  const el = document.getElementById('mapMousePos');
  if (el) el.textContent = `${t('mousePos')}: ${state.mapMouseText || '-'}`;
}

function handleMapMouse(event) {
  state.mapMouseText = mapMouseWorldText(event.clientX, event.clientY);
  renderMapMouseText();
}

function clearMapMouse() {
  state.mapMouseText = '-';
  renderMapMouseText();
}

function zoomMap(delta) {
  state.mapZoom = Math.min(3, Math.max(0.5, Number((state.mapZoom + delta).toFixed(2))));
  render();
  if (state.mapFocusIndex !== null) setTimeout(scrollToFocusedPlayerMarker, 60);
}

function resetMapZoom() {
  state.mapZoom = 1;
  render();
  if (state.mapFocusIndex !== null) setTimeout(scrollToFocusedPlayerMarker, 60);
}

function scrollToFocusedPlayerMarker() {
  const scroll = document.getElementById('realMapScroll');
  const target = document.querySelector('[data-map-focused="true"]');
  if (!scroll || !target) return;
  const scrollRect = scroll.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  scroll.scrollLeft += (targetRect.left + targetRect.width / 2) - (scrollRect.left + scrollRect.width / 2);
  scroll.scrollTop += (targetRect.top + targetRect.height / 2) - (scrollRect.top + scrollRect.height / 2);
}

function mapMetrics(players) {
  const valid = players.filter(p => typeof p.x === 'number' && typeof p.z === 'number' && !Number.isNaN(p.x) && !Number.isNaN(p.z));
  if (!valid.length) return null;
  const xs = valid.map(p => p.x);
  const zs = valid.map(p => p.z);
  let minX = Math.min(...xs), maxX = Math.max(...xs), minZ = Math.min(...zs), maxZ = Math.max(...zs);
  if (state.mapFocusIndex !== null) {
    const focused = valid.find(p => p.sourceIndex === state.mapFocusIndex || p.slot === String(state.mapFocusIndex));
    if (focused) {
      minX = focused.x - 250; maxX = focused.x + 250; minZ = focused.z - 250; maxZ = focused.z + 250;
    }
  }
  const padX = Math.max(120, (maxX - minX) * 0.1 || 120);
  const padZ = Math.max(120, (maxZ - minZ) * 0.1 || 120);
  return { minX: minX - padX, maxX: maxX + padX, minZ: minZ - padZ, maxZ: maxZ + padZ };
}

function playerMapStyle(player, bounds) {
  if (!bounds) return '';
  const xPct = ((player.x - bounds.minX) / Math.max(1, bounds.maxX - bounds.minX)) * 100;
  const zPct = ((player.z - bounds.minZ) / Math.max(1, bounds.maxZ - bounds.minZ)) * 100;
  return `left:${Math.min(98, Math.max(2, xPct)).toFixed(2)}%;top:${Math.min(98, Math.max(2, zPct)).toFixed(2)}%;`;
}

async function copyToClipboard(value) {
  const text = String(value ?? '').trim();
  if (!text) {
    toast(t('error'), true);
    return false;
  }
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      toast(t('idCopied'));
      return true;
    }
  } catch (_) {}
  try {
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', 'readonly');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    area.style.pointerEvents = 'none';
    document.body.appendChild(area);
    area.focus();
    area.select();
    area.setSelectionRange(0, area.value.length);
    const ok = document.execCommand('copy');
    document.body.removeChild(area);
    if (!ok) throw new Error('copy failed');
    toast(t('idCopied'));
    return true;
  } catch (_) {
    toast(t('error'), true);
    return false;
  }
}

function render(preserveScroll = false) {
  const snapshot = preserveScroll ? captureUiState() : null;
  buildMenu();
  renderStaticTexts();
  if (!state.state) return;
  document.documentElement.style.setProperty('--accent', state.state.config.accent_color || '#55a7ff');
  $('view').innerHTML = views[state.section]();
  if (snapshot) restoreUiState(snapshot);
  if (state.section === 'liveMap') {
    setTimeout(() => { startEmbeddedLiveMapSync(); syncEmbeddedLiveMapWindow(true); }, 80);
  } else {
    stopEmbeddedLiveMapSync(true);
  }
}

function infoNote(title, text) {
  return `<div class="info-box" style="margin-bottom:14px"><h3>${title}</h3><div class="help-text">${text}</div></div>`;
}

function editableTable(name, keys, headers) {
  const rows = state.collections[name] || [];
  return `
    <div class="inline-actions" style="margin-bottom:14px">
      <button class="btn" onclick="addRow('${name}')">${t('addRow')}</button>
      <button class="btn btn-primary" onclick="saveCollection('${name}')">${t('saveList')}</button>
    </div>
    <table class="table">
      <thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}<th></th></tr></thead>
      <tbody>
        ${rows.map((row, index) => `
          <tr>
            ${keys.map(key => `<td><input data-collection="${name}" data-index="${index}" data-key="${key}" value="${escapeHtml(row[key] ?? '')}"></td>`).join('')}
            <td><button class="small-btn danger" onclick="deleteRow('${name}', ${index})">${t('delete')}</button></td>
          </tr>`).join('')}
      </tbody>
    </table>`;
}

function defaultStoreAdminData() {
  return {
    _type: 'karmaworld_store_v2',
    meta: { version: 2, updated_at: '' },
    categories: ['General','Armas','Munición','Herramientas','Medicina','Comida','Recursos','Construcción','Vehículos','Packs','Especiales','VIP'],
    coin_packs: [
      { id: 'pack_inicio', name: t('demoPackName'), description: t('demoPackDescription'), coins: 500, bonus_coins: 0, price_real: 4.99, currency: 'EUR', image: '', active: true, featured: true }
    ],
    items: [],
    wallets: [],
    transactions: [],
    payments: [],
    orders: [],
    playtime: { enabled: false, coins_per_interval: 5, interval_minutes: 30, daily_limit: 100, anti_afk_minutes: 10, event_multiplier: 1 },
    discord: { enabled: false, guild_id: '', channel_id: '', bot_token: '', dm_enabled: true, public_template: '{player} compró {pack} por {amount} €', dm_template: 'Pago confirmado: +{coins} Karmacoins' },
    web: { public_base_url: '', public_ip: '127.0.0.1', public_port: 8765, domain: '', steam_enabled: true, discord_link_enabled: true, stripe_enabled: false, stripe_mode: 'test', stripe_currency: 'EUR', stripe_public_key: '', stripe_secret_key: '', stripe_webhook_secret: '', success_url: '', cancel_url: '', discord_client_id: '', discord_client_secret: '', discord_redirect_uri: '', staff_panel_enabled: true, login_notice: 'Inicia sesión con Steam y vincula Discord para usar la tienda de KarmaWorld.' },
    delivery: { queue_mode: true, requires_online_player: true, warn_limits_before_buy: true },
    notes: []
  };
}

function normalizeStoreAdminData(raw) {
  const base = defaultStoreAdminData();
  if (Array.isArray(raw)) {
    base.items = raw.map((row, index) => ({
      id: String(row.id || `item_${index + 1}`),
      category: String(row.category || 'General'),
      name: String(row.name || ''),
      description: String(row.description || ''),
      image: String(row.image || ''),
      item_code: String(row.item_code || row.item || ''),
      quantity: Number(row.quantity || 1),
      quality: Number(row.quality || 1),
      price_coins: Number(row.price_coins || row.price || 0),
      stock: Number(row.stock || 0),
      purchase_limit_total: Number(row.purchase_limit_total || 0),
      purchase_limit_daily: Number(row.purchase_limit_daily || 0),
      cooldown_seconds: Number(row.cooldown_seconds || 0),
      vip_required: String(row.vip_required || ''),
      min_level: Number(row.min_level || 0),
      requires_online_player: row.requires_online_player !== false,
      delivery_mode: String(row.delivery_mode || 'queue'),
      command: String(row.command || ''),
      active: row.active !== false,
      visible: row.visible !== false,
      featured: !!row.featured
    }));
    return base;
  }
  const data = (raw && typeof raw === 'object') ? raw : {};
  const out = { ...base, ...data };
  ['playtime','discord','web','delivery','meta'].forEach(key => { out[key] = { ...base[key], ...(data[key] || {}) }; });
  ['categories','coin_packs','items','wallets','transactions','payments','orders','notes'].forEach(key => { out[key] = Array.isArray(data[key]) ? data[key] : base[key]; });
  out.coin_packs = out.coin_packs.map((row, index) => ({
    id: String(row.id || `pack_${index + 1}`),
    name: String(row.name || `Pack ${index + 1}`),
    description: String(row.description || ''),
    coins: Number(row.coins || 0),
    bonus_coins: Number(row.bonus_coins || 0),
    price_real: Number(row.price_real || 0),
    currency: String(row.currency || out.web.stripe_currency || 'EUR'),
    image: String(row.image || ''),
    active: row.active !== false,
    featured: !!row.featured
  }));
  out.items = out.items.map((row, index) => ({
    id: String(row.id || `item_${index + 1}`),
    category: String(row.category || 'General'),
    name: String(row.name || ''),
    description: String(row.description || ''),
    image: String(row.image || ''),
    item_code: String(row.item_code || ''),
    quantity: Number(row.quantity || 1),
    quality: Number(row.quality || 1),
    price_coins: Number(row.price_coins || row.price || 0),
    stock: Number(row.stock || 0),
    purchase_limit_total: Number(row.purchase_limit_total || 0),
    purchase_limit_daily: Number(row.purchase_limit_daily || 0),
    cooldown_seconds: Number(row.cooldown_seconds || 0),
    vip_required: String(row.vip_required || ''),
    min_level: Number(row.min_level || 0),
    requires_online_player: row.requires_online_player !== false,
    delivery_mode: String(row.delivery_mode || 'queue'),
    command: String(row.command || ''),
    active: row.active !== false,
    visible: row.visible !== false,
    featured: !!row.featured
  }));
  out.wallets = out.wallets.map((row, index) => ({
    steam_id: String(row.steam_id || ''),
    player_name: String(row.player_name || `Jugador ${index + 1}`),
    discord_id: String(row.discord_id || ''),
    balance: Number(row.balance || 0),
    total_bought: Number(row.total_bought || 0),
    total_spent: Number(row.total_spent || 0),
    blocked: !!row.blocked
  }));
  return out;
}

function getStoreAdmin() {
  state.collections.store = normalizeStoreAdminData(state.collections.store || {});
  return state.collections.store;
}

function setStoreAdmin(data) {
  state.collections.store = normalizeStoreAdminData(data || {});
}

function saveStoreMetaStamp(data) {
  data.meta = data.meta || {};
  data.meta.updated_at = new Date().toISOString();
  return data;
}

function storeTabButton(key, label) {
  return `<button class="small-btn ${state.storeAdminTab === key ? 'btn-primary' : ''}" onclick="openStoreTab('${key}')">${label}</button>`;
}

function openStoreTab(key) {
  state.storeAdminTab = key || 'overview';
  render();
}

function currencyReal(value, code='EUR') {
  const n = Number(value || 0);
  return `${n.toFixed(2)} ${escapeHtml(code || 'EUR')}`;
}

function badge(text, tone='default') {
  return `<span class="kw-badge kw-badge-${tone}">${escapeHtml(text)}</span>`;
}

function boolIcon(value) { return value ? t('yes') : t('no'); }

const STORE_CATEGORY_KEYS = {
  'General': 'storeCatGeneral',
  'Armas': 'storeCatWeapons',
  'Munición': 'storeCatAmmo',
  'Herramientas': 'storeCatTools',
  'Medicina': 'storeCatMedicine',
  'Comida': 'storeCatFood',
  'Recursos': 'storeCatResources',
  'Construcción': 'storeCatBuilding',
  'Vehículos': 'storeCatVehicles',
  'Packs': 'storeCatPacks',
  'Especiales': 'storeCatSpecial',
  'VIP': 'storeCatVip',
  'Weapons': 'storeCatWeapons',
  'Ammo': 'storeCatAmmo',
  'Tools': 'storeCatTools',
  'Medicine': 'storeCatMedicine',
  'Food': 'storeCatFood',
  'Resources': 'storeCatResources',
  'Building': 'storeCatBuilding',
  'Vehicles': 'storeCatVehicles',
  'Special': 'storeCatSpecial',
};

function storeCategoryLabel(name) {
  const key = STORE_CATEGORY_KEYS[String(name || '').trim()];
  return key ? t(key) : String(name || '');
}

function localizedStoreText(value) {
  const v = String(value || '').trim();
  if (!v) return '';
  const map = {
    'Pack inicio': t('demoPackName'),
    'Starter pack': t('demoPackName'),
    '500 Karmacoins para gastar en la tienda web.': t('demoPackDescription'),
    '500 Karmacoins to spend in the web store.': t('demoPackDescription'),
    'Kit básico': t('demoItemName'),
    'Basic kit': t('demoItemName'),
    'Jugador nuevo': t('newPlayerLabel'),
    'New player': t('newPlayerLabel'),
    'General': t('storeCatGeneral'),
  };
  return map[v] || v;
}

function storeSummaryCards(data) {
  const activeItems = data.items.filter(i => i.active).length;
  const activePacks = data.coin_packs.filter(i => i.active).length;
  const totalBalance = data.wallets.reduce((sum, row) => sum + Number(row.balance || 0), 0);
  const pendingPayments = data.payments.filter(p => String(p.status || '').toLowerCase() === 'pending').length;
  return `
    <div class="stats store-stats">
      <div class="stat card"><small>${t('storeActivePacks')}</small><strong>${activePacks}</strong></div>
      <div class="stat card"><small>${t('storeActiveItems')}</small><strong>${activeItems}</strong></div>
      <div class="stat card"><small>${t('storeTotalBalance')}</small><strong>${totalBalance}</strong></div>
      <div class="stat card"><small>${t('storePendingPayments')}</small><strong>${pendingPayments}</strong></div>
    </div>`;
}

function renderPermissionsAdmin() {
  const rows = state.collections.permissions || [];
  return `
    <div class="card panel">
      <div class="panel-head-inline"><div><h2>${t('permissions')}</h2><div class="help-text" style="margin-top:6px">${t('permissionsHelpText')}</div></div><div class="inline-actions"><button class="btn" onclick="window.open('/staff','_blank')">${t('openStaffPanel')}</button><button class="btn" onclick="loadPermissionsPreset()">${t('loadStaffPreset')}</button><button class="btn" onclick="addRow('permissions')">${t('addRow')}</button><button class="btn btn-primary" onclick="saveCollection('permissions')">${t('saveList')}</button></div></div>
      <table class="table table-tight">
        <thead><tr><th>${t('emoji')}</th><th>${t('name')}</th><th>${t('level')}</th><th>${t('discordRoleId')}</th><th>${t('panelSections')}</th><th>${t('commands')}</th><th>${t('color')}</th><th></th></tr></thead>
        <tbody>${rows.length ? rows.map((row, index) => `
          <tr>
            <td><input data-collection="permissions" data-index="${index}" data-key="emoji" value="${escapeHtml(row.emoji ?? '')}"></td>
            <td><input data-collection="permissions" data-index="${index}" data-key="name" value="${escapeHtml(row.name ?? '')}"></td>
            <td><input data-collection="permissions" data-index="${index}" data-key="level" value="${escapeHtml(row.level ?? '')}"></td>
            <td><input data-collection="permissions" data-index="${index}" data-key="discord_role_id" value="${escapeHtml(row.discord_role_id ?? '')}"></td>
            <td><input data-collection="permissions" data-index="${index}" data-key="panel_sections" value="${escapeHtml(row.panel_sections ?? '')}"></td>
            <td><input data-collection="permissions" data-index="${index}" data-key="commands" value="${escapeHtml(row.commands ?? '')}"></td>
            <td><input data-collection="permissions" data-index="${index}" data-key="color" value="${escapeHtml(row.color ?? '')}"></td>
            <td><button class="small-btn danger" onclick="deleteRow('permissions', ${index})">${t('delete')}</button></td>
          </tr>`).join('') : `<tr><td colspan="8" class="empty-note">-</td></tr>`}</tbody>
      </table>
    </div>`;
}

function renderStoreOverview(data) {
  const topPacks = data.coin_packs.slice(0, 4);
  const topItems = data.items.slice(0, 6);
  const web = data.web || {};
  return `
    ${storeSummaryCards(data)}
    <div class="grid grid-2">
      <div class="card panel">
        <h3>${t('storeQuickSummary')}</h3>
        <div class="label-grid">
          <div>${t('storeInitialAddress')}</div><div>${escapeHtml(web.public_ip || '127.0.0.1')}:${escapeHtml(web.public_port || 8765)}</div>
          <div>${t('storeFutureDomain')}</div><div>${escapeHtml(web.domain || t('notConfigured'))}</div>
          <div>${t('storeSteamLogin')}</div><div>${web.steam_enabled ? t('storePrepared') : t('disabled')}</div>
          <div>${t('storeDiscordLink')}</div><div>${web.discord_link_enabled ? t('storePrepared') : t('disabled')}</div>
          <div>Stripe</div><div>${web.stripe_enabled ? `${escapeHtml(web.stripe_mode || 'test')} · ${escapeHtml(web.stripe_currency || 'EUR')}` : t('storePending')}</div>
          <div>${t('storeLastUpdate')}</div><div>${escapeHtml(data.meta.updated_at || '-')}</div>
        </div>
      </div>
      <div class="card panel">
        <h3>${t('storeSystemBase')}</h3>
        <div class="help-text">
          - ${t('storeBaseLine1')}<br>
          - ${t('storeBaseLine2')}<br>
          - ${t('storeBaseLine3')}<br>
          - ${t('storeBaseLine4')}<br>
          - ${t('storeBaseLine5')}
        </div>
      </div>
    </div>
    <div class="grid grid-2">
      <div class="card panel">
        <div class="panel-head-inline"><h3>${t('storeCoinPacksTitle')}</h3><button class="small-btn" onclick="seedStoreDemoData()">${t('loadDemo')}</button></div>
        <table class="table">
          <thead><tr><th>${t('storePack')}</th><th>${t('storeCoinsLabel')}</th><th>${t('price')}</th><th>${t('storeState')}</th></tr></thead>
          <tbody>${topPacks.length ? topPacks.map(row => `<tr><td>${escapeHtml(localizedStoreText(row.name))}</td><td>${Number(row.coins || 0) + Number(row.bonus_coins || 0)}</td><td>${currencyReal(row.price_real, row.currency)}</td><td>${row.active ? badge(t('storeActiveBadge'),'success') : badge(t('storeOffBadge'),'danger')}</td></tr>`).join('') : `<tr><td colspan="4" class="empty-note">${t('storeNoPacks')}</td></tr>`}</tbody>
        </table>
      </div>
      <div class="card panel">
        <h3>${t('storeObjectStoreTitle')}</h3>
        <table class="table">
          <thead><tr><th>${t('storeObject')}</th><th>${t('category')}</th><th>${t('price')}</th><th>${t('storeLimits')}</th></tr></thead>
          <tbody>${topItems.length ? topItems.map(row => `<tr><td>${escapeHtml(localizedStoreText(row.name))}</td><td>${escapeHtml(storeCategoryLabel(row.category))}</td><td>${Number(row.price_coins || 0)}</td><td>${badge(row.purchase_limit_daily ? `${t('storeDay')} ${row.purchase_limit_daily}` : t('storeNoLimit'), row.purchase_limit_daily ? 'warning' : 'default')}</td></tr>`).join('') : `<tr><td colspan="4" class="empty-note">${t('storeNoItems')}</td></tr>`}</tbody>
        </table>
      </div>
    </div>`;
}

function renderStorePacks(data) {
  const rows = data.coin_packs || [];
  return `
    <div class="card panel">
      <div class="panel-head-inline"><h3>${t('storePacksAdminTitle')}</h3><div class="inline-actions"><button class="btn" onclick="addStoreRow('coin_packs')">${t('storeNewPack')}</button><button class="btn btn-primary" onclick="saveStoreSection('coin_packs')">${t('storeSavePacks')}</button></div></div>
      <div class="help-text" style="margin-bottom:14px">${t('storePacksHelp')}</div>
      <table class="table table-tight store-admin-table">
        <thead><tr><th>ID</th><th>${t('name')}</th><th>${t('description')}</th><th>${t('storeCoinsLabel')}</th><th>${t('bonus')}</th><th>${t('price')}</th><th>${t('currency')}</th><th>${t('image')}</th><th>${t('active')}</th><th>${t('featured')}</th><th></th></tr></thead>
        <tbody>${rows.length ? rows.map((row, index) => `
          <tr>
            <td><input data-store-section="coin_packs" data-index="${index}" data-key="id" value="${escapeHtml(row.id)}"></td>
            <td><input data-store-section="coin_packs" data-index="${index}" data-key="name" value="${escapeHtml(row.name)}"></td>
            <td><input data-store-section="coin_packs" data-index="${index}" data-key="description" value="${escapeHtml(row.description)}"></td>
            <td><input type="number" data-store-section="coin_packs" data-index="${index}" data-key="coins" value="${Number(row.coins || 0)}"></td>
            <td><input type="number" data-store-section="coin_packs" data-index="${index}" data-key="bonus_coins" value="${Number(row.bonus_coins || 0)}"></td>
            <td><input type="number" step="0.01" data-store-section="coin_packs" data-index="${index}" data-key="price_real" value="${Number(row.price_real || 0)}"></td>
            <td><input data-store-section="coin_packs" data-index="${index}" data-key="currency" value="${escapeHtml(row.currency || 'EUR')}"></td>
            <td><input data-store-section="coin_packs" data-index="${index}" data-key="image" value="${escapeHtml(row.image || '')}"></td>
            <td class="text-center"><input type="checkbox" data-store-section="coin_packs" data-index="${index}" data-key="active" ${row.active ? 'checked' : ''}></td>
            <td class="text-center"><input type="checkbox" data-store-section="coin_packs" data-index="${index}" data-key="featured" ${row.featured ? 'checked' : ''}></td>
            <td><button class="small-btn danger" onclick="deleteStoreRow('coin_packs', ${index})">${t('delete')}</button></td>
          </tr>`).join('') : `<tr><td colspan="11" class="empty-note">${t('storeNoPacks')}</td></tr>`}</tbody>
      </table>
    </div>`;
}

function renderStoreItems(data) {
  const rows = data.items || [];
  const categories = data.categories || [];
  return `
    <div class="card panel">
      <div class="panel-head-inline"><h3>${t('storeItemsAdminTitle')}</h3><div class="inline-actions"><button class="btn" onclick="addStoreRow('items')">${t('storeNewItem')}</button><button class="btn btn-primary" onclick="saveStoreSection('items')">${t('storeSaveItems')}</button></div></div>
      <div class="help-text" style="margin-bottom:14px">${t('storeItemsHelp')}</div>
      <table class="table table-tight store-admin-table">
        <thead><tr><th>ID</th><th>${t('category')}</th><th>${t('name')}</th><th>${t('itemCode')}</th><th>${t('quantity')}</th><th>${t('quality')}</th><th>${t('price')}</th><th>${t('stock')}</th><th>${t('dailyLimit')}</th><th>Cooldown</th><th>VIP</th><th>${t('storeOnline')}</th><th>${t('active')}</th><th></th></tr></thead>
        <tbody>${rows.length ? rows.map((row, index) => `
          <tr>
            <td><input data-store-section="items" data-index="${index}" data-key="id" value="${escapeHtml(row.id)}"></td>
            <td><select data-store-section="items" data-index="${index}" data-key="category">${categories.map(cat => `<option value="${escapeHtml(cat)}" ${row.category === cat ? 'selected' : ''}>${escapeHtml(cat)}</option>`).join('')}</select></td>
            <td><input data-store-section="items" data-index="${index}" data-key="name" value="${escapeHtml(row.name)}"></td>
            <td><input data-store-section="items" data-index="${index}" data-key="item_code" value="${escapeHtml(row.item_code)}"></td>
            <td><input type="number" data-store-section="items" data-index="${index}" data-key="quantity" value="${Number(row.quantity || 1)}"></td>
            <td><input type="number" data-store-section="items" data-index="${index}" data-key="quality" value="${Number(row.quality || 1)}"></td>
            <td><input type="number" data-store-section="items" data-index="${index}" data-key="price_coins" value="${Number(row.price_coins || 0)}"></td>
            <td><input type="number" data-store-section="items" data-index="${index}" data-key="stock" value="${Number(row.stock || 0)}"></td>
            <td><input type="number" data-store-section="items" data-index="${index}" data-key="purchase_limit_daily" value="${Number(row.purchase_limit_daily || 0)}"></td>
            <td><input type="number" data-store-section="items" data-index="${index}" data-key="cooldown_seconds" value="${Number(row.cooldown_seconds || 0)}"></td>
            <td><input data-store-section="items" data-index="${index}" data-key="vip_required" value="${escapeHtml(row.vip_required || '')}"></td>
            <td class="text-center"><input type="checkbox" data-store-section="items" data-index="${index}" data-key="requires_online_player" ${row.requires_online_player ? 'checked' : ''}></td>
            <td class="text-center"><input type="checkbox" data-store-section="items" data-index="${index}" data-key="active" ${row.active ? 'checked' : ''}></td>
            <td><button class="small-btn danger" onclick="deleteStoreRow('items', ${index})">${t('delete')}</button></td>
          </tr>
          <tr class="store-subrow">
            <td colspan="14">
              <div class="store-inline-grid">
                <div><label>${t('description')}</label><input data-store-section="items" data-index="${index}" data-key="description" value="${escapeHtml(row.description || '')}"></div>
                <div><label>${t('image')}</label><input data-store-section="items" data-index="${index}" data-key="image" value="${escapeHtml(row.image || '')}"></div>
                <div><label>${t('totalLimit')}</label><input type="number" data-store-section="items" data-index="${index}" data-key="purchase_limit_total" value="${Number(row.purchase_limit_total || 0)}"></div>
                <div><label>${t('minLevel')}</label><input type="number" data-store-section="items" data-index="${index}" data-key="min_level" value="${Number(row.min_level || 0)}"></div>
                <div><label>${t('deliveryCommand')}</label><input data-store-section="items" data-index="${index}" data-key="command" value="${escapeHtml(row.command || '')}"></div>
                <div><label>${t('deliveryMode')}</label><select data-store-section="items" data-index="${index}" data-key="delivery_mode"><option value="queue" ${row.delivery_mode === 'queue' ? 'selected' : ''}>${t('queue')}</option><option value="instant" ${row.delivery_mode === 'instant' ? 'selected' : ''}>${t('instant')}</option></select></div>
                <div><label>${t('visible')}</label><input type="checkbox" data-store-section="items" data-index="${index}" data-key="visible" ${row.visible ? 'checked' : ''}></div>
                <div><label>${t('featured')}</label><input type="checkbox" data-store-section="items" data-index="${index}" data-key="featured" ${row.featured ? 'checked' : ''}></div>
              </div>
            </td>
          </tr>`).join('') : `<tr><td colspan="14" class="empty-note">${t('storeNoItems')}</td></tr>`}</tbody>
      </table>
    </div>`;
}

function renderStoreWallets(data) {
  const rows = data.wallets || [];
  const recent = (data.transactions || []).slice(-10).reverse();
  return `
    <div class="grid grid-2">
      <div class="card panel">
        <div class="panel-head-inline"><h3>${t('walletsTitle')}</h3><div class="inline-actions"><button class="btn" onclick="addStoreRow('wallets')">${t('newWallet')}</button><button class="btn btn-primary" onclick="saveStoreSection('wallets')">${t('saveWallets')}</button></div></div>
        <table class="table table-tight store-admin-table">
          <thead><tr><th>${t('steamId')}</th><th>${t('playerName')}</th><th>${t('discordId')}</th><th>${t('balance')}</th><th>${t('bought')}</th><th>${t('spent')}</th><th>${t('blocked')}</th><th></th></tr></thead>
          <tbody>${rows.length ? rows.map((row, index) => `
            <tr>
              <td><input data-store-section="wallets" data-index="${index}" data-key="steam_id" value="${escapeHtml(row.steam_id || '')}"></td>
              <td><input data-store-section="wallets" data-index="${index}" data-key="player_name" value="${escapeHtml(row.player_name || '')}"></td>
              <td><input data-store-section="wallets" data-index="${index}" data-key="discord_id" value="${escapeHtml(row.discord_id || '')}"></td>
              <td><input type="number" data-store-section="wallets" data-index="${index}" data-key="balance" value="${Number(row.balance || 0)}"></td>
              <td><input type="number" data-store-section="wallets" data-index="${index}" data-key="total_bought" value="${Number(row.total_bought || 0)}"></td>
              <td><input type="number" data-store-section="wallets" data-index="${index}" data-key="total_spent" value="${Number(row.total_spent || 0)}"></td>
              <td class="text-center"><input type="checkbox" data-store-section="wallets" data-index="${index}" data-key="blocked" ${row.blocked ? 'checked' : ''}></td>
              <td><button class="small-btn danger" onclick="deleteStoreRow('wallets', ${index})">${t('delete')}</button></td>
            </tr>`).join('') : `<tr><td colspan="8" class="empty-note">${t('noWalletsYet')}</td></tr>`}</tbody>
        </table>
      </div>
      <div class="card panel">
        <div class="panel-head-inline"><h3>${t('latestMovements')}</h3><button class="small-btn" onclick="addStoreSampleTransaction()">${t('addSample')}</button></div>
        <table class="table table-tight">
          <thead><tr><th>${t('date')}</th><th>${t('playerName')}</th><th>${t('type')}</th><th>${t('amount')}</th><th>${t('description')}</th></tr></thead>
          <tbody>${recent.length ? recent.map(row => `<tr><td>${escapeHtml(row.created_at || '-')}</td><td>${escapeHtml(row.player_name || '-')}</td><td>${escapeHtml(row.type || '-')}</td><td>${escapeHtml(row.amount || 0)}</td><td>${escapeHtml(row.description || '-')}</td></tr>`).join('') : `<tr><td colspan="5" class="empty-note">${t('noMovementsYet')}</td></tr>`}</tbody>
        </table>
      </div>
    </div>`;
}

function renderStorePayments(data) {
  const rows = data.payments || [];
  return `
    <div class="card panel">
      <div class="panel-head-inline"><h3>${t('paymentsTitle')}</h3><div class="inline-actions"><button class="btn" onclick="addStorePayment()">${t('newManualPayment')}</button><button class="btn btn-primary" onclick="saveStoreSection('payments')">${t('savePayments')}</button></div></div>
      <table class="table table-tight store-admin-table">
        <thead><tr><th>${t('date')}</th><th>${t('playerName')}</th><th>${t('storePack')}</th><th>${t('amountReal')}</th><th>${t('currency')}</th><th>${t('storeState')}</th><th>${t('provider')}</th><th>${t('session')}</th><th></th></tr></thead>
        <tbody>${rows.length ? rows.map((row, index) => `
          <tr>
            <td><input data-store-section="payments" data-index="${index}" data-key="created_at" value="${escapeHtml(row.created_at || '')}"></td>
            <td><input data-store-section="payments" data-index="${index}" data-key="player_name" value="${escapeHtml(row.player_name || '')}"></td>
            <td><input data-store-section="payments" data-index="${index}" data-key="pack_name" value="${escapeHtml(row.pack_name || '')}"></td>
            <td><input type="number" step="0.01" data-store-section="payments" data-index="${index}" data-key="amount_real" value="${Number(row.amount_real || 0)}"></td>
            <td><input data-store-section="payments" data-index="${index}" data-key="currency" value="${escapeHtml(row.currency || 'EUR')}"></td>
            <td><select data-store-section="payments" data-index="${index}" data-key="status"><option value="pending" ${row.status === 'pending' ? 'selected' : ''}>pending</option><option value="completed" ${row.status === 'completed' ? 'selected' : ''}>completed</option><option value="failed" ${row.status === 'failed' ? 'selected' : ''}>failed</option><option value="refunded" ${row.status === 'refunded' ? 'selected' : ''}>refunded</option></select></td>
            <td><input data-store-section="payments" data-index="${index}" data-key="provider" value="${escapeHtml(row.provider || 'stripe')}"></td>
            <td><input data-store-section="payments" data-index="${index}" data-key="provider_session_id" value="${escapeHtml(row.provider_session_id || '')}"></td>
            <td><button class="small-btn danger" onclick="deleteStoreRow('payments', ${index})">${t('delete')}</button></td>
          </tr>`).join('') : `<tr><td colspan="9" class="empty-note">${t('noPaymentsYet')}</td></tr>`}</tbody>
      </table>
    </div>`;
}

function renderStoreOrders(data) {
  const rows = data.orders || [];
  return `
    <div class="card panel">
      <div class="panel-head-inline"><h3>${t('ordersTitle')}</h3><div class="inline-actions"><button class="btn" onclick="addStoreOrder()">${t('newManualOrder')}</button><button class="btn btn-primary" onclick="saveStoreSection('orders')">${t('saveOrders')}</button></div></div>
      <table class="table table-tight store-admin-table">
        <thead><tr><th>${t('date')}</th><th>${t('playerName')}</th><th>${t('storeObject')}</th><th>${t('price')}</th><th>${t('storeState')}</th><th>${t('delivery')}</th><th>${t('error')}</th><th></th></tr></thead>
        <tbody>${rows.length ? rows.map((row, index) => `
          <tr>
            <td><input data-store-section="orders" data-index="${index}" data-key="created_at" value="${escapeHtml(row.created_at || '')}"></td>
            <td><input data-store-section="orders" data-index="${index}" data-key="player_name" value="${escapeHtml(row.player_name || '')}"></td>
            <td><input data-store-section="orders" data-index="${index}" data-key="item_name" value="${escapeHtml(row.item_name || '')}"></td>
            <td><input type="number" data-store-section="orders" data-index="${index}" data-key="price_paid" value="${Number(row.price_paid || 0)}"></td>
            <td><select data-store-section="orders" data-index="${index}" data-key="status"><option value="pending" ${row.status === 'pending' ? 'selected' : ''}>pending</option><option value="processing" ${row.status === 'processing' ? 'selected' : ''}>processing</option><option value="delivered" ${row.status === 'delivered' ? 'selected' : ''}>delivered</option><option value="failed" ${row.status === 'failed' ? 'selected' : ''}>failed</option><option value="canceled" ${row.status === 'canceled' ? 'selected' : ''}>canceled</option></select></td>
            <td><input data-store-section="orders" data-index="${index}" data-key="delivery_mode" value="${escapeHtml(row.delivery_mode || 'queue')}"></td>
            <td><input data-store-section="orders" data-index="${index}" data-key="error_message" value="${escapeHtml(row.error_message || '')}"></td>
            <td><button class="small-btn danger" onclick="deleteStoreRow('orders', ${index})">${t('delete')}</button></td>
          </tr>`).join('') : `<tr><td colspan="8" class="empty-note">${t('noOrdersYet')}</td></tr>`}</tbody>
      </table>
    </div>`;
}

function renderStorePlaytime(data) {
  const row = data.playtime || {};
  return `
    <div class="grid grid-2">
      <div class="card panel">
        <div class="panel-head-inline"><h3>${t('playtimeTitle')}</h3><button class="btn btn-primary" onclick="saveStoreBlock('playtime')">${t('saveRewards')}</button></div>
        <div class="input-grid">
          <div class="field"><label>${t('active')}</label><select data-store-block="playtime" data-key="enabled"><option value="true" ${row.enabled ? 'selected' : ''}>${t('yes')}</option><option value="false" ${!row.enabled ? 'selected' : ''}>${t('no')}</option></select></div>
          <div class="field"><label>${t('coinsPerInterval')}</label><input type="number" data-store-block="playtime" data-key="coins_per_interval" value="${Number(row.coins_per_interval || 0)}"></div>
          <div class="field"><label>${t('intervalMinutes')}</label><input type="number" data-store-block="playtime" data-key="interval_minutes" value="${Number(row.interval_minutes || 0)}"></div>
          <div class="field"><label>${t('dailyLimit')}</label><input type="number" data-store-block="playtime" data-key="daily_limit" value="${Number(row.daily_limit || 0)}"></div>
          <div class="field"><label>${t('antiAfkMinutes')}</label><input type="number" data-store-block="playtime" data-key="anti_afk_minutes" value="${Number(row.anti_afk_minutes || 0)}"></div>
          <div class="field"><label>${t('eventMultiplier')}</label><input type="number" step="0.1" data-store-block="playtime" data-key="event_multiplier" value="${Number(row.event_multiplier || 1)}"></div>
        </div>
      </div>
      <div class="card panel">
        <h3>${t('recommendedBehavior')}</h3>
        <div class="help-text">
          - ${t('playtimeLine1')}<br>
          - ${t('playtimeLine2')}<br>
          - ${t('playtimeLine3')}<br>
          - ${t('playtimeLine4')}
        </div>
      </div>
    </div>`;
}


function storeField(labelKey, tipKey, innerHtml, extraClass = '') {
  const tip = tipKey ? `<div class="field-tip">${t(tipKey)}</div>` : '';
  const klass = extraClass ? `field ${extraClass}` : 'field';
  return `<div class="${klass}"><label>${t(labelKey)}</label>${innerHtml}${tip}</div>`;
}

function renderStoreSettings(data) {
  const web = data.web || {};
  const discord = data.discord || {};
  const delivery = data.delivery || {};
  return `
    <div class="grid grid-2">
      <div class="card panel">
        <div class="panel-head-inline"><h3>${t('webSettingsTitle')}</h3><button class="btn btn-primary" onclick="saveStoreBlock('web')">${t('saveWeb')}</button></div>
        <div class="input-grid">
          ${storeField('publicIpLocal', 'tipPublicIpLocal', `<input data-store-block="web" data-key="public_ip" placeholder="127.0.0.1" value="${escapeHtml(web.public_ip || '')}">`)}
          ${storeField('telnetPort', 'tipStorePublicPort', `<input type="number" data-store-block="web" data-key="public_port" placeholder="26900" value="${Number(web.public_port || 8765)}">`)}
          ${storeField('currentBaseUrl', 'tipCurrentBaseUrl', `<input data-store-block="web" data-key="public_base_url" placeholder="http://127.0.0.1:26900" value="${escapeHtml(web.public_base_url || '')}">`)}
          ${storeField('futureDomain', 'tipFutureDomain', `<input data-store-block="web" data-key="domain" placeholder="panel.karmaworld.com" value="${escapeHtml(web.domain || '')}">`)}
          ${storeField('storeSteamLogin', 'tipStoreSteamLogin', `<select data-store-block="web" data-key="steam_enabled"><option value="true" ${web.steam_enabled ? 'selected' : ''}>${t('yes')}</option><option value="false" ${!web.steam_enabled ? 'selected' : ''}>${t('no')}</option></select>`)}
          ${storeField('storeDiscordLink', 'tipStoreDiscordLink', `<select data-store-block="web" data-key="discord_link_enabled"><option value="true" ${web.discord_link_enabled ? 'selected' : ''}>${t('yes')}</option><option value="false" ${!web.discord_link_enabled ? 'selected' : ''}>${t('no')}</option></select>`)}
          ${storeField('staffPanelEnabled', 'tipStaffPanelEnabled', `<select data-store-block="web" data-key="staff_panel_enabled"><option value="true" ${web.staff_panel_enabled !== false ? 'selected' : ''}>${t('yes')}</option><option value="false" ${web.staff_panel_enabled === false ? 'selected' : ''}>${t('no')}</option></select>`)}
          ${storeField('loginNotice', 'tipLoginNotice', `<input data-store-block="web" data-key="login_notice" value="${escapeHtml(web.login_notice || '')}">`, 'field-span-2')}
          ${storeField('discordClientId', 'tipDiscordClientId', `<input data-store-block="web" data-key="discord_client_id" placeholder="123456789012345678" value="${escapeHtml(web.discord_client_id || '')}">`)}
          ${storeField('discordRedirectUri', 'tipDiscordRedirectUri', `<input data-store-block="web" data-key="discord_redirect_uri" placeholder="http://127.0.0.1:26900/auth/discord/callback" value="${escapeHtml(web.discord_redirect_uri || '')}">`)}
          ${storeField('discordClientSecret', 'tipDiscordClientSecret', `<input type="password" data-store-block="web" data-key="discord_client_secret" placeholder="Discord app client secret" value="${escapeHtml(web.discord_client_secret || '')}">`, 'field-span-2')}
        </div>
      </div>
      <div class="card panel">
        <div class="panel-head-inline"><h3>${t('stripeTitle')}</h3><button class="btn btn-primary" onclick="saveStoreBlock('web')">${t('saveStripe')}</button></div>
        <div class="input-grid">
          ${storeField('active', 'tipStripeEnabled', `<select data-store-block="web" data-key="stripe_enabled"><option value="true" ${web.stripe_enabled ? 'selected' : ''}>${t('yes')}</option><option value="false" ${!web.stripe_enabled ? 'selected' : ''}>${t('no')}</option></select>`)}
          ${storeField('mode', 'tipStripeMode', `<select data-store-block="web" data-key="stripe_mode"><option value="test" ${web.stripe_mode === 'test' ? 'selected' : ''}>test</option><option value="live" ${web.stripe_mode === 'live' ? 'selected' : ''}>live</option></select>`)}
          ${storeField('currency', 'tipStripeCurrency', `<input data-store-block="web" data-key="stripe_currency" placeholder="EUR" value="${escapeHtml(web.stripe_currency || 'EUR')}">`)}
          ${storeField('publicKey', 'tipStripePublicKey', `<input data-store-block="web" data-key="stripe_public_key" value="${escapeHtml(web.stripe_public_key || '')}">`, 'field-span-2')}
          ${storeField('secretKey', 'tipStripeSecretKey', `<input type="password" data-store-block="web" data-key="stripe_secret_key" value="${escapeHtml(web.stripe_secret_key || '')}">`, 'field-span-2')}
          ${storeField('webhookSecret', 'tipStripeWebhookSecret', `<input type="password" data-store-block="web" data-key="stripe_webhook_secret" value="${escapeHtml(web.stripe_webhook_secret || '')}">`, 'field-span-2')}
          ${storeField('successUrl', 'tipSuccessUrl', `<input data-store-block="web" data-key="success_url" placeholder="http://127.0.0.1:26900/wallet/success" value="${escapeHtml(web.success_url || '')}">`)}
          ${storeField('cancelUrl', 'tipCancelUrl', `<input data-store-block="web" data-key="cancel_url" placeholder="http://127.0.0.1:26900/wallet/cancel" value="${escapeHtml(web.cancel_url || '')}">`)}
        </div>
      </div>
      <div class="card panel">
        <div class="panel-head-inline"><h3>${t('discordTitle')}</h3><button class="btn btn-primary" onclick="saveStoreBlock('discord')">${t('saveDiscord')}</button></div>
        <div class="input-grid">
          ${storeField('active', 'tipDiscordEnabled', `<select data-store-block="discord" data-key="enabled"><option value="true" ${discord.enabled ? 'selected' : ''}>${t('yes')}</option><option value="false" ${!discord.enabled ? 'selected' : ''}>${t('no')}</option></select>`)}
          ${storeField('dmPlayer', 'tipDmPlayer', `<select data-store-block="discord" data-key="dm_enabled"><option value="true" ${discord.dm_enabled ? 'selected' : ''}>${t('yes')}</option><option value="false" ${!discord.dm_enabled ? 'selected' : ''}>${t('no')}</option></select>`)}
          ${storeField('guildId', 'tipGuildId', `<input data-store-block="discord" data-key="guild_id" placeholder="123456789012345678" value="${escapeHtml(discord.guild_id || '')}">`)}
          ${storeField('purchasesChannel', 'tipPurchasesChannel', `<input data-store-block="discord" data-key="channel_id" placeholder="123456789012345678" value="${escapeHtml(discord.channel_id || '')}">`)}
          ${storeField('discordBotToken', 'tipDiscordBotToken', `<input type="password" data-store-block="discord" data-key="bot_token" value="${escapeHtml(discord.bot_token || '')}">`, 'field-span-2')}
          ${storeField('channelTemplate', 'tipChannelTemplate', `<input data-store-block="discord" data-key="public_template" placeholder="{player} compró {pack} por {amount} €" value="${escapeHtml(discord.public_template || '')}">`, 'field-span-2')}
          ${storeField('dmTemplate', 'tipDmTemplate', `<input data-store-block="discord" data-key="dm_template" placeholder="Pago confirmado: +{coins} Karmacoins" value="${escapeHtml(discord.dm_template || '')}">`, 'field-span-2')}
        </div>
      </div>
      <div class="card panel">
        <div class="panel-head-inline"><h3>${t('deliveryAlertsTitle')}</h3><button class="btn btn-primary" onclick="saveStoreBlock('delivery')">${t('saveRules')}</button></div>
        <div class="input-grid">
          ${storeField('deliveryQueue', 'tipDeliveryQueue', `<select data-store-block="delivery" data-key="queue_mode"><option value="true" ${delivery.queue_mode ? 'selected' : ''}>${t('yes')}</option><option value="false" ${!delivery.queue_mode ? 'selected' : ''}>${t('no')}</option></select>`)}
          ${storeField('onlinePlayer', 'tipOnlinePlayer', `<select data-store-block="delivery" data-key="requires_online_player"><option value="true" ${delivery.requires_online_player ? 'selected' : ''}>${t('yes')}</option><option value="false" ${!delivery.requires_online_player ? 'selected' : ''}>${t('no')}</option></select>`)}
          ${storeField('warnLimitsBeforeBuy', 'tipWarnLimitsBeforeBuy', `<select data-store-block="delivery" data-key="warn_limits_before_buy"><option value="true" ${delivery.warn_limits_before_buy ? 'selected' : ''}>${t('yes')}</option><option value="false" ${!delivery.warn_limits_before_buy ? 'selected' : ''}>${t('no')}</option></select>`)}
          ${storeField('visibleCategories', 'tipVisibleCategories', `<input data-store-categories="1" placeholder="General, Armas, Munición" value="${escapeHtml((data.categories || []).join(', '))}">`, 'field-span-2')}
        </div>
      </div>
    </div>`;
}

function renderStoreAdmin() {
  const data = getStoreAdmin();
  const tabs = `
    <div class="inline-actions store-tabs" style="margin-bottom:14px">
      ${storeTabButton('overview', t('storeOverviewTab'))}
      ${storeTabButton('packs', t('storePacksTab'))}
      ${storeTabButton('items', t('storeItemsTab'))}
      ${storeTabButton('wallets', t('storeWalletsTab'))}
      ${storeTabButton('payments', t('storePaymentsTab'))}
      ${storeTabButton('orders', t('storeOrdersTab'))}
      ${storeTabButton('playtime', t('storePlaytimeTab'))}
      ${storeTabButton('settings', t('storeSettingsTab'))}
    </div>`;
  const actionBar = `<div class="panel-head-inline" style="margin-bottom:14px"><div><h2 style="margin:0">${t('storeAdminTitle')}</h2><div class="help-text" style="margin-top:6px">${t('storeAdminSubtitle')}</div></div><div class="inline-actions"><button class="btn" onclick="window.open('/wallet','_blank')">${t('openPublicView')}</button><button class="btn" onclick="seedStoreDemoData()">${t('loadDemo')}</button><button class="btn btn-primary" onclick="saveFullStore()">${t('saveFullStore')}</button></div></div>`;
  const body = (() => {
    switch (state.storeAdminTab) {
      case 'packs': return renderStorePacks(data);
      case 'items': return renderStoreItems(data);
      case 'wallets': return renderStoreWallets(data);
      case 'payments': return renderStorePayments(data);
      case 'orders': return renderStoreOrders(data);
      case 'playtime': return renderStorePlaytime(data);
      case 'settings': return renderStoreSettings(data);
      default: return renderStoreOverview(data);
    }
  })();
  return `<div class="grid"><div class="card panel">${actionBar}${tabs}${body}</div></div>`;
}

const views = {

  dashboard() {
    const s = state.state;
    const config = s.config;
    const autoRestartLabel = config.auto_restart_enabled ? `${t('enabled')} · ${config.auto_restart_delay_seconds || 15}s` : t('disabled');
    const startedAt = s.started_at ? formatDateTime(s.started_at) : '-';
    const recentLines = (s.console_lines || []).slice(-10);
    const tasks = state.collections.tasks || [];
    const playerCount = (s.players_cache || []).length;
    return `
      <div class="grid">
        <div class="stats stats-6">
          <div class="stat card"><small>${t('status')}</small><strong>${s.running ? t('on') : t('off')}</strong></div>
          <div class="stat card"><small>${t('playersOnline')}</small><strong>${playerCount}</strong></div>
          <div class="stat card"><small>${t('pid')}</small><strong>${s.pid || '-'}</strong></div>
          <div class="stat card"><small>${t('startedAt')}</small><strong>${startedAt}</strong></div>
          <div class="stat card"><small>${t('autoRestart')}</small><strong>${autoRestartLabel}</strong></div>
        </div>
        <div class="grid grid-2">
          <div class="card panel">
            <div class="panel-head-inline"><h2>${t('generalStatus')}</h2><span class="badge ${s.running ? 'ok' : 'off'}">${s.running ? t('serverOn') : t('serverOff')}</span></div>
            <div class="label-grid">
              <div>${t('serverFolder')}</div><div>${escapeHtml(config.server_folder || '-')}</div>
              <div>${t('executable')}</div><div>${escapeHtml(config.executable_path || '-')}</div>
              <div>${t('workingFolder')}</div><div>${escapeHtml(config.working_directory || '-')}</div>
              <div>${t('realXml')}</div><div>${escapeHtml(config.xml_path || '-')}</div>
              <div>${t('backupFolder')}</div><div>${escapeHtml(config.backup_folder || '-')}</div>
              <div>${t('telnet')}</div><div>${escapeHtml(config.telnet_host || '-')} : ${escapeHtml(config.telnet_port || '-')}</div>
              <div>${t('panelAddress')}</div><div>${escapeHtml(config.panel_host || '-')} : ${escapeHtml(config.panel_port || '-')}</div>
            </div>
          </div>
          <div class="card panel">
            <h2>${t('recentActivity')}</h2>
            <div class="console-box compact-box"><div class="console-output">${recentLines.length ? escapeHtml(recentLines.join('\\n')) : `<span class="empty-note">${t('noRecentEvents')}</span>`}</div></div>
          </div>
        </div>
        <div class="card panel">
          <div class="panel-head-inline">
            <div>
              <h2 style="margin:0">${t('scheduledTasks')}</h2>
              <div class="help-text" style="margin-top:6px">${t('taskHelpText')}</div>
            </div>
            <div class="inline-actions">
              <button class="btn" onclick="addTask('restart')">${t('addRestartTask')}</button>
              <button class="btn" onclick="addTask('backup')">${t('addBackupTask')}</button>
              <button type="button" class="btn btn-primary" onclick="saveTasks();return false">${t('saveTasks')}</button>
            </div>
          </div>
          <table class="table">
            <thead><tr><th>${t('name')}</th><th>${t('taskType')}</th><th>${t('cron')}</th><th>${t('active')}</th><th></th></tr></thead>
            <tbody>
              ${tasks.length ? tasks.map((task, index) => `
                <tr>
                  <td><input data-task-index="${index}" data-key="name" value="${escapeHtml(task.name || '')}" placeholder="${t('name')}"></td>
                  <td>
                    <select data-task-index="${index}" data-key="type">
                      <option value="restart" ${task.type === 'restart' ? 'selected' : ''}>${t('taskRestart')}</option>
                      <option value="backup" ${task.type === 'backup' ? 'selected' : ''}>${t('taskBackup')}</option>
                    </select>
                  </td>
                  <td><input data-task-index="${index}" data-key="cron" value="${escapeHtml(task.cron || '')}" placeholder="0 6 * * *"></td>
                  <td><label class="checkbox-inline"><input type="checkbox" data-task-index="${index}" data-key="active" ${task.active ? 'checked' : ''}> <span>${task.active ? t('enabled') : t('disabled')}</span></label></td>
                  <td><button class="small-btn danger" onclick="deleteTask(${index})">${t('delete')}</button></td>
                </tr>`).join('') : `<tr><td colspan="5" class="empty-note">${t('noTasksYet')}</td></tr>`}
            </tbody>
          </table>
        </div>
      </div>`;
  },


  server() {
    const s = state.state;
    const cfg = s.config;
    const recentLines = (s.console_lines || []).slice(-200);
    const chatLines = (s.chat_lines || []).slice(-120);
    return `
      <div class="grid">
        <div class="grid grid-2 logs-grid">
          <div class="card panel">
            <div class="panel-head-inline"><h2>${t('logsTitle')}</h2><button class="btn" onclick="refreshState()">${t('refresh')}</button></div>
            <div class="help-text" style="margin-bottom:12px">${t('logsHint')}</div>
            <div class="console-box logs-box"><div class="console-output">${recentLines.length ? escapeHtml(recentLines.join('\\n')) : `<span class="empty-note">${t('noRecentEvents')}</span>`}</div></div>
          </div>
          <div class="card panel">
            <h2>${t('liveChat')}</h2>
            <div class="help-text" style="margin-bottom:12px">${t('chatLogHint')}</div>
            <div class="console-box logs-box"><div class="console-output">${chatLines.length ? escapeHtml(chatLines.join('\n')) : `<span class="empty-note">${t('noMessagesYet')}</span>`}</div></div>
          </div>
        </div>
        <div class="card panel">
          <h2>${t('technicalStatus')}</h2>
          <div class="label-grid">
            <div>${t('pid')}</div><div>${s.pid || '-'}</div>
            <div>${t('startedAt')}</div><div>${s.started_at ? formatDateTime(s.started_at) : '-'}</div>
            <div>${t('status')}</div><div>${s.running ? t('on') : t('off')}</div>
            <div>${t('autoRestart')}</div><div>${cfg.auto_restart_enabled ? `${t('enabled')} · ${escapeHtml(cfg.auto_restart_delay_seconds || 15)}s` : t('disabled')}</div>
            <div>${t('telnet')}</div><div>${escapeHtml(cfg.telnet_host)}:${escapeHtml(cfg.telnet_port)}</div>
            <div>${t('panelAddress')}</div><div>${escapeHtml(cfg.panel_host)}:${escapeHtml(cfg.panel_port)}</div>
            <div>${t('backupFolder')}</div><div>${escapeHtml(cfg.backup_folder || '-')}</div>
          </div>
        </div>
      </div>`;
  },


  console() {
    const s = state.state;
    return `
      <div class="grid grid-2 console-grid">
        <div class="card panel">
          <div class="panel-head-inline"><h2>${t('console')}</h2><div class="inline-actions"><button class="btn" onclick="refreshState()">${t('refresh')}</button><button class="btn" onclick="copyToClipboard((state.state.console_lines || []).join('\n'))">${t('copyRaw')}</button></div></div>
          <div class="inline-actions" style="margin-bottom:12px">
            <input id="consoleCommand" placeholder="${t('consolePlaceholder')}" onkeydown="if(event.key==='Enter'){event.preventDefault();sendConsole();}">
            <button class="btn" onclick="sendConsole()">${t('send')}</button>
          </div>
          <div class="console-box"><div class="console-output" id="consoleOutput">${escapeHtml((s.console_lines || []).join('\n'))}</div></div>
        </div>
        <div class="card panel">
          <h2>${t('liveChat')}</h2>
          <div class="inline-actions" style="margin-bottom:12px">
            <input id="chatMessage" placeholder="${t('globalMessagePlaceholder')}" onkeydown="if(event.key==='Enter'){event.preventDefault();sendChat();}">
            <button class="btn btn-primary" onclick="sendChat()">${t('sendToGame')}</button>
          </div>
          <div class="console-box compact-box"><div class="console-output">${escapeHtml(((s.chat_lines || []).slice(-80)).join('\n') || t('noMessagesYet'))}</div></div>
          <p class="empty-note">${t('configureTelnetHint')}</p>
        </div>
      </div>`;
  },

  chat() {
    const lines = (state.state.chat_lines || []).join('\n');
    return `
      <div class="card panel">
        <h2>${t('liveChat')}</h2>
        <div class="inline-actions" style="margin-bottom:12px">
          <input id="chatMessage" placeholder="${t('globalMessagePlaceholder')}" onkeydown="if(event.key==='Enter'){event.preventDefault();sendChat();}">
          <button class="btn btn-primary" onclick="sendChat()">${t('sendToGame')}</button>
        </div>
        <div class="console-box"><div class="console-output">${escapeHtml(lines || t('noMessagesYet'))}</div></div>
        <p class="empty-note">${t('configureTelnetHint')}</p>
      </div>`;
  },


players() {
  const players = state.state.players_cache || [];
  const current = selectedPlayer();
  return `
    <div class="player-master-layout">
      <div class="card panel">
        <div class="panel-head-inline">
          <div>
            <h2 style="margin:0">${t('players')}</h2>
            <div class="empty-note" style="margin-top:6px">${t('liveUpdating')} · ${t('lastRefresh')}: ${escapeHtml(state.state.last_players_refresh || '-')}</div>
          </div>
          <div class="inline-actions"><button class="btn" onclick="refreshPlayers()">${t('refreshPlayers')}</button></div>
        </div>
        ${players.length ? `
          <table class="table players-table players-compact-table">
            <thead><tr><th>${t('slot')}</th><th>${t('playerName')}</th><th>${t('steamId')}</th><th>${t('position')}</th><th>${t('options')}</th></tr></thead>
            <tbody>
              ${players.map((p, index) => `
                <tr class="${state.selectedPlayerIndex === index ? 'row-selected' : ''}" onclick="selectPlayer(${index})">
                  <td>${escapeHtml(p.slot || '-')}</td>
                  <td><button class="linkish-btn" type="button" onclick="event.preventDefault();event.stopPropagation();selectPlayer(${index})">${escapeHtml(playerDisplayName(p))}</button></td>
                  <td>${escapeHtml(playerSteamText(p))}</td>
                  <td>${escapeHtml(playerPosText(p))}</td>
                  <td>
                    <button class="small-btn" type="button" onclick="event.preventDefault();event.stopPropagation();togglePlayerMenu(${index})">${t('options')}</button>
                    ${state.playerMenuIndex === index ? `<div class="player-menu"><button class="small-btn" type="button" onclick="event.preventDefault();event.stopPropagation();copyPlayerField(${index},'name')">${t('copyName')}</button><button class="small-btn" type="button" onclick="event.preventDefault();event.stopPropagation();copyPlayerField(${index},'id')">${t('copyId')}</button><button class="small-btn" type="button" onclick="event.preventDefault();event.stopPropagation();copyPlayerField(${index},'steam')">${t('copySteam')}</button><button class="small-btn danger" type="button" onclick="event.preventDefault();event.stopPropagation();kickPlayer(${index})">${t('kickPlayer')}</button></div>` : ''}
                  </td>
                </tr>`).join('')}
            </tbody>
          </table>` : `<div class="empty-note">${t('noPlayerData')}<br>${t('clickRefreshIfNeeded')}</div>`}
      </div>
      <div class="card panel sticky-panel">
        <h2>${t('selectedPlayer')}</h2>
        ${playerCard(current)}
      </div>
    </div>`;
},


inventory() {
  const current = selectedPlayer();
  return `
    <div class="grid grid-2">
      <div class="card panel">
        <div class="panel-head-inline"><h2>${t('inventory')}</h2><div class="inline-actions"><button class="btn" onclick="go('players')">${t('players')}</button><button class="btn" onclick="refreshPlayers()">${t('refreshPlayers')}</button></div></div>
        ${playerInventoryCard(current)}
      </div>
      <div class="card panel">
        ${infoNote(t('inventoryHowTitle'), t('inventoryHowText'))}
        ${infoNote(t('inventoryLimitTitle'), t('inventoryLimitText'))}
      </div>
    </div>`;
},


liveMap() {
  const allPlayers = (state.state.players_cache || []).map((p, sourceIndex) => ({...p, sourceIndex}));
  const players = allPlayers.filter(p => typeof p.x === 'number' && typeof p.z === 'number' && !Number.isNaN(p.x) && !Number.isNaN(p.z));
  const bounds = getConfiguredMapBounds();
  const mapImagePath = state.state.config.map_image_path || '';
  const focused = state.mapFocusIndex !== null ? players.find(p => p.sourceIndex === state.mapFocusIndex) : null;
  return `
    <div class="grid" id="liveMapViewRoot">
      <div class="card panel map-full-panel" id="liveMapAnchor">
        <div class="panel-head-inline">
          <div>
            <h2 style="margin:0">${t('liveMap')}</h2>
            <div class="help-text" style="margin-top:6px">${t('mapHowItWorks')}<br>${t('mapCoordsHint')}</div>
          </div>
          <div class="inline-actions">
            <button class="btn" onclick="refreshPlayers()">${t('refreshPlayers')}</button>
            <button class="btn" onclick="zoomMap(0.2)">${t('mapZoomIn')}</button>
            <button class="btn" onclick="zoomMap(-0.2)">${t('mapZoomOut')}</button>
            <button class="btn" onclick="resetMapZoom()">${t('mapResetZoom')}</button>
            <button class="btn" onclick="clearMapFocus()">${t('mapViewAll')}</button>
          </div>
        </div>
        ${players.length ? `<div class="map-player-strip">${players.map((p) => `<button class="map-strip-pill ${focused && focused.sourceIndex === p.sourceIndex ? 'active' : ''}" onclick="focusPlayerOnMap(${p.sourceIndex})">${escapeHtml(playerDisplayName(p))}<span>${escapeHtml(playerPosText(p))}</span></button>`).join('')}</div>` : ''}
        ${mapImagePath && bounds ? `
          <div class="live-map-main live-map-main-full card">
            <div class="real-map-toolbar">
              <div class="empty-note">${t('mapImage')}: ${escapeHtml(mapImagePath.split(/[\/]/).pop() || '')}</div>
              <div class="empty-note" id="mapMousePos">${t('mousePos')}: ${escapeHtml(state.mapMouseText || '-')}</div>
            </div>
            <div class="real-map-scroll real-map-scroll-full" id="realMapScroll">
              <div class="real-map-stage" style="transform:scale(${state.mapZoom});">
                <div class="real-map-frame real-map-frame-full">
                  <img src="/api/map/image?v=${encodeURIComponent(String(state.mapImageVersion))}" class="real-map-image real-map-image-full" alt="mapa">
                  <div class="real-map-overlay" id="mapOverlay" onmousemove="handleMapMouse(event)" onmouseleave="clearMapMouse()">
                    ${players.map((p) => `<button class="map-player map-player-real ${focused && focused.sourceIndex === p.sourceIndex ? 'focused' : ''}" data-map-focused="${focused && focused.sourceIndex === p.sourceIndex ? 'true' : 'false'}" title="${escapeHtml(playerDisplayName(p))} · ${escapeHtml(playerPosText(p))}" style="${playerMapStyleFromBounds(p, bounds)}" onclick="focusPlayerOnMap(${p.sourceIndex})"><span>${escapeHtml(playerDisplayName(p).slice(0, 16))}</span></button>`).join('')}
                  </div>
                </div>
              </div>
            </div>
          </div>` : `<div class="empty-note">${t('mapNotConfigured')}<br>${t('mapUseSameWorld')}</div>`}
      </div>
    </div>`;
},

  permissions() { return renderPermissionsAdmin(); },

teleports() {
  return `
    <div class="grid grid-2">
      <div class="card panel">
        <div class="panel-head-inline"><h2>${t('teleports')}</h2><div class="inline-actions"><button class="btn" onclick="addRow('teleports')">${t('addRow')}</button><button class="btn btn-primary" onclick="saveCollection('teleports')">${t('saveList')}</button></div></div>
        <div class="help-text" style="margin-bottom:14px">${t('teleportsHint')}</div>
        ${editableTable('teleports', ['name','x','y','z'], [t('name'),'X','Y','Z'])}
      </div>
      <div class="card panel">
        ${infoNote(t('teleportsQuickHelpTitle'), t('teleportsQuickHelpText'))}
        ${infoNote(t('teleportsImportExportTitle'), t('teleportsImportExportText'))}
      </div>
    </div>`;
},

  store() { return renderStoreAdmin(); },
  vip() { return `<div class="card panel"><h2>${t('vip')}</h2><div class="help-text" style="margin-bottom:14px">${t('vipHelpText')}</div>${editableTable('vip', ['name','role_name','price','daily_bonus_percent','salary_bonus_percent','benefits'], [t('name'), t('roleName'), t('price'), t('dailyBonusPercent'), t('salaryBonusPercent'), t('benefits')])}</div>`; },

  serverconfig() {
    const rows = state.structuredXml || [];
    return `
      <div class="grid">
        <div class="card panel">
          <h2>${t('serverconfig')} XML</h2>
          <div class="help-text" style="margin-bottom:14px">${t('xmlOrderHint')}</div>
          <div class="inline-actions" style="margin-bottom:12px">
            <button class="btn" onclick="loadXmlAll()">${t('loadRealXml')}</button>
            <button class="btn btn-primary" onclick="saveStructuredXml()">${t('saveOrderedXml')}</button>
          </div>
          <div class="xml-box xml-structured-box">
            <h3>${t('serverconfig')} XML</h3>
            ${rows.length ? `<table class="table xml-structured-table"><thead><tr><th>${t('propName')}</th><th>${t('propValue')}</th><th>${t('propDescription')} (ES / EN)</th></tr></thead><tbody>${rows.map((row, index) => `<tr><td class="xml-name-cell">${escapeHtml(row.name)}</td><td class="xml-value-cell"><input data-xml-index="${index}" value="${escapeHtml(row.value)}"></td><td class="desc-cell">${formatServerConfigDescription(row.description || '')}</td></tr>`).join('')}</tbody></table>` : `<div class="empty-note">${t('noStructuredData')}</div>`}
          </div>
        </div>
      </div>`;
  },



helpdocs() {
  return `
    <div class="grid grid-2">
      <div class="card panel">
        ${infoNote(t('helpServerPathsTitle'), t('helpServerPathsText'))}
        ${infoNote(t('helpLogsTitle'), t('helpLogsText'))}
        ${infoNote(t('helpConsoleTitle'), t('helpConsoleText'))}
        ${infoNote(t('helpPlayersTitle'), t('helpPlayersText'))}
        ${infoNote(t('helpInventoryTitle'), t('helpInventoryText'))}
        ${infoNote(t('helpBackupsTitle'), t('helpBackupsText'))}
      </div>
      <div class="card panel">
        ${infoNote(t('helpTeleportsTitle'), t('helpTeleportsText'))}
        ${infoNote(t('helpRestartTitle'), t('helpRestartText'))}
        ${infoNote(t('helpSettingsTitle'), t('helpSettingsText'))}
      </div>
    </div>`;
},


settings() {
  const c = state.state.config;
  const mapSizeValue = String(c.map_size_mode || '8192');
  const mapSizeOptions = [
    { value: '6144', label: t('mapSize6144') },
    { value: '8192', label: t('mapSize8192') },
    { value: '10240', label: t('mapSize10240') },
    { value: 'custom', label: t('mapSizeCustom') }
  ];
  return `
    <div class="grid">
      <div class="card panel">
        <div class="panel-head-inline">
          <div>
            <h2 style="margin:0">${t('generalSettings')}</h2>
            <div class="help-text" style="margin-top:6px">${t('settingsHint')}</div>
          </div>
          <div class="inline-actions">
            <button class="btn" onclick="chooseSplash()">${t('changeStartupImage')}</button>
            <button class="btn" onclick="exportManagerConfig()">${t('exportConfig')}</button>
            <button class="btn" onclick="importManagerConfig()">${t('importConfig')}</button>
            <button class="btn btn-primary" onclick="saveSettings()">${t('saveSettings')}</button>
          </div>
        </div>
        <div class="input-grid">
          ${field('server_name', t('serverName'), c.server_name || '')}
          ${fieldSelect('language', t('language'), c.language || state.lang, [{value:'es', label:'Español'},{value:'en', label:'English'}])}
          ${fieldBrowse('server_folder', t('serverPath'), c.server_folder || '', 'folder', t('selectServerFolder'))}
          ${fieldBrowse('executable_path', t('exeOrBat'), c.executable_path || '', 'exe_bat', t('selectExecutable'))}
          ${fieldBrowse('working_directory', t('workingDirectory'), c.working_directory || '', 'folder', t('selectWorkingDirectory'))}
          ${fieldBrowse('xml_path', t('realServerConfig'), c.xml_path || '', 'xml', t('selectServerConfig'))}
          ${fieldBrowse('backup_folder', t('backupFolder'), c.backup_folder || '', 'folder', t('selectBackupFolder'))}
          ${field('telnet_host', t('telnetHost'), c.telnet_host || '127.0.0.1')}
          ${field('telnet_port', t('telnetPort'), c.telnet_port || 8081)}
          ${field('telnet_password', t('telnetPassword'), c.telnet_password || '', 'password')}
          ${field('panel_host', t('panelHost'), c.panel_host || '127.0.0.1')}
          ${field('panel_port', t('panelPort'), c.panel_port || 8765)}
          ${field('accent_color', t('accentColor'), c.accent_color || '#55a7ff')}
          ${fieldSelect('auto_restart_enabled', t('autoRestartEnabled'), c.auto_restart_enabled ? 'true' : 'false', [{value:'false', label:t('disabled')},{value:'true', label:t('enabled')}])}
          ${field('auto_restart_delay_seconds', t('autoRestartDelay'), c.auto_restart_delay_seconds || 15, 'number')}
        </div>
      </div>
    </div>`;
}
};

function field(id, label, value, type = 'text') {
  const botNumeric = type === 'text' && (id.startsWith('bot_') || id === 'bot_guild_id') && !id.includes('thumbnail') && !id.includes('token');
  const inputmode = botNumeric ? ' inputmode="numeric" autocomplete="off" spellcheck="false"' : '';
  return `<div class="field"><label for="${id}">${label}</label><input id="${id}" type="${type}" value="${escapeHtml(value)}"${inputmode}></div>`;
}

function fieldSelect(id, label, value, options) {
  const extra = id === 'map_size_mode' ? ` onchange="state.state.config.map_size_mode=this.value; go('settings')"` : '';
  return `<div class="field"><label for="${id}">${label}</label><select id="${id}"${extra}>${options.map(opt => `<option value="${escapeHtml(opt.value)}" ${String(value) === String(opt.value) ? 'selected' : ''}>${escapeHtml(opt.label)}</option>`).join('')}</select></div>`;
}

function fieldCheckbox(id, label, checked) {
  return `<label class="checkbox-inline" style="display:flex;gap:10px;align-items:center;padding:10px 12px;border:1px solid rgba(255,255,255,.08);border-radius:14px;min-height:48px"><input id="${id}" type="checkbox" ${checked ? 'checked' : ''}><span>${label}</span></label>`;
}

function fieldBrowse(id, label, value, kind, title) {
  return `<div class="field"><label for="${id}">${label}</label><div class="input-with-btn"><input id="${id}" value="${escapeHtml(value)}"><button class="small-btn" onclick="browseField('${id}','${kind}','${title.replace(/'/g,'&#39;')}')">${t('browse')}</button></div></div>`;
}

function closeLiveMapWindowsHard() {
  stopEmbeddedLiveMapSync(true);
  api('/api/live-map/embed/close', 'POST', {}).catch(() => {});
  api('/api/live-map/login-window/close', 'POST', {}).catch(() => {});
}

function go(section) {
  if (['permissions', 'store', 'vip', 'chat'].includes(section)) {
    section = 'dashboard';
  }
  if (section !== 'liveMap') {
    closeLiveMapWindowsHard();
  } else if (state.section === 'liveMap' && section !== 'liveMap') {
    stopEmbeddedLiveMapSync(true);
  }
  state.section = section;
  render();
  if (section !== 'liveMap') {
    setTimeout(closeLiveMapWindowsHard, 120);
    setTimeout(closeLiveMapWindowsHard, 420);
  }
  if (section === 'serverconfig' && !state.structuredXml.length) loadXmlAll();
  if (section === 'backups') loadBackups(true);
  if ((section === 'players' || section === 'inventory') && state.state?.config?.telnet_host) refreshPlayers(true);
}

async function setLanguage(lang) {
  state.lang = lang === 'en' ? 'en' : 'es';
  render();
  if (state.state) {
    state.state.config.language = state.lang;
    try {
      await api('/api/config/save', 'POST', { language: state.lang });
    } catch (_) {}
  }
}

async function refreshState(silent = false) {
  try {
    const [st, collections] = await Promise.all([api('/api/state'), api('/api/collections')]);
    state.state = st.data;
    state.collections = collections.data;
    state.lang = (state.state.config.language || state.lang || 'es');
    render();
    if (!silent) toast(t('panelUpdated'));
  } catch (err) {
    if (!silent) toast(err.message, true);
  }
}

async function serverAction(action) {
  try {
    const map = { start: '/api/server/start', stop: '/api/server/stop', restart: '/api/server/restart', backup: '/api/server/backup' };
    const res = await api(map[action], 'POST', {});
    toast(res.message);
    setTimeout(async () => { await refreshState(true); if (action === 'backup') loadBackups(true); }, 800);
  } catch (err) {
    toast(err.message, true);
  }
}

async function stopManager() {
  try {
    const res = await api('/api/server/manager-stop', 'POST', {});
    toast(res.message);
    setTimeout(() => {
      document.body.innerHTML = `
        <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#061b33;color:white;font-family:Segoe UI;padding:24px;box-sizing:border-box;">
          <div style="max-width:560px;width:100%;background:#0a2345;border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:28px;box-shadow:0 20px 60px rgba(0,0,0,.35);">
            <div style="font-size:28px;font-weight:700;margin-bottom:12px;">KarmaWorld</div>
            <div style="font-size:20px;font-weight:600;margin-bottom:10px;">${translateServerMessage(t('managerStoppedScreen'))}</div>
            <div style="opacity:.88;line-height:1.6;margin-bottom:22px;">${translateServerMessage(t('managerStoppedHint'))}</div>
            <button onclick="restartManagerFromStopped()" style="background:#55a7ff;color:white;border:none;border-radius:14px;padding:14px 22px;font-size:16px;font-weight:700;cursor:pointer;">${t('restartManager')}</button>
          </div>
        </div>`;
    }, 700);
  } catch (err) {
    toast(err.message, true);
  }
}

async function restartManagerFromStopped() {
  try {
    const res = await api('/api/server/manager-start', 'POST', {});
    document.body.innerHTML = `<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#061b33;color:white;font-family:Segoe UI;padding:24px;box-sizing:border-box;"><div style="font-size:18px;font-weight:600;">${escapeHtml(res.message || t('restartManager'))}</div></div>`;
    setTimeout(() => window.location.reload(), 700);
  } catch (err) {
    alert(err.message || 'Error');
  }
}

async function browseField(id, kind, title) {
  try {
    const initial = $(id).value || '';
    const endpoint = kind === 'folder' ? '/api/browse/folder' : '/api/browse/file';
    const body = kind === 'folder' ? { title, initial } : { title, initial, kind };
    const res = await api(endpoint, 'POST', body);
    $(id).value = res.path;
    toast(t('pathSelected'));
  } catch (err) {
    toast(err.message || t('error'), true);
  }
}

async function chooseSplash() {
  try {
    const picked = await api('/api/browse/file', 'POST', { kind: 'image', title: t('selectStartupImage'), initial: '' });
    await api('/api/splash/upload', 'POST', { source_path: picked.path });
    toast(t('startupImageUpdated'));
  } catch (err) {
    toast(err.message, true);
  }
}


async function botAction(action) {
  try {
    const map = { start: '/api/bot/start', stop: '/api/bot/stop' };
    const res = await api(map[action], 'POST', {});
    toast(res.message);
    setTimeout(async () => { await refreshState(true); }, 800);
  } catch (err) {
    toast(err.message, true);
  }
}

async function saveBotConfig() {
  try {
    const payload = {
      external_bot_entry: $('bot_external_bot_entry').value
    };
    Array.from(document.querySelectorAll('[id^="bot_"]')).forEach(el => {
      const key = String(el.id || '').replace(/^bot_/, '');
      if (!key || key === 'external_bot_entry') return;
      if (el.type === 'checkbox') payload[key] = !!el.checked;
      else payload[key] = el.value;
    });
    const res = await api('/api/bot/config/save', 'POST', payload);
    toast(res.message);
    await refreshState(true);
    go('settings');
  } catch (err) {
    toast(err.message, true);
  }
}

async function exportManagerConfig() {
  try {
    const picked = await api('/api/browse/folder', 'POST', { title: t('selectExportFile'), initial: '' });
    const res = await api('/api/config/export', 'POST', { target_path: picked.path });
    toast(res.message || t('exportConfigDone'));
  } catch (err) {
    toast(err.message, true);
  }
}

async function importManagerConfig() {
  try {
    const picked = await api('/api/browse/file', 'POST', { kind: 'config_zip', title: t('selectImportFile'), initial: '' });
    if (!window.confirm(t('importConfigConfirm'))) return;
    const res = await api('/api/config/import', 'POST', { source_path: picked.path });
    toast(res.message || t('importConfigDone'));
    state.mapImageVersion = Date.now();
    await refreshState(true);
    go('settings');
  } catch (err) {
    toast(err.message, true);
  }
}

function stopLiveMapLoginWatcher() {
  if (window.__kwLiveMapLoginWatcher) {
    clearInterval(window.__kwLiveMapLoginWatcher);
    window.__kwLiveMapLoginWatcher = null;
  }
}

function getEmbeddedLiveMapRect() {
  const shell = document.getElementById('kwEmbeddedLiveMapShell');
  if (!shell) return null;
  const rect = shell.getBoundingClientRect();
  if (!rect || rect.width < 40 || rect.height < 40) return null;
  const screenX = Math.round((window.screenX || window.screenLeft || 0) + rect.left);
  const screenY = Math.round((window.screenY || window.screenTop || 0) + rect.top);
  return { screenX, screenY, width: Math.round(rect.width), height: Math.round(rect.height) };
}

async function syncEmbeddedLiveMapWindow(force = false) {
  if (state.section !== 'liveMap') return;
  const liveMapUrl = String((state.state.config && state.state.config.live_map_url) || '').trim();
  if (!liveMapUrl) return;
  const rect = getEmbeddedLiveMapRect();
  if (!rect) return;
  const key = JSON.stringify(rect) + '|' + liveMapUrl;
  if (!force && window.__kwEmbeddedLiveMapLastKey === key) return;
  window.__kwEmbeddedLiveMapLastKey = key;
  try {
    await api('/api/live-map/embed', 'POST', { url: liveMapUrl, rect });
  } catch (err) {
    if (force) toast(err.message, true);
  }
}

function startEmbeddedLiveMapSync() {
  if (window.__kwEmbeddedLiveMapSync) return;
  const tick = () => syncEmbeddedLiveMapWindow(false);
  window.__kwEmbeddedLiveMapSync = setInterval(tick, 900);
  window.__kwEmbeddedLiveMapResizeHandler = () => syncEmbeddedLiveMapWindow(true);
  window.addEventListener('resize', window.__kwEmbeddedLiveMapResizeHandler);
}

function stopEmbeddedLiveMapSync(closeWindow = false) {
  if (window.__kwEmbeddedLiveMapSync) {
    clearInterval(window.__kwEmbeddedLiveMapSync);
    window.__kwEmbeddedLiveMapSync = null;
  }
  if (window.__kwEmbeddedLiveMapResizeHandler) {
    window.removeEventListener('resize', window.__kwEmbeddedLiveMapResizeHandler);
    window.__kwEmbeddedLiveMapResizeHandler = null;
  }
  window.__kwEmbeddedLiveMapLastKey = '';
  if (closeWindow) {
    api('/api/live-map/embed/close', 'POST', {}).catch(() => {});
  }
}

async function openLiveMapLoginWindow() {
  try {
    await syncEmbeddedLiveMapWindow(true);
    toast('Mapa Steam abierto dentro del panel.');
  } catch (err) {
    toast(err.message, true);
  }
}

async function saveSettings() {
  try {
    const payload = {
      server_name: $('server_name').value,
      server_folder: $('server_folder').value,
      executable_path: $('executable_path').value,
      working_directory: $('working_directory').value,
      xml_path: $('xml_path').value,
      telnet_host: $('telnet_host').value,
      telnet_port: $('telnet_port').value,
      telnet_password: $('telnet_password').value,
      panel_host: $('panel_host').value,
      panel_port: $('panel_port').value,
      accent_color: $('accent_color').value,
      backup_folder: $('backup_folder').value,
      map_image_path: $('map_image_path').value,
      map_size_mode: $('map_size_mode').value,
      map_custom_size: $('map_custom_size') ? $('map_custom_size').value : $('map_size_mode').value,
      auto_restart_enabled: $('auto_restart_enabled').value === 'true',
      auto_restart_delay_seconds: $('auto_restart_delay_seconds').value,
      language: state.lang
    };
    await api('/api/config/save', 'POST', payload);
    toast(t('settingsSaved'));
    state.mapImageVersion = Date.now();
    await refreshState(true);
    go('settings');
  } catch (err) {
    toast(err.message, true);
  }
}

function formatBytes(bytes) {
  const value = Number(bytes || 0);
  if (!value) return '0 B';
  const units = ['B','KB','MB','GB'];
  let size = value;
  let idx = 0;
  while (size >= 1024 && idx < units.length - 1) {
    size /= 1024;
    idx += 1;
  }
  return `${size.toFixed(size >= 10 || idx === 0 ? 0 : 1)} ${units[idx]}`;
}

function addTask(type) {
  const baseType = type === 'backup' ? 'backup' : 'restart';
  state.collections.tasks = state.collections.tasks || [];
  state.collections.tasks.push({
    id: `ui_${Date.now()}_${Math.random().toString(16).slice(2, 8)}`,
    name: baseType === 'backup' ? t('taskBackup') : t('taskRestart'),
    type: baseType,
    cron: baseType === 'backup' ? '0 */12 * * *' : '0 6 * * *',
    active: true
  });
  render(true);
}

function deleteTask(index) {
  state.collections.tasks.splice(index, 1);
  render(true);
}

async function saveTasks() {
  try {
    const rows = [...document.querySelectorAll('[data-task-index]')];
    const tasks = state.collections.tasks.map((task, index) => {
      const find = (key) => rows.find(el => Number(el.dataset.taskIndex) === index && el.dataset.key === key);
      return {
        id: task.id || `task_${index}`,
        name: find('name')?.value?.trim() || task.name || t('taskRestart'),
        type: find('type')?.value || task.type || 'restart',
        cron: find('cron')?.value?.trim() || task.cron || '0 6 * * *',
        active: !!find('active')?.checked
      };
    });
    state.collections.tasks = tasks;
    const res = await api('/api/collections/tasks', 'POST', { items: tasks });
    toast(res.message || t('saveTasks'));
    await refreshState(true);
  } catch (err) {
    toast(err.message, true);
  }
}

async function loadBackups(silent = false) {
  try {
    const res = await api('/api/backups');
    state.backups = res.data || [];
    if (state.section === 'backups') render(true);
    if (!silent) toast(t('backupListLoaded'));
  } catch (err) {
    if (!silent) toast(err.message, true);
  }
}

function copyBackupPath(path) {
  copyToClipboard(path || '');
}

async function restoreBackup(path) {
  const msg = t('restoreBackupConfirm');
  if (!window.confirm(msg)) return;
  try {
    const res = await api('/api/backups/restore', 'POST', { backup_path: path });
    toast(res.message || t('backupRestored'));
    await refreshState(true);
    await loadBackups(true);
  } catch (err) {
    toast(err.message, true);
  }
}

async function deleteBackup(path) {
  const msg = state.lang === 'en' ? 'Delete this backup?' : '¿Borrar este backup?';
  if (!window.confirm(msg)) return;
  try {
    const res = await api('/api/backups/delete', 'POST', { backup_path: path });
    toast(res.message || t('backupDeleted'));
    await loadBackups(true);
  } catch (err) {
    toast(err.message, true);
  }
}

async function sendConsole() {
  try {
    const command = $('consoleCommand').value.trim();
    if (!command) return toast(t('writeCommand'), true);
    const res = await api('/api/telnet/send', 'POST', { command });
    $('consoleCommand').value = '';
    toast(res.message || t('send'));
    await refreshState(true);
    go('console');
  } catch (err) {
    toast(err.message, true);
  }
}

async function sendChat() {
  try {
    const message = $('chatMessage').value.trim();
    if (!message) return toast(t('writeMessage'), true);
    const res = await api('/api/chat/send', 'POST', { message });
    $('chatMessage').value = '';
    toast(res.message);
    await refreshState(true);
    go('console');
  } catch (err) {
    toast(err.message, true);
  }
}

async function refreshPlayers(silent = false) {
  try {
    const res = await api('/api/players/refresh', 'POST', {});
    if (!silent) toast(res.message);
    await refreshState(true);
  } catch (err) {
    if (!silent) toast(err.message, true);
  }
}

function copyPlayerField(index, type) {
  const player = (state.state.players_cache || [])[index];
  if (!player) return toast(t('invalidPlayer'), true);
  const map = {
    name: playerDisplayName(player),
    id: player.entityid || player.slot || '',
    slot: player.slot || '',
    steam: playerSteamText(player, ''),
    raw: player.raw || ''
  };
  copyToClipboard(map[type] || '');
}

function togglePlayerMenu(index) {
  state.selectedPlayerIndex = index;
  state.playerMenuIndex = state.playerMenuIndex === index ? null : index;
  render();
}

async function kickPlayer(index) {
  try {
    const player = (state.state.players_cache || [])[index];
    if (!player) return toast(t('invalidPlayer'), true);
    const res = await api('/api/player/action', 'POST', { action: 'kick', player });
    toast(res.message || t('kickSent'));
    state.playerMenuIndex = null;
    setTimeout(() => refreshPlayers(true), 800);
  } catch (err) {
    toast(err.message, true);
  }
}

function focusPlayerOnMap(index) {
  state.mapFocusIndex = index;
  state.playerMenuIndex = null;
  state.selectedPlayerIndex = index;
  go('liveMap');
  setTimeout(scrollToFocusedPlayerMarker, 80);
}

function clearMapFocus() {
  state.mapFocusIndex = null;
  toast(t('mapFocusCleared'));
  render();
}

async function loadXmlAll() {
  try {
    const [raw, structured] = await Promise.all([api('/api/serverconfig'), api('/api/serverconfig/structured')]);
    state.xml = raw.data;
    state.structuredXml = structured.data || [];
    render();
    go('serverconfig');
  } catch (err) {
    toast(err.message, true);
  }
}

async function loadStructuredXml() {
  try {
    const structured = await api('/api/serverconfig/structured');
    state.structuredXml = structured.data || [];
    render();
    go('serverconfig');
  } catch (err) {
    toast(err.message, true);
  }
}

async function saveXml() {
  try {
    const content = $('xmlEditor').value;
    const res = await api('/api/serverconfig/save', 'POST', { content });
    toast(res.message);
    await loadXmlAll();
  } catch (err) {
    toast(err.message, true);
  }
}

async function saveStructuredXml() {
  try {
    if (!state.structuredXml.length) return toast(t('loadXmlFirst'), true);
    const inputs = Array.from(document.querySelectorAll('input[data-xml-index]'));
    inputs.forEach(input => {
      const idx = Number(input.dataset.xmlIndex);
      state.structuredXml[idx].value = input.value;
    });
    if (!window.confirm(t('saveXmlConfirm'))) return;
    const res = await api('/api/serverconfig/structured/save', 'POST', { items: state.structuredXml });
    toast(res.message);
    await loadXmlAll();
  } catch (err) {
    toast(err.message, true);
  }
}

function addRow(name) {
  const templates = {
    permissions: { emoji: '🛡️', name: '', level: '', discord_role_id: '', panel_sections: 'dashboard', commands: '', color: '#55a7ff' },
    teleports: { name: '', x: '', y: '', z: '' },
    store: { category: 'General', name: '', item_code: '', quantity: 1, price: '', command: '' },
    vip: { name: '', role_name: '', price: '', daily_bonus_percent: 0, salary_bonus_percent: 0, benefits: '' },
    tasks: { name: '', cron: '', active: true }
  };
  state.collections[name].push({ ...templates[name] });
  render();
}

function loadPermissionsPreset() {
  state.collections.permissions = [
    { emoji: '👑', name: 'Fundador', level: 0, discord_role_id: '', panel_sections: 'dashboard,server,console,players,inventory,backups,tasks,serverconfig,settings,notifications,discordbot,helpdocs,access', commands: 'all', color: '#f7c948' },
    { emoji: '🔥', name: 'Administrador', level: 10, discord_role_id: '', panel_sections: 'dashboard,server,console,players,inventory,backups,tasks,serverconfig,settings,notifications,discordbot,helpdocs,access', commands: 'say,listplayers,teleport', color: '#ff6b57' },
    { emoji: '⚡', name: 'Coordinador', level: 20, discord_role_id: '', panel_sections: 'dashboard,server,console,players,inventory,backups,tasks,serverconfig,settings,notifications,helpdocs', commands: 'say,listplayers,teleport', color: '#ff9f43' },
    { emoji: '🛡️', name: 'Moderador', level: 30, discord_role_id: '', panel_sections: 'dashboard,server,console,players,inventory,helpdocs', commands: 'say,listplayers', color: '#4dabf7' },
    { emoji: '💚', name: 'Ayudante', level: 40, discord_role_id: '', panel_sections: 'dashboard,players', commands: 'say,listplayers', color: '#51cf66' },
    { emoji: '🎉', name: 'Staff de Eventos', level: 50, discord_role_id: '', panel_sections: 'dashboard,server,console,players,inventory,helpdocs', commands: 'say,listplayers', color: '#b56cff' },
  ];
  render();
}

function deleteRow(name, index) {
  state.collections[name].splice(index, 1);
  render();
}

async function saveCollection(name) {
  try {
    const inputs = Array.from(document.querySelectorAll(`input[data-collection="${name}"]`));
    inputs.forEach(input => {
      const idx = Number(input.dataset.index);
      const key = input.dataset.key;
      let value = input.value;
      if (key === 'active') value = ['true', '1', 'sí', 'si', 'yes'].includes(String(value).toLowerCase());
      state.collections[name][idx][key] = value;
    });
    const res = await api(`/api/collections/${name}`, 'POST', { items: state.collections[name] });
    toast(res.message);
    await refreshState(true);
    go(name);
  } catch (err) {
    toast(err.message, true);
  }
}

function parseStoreInputValue(input) {
  if (!input) return '';
  if (input.type === 'checkbox') return !!input.checked;
  const raw = input.value;
  if (input.type === 'number') return raw === '' ? 0 : Number(raw);
  if (input.tagName === 'SELECT') {
    if (raw === 'true') return true;
    if (raw === 'false') return false;
  }
  return raw;
}

function addStoreRow(section) {
  const data = getStoreAdmin();
  const templates = {
    coin_packs: { id: `pack_${data.coin_packs.length + 1}`, name: 'Nuevo pack', description: '', coins: 500, bonus_coins: 0, price_real: 4.99, currency: data.web.stripe_currency || 'EUR', image: '', active: true, featured: false },
    items: { id: `item_${data.items.length + 1}`, category: data.categories[0] || 'General', name: t('newItemLabel'), description: '', image: '', item_code: '', quantity: 1, quality: 1, price_coins: 100, stock: 0, purchase_limit_total: 0, purchase_limit_daily: 0, cooldown_seconds: 0, vip_required: '', min_level: 0, requires_online_player: true, delivery_mode: 'queue', command: '', active: true, visible: true, featured: false },
    wallets: { steam_id: '', player_name: t('newPlayerLabel'), discord_id: '', balance: 0, total_bought: 0, total_spent: 0, blocked: false },
    payments: { created_at: new Date().toISOString().slice(0,19).replace('T',' '), player_name: '', pack_name: '', amount_real: 0, currency: data.web.stripe_currency || 'EUR', status: 'pending', provider: 'stripe', provider_session_id: '' },
    orders: { created_at: new Date().toISOString().slice(0,19).replace('T',' '), player_name: '', item_name: '', price_paid: 0, status: 'pending', delivery_mode: 'queue', error_message: '' }
  };
  if (!Array.isArray(data[section])) return;
  data[section].push({ ...templates[section] });
  setStoreAdmin(data);
  render();
}

function deleteStoreRow(section, index) {
  const data = getStoreAdmin();
  if (!Array.isArray(data[section])) return;
  data[section].splice(index, 1);
  setStoreAdmin(data);
  render();
}

async function saveStoreSection(section) {
  try {
    const data = getStoreAdmin();
    const rows = Array.isArray(data[section]) ? data[section].map(row => ({ ...row })) : [];
    const inputs = Array.from(document.querySelectorAll(`[data-store-section="${section}"]`));
    inputs.forEach(input => {
      const index = Number(input.dataset.index);
      const key = input.dataset.key;
      if (!rows[index]) rows[index] = {};
      rows[index][key] = parseStoreInputValue(input);
    });
    data[section] = rows;
    saveStoreMetaStamp(data);
    const res = await api('/api/collections/store', 'POST', { items: data });
    setStoreAdmin(data);
    toast(res.message || 'Tienda guardada.');
    await refreshState(true);
    go('store');
  } catch (err) {
    toast(err.message, true);
  }
}

async function saveStoreBlock(blockName) {
  try {
    const data = getStoreAdmin();
    const block = { ...(data[blockName] || {}) };
    const inputs = Array.from(document.querySelectorAll(`[data-store-block="${blockName}"]`));
    inputs.forEach(input => {
      block[input.dataset.key] = parseStoreInputValue(input);
    });
    data[blockName] = block;
    if (blockName === 'delivery') {
      const categoriesInput = document.querySelector('[data-store-categories]');
      if (categoriesInput) {
        data.categories = String(categoriesInput.value || '').split(',').map(x => x.trim()).filter(Boolean);
        if (!data.categories.length) data.categories = defaultStoreAdminData().categories;
      }
    }
    saveStoreMetaStamp(data);
    const res = await api('/api/collections/store', 'POST', { items: data });
    setStoreAdmin(data);
    toast(res.message || 'Configuración de tienda guardada.');
    await refreshState(true);
    go('store');
  } catch (err) {
    toast(err.message, true);
  }
}

async function saveFullStore() {
  try {
    const data = getStoreAdmin();
    saveStoreMetaStamp(data);
    const res = await api('/api/collections/store', 'POST', { items: data });
    toast(res.message || 'Tienda completa guardada.');
    await refreshState(true);
    go('store');
  } catch (err) {
    toast(err.message, true);
  }
}

function seedStoreDemoData() {
  const data = getStoreAdmin();
  data.coin_packs = [
    { id: 'pack_500', name: 'Pack 500', description: 'Pack básico para empezar.', coins: 500, bonus_coins: 0, price_real: 4.99, currency: 'EUR', image: '', active: true, featured: false },
    { id: 'pack_1200', name: 'Pack 1200', description: 'Incluye bonus.', coins: 1000, bonus_coins: 200, price_real: 9.99, currency: 'EUR', image: '', active: true, featured: true },
    { id: 'pack_2500', name: 'Pack 2500', description: 'Pack grande con bonus extra.', coins: 2000, bonus_coins: 500, price_real: 19.99, currency: 'EUR', image: '', active: true, featured: true }
  ];
  data.items = [
    { id: 'item_botiquin', category: 'Medicina', name: 'Botiquín premium', description: 'Objeto de ejemplo para la tienda web.', image: '', item_code: 'firstAidKit', quantity: 3, quality: 1, price_coins: 250, stock: 0, purchase_limit_total: 0, purchase_limit_daily: 2, cooldown_seconds: 3600, vip_required: '', min_level: 0, requires_online_player: true, delivery_mode: 'queue', command: 'give {player} firstAidKit 3', active: true, visible: true, featured: true },
    { id: 'item_herramientas', category: 'Herramientas', name: 'Pack de herramientas', description: 'Pack de ejemplo para pruebas de límite.', image: '', item_code: 'steelPickaxe', quantity: 1, quality: 4, price_coins: 800, stock: 10, purchase_limit_total: 1, purchase_limit_daily: 1, cooldown_seconds: 86400, vip_required: 'VIP', min_level: 0, requires_online_player: true, delivery_mode: 'queue', command: 'give {player} steelPickaxe 1 4', active: true, visible: true, featured: false }
  ];
  data.wallets = [
    { steam_id: '76561198000000001', player_name: 'JugadorDemo', discord_id: '123456789012345678', balance: 1500, total_bought: 2500, total_spent: 1000, blocked: false }
  ];
  data.transactions = [
    { created_at: new Date().toISOString().slice(0,19).replace('T',' '), player_name: 'JugadorDemo', type: 'purchase_real_money', amount: 1200, description: 'Compra pack 1200' },
    { created_at: new Date().toISOString().slice(0,19).replace('T',' '), player_name: 'JugadorDemo', type: 'shop_spend', amount: -250, description: 'Compra Botiquín premium' }
  ];
  data.payments = [
    { created_at: new Date().toISOString().slice(0,19).replace('T',' '), player_name: 'JugadorDemo', pack_name: 'Pack 1200', amount_real: 9.99, currency: 'EUR', status: 'completed', provider: 'stripe', provider_session_id: 'cs_demo_123' }
  ];
  data.orders = [
    { created_at: new Date().toISOString().slice(0,19).replace('T',' '), player_name: 'JugadorDemo', item_name: 'Botiquín premium', price_paid: 250, status: 'delivered', delivery_mode: 'queue', error_message: '' }
  ];
  saveStoreMetaStamp(data);
  setStoreAdmin(data);
  render();
  toast(t('storeDemoLoaded'));
}

function addStoreSampleTransaction() {
  const data = getStoreAdmin();
  data.transactions.push({ created_at: new Date().toISOString().slice(0,19).replace('T',' '), player_name: 'Jugador', type: 'admin_add', amount: 100, description: 'Movimiento manual de ejemplo' });
  setStoreAdmin(data);
  render();
}

function addStorePayment() { addStoreRow('payments'); }
function addStoreOrder() { addStoreRow('orders'); }

function hideSplashOverlay() {
  const splash = $('splashOverlay');
  if (!splash) return;
  splash.classList.add('hidden');
  splash.style.display = 'none';
  splash.setAttribute('aria-hidden', 'true');
}

function withPanelLoadTimeout(promise, ms, label) {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error(`Timeout en ${label}`)), ms))
  ]);
}


function startInitialPanelLoad() {
  if (window.__kwInitialLoadStarted) return;
  window.__kwInitialLoadStarted = true;

  buildMenu();
  renderStaticTexts();

  (async () => {
    try {
      await withPanelLoadTimeout(refreshState(true), 3500, 'refreshState');
      await withPanelLoadTimeout(loadBackups(true), 2500, 'loadBackups');
    } catch (err) {
      console.error('Error durante la carga inicial del panel:', err);
      try { toast((err && err.message) ? err.message : 'Error cargando el panel', true); } catch (_) {}
    } finally {
      try { startSoftAutoRefresh(); } catch (_) {}
    }
  })();
}

document.addEventListener('DOMContentLoaded', () => {
  try { hideSplashOverlay(); } catch (_) {}
});

window.addEventListener('load', startInitialPanelLoad);



/* ===== v10 patch: player info, map claims, scroll preserve, desktop-friendly ===== */
Object.assign(T.es, {
  playerInfoTitle: 'Información del jugador',
  ipAddress: 'IP',
  rawLine: 'Línea raw',
  noSelection: 'No hay zona seleccionada.',
  selectArea: 'Seleccionar zona',
  stopSelecting: 'Cancelar selección',
  clearSelection: 'Limpiar selección',
  createProtection: 'Crear protección / claim',
  selectionArea: 'Zona seleccionada',
  selectionBlocks: 'Tamaño',
  blocks: 'bloques',
  claimCreateTitle: 'Crear claim / protección',
  claimName: 'Nombre',
  claimAccesslevel: 'Accesslevel',
  claimType: 'Tipo de protección',
  claimCurrentCommand: 'Comando actual',
  claimSend: 'Enviar al servidor',
  claimCopy: 'Copiar comando',
  claimTypeHelp: 'Este tipo controlará el comportamiento de la zona.',
  claimNoSelection: 'Primero selecciona una zona en el mapa.',
  claimSent: 'Claim enviado al servidor.',
  claimCopied: 'Comando copiado.',
  claimSelectionHint: 'Arrastra sobre el mapa para seleccionar un área.',
  claimStepHeight: 'Altura de disparo',
  claimDestX: 'Coordenada X destino',
  claimDestY: 'Coordenada Y destino',
  claimDestZ: 'Coordenada Z destino',
  claimAllowedBlocks: 'Bloques permitidos',
  claimForbiddenBlocks: 'Bloques prohibidos',
  claimOpenHour: 'Hora de apertura',
  claimCloseHour: 'Hora de cierre',
  claimHoursBeforeVanish: 'Horas antes de desaparecer',
  claimPlayerLevelExpr: 'Condición de nivel',
  claimCommandToRun: 'Comando a ejecutar',
  claimEnterText: 'Texto al entrar',
  claimExitText: 'Texto al salir',
  claimYTop: 'Y superior',
  claimYBottom: 'Y inferior',
  claimDescription: 'Descripción',
  mapSelectionModeOn: 'Modo selección activado.',
  mapSelectionModeOff: 'Modo selección desactivado.',
  protectInMap: 'Selecciona una zona y crea una claim para bloquear daño, entrada, horarios, portal, etc.',
  clickPlayerNameInfo: 'Haz clic en el nombre para ver información.',
  mapLayersHint: 'La zona seleccionada se convierte en una protección KarmaWorld y se envía por telnet si está configurado.',
  playerInfoOpenOnMap: 'Abrir ficha',
  claimType_normal_desc: 'Claim normal sin reglas extra.',
  claimType_hostilefree_desc: 'Área libre de hostiles. Los enemigos desaparecen dentro de esta protección.',
  claimType_notify_desc: 'Muestra un mensaje al entrar y otro al salir de la zona.',
  claimType_command_desc: 'Lanza uno o varios comandos cuando un jugador entra en la zona.',
  claimType_leveled_desc: 'Como una claim normal, pero limitando la altura superior e inferior.',
  claimType_reversed_desc: 'Zona tipo cárcel. El jugador autorizado no puede salir de ella.',
  claimType_timed_desc: 'Protección temporal que desaparece pasado un número de horas.',
  claimType_portal_desc: 'Teletransporta al jugador a unas coordenadas concretas.',
  claimType_openhours_desc: 'La zona solo está activa dentro del horario indicado.',
  claimType_playerlevel_desc: 'Restringe o permite acceso según el nivel del jugador.',
  claimType_lcbfree_desc: 'Controla si se pueden poner claim blocks dentro del área.',
  claimType_antiblock_desc: 'Impide colocar bloques concretos configurados.',
  claimType_reset_desc: 'Claim de reseteo sin parámetros extra.',
  claimType_problock_desc: 'Solo permite los bloques configurados dentro del área.',
  claimType_landclaim_desc: 'Solo propietarios, whitelist y accesslevel permitido pueden construir dentro.',
  claimType_resetregion_desc: 'Pensado para regiones que se resetean.',
  noIp: 'Sin IP',
  selectionCoords: 'Coordenadas',
  commandPreview: 'Vista previa'
});

Object.assign(T.en, {
  playerInfoTitle: 'Player information',
  ipAddress: 'IP',
  rawLine: 'Raw line',
  noSelection: 'No area selected.',
  selectArea: 'Select area',
  stopSelecting: 'Cancel selection',
  clearSelection: 'Clear selection',
  createProtection: 'Create protection / claim',
  selectionArea: 'Selected area',
  selectionBlocks: 'Size',
  blocks: 'blocks',
  claimCreateTitle: 'Create claim / protection',
  claimName: 'Name',
  claimAccesslevel: 'Accesslevel',
  claimType: 'Protection type',
  claimCurrentCommand: 'Current command',
  claimSend: 'Send to server',
  claimCopy: 'Copy command',
  claimTypeHelp: 'This type will control the claim behaviour.',
  claimNoSelection: 'Select an area on the map first.',
  claimSent: 'Claim sent to the server.',
  claimCopied: 'Command copied.',
  claimSelectionHint: 'Drag on the map to select an area.',
  claimStepHeight: 'Step height',
  claimDestX: 'Destination X',
  claimDestY: 'Destination Y',
  claimDestZ: 'Destination Z',
  claimAllowedBlocks: 'Allowed blocks',
  claimForbiddenBlocks: 'Forbidden blocks',
  claimOpenHour: 'Opening hour',
  claimCloseHour: 'Closing hour',
  claimHoursBeforeVanish: 'Hours before vanish',
  claimPlayerLevelExpr: 'Level condition',
  claimCommandToRun: 'Command to execute',
  claimEnterText: 'Entering text',
  claimExitText: 'Exiting text',
  claimYTop: 'Top Y',
  claimYBottom: 'Bottom Y',
  claimDescription: 'Description',
  mapSelectionModeOn: 'Selection mode enabled.',
  mapSelectionModeOff: 'Selection mode disabled.',
  protectInMap: 'Select an area and create a claim to block damage, entry, schedules, portal, etc.',
  clickPlayerNameInfo: 'Click the name to open player information.',
  mapLayersHint: 'The selected area is converted into a KarmaWorld protection and sent through telnet if configured.',
  playerInfoOpenOnMap: 'Open info',
  claimType_normal_desc: 'Normal claim with no extra rules.',
  claimType_hostilefree_desc: 'Hostile-free area. Enemies despawn inside this protection.',
  claimType_notify_desc: 'Shows a message when entering and another when leaving the area.',
  claimType_command_desc: 'Runs one or more commands when a player enters the area.',
  claimType_leveled_desc: 'Like a normal claim, but limited by top and bottom height.',
  claimType_reversed_desc: 'Jail-like area. An allowed player cannot leave it.',
  claimType_timed_desc: 'Temporary protection that disappears after a number of hours.',
  claimType_portal_desc: 'Teleports the player to specific coordinates.',
  claimType_openhours_desc: 'The area is only active during the chosen hours.',
  claimType_playerlevel_desc: 'Restricts or grants access by player level.',
  claimType_lcbfree_desc: 'Controls whether land claim blocks can be placed inside.',
  claimType_antiblock_desc: 'Prevents specific configured blocks from being placed.',
  claimType_reset_desc: 'Reset claim with no extra parameters.',
  claimType_problock_desc: 'Only configured blocks are allowed inside the area.',
  claimType_landclaim_desc: 'Only owners, whitelist and allowed accesslevel can build inside.',
  claimType_resetregion_desc: 'Intended for regions that reset.',
  noIp: 'No IP',
  selectionCoords: 'Coordinates',
  commandPreview: 'Preview'
});

state.playerInfoIndex = null;
state.claimSelectMode = false;
state.claimSelection = null;
state.claimDrag = null;
state.claimForm = null;
state.uiSnapshot = null;

const CLAIM_TYPES = {
  normal: { extra: [], quote: false },
  hostilefree: { extra: [], quote: false },
  notify: { extra: ['enterText','exitText'], quote: false },
  command: { extra: ['commandToRun'], quote: true },
  leveled: { extra: ['yTop','yBottom'], quote: true },
  reversed: { extra: [], quote: false },
  timed: { extra: ['hoursBeforeVanish'], quote: false },
  portal: { extra: ['stepheight','destX','destY','destZ'], quote: true },
  openhours: { extra: ['openHour','closeHour'], quote: true },
  playerlevel: { extra: ['playerLevelExpr'], quote: true },
  lcbfree: { extra: [], quote: false },
  antiblock: { extra: ['forbiddenBlocks'], quote: true },
  reset: { extra: [], quote: false },
  problock: { extra: ['allowedBlocks'], quote: true },
  landclaim: { extra: [], quote: false },
  resetregion: { extra: [], quote: false }
};

function ensureModalRoot() {
  let root = document.getElementById('modalRoot');
  if (!root) {
    root = document.createElement('div');
    root.id = 'modalRoot';
    root.className = 'modal-root hidden';
    document.body.appendChild(root);
  }
  return root;
}

function openModal(title, contentHtml, footerHtml = '') {
  const root = ensureModalRoot();
  root.innerHTML = `
    <div class="modal-backdrop" onclick="closeModal(event)"></div>
    <div class="modal-card card" role="dialog" aria-modal="true">
      <div class="modal-header">
        <h3>${escapeHtml(title)}</h3>
        <button class="small-btn" onclick="closeModal()">×</button>
      </div>
      <div class="modal-body">${contentHtml}</div>
      <div class="modal-footer">${footerHtml || `<button class="btn" onclick="closeModal()">${t('close')}</button>`}</div>
    </div>`;
  root.classList.remove('hidden');
}

function closeModal(event) {
  if (event && event.target && !event.target.classList.contains('modal-backdrop')) return;
  const root = ensureModalRoot();
  root.classList.add('hidden');
  root.innerHTML = '';
}


function kwEditableIdentity(el, index) {
  if (!el) return `idx:${index}`;
  if (el.id) return `id:${el.id}`;
  const ds = el.dataset || {};
  if (ds.collection && ds.index !== undefined && ds.key) return `collection:${ds.collection}:${ds.index}:${ds.key}`;
  if (ds.taskIndex !== undefined && ds.key) return `task:${ds.taskIndex}:${ds.key}`;
  if (ds.storeBlock && ds.key) return `store:${ds.storeBlock}:${ds.key}:${index}`;
  if (ds.key) return `data-key:${ds.key}:${index}`;
  if (el.name) return `name:${el.name}:${index}`;
  if (el.placeholder) return `placeholder:${el.placeholder}:${index}`;
  return `idx:${index}`;
}

function kwCaptureFormDraft(root) {
  const scope = root || document.getElementById('view') || document.body;
  const nodes = Array.from(scope.querySelectorAll('input, textarea, select'));
  const fields = nodes.map((el, index) => {
    if (String(el.type || '').toLowerCase() === 'file') return null;
    return {
      key: kwEditableIdentity(el, index),
      tag: (el.tagName || '').toLowerCase(),
      type: String(el.type || '').toLowerCase(),
      value: el.value,
      checked: !!el.checked,
      selectionStart: typeof el.selectionStart === 'number' ? el.selectionStart : null,
      selectionEnd: typeof el.selectionEnd === 'number' ? el.selectionEnd : null,
    };
  }).filter(Boolean);
  const active = document.activeElement;
  const activeIndex = active && nodes.includes(active) ? nodes.indexOf(active) : -1;
  return {
    fields,
    activeKey: activeIndex >= 0 ? kwEditableIdentity(active, activeIndex) : null,
  };
}

function kwRestoreFormDraft(draft, root) {
  if (!draft || !Array.isArray(draft.fields)) return;
  const scope = root || document.getElementById('view') || document.body;
  const nodes = Array.from(scope.querySelectorAll('input, textarea, select'));
  const map = new Map();
  nodes.forEach((el, index) => map.set(kwEditableIdentity(el, index), el));
  for (const row of draft.fields) {
    const el = map.get(row.key);
    if (!el) continue;
    try {
      if (row.type === 'checkbox' || row.type === 'radio') {
        el.checked = !!row.checked;
      } else {
        el.value = row.value ?? '';
      }
    } catch (_) {}
  }
  if (draft.activeKey && map.has(draft.activeKey)) {
    const activeEl = map.get(draft.activeKey);
    try {
      activeEl.focus({ preventScroll: true });
      if (typeof draft.fields.find(x => x.key === draft.activeKey)?.selectionStart === 'number' && typeof activeEl.setSelectionRange === 'function') {
        const row = draft.fields.find(x => x.key === draft.activeKey);
        activeEl.setSelectionRange(row.selectionStart, row.selectionEnd ?? row.selectionStart);
      }
    } catch (_) {}
  }
}

function captureUiState() {
  const scrollEl = document.scrollingElement || document.documentElement || document.body;
  return {
    scrollY: scrollEl ? scrollEl.scrollTop : (window.scrollY || document.documentElement.scrollTop || 0),
    realMapScrollLeft: document.getElementById('realMapScroll')?.scrollLeft || 0,
    realMapScrollTop: document.getElementById('realMapScroll')?.scrollTop || 0,
    mapSideScrollTop: document.querySelector('.map-side-list')?.scrollTop || 0,
    liveMapAnchorTop: document.getElementById('liveMapAnchor')?.getBoundingClientRect().top ?? null,
    formDraft: kwCaptureFormDraft(document.getElementById('view'))
  };
}

function restoreUiState(snapshot) {
  if (!snapshot) return;
  const apply = () => {
    const scrollEl = document.scrollingElement || document.documentElement || document.body;
    const top = Number(snapshot.scrollY || 0);
    if (scrollEl) scrollEl.scrollTop = top;
    document.documentElement.scrollTop = top;
    document.body.scrollTop = top;
    window.scrollTo({ top, left: 0, behavior: 'auto' });
    const map = document.getElementById('realMapScroll');
    if (map) {
      map.scrollLeft = snapshot.realMapScrollLeft || 0;
      map.scrollTop = snapshot.realMapScrollTop || 0;
    }
    const side = document.querySelector('.map-side-list');
    if (side) side.scrollTop = snapshot.mapSideScrollTop || 0;
    if (snapshot.liveMapAnchorTop !== null && snapshot.liveMapAnchorTop !== undefined) {
      const anchor = document.getElementById('liveMapAnchor');
      if (anchor) {
        const delta = anchor.getBoundingClientRect().top - snapshot.liveMapAnchorTop;
        if (Math.abs(delta) > 1) window.scrollBy({ top: delta, left: 0, behavior: 'auto' });
      }
    }
    kwRestoreFormDraft(snapshot.formDraft, document.getElementById('view'));
  };
  requestAnimationFrame(() => {
    apply();
    requestAnimationFrame(apply);
    [40, 120, 240, 480, 800].forEach(ms => setTimeout(apply, ms));
  });
}

refreshState = async function(silent = false) {
  const snapshot = silent ? captureUiState() : null;
  try {
    const [st, collections] = await Promise.all([api('/api/state'), api('/api/collections')]);
    state.state = st.data;
    state.collections = collections.data;
    state.lang = (state.state.config.language || state.lang || 'es');
    render(true);
    restoreUiState(snapshot);
    if (!silent) toast(t('panelUpdated'));
  } catch (err) {
    if (!silent) toast(err.message, true);
  }
};

refreshPlayers = async function(silent = false) {
  const snapshot = captureUiState();
  try {
    const res = await api('/api/players/refresh', 'POST', {});
    if (!silent) toast(res.message);
    await refreshState(true);
    restoreUiState(snapshot);
  } catch (err) {
    if (!silent) toast(err.message, true);
  }
};

function selectionToRect(selection) {
  if (!selection) return null;
  return {
    minX: Math.min(selection.x1, selection.x2),
    maxX: Math.max(selection.x1, selection.x2),
    minZ: Math.min(selection.z1, selection.z2),
    maxZ: Math.max(selection.z1, selection.z2)
  };
}

function selectionBlockCount(selection) {
  const rect = selectionToRect(selection);
  if (!rect) return 0;
  return (Math.abs(Math.round(rect.maxX) - Math.round(rect.minX)) + 1) * (Math.abs(Math.round(rect.maxZ) - Math.round(rect.minZ)) + 1);
}

function selectionStyle(selection, bounds) {
  const rect = selectionToRect(selection);
  if (!rect || !bounds) return 'display:none;';
  const left = ((rect.minX - bounds.minX) / (bounds.maxX - bounds.minX)) * 100;
  const right = ((rect.maxX - bounds.minX) / (bounds.maxX - bounds.minX)) * 100;
  const top = ((bounds.maxZ - rect.maxZ) / (bounds.maxZ - bounds.minZ)) * 100;
  const bottom = ((bounds.maxZ - rect.minZ) / (bounds.maxZ - bounds.minZ)) * 100;
  return `left:${left}%;top:${top}%;width:${Math.max(0.5, right-left)}%;height:${Math.max(0.5, bottom-top)}%;`;
}

function overlayPointToWorld(clientX, clientY) {
  const overlay = document.getElementById('mapOverlay');
  const bounds = getConfiguredMapBounds();
  if (!overlay || !bounds) return null;
  const rect = overlay.getBoundingClientRect();
  if (!rect.width || !rect.height) return null;
  const relX = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
  const relY = Math.min(1, Math.max(0, (clientY - rect.top) / rect.height));
  return {
    x: Math.round(bounds.minX + relX * (bounds.maxX - bounds.minX)),
    z: Math.round(bounds.maxZ - relY * (bounds.maxZ - bounds.minZ))
  };
}

function toggleSelectionMode() {
  state.claimSelectMode = !state.claimSelectMode;
  if (!state.claimSelectMode) state.claimDrag = null;
  toast(state.claimSelectMode ? t('mapSelectionModeOn') : t('mapSelectionModeOff'));
  render();
}

function clearClaimSelection() {
  state.claimSelection = null;
  state.claimDrag = null;
  render();
}

function startMapSelection(event) {
  if (!state.claimSelectMode) return;
  const point = overlayPointToWorld(event.clientX, event.clientY);
  if (!point) return;
  state.claimDrag = { start: point };
  state.claimSelection = { x1: point.x, z1: point.z, x2: point.x, z2: point.z };
  updateSelectionVisuals();
}

function moveMapSelection(event) {
  handleMapMouse(event);
  if (!state.claimSelectMode || !state.claimDrag) return;
  const point = overlayPointToWorld(event.clientX, event.clientY);
  if (!point) return;
  state.claimSelection = { x1: state.claimDrag.start.x, z1: state.claimDrag.start.z, x2: point.x, z2: point.z };
  updateSelectionVisuals();
}

function endMapSelection(event) {
  if (!state.claimSelectMode || !state.claimDrag) return;
  const point = overlayPointToWorld(event.clientX, event.clientY);
  if (point) state.claimSelection = { x1: state.claimDrag.start.x, z1: state.claimDrag.start.z, x2: point.x, z2: point.z };
  state.claimDrag = null;
  updateSelectionVisuals();
}

function updateSelectionVisuals() {
  const bounds = getConfiguredMapBounds();
  const box = document.getElementById('claimSelectionBox');
  const info = document.getElementById('claimSelectionInfo');
  if (box) box.style.cssText = selectionStyle(state.claimSelection, bounds);
  if (info) {
    if (!state.claimSelection) info.innerHTML = `<div class="empty-note">${t('noSelection')}<br>${t('claimSelectionHint')}</div>`;
    else {
      const rect = selectionToRect(state.claimSelection);
      info.innerHTML = `
        <div class="claim-selection-card">
          <div><strong>${t('selectionCoords')}:</strong> X ${rect.minX} → ${rect.maxX} · Z ${rect.minZ} → ${rect.maxZ}</div>
          <div><strong>${t('selectionBlocks')}:</strong> ${selectionBlockCount(state.claimSelection)} ${t('blocks')}</div>
        </div>`;
    }
  }
}

window.addEventListener('mouseup', endMapSelection);

function showPlayerInfo(index) {
  const player = (state.state?.players_cache || [])[index];
  if (!player) return toast(t('invalidPlayer'), true);
  const title = `${t('playerInfoTitle')} · ${playerDisplayName(player)}`;
  const body = `
    <div class="player-info-grid">
      <div><strong>${t('playerName')}</strong><span>${escapeHtml(playerDisplayName(player))}</span></div>
      <div><strong>${t('slot')}</strong><span>${escapeHtml(player.slot || '-')}</span></div>
      <div><strong>${t('entityId')}</strong><span>${escapeHtml(player.entityid || '-')}</span></div>
      <div><strong>${t('steamId')}</strong><span>${escapeHtml(playerSteamText(player))}</span></div>
      <div><strong>${t('ipAddress')}</strong><span>${escapeHtml(player.ip || t('noIp'))}</span></div>
      <div><strong>${t('position')}</strong><span>${escapeHtml(playerPosText(player))}</span></div>
      <div class="player-info-raw"><strong>${t('rawLine')}</strong><pre>${escapeHtml(player.raw || '-')}</pre></div>
    </div>`;
  const footer = `
    <button class="btn" onclick="focusPlayerOnMap(${index});closeModal()">${t('viewOnMap')}</button>
    <button class="btn" onclick="copyPlayerField(${index},'name')">${t('copyName')}</button>
    <button class="btn" onclick="copyPlayerField(${index},'steam')">${t('copySteam')}</button>
    <button class="btn btn-danger" onclick="kickPlayer(${index});closeModal()">${t('kickPlayer')}</button>
    <button class="btn" onclick="closeModal()">${t('close')}</button>`;
  openModal(title, body, footer);
}

function claimFieldValue(key, fallback='') {
  return escapeHtml((state.claimForm && state.claimForm[key]) ?? fallback);
}

function ensureClaimForm() {
  if (state.claimForm) return;
  state.claimForm = {
    name: 'KarmaWorld_claim',
    accesslevel: '0',
    type: 'landclaim',
    enterText: 'Entrando en una zona',
    exitText: 'Saliendo de una zona',
    commandToRun: "say 'Welcome to the claim!'",
    yTop: '120',
    yBottom: '40',
    hoursBeforeVanish: '12',
    stepheight: '64',
    destX: '50',
    destY: '0',
    destZ: '-80',
    openHour: '9',
    closeHour: '17',
    playerLevelExpr: '<=20',
    allowedBlocks: 'allowed1;allowed2',
    forbiddenBlocks: 'forbidden1;forbidden2'
  };
}

function claimTypeOptions() {
  return Object.keys(CLAIM_TYPES).map(key => `<option value="${key}" ${state.claimForm?.type === key ? 'selected' : ''}>${escapeHtml(key)}</option>`).join('');
}

function claimDescription(type) {
  return t(`claimType_${type}_desc`);
}

function claimTypeExtraFields(type) {
  const f = state.claimForm || {};
  const input = (key, label, val='') => `<div class="field"><label>${label}</label><input data-claim-field="${key}" value="${escapeHtml(f[key] ?? val)}" oninput="updateClaimField('${key}', this.value)"></div>`;
  const textarea = (key, label, val='') => `<div class="field"><label>${label}</label><textarea data-claim-field="${key}" oninput="updateClaimField('${key}', this.value)">${escapeHtml(f[key] ?? val)}</textarea></div>`;
  switch(type) {
    case 'notify': return input('enterText', t('claimEnterText')) + input('exitText', t('claimExitText'));
    case 'command': return textarea('commandToRun', t('claimCommandToRun'));
    case 'leveled': return input('yTop', t('claimYTop')) + input('yBottom', t('claimYBottom'));
    case 'timed': return input('hoursBeforeVanish', t('claimHoursBeforeVanish'));
    case 'portal': return input('stepheight', t('claimStepHeight')) + input('destX', t('claimDestX')) + input('destY', t('claimDestY')) + input('destZ', t('claimDestZ'));
    case 'openhours': return input('openHour', t('claimOpenHour')) + input('closeHour', t('claimCloseHour'));
    case 'playerlevel': return input('playerLevelExpr', t('claimPlayerLevelExpr'));
    case 'antiblock': return input('forbiddenBlocks', t('claimForbiddenBlocks'));
    case 'problock': return input('allowedBlocks', t('claimAllowedBlocks'));
    default: return '';
  }
}

function buildClaimTypeParam() {
  ensureClaimForm();
  const type = state.claimForm.type;
  switch(type) {
    case 'normal':
    case 'hostilefree':
    case 'reversed':
    case 'lcbfree':
    case 'reset':
    case 'landclaim':
    case 'resetregion':
      return type === 'normal' ? '' : type;
    case 'notify':
      return `notify:${state.claimForm.enterText || ''}:${state.claimForm.exitText || ''}`;
    case 'command':
      return `command:${state.claimForm.commandToRun || ''}`;
    case 'leveled':
      return `leveled:${state.claimForm.yTop || '120'},${state.claimForm.yBottom || '40'}`;
    case 'timed':
      return `timed:${state.claimForm.hoursBeforeVanish || '12'}`;
    case 'portal':
      return `portal:${state.claimForm.stepheight || '64'}:${state.claimForm.destX || '0'},${state.claimForm.destY || '0'},${state.claimForm.destZ || '0'}`;
    case 'openhours':
      return `openhours:${state.claimForm.openHour || '9'}-${state.claimForm.closeHour || '17'}`;
    case 'playerlevel':
      return `playerlevel:${state.claimForm.playerLevelExpr || '<=20'}`;
    case 'antiblock':
      return `antiblock:${state.claimForm.forbiddenBlocks || ''}`;
    case 'problock':
      return `problock:${state.claimForm.allowedBlocks || ''}`;
    default:
      return type;
  }
}

function buildClaimCommand() {
  const rect = selectionToRect(state.claimSelection);
  if (!rect) return '';
  ensureClaimForm();
  const access = String(state.claimForm.accesslevel || '0').trim() || '0';
  const name = String(state.claimForm.name || 'KarmaWorld_claim').trim().replace(/\s+/g, '_');
  const typeParam = buildClaimTypeParam();
  let cmd = `ccc add ${name} ${Math.round(rect.minX)} ${Math.round(rect.maxZ)} ${Math.round(rect.maxX)} ${Math.round(rect.minZ)} ${access}`;
  if (typeParam) {
    if (CLAIM_TYPES[state.claimForm.type]?.quote) cmd += ` "${typeParam.replace(/"/g, "'")}"`;
    else cmd += ` ${typeParam}`;
  }
  return cmd;
}

function updateClaimField(key, value) {
  ensureClaimForm();
  state.claimForm[key] = value;
  const preview = document.getElementById('claimCommandPreview');
  if (preview) preview.textContent = buildClaimCommand();
}

function changeClaimType(value) {
  ensureClaimForm();
  state.claimForm.type = value;
  openClaimModal();
}

function claimFormHtml() {
  ensureClaimForm();
  const rect = selectionToRect(state.claimSelection);
  const desc = claimDescription(state.claimForm.type);
  return `
    <div class="claim-modal-grid">
      <div class="field"><label>${t('claimName')}</label><input value="${claimFieldValue('name','KarmaWorld_claim')}" oninput="updateClaimField('name', this.value)"></div>
      <div class="field"><label>${t('claimAccesslevel')}</label><input value="${claimFieldValue('accesslevel','0')}" oninput="updateClaimField('accesslevel', this.value)"></div>
      <div class="field claim-type-field"><label>${t('claimType')}</label><select onchange="changeClaimType(this.value)">${claimTypeOptions()}</select></div>
      <div class="claim-desc"><strong>${t('claimDescription')}:</strong> ${escapeHtml(desc)}</div>
      <div class="claim-selection-card"><strong>${t('selectionCoords')}:</strong> X ${rect.minX} → ${rect.maxX} · Z ${rect.minZ} → ${rect.maxZ}<br><strong>${t('selectionBlocks')}:</strong> ${selectionBlockCount(state.claimSelection)} ${t('blocks')}</div>
      ${claimTypeExtraFields(state.claimForm.type)}
      <div class="field claim-preview"><label>${t('commandPreview')}</label><pre id="claimCommandPreview">${escapeHtml(buildClaimCommand())}</pre></div>
    </div>`;
}

function openClaimModal() {
  if (!state.claimSelection) return toast(t('claimNoSelection'), true);
  ensureClaimForm();
  const footer = `
    <button class="btn" onclick="copyClaimCommand()">${t('claimCopy')}</button>
    <button class="btn btn-primary" onclick="sendClaimCommand()">${t('claimSend')}</button>
    <button class="btn" onclick="closeModal()">${t('close')}</button>`;
  openModal(t('claimCreateTitle'), claimFormHtml(), footer);
}

async function copyClaimCommand() {
  const cmd = buildClaimCommand();
  await copyToClipboard(cmd);
  toast(t('claimCopied'));
}

async function sendClaimCommand() {
  const snapshot = captureUiState();
  try {
    const command = buildClaimCommand();
    if (!command) return toast(t('claimNoSelection'), true);
    const res = await api('/api/telnet/send', 'POST', { command });
    toast(res.message || t('claimSent'));
    closeModal();
    if (state.section === 'liveMap') {
      await refreshPlayers(true);
      restoreUiState(snapshot);
    } else {
      await refreshState(true);
    }
  } catch (err) {
    toast(err.message, true);
  }
}

views.players = function() {
  const players = state.state.players_cache || [];
  return `
    <div class="card panel">
      <h2>${t('players')}</h2>
      <div class="inline-actions" style="margin-bottom:12px">
        <button class="btn" onclick="refreshPlayers()">${t('refreshPlayers')}</button>
        <span class="empty-note">${t('liveUpdating')} · ${t('lastRefresh')}: ${escapeHtml(state.state.last_players_refresh || '-')}</span>
        <span class="empty-note">${t('clickPlayerNameInfo')}</span>
      </div>
      ${players.length ? `
        <table class="table players-table">
          <thead><tr><th>${t('slot')}</th><th>${t('playerName')}</th><th>${t('entityId')}</th><th>${t('steamId')}</th><th>${t('position')}</th><th>${t('options')}</th></tr></thead>
          <tbody>
            ${players.map((p, index) => `
              <tr>
                <td>${escapeHtml(p.slot || '-')}</td>
                <td><button class="linkish-btn" type="button" onclick="event.preventDefault();event.stopPropagation();showPlayerInfo(${index})">${escapeHtml(playerDisplayName(p))}</button></td>
                <td>${escapeHtml(p.entityid || '-')}</td>
                <td>${escapeHtml(playerSteamText(p))}</td>
                <td>${escapeHtml(playerPosText(p))}</td>
                <td>
                  <button class="small-btn" onclick="togglePlayerMenu(${index})">${t('options')}</button>
                  ${state.playerMenuIndex === index ? `<div class="player-menu"><button class="small-btn" type="button" onclick="event.preventDefault();event.stopPropagation();showPlayerInfo(${index})">${t('playerInfoOpenOnMap')}</button><button class="small-btn" type="button" onclick="event.preventDefault();event.stopPropagation();copyPlayerField(${index},'name')">${t('copyName')}</button><button class="small-btn" type="button" onclick="event.preventDefault();event.stopPropagation();copyPlayerField(${index},'id')">${t('copyId')}</button><button class="small-btn" type="button" onclick="event.preventDefault();event.stopPropagation();copyPlayerField(${index},'steam')">${t('copySteam')}</button><button class="small-btn" type="button" onclick="event.preventDefault();event.stopPropagation();copyPlayerField(${index},'raw')">${t('copyRaw')}</button><button class="small-btn danger" type="button" onclick="event.preventDefault();event.stopPropagation();kickPlayer(${index})">${t('kickPlayer')}</button></div>` : ''}
                </td>
              </tr>`).join('')}
          </tbody>
        </table>` : `<div class="empty-note">${t('noPlayerData')}<br>${t('clickRefreshIfNeeded')}</div>`}
    </div>`;
};

views.liveMap = function() {
  const allPlayers = (state.state.players_cache || []).map((p, sourceIndex) => ({...p, sourceIndex}));
  const players = allPlayers.filter(p => typeof p.x === 'number' && typeof p.z === 'number' && !Number.isNaN(p.x) && !Number.isNaN(p.z));
  const bounds = getConfiguredMapBounds();
  const mapImagePath = state.state.config.map_image_path || '';
  const focused = state.mapFocusIndex !== null ? players.find(p => p.sourceIndex === state.mapFocusIndex) : null;
  const rect = selectionToRect(state.claimSelection);
  return `
    <div class="grid">
      <div class="card panel">
        <div style="display:flex;justify-content:space-between;gap:12px;align-items:center;flex-wrap:wrap;margin-bottom:12px">
          <h2 style="margin:0">${t('liveMap')}</h2>
          <div class="inline-actions">
            <button class="btn" onclick="refreshPlayers()">${t('refreshPlayers')}</button>
            <button class="btn ${state.claimSelectMode ? 'btn-primary' : ''}" onclick="toggleSelectionMode()">${state.claimSelectMode ? t('stopSelecting') : t('selectArea')}</button>
            <button class="btn" onclick="clearClaimSelection()">${t('clearSelection')}</button>
            <button class="btn btn-primary" onclick="openClaimModal()">${t('createProtection')}</button>
            <button class="btn" onclick="zoomMap(0.2)">${t('mapZoomIn')}</button>
            <button class="btn" onclick="zoomMap(-0.2)">${t('mapZoomOut')}</button>
            <button class="btn" onclick="resetMapZoom()">${t('mapResetZoom')}</button>
            <button class="btn" onclick="clearMapFocus()">${t('mapViewAll')}</button>
          </div>
        </div>
        <div class="help-text" style="margin-bottom:14px">${t('protectInMap')}<br>${t('mapLayersHint')}</div>
        ${mapImagePath && bounds ? `
          <div class="live-map-real-layout">
            <aside class="live-map-side card">
              <h3>${t('mapPlayersPanel')}</h3>
              <div class="empty-note">${t('liveUpdating')} · ${t('lastRefresh')}: ${escapeHtml(state.state.last_players_refresh || '-')}</div>
              <div id="claimSelectionInfo">${rect ? `<div class="claim-selection-card"><div><strong>${t('selectionCoords')}:</strong> X ${rect.minX} → ${rect.maxX} · Z ${rect.minZ} → ${rect.maxZ}</div><div><strong>${t('selectionBlocks')}:</strong> ${selectionBlockCount(state.claimSelection)} ${t('blocks')}</div></div>` : `<div class="empty-note">${t('noSelection')}<br>${t('claimSelectionHint')}</div>`}</div>
              <div class="map-side-list">
                ${players.length ? players.map((p) => `
                  <div class="map-side-player ${focused && focused.sourceIndex === p.sourceIndex ? 'active' : ''}">
                    <button class="linkish-btn" onclick="showPlayerInfo(${p.sourceIndex})">${escapeHtml(playerDisplayName(p))}</button>
                    <span>${escapeHtml(playerPosText(p))}</span>
                    <div class="player-menu compact"><button class="small-btn" onclick="focusPlayerOnMap(${p.sourceIndex})">${t('mapFocusPlayer')}</button><button class="small-btn" onclick="showPlayerInfo(${p.sourceIndex})">${t('playerInfoOpenOnMap')}</button></div>
                  </div>`).join('') : `<div class="empty-note">${t('mapNoCoords')}</div>`}
              </div>
            </aside>
            <div class="live-map-main card">
              <div class="real-map-toolbar">
                <div class="empty-note">${t('mapImage')}: ${escapeHtml(mapImagePath.split(/[\/]/).pop() || '')}</div>
                <div class="empty-note" id="mapMousePos">${t('mousePos')}: ${escapeHtml(state.mapMouseText || '-')}</div>
              </div>
              <div class="real-map-scroll" id="realMapScroll">
                <div class="real-map-stage" style="transform:scale(${state.mapZoom}); transform-origin: top left;">
                  <div class="real-map-frame">
                    <img src="/api/map/image?v=${encodeURIComponent(String(state.mapImageVersion))}" class="real-map-image" alt="mapa">
                    <div class="real-map-overlay ${state.claimSelectMode ? 'selecting' : ''}" id="mapOverlay" onmousedown="startMapSelection(event)" onmousemove="moveMapSelection(event)" onmouseleave="clearMapMouse()">
                      <div id="claimSelectionBox" class="claim-selection-box" style="${selectionStyle(state.claimSelection, bounds)}"></div>
                      ${players.map((p) => `<button class="map-player map-player-real ${focused && focused.sourceIndex === p.sourceIndex ? 'focused' : ''}" data-map-focused="${focused && focused.sourceIndex === p.sourceIndex ? 'true' : 'false'}" title="${escapeHtml(playerDisplayName(p))} · ${escapeHtml(playerPosText(p))}" style="${playerMapStyleFromBounds(p, bounds)}" onclick="showPlayerInfo(${p.sourceIndex})"><span>${escapeHtml(playerDisplayName(p).slice(0, 16))}</span></button>`).join('')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>` : `<div class="empty-note">${t('mapNotConfigured')}<br>${t('mapUseSameWorld')}</div>`}
      </div>
    </div>`;
};




Object.assign(T.es, {
  addRestartTask: 'Añadir reinicio',
  addBackupTask: 'Añadir backup',
  saveTasks: 'Guardar tareas',
  taskType: 'Tipo',
  taskRestart: 'Reinicio',
  taskBackup: 'Backup',
  taskHelpText: 'Puedes añadir varios reinicios y backups. El cron usa formato minuto hora día mes semana. Ejemplos: 0 6 * * * o 0 */12 * * *.',
  noTasksYet: 'No hay tareas todavía.',
  refreshList: 'Actualizar lista',
  backupModified: 'Fecha',
  backupSize: 'Tamaño',
  backupActions: 'Acciones',
  restoreBackup: 'Restaurar',
    deleteBackup: 'Borrar',
  restoreBackupConfirm: 'Se restaurará este backup sobre la carpeta del servidor. El servidor debe estar parado. ¿Continuar?',
  backupListLoaded: 'Lista de backups actualizada.',
  backupRestored: 'Backup restaurado.',
  backupDeleted: 'Backup borrado.',
  backupListHelp: 'Aquí ves las últimas copias ZIP. Puedes restaurarlas con el servidor parado, borrarlas o copiar su ruta.',
  noBackupsYet: 'Todavía no hay backups.',
  copyPath: 'Copiar ruta',
  helpTasksTitle: 'Tareas programadas',
  helpTasksText: 'Añade tantos reinicios y backups como quieras. Usa el interruptor Activo para habilitar o deshabilitar cada tarea. Cron típico: 0 6 * * * (cada día a las 06:00) o 0 */12 * * * (cada 12 horas).',
  helpBackupsTitle: 'Backups',
  helpBackupsText: 'La pestaña Backups muestra las copias ZIP más recientes. Puedes crear una nueva, copiar su ruta o restaurarla sobre la carpeta del servidor con el servidor parado.'
});
Object.assign(T.en, {
  addRestartTask: 'Add restart',
  addBackupTask: 'Add backup',
  saveTasks: 'Save tasks',
  taskType: 'Type',
  taskRestart: 'Restart',
  taskBackup: 'Backup',
  taskHelpText: 'You can add multiple restarts and backups. Cron uses minute hour day month weekday. Examples: 0 6 * * * or 0 */12 * * *.',
  noTasksYet: 'There are no tasks yet.',
  refreshList: 'Refresh list',
  backupModified: 'Date',
  backupSize: 'Size',
  backupActions: 'Actions',
  restoreBackup: 'Restore',
    deleteBackup: 'Delete',
  restoreBackupConfirm: 'This backup will be restored over the server folder. The server must be stopped. Continue?',
  backupListLoaded: 'Backup list refreshed.',
  backupRestored: 'Backup restored.',
  backupDeleted: 'Backup deleted.',
  backupListHelp: 'Here you can see the latest ZIP copies. You can restore them with the server stopped, delete them or copy their path.',
  noBackupsYet: 'There are no backups yet.',
  copyPath: 'Copy path',
  helpTasksTitle: 'Scheduled tasks',
  helpTasksText: 'Add as many restarts and backups as you want. Use the Active toggle to enable or disable each task. Typical cron: 0 6 * * * (every day at 06:00) or 0 */12 * * * (every 12 hours).',
  helpBackupsTitle: 'Backups',
  helpBackupsText: 'The Backups tab shows the most recent ZIP copies. You can create a new one, copy its path, or restore it over the server folder with the server stopped.'
});
const _translateServerMessageBase_v13 = translateServerMessage;
translateServerMessage = function(msg) {
  if (state.lang === 'es') return msg || '';
  const extra = {
    'Detén el servidor antes de restaurar un backup.': 'Stop the server before restoring a backup.',
    'El backup indicado no existe.': 'The selected backup does not exist.',
    'Lista de backups actualizada.': 'Backup list refreshed.'
  };
  return extra[msg] || _translateServerMessageBase_v13(msg);
};


/* ===== v33 patch: KarmaWorld live map right dock ===== */
Object.assign(T.es, {
  claimCreateTitle: 'Crear protección KarmaWorld',
  mapLayersHint: 'La zona seleccionada se convierte en una protección KarmaWorld y se envía por telnet si está configurado.',
  claimDockHelp: 'Activa reglas del claim, controla capas del mapa y revisa el comando antes de enviarlo.',
  claimOptionsTitle: 'Opciones del claim',
  mapLayersTitle: 'Capas del mapa',
  claimPreviewTitle: 'Vista previa',
  claimCommandInternal: 'Comando interno',
  claimCommandMissingSelection: 'Selecciona una zona para generar el comando.',
  activeFlags: 'Opciones activas',
  resetOptions: 'Restablecer opciones',
  resetLayers: 'Restablecer capas',
  sendNow: 'Enviar ahora',
  noActiveFlags: 'Ninguna',
  mapLayerOnlinePlayers: 'Jugadores en línea',
  mapLayerLandClaimBlocks: 'Bloques de land claim',
  mapLayerHomes: 'Casas',
  mapLayerVehicles: 'Vehículos',
  mapLayerMissionPois: 'POIs de misión',
  mapLayerClaimedMissionPois: 'POIs de misión reclamados',
  mapLayerTraders: 'Comerciantes',
  mapLayerPois: 'POIs',
  mapLayerRegions: 'Regiones',
  mapLayerNoData: 'Sin datos',
  mapLayerVisible: 'Visible',
  mapLayerHidden: 'Oculta',
  mapLayerPlayersData: 'Marcadores de jugadores',
  mapLayerSelectionData: 'Selección actual',
  mapLayerRegionsData: 'Cuadrícula regional',
  claimNoExtraNeeded: 'Esta opción no necesita parámetros extra.',
  regionGridNote: 'Cuadrícula regional de 512 bloques.',
  claimOption_hostilefree: 'hostilefree',
  claimOption_notify: 'notify',
  claimOption_command: 'command',
  claimOption_leveled: 'leveled',
  claimOption_reversed: 'reversed',
  claimOption_normal: 'normal',
  claimOption_timed: 'timed',
  claimOption_portal: 'portal',
  claimOption_openhours: 'openhours',
  claimOption_playerlevel: 'playerlevel',
  claimOption_lcbfree: 'lcbfree',
  claimOption_antiblock: 'antiblock',
  claimOption_reset: 'reset',
  claimOption_problock: 'problock',
  claimOption_landclaim: 'landclaim',
  claimOption_resetregion: 'resetregion'
});
Object.assign(T.en, {
  claimCreateTitle: 'Create KarmaWorld protection',
  mapLayersHint: 'The selected area is converted into a KarmaWorld protection and sent through telnet if configured.',
  claimDockHelp: 'Enable claim rules, control map layers and review the command before sending it.',
  claimOptionsTitle: 'Claim options',
  mapLayersTitle: 'Map layers',
  claimPreviewTitle: 'Preview',
  claimCommandInternal: 'Internal command',
  claimCommandMissingSelection: 'Select an area to generate the command.',
  activeFlags: 'Active options',
  resetOptions: 'Reset options',
  resetLayers: 'Reset layers',
  sendNow: 'Send now',
  noActiveFlags: 'None',
  mapLayerOnlinePlayers: 'Online players',
  mapLayerLandClaimBlocks: 'Land claim blocks',
  mapLayerHomes: 'Homes',
  mapLayerVehicles: 'Vehicles',
  mapLayerMissionPois: 'Mission POIs',
  mapLayerClaimedMissionPois: 'Claimed mission POIs',
  mapLayerTraders: 'Traders',
  mapLayerPois: 'POIs',
  mapLayerRegions: 'Regions',
  mapLayerNoData: 'No data',
  mapLayerVisible: 'Visible',
  mapLayerHidden: 'Hidden',
  mapLayerPlayersData: 'Player markers',
  mapLayerSelectionData: 'Current selection',
  mapLayerRegionsData: 'Region grid',
  claimNoExtraNeeded: 'This option does not need extra parameters.',
  regionGridNote: '512-block region grid.',
  claimOption_hostilefree: 'hostilefree',
  claimOption_notify: 'notify',
  claimOption_command: 'command',
  claimOption_leveled: 'leveled',
  claimOption_reversed: 'reversed',
  claimOption_normal: 'normal',
  claimOption_timed: 'timed',
  claimOption_portal: 'portal',
  claimOption_openhours: 'openhours',
  claimOption_playerlevel: 'playerlevel',
  claimOption_lcbfree: 'lcbfree',
  claimOption_antiblock: 'antiblock',
  claimOption_reset: 'reset',
  claimOption_problock: 'problock',
  claimOption_landclaim: 'landclaim',
  claimOption_resetregion: 'resetregion'
});

const KW_CLAIM_OPTION_ORDER = ['hostilefree','notify','command','leveled','reversed','normal','timed','portal','openhours','playerlevel','lcbfree','antiblock','reset','problock','landclaim','resetregion'];
const KW_CLAIM_FLAG_DEFAULTS = {
  hostilefree: false,
  notify: false,
  command: false,
  leveled: false,
  reversed: false,
  normal: false,
  timed: false,
  portal: false,
  openhours: false,
  playerlevel: false,
  lcbfree: false,
  antiblock: false,
  reset: false,
  problock: false,
  landclaim: true,
  resetregion: false
};
const KW_MAP_LAYER_DEFAULTS = {
  landClaimBlocks: true,
  onlinePlayers: true,
  homes: false,
  vehicles: false,
  missionPois: false,
  claimedMissionPois: false,
  traders: false,
  pois: false,
  regions: false
};
let kwPersistTimer = null;

function ensureKarmaWorldMapState() {
  if (!state.kwClaimStateInitialized) {
    const savedForm = (state.state && state.state.config && state.state.config.kw_claim_form) || {};
    state.claimForm = {
      name: 'KarmaWorld_claim',
      accesslevel: '0',
      enterText: 'Entrando en una zona',
      exitText: 'Saliendo de una zona',
      commandToRun: "say 'Welcome to the claim!'",
      yTop: '120',
      yBottom: '40',
      hoursBeforeVanish: '12',
      stepheight: '64',
      destX: '50',
      destY: '0',
      destZ: '-80',
      openHour: '9',
      closeHour: '17',
      playerLevelExpr: '<=20',
      allowedBlocks: 'allowed1;allowed2',
      forbiddenBlocks: 'forbidden1;forbidden2',
      ...(state.claimForm || {}),
      ...savedForm
    };
    state.kwClaimFlags = { ...KW_CLAIM_FLAG_DEFAULTS, ...((state.state && state.state.config && state.state.config.kw_claim_flags) || {}), ...(state.kwClaimFlags || {}) };
    state.kwMapLayers = { ...KW_MAP_LAYER_DEFAULTS, ...((state.state && state.state.config && state.state.config.kw_map_layers) || {}), ...(state.kwMapLayers || {}) };
    state.kwClaimStateInitialized = true;
  }
}

function scheduleKarmaWorldMapPersist() {
  clearTimeout(kwPersistTimer);
  kwPersistTimer = setTimeout(async () => {
    try {
      ensureKarmaWorldMapState();
      const payload = {
        kw_claim_flags: state.kwClaimFlags,
        kw_map_layers: state.kwMapLayers,
        kw_claim_form: state.claimForm
      };
      await api('/api/config/save', 'POST', payload);
      if (state.state && state.state.config) Object.assign(state.state.config, payload);
    } catch (_) {}
  }, 250);
}

function kwClaimLabel(flag) {
  return t(`claimOption_${flag}`);
}

function kwLayerLabel(key) {
  return t(`mapLayer${key.charAt(0).toUpperCase()}${key.slice(1)}`);
}

function kwSetClaimFlag(flag, checked) {
  ensureKarmaWorldMapState();
  state.kwClaimFlags[flag] = !!checked;
  scheduleKarmaWorldMapPersist();
  render();
}

function kwSetMapLayer(layer, checked) {
  ensureKarmaWorldMapState();
  state.kwMapLayers[layer] = !!checked;
  scheduleKarmaWorldMapPersist();
  render();
}

function kwUpdateClaimField(key, value) {
  ensureKarmaWorldMapState();
  state.claimForm[key] = value;
  scheduleKarmaWorldMapPersist();
  updateSelectionVisuals();
  const preview = document.getElementById('kwClaimCommandPreview');
  if (preview) preview.textContent = buildClaimCommand() || t('claimCommandMissingSelection');
  const active = document.getElementById('kwActiveFlagsText');
  if (active) active.textContent = kwActiveFlagsText();
}

function kwResetClaimOptions() {
  ensureKarmaWorldMapState();
  state.kwClaimFlags = { ...KW_CLAIM_FLAG_DEFAULTS };
  state.claimForm = {
    ...state.claimForm,
    name: 'KarmaWorld_claim',
    accesslevel: '0',
    enterText: 'Entrando en una zona',
    exitText: 'Saliendo de una zona',
    commandToRun: "say 'Welcome to the claim!'",
    yTop: '120',
    yBottom: '40',
    hoursBeforeVanish: '12',
    stepheight: '64',
    destX: '50',
    destY: '0',
    destZ: '-80',
    openHour: '9',
    closeHour: '17',
    playerLevelExpr: '<=20',
    allowedBlocks: 'allowed1;allowed2',
    forbiddenBlocks: 'forbidden1;forbidden2'
  };
  scheduleKarmaWorldMapPersist();
  render();
}

function kwResetMapLayers() {
  ensureKarmaWorldMapState();
  state.kwMapLayers = { ...KW_MAP_LAYER_DEFAULTS };
  scheduleKarmaWorldMapPersist();
  render();
}

function kwActiveFlags() {
  ensureKarmaWorldMapState();
  return KW_CLAIM_OPTION_ORDER.filter((flag) => state.kwClaimFlags[flag]);
}

function kwActiveFlagsText() {
  const active = kwActiveFlags();
  return active.length ? active.map(kwClaimLabel).join(', ') : t('noActiveFlags');
}

function kwClaimToken(flag) {
  ensureKarmaWorldMapState();
  switch(flag) {
    case 'hostilefree':
    case 'reversed':
    case 'normal':
    case 'lcbfree':
    case 'reset':
    case 'landclaim':
    case 'resetregion':
      return flag;
    case 'notify':
      return `notify:${state.claimForm.enterText || ''}:${state.claimForm.exitText || ''}`;
    case 'command':
      return `command:${state.claimForm.commandToRun || ''}`;
    case 'leveled':
      return `leveled:${state.claimForm.yTop || '120'},${state.claimForm.yBottom || '40'}`;
    case 'timed':
      return `timed:${state.claimForm.hoursBeforeVanish || '12'}`;
    case 'portal':
      return `portal:${state.claimForm.stepheight || '64'}:${state.claimForm.destX || '0'},${state.claimForm.destY || '0'},${state.claimForm.destZ || '0'}`;
    case 'openhours':
      return `openhours:${state.claimForm.openHour || '9'}-${state.claimForm.closeHour || '17'}`;
    case 'playerlevel':
      return `playerlevel:${state.claimForm.playerLevelExpr || '<=20'}`;
    case 'antiblock':
      return `antiblock:${state.claimForm.forbiddenBlocks || ''}`;
    case 'problock':
      return `problock:${state.claimForm.allowedBlocks || ''}`;
    default:
      return '';
  }
}

function buildClaimCommand() {
  const rect = selectionToRect(state.claimSelection);
  if (!rect) return '';
  ensureKarmaWorldMapState();
  const access = String(state.claimForm.accesslevel || '0').trim() || '0';
  const name = String(state.claimForm.name || 'KarmaWorld_claim').trim().replace(/\s+/g, '_');
  let cmd = `ccc add ${name} ${Math.round(rect.minX)} ${Math.round(rect.maxZ)} ${Math.round(rect.maxX)} ${Math.round(rect.minZ)} ${access}`;
  kwActiveFlags().forEach((flag) => {
    const token = kwClaimToken(flag);
    if (!token) return;
    const quote = CLAIM_TYPES[flag]?.quote || /\s/.test(token);
    cmd += quote ? ` "${String(token).replace(/"/g, "'")}"` : ` ${token}`;
  });
  return cmd;
}

function kwInputField(key, label, type='text') {
  ensureKarmaWorldMapState();
  return `<div class="field"><label>${label}</label><input type="${type}" value="${escapeHtml(state.claimForm[key] || '')}" oninput="kwUpdateClaimField('${key}', this.value)"></div>`;
}

function kwTextareaField(key, label) {
  ensureKarmaWorldMapState();
  return `<div class="field kw-field-full"><label>${label}</label><textarea oninput="kwUpdateClaimField('${key}', this.value)">${escapeHtml(state.claimForm[key] || '')}</textarea></div>`;
}

function kwClaimExtraFields(flag) {
  switch(flag) {
    case 'notify':
      return kwInputField('enterText', t('claimEnterText')) + kwInputField('exitText', t('claimExitText'));
    case 'command':
      return kwTextareaField('commandToRun', t('claimCommandToRun'));
    case 'leveled':
      return kwInputField('yTop', t('claimYTop')) + kwInputField('yBottom', t('claimYBottom'));
    case 'timed':
      return kwInputField('hoursBeforeVanish', t('claimHoursBeforeVanish'));
    case 'portal':
      return kwInputField('stepheight', t('claimStepHeight')) + kwInputField('destX', t('claimDestX')) + kwInputField('destY', t('claimDestY')) + kwInputField('destZ', t('claimDestZ'));
    case 'openhours':
      return kwInputField('openHour', t('claimOpenHour')) + kwInputField('closeHour', t('claimCloseHour'));
    case 'playerlevel':
      return kwInputField('playerLevelExpr', t('claimPlayerLevelExpr'));
    case 'antiblock':
      return kwInputField('forbiddenBlocks', t('claimForbiddenBlocks'));
    case 'problock':
      return kwInputField('allowedBlocks', t('claimAllowedBlocks'));
    default:
      return `<div class="kw-mini-note">${t('claimNoExtraNeeded')}</div>`;
  }
}

function kwClaimOptionCard(flag) {
  ensureKarmaWorldMapState();
  const checked = !!state.kwClaimFlags[flag];
  return `
    <div class="kw-option-card ${checked ? 'active' : ''}">
      <label class="kw-check-row">
        <input type="checkbox" ${checked ? 'checked' : ''} onchange="kwSetClaimFlag('${flag}', this.checked)">
        <span class="kw-check-title">${escapeHtml(kwClaimLabel(flag))}</span>
      </label>
      ${checked ? `<div class="kw-option-extra">${kwClaimExtraFields(flag)}</div>` : ''}
    </div>`;
}

function kwLayerMeta(layer, players) {
  const enabled = !!state.kwMapLayers[layer];
  switch(layer) {
    case 'onlinePlayers':
      return `${enabled ? t('mapLayerVisible') : t('mapLayerHidden')} · ${players.length} · ${t('mapLayerPlayersData')}`;
    case 'landClaimBlocks':
      return `${enabled ? t('mapLayerVisible') : t('mapLayerHidden')} · ${state.claimSelection ? selectionBlockCount(state.claimSelection) : 0} · ${t('mapLayerSelectionData')}`;
    case 'regions':
      return `${enabled ? t('mapLayerVisible') : t('mapLayerHidden')} · ${t('mapLayerRegionsData')}`;
    default:
      return `${enabled ? t('mapLayerVisible') : t('mapLayerHidden')} · ${t('mapLayerNoData')}`;
  }
}

function kwLayerRow(layer, players) {
  ensureKarmaWorldMapState();
  return `
    <label class="kw-check-row kw-layer-row">
      <input type="checkbox" ${state.kwMapLayers[layer] ? 'checked' : ''} onchange="kwSetMapLayer('${layer}', this.checked)">
      <span class="kw-check-body">
        <span class="kw-check-title">${escapeHtml(kwLayerLabel(layer))}</span>
        <small>${escapeHtml(kwLayerMeta(layer, players))}</small>
      </span>
    </label>`;
}

function kwPercentX(x, bounds) {
  return ((x - bounds.minX) / (bounds.maxX - bounds.minX)) * 100;
}

function kwPercentZ(z, bounds) {
  return ((bounds.maxZ - z) / (bounds.maxZ - bounds.minZ)) * 100;
}

function kwRegionGridHtml(bounds) {
  ensureKarmaWorldMapState();
  if (!bounds || !state.kwMapLayers.regions) return '';
  const step = 512;
  const lines = [];
  for (let x = Math.ceil(bounds.minX / step) * step; x < bounds.maxX; x += step) {
    const pct = kwPercentX(x, bounds);
    lines.push(`<div class="kw-region-line kw-region-line-v" style="left:${pct}%"></div>`);
  }
  for (let z = Math.ceil(bounds.minZ / step) * step; z < bounds.maxZ; z += step) {
    const pct = kwPercentZ(z, bounds);
    lines.push(`<div class="kw-region-line kw-region-line-h" style="top:${pct}%"></div>`);
  }
  return `<div class="kw-region-grid">${lines.join('')}</div>`;
}

function kwClaimDock(players) {
  ensureKarmaWorldMapState();
  return `
    <aside class="kw-live-map-right card">
      <div class="kw-side-section">
        <div class="kw-side-head">
          <h3>${t('claimOptionsTitle')}</h3>
          <button class="small-btn" onclick="kwResetClaimOptions()">${t('resetOptions')}</button>
        </div>
        <div class="kw-mini-note">${t('claimDockHelp')}</div>
        <div class="kw-field-stack kw-base-fields">
          ${kwInputField('name', t('claimName'))}
          ${kwInputField('accesslevel', t('claimAccesslevel'))}
        </div>
        <div class="kw-option-list">
          ${KW_CLAIM_OPTION_ORDER.map(kwClaimOptionCard).join('')}
        </div>
      </div>
      <div class="kw-side-section">
        <div class="kw-side-head">
          <h3>${t('mapLayersTitle')}</h3>
          <button class="small-btn" onclick="kwResetMapLayers()">${t('resetLayers')}</button>
        </div>
        <div class="kw-layer-list">
          ${['landClaimBlocks','onlinePlayers','homes','vehicles','missionPois','claimedMissionPois','traders','pois','regions'].map((layer) => kwLayerRow(layer, players)).join('')}
        </div>
        <div class="kw-mini-note">${t('regionGridNote')}</div>
      </div>
      <div class="kw-side-section">
        <h3>${t('claimPreviewTitle')}</h3>
        <div class="claim-selection-card" id="kwSelectionSummary">${kwSelectionSummaryHtml()}</div>
        <div class="kw-preview-block">
          <label>${t('claimCommandInternal')}</label>
          <pre id="kwClaimCommandPreview">${escapeHtml(buildClaimCommand() || t('claimCommandMissingSelection'))}</pre>
        </div>
        <div class="kw-mini-note"><strong>${t('activeFlags')}:</strong> <span id="kwActiveFlagsText">${escapeHtml(kwActiveFlagsText())}</span></div>
        <div class="inline-actions" style="margin-top:12px">
          <button class="btn" onclick="copyClaimCommand()">${t('claimCopy')}</button>
          <button class="btn btn-primary" onclick="sendClaimCommand()">${t('sendNow')}</button>
        </div>
      </div>
    </aside>`;
}

function kwSelectionSummaryHtml() {
  const rect = selectionToRect(state.claimSelection);
  if (!rect) return `${t('noSelection')}<br>${t('claimSelectionHint')}`;
  return `<div><strong>${t('selectionCoords')}:</strong> X ${rect.minX} → ${rect.maxX} · Z ${rect.minZ} → ${rect.maxZ}</div><div><strong>${t('selectionBlocks')}:</strong> ${selectionBlockCount(state.claimSelection)} ${t('blocks')}</div>`;
}

function updateSelectionVisuals() {
  const bounds = getConfiguredMapBounds();
  const box = document.getElementById('claimSelectionBox');
  const info = document.getElementById('claimSelectionInfo');
  const rightInfo = document.getElementById('kwSelectionSummary');
  if (box) box.style.cssText = selectionStyle(state.claimSelection, bounds);
  if (info) {
    if (!state.claimSelection) info.innerHTML = `<div class="empty-note">${t('noSelection')}<br>${t('claimSelectionHint')}</div>`;
    else info.innerHTML = `<div class="claim-selection-card">${kwSelectionSummaryHtml()}</div>`;
  }
  if (rightInfo) rightInfo.innerHTML = kwSelectionSummaryHtml();
  const preview = document.getElementById('kwClaimCommandPreview');
  if (preview) preview.textContent = buildClaimCommand() || t('claimCommandMissingSelection');
}

function claimFormHtml() {
  const rect = selectionToRect(state.claimSelection);
  const activeFlags = kwActiveFlags();
  return `
    <div class="claim-modal-grid">
      <div class="claim-desc kw-field-full"><strong>${t('claimPreviewTitle')}:</strong> ${t('claimDockHelp')}</div>
      <div class="claim-selection-card kw-field-full">${rect ? kwSelectionSummaryHtml() : `${t('noSelection')}<br>${t('claimSelectionHint')}`}</div>
      <div class="field kw-field-full"><label>${t('activeFlags')}</label><div class="claim-desc">${escapeHtml(activeFlags.length ? activeFlags.map(kwClaimLabel).join(', ') : t('noActiveFlags'))}</div></div>
      <div class="field kw-field-full claim-preview"><label>${t('claimCommandInternal')}</label><pre id="claimCommandPreview">${escapeHtml(buildClaimCommand() || t('claimCommandMissingSelection'))}</pre></div>
    </div>`;
}

function openClaimModal() {
  if (!state.claimSelection) return toast(t('claimNoSelection'), true);
  const footer = `
    <button class="btn" onclick="copyClaimCommand()">${t('claimCopy')}</button>
    <button class="btn btn-primary" onclick="sendClaimCommand()">${t('claimSend')}</button>
    <button class="btn" onclick="closeModal()">${t('close')}</button>`;
  openModal(t('claimCreateTitle'), claimFormHtml(), footer);
}

views.liveMap = function() {
  ensureKarmaWorldMapState();
  const allPlayers = (state.state.players_cache || []).map((p, sourceIndex) => ({...p, sourceIndex}));
  const players = allPlayers.filter(p => typeof p.x === 'number' && typeof p.z === 'number' && !Number.isNaN(p.x) && !Number.isNaN(p.z));
  const bounds = getConfiguredMapBounds();
  const mapImagePath = state.state.config.map_image_path || '';
  const focused = state.mapFocusIndex !== null ? players.find(p => p.sourceIndex === state.mapFocusIndex) : null;
  const rect = selectionToRect(state.claimSelection);
  return `
    <div class="grid">
      <div class="card panel" id="liveMapAnchor">
        <div style="display:flex;justify-content:space-between;gap:12px;align-items:center;flex-wrap:wrap;margin-bottom:12px">
          <h2 style="margin:0">${t('liveMap')}</h2>
          <div class="inline-actions">
            <button class="btn" onclick="refreshPlayers()">${t('refreshPlayers')}</button>
            <button class="btn ${state.claimSelectMode ? 'btn-primary' : ''}" onclick="toggleSelectionMode()">${state.claimSelectMode ? t('stopSelecting') : t('selectArea')}</button>
            <button class="btn" onclick="clearClaimSelection()">${t('clearSelection')}</button>
            <button class="btn btn-primary" onclick="openClaimModal()">${t('createProtection')}</button>
            <button class="btn" onclick="zoomMap(0.2)">${t('mapZoomIn')}</button>
            <button class="btn" onclick="zoomMap(-0.2)">${t('mapZoomOut')}</button>
            <button class="btn" onclick="resetMapZoom()">${t('mapResetZoom')}</button>
            <button class="btn" onclick="clearMapFocus()">${t('mapViewAll')}</button>
          </div>
        </div>
        <div class="help-text" style="margin-bottom:14px">${t('protectInMap')}<br>${t('mapLayersHint')}</div>
        ${mapImagePath && bounds ? `
          <div class="live-map-real-layout kw-live-map-layout">
            <aside class="live-map-side card">
              <h3>${t('mapPlayersPanel')}</h3>
              <div class="empty-note">${t('liveUpdating')} · ${t('lastRefresh')}: ${escapeHtml(state.state.last_players_refresh || '-')}</div>
              <div id="claimSelectionInfo">${rect ? `<div class="claim-selection-card">${kwSelectionSummaryHtml()}</div>` : `<div class="empty-note">${t('noSelection')}<br>${t('claimSelectionHint')}</div>`}</div>
              <div class="map-side-list">
                ${players.length ? players.map((p) => `
                  <div class="map-side-player ${focused && focused.sourceIndex === p.sourceIndex ? 'active' : ''}">
                    <button class="linkish-btn" onclick="showPlayerInfo(${p.sourceIndex})">${escapeHtml(playerDisplayName(p))}</button>
                    <span>${escapeHtml(playerPosText(p))}</span>
                    <div class="player-menu compact"><button class="small-btn" onclick="focusPlayerOnMap(${p.sourceIndex})">${t('mapFocusPlayer')}</button><button class="small-btn" onclick="showPlayerInfo(${p.sourceIndex})">${t('playerInfoOpenOnMap')}</button></div>
                  </div>`).join('') : `<div class="empty-note">${t('mapNoCoords')}</div>`}
              </div>
            </aside>
            <div class="live-map-main card">
              <div class="real-map-toolbar">
                <div class="empty-note">${t('mapImage')}: ${escapeHtml(mapImagePath.split(/[\/]/).pop() || '')}</div>
                <div class="empty-note" id="mapMousePos">${t('mousePos')}: ${escapeHtml(state.mapMouseText || '-')}</div>
              </div>
              <div class="real-map-scroll" id="realMapScroll">
                <div class="real-map-stage" style="transform:scale(${state.mapZoom}); transform-origin: top left;">
                  <div class="real-map-frame">
                    <img src="/api/map/image?v=${encodeURIComponent(String(state.mapImageVersion))}" class="real-map-image" alt="mapa">
                    <div class="real-map-overlay ${state.claimSelectMode ? 'selecting' : ''}" id="mapOverlay" onmousedown="startMapSelection(event)" onmousemove="moveMapSelection(event)" onmouseleave="clearMapMouse()">
                      ${kwRegionGridHtml(bounds)}
                      ${state.kwMapLayers.landClaimBlocks ? `<div id="claimSelectionBox" class="claim-selection-box" style="${selectionStyle(state.claimSelection, bounds)}"></div>` : ''}
                      ${state.kwMapLayers.onlinePlayers ? players.map((p) => `<button class="map-player map-player-real ${focused && focused.sourceIndex === p.sourceIndex ? 'focused' : ''}" data-map-focused="${focused && focused.sourceIndex === p.sourceIndex ? 'true' : 'false'}" title="${escapeHtml(playerDisplayName(p))} · ${escapeHtml(playerPosText(p))}" style="${playerMapStyleFromBounds(p, bounds)}" onclick="showPlayerInfo(${p.sourceIndex})"><span>${escapeHtml(playerDisplayName(p).slice(0, 16))}</span></button>`).join('') : ''}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ${kwClaimDock(players)}
          </div>` : `<div class="empty-note">${t('mapNotConfigured')}<br>${t('mapUseSameWorld')}</div>`}
      </div>
    </div>`;
};

/* ===== v34 patch: embed external live map inside panel ===== */
Object.assign(T.es, {
  liveMapUrl: 'URL del mapa en vivo',
  liveMapEmbedHint: 'Aquí se incrusta el mapa web completo dentro del panel, con sus propios botones y controles.',
  reloadEmbeddedMap: 'Recargar mapa integrado',
  externalMapUnavailable: 'No hay URL de mapa en vivo configurada.',
  externalMapOpenDirect: 'Abrir mapa aparte',
  externalMapConfiguredNote: 'Se usará el mapa web externo dentro del recuadro del manager.'
});
Object.assign(T.en, {
  liveMapUrl: 'Live map URL',
  liveMapEmbedHint: 'The full web map is embedded here inside the panel, with its own buttons and controls.',
  reloadEmbeddedMap: 'Reload embedded map',
  externalMapUnavailable: 'No live map URL is configured.',
  externalMapOpenDirect: 'Open map separately',
  externalMapConfiguredNote: 'The external web map will be used inside the manager panel.'
});

function reloadEmbeddedLiveMap() {
  const frame = document.getElementById('kwEmbeddedLiveMap');
  if (!frame) return;
  try {
    frame.src = frame.src;
  } catch (_) {
    render();
  }
}

views.settings = function() {
  const c = state.state.config;
  const mapSizeValue = String(c.map_size_mode || '8192');
  const mapSizeOptions = [
    { value: '6144', label: t('mapSize6144') },
    { value: '8192', label: t('mapSize8192') },
    { value: '10240', label: t('mapSize10240') },
    { value: 'custom', label: t('mapSizeCustom') }
  ];
  return `
    <div class="grid">
      <div class="card panel">
        <div style="display:flex;justify-content:space-between;gap:14px;align-items:center;margin-bottom:18px;flex-wrap:wrap">
          <h2 style="margin:0">${t('generalSettings')}</h2>
          <div class="inline-actions">
            <button class="btn" onclick="chooseSplash()">${t('changeStartupImage')}</button>
            <button class="btn" onclick="exportManagerConfig()">${t('exportConfig')}</button>
            <button class="btn" onclick="importManagerConfig()">${t('importConfig')}</button>
            <button class="btn btn-primary" onclick="saveSettings()">${t('saveSettings')}</button>
          </div>
        </div>
        <div class="input-grid">
          ${field('server_name', t('serverName'), c.server_name || '')}
          ${fieldBrowse('server_folder', t('serverPath'), c.server_folder || '', 'folder', t('selectServerFolder'))}
          ${fieldBrowse('executable_path', t('exeOrBat'), c.executable_path || '', 'exe_bat', t('selectExecutable'))}
          ${fieldBrowse('working_directory', t('workingDirectory'), c.working_directory || '', 'folder', t('selectWorkingDirectory'))}
          ${fieldBrowse('xml_path', t('realServerConfig'), c.xml_path || '', 'xml', t('selectServerConfig'))}
          ${fieldBrowse('backup_folder', t('backupFolder'), c.backup_folder || '', 'folder', t('selectBackupFolder'))}
          ${field('telnet_host', t('telnetHost'), c.telnet_host || '127.0.0.1')}
          ${field('telnet_port', t('telnetPort'), c.telnet_port || 8081)}
          ${field('telnet_password', t('telnetPassword'), c.telnet_password || '', 'password')}
          ${field('panel_host', t('panelHost'), c.panel_host || '127.0.0.1')}
          ${field('panel_port', t('panelPort'), c.panel_port || 8765)}
          ${field('accent_color', t('accentColor'), c.accent_color || '#55a7ff')}
          ${fieldSelect('auto_restart_enabled', t('autoRestartEnabled'), c.auto_restart_enabled ? 'true' : 'false', [{value:'false', label:t('disabled')},{value:'true', label:t('enabled')}])}
          ${field('auto_restart_delay_seconds', t('autoRestartDelay'), c.auto_restart_delay_seconds || 15, 'number')}
        </div>
        <div class="help-text" style="margin-top:14px">${t('externalMapConfiguredNote')}</div>
      </div>
    </div>`;
};

async function saveSettings() {
  try {
    const payload = {
      server_name: $('server_name').value,
      server_folder: $('server_folder').value,
      executable_path: $('executable_path').value,
      working_directory: $('working_directory').value,
      xml_path: $('xml_path').value,
      telnet_host: $('telnet_host').value,
      telnet_port: $('telnet_port').value,
      telnet_password: $('telnet_password').value,
      panel_host: $('panel_host').value,
      panel_port: $('panel_port').value,
      accent_color: $('accent_color').value,
      backup_folder: $('backup_folder').value,
      live_map_url: $('live_map_url').value,
      map_image_path: $('map_image_path').value,
      map_size_mode: $('map_size_mode').value,
      map_custom_size: $('map_custom_size') ? $('map_custom_size').value : $('map_size_mode').value,
      auto_restart_enabled: $('auto_restart_enabled').value === 'true',
      auto_restart_delay_seconds: $('auto_restart_delay_seconds').value,
      language: state.lang
    };
    await api('/api/config/save', 'POST', payload);
    toast(t('settingsSaved'));
    state.mapImageVersion = Date.now();
    await refreshState(true);
    go('settings');
  } catch (err) {
    toast(err.message, true);
  }
}

views.liveMap = function() {
  const liveMapUrl = String((state.state.config && state.state.config.live_map_url) || '').trim();
  if (!liveMapUrl) {
    return `
      <div class="grid">
        <div class="card panel">
          <h2 style="margin:0 0 12px 0">${t('liveMap')}</h2>
          <div class="empty-note">${t('externalMapUnavailable')}</div>
        </div>
      </div>`;
  }
  return `
    <div class="grid">
      <div class="card panel">
        <div style="display:flex;justify-content:space-between;gap:12px;align-items:center;flex-wrap:wrap;margin-bottom:12px">
          <h2 style="margin:0">${t('liveMap')}</h2>
          <div class="inline-actions">
            <button class="btn btn-primary" onclick="openLiveMapLoginWindow()">Abrir mapa dentro del panel</button>
          </div>
        </div>
        <div id="kwEmbeddedLiveMapShell" class="kw-embedded-map-shell">
          <div class="kw-embedded-map-placeholder">
            <div class="kw-embedded-map-placeholder-card">
              <strong>Mapa incrustado dentro del panel</strong>
              <div class="help-text">Se abrirá fijado en este hueco. Si no aparece al instante, pulsa el botón de arriba una vez.</div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
};

Object.assign(T.es, {
  description: 'Descripción',
  storeActivePacks: 'Packs activos',
  storeActiveItems: 'Objetos activos',
  storeTotalBalance: 'Saldo total',
  storePendingPayments: 'Pagos pendientes',
  storeDemoLoaded: 'Demo de tienda cargada. Pulsa Guardar tienda completa para dejarla fija.',
  featured: 'Destacado',
  quality: 'Calidad',
  stock: 'Stock',
  dailyLimit: 'Límite diario',
  totalLimit: 'Límite total',
  minLevel: 'Nivel mínimo',
  deliveryCommand: 'Comando entrega',
  deliveryMode: 'Modo entrega',
  queue: 'Cola',
  instant: 'Instantánea',
  visible: 'Visible',
  balance: 'Saldo',
  bought: 'Comprado',
  spent: 'Gastado',
  blocked: 'Bloqueado',
  date: 'Fecha',
  type: 'Tipo',
  amount: 'Cantidad',
  provider: 'Proveedor',
  session: 'Sesión',
  currency: 'Moneda',
  bonus: 'Bonus',
  image: 'Imagen',
  delivery: 'Entrega',
  storeAdminTitle: 'KarmaWorld Wallet & Tienda',
  storeAdminSubtitle: 'Compra de Karmacoins con dinero real y gasto de Karmacoins en objetos. Todo se guarda localmente en el manager y queda listo para enlazar luego con Steam, Discord y Stripe.',
  openPublicView: 'Abrir vista pública',
  loadDemo: 'Cargar demo',
  saveFullStore: 'Guardar tienda completa',
  storeOverviewTab: 'Resumen',
  storePacksTab: 'Packs Karmacoins',
  storeItemsTab: 'Objetos',
  storeWalletsTab: 'Saldos',
  storePaymentsTab: 'Pagos',
  storeOrdersTab: 'Compras',
  storePlaytimeTab: 'Tiempo conectado',
  storeSettingsTab: 'Web / Stripe / Discord',
  storeQuickSummary: 'Resumen rápido',
  storeInitialAddress: 'IP/puerto inicial',
  storeFutureDomain: 'Dominio futuro',
  storeSteamLogin: 'Login Steam',
  storeDiscordLink: 'Vinculación Discord',
  storePrepared: 'Preparado',
  storePending: 'Pendiente',
  storeLastUpdate: 'Última actualización',
  storeSystemBase: 'Base del sistema',
  storeBaseLine1: 'Dinero real → Karmacoins → objetos.',
  storeBaseLine2: 'Aviso previo si hay límite, cooldown o saldo insuficiente.',
  storeBaseLine3: 'Recompensas por tiempo conectado activables o desactivables.',
  storeBaseLine4: 'Mensaje privado de Discord y canal público configurables.',
  storeBaseLine5: 'Todo queda guardado en data/store.json.',
  storeCoinPacksTitle: 'Packs Karmacoins',
  storeObjectStoreTitle: 'Tienda de objetos',
  storePack: 'Pack',
  storeState: 'Estado',
  storeActiveBadge: 'Activo',
  storeOffBadge: 'Off',
  storeNoPacks: 'No hay packs todavía.',
  storeObject: 'Objeto',
  storeLimits: 'Límites',
  storeDay: 'Día',
  storeNoLimit: 'Sin límite',
  storeNoItems: 'No hay objetos todavía.',
  storePacksAdminTitle: 'Packs de Karmacoins',
  storeNewPack: 'Nuevo pack',
  storeSavePacks: 'Guardar packs',
  storePacksHelp: 'Estos son los packs que comprarán con dinero real mediante Stripe. El bonus se suma a los Karmacoins del pack.',
  storeItemsAdminTitle: 'Objetos que se compran con Karmacoins',
  storeNewItem: 'Nuevo objeto',
  storeSaveItems: 'Guardar objetos',
  storeItemsHelp: 'Aquí defines los objetos de la web. El jugador no compra estos objetos con dinero real directo: primero compra saldo, luego gasta Karmacoins aquí.',
  storeOnline: 'Online',
  walletsTitle: 'Jugadores y saldos',
  newWallet: 'Nuevo saldo',
  saveWallets: 'Guardar saldos',
  noWalletsYet: 'No hay saldos todavía.',
  latestMovements: 'Últimos movimientos',
  addSample: 'Añadir ejemplo',
  noMovementsYet: 'Sin movimientos todavía.',
  paymentsTitle: 'Pagos reales',
  newManualPayment: 'Nuevo pago manual',
  savePayments: 'Guardar pagos',
  amountReal: 'Importe',
  noPaymentsYet: 'No hay pagos todavía.',
  ordersTitle: 'Compras de objetos',
  newManualOrder: 'Nuevo pedido manual',
  saveOrders: 'Guardar pedidos',
  noOrdersYet: 'No hay pedidos todavía.',
  playtimeTitle: 'Karmacoins por tiempo conectado',
  saveRewards: 'Guardar recompensas',
  coinsPerInterval: 'Karmacoins por intervalo',
  intervalMinutes: 'Intervalo (minutos)',
  antiAfkMinutes: 'Anti-AFK (minutos)',
  eventMultiplier: 'Multiplicador evento',
  recommendedBehavior: 'Comportamiento recomendado',
  playtimeLine1: 'Puedes desactivarlo por completo cuando quieras.',
  playtimeLine2: 'Usa límite diario para evitar abuso.',
  playtimeLine3: 'Anti-AFK sirve para no premiar cuentas quietas.',
  playtimeLine4: 'El multiplicador de evento te permite hacer fines de semana x2.',
  webSettingsTitle: 'Web / IP / dominio futuro',
  saveWeb: 'Guardar web',
  publicIpLocal: 'IP pública/local',
  currentBaseUrl: 'Base URL actual',
  futureDomain: 'Dominio futuro',
  loginNotice: 'Aviso de login',
  saveStripe: 'Guardar Stripe',
  mode: 'Modo',
  publicKey: 'Clave pública',
  secretKey: 'Clave secreta',
  webhookSecret: 'Webhook secret',
  successUrl: 'Success URL',
  cancelUrl: 'Cancel URL',
  saveDiscord: 'Guardar Discord',
  dmPlayer: 'DM al jugador',
  purchasesChannel: 'Canal compras',
  channelTemplate: 'Plantilla canal',
  dmTemplate: 'Plantilla DM',
  deliveryAlertsTitle: 'Entrega y avisos',
  saveRules: 'Guardar reglas',
  deliveryQueue: 'Cola de entrega',
  onlinePlayer: 'Jugador online',
  warnLimitsBeforeBuy: 'Avisar límites antes',
  visibleCategories: 'Categorías visibles (separadas por coma)',
  permissionsHelpText: 'Lista editable local del manager. Ahora mismo no aplica permisos por sí sola dentro del juego: se guarda en data/permissions.json y sirve como base para roles, niveles y comandos que luego puedes conectar al bot o a lógica futura.',
  vipHelpText: 'Lista editable local del manager. Define nombre del rango, rol Discord, precio y bonificaciones. Se guarda en data/vip.json para enlazarla después con tienda, economía o Discord.',
  helpPermissionsTitle: 'Permisos',
  helpPermissionsText: 'La pestaña Permisos guarda una lista local con nombre, nivel y comandos. No expulsa ni bloquea jugadores por sí sola. Sirve como base editable para futuras reglas o para sincronizar nombres de rol con el bot.',
  helpStoreTitle: 'Tienda / Wallet',
  helpStoreText: 'La Tienda funciona como wallet: dinero real → Karmacoins → objetos. Puedes crear packs, objetos, saldos, pagos y reglas de tiempo conectado. Todo se guarda localmente en data/store.json.',
  helpChatTitle: 'Chat en vivo',
  helpChatText: 'Envía un mensaje global al juego desde el manager. Pulsa Enter para enviarlo rápido. Para que funcione de verdad debes tener telnet bien configurado en Ajustes.',
  openStaffPanel: 'Abrir web panel',
  loadStaffPreset: 'Cargar preset staff',
  emoji: 'Emoji',
  discordRoleId: 'Discord Role ID',
  panelSections: 'Secciones panel',
  color: 'Color',
  discordClientId: 'Discord Client ID',
  discordClientSecret: 'Discord Client Secret',
  discordRedirectUri: 'Discord Redirect URI',
  discordBotToken: 'Discord Bot Token',
  staffPanelEnabled: 'Web panel staff',
  storeCoinsLabel: 'Karmacoins',
  stripeTitle: 'Stripe',
  discordTitle: 'Discord',
  discordId: 'Discord ID',
  newItemLabel: 'New item',
  newPlayerLabel: 'New player',
  demoPackName: 'Starter pack',
  demoPackDescription: '500 Karmacoins to spend in the web store.',
  demoItemName: 'Basic kit',
  storeCatGeneral: 'General',
  storeCatWeapons: 'Weapons',
  storeCatAmmo: 'Ammo',
  storeCatTools: 'Tools',
  storeCatMedicine: 'Medicine',
  storeCatFood: 'Food',
  storeCatResources: 'Resources',
  storeCatBuilding: 'Building',
  storeCatVehicles: 'Vehicles',
  storeCatPacks: 'Packs',
  storeCatSpecial: 'Special',
  storeCatVip: 'VIP',

  tipPublicIpLocal: 'IP o nombre del host donde abrirás la web. Ejemplo: 127.0.0.1.',
  tipStorePublicPort: 'Puerto HTTP que usa tu panel web. Ejemplo: 26900.',
  tipCurrentBaseUrl: 'URL completa actual de la tienda o panel. Ejemplo: http://127.0.0.1:26900',
  tipFutureDomain: 'Opcional. Dominio que usarás más adelante cuando lo apuntes a tu IP.',
  tipStoreSteamLogin: 'Activa o desactiva el login principal con Steam para la web pública.',
  tipStoreDiscordLink: 'Permite vincular Discord desde la cuenta del jugador o staff.',
  tipStaffPanelEnabled: 'Si está en Sí, la ruta /staff quedará disponible para tu equipo.',
  tipLoginNotice: 'Texto informativo que verá el usuario antes de iniciar sesión.',
  tipDiscordClientId: 'Pega aquí el Client ID de tu app de Discord (Developer Portal → OAuth2 / General).',
  tipDiscordRedirectUri: 'URL de retorno exacta registrada en Discord. Debe coincidir al 100%. Ejemplo: http://TU_IP:PUERTO/auth/discord/callback',
  tipDiscordClientSecret: 'Pega aquí el Client Secret de tu app de Discord. Es privado.',
  tipStripeEnabled: 'Activa Stripe solo cuando ya tengas sus claves configuradas.',
  tipStripeMode: 'Usa test para pruebas y live para pagos reales.',
  tipStripeCurrency: 'Moneda principal de cobro. Normalmente EUR.',
  tipStripePublicKey: 'Clave pública de Stripe para el frontend o checkout.',
  tipStripeSecretKey: 'Clave secreta de Stripe. Es privada.',
  tipStripeWebhookSecret: 'Secreto del webhook de Stripe para validar avisos de pago.',
  tipSuccessUrl: 'Página a la que volverá el usuario cuando el pago salga bien.',
  tipCancelUrl: 'Página a la que volverá el usuario si cancela el pago.',
  tipDiscordEnabled: 'Activa los avisos de Discord para compras o saldo.',
  tipDmPlayer: 'Si está en Sí, el sistema intentará mandar mensaje privado al jugador.',
  tipGuildId: 'ID del servidor de Discord donde está tu staff o donde enviarás avisos.',
  tipPurchasesChannel: 'ID del canal donde se publicarán compras o confirmaciones.',
  tipDiscordBotToken: 'Token del bot de Discord que enviará mensajes y leerá roles. Es privado.',
  tipChannelTemplate: 'Mensaje del canal. Puedes usar {player}, {pack}, {amount} y {coins}.',
  tipDmTemplate: 'Mensaje privado al jugador. Puedes usar {player}, {pack}, {amount} y {coins}.',
  tipDeliveryQueue: 'Si está en Sí, las entregas se guardan en cola antes de procesarse.',
  tipOnlinePlayer: 'Si está en Sí, el jugador deberá estar conectado para recibir el pedido.',
  tipWarnLimitsBeforeBuy: 'Muestra un aviso antes de comprar si hay límite, cooldown o saldo insuficiente.',
  tipVisibleCategories: 'Lista de categorías visibles en la web, separadas por comas.'
});
Object.assign(T.en, {
  description: 'Description',
  storeActivePacks: 'Active packs',
  storeActiveItems: 'Active items',
  storeTotalBalance: 'Total balance',
  storePendingPayments: 'Pending payments',
  storeDemoLoaded: 'Store demo loaded. Press Save full store to keep it.',
  featured: 'Featured',
  quality: 'Quality',
  stock: 'Stock',
  dailyLimit: 'Daily limit',
  totalLimit: 'Total limit',
  minLevel: 'Minimum level',
  deliveryCommand: 'Delivery command',
  deliveryMode: 'Delivery mode',
  queue: 'Queue',
  instant: 'Instant',
  visible: 'Visible',
  balance: 'Balance',
  bought: 'Bought',
  spent: 'Spent',
  blocked: 'Blocked',
  date: 'Date',
  type: 'Type',
  amount: 'Amount',
  provider: 'Provider',
  session: 'Session',
  currency: 'Currency',
  bonus: 'Bonus',
  image: 'Image',
  delivery: 'Delivery',
  storeAdminTitle: 'KarmaWorld Wallet & Store',
  storeAdminSubtitle: 'Buy Karmacoins with real money and spend Karmacoins on items. Everything is stored locally in the manager and is ready to be linked later with Steam, Discord and Stripe.',
  openPublicView: 'Open public view',
  loadDemo: 'Load demo',
  saveFullStore: 'Save full store',
  storeOverviewTab: 'Overview',
  storePacksTab: 'Karmacoins packs',
  storeItemsTab: 'Items',
  storeWalletsTab: 'Balances',
  storePaymentsTab: 'Payments',
  storeOrdersTab: 'Orders',
  storePlaytimeTab: 'Playtime',
  storeSettingsTab: 'Web / Stripe / Discord',
  storeQuickSummary: 'Quick summary',
  storeInitialAddress: 'Initial IP/port',
  storeFutureDomain: 'Future domain',
  storeSteamLogin: 'Steam login',
  storeDiscordLink: 'Discord link',
  storePrepared: 'Prepared',
  storePending: 'Pending',
  storeLastUpdate: 'Last update',
  storeSystemBase: 'System base',
  storeBaseLine1: 'Real money → Karmacoins → items.',
  storeBaseLine2: 'Warn before buying if there is a limit, cooldown or insufficient balance.',
  storeBaseLine3: 'Playtime rewards can be enabled or disabled.',
  storeBaseLine4: 'Discord private message and public channel are configurable.',
  storeBaseLine5: 'Everything is saved in data/store.json.',
  storeCoinPacksTitle: 'Karmacoins packs',
  storeObjectStoreTitle: 'Item store',
  storePack: 'Pack',
  storeState: 'Status',
  storeActiveBadge: 'Active',
  storeOffBadge: 'Off',
  storeNoPacks: 'There are no packs yet.',
  storeObject: 'Item',
  storeLimits: 'Limits',
  storeDay: 'Day',
  storeNoLimit: 'No limit',
  storeNoItems: 'There are no items yet.',
  storePacksAdminTitle: 'Karmacoins packs',
  storeNewPack: 'New pack',
  storeSavePacks: 'Save packs',
  storePacksHelp: 'These are the packs players buy with real money through Stripe. The bonus is added to the Karmacoins amount of the pack.',
  storeItemsAdminTitle: 'Items bought with Karmacoins',
  storeNewItem: 'New item',
  storeSaveItems: 'Save items',
  storeItemsHelp: 'Define the web store items here. The player does not buy these items directly with real money: they buy balance first and then spend Karmacoins here.',
  storeOnline: 'Online',
  walletsTitle: 'Players and balances',
  newWallet: 'New balance',
  saveWallets: 'Save balances',
  noWalletsYet: 'There are no balances yet.',
  latestMovements: 'Latest movements',
  addSample: 'Add sample',
  noMovementsYet: 'There are no movements yet.',
  paymentsTitle: 'Real payments',
  newManualPayment: 'New manual payment',
  savePayments: 'Save payments',
  amountReal: 'Amount',
  noPaymentsYet: 'There are no payments yet.',
  ordersTitle: 'Item purchases',
  newManualOrder: 'New manual order',
  saveOrders: 'Save orders',
  noOrdersYet: 'There are no orders yet.',
  playtimeTitle: 'Karmacoins for connected playtime',
  saveRewards: 'Save rewards',
  coinsPerInterval: 'Karmacoins per interval',
  intervalMinutes: 'Interval (minutes)',
  antiAfkMinutes: 'Anti-AFK (minutes)',
  eventMultiplier: 'Event multiplier',
  recommendedBehavior: 'Recommended behavior',
  playtimeLine1: 'You can disable it completely whenever you want.',
  playtimeLine2: 'Use a daily limit to avoid abuse.',
  playtimeLine3: 'Anti-AFK prevents rewarding idle accounts.',
  playtimeLine4: 'The event multiplier lets you run x2 weekends.',
  webSettingsTitle: 'Web / IP / future domain',
  saveWeb: 'Save web',
  publicIpLocal: 'Public/local IP',
  currentBaseUrl: 'Current base URL',
  futureDomain: 'Future domain',
  loginNotice: 'Login notice',
  saveStripe: 'Save Stripe',
  mode: 'Mode',
  publicKey: 'Public key',
  secretKey: 'Secret key',
  webhookSecret: 'Webhook secret',
  successUrl: 'Success URL',
  cancelUrl: 'Cancel URL',
  saveDiscord: 'Save Discord',
  dmPlayer: 'DM to player',
  purchasesChannel: 'Purchases channel',
  channelTemplate: 'Channel template',
  dmTemplate: 'DM template',
  deliveryAlertsTitle: 'Delivery and notices',
  saveRules: 'Save rules',
  deliveryQueue: 'Delivery queue',
  onlinePlayer: 'Online player',
  warnLimitsBeforeBuy: 'Warn limits before buying',
  visibleCategories: 'Visible categories (comma separated)',
  permissionsHelpText: 'Local editable manager list. Right now it does not enforce permissions by itself inside the game: it is stored in data/permissions.json and works as a base for roles, levels and commands that you can later connect to the bot or future logic.',
  vipHelpText: 'Local editable manager list. It defines rank name, Discord role, price and bonuses. It is stored in data/vip.json so you can later link it to the store, economy or Discord.',
  helpPermissionsTitle: 'Permissions',
  helpPermissionsText: 'The Permissions tab stores a local list with name, level and commands. It does not kick or block players on its own. It works as an editable base for future rules or for syncing role names with the bot.',
  helpStoreTitle: 'Store / Wallet',
  helpStoreText: 'The Store works as a wallet: real money → Karmacoins → items. You can create packs, items, balances, payments and playtime rules. Everything is saved locally in data/store.json.',
  helpChatTitle: 'Live chat',
  helpChatText: 'Send a global message to the game from the manager. Press Enter to send it quickly. For it to work for real you must have telnet configured correctly in Settings.',
  openStaffPanel: 'Open web panel',
  loadStaffPreset: 'Load staff preset',
  emoji: 'Emoji',
  discordRoleId: 'Discord Role ID',
  panelSections: 'Panel sections',
  color: 'Color',
  discordClientId: 'Discord Client ID',
  discordClientSecret: 'Discord Client Secret',
  discordRedirectUri: 'Discord Redirect URI',
  discordBotToken: 'Discord Bot Token',
  staffPanelEnabled: 'Staff web panel',
  storeCoinsLabel: 'Karmacoins',
  stripeTitle: 'Stripe',
  discordTitle: 'Discord',
  discordId: 'Discord ID',
  newItemLabel: 'New item',
  newPlayerLabel: 'New player',
  demoPackName: 'Starter pack',
  demoPackDescription: '500 Karmacoins to spend in the web store.',
  demoItemName: 'Basic kit',
  storeCatGeneral: 'General',
  storeCatWeapons: 'Weapons',
  storeCatAmmo: 'Ammo',
  storeCatTools: 'Tools',
  storeCatMedicine: 'Medicine',
  storeCatFood: 'Food',
  storeCatResources: 'Resources',
  storeCatBuilding: 'Building',
  storeCatVehicles: 'Vehicles',
  storeCatPacks: 'Packs',
  storeCatSpecial: 'Special',
  storeCatVip: 'VIP',

  tipPublicIpLocal: 'IP or host name where the web panel will open. Example: 127.0.0.1.',
  tipStorePublicPort: 'HTTP port used by your web panel. Example: 26900.',
  tipCurrentBaseUrl: 'Current full URL of the store or panel. Example: http://127.0.0.1:26900',
  tipFutureDomain: 'Optional. Domain you will point to your IP later.',
  tipStoreSteamLogin: 'Enable or disable Steam as the main login for the public web.',
  tipStoreDiscordLink: 'Allows linking Discord from the player or staff account.',
  tipStaffPanelEnabled: 'If set to Yes, the /staff route will be available for your team.',
  tipLoginNotice: 'Informational text shown before the user signs in.',
  tipDiscordClientId: 'Paste the Client ID of your Discord app here (Developer Portal → OAuth2 / General).',
  tipDiscordRedirectUri: 'Exact callback URL registered in Discord. It must match 100%. Example: http://YOUR_IP:PORT/auth/discord/callback',
  tipDiscordClientSecret: 'Paste the Client Secret of your Discord app here. Keep it private.',
  tipStripeEnabled: 'Enable Stripe only when your keys are already configured.',
  tipStripeMode: 'Use test for testing and live for real payments.',
  tipStripeCurrency: 'Main billing currency. Usually EUR.',
  tipStripePublicKey: 'Stripe public key for the frontend or checkout.',
  tipStripeSecretKey: 'Stripe secret key. Keep it private.',
  tipStripeWebhookSecret: 'Stripe webhook secret used to validate payment callbacks.',
  tipSuccessUrl: 'Page the user returns to when the payment succeeds.',
  tipCancelUrl: 'Page the user returns to if the payment is cancelled.',
  tipDiscordEnabled: 'Enable Discord notices for purchases or balance changes.',
  tipDmPlayer: 'If set to Yes, the system will try to send a private message to the player.',
  tipGuildId: 'Discord server ID used for staff role checks or notices.',
  tipPurchasesChannel: 'Channel ID where purchases or confirmations will be posted.',
  tipDiscordBotToken: 'Discord bot token used to send messages and read roles. Keep it private.',
  tipChannelTemplate: 'Channel message template. You can use {player}, {pack}, {amount} and {coins}.',
  tipDmTemplate: 'Private message template for the player. You can use {player}, {pack}, {amount} and {coins}.',
  tipDeliveryQueue: 'If set to Yes, deliveries are queued before being processed.',
  tipOnlinePlayer: 'If set to Yes, the player must be online to receive the order.',
  tipWarnLimitsBeforeBuy: 'Show a warning before buying when there is a limit, cooldown or insufficient balance.',
  tipVisibleCategories: 'Comma-separated list of categories visible on the web.'
});


/* ===== final UI polish override ===== */
Object.assign(T.es, {
  generalStatus: 'Estado general',
  logsTitle: 'Logs',
  inventory: 'Inventario',
  clickPlayerNameInfo: 'Selecciona un jugador para ver su ficha a la derecha.',
  openEmbeddedMap: 'Abrir mapa incrustado',
  embeddedMapTitle: 'Mapa incrustado dentro del panel',
  embeddedMapText: 'Se abrirá fijado en este hueco y ocupará todo el recuadro principal del mapa.',
});
Object.assign(T.en, {
  generalStatus: 'General status',
  logsTitle: 'Logs',
  inventory: 'Inventory',
  clickPlayerNameInfo: 'Select a player to view the card on the right.',
  openEmbeddedMap: 'Open embedded map',
  embeddedMapTitle: 'Embedded map inside the panel',
  embeddedMapText: 'It will open anchored in this area and use the full main map box.',
});

views.players = function() {
  const players = state.state.players_cache || [];
  const current = selectedPlayer();
  return `
    <div class="player-master-layout">
      <div class="card panel">
        <div class="panel-head-inline">
          <div>
            <h2 style="margin:0">${t('players')}</h2>
            <div class="empty-note" style="margin-top:6px">${t('liveUpdating')} · ${t('lastRefresh')}: ${escapeHtml(state.state.last_players_refresh || '-')}</div>
          </div>
          <div class="inline-actions"><button class="btn" onclick="refreshPlayers()">${t('refreshPlayers')}</button></div>
        </div>
        <div class="help-text" style="margin-bottom:12px">${t('clickPlayerNameInfo')}</div>
        ${players.length ? `
          <table class="table players-table players-compact-table">
            <thead><tr><th>${t('slot')}</th><th>${t('playerName')}</th><th>${t('steamId')}</th><th>${t('position')}</th><th>${t('options')}</th></tr></thead>
            <tbody>
              ${players.map((p, index) => `
                <tr class="${state.selectedPlayerIndex === index ? 'row-selected' : ''}" onclick="selectPlayer(${index})">
                  <td>${escapeHtml(p.slot || '-')}</td>
                  <td><button class="linkish-btn" type="button" onclick="event.preventDefault();event.stopPropagation();selectPlayer(${index})">${escapeHtml(playerDisplayName(p))}</button></td>
                  <td>${escapeHtml(playerSteamText(p))}</td>
                  <td>${escapeHtml(playerPosText(p))}</td>
                  <td>
                    <button class="small-btn" type="button" onclick="event.preventDefault();event.stopPropagation();togglePlayerMenu(${index})">${t('options')}</button>
                    ${state.playerMenuIndex === index ? `<div class="player-menu"><button class="small-btn" type="button" onclick="event.preventDefault();event.stopPropagation();copyPlayerField(${index},'name')">${t('copyName')}</button><button class="small-btn" type="button" onclick="event.preventDefault();event.stopPropagation();copyPlayerField(${index},'id')">${t('copyId')}</button><button class="small-btn" type="button" onclick="event.preventDefault();event.stopPropagation();copyPlayerField(${index},'steam')">${t('copySteam')}</button><button class="small-btn danger" type="button" onclick="event.preventDefault();event.stopPropagation();kickPlayer(${index})">${t('kickPlayer')}</button></div>` : ''}
                  </td>
                </tr>`).join('')}
            </tbody>
          </table>` : `<div class="empty-note">${t('noPlayerData')}<br>${t('clickRefreshIfNeeded')}</div>`}
      </div>
      <div class="card panel sticky-panel">
        <h2>${t('selectedPlayer')}</h2>
        ${playerCard(current)}
      </div>
    </div>`;
};

views.inventory = function() {
  const current = selectedPlayer();
  return `
    <div class="grid grid-2">
      <div class="card panel">
        <div class="panel-head-inline"><h2>${t('inventory')}</h2><div class="inline-actions"><button class="btn" onclick="go('players')">${t('players')}</button><button class="btn" onclick="refreshPlayers()">${t('refreshPlayers')}</button></div></div>
        ${playerInventoryCard(current)}
      </div>
      <div class="card panel">
        ${infoNote(t('inventoryHowTitle'), t('inventoryHowText'))}
        ${infoNote(t('inventoryLimitTitle'), t('inventoryLimitText'))}
      </div>
    </div>`;
};

views.settings = function() {
  const c = state.state.config;
  const mapSizeValue = String(c.map_size_mode || '8192');
  const mapSizeOptions = [
    { value: '6144', label: t('mapSize6144') },
    { value: '8192', label: t('mapSize8192') },
    { value: '10240', label: t('mapSize10240') },
    { value: 'custom', label: t('mapSizeCustom') }
  ];
  return `
    <div class="grid">
      <div class="card panel">
        <div class="panel-head-inline">
          <div>
            <h2 style="margin:0">${t('generalSettings')}</h2>
            <div class="help-text" style="margin-top:6px">${t('settingsHint')}</div>
          </div>
          <div class="inline-actions">
            <button class="btn" onclick="chooseSplash()">${t('changeStartupImage')}</button>
            <button class="btn" onclick="exportManagerConfig()">${t('exportConfig')}</button>
            <button class="btn" onclick="importManagerConfig()">${t('importConfig')}</button>
            <button class="btn btn-primary" onclick="saveSettings()">${t('saveSettings')}</button>
          </div>
        </div>
        <div class="input-grid">
          ${field('server_name', t('serverName'), c.server_name || '')}
          ${fieldSelect('language', t('language'), c.language || state.lang, [{value:'es', label:'Español'},{value:'en', label:'English'}])}
          ${fieldBrowse('server_folder', t('serverPath'), c.server_folder || '', 'folder', t('selectServerFolder'))}
          ${fieldBrowse('executable_path', t('exeOrBat'), c.executable_path || '', 'exe_bat', t('selectExecutable'))}
          ${fieldBrowse('working_directory', t('workingDirectory'), c.working_directory || '', 'folder', t('selectWorkingDirectory'))}
          ${fieldBrowse('xml_path', t('realServerConfig'), c.xml_path || '', 'xml', t('selectServerConfig'))}
          ${fieldBrowse('backup_folder', t('backupFolder'), c.backup_folder || '', 'folder', t('selectBackupFolder'))}
          ${field('telnet_host', t('telnetHost'), c.telnet_host || '127.0.0.1')}
          ${field('telnet_port', t('telnetPort'), c.telnet_port || 8081)}
          ${field('telnet_password', t('telnetPassword'), c.telnet_password || '', 'password')}
          ${field('panel_host', t('panelHost'), c.panel_host || '127.0.0.1')}
          ${field('panel_port', t('panelPort'), c.panel_port || 8765)}
          ${field('accent_color', t('accentColor'), c.accent_color || '#55a7ff')}
          ${fieldSelect('auto_restart_enabled', t('autoRestartEnabled'), c.auto_restart_enabled ? 'true' : 'false', [{value:'false', label:t('disabled')},{value:'true', label:t('enabled')}])}
          ${field('auto_restart_delay_seconds', t('autoRestartDelay'), c.auto_restart_delay_seconds || 15, 'number')}
        </div>
        <div class="help-text" style="margin-top:14px">${t('externalMapConfiguredNote')}</div>
      </div>
    </div>`;
};

async function saveSettings() {
  try {
    const payload = {
      server_name: $('server_name').value,
      server_folder: $('server_folder').value,
      executable_path: $('executable_path').value,
      working_directory: $('working_directory').value,
      xml_path: $('xml_path').value,
      telnet_host: $('telnet_host').value,
      telnet_port: $('telnet_port').value,
      telnet_password: $('telnet_password').value,
      panel_host: $('panel_host').value,
      panel_port: $('panel_port').value,
      accent_color: $('accent_color').value,
      backup_folder: $('backup_folder').value,
      live_map_url: $('live_map_url').value,
      map_image_path: $('map_image_path').value,
      map_size_mode: $('map_size_mode').value,
      map_custom_size: $('map_custom_size') ? $('map_custom_size').value : $('map_size_mode').value,
      auto_restart_enabled: $('auto_restart_enabled').value === 'true',
      auto_restart_delay_seconds: $('auto_restart_delay_seconds').value,
      language: $('language') ? $('language').value : state.lang
    };
    await api('/api/config/save', 'POST', payload);
    state.lang = payload.language;
    toast(t('settingsSaved'));
    state.mapImageVersion = Date.now();
    await refreshState(true);
    go('settings');
  } catch (err) {
    toast(err.message, true);
  }
}

views.liveMap = function() {
  const liveMapUrl = String((state.state.config && state.state.config.live_map_url) || '').trim();
  if (!liveMapUrl) {
    return `
      <div class="grid">
        <div class="card panel map-full-panel">
          <h2 style="margin:0 0 12px 0">${t('liveMap')}</h2>
          <div class="empty-note">${t('externalMapUnavailable')}</div>
        </div>
      </div>`;
  }
  return `
    <div class="grid">
      <div class="card panel map-full-panel">
        <div class="panel-head-inline">
          <div>
            <h2 style="margin:0">${t('liveMap')}</h2>
            <div class="help-text" style="margin-top:6px">${t('liveMapEmbedHint')}</div>
          </div>
          <div class="inline-actions">
            <button class="btn btn-primary" onclick="openLiveMapLoginWindow()">${t('openEmbeddedMap')}</button>
          </div>
        </div>
        <div id="kwEmbeddedLiveMapShell" class="kw-embedded-map-shell kw-embedded-map-shell-full">
          <div class="kw-embedded-map-placeholder">
            <div class="kw-embedded-map-placeholder-card">
              <strong>${t('embeddedMapTitle')}</strong>
              <div class="help-text">${t('embeddedMapText')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
};


/* ===== KarmaWorld overrides: inventory + summary/backups/tasks split ===== */
state.playerInventories = state.playerInventories || {};

Object.assign(T.es, {
  logsTitle: 'Resumen',
  inventoryApiUrl: 'URL API inventario',
  inventoryApiUser: 'Usuario API inventario',
  inventoryApiPassword: 'Contraseña API inventario',
  itemIconsFolder: 'Carpeta iconos objetos',
  selectItemIconsFolder: 'Selecciona carpeta de iconos',
  inventoryApiHint: 'Para ver inventarios reales necesitas Allocs Server Fixes / Web API o el comando showinventory/si en el servidor. La URL puede ser la del webmap/base API.',
  inventoryLoad: 'Cargar inventario',
  inventoryReload: 'Recargar inventario',
  inventorySource: 'Origen',
  inventoryUpdatedAt: 'Actualizado',
  inventoryNotLoaded: 'Todavía no se ha cargado el inventario de este jugador.',
  inventoryNoData: 'No hay datos de inventario disponibles para este jugador.',
  inventoryNeedsSupport: 'Este botón solo funcionará si tu servidor tiene soporte real de inventario por API o por showinventory.',
  inventoryErrorHint: 'Si falla, revisa la URL/API del inventario o instala Allocs Server Fixes.',
  inventoryEmptySection: 'Sin objetos detectados.',
  inventorySlot: 'Slot',
  inventoryQuality: 'Calidad',
  restartTasksOnlyTitle: 'Reinicios programados',
  restartTasksOnlyText: 'Aquí solo se configuran reinicios automáticos. Los backups programados están en la pestaña Backups.',
  backupTasksOnlyTitle: 'Backups programados',
  backupTasksOnlyText: 'Aquí configuras las copias programadas. Los reinicios programados están en la pestaña Tareas programadas.',
  noRestartTasksYet: 'No hay reinicios programados todavía.',
  noBackupTasksYet: 'No hay backups programados todavía.',
  summaryHint: 'Resumen técnico del servidor y del panel.',
  latestBackups: 'Últimos backups',
  noIconsFolder: 'Sin carpeta de iconos configurada',
  inventoryIconsStatus: 'Iconos inventario',
  createBackupNow: 'Crear backup ahora'
});
Object.assign(T.en, {
  logsTitle: 'Summary',
  inventoryApiUrl: 'Inventory API URL',
  inventoryApiUser: 'Inventory API user',
  inventoryApiPassword: 'Inventory API password',
  itemIconsFolder: 'Item icons folder',
  selectItemIconsFolder: 'Select item icons folder',
  inventoryApiHint: 'To view real inventories you need Allocs Server Fixes / Web API or the showinventory/si command on the server. The URL can be your webmap/base API URL.',
  inventoryLoad: 'Load inventory',
  inventoryReload: 'Reload inventory',
  inventorySource: 'Source',
  inventoryUpdatedAt: 'Updated',
  inventoryNotLoaded: 'This player inventory has not been loaded yet.',
  inventoryNoData: 'No inventory data available for this player.',
  inventoryNeedsSupport: 'This only works if your server has real inventory support through API or showinventory.',
  inventoryErrorHint: 'If it fails, check the inventory URL/API or install Allocs Server Fixes.',
  inventoryEmptySection: 'No items detected.',
  inventorySlot: 'Slot',
  inventoryQuality: 'Quality',
  restartTasksOnlyTitle: 'Scheduled restarts',
  restartTasksOnlyText: 'Only automatic restarts are configured here. Scheduled backups are in the Backups tab.',
  backupTasksOnlyTitle: 'Scheduled backups',
  backupTasksOnlyText: 'Configure scheduled backups here. Scheduled restarts are in the Scheduled tasks tab.',
  noRestartTasksYet: 'There are no scheduled restarts yet.',
  noBackupTasksYet: 'There are no scheduled backups yet.',
  summaryHint: 'Technical server and panel summary.',
  latestBackups: 'Latest backups',
  noIconsFolder: 'No icons folder configured',
  inventoryIconsStatus: 'Inventory icons',
  createBackupNow: 'Create backup now'
});

function inventoryPlayerKey(player) {
  if (!player) return '';
  return String(player.steamid || player.eosid || player.entityid || player.slot || player.name || '').trim();
}

function currentInventoryData() {
  const player = selectedPlayer();
  if (!player) return null;
  return state.playerInventories[inventoryPlayerKey(player)] || null;
}

function inventoryIconUrl(item) {
  const name = item && (item.icon || item.name);
  return name ? `/api/item-icon?name=${encodeURIComponent(name)}` : '';
}

function inventoryItemsHtml(items, emptyText) {
  if (!items || !items.length) return `<div class="empty-note">${emptyText}</div>`;
  return `<div class="kw-inv-grid">${items.map(item => {
    const slot = item.slot ?? '-';
    const count = Number(item.count || 0);
    const name = escapeHtml(item.name || '-');
    const quality = item.quality !== null && item.quality !== undefined && item.quality !== '' && Number(item.quality) >= 0 ? `Q${escapeHtml(item.quality)}` : '';
    const iconUrl = inventoryIconUrl(item);
    return `<div class="kw-inv-item card">
      <div class="kw-inv-thumb-wrap">${iconUrl ? `<img class="kw-inv-thumb" src="${iconUrl}" alt="${name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">` : ''}<div class="kw-inv-thumb-fallback" style="${iconUrl ? 'display:none' : 'display:flex'}">${escapeHtml(String(name).slice(0,1) || '?')}</div></div>
      <div class="kw-inv-meta"><strong>${name}</strong><span>${t('inventorySlot')}: ${escapeHtml(slot)}</span></div>
      <div class="kw-inv-side"><span class="badge default">x${count}</span>${quality ? `<span class="badge ok">${quality}</span>` : ''}</div>
    </div>`;
  }).join('')}</div>`;
}

function inventoryEquipmentHtml(equipment) {
  const entries = equipment ? Object.entries(equipment) : [];
  if (!entries.length) return `<div class="empty-note">${t('inventoryEmptySection')}</div>`;
  return inventoryItemsHtml(entries.map(([slot, item]) => ({...item, slot})), t('inventoryEmptySection'));
}

async function loadPlayerInventory(silent = false) {
  try {
    const player = selectedPlayer();
    if (!player) {
      if (!silent) toast(t('noPlayerSelected'), true);
      return;
    }
    const res = await api('/api/player/inventory', 'POST', { player });
    state.playerInventories[inventoryPlayerKey(player)] = res.data || null;
    if (!silent) toast(t('inventoryReload'));
    if (state.section === 'inventory') render(true);
  } catch (err) {
    if (!silent) toast(err.message, true);
    const player = selectedPlayer();
    if (player) state.playerInventories[inventoryPlayerKey(player)] = { error: err.message };
    if (state.section === 'inventory') render(true);
  }
}

function taskRowsByType(type) {
  const all = state.collections.tasks || [];
  const rows = [];
  all.forEach((task, index) => {
    if ((task.type || 'restart') === type) rows.push({ task, index });
  });
  return rows;
}

function addRestartTaskOnly() { addTask('restart'); }
function addBackupTaskOnly() { addTask('backup'); }

function renderTaskTableRows(rows, emptyText) {
  return rows.length ? rows.map(({task, index}) => `
    <tr>
      <td><input data-task-index="${index}" data-key="name" value="${escapeHtml(task.name || '')}" placeholder="${t('name')}"></td>
      <td>${escapeHtml(task.type === 'backup' ? t('backups') : t('restart'))}</td>
      <td><input data-task-index="${index}" data-key="cron" value="${escapeHtml(task.cron || '')}" placeholder="0 6 * * *"></td>
      <td><label class="switch"><input type="checkbox" data-task-index="${index}" data-key="active" ${task.active !== false ? 'checked' : ''}><span></span></label></td>
      <td><button class="btn danger" onclick="removeTask(${index});render()">${t('remove')}</button></td>
    </tr>`).join('') : `<tr><td colspan="5" class="empty-note">${emptyText}</td></tr>`;
}

views.dashboard = function() {
  const s = state.state;
  const config = s.config;
  const autoRestartLabel = config.auto_restart_enabled ? `${t('enabled')} · ${config.auto_restart_delay_seconds || 15}s` : t('disabled');
  const startedAt = s.started_at ? formatDateTime(s.started_at) : '-';
  const recentLines = (s.console_lines || []).slice(-10);
  const latestBackups = (state.backups || []).slice(0, 3);
  return `
    <div class="grid">
      <div class="stats">
        <div class="stat card"><small>${t('status')}</small><strong>${s.running ? t('on') : t('off')}</strong></div>
        <div class="stat card"><small>${t('playersOnline')}</small><strong>${(s.players_cache || []).length}</strong></div>
        <div class="stat card"><small>${t('pid')}</small><strong>${s.pid || '-'}</strong></div>
        <div class="stat card"><small>${t('startedAt')}</small><strong>${startedAt}</strong></div>
        <div class="stat card"><small>${t('autoRestart')}</small><strong>${autoRestartLabel}</strong></div>
      </div>
      <div class="grid grid-2">
        <div class="card panel">
          <div class="panel-head-inline"><h2>${t('generalStatus')}</h2><span class="badge ${s.running ? 'ok' : 'off'}">${s.running ? t('serverOn') : t('serverOff')}</span></div>
          <div class="label-grid">
            <div>${t('serverFolder')}</div><div>${escapeHtml(config.server_folder || '-')}</div>
            <div>${t('executable')}</div><div>${escapeHtml(config.executable_path || '-')}</div>
            <div>${t('workingFolder')}</div><div>${escapeHtml(config.working_directory || '-')}</div>
            <div>${t('realXml')}</div><div>${escapeHtml(config.xml_path || '-')}</div>
            <div>${t('backupFolder')}</div><div>${escapeHtml(config.backup_folder || '-')}</div>
            <div>${t('inventoryIconsStatus')}</div><div>${escapeHtml(config.item_icons_folder || t('noIconsFolder'))}</div>
            <div>${t('telnet')}</div><div>${escapeHtml(config.telnet_host || '-')} : ${escapeHtml(config.telnet_port || '-')}</div>
            <div>${t('panelAddress')}</div><div>${escapeHtml(config.panel_host || '-')} : ${escapeHtml(config.panel_port || '-')}</div>
          </div>
          <div class="inline-actions" style="margin-top:14px"><button class="btn" onclick="go('backups')">${t('backups')}</button><button class="btn" onclick="go('tasks')">${t('scheduledTasks')}</button><button class="btn" onclick="go('inventory')">${t('inventory')}</button></div>
        </div>
        <div class="card panel">
          <h2>${t('recentActivity')}</h2>
          <div class="console-box compact-box"><div class="console-output">${recentLines.length ? escapeHtml(recentLines.join('\\n')) : `<span class="empty-note">${t('noRecentEvents')}</span>`}</div></div>
        </div>
      </div>
      <div class="card panel">
        <div class="panel-head-inline"><h2>${t('latestBackups')}</h2><div class="inline-actions"><button type="button" class="btn" onclick="loadBackups();return false">${t('refreshList')}</button><button type="button" class="btn btn-primary" onclick="serverAction('backup');return false">${t('createBackupNow')}</button></div></div>
        ${latestBackups.length ? `<table class="table"><thead><tr><th>${t('name')}</th><th>${t('backupModified')}</th><th>${t('backupSize')}</th></tr></thead><tbody>${latestBackups.map(row => `<tr><td>${escapeHtml(row.name)}</td><td>${escapeHtml(row.modified || '-')}</td><td>${escapeHtml(row.size_text || '-')}</td></tr>`).join('')}</tbody></table>` : `<div class="empty-note">${t('noBackupsYet')}</div>`}
      </div>
    </div>`;
};

views.server = function() {
  const s = state.state;
  const cfg = s.config;
  return `
    <div class="grid">
      <div class="card panel">
        <div class="panel-head-inline"><h2>${t('logsTitle')}</h2><button class="btn" onclick="refreshState()">${t('refresh')}</button></div>
        <div class="help-text" style="margin-bottom:14px">${t('summaryHint')}</div>
        <div class="label-grid">
          <div>${t('status')}</div><div>${s.running ? t('on') : t('off')}</div>
          <div>${t('pid')}</div><div>${s.pid || '-'}</div>
          <div>${t('startedAt')}</div><div>${s.started_at ? formatDateTime(s.started_at) : '-'}</div>
          <div>${t('playersOnline')}</div><div>${(s.players_cache || []).length}</div>
          <div>${t('autoRestart')}</div><div>${cfg.auto_restart_enabled ? `${t('enabled')} · ${escapeHtml(cfg.auto_restart_delay_seconds || 15)}s` : t('disabled')}</div>
          <div>${t('scheduledTasks')}</div><div>${taskRowsByType('restart').length}</div>
          <div>${t('backups')}</div><div>${(state.backups || []).length}</div>
          <div>${t('serverFolder')}</div><div>${escapeHtml(cfg.server_folder || '-')}</div>
          <div>${t('executable')}</div><div>${escapeHtml(cfg.executable_path || '-')}</div>
          <div>${t('workingFolder')}</div><div>${escapeHtml(cfg.working_directory || '-')}</div>
          <div>${t('realXml')}</div><div>${escapeHtml(cfg.xml_path || '-')}</div>
          <div>${t('backupFolder')}</div><div>${escapeHtml(cfg.backup_folder || '-')}</div>
          <div>${t('inventoryIconsStatus')}</div><div>${escapeHtml(cfg.item_icons_folder || t('noIconsFolder'))}</div>
          <div>${t('telnet')}</div><div>${escapeHtml(cfg.telnet_host || '-')} : ${escapeHtml(cfg.telnet_port || '-')}</div>
          <div>${t('panelAddress')}</div><div>${escapeHtml(cfg.panel_host || '-')} : ${escapeHtml(cfg.panel_port || '-')}</div>
          <div>${t('inventoryApiUrl')}</div><div>${escapeHtml(cfg.inventory_api_base_url || cfg.live_map_url || '-')}</div>
          <div>${t('lastRefresh')}</div><div>${escapeHtml(s.last_players_refresh || '-')}</div>
        </div>
      </div>
    </div>`;
};

views.tasks = function() {
  const rows = taskRowsByType('restart');
  return `
    <div class="grid">
      <div class="card panel">
        <div class="panel-head-inline">
          <div>
            <h2 style="margin:0">${t('restartTasksOnlyTitle')}</h2>
            <div class="help-text" style="margin-top:6px">${t('restartTasksOnlyText')}</div>
          </div>
          <div class="inline-actions">
            <button type="button" class="btn" onclick="addRestartTaskOnly();return false">${t('addRestartTask')}</button>
            <button type="button" class="btn btn-primary" onclick="saveTasks();return false">${t('saveTasks')}</button>
          </div>
        </div>
        <table class="table">
          <thead><tr><th>${t('name')}</th><th>${t('taskType')}</th><th>${t('cron')}</th><th>${t('active')}</th><th></th></tr></thead>
          <tbody>${renderTaskTableRows(rows, t('noRestartTasksYet'))}</tbody>
        </table>
        ${infoNote(t('helpTasksTitle'), t('helpTasksText'))}
      </div>
    </div>`;
};

views.backups = function() {
  const backups = state.backups || [];
  const rows = taskRowsByType('backup');
  return `
    <div class="grid">
      <div class="card panel">
        <div class="panel-head-inline">
          <div>
            <h2>${t('backups')}</h2>
            <div class="help-text" style="margin-top:6px">${t('backupHint')}</div>
            <div class="help-text" style="margin-top:8px"><strong>${t('backupRoute')}:</strong> ${escapeHtml((state.state && state.state.config && state.state.config.backup_folder) || '-')}</div>
          </div>
          <div class="inline-actions">
            <button type="button" class="btn btn-primary" onclick="serverAction('backup');return false">${t('createBackupNow')}</button>
            <button type="button" class="btn" onclick="loadBackups();return false">${t('refreshList')}</button>
          </div>
        </div>
        <table class="table">
          <thead><tr><th>${t('name')}</th><th>${t('backupModified')}</th><th>${t('backupSize')}</th><th>${t('backupActions')}</th></tr></thead>
          <tbody>
            ${backups.length ? backups.map(row => `
              <tr>
                <td>${escapeHtml(row.name)}</td>
                <td>${escapeHtml(row.modified || '-')}</td>
                <td>${escapeHtml(row.size_text || '-')}</td>
                <td>
                  <div class="inline-actions">
                    <button class="btn" onclick="copyToClipboard('${String(row.path || '').replace(/'/g, "\\'")}')">${t('copyPath')}</button>
                    <button class="btn" onclick="restoreBackup('${String(row.path || '').replace(/'/g, "\\'")}')">${t('restore')}</button>
                    <button class="btn danger" onclick="deleteBackup('${String(row.path || '').replace(/'/g, "\\'")}')">${t('remove')}</button>
                  </div>
                </td>
              </tr>`).join('') : `<tr><td colspan="4" class="empty-note">${t('noBackupsYet')}</td></tr>`}
          </tbody>
        </table>
      </div>
      <div class="card panel">
        <div class="panel-head-inline">
          <div>
            <h2 style="margin:0">${t('backupTasksOnlyTitle')}</h2>
            <div class="help-text" style="margin-top:6px">${t('backupTasksOnlyText')}</div>
          </div>
          <div class="inline-actions">
            <button type="button" class="btn" onclick="addBackupTaskOnly();return false">${t('addBackupTask')}</button>
            <button type="button" class="btn btn-primary" onclick="saveTasks();return false">${t('saveTasks')}</button>
          </div>
        </div>
        <table class="table">
          <thead><tr><th>${t('name')}</th><th>${t('taskType')}</th><th>${t('cron')}</th><th>${t('active')}</th><th></th></tr></thead>
          <tbody>${renderTaskTableRows(rows, t('noBackupTasksYet'))}</tbody>
        </table>
        ${infoNote(t('backups'), t('backupHowWorks'))}
      </div>
    </div>`;
};

function inventoryMetaBox(player, data) {
  return `
    <div class="label-grid inventory-grid-meta">
      <div>${t('playerName')}</div><div>${escapeHtml(playerDisplayName(player))}</div>
      <div>${t('steamId')}</div><div>${escapeHtml(playerSteamText(player))}</div>
      <div>${t('entityId')}</div><div>${escapeHtml(player.entityid || '-')}</div>
      <div>${t('position')}</div><div>${escapeHtml(playerPosText(player))}</div>
      <div>${t('inventorySource')}</div><div>${escapeHtml((data && data.source) || '-')}</div>
      <div>${t('inventoryUpdatedAt')}</div><div>${escapeHtml((data && formatDateTime(data.updated_at)) || '-')}</div>
    </div>`;
}

playerInventoryCard = function(player) {
  if (!player) return `<div class="empty-note">${t('noPlayerSelected')}</div>`;
  const data = currentInventoryData();
  const hasData = data && !data.error && ((data.belt && data.belt.length) || (data.bag && data.bag.length) || (data.equipment && Object.keys(data.equipment).length));
  return `
    <div class="inventory-shell kw-inventory-shell-compact">
      <div class="info-box" style="margin-bottom:10px">
        <h3>${t('inventoryTitle')}</h3>
        <div class="help-text">${t('inventoryHint')}</div>
      </div>
      ${inventoryMetaBox(player, data)}
      <div class="inline-actions" style="margin-top:12px;margin-bottom:6px"><button class="btn btn-primary" onclick="loadPlayerInventory()">${data ? t('inventoryReload') : t('inventoryLoad')}</button><button class="btn" onclick="refreshPlayers()">${t('refreshPlayers')}</button></div>
      ${data && data.error ? `<div class="empty-note">${escapeHtml(data.error)}<br>${t('inventoryErrorHint')}</div>` : ''}
      ${!data ? `<div class="empty-note">${t('inventoryNotLoaded')}<br>${t('inventoryNeedsSupport')}</div>` : ''}
      ${data && !hasData && !data.error ? `<div class="empty-note">${t('inventoryNoData')}</div>` : ''}
      ${hasData ? `
      <div class="kw-inv-panels">
        <div class="card panel inventory-panel compact-inv-panel"><h3>${t('belt')}</h3>${inventoryItemsHtml(data.belt || [], t('inventoryEmptySection'))}</div>
        <div class="card panel inventory-panel compact-inv-panel"><h3>${t('bag')}</h3>${inventoryItemsHtml(data.bag || [], t('inventoryEmptySection'))}</div>
        <div class="card panel inventory-panel compact-inv-panel"><h3>${t('equipment')}</h3>${inventoryEquipmentHtml(data.equipment || {})}</div>
      </div>` : ''}
    </div>`;
};

views.inventory = function() {
  const current = selectedPlayer();
  return `
    <div class="grid grid-2">
      <div class="card panel">
        <div class="panel-head-inline"><h2>${t('inventory')}</h2><div class="inline-actions"><button class="btn" onclick="go('players')">${t('players')}</button><button class="btn" onclick="loadPlayerInventory()">${t('inventoryLoad')}</button></div></div>
        ${playerInventoryCard(current)}
      </div>
      <div class="card panel">
        ${infoNote(t('inventoryHowTitle'), t('inventoryHowText'))}
        ${infoNote(t('inventoryLimitTitle'), t('inventoryLimitText'))}
        ${infoNote(t('inventoryApiUrl'), t('inventoryApiHint'))}
      </div>
    </div>`;
};

views.settings = function() {
  const c = state.state.config;
  const mapSizeValue = String(c.map_size_mode || '8192');
  const mapSizeOptions = [
    { value: '6144', label: t('mapSize6144') },
    { value: '8192', label: t('mapSize8192') },
    { value: '10240', label: t('mapSize10240') },
    { value: 'custom', label: t('mapSizeCustom') }
  ];
  return `
    <div class="grid">
      <div class="card panel">
        <div class="panel-head-inline">
          <div>
            <h2 style="margin:0">${t('generalSettings')}</h2>
            <div class="help-text" style="margin-top:6px">${t('settingsHint')}</div>
          </div>
          <div class="inline-actions">
            <button class="btn" onclick="chooseSplash()">${t('changeStartupImage')}</button>
            <button class="btn" onclick="exportManagerConfig()">${t('exportConfig')}</button>
            <button class="btn" onclick="importManagerConfig()">${t('importConfig')}</button>
            <button class="btn btn-primary" onclick="saveSettings()">${t('saveSettings')}</button>
          </div>
        </div>
        <div class="input-grid">
          ${field('server_name', t('serverName'), c.server_name || '')}
          ${fieldSelect('language', t('language'), c.language || state.lang, [{value:'es', label:'Español'},{value:'en', label:'English'}])}
          ${fieldBrowse('server_folder', t('serverPath'), c.server_folder || '', 'folder', t('selectServerFolder'))}
          ${fieldBrowse('executable_path', t('exeOrBat'), c.executable_path || '', 'exe_bat', t('selectExecutable'))}
          ${fieldBrowse('working_directory', t('workingDirectory'), c.working_directory || '', 'folder', t('selectWorkingDirectory'))}
          ${fieldBrowse('xml_path', t('realServerConfig'), c.xml_path || '', 'xml', t('selectServerConfig'))}
          ${fieldBrowse('backup_folder', t('backupFolder'), c.backup_folder || '', 'folder', t('selectBackupFolder'))}
          ${field('inventory_api_base_url', t('inventoryApiUrl'), c.inventory_api_base_url || '')}
          ${field('inventory_api_user', t('inventoryApiUser'), c.inventory_api_user || 'admin')}
          ${field('inventory_api_password', t('inventoryApiPassword'), c.inventory_api_password || '', 'password')}
          ${fieldBrowse('item_icons_folder', t('itemIconsFolder'), c.item_icons_folder || '', 'folder', t('selectItemIconsFolder'))}
          ${field('telnet_host', t('telnetHost'), c.telnet_host || '127.0.0.1')}
          ${field('telnet_port', t('telnetPort'), c.telnet_port || 8081)}
          ${field('telnet_password', t('telnetPassword'), c.telnet_password || '', 'password')}
          ${field('panel_host', t('panelHost'), c.panel_host || '127.0.0.1')}
          ${field('panel_port', t('panelPort'), c.panel_port || 8765)}
          ${field('accent_color', t('accentColor'), c.accent_color || '#55a7ff')}
          ${fieldSelect('auto_restart_enabled', t('autoRestartEnabled'), c.auto_restart_enabled ? 'true' : 'false', [{value:'false', label:t('disabled')},{value:'true', label:t('enabled')}])}
          ${field('auto_restart_delay_seconds', t('autoRestartDelay'), c.auto_restart_delay_seconds || 15, 'number')}
        </div>
        <div class="help-text" style="margin-top:14px">${t('inventoryApiHint')}</div>
      </div>
    </div>`;
};

async function saveSettings() {
  try {
    const payload = {
      server_name: $('server_name').value,
      server_folder: $('server_folder').value,
      executable_path: $('executable_path').value,
      working_directory: $('working_directory').value,
      xml_path: $('xml_path').value,
      telnet_host: $('telnet_host').value,
      telnet_port: $('telnet_port').value,
      telnet_password: $('telnet_password').value,
      panel_host: $('panel_host').value,
      panel_port: $('panel_port').value,
      accent_color: $('accent_color').value,
      backup_folder: $('backup_folder').value,
      live_map_url: $('live_map_url').value,
      inventory_api_base_url: $('inventory_api_base_url').value,
      inventory_api_user: $('inventory_api_user').value,
      inventory_api_password: $('inventory_api_password').value,
      item_icons_folder: $('item_icons_folder').value,
      map_image_path: $('map_image_path').value,
      map_size_mode: $('map_size_mode').value,
      map_custom_size: $('map_custom_size') ? $('map_custom_size').value : $('map_size_mode').value,
      auto_restart_enabled: $('auto_restart_enabled').value === 'true',
      auto_restart_delay_seconds: $('auto_restart_delay_seconds').value,
      language: $('language') ? $('language').value : state.lang
    };
    await api('/api/config/save', 'POST', payload);
    state.lang = payload.language;
    toast(t('settingsSaved'));
    state.mapImageVersion = Date.now();
    await refreshState(true);
    go('settings');
  } catch (err) {
    toast(err.message, true);
  }
}

function selectPlayer(index) {
  state.selectedPlayerIndex = index;
  state.playerMenuIndex = null;
  render(true);
  if (state.section === 'inventory') {
    setTimeout(() => loadPlayerInventory(true), 50);
  }
}

async function refreshPlayers(silent = false) {
  try {
    const res = await api('/api/players/refresh', 'POST', {});
    if (!silent) toast(res.message);
    await refreshState(true);
    if (state.section === 'inventory' && selectedPlayer()) {
      await loadPlayerInventory(true);
    }
  } catch (err) {
    if (!silent) toast(err.message, true);
  }
}

function go(section) {
  if (['permissions', 'store', 'vip', 'chat', 'mods'].includes(section)) {
    section = 'dashboard';
  }
  if (section !== 'liveMap') {
    closeLiveMapWindowsHard();
  } else if (state.section === 'liveMap' && section !== 'liveMap') {
    stopEmbeddedLiveMapSync(true);
  }
  state.section = section;
  render();
  if (section !== 'liveMap') {
    setTimeout(closeLiveMapWindowsHard, 120);
    setTimeout(closeLiveMapWindowsHard, 420);
  }
  if (section === 'serverconfig' && !state.structuredXml.length) loadXmlAll();
  if (section === 'backups') loadBackups(true);
  if ((section === 'players' || section === 'inventory') && state.state?.config?.telnet_host) {
    refreshPlayers(true).then(() => {
      if (section === 'inventory' && selectedPlayer()) loadPlayerInventory(true);
    });
  }
  if (section === 'inventory' && selectedPlayer()) {
    const data = currentInventoryData();
    if (!data || data.error) setTimeout(() => loadPlayerInventory(true), 80);
  }
}


/* ===== Final cleanup overrides: ayuda, inventario, mapa externo y avisos Discord ===== */
Object.assign(T.es, {
  openMapLink: 'Abrir mapa web',
  noMapUrlConfigured: 'Primero configura la URL del mapa web en Ajustes.',
  helpSectionTitle: 'Ayuda del panel',
  helpSectionText: 'Resumen claro de las funciones que sí están activas en esta versión del server kit.',
  helpGeneralStatusTitle: 'Estado general',
  helpGeneralStatusText: 'Muestra el estado del servidor, bot, jugadores, PID, rutas principales y accesos rápidos a inventario, backups y tareas.',
  helpSummaryTitle: 'Resumen técnico',
  helpSummaryText: 'Contiene los datos técnicos completos del manager: estado, PID, rutas, telnet, panel, XML, iconos e inventario API.',
  helpInventoryTitle: 'Inventario',
  helpInventoryText: 'Selecciona un jugador y carga su inventario real. Si el servidor no tiene soporte real de inventario, verás un aviso explicándolo.',
  helpBackupsTitle: 'Backups',
  helpBackupsText: 'Desde aquí creas copias ZIP, ves las existentes, copias su ruta, restauras y programas backups automáticos.',
  helpTasksTitle: 'Tareas programadas',
  helpTasksText: 'Esta pestaña es solo para reinicios programados. Los backups programados se configuran dentro de la pestaña Backups.',
  helpServerConfigTitle: 'ServerConfig',
  helpServerConfigText: 'Aquí editas el serverconfig.xml del servidor. Los cambios se guardan en el archivo real configurado.',
  helpSettingsTitleFixed: 'Ajustes',
  helpSettingsTextFixed: 'Aquí configuras rutas, telnet, idioma, URL del mapa web, API de inventario, carpeta de iconos y avisos Discord del server kit.',
  helpDiscordNotifyTitle: 'Avisos Discord',
  helpDiscordNotifyText: 'Puedes usar un webhook de Discord o bot token + channel ID. Sirve para avisar cuando el servidor arranca, se para, se cae, crea backup o hace auto reinicio.',
  helpExternalMapTitle: 'Mapa web externo',
  helpExternalMapText: 'El server kit ya no incrusta el mapa dentro del panel. El botón del menú abre el enlace web del mapa en una pestaña aparte.',
  discordNotifyTitle: 'Notificaciones Discord del server kit',
  discordNotifyText: 'La forma más fácil es usar un webhook de Discord. Si rellenas webhook, no hace falta bot token ni channel ID.',
  discordNotifyEnabled: 'Activar avisos Discord',
  discordWebhookUrl: 'Webhook Discord',
  discordNotifyBotToken: 'Bot token Discord',
  discordNotifyChannelId: 'Channel ID Discord',
  discordNotifyMentions: 'Menciones opcionales',
  discordNotifyOnStart: 'Avisar al arrancar',
  discordNotifyOnStop: 'Avisar al parar manualmente',
  discordNotifyOnCrash: 'Avisar si se cae',
  discordNotifyOnBackup: 'Avisar al crear backup',
  discordNotifyOnAutoRestart: 'Avisar en auto reinicio',
  discordNotifyHint: 'Ejemplo de menciones: @everyone, @here o un rol como <@&IDROL>.',
  notificationsSavedHint: 'Si el webhook está relleno, el manager usará ese método primero.',
  inventoryHowTitle: 'Cómo funciona',
  inventoryHowText: 'El inventario se carga del jugador seleccionado. Si cambias de jugador, vuelve a cargarlo para ver datos reales.',
  inventoryLimitTitle: 'Requisitos',
  inventoryLimitText: 'Para ver inventarios reales necesitas Allocs Server Fixes / Web API o el comando showinventory/si disponible en el servidor.',
  mapLinkInMenu: 'Mapa web'
});
Object.assign(T.en, {
  openMapLink: 'Open web map',
  noMapUrlConfigured: 'Configure the web map URL first in Settings.',
  helpSectionTitle: 'Panel help',
  helpSectionText: 'Clear summary of what this version includes and where each panel feature is configured.',
  helpGeneralStatusTitle: 'General status',
  helpGeneralStatusText: 'Shows server status, bot, players, PID, main paths and quick access to inventory, backups and tasks.',
  helpSummaryTitle: 'Technical summary',
  helpSummaryText: 'Contains the full manager technical data: status, PID, paths, telnet, panel, XML, icons and inventory API.',
  helpInventoryTitle: 'Inventory',
  helpInventoryText: 'Select a player and load the real inventory. If the server has no real inventory support you will see a clear notice.',
  helpBackupsTitle: 'Backups',
  helpBackupsText: 'Create ZIP backups, list existing ones, copy the path, restore them and schedule automatic backups here.',
  helpTasksTitle: 'Scheduled tasks',
  helpTasksText: 'This tab is only for scheduled restarts. Scheduled backups are configured inside the Backups tab.',
  helpServerConfigTitle: 'ServerConfig',
  helpServerConfigText: 'Edit the serverconfig.xml here. Changes are saved to the real configured file.',
  helpSettingsTitleFixed: 'Settings',
  helpSettingsTextFixed: 'Configure paths, telnet, language, web map URL, inventory API, item icons folder and Discord notifications here.',
  helpDiscordNotifyTitle: 'Discord alerts',
  helpDiscordNotifyText: 'You can use a Discord webhook or bot token + channel ID. It notifies server start, manual stop, crash, backup and auto restart.',
  helpExternalMapTitle: 'External web map',
  helpExternalMapText: 'The server kit no longer embeds the map inside the panel. The menu button opens the web map link in a separate tab.',
  discordNotifyTitle: 'Server kit Discord notifications',
  discordNotifyText: 'The easiest way is a Discord webhook. If webhook is filled, bot token and channel ID are not required.',
  discordNotifyEnabled: 'Enable Discord notifications',
  discordWebhookUrl: 'Discord webhook',
  discordNotifyBotToken: 'Discord bot token',
  discordNotifyChannelId: 'Discord channel ID',
  discordNotifyMentions: 'Optional mentions',
  discordNotifyOnStart: 'Notify on start',
  discordNotifyOnStop: 'Notify on manual stop',
  discordNotifyOnCrash: 'Notify on crash',
  discordNotifyOnBackup: 'Notify on backup',
  discordNotifyOnAutoRestart: 'Notify on auto restart',
  discordNotifyHint: 'Example mentions: @everyone, @here or a role like <@&ROLEID>.',
  notificationsSavedHint: 'If the webhook is filled, the manager will use that method first.',
  inventoryHowTitle: 'How it works',
  inventoryHowText: 'Inventory is loaded for the selected player. If you switch players, load it again to view real data.',
  inventoryLimitTitle: 'Requirements',
  inventoryLimitText: 'To view real inventories you need Allocs Server Fixes / Web API or the showinventory/si command available on the server.',
  mapLinkInMenu: 'Web map'
});

openExternalMap = function() {
  const url = String((state.state && state.state.config && state.state.config.live_map_url) || '').trim();
  if (!url) {
    toast(t('noMapUrlConfigured'), true);
    return;
  }
  window.open(url, '_blank', 'noopener');
};

buildMenu = function() {
  const filtered = sectionKeys.filter(key => key !== 'liveMap');
  $('menu').innerHTML = filtered.map(key =>
    `<button class="${state.section === key ? 'active' : ''}" onclick="go('${key}')">${menuLabel(key)}</button>`
  ).join('');
  if ($('sidebarFooter')) {
    $('sidebarFooter').innerHTML = footerSectionKeys.map(key => `<button class="${state.section === key ? 'active' : ''}" onclick="go('${key}')">${menuLabel(key)}</button>`).join('');
  }
};

focusPlayerOnMap = function(index) {
  state.mapFocusIndex = index;
  state.playerMenuIndex = null;
  state.selectedPlayerIndex = index;
  render(true);
  openExternalMap();
};

views.helpdocs = function() {
  return `
    <div class="grid grid-2">
      <div class="card panel">
        <div class="info-box" style="margin-bottom:14px">
          <h3>${t('helpSectionTitle')}</h3>
          <div class="help-text">${t('helpSectionText')}</div>
        </div>
        ${infoNote(t('helpServerPathsTitle'), t('helpServerPathsText'))}
        ${infoNote(t('helpGeneralStatusTitle'), t('helpGeneralStatusText'))}
        ${infoNote(t('helpSummaryTitle'), t('helpSummaryText'))}
        ${infoNote(t('helpPlayersTitle'), t('helpPlayersText'))}
        ${infoNote(t('helpInventoryTitle'), t('helpInventoryText'))}
        ${infoNote(t('helpBackupsTitle'), t('helpBackupsText'))}
      </div>
      <div class="card panel">
        ${infoNote(t('helpTasksTitle'), t('helpTasksText'))}
        ${infoNote(t('helpServerConfigTitle'), t('helpServerConfigText'))}
        ${infoNote(t('helpSettingsTitleFixed'), t('helpSettingsTextFixed'))}
        ${infoNote(t('helpStartupTitle'), t('helpStartupText'))}
        ${infoNote(t('helpDiscordNotifyTitle'), t('helpDiscordNotifyText'))}
        ${infoNote(t('helpAccessTitle'), t('helpAccessText'))}
        ${infoNote(t('helpExternalMapTitle'), t('helpExternalMapText'))}
      </div>
    </div>`;
};

views.dashboard = function() {
  const s = state.state;
  const config = s.config;
  const autoRestartLabel = config.auto_restart_enabled ? `${t('enabled')} · ${config.auto_restart_delay_seconds || 15}s` : t('disabled');
  const startedAt = s.started_at ? formatDateTime(s.started_at) : '-';
  const recentLines = (s.console_lines || []).slice(-10);
  return `
    <div class="grid">
      <div class="stats">
        <div class="stat card"><small>${t('status')}</small><strong>${s.running ? t('on') : t('off')}</strong></div>
        <div class="stat card"><small>${t('playersOnline')}</small><strong>${(s.players_cache || []).length}</strong></div>
        <div class="stat card"><small>${t('pid')}</small><strong>${s.pid || '-'}</strong></div>
        <div class="stat card"><small>${t('startedAt')}</small><strong>${startedAt}</strong></div>
        <div class="stat card"><small>${t('autoRestart')}</small><strong>${autoRestartLabel}</strong></div>
      </div>
      <div class="grid grid-2">
        <div class="card panel">
          <div class="panel-head-inline"><h2>${t('generalStatus')}</h2><span class="badge ${s.running ? 'ok' : 'off'}">${s.running ? t('serverOn') : t('serverOff')}</span></div>
          <div class="label-grid">
            <div>${t('serverFolder')}</div><div>${escapeHtml(config.server_folder || '-')}</div>
            <div>${t('executable')}</div><div>${escapeHtml(config.executable_path || '-')}</div>
            <div>${t('workingFolder')}</div><div>${escapeHtml(config.working_directory || '-')}</div>
            <div>${t('realXml')}</div><div>${escapeHtml(config.xml_path || '-')}</div>
            <div>${t('backupFolder')}</div><div>${escapeHtml(config.backup_folder || '-')}</div>
            <div>${t('inventoryIconsStatus')}</div><div>${escapeHtml(config.item_icons_folder || t('noIconsFolder'))}</div>
            <div>${t('telnet')}</div><div>${escapeHtml(config.telnet_host || '-')} : ${escapeHtml(config.telnet_port || '-')}</div>
            <div>${t('panelAddress')}</div><div>${escapeHtml(config.panel_host || '-')} : ${escapeHtml(config.panel_port || '-')}</div>
          </div>
          <div class="inline-actions" style="margin-top:14px"><button class="btn" onclick="go('backups')">${t('backups')}</button><button class="btn" onclick="go('tasks')">${t('scheduledTasks')}</button><button class="btn" onclick="go('inventory')">${t('inventory')}</button><button class="btn" onclick="openExternalMap()">${t('openMapLink')}</button></div>
        </div>
        <div class="card panel">
          <h2>${t('recentActivity')}</h2>
          <div class="console-box compact-box"><div class="console-output">${recentLines.length ? escapeHtml(recentLines.join('\\n')) : `<span class="empty-note">${t('noRecentEvents')}</span>`}</div></div>
        </div>
      </div>
    </div>`;
};

views.inventory = function() {
  const current = selectedPlayer();
  return `
    <div class="grid">
      <div class="card panel">
        <div class="panel-head-inline"><h2>${t('inventory')}</h2><div class="inline-actions"><button class="btn" onclick="go('players')">${t('players')}</button><button class="btn btn-primary" onclick="loadPlayerInventory()">${t('inventoryLoad')}</button><button class="btn" onclick="refreshPlayers()">${t('refreshPlayers')}</button></div></div>
        ${playerInventoryCard(current)}
      </div>
    </div>`;
};

views.settings = function() {
  const c = state.state.config;
  return `
    <div class="grid">
      <div class="card panel">
        <div class="panel-head-inline">
          <div>
            <h2 style="margin:0">${t('generalSettings')}</h2>
            <div class="help-text" style="margin-top:6px">${t('settingsHint')}</div>
          </div>
          <div class="inline-actions">
            <button class="btn" onclick="chooseSplash()">${t('changeStartupImage')}</button>
            <button class="btn" onclick="exportManagerConfig()">${t('exportConfig')}</button>
            <button class="btn" onclick="importManagerConfig()">${t('importConfig')}</button>
            <button class="btn btn-primary" onclick="saveSettings()">${t('saveSettings')}</button>
          </div>
        </div>
        <div class="input-grid">
          ${field('server_name', t('serverName'), c.server_name || '')}
          ${fieldSelect('language', t('language'), c.language || state.lang, [{value:'es', label:'Español'},{value:'en', label:'English'}])}
          ${fieldBrowse('server_folder', t('serverPath'), c.server_folder || '', 'folder', t('selectServerFolder'))}
          ${fieldBrowse('executable_path', t('exeOrBat'), c.executable_path || '', 'exe_bat', t('selectExecutable'))}
          ${fieldBrowse('working_directory', t('workingDirectory'), c.working_directory || '', 'folder', t('selectWorkingDirectory'))}
          ${fieldBrowse('xml_path', t('realServerConfig'), c.xml_path || '', 'xml', t('selectServerConfig'))}
          ${fieldBrowse('backup_folder', t('backupFolder'), c.backup_folder || '', 'folder', t('selectBackupFolder'))}
          ${field('inventory_api_base_url', t('inventoryApiUrl'), c.inventory_api_base_url || '')}
          ${field('inventory_api_user', t('inventoryApiUser'), c.inventory_api_user || 'admin')}
          ${field('inventory_api_password', t('inventoryApiPassword'), c.inventory_api_password || '', 'password')}
          ${fieldBrowse('item_icons_folder', t('itemIconsFolder'), c.item_icons_folder || '', 'folder', t('selectItemIconsFolder'))}
          ${field('telnet_host', t('telnetHost'), c.telnet_host || '127.0.0.1')}
          ${field('telnet_port', t('telnetPort'), c.telnet_port || 8081)}
          ${field('telnet_password', t('telnetPassword'), c.telnet_password || '', 'password')}
          ${field('panel_host', t('panelHost'), c.panel_host || '127.0.0.1')}
          ${field('panel_port', t('panelPort'), c.panel_port || 8765)}
          ${field('accent_color', t('accentColor'), c.accent_color || '#55a7ff')}
          ${fieldSelect('auto_restart_enabled', t('autoRestartEnabled'), c.auto_restart_enabled ? 'true' : 'false', [{value:'false', label:t('disabled')},{value:'true', label:t('enabled')}])}
          ${field('auto_restart_delay_seconds', t('autoRestartDelay'), c.auto_restart_delay_seconds || 15, 'number')}
        </div>
        <div class="help-text" style="margin-top:14px">${t('inventoryApiHint')}</div>
      </div>
      <div class="card panel">
        <div class="panel-head-inline">
          <div>
            <h2 style="margin:0">${t('discordNotifyTitle')}</h2>
            <div class="help-text" style="margin-top:6px">${t('discordNotifyText')}</div>
          </div>
          <div class="inline-actions">
            <button class="btn" onclick="openExternalMap()">${t('openMapLink')}</button>
          </div>
        </div>
        <div class="input-grid">
          ${fieldSelect('manager_notify_enabled', t('discordNotifyEnabled'), c.manager_notify_enabled ? 'true' : 'false', [{value:'false', label:t('disabled')},{value:'true', label:t('enabled')}])}
          ${field('manager_notify_webhook', t('discordWebhookUrl'), c.manager_notify_webhook || '')}
          ${field('manager_notify_bot_token', t('discordNotifyBotToken'), c.manager_notify_bot_token || '', 'password')}
          ${field('manager_notify_channel_id', t('discordNotifyChannelId'), c.manager_notify_channel_id || '')}
          ${field('manager_notify_mentions', t('discordNotifyMentions'), c.manager_notify_mentions || '')}
          ${fieldSelect('manager_notify_on_start', t('discordNotifyOnStart'), c.manager_notify_on_start === false ? 'false' : 'true', [{value:'true', label:t('yes')},{value:'false', label:t('no')}])}
          ${fieldSelect('manager_notify_on_stop', t('discordNotifyOnStop'), c.manager_notify_on_stop === false ? 'false' : 'true', [{value:'true', label:t('yes')},{value:'false', label:t('no')}])}
          ${fieldSelect('manager_notify_on_crash', t('discordNotifyOnCrash'), c.manager_notify_on_crash === false ? 'false' : 'true', [{value:'true', label:t('yes')},{value:'false', label:t('no')}])}
          ${fieldSelect('manager_notify_on_backup', t('discordNotifyOnBackup'), c.manager_notify_on_backup === false ? 'false' : 'true', [{value:'true', label:t('yes')},{value:'false', label:t('no')}])}
          ${fieldSelect('manager_notify_on_autorestart', t('discordNotifyOnAutoRestart'), c.manager_notify_on_autorestart === false ? 'false' : 'true', [{value:'true', label:t('yes')},{value:'false', label:t('no')}])}
        </div>
        <div class="help-text" style="margin-top:14px">${t('discordNotifyHint')} ${t('notificationsSavedHint')}</div>
      </div>
    </div>`;
};

saveSettings = async function() {
  try {
    const payload = {
      server_name: $('server_name').value,
      server_folder: $('server_folder').value,
      executable_path: $('executable_path').value,
      working_directory: $('working_directory').value,
      xml_path: $('xml_path').value,
      telnet_host: $('telnet_host').value,
      telnet_port: $('telnet_port').value,
      telnet_password: $('telnet_password').value,
      panel_host: $('panel_host').value,
      panel_port: $('panel_port').value,
      accent_color: $('accent_color').value,
      backup_folder: $('backup_folder').value,
      live_map_url: $('live_map_url').value,
      inventory_api_base_url: $('inventory_api_base_url').value,
      inventory_api_user: $('inventory_api_user').value,
      inventory_api_password: $('inventory_api_password').value,
      item_icons_folder: $('item_icons_folder').value,
      auto_restart_enabled: $('auto_restart_enabled').value === 'true',
      auto_restart_delay_seconds: $('auto_restart_delay_seconds').value,
      language: $('language') ? $('language').value : state.lang,
      manager_notify_enabled: $('manager_notify_enabled').value === 'true',
      manager_notify_webhook: $('manager_notify_webhook').value,
      manager_notify_bot_token: $('manager_notify_bot_token').value,
      manager_notify_channel_id: $('manager_notify_channel_id').value,
      manager_notify_mentions: $('manager_notify_mentions').value,
      manager_notify_on_start: $('manager_notify_on_start').value === 'true',
      manager_notify_on_stop: $('manager_notify_on_stop').value === 'true',
      manager_notify_on_crash: $('manager_notify_on_crash').value === 'true',
      manager_notify_on_backup: $('manager_notify_on_backup').value === 'true',
      manager_notify_on_autorestart: $('manager_notify_on_autorestart').value === 'true'
    };
    await api('/api/config/save', 'POST', payload);
    state.lang = payload.language;
    toast(t('settingsSaved'));
    await refreshState(true);
    go('settings');
  } catch (err) {
    toast(err.message, true);
  }
};

/* ===== Final override: pestaña propia de Notificaciones + quitar botón del panel ===== */
Object.assign(T.es, {
  notifications: 'Notificaciones',
  helpSettingsTextFixed: 'Aquí configuras rutas, telnet, idioma, URL del mapa web, API de inventario, carpeta de iconos y auto reinicio del server kit.',
  helpDiscordNotifyText: 'La pestaña Notificaciones del menú izquierdo sirve para configurar avisos Discord por webhook o por bot token + channel ID.',
  notificationsPanelHint: 'Configura aquí los avisos Discord del server kit y guarda los cambios desde esta misma pestaña.'
});
Object.assign(T.en, {
  notifications: 'Notifications',
  helpSettingsTextFixed: 'Configure paths, telnet, language, web map URL, inventory API, item icons folder, panel options, auto restart and automatic startup here.',
  helpDiscordNotifyText: 'The Notifications tab in the left menu lets you configure Discord alerts by webhook or by bot token + channel ID.',
  notificationsPanelHint: 'Configure server kit Discord alerts here and save changes from this tab.'
});

menuLabel = function(key) {
  const map = {
    dashboard: 'generalStatus',
    server: 'logsTitle',
    console: 'console',
    players: 'players',
    inventory: 'inventory',
    liveMap: 'liveMap',
    teleports: 'teleports',
    backups: 'backups',
    tasks: 'scheduledTasks',
    serverconfig: 'serverconfig',
    settings: 'settings',
    notifications: 'notifications',
    discordbot: 'discordBot',
    helpdocs: 'helpGuide'
  };
  return t(map[key] || key);
};

buildMenu = function() {
  const visibleKeys = ['dashboard','server','console','players','inventory','backups','tasks','serverconfig','settings','notifications','helpdocs'];
  $('menu').innerHTML = visibleKeys.map(key =>
    `<button class="${state.section === key ? 'active' : ''}" onclick="go('${key}')">${menuLabel(key)}</button>`
  ).join('');
  if ($('sidebarFooter')) {
    $('sidebarFooter').innerHTML = footerSectionKeys.map(key => `<button class="${state.section === key ? 'active' : ''}" onclick="go('${key}')">${menuLabel(key)}</button>`).join('');
  }
};

views.settings = function() {
  const c = state.state.config;
  return `
    <div class="grid">
      <div class="card panel">
        <div class="panel-head-inline">
          <div>
            <h2 style="margin:0">${t('generalSettings')}</h2>
            <div class="help-text" style="margin-top:6px">${t('settingsHint')}</div>
          </div>
          <div class="inline-actions">
            <button class="btn" onclick="chooseSplash()">${t('changeStartupImage')}</button>
            <button class="btn" onclick="exportManagerConfig()">${t('exportConfig')}</button>
            <button class="btn" onclick="importManagerConfig()">${t('importConfig')}</button>
            <button class="btn btn-primary" onclick="saveSettings()">${t('saveSettings')}</button>
          </div>
        </div>
        <div class="input-grid">
          ${field('server_name', t('serverName'), c.server_name || '')}
          ${fieldSelect('language', t('language'), c.language || state.lang, [{value:'es', label:'Español'},{value:'en', label:'English'}])}
          ${fieldBrowse('server_folder', t('serverPath'), c.server_folder || '', 'folder', t('selectServerFolder'))}
          ${fieldBrowse('executable_path', t('exeOrBat'), c.executable_path || '', 'exe_bat', t('selectExecutable'))}
          ${fieldBrowse('working_directory', t('workingDirectory'), c.working_directory || '', 'folder', t('selectWorkingDirectory'))}
          ${fieldBrowse('xml_path', t('realServerConfig'), c.xml_path || '', 'xml', t('selectServerConfig'))}
          ${fieldBrowse('backup_folder', t('backupFolder'), c.backup_folder || '', 'folder', t('selectBackupFolder'))}
          ${field('inventory_api_base_url', t('inventoryApiUrl'), c.inventory_api_base_url || '')}
          ${field('inventory_api_user', t('inventoryApiUser'), c.inventory_api_user || 'admin')}
          ${field('inventory_api_password', t('inventoryApiPassword'), c.inventory_api_password || '', 'password')}
          ${fieldBrowse('item_icons_folder', t('itemIconsFolder'), c.item_icons_folder || '', 'folder', t('selectItemIconsFolder'))}
          ${field('telnet_host', t('telnetHost'), c.telnet_host || '127.0.0.1')}
          ${field('telnet_port', t('telnetPort'), c.telnet_port || 8081)}
          ${field('telnet_password', t('telnetPassword'), c.telnet_password || '', 'password')}
          ${field('panel_host', t('panelHost'), c.panel_host || '127.0.0.1')}
          ${field('panel_port', t('panelPort'), c.panel_port || 8765)}
          ${field('accent_color', t('accentColor'), c.accent_color || '#55a7ff')}
          ${fieldSelect('auto_restart_enabled', t('autoRestartEnabled'), c.auto_restart_enabled ? 'true' : 'false', [{value:'false', label:t('disabled')},{value:'true', label:t('enabled')}])}
          ${field('auto_restart_delay_seconds', t('autoRestartDelay'), c.auto_restart_delay_seconds || 15, 'number')}
        </div>
        <div class="help-text" style="margin-top:14px">${t('inventoryApiHint')}</div>
      </div>
    </div>`;
};

views.notifications = function() {
  const c = state.state.config;
  return `
    <div class="grid">
      <div class="card panel">
        <div class="panel-head-inline">
          <div>
            <h2 style="margin:0">${t('discordNotifyTitle')}</h2>
            <div class="help-text" style="margin-top:6px">${t('discordNotifyText')}</div>
          </div>
          <div class="inline-actions">
            <button class="btn btn-primary" onclick="saveNotificationSettings()">${t('saveSettings')}</button>
          </div>
        </div>
        <div class="input-grid">
          ${fieldSelect('manager_notify_enabled', t('discordNotifyEnabled'), c.manager_notify_enabled ? 'true' : 'false', [{value:'false', label:t('disabled')},{value:'true', label:t('enabled')}])}
          ${field('manager_notify_webhook', t('discordWebhookUrl'), c.manager_notify_webhook || '')}
          ${field('manager_notify_bot_token', t('discordNotifyBotToken'), c.manager_notify_bot_token || '', 'password')}
          ${field('manager_notify_channel_id', t('discordNotifyChannelId'), c.manager_notify_channel_id || '')}
          ${field('manager_notify_mentions', t('discordNotifyMentions'), c.manager_notify_mentions || '')}
          ${fieldSelect('manager_notify_on_start', t('discordNotifyOnStart'), c.manager_notify_on_start === false ? 'false' : 'true', [{value:'true', label:t('yes')},{value:'false', label:t('no')}])}
          ${fieldSelect('manager_notify_on_stop', t('discordNotifyOnStop'), c.manager_notify_on_stop === false ? 'false' : 'true', [{value:'true', label:t('yes')},{value:'false', label:t('no')}])}
          ${fieldSelect('manager_notify_on_crash', t('discordNotifyOnCrash'), c.manager_notify_on_crash === false ? 'false' : 'true', [{value:'true', label:t('yes')},{value:'false', label:t('no')}])}
          ${fieldSelect('manager_notify_on_backup', t('discordNotifyOnBackup'), c.manager_notify_on_backup === false ? 'false' : 'true', [{value:'true', label:t('yes')},{value:'false', label:t('no')}])}
          ${fieldSelect('manager_notify_on_autorestart', t('discordNotifyOnAutoRestart'), c.manager_notify_on_autorestart === false ? 'false' : 'true', [{value:'true', label:t('yes')},{value:'false', label:t('no')}])}
        </div>
        <div class="help-text" style="margin-top:14px">${t('discordNotifyHint')} ${t('notificationsSavedHint')} ${t('notificationsPanelHint')}</div>
      </div>
    </div>`;
};

saveSettings = async function() {
  try {
    const payload = {
      server_name: $('server_name').value,
      server_folder: $('server_folder').value,
      executable_path: $('executable_path').value,
      working_directory: $('working_directory').value,
      xml_path: $('xml_path').value,
      telnet_host: $('telnet_host').value,
      telnet_port: $('telnet_port').value,
      telnet_password: $('telnet_password').value,
      panel_host: $('panel_host').value,
      panel_port: $('panel_port').value,
      accent_color: $('accent_color').value,
      backup_folder: $('backup_folder').value,
      live_map_url: $('live_map_url').value,
      inventory_api_base_url: $('inventory_api_base_url').value,
      inventory_api_user: $('inventory_api_user').value,
      inventory_api_password: $('inventory_api_password').value,
      item_icons_folder: $('item_icons_folder').value,
      auto_restart_enabled: $('auto_restart_enabled').value === 'true',
      auto_restart_delay_seconds: $('auto_restart_delay_seconds').value,
      language: $('language') ? $('language').value : state.lang
    };
    await api('/api/config/save', 'POST', payload);
    state.lang = payload.language;
    toast(t('settingsSaved'));
    await refreshState(true);
    go('settings');
  } catch (err) {
    toast(err.message, true);
  }
};

saveNotificationSettings = async function() {
  try {
    const payload = {
      manager_notify_enabled: $('manager_notify_enabled').value === 'true',
      manager_notify_webhook: $('manager_notify_webhook').value,
      manager_notify_bot_token: $('manager_notify_bot_token').value,
      manager_notify_channel_id: $('manager_notify_channel_id').value,
      manager_notify_mentions: $('manager_notify_mentions').value,
      manager_notify_on_start: $('manager_notify_on_start').value === 'true',
      manager_notify_on_stop: $('manager_notify_on_stop').value === 'true',
      manager_notify_on_crash: $('manager_notify_on_crash').value === 'true',
      manager_notify_on_backup: $('manager_notify_on_backup').value === 'true',
      manager_notify_on_autorestart: $('manager_notify_on_autorestart').value === 'true'
    };
    await api('/api/config/save', 'POST', payload);
    toast(t('settingsSaved'));
    await refreshState(true);
    go('notifications');
  } catch (err) {
    toast(err.message, true);
  }
};


/* ===== KarmaWorld final fixes: inventory texts, map confirm, notifications test, access login/perms ===== */
Object.assign(T.es, {
  inventoryTitle: 'Inventario real',
  inventoryHint: 'Selecciona un jugador y pulsa cargar inventario para ver su belt, mochila y equipo.',
  belt: 'Cinturón',
  bag: 'Mochila',
  equipment: 'Equipo',
  inventoryApiHint: 'Pon aquí la URL base de la Web API o del webmap. Ejemplo: http://127.0.0.1:8087. No abras esta URL esperando ver el panel: se usa solo para consultar inventarios.',
  confirmOpenMap: 'Vas a abrir el mapa web fuera del panel. ¿Continuar?',
  sendTest: 'Enviar prueba',
  access: 'Accesos',
  accessTitle: 'Acceso al Server Kit',
  accessText: 'Crea usuarios con su contraseña y elige a qué pestañas pueden entrar. Activa el login solo cuando tengas al menos un administrador creado.',
  loginRequired: 'Acceso requerido',
  loginUser: 'Usuario',
  loginPassword: 'Contraseña',
  loginButton: 'Entrar',
  logoutButton: 'Salir',
  loginBad: 'Usuario o contraseña incorrectos.',
  authEnabled: 'Activar login del panel',
  authUsers: 'Usuarios del panel',
  adminUser: 'Administrador',
  userEnabled: 'Activo',
  allowedSections: 'Permisos',
  addUser: 'Añadir usuario',
  saveUsers: 'Guardar usuarios',
  usersSaved: 'Usuarios guardados.',
  changePasswordHint: 'Escribe contraseña solo si quieres crearla o cambiarla.',
  openMapLink: 'Abrir mapa web',
  notificationsSavedHint: 'Si el webhook está relleno, el manager usará ese método primero. Puedes usar el botón de prueba para comprobar webhook o bot token.',
  helpSectionText: 'Resumen real de lo que tiene esta versión y dónde se configura cada parte del panel.',
  helpInventoryText: 'Selecciona un jugador y carga el inventario real. Esta vista ya no muestra panel derecho extra.',
  helpSettingsTextFixed: 'Aquí configuras rutas, telnet, idioma, URL del mapa web, API de inventario, carpeta de iconos, panel, auto reinicio e inicio automático.',
  helpDiscordNotifyText: 'La pestaña Notificaciones del menú izquierdo sirve para configurar avisos Discord y probarlos al momento.',
  helpAccessTitle: 'Accesos y permisos',
  helpAccessText: 'Aquí puedes crear usuarios con contraseña y decidir qué partes del Server Kit puede usar cada uno.',
  settingsHint: 'Ajustes generales del manager. Si cambias host o puerto del panel, guarda y reinicia el manager para aplicarlo.',
  sectionsHelp: 'Pestañas permitidas',
  panelPortHelp: 'Puedes usar el puerto que quieras si está libre. Ejemplo: 8085 para el panel, dejando 8084 para el mapa.',
  panelHostServerKit: 'Host del panel ServerKit',
  panelPortServerKit: 'Puerto del panel ServerKit',
  inventoryOnlineOfflineTitle: 'Inventario online / offline',
  inventoryPanelTitle: 'Inventario',
  inventoryPanelText: 'Aquí puedes ver el inventario en vivo o la última captura guardada del jugador seleccionado.',
  helpStartupTitle: 'Inicio automático',
  helpStartupText: 'Dentro de Ajustes puedes hacer que el manager arranque con Windows y también iniciar el servidor automáticamente al abrir el manager.'
});
Object.assign(T.en, {
  inventoryTitle: 'Real inventory',
  inventoryHint: 'Select a player and click load inventory to view belt, bag and equipment.',
  belt: 'Belt',
  bag: 'Bag',
  equipment: 'Equipment',
  inventoryApiHint: 'Enter the base URL of the Web API or webmap here. Example: http://127.0.0.1:8087. This is only used to query inventories.',
  confirmOpenMap: 'You are about to open the web map outside the panel. Continue?',
  sendTest: 'Send test',
  access: 'Access',
  accessTitle: 'Server Kit access',
  accessText: 'Create users with their password and choose which tabs they can open. Enable login only after creating at least one admin user.',
  loginRequired: 'Login required',
  loginUser: 'Username',
  loginPassword: 'Password',
  loginButton: 'Login',
  logoutButton: 'Logout',
  loginBad: 'Wrong username or password.',
  authEnabled: 'Enable panel login',
  authUsers: 'Panel users',
  adminUser: 'Administrator',
  userEnabled: 'Enabled',
  allowedSections: 'Permissions',
  addUser: 'Add user',
  saveUsers: 'Save users',
  usersSaved: 'Users saved.',
  changePasswordHint: 'Type a password only when creating or changing it.',
  notificationsSavedHint: 'If the webhook is filled, the manager will use that method first. You can use the test button to verify webhook or bot token.',
  helpAccessTitle: 'Access and permissions',
  helpAccessText: 'Create users with a password and choose which parts of the Server Kit each one may use.',
  panelHostServerKit: 'ServerKit panel host',
  panelPortServerKit: 'ServerKit panel port',
  inventoryOnlineOfflineTitle: 'Online / offline inventory',
  inventoryPanelTitle: 'Inventory',
  inventoryPanelText: 'Here you can view the live inventory or the latest saved snapshot of the selected player.',
  helpStartupTitle: 'Automatic startup',
  helpStartupText: 'Inside Settings you can make the manager start with Windows and optionally start the server automatically when the manager opens.'
});

const KW_SECTION_OPTIONS = ['dashboard','console','players','inventory','backups','tasks','serverconfig','settings','notifications','helpdocs','access'];
let authState = {auth_enabled:false, logged_in:true, user:null, users:[], sections_catalog: KW_SECTION_OPTIONS.slice()};

function canAccessSection(section){
  if (!authState.auth_enabled) return true;
  const user = authState.user;
  if (!user) return false;
  if (user.is_admin) return true;
  const allowed = new Set((user.sections || []).map(x => String(x).toLowerCase()));
  return allowed.has(String(section).toLowerCase()) || allowed.has('*') || allowed.has('all');
}

async function fetchAuthStatus(){
  try {
    const res = await fetch('/api/auth/status', {cache:'no-store'});
    const data = await res.json();
    if (data && data.ok && data.data) authState = data.data;
  } catch (_) {}
  return authState;
}

function ensureLoginOverlay(){
  let el = document.getElementById('loginOverlay');
  if (!el){
    el = document.createElement('div');
    el.id = 'loginOverlay';
    el.style.cssText = 'position:fixed;inset:0;background:rgba(5,10,18,.84);z-index:9999;display:none;align-items:center;justify-content:center;padding:20px;';
    el.innerHTML = `
      <div class="card panel" style="width:min(520px,100%);padding:24px;border-radius:24px">
        <h2 style="margin-top:0">${t('loginRequired')}</h2>
        <div class="help-text" style="margin-bottom:14px">${t('accessText')}</div>
        <div class="input-grid">
          <div class="field"><label>${t('loginUser')}</label><input id="loginUserInput" autocomplete="username"></div>
          <div class="field"><label>${t('loginPassword')}</label><input id="loginPasswordInput" type="password" autocomplete="current-password"></div>
        </div>
        <div class="inline-actions" style="margin-top:14px"><button class="btn btn-primary" onclick="panelLogin()">${t('loginButton')}</button></div>
      </div>`;
    document.body.appendChild(el);
  }
  el.style.display = authState.auth_enabled && !authState.logged_in ? 'flex' : 'none';
}

async function panelLogin(){
  try{
    await apiBase('/api/auth/login','POST',{username: $('loginUserInput').value, password: $('loginPasswordInput').value}, true);
    await fetchAuthStatus();
    ensureLoginOverlay();
    buildMenu();
    await refreshState(true);
    if (state.section === 'access') await loadAccessUsers();
  }catch(err){ toast(err.message || t('loginBad'), true); }
}

async function panelLogout(){
  try{ await apiBase('/api/auth/logout','POST',{}, true); }catch(_){ }
  await fetchAuthStatus();
  ensureLoginOverlay();
  buildMenu();
  state.state = state.state || {config:{language: state.lang || 'es'}};
  render(true);
}

const apiBase = api;
api = async function(url, method='GET', body=null, skipAuthHandling=false){
  const opts = { method, headers: {} };
  if (body !== null) { opts.headers['Content-Type'] = 'application/json'; opts.body = JSON.stringify(body); }
  const res = await fetch(url, opts);
  const data = await res.json().catch(() => ({ ok:false, message:t('invalidResponse') }));
  if (!res.ok || data.ok === false){
    if (!skipAuthHandling && res.status === 401){
      await fetchAuthStatus();
      ensureLoginOverlay();
    }
    throw new Error(data.message || t('error'));
  }
  return data;
};

const originalLoadHandler = refreshState;
refreshState = async function(silent=false){
  await fetchAuthStatus();
  ensureLoginOverlay();
  if (authState.auth_enabled && !authState.logged_in) {
    if (!silent) toast(t('loginRequired'), true);
    return;
  }
  return originalLoadHandler(silent);
};

openExternalMap = function() {
  const url = String((state.state && state.state.config && state.state.config.live_map_url) || '').trim();
  if (!url) { toast(t('noMapUrlConfigured'), true); return; }
  if (!window.confirm(t('confirmOpenMap'))) return;
  window.open(url, '_blank', 'noopener');
};

playerInventoryCard = function(player) {
  if (!player) return `<div class="empty-note">${t('noPlayerSelected')}</div>`;
  const data = currentInventoryData();
  const hasData = data && !data.error && ((data.belt && data.belt.length) || (data.bag && data.bag.length) || (data.equipment && Object.keys(data.equipment).length));
  return `
    <div class="inventory-shell kw-inventory-shell-compact">
      ${inventoryMetaBox(player, data)}
      <div class="inline-actions" style="margin-top:12px;margin-bottom:6px"><button class="btn btn-primary" onclick="loadPlayerInventory()">${data ? t('inventoryReload') : t('inventoryLoad')}</button><button class="btn" onclick="refreshPlayers()">${t('refreshPlayers')}</button></div>
      ${data && data.error ? `<div class="empty-note">${escapeHtml(data.error)}<br>${t('inventoryErrorHint')}</div>` : ''}
      ${!data ? `<div class="empty-note">${t('inventoryNotLoaded')}<br>${t('inventoryNeedsSupport')}</div>` : ''}
      ${data && !hasData && !data.error ? `<div class="empty-note">${t('inventoryNoData')}</div>` : ''}
      ${hasData ? `
      <div class="kw-inv-panels">
        <div class="card panel inventory-panel compact-inv-panel"><h3>${t('belt')}</h3>${inventoryItemsHtml(data.belt || [], t('inventoryEmptySection'))}</div>
        <div class="card panel inventory-panel compact-inv-panel"><h3>${t('bag')}</h3>${inventoryItemsHtml(data.bag || [], t('inventoryEmptySection'))}</div>
        <div class="card panel inventory-panel compact-inv-panel"><h3>${t('equipment')}</h3>${inventoryEquipmentHtml(data.equipment || {})}</div>
      </div>` : ''}
    </div>`;
};

views.inventory = function() {
  const current = selectedPlayer();
  return `
    <div class="grid">
      <div class="card panel">
        <div class="panel-head-inline"><div><h2>${t('inventory')}</h2><div class="help-text" style="margin-top:6px">${t('inventoryHint')}</div></div><div class="inline-actions"><button class="btn" onclick="go('players')">${t('players')}</button><button class="btn" onclick="refreshPlayers()">${t('refreshPlayers')}</button><button class="btn btn-primary" onclick="loadPlayerInventory()">${t('inventoryLoad')}</button></div></div>
        ${playerInventoryCard(current)}
      </div>
    </div>`;
};

menuLabel = function(key) {
  const map = {
    dashboard: 'generalStatus',
    server: 'logsTitle',
    console: 'console',
    players: 'players',
    inventory: 'inventory',
    backups: 'backups',
    tasks: 'scheduledTasks',
    serverconfig: 'serverconfig',
    settings: 'settings',
    notifications: 'notifications',
    discordbot: 'discordBot',
    helpdocs: 'helpGuide',
    access: 'access'
  };
  return t(map[key] || key);
};

buildMenu = function() {
  const visibleKeys = ['dashboard','server','console','players','inventory','backups','tasks','serverconfig','settings','notifications','discordbot','access','helpdocs']
    .filter(key => canAccessSection(key));
  if (!visibleKeys.includes(state.section)) state.section = visibleKeys[0] || 'dashboard';
  $('menu').innerHTML = visibleKeys.map(key => `<button class="${state.section === key ? 'active' : ''}" onclick="go('${key}')">${menuLabel(key)}</button>`).join('');
  if ($('sidebarFooter')) $('sidebarFooter').innerHTML = `<button onclick="panelLogout()">${t('logoutButton')}</button>`;
};

go = function(section) {
  if (!canAccessSection(section)) { toast('Sin permiso para esa pestaña.', true); return; }
  state.section = section;
  if (section === 'access') loadAccessUsers();
  render();
};

async function testNotificationSettings(){
  try{
    const payload = {
      manager_notify_enabled: $('manager_notify_enabled').value === 'true',
      manager_notify_webhook: $('manager_notify_webhook').value,
      manager_notify_bot_token: $('manager_notify_bot_token').value,
      manager_notify_channel_id: $('manager_notify_channel_id').value,
      manager_notify_mentions: $('manager_notify_mentions').value,
      manager_notify_on_start: $('manager_notify_on_start').value === 'true',
      manager_notify_on_stop: $('manager_notify_on_stop').value === 'true',
      manager_notify_on_crash: $('manager_notify_on_crash').value === 'true',
      manager_notify_on_backup: $('manager_notify_on_backup').value === 'true',
      manager_notify_on_autorestart: $('manager_notify_on_autorestart').value === 'true'
    };
    const res = await api('/api/notifications/test', 'POST', payload);
    toast(res.message || 'OK');
  } catch (err) { toast(err.message, true); }
}

views.notifications = function() {
  const c = state.state.config;
  return `
    <div class="grid">
      <div class="card panel">
        <div class="panel-head-inline">
          <div>
            <h2 style="margin:0">${t('discordNotifyTitle')}</h2>
            <div class="help-text" style="margin-top:6px">${t('discordNotifyText')}</div>
          </div>
          <div class="inline-actions">
            <button class="btn" onclick="testNotificationSettings()">${t('sendTest')}</button>
            <button class="btn btn-primary" onclick="saveNotificationSettings()">${t('saveSettings')}</button>
          </div>
        </div>
        <div class="input-grid">
          ${fieldSelect('manager_notify_enabled', t('discordNotifyEnabled'), c.manager_notify_enabled ? 'true' : 'false', [{value:'false', label:t('disabled')},{value:'true', label:t('enabled')}])}
          ${field('manager_notify_webhook', t('discordWebhookUrl'), c.manager_notify_webhook || '')}
          ${field('manager_notify_bot_token', t('discordNotifyBotToken'), c.manager_notify_bot_token || '', 'password')}
          ${field('manager_notify_channel_id', t('discordNotifyChannelId'), c.manager_notify_channel_id || '')}
          ${field('manager_notify_mentions', t('discordNotifyMentions'), c.manager_notify_mentions || '')}
          ${fieldSelect('manager_notify_on_start', t('discordNotifyOnStart'), c.manager_notify_on_start === false ? 'false' : 'true', [{value:'true', label:t('yes')},{value:'false', label:t('no')}])}
          ${fieldSelect('manager_notify_on_stop', t('discordNotifyOnStop'), c.manager_notify_on_stop === false ? 'false' : 'true', [{value:'true', label:t('yes')},{value:'false', label:t('no')}])}
          ${fieldSelect('manager_notify_on_crash', t('discordNotifyOnCrash'), c.manager_notify_on_crash === false ? 'false' : 'true', [{value:'true', label:t('yes')},{value:'false', label:t('no')}])}
          ${fieldSelect('manager_notify_on_backup', t('discordNotifyOnBackup'), c.manager_notify_on_backup === false ? 'false' : 'true', [{value:'true', label:t('yes')},{value:'false', label:t('no')}])}
          ${fieldSelect('manager_notify_on_autorestart', t('discordNotifyOnAutoRestart'), c.manager_notify_on_autorestart === false ? 'false' : 'true', [{value:'true', label:t('yes')},{value:'false', label:t('no')}])}
        </div>
        <div class="help-text" style="margin-top:14px">${t('discordNotifyHint')} ${t('notificationsSavedHint')}</div>
      </div>
    </div>`;
};

async function loadAccessUsers(){
  try{
    const res = await api('/api/access/users/list','POST',{});
    authState.users = res.data || [];
    render();
  }catch(err){ toast(err.message, true); }
}

function renderAccessUserRows(){
  const rows = authState.users || [];
  return rows.map((u, idx) => `
    <div class="card panel" style="margin-bottom:12px;padding:14px">
      <div class="input-grid">
        <div class="field"><label>${t('loginUser')}</label><input id="acc_user_${idx}" value="${escapeHtml(u.username || '')}"></div>
        <div class="field"><label>${t('loginPassword')}</label><input id="acc_pass_${idx}" type="password" placeholder="${t('changePasswordHint')}"></div>
        <div class="field"><label>${t('adminUser')}</label><select id="acc_admin_${idx}"><option value="false" ${!u.is_admin ? 'selected' : ''}>${t('no')}</option><option value="true" ${u.is_admin ? 'selected' : ''}>${t('yes')}</option></select></div>
        <div class="field"><label>${t('userEnabled')}</label><select id="acc_enabled_${idx}"><option value="true" ${u.enabled !== false ? 'selected' : ''}>${t('yes')}</option><option value="false" ${u.enabled === false ? 'selected' : ''}>${t('no')}</option></select></div>
        <div class="field" style="grid-column:1/-1"><label>${t('allowedSections')}</label><input id="acc_sections_${idx}" value="${escapeHtml((u.sections || []).join(', '))}" placeholder="dashboard, players, backups"></div>
      </div>
      <div class="inline-actions" style="margin-top:10px"><button class="btn btn-danger" onclick="removeAccessUser(${idx})">${t('deleteRow') || 'Eliminar'}</button></div>
    </div>`).join('');
}

function addAccessUser(){
  authState.users = authState.users || [];
  authState.users.push({id:`user_${Date.now()}`, username:'', enabled:true, is_admin:false, sections:['dashboard']});
  render();
}

function removeAccessUser(idx){ authState.users.splice(idx,1); render(); }

async function saveAccessSettings(){
  try{
    const users = (authState.users || []).map((u, idx) => ({
      id: u.id || `user_${idx+1}`,
      username: $(`acc_user_${idx}`).value,
      password: $(`acc_pass_${idx}`).value,
      enabled: $(`acc_enabled_${idx}`).value === 'true',
      is_admin: $(`acc_admin_${idx}`).value === 'true',
      sections: $(`acc_sections_${idx}`).value.split(',').map(x => x.trim()).filter(Boolean)
    }));
    await api('/api/access/users/save','POST',{users});
    await api('/api/config/save','POST',{panel_auth_enabled: $('panel_auth_enabled').value === 'true'});
    await fetchAuthStatus();
    toast(t('usersSaved'));
    await loadAccessUsers();
  }catch(err){ toast(err.message, true); }
}

views.access = function(){
  const c = state.state.config || {};
  return `
    <div class="grid">
      <div class="card panel">
        <div class="panel-head-inline"><div><h2>${t('accessTitle')}</h2><div class="help-text" style="margin-top:6px">${t('accessText')}</div></div><div class="inline-actions"><button class="btn" onclick="addAccessUser()">${t('addUser')}</button><button class="btn btn-primary" onclick="saveAccessSettings()">${t('saveUsers')}</button></div></div>
        <div class="input-grid" style="margin-bottom:14px">
          ${fieldSelect('panel_auth_enabled', t('authEnabled'), c.panel_auth_enabled ? 'true':'false', [{value:'false', label:t('disabled')},{value:'true', label:t('enabled')}])}
        </div>
        <div class="help-text" style="margin-bottom:12px">${t('sectionsHelp')}: ${KW_SECTION_OPTIONS.join(', ')}</div>
        ${renderAccessUserRows() || `<div class="empty-note">${t('authUsers')}: 0</div>`}
      </div>
    </div>`;
};

views.helpdocs = function() {
  return `
    <div class="grid grid-2">
      <div class="card panel">
        <div class="info-box" style="margin-bottom:14px"><h3>${t('helpSectionTitle')}</h3><div class="help-text">${t('helpSectionText')}</div></div>
        ${infoNote(t('helpServerPathsTitle'), t('helpServerPathsText'))}
        ${infoNote(t('helpGeneralStatusTitle'), t('helpGeneralStatusText'))}
        ${infoNote(t('helpSummaryTitle'), t('helpSummaryText'))}
        ${infoNote(t('helpPlayersTitle'), t('helpPlayersText'))}
        ${infoNote(t('helpInventoryTitle'), t('helpInventoryText'))}
        ${infoNote(t('helpBackupsTitle'), t('helpBackupsText'))}
      </div>
      <div class="card panel">
        ${infoNote(t('helpTasksTitle'), t('helpTasksText'))}
        ${infoNote(t('helpServerConfigTitle'), t('helpServerConfigText'))}
        ${infoNote(t('helpSettingsTitleFixed'), t('helpSettingsTextFixed'))}
        ${infoNote(t('helpDiscordNotifyTitle'), t('helpDiscordNotifyText'))}
        ${infoNote(t('helpAccessTitle'), t('helpAccessText'))}
        ${infoNote(t('helpExternalMapTitle'), t('helpExternalMapText'))}
      </div>
    </div>`;
};

window.addEventListener('load', async () => {
  await fetchAuthStatus();
  ensureLoginOverlay();
  buildMenu();
});


/* ===== KarmaWorld final patch: manual first user + checkbox permissions + translations + embeds help ===== */
Object.assign(T.es, {
  selectedPlayer: 'Jugador seleccionado',
  noPlayerSelected: 'No has seleccionado ningún jugador todavía.',
  inventoryTitle: 'Inventario real',
  inventoryHint: 'Selecciona un jugador y pulsa cargar inventario para ver su cinturón, mochila y equipo.',
  sectionsHelp: 'Pestañas permitidas',
  actionPermissions: 'Permisos de acciones y botones',
  noPermissionAction: 'No tienes permiso para usar ese botón.',
  noPermissionSection: 'No tienes permiso para entrar en esa pestaña.',
  firstUserManualTitle: 'Primer usuario manual',
  firstUserManualText: 'El primer acceso del panel se crea editando a mano el archivo config/panel_users.json. Cuando ya tengas un administrador creado y enabled=true, podrás entrar y crear más usuarios desde aquí.',
  sectionsPickerHelp: 'Marca qué pestañas puede abrir este usuario.',
  actionsPickerHelp: 'Marca qué botones y acciones puede usar dentro del panel.',
  accessConfigFile: 'Archivo de usuarios',
  accessConfigFilePath: 'config/panel_users.json',
  inventoryApiHelpTitle: 'Qué poner en URL API inventario',
  inventoryApiHelpText: 'Pon la URL base del webmap o de la Web API. Ejemplos: http://127.0.0.1:8084 o http://127.0.0.1:8087. Esta dirección no abre el panel del manager: solo se usa para consultar inventarios reales.',
  inventoryApiUserHelpTitle: 'Qué poner en Usuario API inventario',
  inventoryApiUserHelpText: 'Solo se usa si tu Web API pide usuario y contraseña. Normalmente es admin. Si tu API no usa login, deja admin y rellena solo la contraseña si hace falta.',
  helpAccessText: 'El primer usuario se crea a mano en config/panel_users.json. Después puedes crear más desde la pestaña Accesos, con permisos por pestañas y por botones.',
  helpInventoryText: 'Inventario carga belt/cinturón, mochila y equipo. Si ves una clave en inglés, faltaba traducción; en esta versión ya está corregido.',
  helpSettingsTextFixed: 'Aquí configuras rutas, telnet, mapa web, API de inventario, iconos, panel, auto reinicio y ajustes generales del manager.',
  logoutDone: 'Sesión cerrada.',
  logoutUnavailable: 'El login del panel está desactivado.',
  mapLinkInMenu: 'Abrir mapa web',
  inventoryApiUrl: 'URL base API inventario / webmap',
  inventoryApiUser: 'Usuario API inventario',
  inventoryApiPassword: 'Contraseña API inventario',
  logoutButton: 'Salir'
});
Object.assign(T.en, {
  selectedPlayer: 'Selected player',
  noPlayerSelected: 'No player selected yet.',
  inventoryTitle: 'Real inventory',
  inventoryHint: 'Select a player and click load inventory to view belt, bag and equipment.',
  actionPermissions: 'Action and button permissions',
  noPermissionAction: 'You do not have permission to use that button.',
  noPermissionSection: 'You do not have permission to open that tab.',
  firstUserManualTitle: 'First user manually',
  firstUserManualText: 'Create the first panel user by editing config/panel_users.json by hand. Once you have an enabled admin user, you can log in and create more users here.',
  sectionsPickerHelp: 'Tick which tabs this user can open.',
  actionsPickerHelp: 'Tick which buttons and actions this user may use inside the panel.',
  accessConfigFile: 'Users file',
  accessConfigFilePath: 'config/panel_users.json',
  inventoryApiHelpTitle: 'What to put in Inventory API URL',
  inventoryApiHelpText: 'Enter the base URL of the webmap or Web API. Examples: http://127.0.0.1:8084 or http://127.0.0.1:8087. This is not the manager panel URL; it is only used to query real inventories.',
  inventoryApiUserHelpTitle: 'What to put in Inventory API user',
  inventoryApiUserHelpText: 'Only used when your Web API requires username/password. Usually admin. If your API does not need login, keep admin and only fill the password if required.',
  helpAccessText: 'The first user is created manually in config/panel_users.json. After that you can create more from the Access tab with per-tab and per-button permissions.',
  helpInventoryText: 'Inventory loads belt, bag and equipment. In this build the missing translations were fixed.',
  helpSettingsTextFixed: 'Configure paths, telnet, web map, inventory API, item icons, panel, auto restart and general manager settings here.',
  logoutDone: 'Logged out.',
  logoutUnavailable: 'Panel login is disabled.',
  mapLinkInMenu: 'Open web map',
  inventoryApiUrl: 'Inventory API / webmap base URL',
  inventoryApiUser: 'Inventory API user',
  inventoryApiPassword: 'Inventory API password',
  logoutButton: 'Logout'
});

const PANEL_ACTION_CATALOG_FALLBACK = [
  {key:'dashboard.refresh',section:'dashboard',label_es:'Actualizar estado general',label_en:'Refresh general status'},
  {key:'server.start',section:'server',label_es:'Iniciar servidor',label_en:'Start server'},
  {key:'server.stop',section:'server',label_es:'Parar servidor',label_en:'Stop server'},
  {key:'server.restart',section:'server',label_es:'Reiniciar servidor',label_en:'Restart server'},
  {key:'server.chat',section:'server',label_es:'Enviar mensajes al juego',label_en:'Send in-game messages'},
  {key:'manager.stop',section:'server',label_es:'Parar manager',label_en:'Stop manager'},
  {key:'manager.start',section:'server',label_es:'Reiniciar manager',label_en:'Restart manager'},
  {key:'console.send',section:'console',label_es:'Enviar comandos por consola',label_en:'Send console commands'},
  {key:'players.refresh',section:'players',label_es:'Actualizar jugadores',label_en:'Refresh players'},
  {key:'players.kick',section:'players',label_es:'Expulsar jugadores',label_en:'Kick players'},
  {key:'players.copy',section:'players',label_es:'Copiar datos de jugador',label_en:'Copy player data'},
  {key:'inventory.load',section:'inventory',label_es:'Cargar inventario',label_en:'Load inventory'},
  {key:'backups.refresh',section:'backups',label_es:'Actualizar lista de backups',label_en:'Refresh backups list'},
  {key:'backups.create',section:'backups',label_es:'Crear backup',label_en:'Create backup'},
  {key:'backups.restore',section:'backups',label_es:'Restaurar backup',label_en:'Restore backup'},
  {key:'backups.delete',section:'backups',label_es:'Borrar backup',label_en:'Delete backup'},
  {key:'tasks.add_restart',section:'tasks',label_es:'Añadir reinicio programado',label_en:'Add scheduled restart'},
  {key:'tasks.add_backup',section:'tasks',label_es:'Añadir backup programado',label_en:'Add scheduled backup'},
  {key:'tasks.save',section:'tasks',label_es:'Guardar tareas programadas',label_en:'Save scheduled tasks'},
  {key:'tasks.delete',section:'tasks',label_es:'Eliminar tareas programadas',label_en:'Delete scheduled tasks'},
  {key:'serverconfig.load',section:'serverconfig',label_es:'Cargar XML',label_en:'Load XML'},
  {key:'serverconfig.save',section:'serverconfig',label_es:'Guardar XML',label_en:'Save XML'},
  {key:'serverconfig.save_structured',section:'serverconfig',label_es:'Guardar editor rápido',label_en:'Save quick editor'},
  {key:'settings.save',section:'settings',label_es:'Guardar ajustes',label_en:'Save settings'},
  {key:'settings.export',section:'settings',label_es:'Exportar configuración',label_en:'Export configuration'},
  {key:'settings.import',section:'settings',label_es:'Importar configuración',label_en:'Import configuration'},
  {key:'settings.change_splash',section:'settings',label_es:'Cambiar imagen de inicio',label_en:'Change startup image'},
  {key:'settings.browse',section:'settings',label_es:'Buscar rutas y archivos',label_en:'Browse paths and files'},
  {key:'notifications.save',section:'notifications',label_es:'Guardar notificaciones',label_en:'Save notifications'},
  {key:'notifications.test',section:'notifications',label_es:'Enviar prueba Discord',label_en:'Send Discord test'},
  {key:'access.add_user',section:'access',label_es:'Añadir usuarios del panel',label_en:'Add panel users'},
  {key:'access.remove_user',section:'access',label_es:'Eliminar usuarios del panel',label_en:'Remove panel users'},
  {key:'access.save',section:'access',label_es:'Guardar usuarios y permisos',label_en:'Save users and permissions'},
];

function actionCatalog(){
  return (authState.actions_catalog && authState.actions_catalog.length ? authState.actions_catalog : PANEL_ACTION_CATALOG_FALLBACK).map(row => ({...row, key:String(row.key||'').toLowerCase()}));
}
function actionLabel(row){ return state.lang === 'en' ? (row.label_en || row.key) : (row.label_es || row.key); }
function canDo(action){
  if (!authState.auth_enabled) return true;
  const user = authState.user;
  if (!user) return false;
  if (user.is_admin) return true;
  const allowed = new Set((user.actions || []).map(x => String(x).toLowerCase()));
  const key = String(action || '').toLowerCase();
  if (!key) return true;
  return allowed.has('*') || allowed.has('all') || allowed.has(key);
}
function ensureAllowed(section, action){
  if (section && !canAccessSection(section)) { toast(t('noPermissionSection'), true); return false; }
  if (action && !canDo(action)) { toast(t('noPermissionAction'), true); return false; }
  return true;
}
function sectionChoices(){
  const sections = authState.sections_catalog && authState.sections_catalog.length ? authState.sections_catalog : KW_SECTION_OPTIONS;
  return sections.map(sec => ({key:String(sec), label:menuLabel(sec)}));
}
function checkboxCloud(namePrefix, items, selected){
  const set = new Set((selected || []).map(x => String(x).toLowerCase()));
  return `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:8px">${items.map(item => {
    const key = String(item.key || item.value || '').toLowerCase();
    const label = item.label || key;
    return `<label style="display:flex;align-items:center;gap:8px;padding:8px 10px;border:1px solid rgba(255,255,255,.08);border-radius:12px;background:rgba(255,255,255,.02)"><input type="checkbox" data-perm-box="${namePrefix}" value="${escapeHtml(key)}" ${set.has(key) ? 'checked' : ''}> <span>${escapeHtml(label)}</span></label>`;
  }).join('')}</div>`;
}
function getCheckedValues(prefix){
  return Array.from(document.querySelectorAll(`[data-perm-box="${prefix}"]:checked`)).map(el => String(el.value || '').toLowerCase());
}
function renderAccessUserRows(){
  const rows = authState.users || [];
  const sectionItems = sectionChoices();
  const actionItems = actionCatalog().map(row => ({key:row.key, label:actionLabel(row)}));
  return rows.map((u, idx) => {
    const sectionsHtml = checkboxCloud('sections_' + idx, sectionItems, u.sections || []);
    const actionsHtml = checkboxCloud('actions_' + idx, actionItems, u.actions || []);
    return `
    <div class="card panel" style="margin-bottom:14px;padding:14px">
      <div class="input-grid">
        <div class="field"><label>${t('loginUser')}</label><input id="acc_user_${idx}" value="${escapeHtml(u.username || '')}"></div>
        <div class="field"><label>${t('loginPassword')}</label><input id="acc_pass_${idx}" type="password" placeholder="${t('changePasswordHint')}"></div>
        <div class="field"><label>${t('adminUser')}</label><select id="acc_admin_${idx}"><option value="false" ${!u.is_admin ? 'selected' : ''}>${t('no')}</option><option value="true" ${u.is_admin ? 'selected' : ''}>${t('yes')}</option></select></div>
        <div class="field"><label>${t('userEnabled')}</label><select id="acc_enabled_${idx}"><option value="true" ${u.enabled !== false ? 'selected' : ''}>${t('yes')}</option><option value="false" ${u.enabled === false ? 'selected' : ''}>${t('no')}</option></select></div>
      </div>
      <div style="margin-top:12px">
        <div style="font-weight:700;margin-bottom:6px">${t('sectionsHelp')}</div>
        <div class="help-text" style="margin-bottom:8px">${t('sectionsPickerHelp')}</div>
        ${sectionsHtml}
      </div>
      <div style="margin-top:14px">
        <div style="font-weight:700;margin-bottom:6px">${t('actionPermissions')}</div>
        <div class="help-text" style="margin-bottom:8px">${t('actionsPickerHelp')}</div>
        ${actionsHtml}
      </div>
      <div class="inline-actions" style="margin-top:12px"><button class="btn btn-danger" onclick="removeAccessUser(${idx})">${t('delete')}</button></div>
    </div>`;
  }).join('');
}
addAccessUser = function(){
  if (!ensureAllowed('access','access.add_user')) return;
  authState.users = authState.users || [];
  authState.users.push({id:`user_${Date.now()}`, username:'', enabled:true, is_admin:false, sections:['dashboard'], actions:['dashboard.refresh']});
  render();
};
removeAccessUser = function(idx){
  if (!ensureAllowed('access','access.remove_user')) return;
  authState.users.splice(idx,1); render();
};
saveAccessSettings = async function(){
  if (!ensureAllowed('access','access.save')) return;
  try{
    const users = (authState.users || []).map((u, idx) => ({
      id: u.id || `user_${idx+1}`,
      username: $(`acc_user_${idx}`).value,
      password: $(`acc_pass_${idx}`).value,
      enabled: $(`acc_enabled_${idx}`).value === 'true',
      is_admin: $(`acc_admin_${idx}`).value === 'true',
      sections: getCheckedValues(`sections_${idx}`),
      actions: getCheckedValues(`actions_${idx}`)
    }));
    await api('/api/access/users/save','POST',{users});
    await api('/api/config/save','POST',{panel_auth_enabled: $('panel_auth_enabled').value === 'true'});
    await fetchAuthStatus();
    toast(t('usersSaved'));
    await loadAccessUsers();
  }catch(err){ toast(err.message, true); }
};
views.access = function(){
  const c = state.state.config || {};
  return `
    <div class="grid">
      <div class="card panel">
        <div class="panel-head-inline"><div><h2>${t('accessTitle')}</h2><div class="help-text" style="margin-top:6px">${t('accessText')}</div></div><div class="inline-actions"><button class="btn" onclick="addAccessUser()">${t('addUser')}</button><button class="btn btn-primary" onclick="saveAccessSettings()">${t('saveUsers')}</button></div></div>
        <div class="info-box" style="margin-bottom:14px"><h3>${t('firstUserManualTitle')}</h3><div class="help-text">${t('firstUserManualText')}</div><div class="help-text" style="margin-top:8px"><strong>${t('accessConfigFile')}:</strong> <code>${t('accessConfigFilePath')}</code></div></div>
        <div class="input-grid" style="margin-bottom:14px">${fieldSelect('panel_auth_enabled', t('authEnabled'), c.panel_auth_enabled ? 'true':'false', [{value:'false', label:t('disabled')},{value:'true', label:t('enabled')}])}</div>
        ${renderAccessUserRows() || `<div class="empty-note">${t('authUsers')}: 0</div>`}
      </div>
    </div>`;
};

views.settings = function() {
  const c = state.state.config;
  return `
    <div class="grid">
      <div class="card panel">
        <div class="panel-head-inline">
          <div>
            <h2 style="margin:0">${t('generalSettings')}</h2>
            <div class="help-text" style="margin-top:6px">${t('settingsHint')}</div>
          </div>
          <div class="inline-actions">
            <button class="btn" onclick="chooseSplash()">${t('changeStartupImage')}</button>
            <button class="btn" onclick="exportManagerConfig()">${t('exportConfig')}</button>
            <button class="btn" onclick="importManagerConfig()">${t('importConfig')}</button>
            <button class="btn btn-primary" onclick="saveSettings()">${t('saveSettings')}</button>
          </div>
        </div>
        <div class="input-grid">
          ${field('server_name', t('serverName'), c.server_name || '')}
          ${fieldSelect('language', t('language'), c.language || state.lang, [{value:'es', label:'Español'},{value:'en', label:'English'}])}
          ${fieldBrowse('server_folder', t('serverPath'), c.server_folder || '', 'folder', t('selectServerFolder'))}
          ${fieldBrowse('executable_path', t('exeOrBat'), c.executable_path || '', 'exe_bat', t('selectExecutable'))}
          ${fieldBrowse('working_directory', t('workingDirectory'), c.working_directory || '', 'folder', t('selectWorkingDirectory'))}
          ${fieldBrowse('xml_path', t('realServerConfig'), c.xml_path || '', 'xml', t('selectServerConfig'))}
          ${fieldBrowse('backup_folder', t('backupFolder'), c.backup_folder || '', 'folder', t('selectBackupFolder'))}
          ${field('inventory_api_base_url', t('inventoryApiUrl'), c.inventory_api_base_url || '')}
          ${field('inventory_api_user', t('inventoryApiUser'), c.inventory_api_user || 'admin')}
          ${field('inventory_api_password', t('inventoryApiPassword'), c.inventory_api_password || '', 'password')}
          ${fieldBrowse('item_icons_folder', t('itemIconsFolder'), c.item_icons_folder || '', 'folder', t('selectItemIconsFolder'))}
          ${field('telnet_host', t('telnetHost'), c.telnet_host || '127.0.0.1')}
          ${field('telnet_port', t('telnetPort'), c.telnet_port || 8081)}
          ${field('telnet_password', t('telnetPassword'), c.telnet_password || '', 'password')}
          ${field('panel_host', t('panelHost'), c.panel_host || '127.0.0.1')}
          ${field('panel_port', t('panelPort'), c.panel_port || 8765)}
          ${field('accent_color', t('accentColor'), c.accent_color || '#55a7ff')}
          ${fieldSelect('auto_restart_enabled', t('autoRestartEnabled'), c.auto_restart_enabled ? 'true' : 'false', [{value:'false', label:t('disabled')},{value:'true', label:t('enabled')}])}
          ${field('auto_restart_delay_seconds', t('autoRestartDelay'), c.auto_restart_delay_seconds || 15, 'number')}
        </div>
        <div class="grid grid-2" style="margin-top:14px">
          <div class="info-box"><h3>${t('inventoryApiHelpTitle')}</h3><div class="help-text">${t('inventoryApiHelpText')}</div></div>
          <div class="info-box"><h3>${t('inventoryApiUserHelpTitle')}</h3><div class="help-text">${t('inventoryApiUserHelpText')}</div></div>
        </div>
        <div class="help-text" style="margin-top:14px">${t('panelPortHelp')}</div>
      </div>
    </div>`;
};

views.helpdocs = function() {
  return `
    <div class="grid grid-2">
      <div class="card panel">
        <div class="info-box" style="margin-bottom:14px"><h3>${t('helpSectionTitle')}</h3><div class="help-text">${t('helpSectionText')}</div></div>
        ${infoNote(t('helpServerPathsTitle'), t('helpServerPathsText'))}
        ${infoNote(t('helpGeneralStatusTitle'), t('helpGeneralStatusText'))}
        ${infoNote(t('helpPlayersTitle'), t('helpPlayersText'))}
        ${infoNote(t('helpInventoryTitle'), t('helpInventoryText'))}
        ${infoNote(t('helpBackupsTitle'), t('helpBackupsText'))}
        ${infoNote(t('helpTasksTitle'), t('helpTasksText'))}
      </div>
      <div class="card panel">
        ${infoNote(t('helpServerConfigTitle'), t('helpServerConfigText'))}
        ${infoNote(t('helpSettingsTitleFixed'), t('helpSettingsTextFixed'))}
        ${infoNote(t('helpDiscordNotifyTitle'), t('helpDiscordNotifyText'))}
        ${infoNote(t('helpAccessTitle'), t('helpAccessText'))}
        ${infoNote(t('inventoryApiHelpTitle'), t('inventoryApiHelpText'))}
        ${infoNote(t('inventoryApiUserHelpTitle'), t('inventoryApiUserHelpText'))}
        ${infoNote(t('helpExternalMapTitle'), t('helpExternalMapText'))}
      </div>
    </div>`;
};

const _buildMenuPermPatch = buildMenu;
buildMenu = function(){
  const visibleKeys = ['dashboard','server','console','players','inventory','backups','tasks','serverconfig','settings','notifications','discordbot','access','helpdocs'].filter(key => canAccessSection(key));
  if (!visibleKeys.includes(state.section)) state.section = visibleKeys[0] || 'dashboard';
  $('menu').innerHTML = visibleKeys.map(key => `<button class="${state.section === key ? 'active' : ''}" onclick="go('${key}')">${menuLabel(key)}</button>`).join('');
  if ($('sidebarFooter')) $('sidebarFooter').innerHTML = authState.auth_enabled && authState.logged_in ? `<button onclick="panelLogout()">${t('logoutButton')}</button>` : '';
};
go = function(section) {
  if (!canAccessSection(section)) { toast(t('noPermissionSection'), true); return; }
  state.section = section;
  if (section === 'access') loadAccessUsers();
  render();
};
panelLogout = async function(){
  if (!authState.auth_enabled) { toast(t('logoutUnavailable'), true); return; }
  try{ await apiBase('/api/auth/logout','POST',{}, true); }catch(_){ }
  await fetchAuthStatus();
  ensureLoginOverlay();
  buildMenu();
  render(true);
  toast(t('logoutDone'));
};
const _renderPermPatch = render;
render = function(preserveScroll=false){
  _renderPermPatch(preserveScroll);
  applyActionPermissionDisables();
};
function actionFromOnclick(raw){
  const txt = String(raw || '');
  if (txt.includes("serverAction('start'") || txt.includes('serverAction("start"')) return 'server.start';
  if (txt.includes("serverAction('stop'") || txt.includes('serverAction("stop"')) return 'server.stop';
  if (txt.includes("serverAction('restart'") || txt.includes('serverAction("restart"')) return 'server.restart';
  if (txt.includes("serverAction('backup'") || txt.includes('serverAction("backup"')) return 'backups.create';
  if (txt.includes('stopManager(')) return 'manager.stop';
  if (txt.includes('restartManagerFromStopped(')) return 'manager.start';
  if (txt.includes('refreshPlayers(')) return 'players.refresh';
  if (txt.includes('loadPlayerInventory(')) return 'inventory.load';
  if (txt.includes('kickPlayer(')) return 'players.kick';
  if (txt.includes('copyPlayerField(') || txt.includes('copyToClipboard(')) return 'players.copy';
  if (txt.includes('loadBackups(')) return 'backups.refresh';
  if (txt.includes('restoreBackup(')) return 'backups.restore';
  if (txt.includes('deleteBackup(')) return 'backups.delete';
  if (txt.includes('addRestartTaskOnly(')) return 'tasks.add_restart';
  if (txt.includes('addBackupTaskOnly(')) return 'tasks.add_backup';
  if (txt.includes('saveTasks(')) return 'tasks.save';
  if (txt.includes('deleteTask(') || txt.includes('removeTask(')) return 'tasks.delete';
  if (txt.includes('saveStructuredXml(')) return 'serverconfig.save_structured';
  if (txt.includes('loadXmlAll(')) return 'serverconfig.load';
  if (txt.includes('saveBotConfig(')) return 'discordbot.save';
  if (txt.includes('testNotificationSettings(')) return 'notifications.test';
  if (txt.includes('saveNotificationSettings(')) return 'notifications.save';
  if (txt.includes('openExternalMap(')) return 'map.open';
  if (txt.includes('sendConsole(')) return 'console.send';
  if (txt.includes('sendChat(')) return 'server.chat';
  if (txt.includes('saveSettings(')) return 'settings.save';
  if (txt.includes('exportManagerConfig(')) return 'settings.export';
  if (txt.includes('importManagerConfig(')) return 'settings.import';
  if (txt.includes('chooseSplash(')) return 'settings.change_splash';
  if (txt.includes('browseField(')) return 'settings.browse';
  if (txt.includes('addAccessUser(')) return 'access.add_user';
  if (txt.includes('removeAccessUser(')) return 'access.remove_user';
  if (txt.includes('saveAccessSettings(')) return 'access.save';
  if (txt.includes('saveCollection(') && txt.includes('tasks')) return 'tasks.save';
  return '';
}
function applyActionPermissionDisables(){
  document.querySelectorAll('button[onclick]').forEach(btn => {
    const action = actionFromOnclick(btn.getAttribute('onclick') || '');
    if (action && !canDo(action)) {
      btn.disabled = true;
      btn.style.opacity = '.55';
      btn.style.cursor = 'not-allowed';
      btn.title = t('noPermissionAction');
    }
  });
}
function wrapAction(fnName, actionResolver){
  const original = window[fnName];
  if (typeof original !== 'function') return;
  window[fnName] = async function(...args){
    const data = typeof actionResolver === 'function' ? actionResolver(...args) : actionResolver;
    const section = data && data.section ? data.section : null;
    const action = data && data.action ? data.action : data;
    if (!ensureAllowed(section, action)) return;
    return original.apply(this, args);
  };
}
wrapAction('refreshPlayers', {section:'players', action:'players.refresh'});
wrapAction('loadPlayerInventory', {section:'inventory', action:'inventory.load'});
wrapAction('kickPlayer', {section:'players', action:'players.kick'});
wrapAction('focusPlayerOnMap', {section:'players', action:'players.view_map'});
wrapAction('copyPlayerField', {section:'players', action:'players.copy'});
wrapAction('loadBackups', {section:'backups', action:'backups.refresh'});
wrapAction('restoreBackup', {section:'backups', action:'backups.restore'});
wrapAction('deleteBackup', {section:'backups', action:'backups.delete'});
wrapAction('addRestartTaskOnly', {section:'tasks', action:'tasks.add_restart'});
wrapAction('addBackupTaskOnly', {section:'tasks', action:'tasks.add_backup'});
wrapAction('saveTasks', {section:'tasks', action:'tasks.save'});
wrapAction('deleteTask', {section:'tasks', action:'tasks.delete'});
wrapAction('removeTask', {section:'tasks', action:'tasks.delete'});
wrapAction('saveStructuredXml', {section:'serverconfig', action:'serverconfig.save_structured'});
wrapAction('loadXmlAll', {section:'serverconfig', action:'serverconfig.load'});
wrapAction('saveBotConfig', {section:'discordbot', action:'discordbot.save'});
wrapAction('testNotificationSettings', {section:'notifications', action:'notifications.test'});
wrapAction('saveNotificationSettings', {section:'notifications', action:'notifications.save'});
wrapAction('openExternalMap', {section:'dashboard', action:'map.open'});
wrapAction('sendConsole', {section:'console', action:'console.send'});
wrapAction('sendChat', {section:'server', action:'server.chat'});
wrapAction('saveSettings', {section:'settings', action:'settings.save'});
wrapAction('exportManagerConfig', {section:'settings', action:'settings.export'});
wrapAction('importManagerConfig', {section:'settings', action:'settings.import'});
wrapAction('chooseSplash', {section:'settings', action:'settings.change_splash'});
wrapAction('browseField', {section:'settings', action:'settings.browse'});
const _serverActionPermOriginal = serverAction;
serverAction = async function(action){
  const perm = {start:'server.start', stop:'server.stop', restart:'server.restart', backup:'backups.create'}[String(action||'')];
  const section = String(action||'') === 'backup' ? 'backups' : 'server';
  if (!ensureAllowed(section, perm)) return;
  return _serverActionPermOriginal.apply(this, [action]);
};
const _stopManagerOriginal = stopManager;
stopManager = async function(){ if (!ensureAllowed('server','manager.stop')) return; return _stopManagerOriginal.apply(this, arguments); };
const _restartManagerOriginal = restartManagerFromStopped;
restartManagerFromStopped = async function(){ if (!ensureAllowed('server','manager.start')) return; return _restartManagerOriginal.apply(this, arguments); };


/* ===== KarmaWorld patch: panel host safe open + improved access + theme ===== */
Object.assign(T.es, {
  uiTheme: 'Tema visual',
  themeDark: 'Oscuro',
  themeOcean: 'Océano',
  themeEmerald: 'Esmeralda',
  themeViolet: 'Violeta',
  themeSunset: 'Atardecer',
  themeHelpTitle: 'Tema del panel',
  themeHelpText: 'Puedes cambiar todo el Server Kit entre varios temas sin tocar el resto de funciones: oscuro, océano, esmeralda, violeta y atardecer.',
  panelHostHelpTitle: 'Host y puerto del panel',
  panelHostHelpText: '127.0.0.1 = solo este PC. 0.0.0.0 = escuchar en todas las redes. Aunque uses 0.0.0.0, en este PC debes abrir el panel con 127.0.0.1 o con la IP local del equipo.',
  accessUsersList: 'Lista de usuarios',
  accessUserEditor: 'Editor del usuario',
  accessNoUsers: 'Todavía no hay usuarios secundarios creados.',
  accessSelectUser: 'Selecciona un usuario de la lista para editarlo.',
  rootUserLocked: 'Usuario root principal',
  rootUserLockedText: 'Este usuario se define en config/panel_users.json. Desde el panel no se puede borrar ni quitar permisos.',
  accessPermissionsByTabs: 'Permisos por pestañas',
  accessPermissionsByActions: 'Permisos por botones y acciones',
  accessSaveCurrent: 'Guardar usuarios',
  accessReadonlyRoot: 'Root bloqueado desde panel',
  panelWillOpenLocal: 'Si pones 0.0.0.0, la ventana local abrirá 127.0.0.1 automáticamente para no romperse.',
  mapOpenConfirm: 'Se abrirá el mapa web fuera del Server Kit. ¿Continuar?'
});
Object.assign(T.en, {
  uiTheme: 'Visual theme',
  themeDark: 'Dark',
  themeOcean: 'Ocean',
  themeEmerald: 'Emerald',
  themeViolet: 'Violet',
  themeSunset: 'Sunset',
  themeHelpTitle: 'Panel theme',
  themeHelpText: 'You can switch the whole Server Kit between several themes without affecting the rest of the features: dark, ocean, emerald, violet and sunset.',
  panelHostHelpTitle: 'Panel host and port',
  panelHostHelpText: '127.0.0.1 = this PC only. 0.0.0.0 = listen on all networks. Even if you use 0.0.0.0, on this PC you must open the panel with 127.0.0.1 or the computer local IP.',
  accessUsersList: 'Users list',
  accessUserEditor: 'User editor',
  accessNoUsers: 'No secondary users created yet.',
  accessSelectUser: 'Select a user from the list to edit it.',
  rootUserLocked: 'Main root user',
  rootUserLockedText: 'This user is defined in config/panel_users.json. It cannot be removed or stripped of permissions from the panel.',
  accessPermissionsByTabs: 'Tab permissions',
  accessPermissionsByActions: 'Button and action permissions',
  accessSaveCurrent: 'Save users',
  accessReadonlyRoot: 'Root locked from panel',
  panelWillOpenLocal: 'If you set 0.0.0.0, the local window will open 127.0.0.1 automatically so it does not break.',
  mapOpenConfirm: 'The web map will open outside Server Kit. Continue?'
});

function applyUiTheme(){
  try{
    const allowed = new Set(['dark','ocean','emerald','violet','sunset']);
    const raw = String((state.state && state.state.config && state.state.config.ui_theme) || 'dark').toLowerCase().trim();
    const theme = allowed.has(raw) ? raw : 'dark';
    document.body.setAttribute('data-theme', theme);
  }catch(_){ document.body.setAttribute('data-theme', 'dark'); }
}
const _kwPrevRenderStaticTexts = renderStaticTexts;
renderStaticTexts = function(){ _kwPrevRenderStaticTexts(); applyUiTheme(); };
const _kwPrevRefreshState2 = refreshState;
refreshState = async function(silent=false){ const out = await _kwPrevRefreshState2(silent); applyUiTheme(); return out; };

function accessEditableUsers(){ return (authState.users || []).filter(u => !u.is_root); }
function getAccessSelectedId(){
  const all = authState.users || [];
  if (!authState.access_selected_id && all.length) authState.access_selected_id = String(all[0].id || '');
  if (authState.access_selected_id && !all.find(u => String(u.id||'') === String(authState.access_selected_id))) authState.access_selected_id = all[0] ? String(all[0].id || '') : '';
  return authState.access_selected_id || '';
}
function currentAccessUser(){
  const id = getAccessSelectedId();
  return (authState.users || []).find(u => String(u.id||'') === String(id)) || null;
}
function selectAccessUser(id){ authState.access_selected_id = String(id || ''); render(); }
function syncCurrentAccessEditor(){
  const user = currentAccessUser();
  if (!user) return;
  const idx = (authState.users || []).findIndex(u => String(u.id||'') === String(user.id||''));
  if (idx < 0) return;
  const isRoot = !!user.is_root;
  const read = (id, fallback='') => { const el = document.getElementById(id); return el ? el.value : fallback; };
  const checked = prefix => Array.from(document.querySelectorAll(`[data-perm-box="${prefix}"]:checked`)).map(el => String(el.value || '').toLowerCase());
  const updated = {...user};
  if (!isRoot){
    updated.username = read('access_user_name', updated.username || '');
    const pw = read('access_user_password', '');
    if (pw) updated.password = pw;
    updated.enabled = read('access_user_enabled', updated.enabled !== false ? 'true' : 'false') === 'true';
    updated.is_admin = read('access_user_admin', updated.is_admin ? 'true' : 'false') === 'true';
    updated.sections = checked('access_sections');
    updated.actions = checked('access_actions');
  }
  authState.users[idx] = updated;
}
function renderAccessUserList(){
  const rows = authState.users || [];
  if (!rows.length) return `<div class="empty-note">${t('authUsers')}: 0</div>`;
  const selected = getAccessSelectedId();
  return `<div class="access-user-list">${rows.map(u => {
    const active = String(u.id||'') === String(selected);
    const subtitle = u.is_root ? t('rootUserLocked') : ((u.is_admin ? 'Admin' : 'Usuario') + ' · ' + (u.enabled === false ? t('disabled') : t('enabled')));
    return `<button class="access-user-pill ${active ? 'active' : ''}" onclick="selectAccessUser('${String(u.id||'').replace(/'/g,"&#39;")}')"><strong>${escapeHtml(u.username || '(sin usuario)')}</strong><span>${escapeHtml(subtitle)}</span></button>`;
  }).join('')}</div>`;
}
function renderAccessEditor(){
  const user = currentAccessUser();
  if (!user) return `<div class="empty-note">${t('accessSelectUser')}</div>`;
  const rootLocked = !!user.is_root;
  const sectionItems = sectionChoices();
  const actionItems = actionCatalog().map(row => ({key:row.key, label:actionLabel(row)}));
  return `
    <div class="card panel access-editor-panel">
      <div class="panel-head-inline"><div><h3 style="margin:0">${t('accessUserEditor')}</h3><div class="help-text" style="margin-top:6px">${rootLocked ? t('rootUserLockedText') : t('accessText')}</div></div>${rootLocked ? `<span class="badge ok">${t('accessReadonlyRoot')}</span>` : ''}</div>
      ${rootLocked ? `<div class="info-box" style="margin-bottom:14px"><h3>${t('rootUserLocked')}</h3><div class="help-text">${t('rootUserLockedText')}</div></div>` : ''}
      <div class="input-grid">
        <div class="field"><label>${t('loginUser')}</label><input id="access_user_name" value="${escapeHtml(user.username || '')}" ${rootLocked ? 'disabled' : ''}></div>
        <div class="field"><label>${t('loginPassword')}</label><input id="access_user_password" type="password" placeholder="${t('changePasswordHint')}" ${rootLocked ? 'disabled' : ''}></div>
        <div class="field"><label>${t('adminUser')}</label><select id="access_user_admin" ${rootLocked ? 'disabled' : ''}><option value="false" ${!user.is_admin ? 'selected' : ''}>${t('no')}</option><option value="true" ${user.is_admin ? 'selected' : ''}>${t('yes')}</option></select></div>
        <div class="field"><label>${t('userEnabled')}</label><select id="access_user_enabled" ${rootLocked ? 'disabled' : ''}><option value="true" ${user.enabled !== false ? 'selected' : ''}>${t('yes')}</option><option value="false" ${user.enabled === false ? 'selected' : ''}>${t('no')}</option></select></div>
      </div>
      <div style="margin-top:14px">
        <div style="font-weight:700;margin-bottom:6px">${t('accessPermissionsByTabs')}</div>
        <div class="help-text" style="margin-bottom:8px">${t('sectionsPickerHelp')}</div>
        ${checkboxCloud('access_sections', sectionItems, user.sections || [])}
      </div>
      <div style="margin-top:14px">
        <div style="font-weight:700;margin-bottom:6px">${t('accessPermissionsByActions')}</div>
        <div class="help-text" style="margin-bottom:8px">${t('actionsPickerHelp')}</div>
        ${checkboxCloud('access_actions', actionItems, user.actions || [])}
      </div>
      ${!rootLocked ? `<div class="inline-actions" style="margin-top:14px"><button class="btn btn-danger" onclick="removeSelectedAccessUser()">${t('delete')}</button></div>` : ''}
    </div>`;
}
loadAccessUsers = async function(){
  try{
    const res = await api('/api/access/users/list','POST',{});
    authState.users = res.data || [];
    getAccessSelectedId();
    render();
  }catch(err){ toast(err.message, true); }
};
addAccessUser = function(){
  if (!ensureAllowed('access','access.add_user')) return;
  authState.users = authState.users || [];
  const id = `user_${Date.now()}`;
  authState.users.push({id, username:'', enabled:true, is_admin:false, is_root:false, sections:['dashboard'], actions:['dashboard.refresh']});
  authState.access_selected_id = id;
  render();
};
removeSelectedAccessUser = function(){
  if (!ensureAllowed('access','access.remove_user')) return;
  const current = currentAccessUser();
  if (!current || current.is_root) return;
  authState.users = (authState.users || []).filter(u => String(u.id||'') !== String(current.id||''));
  authState.access_selected_id = (authState.users[0] && authState.users[0].id) ? String(authState.users[0].id) : '';
  render();
};
saveAccessSettings = async function(){
  if (!ensureAllowed('access','access.save')) return;
  try{
    syncCurrentAccessEditor();
    const users = (authState.users || []).map(u => ({
      id: u.id || `user_${Date.now()}`,
      username: u.username || '',
      password: u.password || '',
      enabled: u.enabled !== false,
      is_admin: !!u.is_admin,
      is_root: !!u.is_root,
      sections: Array.isArray(u.sections) ? u.sections : [],
      actions: Array.isArray(u.actions) ? u.actions : []
    }));
    await api('/api/access/users/save','POST',{users});
    await api('/api/config/save','POST',{panel_auth_enabled: $('panel_auth_enabled').value === 'true'});
    await fetchAuthStatus();
    toast(t('usersSaved'));
    await loadAccessUsers();
  }catch(err){ toast(err.message, true); }
};
views.access = function(){
  const c = state.state.config || {};
  return `
    <div class="grid">
      <div class="card panel">
        <div class="panel-head-inline"><div><h2>${t('accessTitle')}</h2><div class="help-text" style="margin-top:6px">${t('accessText')}</div></div><div class="inline-actions"><button class="btn" onclick="addAccessUser()">${t('addUser')}</button><button class="btn btn-primary" onclick="saveAccessSettings()">${t('accessSaveCurrent')}</button></div></div>
        <div class="info-box" style="margin-bottom:14px"><h3>${t('firstUserManualTitle')}</h3><div class="help-text">${t('firstUserManualText')}</div><div class="help-text" style="margin-top:8px"><strong>${t('accessConfigFile')}:</strong> <code>${t('accessConfigFilePath')}</code></div></div>
        <div class="input-grid" style="margin-bottom:16px">${fieldSelect('panel_auth_enabled', t('authEnabled'), c.panel_auth_enabled ? 'true':'false', [{value:'false', label:t('disabled')},{value:'true', label:t('enabled')}])}</div>
        <div class="access-layout">
          <div class="card panel access-list-panel"><h3 style="margin-top:0">${t('accessUsersList')}</h3>${renderAccessUserList()}</div>
          ${renderAccessEditor()}
        </div>
      </div>
    </div>`;
};

const _kwPrevSaveSettingsTheme = saveSettings;
saveSettings = async function(){
  const el = document.getElementById('ui_theme');
  if (el && state.state && state.state.config) state.state.config.ui_theme = el.value;
  const out = await _kwPrevSaveSettingsTheme.apply(this, arguments);
  applyUiTheme();
  return out;
};
views.settings = function() {
  const c = state.state.config;
  return `
    <div class="grid">
      <div class="card panel">
        <div class="panel-head-inline">
          <div>
            <h2 style="margin:0">${t('generalSettings')}</h2>
            <div class="help-text" style="margin-top:6px">${t('settingsHint')}</div>
          </div>
          <div class="inline-actions">
            <button class="btn" onclick="chooseSplash()">${t('changeStartupImage')}</button>
            <button class="btn" onclick="exportManagerConfig()">${t('exportConfig')}</button>
            <button class="btn" onclick="importManagerConfig()">${t('importConfig')}</button>
            <button class="btn btn-primary" onclick="saveSettings()">${t('saveSettings')}</button>
          </div>
        </div>
        <div class="input-grid">
          ${field('server_name', t('serverName'), c.server_name || '')}
          ${fieldSelect('language', t('language'), c.language || state.lang, [{value:'es', label:'Español'},{value:'en', label:'English'}])}
          ${fieldBrowse('server_folder', t('serverPath'), c.server_folder || '', 'folder', t('selectServerFolder'))}
          ${fieldBrowse('executable_path', t('exeOrBat'), c.executable_path || '', 'exe_bat', t('selectExecutable'))}
          ${fieldBrowse('working_directory', t('workingDirectory'), c.working_directory || '', 'folder', t('selectWorkingDirectory'))}
          ${fieldBrowse('xml_path', t('realServerConfig'), c.xml_path || '', 'xml', t('selectServerConfig'))}
          ${fieldBrowse('backup_folder', t('backupFolder'), c.backup_folder || '', 'folder', t('selectBackupFolder'))}
          ${field('inventory_api_base_url', t('inventoryApiUrl'), c.inventory_api_base_url || '')}
          ${field('inventory_api_user', t('inventoryApiUser'), c.inventory_api_user || 'admin')}
          ${field('inventory_api_password', t('inventoryApiPassword'), c.inventory_api_password || '', 'password')}
          ${fieldBrowse('item_icons_folder', t('itemIconsFolder'), c.item_icons_folder || '', 'folder', t('selectItemIconsFolder'))}
          ${field('telnet_host', t('telnetHost'), c.telnet_host || '127.0.0.1')}
          ${field('telnet_port', t('telnetPort'), c.telnet_port || 8081)}
          ${field('telnet_password', t('telnetPassword'), c.telnet_password || '', 'password')}
          ${field('panel_host', 'Host del panel ServerKit', c.panel_host || '127.0.0.1')}
          ${field('panel_port', 'Puerto del panel ServerKit', c.panel_port || 8765)}
          ${fieldSelect('watchdog_enabled', t('watchdogEnabled'), c.watchdog_enabled ? 'true' : 'false', [{value:'false', label:t('disabled')},{value:'true', label:t('enabled')}])}
          ${field('watchdog_check_interval_seconds', t('watchdogCheckInterval'), c.watchdog_check_interval_seconds || 45, 'number')}
          ${field('watchdog_startup_grace_seconds', t('watchdogStartupGrace'), c.watchdog_startup_grace_seconds || 180, 'number')}
          ${field('watchdog_no_output_seconds', t('watchdogNoOutput'), c.watchdog_no_output_seconds || 900, 'number')}
          ${field('watchdog_fail_threshold', t('watchdogFailThreshold'), c.watchdog_fail_threshold || 3, 'number')}
          ${field('watchdog_telnet_command', t('watchdogTelnetCommand'), c.watchdog_telnet_command || 'listplayers')}
          ${fieldSelect('ui_theme', t('uiTheme'), (c.ui_theme || 'dark'), [
              {value:'dark', label:t('themeDark')},
              {value:'ocean', label:t('themeOcean')},
              {value:'emerald', label:t('themeEmerald')},
              {value:'violet', label:t('themeViolet')},
              {value:'sunset', label:t('themeSunset')}
            ])}
          ${field('accent_color', t('accentColor'), c.accent_color || '#55a7ff')}
          ${fieldSelect('auto_restart_enabled', t('autoRestartEnabled'), c.auto_restart_enabled ? 'true' : 'false', [{value:'false', label:t('disabled')},{value:'true', label:t('enabled')}])}
          ${field('auto_restart_delay_seconds', t('autoRestartDelay'), c.auto_restart_delay_seconds || 15, 'number')}
        </div>
        <div class="grid grid-2" style="margin-top:14px">
          <div class="info-box"><h3>${t('inventoryApiHelpTitle')}</h3><div class="help-text">${t('inventoryApiHelpText')}</div></div>
          <div class="info-box"><h3>${t('inventoryApiUserHelpTitle')}</h3><div class="help-text">${t('inventoryApiUserHelpText')}</div></div>
          <div class="info-box"><h3>${t('panelHostHelpTitle')}</h3><div class="help-text">${t('panelHostHelpText')}</div></div>
          <div class="info-box"><h3>${t('panelHostRemoteTitle')}</h3><div class="help-text">${t('panelHostRemoteText')}</div></div>
          <div class="info-box"><h3>${t('watchdogTitle')}</h3><div class="help-text">${t('watchdogTitleText')}</div></div>
          <div class="info-box"><h3>${t('themeHelpTitle')}</h3><div class="help-text">${t('themeHelpText')}<br>${t('panelWillOpenLocal')}</div></div>
        </div>
      </div>
    </div>`;
};

views.helpdocs = function() {
  return `
    <div class="grid grid-2">
      <div class="card panel">
        <div class="info-box" style="margin-bottom:14px"><h3>${t('helpSectionTitle')}</h3><div class="help-text">${t('helpSectionText')}</div></div>
        ${infoNote(t('helpServerPathsTitle'), t('helpServerPathsText'))}
        ${infoNote(t('helpGeneralStatusTitle'), t('helpGeneralStatusText'))}
        ${infoNote(t('helpPlayersTitle'), t('helpPlayersText'))}
        ${infoNote(t('helpInventoryTitle'), t('helpInventoryText'))}
        ${infoNote(t('helpBackupsTitle'), t('helpBackupsText'))}
        ${infoNote(t('helpTasksTitle'), t('helpTasksText'))}
      </div>
      <div class="card panel">
        ${infoNote(t('helpServerConfigTitle'), t('helpServerConfigText'))}
        ${infoNote(t('helpSettingsTitleFixed'), t('helpSettingsTextFixed'))}
        ${infoNote(t('themeHelpTitle'), t('themeHelpText'))}
        ${infoNote(t('helpDiscordNotifyTitle'), t('helpDiscordNotifyText'))}
        ${infoNote(t('helpAccessTitle'), t('helpAccessText'))}
        ${infoNote(t('panelHostHelpTitle'), t('panelHostHelpText'))}
      </div>
    </div>`;
};

const _kwPrevBuildMenuTheme = buildMenu;
buildMenu = function(){
  const visibleKeys = ['dashboard','console','players','inventory','backups','tasks','serverconfig','settings','notifications','discordbot','access'].filter(key => canAccessSection(key));
  if (canDo('map.open')) visibleKeys.push('__map__');
  if (canAccessSection('helpdocs')) visibleKeys.push('helpdocs');
  if (!visibleKeys.includes(state.section)) state.section = visibleKeys[0] || 'dashboard';
  $('menu').innerHTML = visibleKeys.map(key => `<button class="${state.section === key ? 'active' : ''}" onclick="go('${key}')">${menuLabel(key)}</button>`).join('');
  if ($('sidebarFooter')) $('sidebarFooter').innerHTML = authState.auth_enabled && authState.logged_in ? `<button onclick="panelLogout()">${t('logoutButton')}</button>` : '';
};

openExternalMap = function() {
  if (!ensureAllowed('dashboard', 'map.open')) return;
  const url = String((state.state && state.state.config && state.state.config.live_map_url) || '').trim();
  if (!url) { toast(t('noMapUrlConfigured'), true); return; }
  if (!window.confirm(t('mapOpenConfirm'))) return;
  window.open(url, '_blank', 'noopener');
};

function setButtonsDisabledById(map){
  Object.entries(map).forEach(([id, perm]) => {
    const el = document.getElementById(id);
    if (!el) return;
    const allow = canDo(perm);
    el.disabled = !allow;
    el.style.opacity = allow ? '' : '.55';
    el.style.cursor = allow ? '' : 'not-allowed';
    if (!allow) el.title = t('noPermissionAction');
  });
}
const _kwPrevRenderFinal = render;
render = function(preserveScroll=false){
  _kwPrevRenderFinal(preserveScroll);
  applyUiTheme();
  setButtonsDisabledById({
    btnStartTop:'server.start',
    btnRestartTop:'server.restart',
    btnStopTop:'server.stop',
    btnBackupTop:'backups.create',
    btnStopManagerTop:'manager.stop'
  });
};


/* ===== KarmaWorld patch follow-up: save settings theme + bot permissions ===== */
const _kwPrevBotActionMaybe = typeof botAction === 'function' ? botAction : null;
if (_kwPrevBotActionMaybe) {
  botAction = async function(action){
    const perm = {start:'discordbot.start', stop:'discordbot.stop', restart:'discordbot.restart'}[String(action||'')] || 'discordbot.start';
    if (!ensureAllowed('discordbot', perm)) return;
    return _kwPrevBotActionMaybe.apply(this, [action]);
  };
}
saveSettings = async function() {
  if (!ensureAllowed('settings','settings.save')) return;
  try {
    const c = (state.state && state.state.config) || {};
    const getVal = (id, fallback='') => { const el = document.getElementById(id); return el ? el.value : fallback; };
    const payload = {
      server_name: getVal('server_name', c.server_name || ''),
      server_folder: getVal('server_folder', c.server_folder || ''),
      executable_path: getVal('executable_path', c.executable_path || ''),
      working_directory: getVal('working_directory', c.working_directory || ''),
      xml_path: getVal('xml_path', c.xml_path || ''),
      backup_folder: getVal('backup_folder', c.backup_folder || ''),
      live_map_url: getVal('live_map_url', c.live_map_url || ''),
      inventory_api_base_url: getVal('inventory_api_base_url', c.inventory_api_base_url || ''),
      inventory_api_user: getVal('inventory_api_user', c.inventory_api_user || 'admin'),
      inventory_api_password: getVal('inventory_api_password', c.inventory_api_password || ''),
      item_icons_folder: getVal('item_icons_folder', c.item_icons_folder || ''),
      telnet_host: getVal('telnet_host', c.telnet_host || '127.0.0.1'),
      telnet_port: getVal('telnet_port', c.telnet_port || 8081),
      telnet_password: getVal('telnet_password', c.telnet_password || ''),
      panel_host: getVal('panel_host', c.panel_host || '127.0.0.1'),
      panel_port: getVal('panel_port', c.panel_port || 8765),
      watchdog_enabled: getVal('watchdog_enabled', c.watchdog_enabled ? 'true' : 'false') === 'true',
      watchdog_check_interval_seconds: getVal('watchdog_check_interval_seconds', c.watchdog_check_interval_seconds || 45),
      watchdog_startup_grace_seconds: getVal('watchdog_startup_grace_seconds', c.watchdog_startup_grace_seconds || 180),
      watchdog_no_output_seconds: getVal('watchdog_no_output_seconds', c.watchdog_no_output_seconds || 900),
      watchdog_fail_threshold: getVal('watchdog_fail_threshold', c.watchdog_fail_threshold || 3),
      watchdog_telnet_command: getVal('watchdog_telnet_command', c.watchdog_telnet_command || 'listplayers'),
      ui_theme: getVal('ui_theme', c.ui_theme || 'dark'),
      accent_color: getVal('accent_color', c.accent_color || '#55a7ff'),
      auto_restart_enabled: getVal('auto_restart_enabled', c.auto_restart_enabled ? 'true' : 'false') === 'true',
      auto_restart_delay_seconds: getVal('auto_restart_delay_seconds', c.auto_restart_delay_seconds || 15),
      language: getVal('language', state.lang),
      map_image_path: c.map_image_path || '',
      map_size_mode: c.map_size_mode || '8192',
      map_custom_size: c.map_custom_size || 8192,
      panel_auth_enabled: c.panel_auth_enabled || false
    };
    await api('/api/config/save', 'POST', payload);
    state.lang = payload.language;
    state.state.config = { ...state.state.config, ...payload };
    applyUiTheme();
    toast(t('settingsSaved'));
    await refreshState(true);
    go('settings');
  } catch (err) {
    toast(err.message, true);
  }
};


/* ===== Notifications embed editor patch ===== */
function notifyTextArea(id, label, value, placeholder='') {
  return `<div class="field field-span-2"><label for="${id}">${label}</label><textarea id="${id}" rows="3" placeholder="${escapeHtml(placeholder)}">${escapeHtml(value || '')}</textarea></div>`;
}

Object.assign(T.es, {
  discordTemplatesTitle: 'Mensajes de los embeds',
  discordTemplatesHint: 'Puedes personalizar título y texto de cada aviso. Variables: {server_name}, {delay}, {backup_name}.',
  notifyStartTitleLabel: 'Título arranque',
  notifyStartBodyLabel: 'Texto arranque',
  notifyStopTitleLabel: 'Título parada manual',
  notifyStopBodyLabel: 'Texto parada manual',
  notifyCrashTitleLabel: 'Título caída',
  notifyCrashBodyLabel: 'Texto caída',
  notifyBackupTitleLabel: 'Título backup',
  notifyBackupBodyLabel: 'Texto backup',
  notifyAutoRestartTitleLabel: 'Título auto reinicio',
  notifyAutoRestartBodyLabel: 'Texto auto reinicio',
  notifyTestTitleLabel: 'Título prueba manual',
  notifyTestBodyLabel: 'Texto prueba manual',
  helpDiscordNotifyText: 'La pestaña Notificaciones del menú izquierdo sirve para configurar avisos Discord, probarlos al momento y editar el texto de los embeds.',
  notificationsPanelHint: 'Guarda aquí webhook/bot y también los títulos y textos de cada embed del server kit.'
});
Object.assign(T.en, {
  discordTemplatesTitle: 'Embed messages',
  discordTemplatesHint: 'You can customize the title and body of each alert. Variables: {server_name}, {delay}, {backup_name}.',
  notifyStartTitleLabel: 'Start title',
  notifyStartBodyLabel: 'Start text',
  notifyStopTitleLabel: 'Manual stop title',
  notifyStopBodyLabel: 'Manual stop text',
  notifyCrashTitleLabel: 'Crash title',
  notifyCrashBodyLabel: 'Crash text',
  notifyBackupTitleLabel: 'Backup title',
  notifyBackupBodyLabel: 'Backup text',
  notifyAutoRestartTitleLabel: 'Auto restart title',
  notifyAutoRestartBodyLabel: 'Auto restart text',
  notifyTestTitleLabel: 'Manual test title',
  notifyTestBodyLabel: 'Manual test text',
  helpDiscordNotifyText: 'The Notifications tab lets you configure Discord alerts, test them instantly, and edit embed titles and texts.',
  notificationsPanelHint: 'Save webhook/bot settings and the title/body templates for each server kit embed here.'
});

views.notifications = function() {
  const c = state.state.config;
  return `
    <div class="grid">
      <div class="card panel">
        <div class="panel-head-inline">
          <div>
            <h2 style="margin:0">${t('discordNotifyTitle')}</h2>
            <div class="help-text" style="margin-top:6px">${t('discordNotifyText')}</div>
          </div>
          <div class="inline-actions">
            <button class="btn" onclick="testNotificationSettings()">${t('sendTest')}</button>
            <button class="btn btn-primary" onclick="saveNotificationSettings()">${t('saveSettings')}</button>
          </div>
        </div>
        <div class="input-grid">
          ${fieldSelect('manager_notify_enabled', t('discordNotifyEnabled'), c.manager_notify_enabled ? 'true' : 'false', [{value:'false', label:t('disabled')},{value:'true', label:t('enabled')}])}
          ${field('manager_notify_webhook', t('discordWebhookUrl'), c.manager_notify_webhook || '')}
          ${field('manager_notify_bot_token', t('discordNotifyBotToken'), c.manager_notify_bot_token || '', 'password')}
          ${field('manager_notify_channel_id', t('discordNotifyChannelId'), c.manager_notify_channel_id || '')}
          ${field('manager_notify_mentions', t('discordNotifyMentions'), c.manager_notify_mentions || '')}
          ${fieldSelect('manager_notify_on_start', t('discordNotifyOnStart'), c.manager_notify_on_start === false ? 'false' : 'true', [{value:'true', label:t('yes')},{value:'false', label:t('no')}])}
          ${fieldSelect('manager_notify_on_stop', t('discordNotifyOnStop'), c.manager_notify_on_stop === false ? 'false' : 'true', [{value:'true', label:t('yes')},{value:'false', label:t('no')}])}
          ${fieldSelect('manager_notify_on_crash', t('discordNotifyOnCrash'), c.manager_notify_on_crash === false ? 'false' : 'true', [{value:'true', label:t('yes')},{value:'false', label:t('no')}])}
          ${fieldSelect('manager_notify_on_backup', t('discordNotifyOnBackup'), c.manager_notify_on_backup === false ? 'false' : 'true', [{value:'true', label:t('yes')},{value:'false', label:t('no')}])}
          ${fieldSelect('manager_notify_on_autorestart', t('discordNotifyOnAutoRestart'), c.manager_notify_on_autorestart === false ? 'false' : 'true', [{value:'true', label:t('yes')},{value:'false', label:t('no')}])}
        </div>
        <div class="card panel" style="margin-top:16px;padding:16px">
          <h3 style="margin:0 0 6px 0">${t('discordTemplatesTitle')}</h3>
          <div class="help-text" style="margin-bottom:14px">${t('discordTemplatesHint')}</div>
          <div class="input-grid">
            ${field('manager_notify_start_title', t('notifyStartTitleLabel'), c.manager_notify_start_title || '')}
            ${field('manager_notify_stop_title', t('notifyStopTitleLabel'), c.manager_notify_stop_title || '')}
            ${notifyTextArea('manager_notify_start_body', t('notifyStartBodyLabel'), c.manager_notify_start_body || '', '{server_name} iniciado correctamente.')}
            ${notifyTextArea('manager_notify_stop_body', t('notifyStopBodyLabel'), c.manager_notify_stop_body || '', '{server_name} se ha detenido manualmente desde el manager.')}
            ${field('manager_notify_crash_title', t('notifyCrashTitleLabel'), c.manager_notify_crash_title || '')}
            ${field('manager_notify_backup_title', t('notifyBackupTitleLabel'), c.manager_notify_backup_title || '')}
            ${notifyTextArea('manager_notify_crash_body', t('notifyCrashBodyLabel'), c.manager_notify_crash_body || '', '{server_name} se ha parado de forma inesperada. Auto reinicio en {delay} segundos.')}
            ${notifyTextArea('manager_notify_backup_body', t('notifyBackupBodyLabel'), c.manager_notify_backup_body || '', 'Se ha creado un backup del servidor: {backup_name}')}
            ${field('manager_notify_autorestart_title', t('notifyAutoRestartTitleLabel'), c.manager_notify_autorestart_title || '')}
            ${field('manager_notify_test_title', t('notifyTestTitleLabel'), c.manager_notify_test_title || '')}
            ${notifyTextArea('manager_notify_autorestart_body', t('notifyAutoRestartBodyLabel'), c.manager_notify_autorestart_body || '', '{server_name} se ha vuelto a iniciar automáticamente.')}
            ${notifyTextArea('manager_notify_test_body', t('notifyTestBodyLabel'), c.manager_notify_test_body || '', 'Prueba manual de notificaciones del server kit.')}
          </div>
        </div>
        <div class="help-text" style="margin-top:14px">${t('discordNotifyHint')} ${t('notificationsSavedHint')} ${t('notificationsPanelHint')}</div>
      </div>
    </div>`;
};

saveNotificationSettings = async function() {
  try {
    const payload = {
      manager_notify_enabled: $('manager_notify_enabled').value === 'true',
      manager_notify_webhook: $('manager_notify_webhook').value,
      manager_notify_bot_token: $('manager_notify_bot_token').value,
      manager_notify_channel_id: $('manager_notify_channel_id').value,
      manager_notify_mentions: $('manager_notify_mentions').value,
      manager_notify_on_start: $('manager_notify_on_start').value === 'true',
      manager_notify_on_stop: $('manager_notify_on_stop').value === 'true',
      manager_notify_on_crash: $('manager_notify_on_crash').value === 'true',
      manager_notify_on_backup: $('manager_notify_on_backup').value === 'true',
      manager_notify_on_autorestart: $('manager_notify_on_autorestart').value === 'true',
      manager_notify_start_title: $('manager_notify_start_title').value,
      manager_notify_start_body: $('manager_notify_start_body').value,
      manager_notify_stop_title: $('manager_notify_stop_title').value,
      manager_notify_stop_body: $('manager_notify_stop_body').value,
      manager_notify_crash_title: $('manager_notify_crash_title').value,
      manager_notify_crash_body: $('manager_notify_crash_body').value,
      manager_notify_backup_title: $('manager_notify_backup_title').value,
      manager_notify_backup_body: $('manager_notify_backup_body').value,
      manager_notify_autorestart_title: $('manager_notify_autorestart_title').value,
      manager_notify_autorestart_body: $('manager_notify_autorestart_body').value,
      manager_notify_test_title: $('manager_notify_test_title').value,
      manager_notify_test_body: $('manager_notify_test_body').value
    };
    await api('/api/config/save', 'POST', payload);
    toast(t('settingsSaved'));
    await refreshState(true);
    go('notifications');
  } catch (err) {
    toast(err.message, true);
  }
};

testNotificationSettings = async function() {
  try {
    const payload = {
      manager_notify_enabled: $('manager_notify_enabled').value === 'true',
      manager_notify_webhook: $('manager_notify_webhook').value,
      manager_notify_bot_token: $('manager_notify_bot_token').value,
      manager_notify_channel_id: $('manager_notify_channel_id').value,
      manager_notify_mentions: $('manager_notify_mentions').value,
      manager_notify_on_start: $('manager_notify_on_start').value === 'true',
      manager_notify_on_stop: $('manager_notify_on_stop').value === 'true',
      manager_notify_on_crash: $('manager_notify_on_crash').value === 'true',
      manager_notify_on_backup: $('manager_notify_on_backup').value === 'true',
      manager_notify_on_autorestart: $('manager_notify_on_autorestart').value === 'true',
      manager_notify_start_title: $('manager_notify_start_title').value,
      manager_notify_start_body: $('manager_notify_start_body').value,
      manager_notify_stop_title: $('manager_notify_stop_title').value,
      manager_notify_stop_body: $('manager_notify_stop_body').value,
      manager_notify_crash_title: $('manager_notify_crash_title').value,
      manager_notify_crash_body: $('manager_notify_crash_body').value,
      manager_notify_backup_title: $('manager_notify_backup_title').value,
      manager_notify_backup_body: $('manager_notify_backup_body').value,
      manager_notify_autorestart_title: $('manager_notify_autorestart_title').value,
      manager_notify_autorestart_body: $('manager_notify_autorestart_body').value,
      manager_notify_test_title: $('manager_notify_test_title').value,
      manager_notify_test_body: $('manager_notify_test_body').value
    };
    const res = await api('/api/notifications/test', 'POST', payload);
    toast(res.message || 'OK');
  } catch (err) {
    toast(err.message, true);
  }
};


/* ===== merged visual premium + missing features patch ===== */
Object.assign(T.es, {
  logsTitle: 'Resumen',
  notifications: 'Notificaciones',
  access: 'Accesos',
  helpGuide: 'Ayuda',
  discordBot: 'Bot externo',
  selectedPlayer: 'Jugador seleccionado',
  noPlayerSelected: 'No has seleccionado ningún jugador todavía.',
  inventoryHowTitle: 'Cómo funciona',
  inventoryHowText: 'Selecciona un jugador y pulsa cargar inventario para ver su belt, mochila y equipo real.',
  inventoryLimitTitle: 'Requisitos',
  inventoryLimitText: 'Necesitas la Web API o soporte real de inventario activo en el servidor para ver los objetos.',
  teleportsQuickHelpTitle: 'Uso rápido',
  teleportsQuickHelpText: 'Añade filas con nombre y coordenadas X/Y/Z para guardar puntos de teleport.',
  teleportsImportExportTitle: 'Importar y exportar',
  teleportsImportExportText: 'La lista se guarda en el manager. Puedes editarla y mantener puntos habituales del servidor.',
  helpServerPathsTitle: 'Rutas básicas',
  helpServerPathsText: 'Ruta del servidor: carpeta general del server. Ejecutable/BAT: archivo real que arranca 7DTD. Carpeta de trabajo: carpeta desde la que se lanza ese archivo.',
  helpLogsTitle: 'Resumen técnico',
  helpLogsText: 'Aquí ves el estado técnico del manager, rutas, panel, telnet y la actividad reciente.',
  helpConsoleTitle: 'Consola',
  helpConsoleText: 'Envía comandos al servidor por telnet y revisa la salida reciente del manager.',
  helpInventoryTitle: 'Inventario',
  helpInventoryText: 'Selecciona un jugador y carga su inventario real con belt, mochila y equipo.',
  helpPlayersTitle: 'Jugadores',
  helpPlayersText: 'Haz clic en un jugador para abrir su ficha completa, copiar datos, verlo en el mapa o expulsarlo.',
  helpTasksTitle: 'Tareas programadas',
  helpTasksText: 'Desde aquí puedes crear reinicios y backups programados con cron y guardarlos en la configuración.',
  helpSettingsTitleFixed: 'Ajustes',
  helpSettingsTextFixed: 'Aquí configuras rutas, telnet, mapa web, API de inventario, iconos, panel, temas y auto reinicio.',
  helpDiscordNotifyTitle: 'Notificaciones Discord',
  helpDiscordNotifyText: 'Configura webhook o bot token + canal, prueba el envío y personaliza los títulos y textos de los embeds.',
  helpAccessTitle: 'Accesos y permisos',
  helpAccessText: 'El primer usuario se crea a mano en config/panel_users.json. Después puedes crear más desde Accesos, con permisos por pestañas y por botones.',
  helpExternalMapTitle: 'Mapa web externo',
  helpExternalMapText: 'El botón Abrir mapa web abre el enlace del webmap fuera del panel sin romper el Server Kit.',
  mapLinkInMenu: 'Abrir mapa web',
  mapOpenConfirm: 'Se abrirá el mapa web fuera del Server Kit. ¿Continuar?'
});
Object.assign(T.en, {
  logsTitle: 'Summary',
  notifications: 'Notifications',
  access: 'Access',
  helpGuide: 'Help',
  discordBot: 'External bot',
  selectedPlayer: 'Selected player',
  noPlayerSelected: 'No player selected yet.',
  inventoryHowTitle: 'How it works',
  inventoryHowText: 'Select a player and click load inventory to view the real belt, bag and equipment.',
  inventoryLimitTitle: 'Requirements',
  inventoryLimitText: 'You need the Web API or real inventory support enabled on the server to view items.',
  teleportsQuickHelpTitle: 'Quick help',
  teleportsQuickHelpText: 'Add rows with name and X/Y/Z coordinates to save teleport points.',
  teleportsImportExportTitle: 'Import and export',
  teleportsImportExportText: 'The list is saved in the manager. You can edit it and keep your usual server points.',
  helpServerPathsTitle: 'Basic paths',
  helpServerPathsText: 'Server path: main server folder. Executable/BAT: real file that starts 7DTD. Working directory: folder used to launch that file.',
  helpLogsTitle: 'Technical summary',
  helpLogsText: 'Here you can see manager technical status, paths, panel, telnet and recent activity.',
  helpConsoleTitle: 'Console',
  helpConsoleText: 'Send telnet commands to the server and review recent manager output.',
  helpInventoryTitle: 'Inventory',
  helpInventoryText: 'Select a player and load the real inventory with belt, bag and equipment.',
  helpPlayersTitle: 'Players',
  helpPlayersText: 'Click a player to open the full card, copy data, view it on the map or kick it.',
  helpTasksTitle: 'Scheduled tasks',
  helpTasksText: 'Create scheduled restarts and backups with cron and save them in the configuration.',
  helpSettingsTitleFixed: 'Settings',
  helpSettingsTextFixed: 'Configure paths, telnet, web map, inventory API, icons, panel, themes and auto restart here.',
  helpDiscordNotifyTitle: 'Discord notifications',
  helpDiscordNotifyText: 'Configure a webhook or bot token + channel, test the send and customize embed titles and texts.',
  helpAccessTitle: 'Access and permissions',
  helpAccessText: 'The first user is created manually in config/panel_users.json. After that you can create more from Access, with tab and button permissions.',
  helpExternalMapTitle: 'External web map',
  helpExternalMapText: 'The Open web map button opens the webmap link outside the panel without breaking Server Kit.',
  mapLinkInMenu: 'Open web map',
  mapOpenConfirm: 'The web map will open outside Server Kit. Continue?'
});

(function(){
  const extraSections = ['notifications','access'];
  const extraActions = [
    {key:'teleports.save',section:'teleports',label_es:'Guardar teleports',label_en:'Save teleports'},
    {key:'teleports.add',section:'teleports',label_es:'Añadir filas de teleport',label_en:'Add teleport rows'},
    ];
  function uniq(arr){ return Array.from(new Set((arr || []).map(v => String(v)))); }
  function augmentAuthCatalogs(){
    authState.sections_catalog = uniq([...(authState.sections_catalog || KW_SECTION_OPTIONS || []), ...extraSections]);
    const existing = new Set((authState.actions_catalog || []).map(r => String((r && r.key) || '').toLowerCase()));
    authState.actions_catalog = [...(authState.actions_catalog || []), ...extraActions.filter(r => !existing.has(String(r.key).toLowerCase()))];
  }
  extraSections.forEach(sec => { if (!KW_SECTION_OPTIONS.includes(sec)) KW_SECTION_OPTIONS.push(sec); });
  const _fetchAuthStatusMerged = fetchAuthStatus;
  fetchAuthStatus = async function(){ const out = await _fetchAuthStatusMerged.apply(this, arguments); augmentAuthCatalogs(); return out; };
  augmentAuthCatalogs();

  const _oldMenuLabelMerged = menuLabel;
  menuLabel = function(key){
    const map = {
      dashboard:'generalStatus',
      server:'logsTitle',
      console:'console',
      players:'players',
      inventory:'inventory',
      
      backups:'backups',
      tasks:'scheduledTasks',
      serverconfig:'serverconfig',
      settings:'settings',
      notifications:'notifications',
      discordbot:'discordBot',
      access:'access',
      helpdocs:'helpGuide'
    };
    return t(map[key] || key);
  };

  openExternalMap = function(){
    if (!ensureAllowed('dashboard', 'map.open')) return;
    const url = String((state.state && state.state.config && state.state.config.live_map_url) || '').trim();
    if (!url) { toast(t('noMapUrlConfigured'), true); return; }
    if (!window.confirm(t('mapOpenConfirm'))) return;
    window.open(url, '_blank', 'noopener');
  };

  buildMenu = function(){
    const ordered = ['dashboard','console','players','inventory','backups','tasks','serverconfig','settings','notifications','discordbot','access'];
    const visibleKeys = ordered.filter(key => canAccessSection(key));
    if (canDo('map.open')) visibleKeys.push('__map__');
    if (canAccessSection('helpdocs')) visibleKeys.push('helpdocs');
    if (!visibleKeys.includes(state.section)) state.section = visibleKeys[0] || 'dashboard';
    $('menu').innerHTML = visibleKeys.map(key => {
      if (key === '__map__') {
        return `<button data-section="openMap" onclick="openExternalMap()"><span class="menu-icon" aria-hidden="true"></span><span class="menu-label">${t('mapLinkInMenu')}</span></button>`;
      }
      return `<button data-section="${key}" class="${state.section === key ? 'active' : ''}" onclick="go('${key}')"><span class="menu-icon" aria-hidden="true"></span><span class="menu-label">${menuLabel(key)}</span></button>`;
    }).join('');
    if ($('sidebarFooter')) {
      $('sidebarFooter').innerHTML = authState.auth_enabled && authState.logged_in
        ? `<button data-section="logout" onclick="panelLogout()"><span class="menu-icon" aria-hidden="true"></span><span class="menu-label">${t('logoutButton')}</span></button>`
        : '';
    }
  };

  const _oldRenderMerged = render;
  render = function(preserveScroll=false){
    _oldRenderMerged(preserveScroll);
    applyUiTheme();
  };
})();

/* ===== final visual merge safety patch: restore missing sections + translations ===== */
Object.assign(T.es, {
  notifications: 'Notificaciones',
  access: 'Accesos',
  helpGuide: 'Ayuda',
  discordBot: 'Bot externo',
  selectedPlayer: 'Jugador seleccionado',
  noPlayerSelected: 'No has seleccionado ningún jugador todavía.',
  inventoryHowTitle: 'Cómo funciona',
  inventoryHowText: 'Selecciona un jugador y pulsa cargar inventario para ver su belt, mochila y equipo real.',
  inventoryLimitTitle: 'Requisitos',
  inventoryLimitText: 'Necesitas la Web API o soporte real de inventario activo en el servidor para ver los objetos.',
  teleportsQuickHelpTitle: 'Uso rápido',
  teleportsQuickHelpText: 'Añade filas con nombre y coordenadas X/Y/Z para guardar puntos de teleport.',
  teleportsImportExportTitle: 'Importar y exportar',
  teleportsImportExportText: 'La lista se guarda en el manager. Puedes editarla y mantener puntos habituales del servidor.',
  helpLogsTitle: 'Resumen técnico',
  helpLogsText: 'Aquí ves el estado técnico del manager, rutas, panel, telnet y la actividad reciente.',
  helpConsoleTitle: 'Consola',
  helpConsoleText: 'Envía comandos al servidor por telnet y revisa la salida reciente del manager.',
  helpInventoryTitle: 'Inventario',
  helpInventoryText: 'Selecciona un jugador y carga su inventario real con belt, mochila y equipo.',
  helpSettingsTitleFixed: 'Ajustes',
  helpSettingsTextFixed: 'Aquí configuras rutas, telnet, mapa web, API de inventario, iconos, panel, temas y auto reinicio.',
  helpExternalMapTitle: 'Mapa web externo',
  helpExternalMapText: 'El botón Abrir mapa web abre el enlace del webmap fuera del panel sin romper el Server Kit.',
  helpDiscordNotifyTitle: 'Notificaciones Discord',
  helpDiscordNotifyText: 'Configura webhook o bot token + canal, prueba el envío y personaliza los títulos y textos de los embeds.',
  helpAccessTitle: 'Accesos y permisos',
  helpAccessText: 'El primer usuario se crea a mano en config/panel_users.json. Después puedes crear más desde Accesos, con permisos por pestañas y por botones.',
  mapLinkInMenu: 'Abrir mapa web',
  mapOpenConfirm: 'Se abrirá el mapa web fuera del Server Kit. ¿Continuar?'
});
Object.assign(T.en, {
  notifications: 'Notifications',
  access: 'Access',
  helpGuide: 'Help',
  discordBot: 'External bot',
  selectedPlayer: 'Selected player',
  noPlayerSelected: 'No player selected yet.',
  inventoryHowTitle: 'How it works',
  inventoryHowText: 'Select a player and click load inventory to view the real belt, bag and equipment.',
  inventoryLimitTitle: 'Requirements',
  inventoryLimitText: 'You need the Web API or real inventory support enabled on the server to view items.',
  teleportsQuickHelpTitle: 'Quick help',
  teleportsQuickHelpText: 'Add rows with name and X/Y/Z coordinates to save teleport points.',
  teleportsImportExportTitle: 'Import and export',
  teleportsImportExportText: 'The list is saved in the manager. You can edit it and keep your usual server points.',
  helpLogsTitle: 'Technical summary',
  helpLogsText: 'Here you can see manager technical status, paths, panel, telnet and recent activity.',
  helpConsoleTitle: 'Console',
  helpConsoleText: 'Send telnet commands to the server and review recent manager output.',
  helpInventoryTitle: 'Inventory',
  helpInventoryText: 'Select a player and load the real inventory with belt, bag and equipment.',
  helpSettingsTitleFixed: 'Settings',
  helpSettingsTextFixed: 'Configure paths, telnet, web map, inventory API, icons, panel, themes and auto restart here.',
  helpExternalMapTitle: 'External web map',
  helpExternalMapText: 'The Open web map button opens the webmap link outside the panel without breaking Server Kit.',
  helpDiscordNotifyTitle: 'Discord notifications',
  helpDiscordNotifyText: 'Configure a webhook or bot token + channel, test the send and customize embed titles and texts.',
  helpAccessTitle: 'Access and permissions',
  helpAccessText: 'The first user is created manually in config/panel_users.json. After that you can create more from Access, with tab and button permissions.',
  mapLinkInMenu: 'Open web map',
  mapOpenConfirm: 'The web map will open outside Server Kit. Continue?'
});

(function(){
  const ensureSections = ['notifications','access','helpdocs'];
  ensureSections.forEach(sec => { if (!KW_SECTION_OPTIONS.includes(sec)) KW_SECTION_OPTIONS.push(sec); });

  const oldMenuLabelFinal = menuLabel;
  menuLabel = function(key){
    const map = {
      dashboard:'generalStatus',
      server:'logsTitle',
      console:'console',
      players:'players',
      inventory:'inventory',
      
      backups:'backups',
      tasks:'scheduledTasks',
      serverconfig:'serverconfig',
      settings:'settings',
      notifications:'notifications',
      discordbot:'discordBot',
      access:'access',
      helpdocs:'helpGuide'
    };
    return t(map[key] || key);
  };

  openExternalMap = function(){
    if (!ensureAllowed('dashboard', 'map.open')) return;
    const url = String((state.state && state.state.config && state.state.config.live_map_url) || '').trim();
    if (!url) { toast(t('noMapUrlConfigured'), true); return; }
    if (!window.confirm(t('mapOpenConfirm'))) return;
    window.open(url, '_blank', 'noopener');
  };

  buildMenu = function(){
    const ordered = ['dashboard','console','players','inventory','backups','tasks','serverconfig','settings','notifications','discordbot','access'];
    const visibleKeys = ordered.filter(key => canAccessSection(key));
    if (canDo('map.open')) visibleKeys.push('__map__');
    if (canAccessSection('helpdocs')) visibleKeys.push('helpdocs');
    if (!visibleKeys.includes(state.section)) state.section = visibleKeys[0] || 'dashboard';
    $('menu').innerHTML = visibleKeys.map(key => {
      if (key === '__map__') {
        return `<button data-section="openMap" onclick="openExternalMap()"><span class="menu-icon" aria-hidden="true"></span><span class="menu-label">${t('mapLinkInMenu')}</span></button>`;
      }
      return `<button data-section="${key}" class="${state.section === key ? 'active' : ''}" onclick="go('${key}')"><span class="menu-icon" aria-hidden="true"></span><span class="menu-label">${menuLabel(key)}</span></button>`;
    }).join('');
    if ($('sidebarFooter')) {
      $('sidebarFooter').innerHTML = authState.auth_enabled && authState.logged_in
        ? `<button data-section="logout" onclick="panelLogout()"><span class="menu-icon" aria-hidden="true"></span><span class="menu-label">${t('logoutButton')}</span></button>`
        : '';
    }
  };
})();


/* ===== final patch: remove live map menu button, keep current UI ===== */
(function(){
  const oldBuildMenuNoLiveMap = buildMenu;
  buildMenu = function(){
    const ordered = ['dashboard','console','players','inventory','backups','tasks','serverconfig','settings','notifications','discordbot','access'];
    const visibleKeys = ordered.filter(key => canAccessSection(key));
    if (canDo('map.open')) visibleKeys.push('__map__');
    if (canAccessSection('helpdocs')) visibleKeys.push('helpdocs');
    if (!visibleKeys.includes(state.section)) state.section = visibleKeys[0] || 'dashboard';
    $('menu').innerHTML = visibleKeys.map(key => {
      if (key === '__map__') {
        return `<button data-section="openMap" onclick="openExternalMap()"><span class="menu-icon" aria-hidden="true"></span><span class="menu-label">${t('mapLinkInMenu')}</span></button>`;
      }
      return `<button data-section="${key}" class="${state.section === key ? 'active' : ''}" onclick="go('${key}')"><span class="menu-icon" aria-hidden="true"></span><span class="menu-label">${menuLabel(key)}</span></button>`;
    }).join('');
    if ($('sidebarFooter')) {
      $('sidebarFooter').innerHTML = authState.auth_enabled && authState.logged_in
        ? `<button data-section="logout" onclick="panelLogout()"><span class="menu-icon" aria-hidden="true"></span><span class="menu-label">${t('logoutButton')}</span></button>`
        : '';
    }
  };
})();


/* ===== KarmaWorld patch: command automations with simple interval format ===== */
Object.assign(T.es, {
  automations: 'Automatizaciones',
  commandAutomationsTitle: 'Automatizaciones de comandos',
  commandAutomationsText: 'Programa el comando que quieras y elige cada cuántos minutos, horas o días debe enviarse automáticamente por telnet.',
  addCommandAutomation: 'Añadir automatización',
  testNow: 'Probar ahora',
  noCommandTasksYet: 'No hay automatizaciones todavía.',
  commandToSend: 'Comando a enviar',
  taskAutomation: 'Automatización',
  taskCommand: 'Comando',
  automationExample: 'Ejemplo: say "Reinicio en 10 minutos"',
  everyValue: 'Cada',
  everyUnit: 'Unidad',
  minutesLabel: 'Minutos',
  hoursLabel: 'Horas',
  daysLabel: 'Días',
  intervalExample: 'Ejemplo: 30 minutos / 2 horas / 1 día'
});
Object.assign(T.en, {
  automations: 'Automations',
  commandAutomationsTitle: 'Command automations',
  commandAutomationsText: 'Schedule any telnet command and choose how often it should run in minutes, hours or days.',
  addCommandAutomation: 'Add automation',
  testNow: 'Test now',
  noCommandTasksYet: 'There are no automations yet.',
  commandToSend: 'Command to send',
  taskAutomation: 'Automation',
  taskCommand: 'Command',
  automationExample: 'Example: say "Restart in 10 minutes"',
  everyValue: 'Every',
  everyUnit: 'Unit',
  minutesLabel: 'Minutes',
  hoursLabel: 'Hours',
  daysLabel: 'Days',
  intervalExample: 'Example: 30 minutes / 2 hours / 1 day'
});

(function(){
  taskRowsByType = function(type) {
    const all = state.collections.tasks || [];
    const rows = [];
    all.forEach((task, index) => {
      if ((task.type || 'restart') === type) rows.push({ task, index });
    });
    return rows;
  };

  function normalizeIntervalUnit(unit) {
    const raw = String(unit || 'minutes').toLowerCase();
    if (['hour','hours','hora','horas','h'].includes(raw)) return 'hours';
    if (['day','days','dia','dias','día','días','d'].includes(raw)) return 'days';
    return 'minutes';
  }

  function deriveIntervalFromCron(cron) {
    const parts = String(cron || '').trim().split(/\s+/);
    if (parts.length !== 5) return { value: 30, unit: 'minutes' };
    const [minute, hour, day, month, weekday] = parts;
    if (hour === '*' && day === '*' && month === '*' && weekday === '*') {
      if (minute === '*') return { value: 1, unit: 'minutes' };
      if (/^\*\/\d+$/.test(minute)) return { value: Math.max(1, parseInt(minute.slice(2), 10) || 1), unit: 'minutes' };
    }
    if (minute === '0' && day === '*' && month === '*' && weekday === '*') {
      if (hour === '*') return { value: 1, unit: 'hours' };
      if (/^\*\/\d+$/.test(hour)) return { value: Math.max(1, parseInt(hour.slice(2), 10) || 1), unit: 'hours' };
    }
    if (minute === '0' && hour === '0' && month === '*' && weekday === '*') {
      if (day === '*') return { value: 1, unit: 'days' };
      if (/^\*\/\d+$/.test(day)) return { value: Math.max(1, parseInt(day.slice(2), 10) || 1), unit: 'days' };
    }
    return { value: 30, unit: 'minutes' };
  }

  function intervalToCron(value, unit) {
    const amount = Math.max(1, Number.parseInt(value, 10) || 1);
    const normalized = normalizeIntervalUnit(unit);
    if (normalized === 'minutes') {
      if (amount === 1) return '* * * * *';
      if (amount <= 59) return `*/${amount} * * * *`;
      if (amount % 60 === 0) {
        const hours = Math.max(1, amount / 60);
        return hours === 1 ? '0 * * * *' : `0 */${hours} * * *`;
      }
      return '';
    }
    if (normalized === 'hours') return amount === 1 ? '0 * * * *' : `0 */${amount} * * *`;
    return amount === 1 ? '0 0 * * *' : `0 0 */${amount} * *`;
  }

  addCommandTaskOnly = function() { addTask('command'); };

  addTask = function(type) {
    const baseType = type === 'backup' ? 'backup' : (type === 'command' ? 'command' : 'restart');
    state.collections.tasks = state.collections.tasks || [];
    state.collections.tasks.push({
      id: `ui_${Date.now()}_${Math.random().toString(16).slice(2, 8)}`,
      name: baseType === 'backup' ? t('taskBackup') : (baseType === 'command' ? t('taskAutomation') : t('taskRestart')),
      type: baseType,
      command: baseType === 'command' ? 'say "Mensaje automático"' : '',
      cron: baseType === 'backup' ? '0 */12 * * *' : (baseType === 'command' ? '*/30 * * * *' : '0 6 * * *'),
      interval_value: baseType === 'command' ? 30 : '',
      interval_unit: baseType === 'command' ? 'minutes' : '',
      active: true
    });
    render(true);
  };

  renderTaskTableRows = function(rows, emptyText) {
    return rows.length ? rows.map(({task, index}) => {
      if ((task.type || 'restart') === 'command') {
        const derived = deriveIntervalFromCron(task.cron || '');
        const intervalValue = Math.max(1, Number.parseInt(task.interval_value ?? derived.value ?? 30, 10) || 30);
        const intervalUnit = normalizeIntervalUnit(task.interval_unit || derived.unit || 'minutes');
        return `
          <tr>
            <td><input data-task-index="${index}" data-key="name" value="${escapeHtml(task.name || '')}" placeholder="${t('name')}"></td>
            <td>${escapeHtml(t('taskCommand'))}</td>
            <td><input data-task-index="${index}" data-key="command" value="${escapeHtml(task.command || '')}" placeholder="${t('automationExample')}"></td>
            <td><input type="number" min="1" step="1" data-task-index="${index}" data-key="interval_value" value="${intervalValue}" placeholder="30"></td>
            <td>
              <select data-task-index="${index}" data-key="interval_unit">
                <option value="minutes" ${intervalUnit === 'minutes' ? 'selected' : ''}>${t('minutesLabel')}</option>
                <option value="hours" ${intervalUnit === 'hours' ? 'selected' : ''}>${t('hoursLabel')}</option>
                <option value="days" ${intervalUnit === 'days' ? 'selected' : ''}>${t('daysLabel')}</option>
              </select>
            </td>
            <td><label class="switch"><input type="checkbox" data-task-index="${index}" data-key="active" ${task.active !== false ? 'checked' : ''}><span></span></label></td>
            <td><button class="btn danger" onclick="removeTask(${index});render()">${t('remove')}</button></td>
          </tr>`;
      }
      return `
        <tr>
          <td><input data-task-index="${index}" data-key="name" value="${escapeHtml(task.name || '')}" placeholder="${t('name')}"></td>
          <td>${escapeHtml(task.type === 'backup' ? t('backups') : t('restart'))}</td>
          <td><input data-task-index="${index}" data-key="cron" value="${escapeHtml(task.cron || '')}" placeholder="0 6 * * *"></td>
          <td><label class="switch"><input type="checkbox" data-task-index="${index}" data-key="active" ${task.active !== false ? 'checked' : ''}><span></span></label></td>
          <td><button class="btn danger" onclick="removeTask(${index});render()">${t('remove')}</button></td>
        </tr>`;
    }).join('') : `<tr><td colspan="${rows.some(row => ((row.task && row.task.type) || 'restart') === 'command') ? 7 : 5}" class="empty-note">${emptyText}</td></tr>`;
  };

  saveTasks = async function() {
    try {
      const rows = [...document.querySelectorAll('[data-task-index]')];
      const tasks = (state.collections.tasks || []).map((task, index) => {
        const find = (key) => rows.find(el => Number(el.dataset.taskIndex) === index && el.dataset.key === key);
        const type = task.type || 'restart';
        const result = {
          id: task.id || `task_${index}`,
          name: find('name')?.value?.trim() || task.name || (type === 'backup' ? t('taskBackup') : (type === 'command' ? t('taskAutomation') : t('taskRestart'))),
          type,
          cron: find('cron')?.value?.trim() || task.cron || (type === 'backup' ? '0 */12 * * *' : '0 6 * * *'),
          active: !!find('active')?.checked
        };
        if (type === 'command') {
          const intervalValue = Math.max(1, Number.parseInt(find('interval_value')?.value, 10) || Number.parseInt(task.interval_value, 10) || 30);
          const intervalUnit = normalizeIntervalUnit(find('interval_unit')?.value || task.interval_unit || 'minutes');
          result.command = find('command')?.value?.trim() || task.command || 'say "Mensaje automático"';
          result.interval_value = intervalValue;
          result.interval_unit = intervalUnit;
          result.cron = intervalToCron(intervalValue, intervalUnit) || task.cron || '';
        }
        return result;
      });
      state.collections.tasks = tasks;
      const res = await api('/api/collections/tasks', 'POST', { items: tasks });
      toast(res.message || t('saveTasks'));
      await refreshState(true);
    } catch (err) {
      toast(err.message, true);
    }
  };

  views.tasks = function() {
    const restartRows = taskRowsByType('restart');
    const automationRows = taskRowsByType('command');
    return `
      <div class="grid">
        <div class="card panel">
          <div class="panel-head-inline">
            <div>
              <h2 style="margin:0">${t('restartTasksOnlyTitle')}</h2>
              <div class="help-text" style="margin-top:6px">${t('restartTasksOnlyText')}</div>
            </div>
            <div class="inline-actions">
              <button type="button" class="btn" onclick="addRestartTaskOnly();return false">${t('addRestartTask')}</button>
              <button type="button" class="btn btn-primary" onclick="saveTasks();return false">${t('saveTasks')}</button>
            </div>
          </div>
          <table class="table">
            <thead><tr><th>${t('name')}</th><th>${t('taskType')}</th><th>${t('cron')}</th><th>${t('active')}</th><th></th></tr></thead>
            <tbody>${renderTaskTableRows(restartRows, t('noRestartTasksYet'))}</tbody>
          </table>
          ${infoNote(t('helpTasksTitle'), t('helpTasksText'))}
        </div>
        <div class="card panel">
          <div class="panel-head-inline">
            <div>
              <h2 style="margin:0">${t('commandAutomationsTitle')}</h2>
              <div class="help-text" style="margin-top:6px">${t('commandAutomationsText')}</div>
            </div>
            <div class="inline-actions">
              <button type="button" class="btn" onclick="addCommandTaskOnly();return false">${t('addCommandAutomation')}</button>
              <button type="button" class="btn btn-primary" onclick="saveTasks();return false">${t('saveTasks')}</button>
            </div>
          </div>
          <table class="table">
            <thead><tr><th>${t('name')}</th><th>${t('taskType')}</th><th>${t('commandToSend')}</th><th>${t('everyValue')}</th><th>${t('everyUnit')}</th><th>${t('active')}</th><th></th></tr></thead>
            <tbody>${renderTaskTableRows(automationRows, t('noCommandTasksYet'))}</tbody>
          </table>
          ${infoNote(t('commandAutomationsTitle'), t('intervalExample'))}
        </div>
      </div>`;
  };
})();

if (typeof wrapAction === 'function') {
  wrapAction('saveTasks', {section:'tasks', action:'tasks.save'});
  wrapAction('addCommandTaskOnly', {section:'tasks', action:'tasks.save'});
}

/* ===== Player history + moderation + theft restore ===== */
Object.assign(T.es, {
  historyTitle: 'Historial de jugadores',
  historySubtitle: 'Guarda primeras/últimas veces vistos, IDs, IPs, posiciones, moderación y casos de robo.',
  noHistoryYet: 'Todavía no hay historial guardado. Pulsa actualizar jugadores para empezar a llenarlo.',
  profileSummary: 'Ficha persistente',
  aliases: 'Nombres usados',
  firstSeen: 'Primera vez visto',
  lastSeen: 'Última vez visto',
  lastPosition: 'Última posición',
  sightings: 'Registros',
  moderationPanel: 'Moderación rápida',
  moderationReason: 'Motivo',
  moderationDuration: 'Duración',
  moderationKick: 'Expulsar',
  moderationBan: 'Banear',
  moderationUnban: 'Quitar ban',
  moderationHint: 'El baneo usa el formato del juego: duración + unidad + motivo.',
  recentModeration: 'Acciones de moderación',
  recentTimeline: 'Actividad reciente',
  theftPanel: 'Robo / devolución al dueño',
  theftReason: 'Motivo del caso',
  theftVictim: 'Dueño / víctima',
  theftVictimCustom: 'Víctima manual',
  theftVictimName: 'Nombre del dueño',
  theftVictimSteam: 'SteamID/EOS del dueño',
  theftItems: 'Objetos robados',
  theftItemsHint: 'Una línea por objeto. Ejemplo: resourceWood 500',
  theftSave: 'Guardar caso',
  theftSaveRestore: 'Guardar y devolver',
  theftCases: 'Casos registrados',
  restorePreview: 'Vista previa de devolución',
  offlineCommand: 'Comando alternativo offline',
  noCases: 'No hay casos registrados para este jugador.',
  noTimeline: 'Sin actividad persistente todavía.',
  noModeration: 'Sin acciones de moderación registradas.',
  selectHistoryRow: 'Abrir ficha',
  historyStatusOnline: 'Online',
  historyStatusOffline: 'Offline',
  selectedHistoryPlayer: 'Jugador del historial',
  helpPlayersText: 'La pestaña Jugadores ahora muestra conectados, ficha persistente, historial, baneos, expulsiones y registro de robos con vista previa o devolución directa al dueño.',
  helpSectionText: 'Resumen claro de las funciones activas, incluyendo historial persistente de jugadores, moderación y devolución manual de objetos robados.',
  historyLimitNote: 'La devolución automática usa give al dueño online. Si el dueño está offline, copia el comando alternativo.'
});
Object.assign(T.en, {
  historyTitle: 'Player history',
  historySubtitle: 'Stores first/last seen times, IDs, IPs, positions, moderation and theft cases.',
  noHistoryYet: 'There is no saved history yet. Refresh players to start filling it.',
  profileSummary: 'Persistent profile',
  aliases: 'Used names',
  firstSeen: 'First seen',
  lastSeen: 'Last seen',
  lastPosition: 'Last position',
  sightings: 'Sightings',
  moderationPanel: 'Quick moderation',
  moderationReason: 'Reason',
  moderationDuration: 'Duration',
  moderationKick: 'Kick',
  moderationBan: 'Ban',
  moderationUnban: 'Unban',
  moderationHint: 'Ban uses the game format: duration + unit + reason.',
  recentModeration: 'Moderation actions',
  recentTimeline: 'Recent activity',
  theftPanel: 'Theft / restore to owner',
  theftReason: 'Case reason',
  theftVictim: 'Owner / victim',
  theftVictimCustom: 'Manual victim',
  theftVictimName: 'Owner name',
  theftVictimSteam: 'Owner SteamID/EOS',
  theftItems: 'Stolen items',
  theftItemsHint: 'One line per item. Example: resourceWood 500',
  theftSave: 'Save case',
  theftSaveRestore: 'Save and restore',
  theftCases: 'Logged cases',
  restorePreview: 'Restore preview',
  offlineCommand: 'Offline alternate command',
  noCases: 'There are no logged cases for this player.',
  noTimeline: 'No persistent activity yet.',
  noModeration: 'No moderation actions logged.',
  selectHistoryRow: 'Open profile',
  historyStatusOnline: 'Online',
  historyStatusOffline: 'Offline',
  selectedHistoryPlayer: 'History player',
  helpPlayersText: 'The Players tab now shows connected players, persistent profile, history, bans, kicks and theft logging with preview or direct item return to the owner.',
  helpSectionText: 'Clear summary of active functions, including persistent player history, moderation and manual return of stolen items.',
  historyLimitNote: 'Automatic restore uses give for an online owner. If the owner is offline, copy the alternate command.'
});

state.playerHistoryList = state.playerHistoryList || [];
state.playerProfile = state.playerProfile || null;
state.historySelectedKey = state.historySelectedKey || '';

function historyPlayerFromRecord(record){
  if (!record) return null;
  return {
    name: record.primary_name || (record.names || [])[0] || '',
    steamid: (record.steamids || [])[0] || '',
    eosid: (record.eosids || [])[0] || '',
    entityid: (record.entityids || [])[0] || '',
    slot: (record.slots || [])[0] || '',
    ip: (record.ips || [])[0] || ''
  };
}
function activePlayerTarget(){
  if (state.historySelectedKey && state.playerProfile?.record?.key === state.historySelectedKey) {
    return historyPlayerFromRecord(state.playerProfile.record);
  }
  return selectedPlayer() || historyPlayerFromRecord(state.playerProfile?.record || null);
}
function historyNameText(record){
  const names = (record?.names || []).filter(Boolean);
  return names.length ? names.join(' · ') : '-';
}
function historyPosText(pos){
  if (!pos) return '-';
  if (typeof pos === 'string') return pos;
  return pos.text || '-';
}
function historyIdText(row){
  const values = [];
  (row?.steamids || []).forEach(v => v && values.push(v));
  (row?.eosids || []).forEach(v => v && !values.includes(v) && values.push(v));
  return values.length ? values.join(' / ') : '-';
}
async function loadPlayersHistoryList(silent = true){
  try {
    const res = await api('/api/players/history');
    state.playerHistoryList = res.data || [];
    if (!silent && state.section === 'players') render(true);
  } catch (err) {
    if (!silent) toast(err.message, true);
  }
}
async function loadPlayerProfile(silent = true){
  try {
    const key = state.historySelectedKey || '';
    const player = key ? null : selectedPlayer();
    if (!key && !player) {
      state.playerProfile = null;
      if (!silent && state.section === 'players') render(true);
      return;
    }
    const res = await api('/api/players/profile', 'POST', { key, player });
    state.playerProfile = res.data || null;
    if (!silent && state.section === 'players') render(true);
  } catch (err) {
    state.playerProfile = null;
    if (!silent) toast(err.message, true);
  }
}
function selectHistoryPlayer(key){
  state.historySelectedKey = key || '';
  loadPlayerProfile(false);
  render(true);
}
function theftVictimPlayer(){
  const select = document.getElementById('theftVictimPlayer');
  const idx = Number(select?.value ?? -1);
  const rows = state.state?.players_cache || [];
  return Number.isInteger(idx) && idx >= 0 && rows[idx] ? rows[idx] : null;
}
async function runPlayerModeration(action){
  const player = activePlayerTarget();
  if (!player) { toast(t('noPlayerSelected'), true); return; }
  const reason = (document.getElementById('moderationReason')?.value || '').trim();
  const durationValue = (document.getElementById('moderationDurationValue')?.value || '30').trim();
  const durationUnit = (document.getElementById('moderationDurationUnit')?.value || 'days').trim();
  try {
    const res = await api('/api/player/action', 'POST', {
      action,
      player,
      reason,
      duration_value: durationValue,
      duration_unit: durationUnit
    });
    toast(res.message || t('saved'));
    await refreshState(true);
    await loadPlayersHistoryList(true);
    await loadPlayerProfile(true);
    if (state.section === 'players') render(true);
  } catch (err) {
    toast(err.message, true);
  }
}
async function saveTheftCase(executeRestore = false){
  const offender = activePlayerTarget();
  if (!offender) { toast(t('noPlayerSelected'), true); return; }
  const victimPlayer = theftVictimPlayer();
  const victim = {
    name: (document.getElementById('theftVictimName')?.value || '').trim(),
    steamid: (document.getElementById('theftVictimSteam')?.value || '').trim(),
    key: state.historySelectedKey || ''
  };
  const itemsText = (document.getElementById('theftItemsText')?.value || '').trim();
  const reason = (document.getElementById('theftReasonText')?.value || '').trim();
  try {
    const res = await api('/api/players/case', 'POST', {
      offender,
      victim_player: victimPlayer,
      victim,
      items_text: itemsText,
      reason,
      execute_restore: executeRestore
    });
    const msg = executeRestore ? `${translateServerMessage(res.message || 'Guardado.')} · ${t('restorePreview')}` : (res.message || 'Guardado.');
    toast(msg);
    await loadPlayersHistoryList(true);
    await loadPlayerProfile(true);
    if (state.section === 'players') render(true);
  } catch (err) {
    toast(err.message, true);
  }
}
function playerProfileCard(){
  const profile = state.playerProfile;
  const record = profile?.record;
  if (!record) return `<div class="empty-note">${t('noPlayerSelected')}</div>`;
  const moderation = (record.moderation || []).slice().reverse();
  const timeline = (record.timeline || []).slice().reverse();
  const cases = (profile.cases || []).slice().reverse();
  const currentOnline = state.state?.players_cache || [];
  const target = activePlayerTarget() || {};
  return `
    <div class="history-shell">
      <div class="player-detail-card">
        <div class="player-detail-top">
          <div>
            <div class="eyebrow" style="font-size:11px">${state.historySelectedKey ? t('selectedHistoryPlayer') : t('selectedPlayer')}</div>
            <h3 style="margin:4px 0 0 0">${escapeHtml(record.primary_name || target.name || '-')}</h3>
          </div>
          <span class="badge ${record.online ? 'ok' : 'default'}">${record.online ? t('historyStatusOnline') : t('historyStatusOffline')}</span>
        </div>
        <div class="history-summary-grid">
          <div><strong>${t('aliases')}</strong><span>${escapeHtml(historyNameText(record))}</span></div>
          <div><strong>${t('steamId')}</strong><span>${escapeHtml(historyIdText(record))}</span></div>
          <div><strong>IP</strong><span>${escapeHtml((record.ips || []).join(' · ') || '-')}</span></div>
          <div><strong>${t('firstSeen')}</strong><span>${escapeHtml(record.first_seen || '-')}</span></div>
          <div><strong>${t('lastSeen')}</strong><span>${escapeHtml(record.last_seen || '-')}</span></div>
          <div><strong>${t('lastPosition')}</strong><span>${escapeHtml(historyPosText(record.last_position))}</span></div>
          <div><strong>${t('sightings')}</strong><span>${escapeHtml(String(record.sightings_count || 0))}</span></div>
          <div><strong>${t('entityId')}</strong><span>${escapeHtml((record.entityids || []).join(' · ') || target.entityid || '-')}</span></div>
        </div>
      </div>
      <div class="grid grid-2 player-admin-grid">
        <div class="card panel">
          <h3>${t('moderationPanel')}</h3>
          <div class="help-text" style="margin-bottom:10px">${t('moderationHint')}</div>
          <div class="moderation-controls">
            <input id="moderationReason" placeholder="${t('moderationReason')}" value="Robo confirmado">
            <div class="inline-actions">
              <input id="moderationDurationValue" type="number" min="1" value="30" style="max-width:110px">
              <select id="moderationDurationUnit" style="max-width:150px">
                <option value="minutes">minutes</option>
                <option value="hours">hours</option>
                <option value="days" selected>days</option>
                <option value="weeks">weeks</option>
                <option value="months">months</option>
                <option value="years">years</option>
              </select>
            </div>
            <div class="inline-actions wrap-actions">
              <button class="small-btn danger" onclick="runPlayerModeration('kick')">${t('moderationKick')}</button>
              <button class="small-btn danger" onclick="runPlayerModeration('ban')">${t('moderationBan')}</button>
              <button class="small-btn" onclick="runPlayerModeration('unban')">${t('moderationUnban')}</button>
              <button class="small-btn" onclick="copyPlayerField(state.selectedPlayerIndex ?? 0,'steam')">${t('copySteam')}</button>
            </div>
          </div>
        </div>
        <div class="card panel">
          <h3>${t('theftPanel')}</h3>
          <div class="help-text" style="margin-bottom:10px">${t('historyLimitNote')}</div>
          <div class="moderation-controls">
            <select id="theftVictimPlayer">
              <option value="-1">${t('theftVictimCustom')}</option>
              ${currentOnline.map((p, index) => `<option value="${index}">${escapeHtml(playerDisplayName(p))} · ${escapeHtml(playerSteamText(p))}</option>`).join('')}
            </select>
            <input id="theftVictimName" placeholder="${t('theftVictimName')}">
            <input id="theftVictimSteam" placeholder="${t('theftVictimSteam')}">
            <input id="theftReasonText" placeholder="${t('theftReason')}" value="Robo confirmado y devolución al dueño">
            <textarea id="theftItemsText" rows="5" placeholder="${t('theftItemsHint')}"></textarea>
            <div class="inline-actions wrap-actions">
              <button class="small-btn" onclick="saveTheftCase(false)">${t('theftSave')}</button>
              <button class="small-btn btn-primary" onclick="saveTheftCase(true)">${t('theftSaveRestore')}</button>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-2 player-admin-grid">
        <div class="card panel">
          <h3>${t('recentModeration')}</h3>
          <div class="mini-log">${moderation.length ? moderation.map(row => `<div class="mini-log-row"><strong>${escapeHtml(row.action || '-')}</strong><span>${escapeHtml(row.at || '-')}</span><small>${escapeHtml(row.reason || row.response || '-')}</small></div>`).join('') : `<div class="empty-note">${t('noModeration')}</div>`}</div>
        </div>
        <div class="card panel">
          <h3>${t('recentTimeline')}</h3>
          <div class="mini-log">${timeline.length ? timeline.map(row => `<div class="mini-log-row"><strong>${escapeHtml(row.type || '-')}</strong><span>${escapeHtml(row.at || '-')}</span><small>${escapeHtml(row.position || row.items || row.reason || '-')}</small></div>`).join('') : `<div class="empty-note">${t('noTimeline')}</div>`}</div>
        </div>
      </div>
      <div class="card panel">
        <h3>${t('theftCases')}</h3>
        <div class="help-text" style="margin-bottom:10px">${t('restorePreview')}</div>
        <div class="case-grid">${cases.length ? cases.map(row => `
          <article class="case-card">
            <div class="case-head"><strong>${escapeHtml(row.reason || 'Robo')}</strong><span>${escapeHtml(row.created_at || '-')}</span></div>
            <div><strong>${t('theftVictim')}</strong>: ${escapeHtml(row.victim?.name || row.victim?.steamid || '-')}</div>
            <div><strong>${t('theftItems')}</strong>: ${escapeHtml((row.items || []).map(it => `${it.item} x${it.quantity}`).join(' · ') || '-')}</div>
            <div><strong>Status</strong>: ${escapeHtml(row.status || '-')}</div>
            ${(row.restore_preview || []).length ? `<div class="case-preview">${(row.restore_preview || []).map(cmd => `<div class="case-command"><code>${escapeHtml(cmd.online_command || cmd.offline_command || '-')}</code>${cmd.offline_command && cmd.offline_command !== cmd.online_command ? `<small>${t('offlineCommand')}: <code>${escapeHtml(cmd.offline_command)}</code></small>` : ''}</div>`).join('')}</div>` : ''}
          </article>`).join('') : `<div class="empty-note">${t('noCases')}</div>`}</div>
      </div>
    </div>`;
}
playerCard = function(){
  return playerProfileCard();
};
views.players = function(){
  const players = state.state?.players_cache || [];
  const historyRows = state.playerHistoryList || [];
  return `
    <div class="grid">
      <div class="player-master-layout">
        <div class="card panel">
          <div class="panel-head-inline">
            <div>
              <h2 style="margin:0">${t('players')}</h2>
              <div class="empty-note" style="margin-top:6px">${t('liveUpdating')} · ${t('lastRefresh')}: ${escapeHtml(state.state?.last_players_refresh || '-')}</div>
            </div>
            <div class="inline-actions"><button class="btn" onclick="refreshPlayers()">${t('refreshPlayers')}</button></div>
          </div>
          ${players.length ? `
            <table class="table players-table players-compact-table">
              <thead><tr><th>${t('slot')}</th><th>${t('playerName')}</th><th>${t('steamId')}</th><th>${t('position')}</th><th>${t('options')}</th></tr></thead>
              <tbody>
                ${players.map((p, index) => `
                  <tr class="${state.selectedPlayerIndex === index && !state.historySelectedKey ? 'row-selected' : ''}" onclick="selectPlayer(${index})">
                    <td>${escapeHtml(p.slot || '-')}</td>
                    <td><button class="linkish-btn" type="button" onclick="event.preventDefault();event.stopPropagation();selectPlayer(${index})">${escapeHtml(playerDisplayName(p))}</button></td>
                    <td>${escapeHtml(playerSteamText(p))}</td>
                    <td>${escapeHtml(playerPosText(p))}</td>
                    <td>
                      <button class="small-btn" type="button" onclick="event.preventDefault();event.stopPropagation();togglePlayerMenu(${index})">${t('options')}</button>
                      ${state.playerMenuIndex === index ? `<div class="player-menu"><button class="small-btn" type="button" onclick="event.preventDefault();event.stopPropagation();copyPlayerField(${index},'name')">${t('copyName')}</button><button class="small-btn" type="button" onclick="event.preventDefault();event.stopPropagation();copyPlayerField(${index},'id')">${t('copyId')}</button><button class="small-btn" type="button" onclick="event.preventDefault();event.stopPropagation();copyPlayerField(${index},'steam')">${t('copySteam')}</button><button class="small-btn danger" type="button" onclick="event.preventDefault();event.stopPropagation();runPlayerModeration('kick')">${t('kickPlayer')}</button></div>` : ''}
                    </td>
                  </tr>`).join('')}
              </tbody>
            </table>` : `<div class="empty-note">${t('noPlayerData')}<br>${t('clickRefreshIfNeeded')}</div>`}
        </div>
        <div class="card panel sticky-panel">
          <h2>${t('profileSummary')}</h2>
          ${playerProfileCard()}
        </div>
      </div>
      <div class="card panel">
        <div class="panel-head-inline">
          <div>
            <h2 style="margin:0">${t('historyTitle')}</h2>
            <div class="help-text" style="margin-top:6px">${t('historySubtitle')}</div>
          </div>
          <div class="inline-actions"><button class="btn" onclick="loadPlayersHistoryList(false)">${t('refresh')}</button></div>
        </div>
        ${historyRows.length ? `
          <div class="table-wrap"><table class="table history-table">
            <thead><tr><th>${t('playerName')}</th><th>${t('steamId')}</th><th>${t('firstSeen')}</th><th>${t('lastSeen')}</th><th>${t('lastPosition')}</th><th>${t('status')}</th><th></th></tr></thead>
            <tbody>${historyRows.map(row => `
              <tr class="${state.historySelectedKey === row.key ? 'row-selected' : ''}">
                <td>${escapeHtml(row.primary_name || '-')}</td>
                <td>${escapeHtml(historyIdText(row))}</td>
                <td>${escapeHtml(row.first_seen || '-')}</td>
                <td>${escapeHtml(row.last_seen || '-')}</td>
                <td>${escapeHtml(historyPosText(row.last_position))}</td>
                <td><span class="badge ${row.online ? 'ok' : 'default'}">${row.online ? t('historyStatusOnline') : t('historyStatusOffline')}</span></td>
                <td><button class="small-btn" onclick="selectHistoryPlayer('${String(row.key || '').replace(/'/g, "\\'")}')">${t('selectHistoryRow')}</button></td>
              </tr>`).join('')}</tbody>
          </table></div>` : `<div class="empty-note">${t('noHistoryYet')}</div>`}
      </div>
    </div>`;
};
const _kwSelectPlayerHistory = selectPlayer;
selectPlayer = function(index){
  state.historySelectedKey = '';
  _kwSelectPlayerHistory(index);
  setTimeout(() => loadPlayerProfile(true), 40);
};
const _kwRefreshPlayersHistory = refreshPlayers;
refreshPlayers = async function(silent = false){
  await _kwRefreshPlayersHistory(silent);
  await loadPlayersHistoryList(true);
  await loadPlayerProfile(true);
  if (state.section === 'players') render(true);
};
const _kwGoHistory = go;
go = function(section){
  _kwGoHistory(section);
  if (section === 'players') {
    setTimeout(() => { loadPlayersHistoryList(true); loadPlayerProfile(true); }, 90);
  }
};
const _kwActionFromOnclick = actionFromOnclick;
actionFromOnclick = function(raw){
  const txt = String(raw || '');
  if (txt.includes("runPlayerModeration('kick'") || txt.includes('runPlayerModeration("kick"')) return 'players.kick';
  if (txt.includes("runPlayerModeration('ban'") || txt.includes('runPlayerModeration("ban"')) return 'players.ban';
  if (txt.includes("runPlayerModeration('unban'") || txt.includes('runPlayerModeration("unban"')) return 'players.unban';
  if (txt.includes('saveTheftCase(')) return 'players.restore';
  return _kwActionFromOnclick(raw);
};
if (typeof wrapAction === 'function') {
  wrapAction('runPlayerModeration', action => ({section:'players', action: action === 'kick' ? 'players.kick' : (action === 'ban' ? 'players.ban' : 'players.unban')}));
  wrapAction('saveTheftCase', {section:'players', action:'players.restore'});
}
window.addEventListener('load', () => {
  setTimeout(() => loadPlayersHistoryList(true), 450);
  setTimeout(() => loadPlayerProfile(true), 650);
});

/* ===== Inventory snapshots before disconnect ===== */
Object.assign(T.es, {
  inventorySnapshotsTitle: 'Últimos inventarios guardados',
  inventorySnapshotsHint: 'El Server Kit guarda snapshots automáticos del inventario mientras el jugador está online, para poder revisar lo último que llevaba incluso después de desconectarse.',
  inventorySnapshotNone: 'Todavía no hay snapshots guardados para este jugador.',
  inventorySnapshotLatest: 'Último inventario guardado',
  inventorySnapshotRecent: 'Snapshots recientes',
  inventorySnapshotAt: 'Guardado',
  inventorySnapshotReason: 'Motivo',
  inventorySnapshotSource: 'Origen',
  inventorySnapshotSummary: 'Resumen',
  inventorySnapshotReason_manual: 'Manual',
  inventorySnapshotReason_auto_poll: 'Automático',
  inventorySnapshotReason_online: 'Jugador online',
  inventorySnapshotReason_offline: 'Al salir',
  inventorySnapshotStacks: 'stacks',
  inventorySnapshotItems: 'objetos',
  inventoryOfflineReview: 'Esto te sirve para revisar qué llevaba un jugador aunque ya no esté conectado.',
  inventoryAutoTracking: 'Seguimiento automático',
  inventoryAutoTrackingText: 'Por defecto se guarda un snapshot automático cada 60 segundos mientras el servidor está en marcha y el inventario real del jugador se puede leer por API o showinventory.'
});
Object.assign(T.en, {
  inventorySnapshotsTitle: 'Saved inventory snapshots',
  inventorySnapshotsHint: 'The Server Kit stores automatic inventory snapshots while the player is online, so you can inspect the last known inventory even after disconnecting.',
  inventorySnapshotNone: 'There are no saved snapshots for this player yet.',
  inventorySnapshotLatest: 'Latest saved inventory',
  inventorySnapshotRecent: 'Recent snapshots',
  inventorySnapshotAt: 'Saved',
  inventorySnapshotReason: 'Reason',
  inventorySnapshotSource: 'Source',
  inventorySnapshotSummary: 'Summary',
  inventorySnapshotReason_manual: 'Manual',
  inventorySnapshotReason_auto_poll: 'Automatic',
  inventorySnapshotReason_online: 'Player online',
  inventorySnapshotReason_offline: 'On disconnect',
  inventorySnapshotStacks: 'stacks',
  inventorySnapshotItems: 'items',
  inventoryOfflineReview: 'This lets you review what a player was carrying even after they disconnect.',
  inventoryAutoTracking: 'Automatic tracking',
  inventoryAutoTrackingText: 'By default an automatic snapshot is stored every 60 seconds while the server is running and the real player inventory can be read through API or showinventory.'
});

function profileMatchesPlayer(record, player){
  if (!record || !player) return false;
  const steam = String(player.steamid || '').trim();
  const eos = String(player.eosid || '').trim();
  const entity = String(player.entityid || '').trim();
  const name = String(player.name || '').trim();
  if (steam && (record.steamids || []).includes(steam)) return true;
  if (eos && (record.eosids || []).includes(eos)) return true;
  if (entity && (record.entityids || []).includes(entity)) return true;
  if (name && (record.names || []).includes(name)) return true;
  return false;
}

function inventoryProfileRecord(player){
  const record = state.playerProfile?.record;
  return profileMatchesPlayer(record, player) ? record : null;
}

function snapshotReasonText(reason){
  const key = `inventorySnapshotReason_${String(reason || '').trim()}`;
  const translated = t(key);
  return translated === key ? (reason || '-') : translated;
}

function snapshotSummaryText(snapshot){
  const stacks = Number(snapshot?.total_stacks || 0);
  const items = Number(snapshot?.total_items || 0);
  return `${stacks} ${t('inventorySnapshotStacks')} · ${items} ${t('inventorySnapshotItems')}`;
}

function inventorySnapshotCardHtml(snapshot, title){
  if (!snapshot) {
    return `<div class="card panel" style="margin-top:14px"><h3>${title}</h3><div class="empty-note">${t('inventorySnapshotNone')}</div></div>`;
  }
  return `
    <div class="card panel" style="margin-top:14px">
      <div class="panel-head-inline">
        <div>
          <h3 style="margin:0">${title}</h3>
          <div class="help-text" style="margin-top:6px">${t('inventorySnapshotAt')}: ${escapeHtml(formatDateTime(snapshot.at || snapshot.updated_at || '-'))} · ${t('inventorySnapshotReason')}: ${escapeHtml(snapshotReasonText(snapshot.reason))} · ${t('inventorySnapshotSource')}: ${escapeHtml(snapshot.source || '-')}</div>
        </div>
        <span class="badge default">${escapeHtml(snapshotSummaryText(snapshot))}</span>
      </div>
      <div class="kw-inv-panels" style="margin-top:12px">
        <div class="card panel inventory-panel compact-inv-panel"><h3>${t('belt')}</h3>${inventoryItemsHtml(snapshot.belt || [], t('inventoryEmptySection'))}</div>
        <div class="card panel inventory-panel compact-inv-panel"><h3>${t('bag')}</h3>${inventoryItemsHtml(snapshot.bag || [], t('inventoryEmptySection'))}</div>
        <div class="card panel inventory-panel compact-inv-panel"><h3>${t('equipment')}</h3>${inventoryEquipmentHtml(snapshot.equipment || {})}</div>
      </div>
    </div>`;
}

const _kwSnapshotLoadPlayerProfile = loadPlayerProfile;
loadPlayerProfile = async function(silent = true){
  await _kwSnapshotLoadPlayerProfile(silent);
  if (state.section === 'inventory') render(true);
};

const _kwSnapshotLoadInventory = loadPlayerInventory;
loadPlayerInventory = async function(silent = false){
  await _kwSnapshotLoadInventory(silent);
  await loadPlayerProfile(true);
  if (state.section === 'inventory') render(true);
};

const _kwSnapshotGo = go;
go = function(section){
  _kwSnapshotGo(section);
  if (section === 'inventory') {
    setTimeout(() => { loadPlayersHistoryList(true); loadPlayerProfile(true); }, 120);
  }
};

playerInventoryCard = function(player) {
  if (!player) return `<div class="empty-note">${t('noPlayerSelected')}</div>`;
  const data = currentInventoryData();
  const hasData = data && !data.error && ((data.belt && data.belt.length) || (data.bag && data.bag.length) || (data.equipment && Object.keys(data.equipment).length));
  const record = inventoryProfileRecord(player);
  const snapshots = (record?.inventory_snapshots || []).slice().reverse();
  const latestSnapshot = snapshots[0] || null;
  return `
    <div class="inventory-shell kw-inventory-shell-compact">
      ${inventoryMetaBox(player, data)}
      <div class="inline-actions" style="margin-top:12px;margin-bottom:6px"><button class="btn btn-primary" onclick="loadPlayerInventory()">${data ? t('inventoryReload') : t('inventoryLoad')}</button><button class="btn" onclick="refreshPlayers()">${t('refreshPlayers')}</button></div>
      ${data && data.error ? `<div class="empty-note">${escapeHtml(data.error)}<br>${t('inventoryErrorHint')}</div>` : ''}
      ${!data ? `<div class="empty-note">${t('inventoryNotLoaded')}<br>${t('inventoryNeedsSupport')}</div>` : ''}
      ${data && !hasData && !data.error ? `<div class="empty-note">${t('inventoryNoData')}</div>` : ''}
      ${hasData ? `
      <div class="kw-inv-panels">
        <div class="card panel inventory-panel compact-inv-panel"><h3>${t('belt')}</h3>${inventoryItemsHtml(data.belt || [], t('inventoryEmptySection'))}</div>
        <div class="card panel inventory-panel compact-inv-panel"><h3>${t('bag')}</h3>${inventoryItemsHtml(data.bag || [], t('inventoryEmptySection'))}</div>
        <div class="card panel inventory-panel compact-inv-panel"><h3>${t('equipment')}</h3>${inventoryEquipmentHtml(data.equipment || {})}</div>
      </div>` : ''}
      <div class="card panel" style="margin-top:14px">
        <div class="panel-head-inline">
          <div>
            <h3 style="margin:0">${t('inventorySnapshotsTitle')}</h3>
            <div class="help-text" style="margin-top:6px">${t('inventorySnapshotsHint')}</div>
          </div>
          ${record?.last_inventory_snapshot_at ? `<span class="badge default">${escapeHtml(formatDateTime(record.last_inventory_snapshot_at))}</span>` : ''}
        </div>
        <div class="help-text" style="margin-top:10px">${t('inventoryOfflineReview')}</div>
        ${latestSnapshot ? inventorySnapshotCardHtml(latestSnapshot, t('inventorySnapshotLatest')) : `<div class="empty-note" style="margin-top:14px">${t('inventorySnapshotNone')}</div>`}
        ${snapshots.length > 1 ? `
          <div class="card panel" style="margin-top:14px">
            <h3>${t('inventorySnapshotRecent')}</h3>
            <div class="mini-log">${snapshots.slice(0, 8).map(row => `<div class="mini-log-row"><strong>${escapeHtml(formatDateTime(row.at || row.updated_at || '-'))}</strong><span>${escapeHtml(snapshotReasonText(row.reason))}</span><small>${escapeHtml(snapshotSummaryText(row))}</small></div>`).join('')}</div>
          </div>` : ''}
      </div>
    </div>`;
};

views.inventory = function() {
  const current = selectedPlayer();
  return `
    <div class="grid grid-2">
      <div class="card panel">
        <div class="panel-head-inline"><div><h2>${t('inventory')}</h2><div class="help-text" style="margin-top:6px">${t('inventoryHint')}</div></div><div class="inline-actions"><button class="btn" onclick="go('players')">${t('players')}</button><button class="btn" onclick="refreshPlayers()">${t('refreshPlayers')}</button><button class="btn btn-primary" onclick="loadPlayerInventory()">${t('inventoryLoad')}</button></div></div>
        ${playerInventoryCard(current)}
      </div>
      <div class="card panel">
        ${infoNote(t('inventoryHowTitle'), t('inventoryHowText'))}
        ${infoNote(t('inventoryLimitTitle'), t('inventoryLimitText'))}
        ${infoNote(t('inventoryAutoTracking'), t('inventoryAutoTrackingText'))}
        ${infoNote(t('inventoryApiUrl'), t('inventoryApiHint'))}
      </div>
    </div>`;
};


/* ===== KarmaWorld moderation/inventory layout cleanup ===== */
Object.assign(T.es, {
  moderation: 'Moderación',
  moderationTitle: 'Moderación y robos',
  moderationSubtitle: 'Banea, expulsa, registra robos y prepara la devolución al dueño desde una pestaña separada.',
  playerSummarySimple: 'Resumen del jugador',
  openModerationTab: 'Abrir moderación',
  moderationSelectHint: 'Selecciona un jugador conectado o uno del historial para moderarlo.',
  moderationVictimNote: 'La devolución automática necesita que la víctima esté online. Si no, te dejará el comando alternativo manual.',
  inventoryFullHint: 'Aquí puedes ver el inventario actual y también los últimos snapshots guardados del jugador seleccionado.'
});
Object.assign(T.en, {
  moderation: 'Moderation',
  moderationTitle: 'Moderation and thefts',
  moderationSubtitle: 'Ban, kick, log thefts and prepare item returns from a separate tab.',
  playerSummarySimple: 'Player summary',
  openModerationTab: 'Open moderation',
  moderationSelectHint: 'Select an online player or a player from history to moderate them.',
  moderationVictimNote: 'Automatic restore requires the victim to be online. Otherwise you will get the manual fallback command.',
  inventoryFullHint: 'Here you can view the current inventory and the latest saved snapshots for the selected player.'
});

(function(){
  if (!KW_SECTION_OPTIONS.includes('moderation')) KW_SECTION_OPTIONS.push('moderation');

  const _oldMenuLabelKwMod = menuLabel;
  menuLabel = function(key){
    if (key === 'moderation') return t('moderation');
    return _oldMenuLabelKwMod(key);
  };

  function selectedProfileRecord(){
    return state.playerProfile?.record || null;
  }

  function selectedProfileCases(){
    return (state.playerProfile?.cases || []).slice().reverse();
  }

  function selectedProfileModeration(){
    const record = selectedProfileRecord();
    return (record?.moderation || []).slice().reverse();
  }

  function selectedProfileTimeline(){
    const record = selectedProfileRecord();
    return (record?.timeline || []).slice().reverse();
  }

  function playerSummaryCardSimple(){
    const record = selectedProfileRecord();
    const target = activePlayerTarget() || {};
    if (!record) return `<div class="empty-note">${t('noPlayerSelected')}</div>`;
    return `
      <div class="history-shell">
        <div class="player-detail-card">
          <div class="player-detail-top">
            <div>
              <div class="eyebrow" style="font-size:11px">${state.historySelectedKey ? t('selectedHistoryPlayer') : t('selectedPlayer')}</div>
              <h3 style="margin:4px 0 0 0">${escapeHtml(record.primary_name || target.name || '-')}</h3>
            </div>
            <span class="badge ${record.online ? 'ok' : 'default'}">${record.online ? t('historyStatusOnline') : t('historyStatusOffline')}</span>
          </div>
          <div class="history-summary-grid">
            <div><strong>${t('aliases')}</strong><span>${escapeHtml(historyNameText(record))}</span></div>
            <div><strong>${t('steamId')}</strong><span>${escapeHtml(historyIdText(record))}</span></div>
            <div><strong>IP</strong><span>${escapeHtml((record.ips || []).join(' · ') || '-')}</span></div>
            <div><strong>${t('firstSeen')}</strong><span>${escapeHtml(record.first_seen || '-')}</span></div>
            <div><strong>${t('lastSeen')}</strong><span>${escapeHtml(record.last_seen || '-')}</span></div>
            <div><strong>${t('lastPosition')}</strong><span>${escapeHtml(historyPosText(record.last_position))}</span></div>
            <div><strong>${t('sightings')}</strong><span>${escapeHtml(String(record.sightings_count || 0))}</span></div>
            <div><strong>${t('entityId')}</strong><span>${escapeHtml((record.entityids || []).join(' · ') || target.entityid || '-')}</span></div>
          </div>
          <div class="inline-actions wrap-actions" style="margin-top:14px">
            <button class="btn" onclick="go('inventory')">${t('inventory')}</button>
            <button class="btn btn-primary" onclick="go('moderation')">${t('openModerationTab')}</button>
          </div>
        </div>
      </div>`;
  }

  function moderationTabHtml(){
    const record = selectedProfileRecord();
    const cases = selectedProfileCases();
    const moderation = selectedProfileModeration();
    const timeline = selectedProfileTimeline();
    const currentOnline = state.state?.players_cache || [];
    const target = activePlayerTarget() || {};
    if (!record) {
      return `<div class="card panel"><h2>${t('moderationTitle')}</h2><div class="empty-note">${t('moderationSelectHint')}</div></div>`;
    }
    return `
      <div class="grid">
        <div class="card panel">
          <div class="panel-head-inline">
            <div>
              <h2 style="margin:0">${t('moderationTitle')}</h2>
              <div class="help-text" style="margin-top:6px">${t('moderationSubtitle')}</div>
            </div>
            <div class="inline-actions wrap-actions">
              <button class="btn" onclick="go('players')">${t('players')}</button>
              <button class="btn" onclick="go('inventory')">${t('inventory')}</button>
            </div>
          </div>
          ${playerSummaryCardSimple()}
        </div>
        <div class="grid grid-2 player-admin-grid">
          <div class="card panel">
            <h3>${t('moderationPanel')}</h3>
            <div class="help-text" style="margin-bottom:10px">${t('moderationHint')}</div>
            <div class="moderation-controls">
              <input id="moderationReason" placeholder="${t('moderationReason')}" value="Robo confirmado">
              <div class="inline-actions wrap-actions">
                <input id="moderationDurationValue" type="number" min="1" value="30" style="max-width:110px">
                <select id="moderationDurationUnit" style="max-width:150px">
                  <option value="minutes">minutes</option>
                  <option value="hours">hours</option>
                  <option value="days" selected>days</option>
                  <option value="weeks">weeks</option>
                  <option value="months">months</option>
                  <option value="years">years</option>
                </select>
              </div>
              <div class="inline-actions wrap-actions">
                <button class="small-btn danger" onclick="runPlayerModeration('kick')">${t('moderationKick')}</button>
                <button class="small-btn danger" onclick="runPlayerModeration('ban')">${t('moderationBan')}</button>
                <button class="small-btn" onclick="runPlayerModeration('unban')">${t('moderationUnban')}</button>
                <button class="small-btn" onclick="copyPlayerField(state.selectedPlayerIndex ?? 0,'steam')">${t('copySteam')}</button>
              </div>
            </div>
          </div>
          <div class="card panel">
            <h3>${t('theftPanel')}</h3>
            <div class="help-text" style="margin-bottom:10px">${t('moderationVictimNote')}</div>
            <div class="moderation-controls">
              <select id="theftVictimPlayer">
                <option value="-1">${t('theftVictimCustom')}</option>
                ${currentOnline.map((p, index) => `<option value="${index}">${escapeHtml(playerDisplayName(p))} · ${escapeHtml(playerSteamText(p))}</option>`).join('')}
              </select>
              <input id="theftVictimName" placeholder="${t('theftVictimName')}">
              <input id="theftVictimSteam" placeholder="${t('theftVictimSteam')}">
              <input id="theftReasonText" placeholder="${t('theftReason')}" value="Robo confirmado y devolución al dueño">
              <textarea id="theftItemsText" rows="5" placeholder="${t('theftItemsHint')}"></textarea>
              <div class="inline-actions wrap-actions">
                <button class="small-btn" onclick="saveTheftCase(false)">${t('theftSave')}</button>
                <button class="small-btn btn-primary" onclick="saveTheftCase(true)">${t('theftSaveRestore')}</button>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-2 player-admin-grid">
          <div class="card panel">
            <h3>${t('recentModeration')}</h3>
            <div class="mini-log">${moderation.length ? moderation.map(row => `<div class="mini-log-row"><strong>${escapeHtml(row.action || '-')}</strong><span>${escapeHtml(row.at || '-')}</span><small>${escapeHtml(row.reason || row.response || '-')}</small></div>`).join('') : `<div class="empty-note">${t('noModeration')}</div>`}</div>
          </div>
          <div class="card panel">
            <h3>${t('recentTimeline')}</h3>
            <div class="mini-log">${timeline.length ? timeline.map(row => `<div class="mini-log-row"><strong>${escapeHtml(row.type || '-')}</strong><span>${escapeHtml(row.at || '-')}</span><small>${escapeHtml(row.position || row.items || row.reason || '-')}</small></div>`).join('') : `<div class="empty-note">${t('noTimeline')}</div>`}</div>
          </div>
        </div>
        <div class="card panel">
          <h3>${t('theftCases')}</h3>
          <div class="help-text" style="margin-bottom:10px">${t('restorePreview')}</div>
          <div class="case-grid">${cases.length ? cases.map(row => `
            <article class="case-card">
              <div class="case-head"><strong>${escapeHtml(row.reason || 'Robo')}</strong><span>${escapeHtml(row.created_at || '-')}</span></div>
              <div><strong>${t('theftVictim')}</strong>: ${escapeHtml(row.victim?.name || row.victim?.steamid || '-')}</div>
              <div><strong>${t('theftItems')}</strong>: ${escapeHtml((row.items || []).map(it => `${it.item} x${it.quantity}`).join(' · ') || '-')}</div>
              <div><strong>Status</strong>: ${escapeHtml(row.status || '-')}</div>
              ${(row.restore_preview || []).length ? `<div class="case-preview">${(row.restore_preview || []).map(cmd => `<div class="case-command"><code>${escapeHtml(cmd.online_command || cmd.offline_command || '-')}</code>${cmd.offline_command && cmd.offline_command !== cmd.online_command ? `<small>${t('offlineCommand')}: <code>${escapeHtml(cmd.offline_command)}</code></small>` : ''}</div>`).join('')}</div>` : ''}
            </article>`).join('') : `<div class="empty-note">${t('noCases')}</div>`}</div>
        </div>
      </div>`;
  }

  views.players = function(){
    const players = state.state?.players_cache || [];
    const historyRows = state.playerHistoryList || [];
    return `
      <div class="grid">
        <div class="player-master-layout">
          <div class="card panel">
            <div class="panel-head-inline">
              <div>
                <h2 style="margin:0">${t('players')}</h2>
                <div class="empty-note" style="margin-top:6px">${t('liveUpdating')} · ${t('lastRefresh')}: ${escapeHtml(state.state?.last_players_refresh || '-')}</div>
              </div>
              <div class="inline-actions wrap-actions"><button class="btn" onclick="refreshPlayers()">${t('refreshPlayers')}</button><button class="btn btn-primary" onclick="go('moderation')">${t('moderation')}</button></div>
            </div>
            ${players.length ? `
              <table class="table players-table players-compact-table">
                <thead><tr><th>${t('slot')}</th><th>${t('playerName')}</th><th>${t('steamId')}</th><th>${t('position')}</th><th>${t('options')}</th></tr></thead>
                <tbody>
                  ${players.map((p, index) => `
                    <tr class="${state.selectedPlayerIndex === index && !state.historySelectedKey ? 'row-selected' : ''}" onclick="selectPlayer(${index})">
                      <td>${escapeHtml(p.slot || '-')}</td>
                      <td><button class="linkish-btn" type="button" onclick="event.preventDefault();event.stopPropagation();selectPlayer(${index})">${escapeHtml(playerDisplayName(p))}</button></td>
                      <td>${escapeHtml(playerSteamText(p))}</td>
                      <td>${escapeHtml(playerPosText(p))}</td>
                      <td>
                        <button class="small-btn" type="button" onclick="event.preventDefault();event.stopPropagation();togglePlayerMenu(${index})">${t('options')}</button>
                        ${state.playerMenuIndex === index ? `<div class="player-menu"><button class="small-btn" type="button" onclick="event.preventDefault();event.stopPropagation();copyPlayerField(${index},'name')">${t('copyName')}</button><button class="small-btn" type="button" onclick="event.preventDefault();event.stopPropagation();copyPlayerField(${index},'id')">${t('copyId')}</button><button class="small-btn" type="button" onclick="event.preventDefault();event.stopPropagation();copyPlayerField(${index},'steam')">${t('copySteam')}</button><button class="small-btn danger" type="button" onclick="event.preventDefault();event.stopPropagation();runPlayerModeration('kick')">${t('kickPlayer')}</button></div>` : ''}
                      </td>
                    </tr>`).join('')}
                </tbody>
              </table>` : `<div class="empty-note">${t('noPlayerData')}<br>${t('clickRefreshIfNeeded')}</div>`}
          </div>
          <div class="card panel sticky-panel">
            <h2>${t('playerSummarySimple')}</h2>
            ${playerSummaryCardSimple()}
          </div>
        </div>
        <div class="card panel">
          <div class="panel-head-inline">
            <div>
              <h2 style="margin:0">${t('historyTitle')}</h2>
              <div class="help-text" style="margin-top:6px">${t('historySubtitle')}</div>
            </div>
            <div class="inline-actions"><button class="btn" onclick="loadPlayersHistoryList(false)">${t('refresh')}</button></div>
          </div>
          ${historyRows.length ? `
            <div class="table-wrap"><table class="table history-table">
              <thead><tr><th>${t('playerName')}</th><th>${t('steamId')}</th><th>${t('firstSeen')}</th><th>${t('lastSeen')}</th><th>${t('lastPosition')}</th><th>${t('status')}</th><th></th></tr></thead>
              <tbody>${historyRows.map(row => `
                <tr class="${state.historySelectedKey === row.key ? 'row-selected' : ''}">
                  <td>${escapeHtml(row.primary_name || '-')}</td>
                  <td>${escapeHtml(historyIdText(row))}</td>
                  <td>${escapeHtml(row.first_seen || '-')}</td>
                  <td>${escapeHtml(row.last_seen || '-')}</td>
                  <td>${escapeHtml(historyPosText(row.last_position))}</td>
                  <td><span class="badge ${row.online ? 'ok' : 'default'}">${row.online ? t('historyStatusOnline') : t('historyStatusOffline')}</span></td>
                  <td><button class="small-btn" onclick="selectHistoryPlayer('${String(row.key || '').replace(/'/g, "\\'")}')">${t('selectHistoryRow')}</button></td>
                </tr>`).join('')}</tbody>
            </table></div>` : `<div class="empty-note">${t('noHistoryYet')}</div>`}
        </div>
      </div>`;
  };

  views.moderation = function(){
    return moderationTabHtml();
  };

  views.inventory = function() {
    const current = selectedPlayer();
    return `
      <div class="grid">
        <div class="card panel">
          <div class="panel-head-inline">
            <div>
              <h2>${t('inventory')}</h2>
              <div class="help-text" style="margin-top:6px">${t('inventoryFullHint')}</div>
            </div>
            <div class="inline-actions wrap-actions">
              <button class="btn" onclick="go('players')">${t('players')}</button>
              <button class="btn" onclick="go('moderation')">${t('moderation')}</button>
              <button class="btn" onclick="refreshPlayers()">${t('refreshPlayers')}</button>
              <button class="btn btn-primary" onclick="loadPlayerInventory()">${t('inventoryLoad')}</button>
            </div>
          </div>
          ${playerInventoryCard(current)}
        </div>
      </div>`;
  };

  const _oldBuildMenuKwMod = buildMenu;
  buildMenu = function(){
    const ordered = ['dashboard','server','console','players','inventory','moderation','backups','tasks','serverconfig','settings','notifications','discordbot','access'];
    const visibleKeys = ordered.filter(key => canAccessSection(key));
    if (canDo('map.open')) visibleKeys.push('__map__');
    if (canAccessSection('helpdocs')) visibleKeys.push('helpdocs');
    if (!visibleKeys.includes(state.section)) state.section = visibleKeys[0] || 'dashboard';
    $('menu').innerHTML = visibleKeys.map(key => {
      if (key === '__map__') {
        return `<button data-section="openMap" onclick="openExternalMap()"><span class="menu-icon" aria-hidden="true"></span><span class="menu-label">${t('mapLinkInMenu')}</span></button>`;
      }
      return `<button data-section="${key}" class="${state.section === key ? 'active' : ''}" onclick="go('${key}')"><span class="menu-icon" aria-hidden="true"></span><span class="menu-label">${menuLabel(key)}</span></button>`;
    }).join('');
    if ($('sidebarFooter')) {
      $('sidebarFooter').innerHTML = authState.auth_enabled && authState.logged_in
        ? `<button data-section="logout" onclick="panelLogout()"><span class="menu-icon" aria-hidden="true"></span><span class="menu-label">${t('logoutButton')}</span></button>`
        : '';
    }
  };
})();


/* ===== KarmaWorld moderation refresh patch ===== */
(function(){
  const _kwModRunPlayerModeration = runPlayerModeration;
  runPlayerModeration = async function(action){
    await _kwModRunPlayerModeration(action);
    if (state.section === 'moderation') render(true);
  };

  const _kwModSaveTheftCase = saveTheftCase;
  saveTheftCase = async function(executeRestore = false){
    await _kwModSaveTheftCase(executeRestore);
    if (state.section === 'moderation') render(true);
  };

  const _kwModGo = go;
  go = function(section){
    _kwModGo(section);
    if (section === 'moderation') {
      setTimeout(() => { loadPlayersHistoryList(true); loadPlayerProfile(true); }, 120);
    }
  };
})();


/* ===== KarmaWorld history controls + smoother player refresh ===== */
Object.assign(T.es, {
  deleteHistoryEntry: 'Eliminar historial',
  clearHistoryAll: 'Borrar todo el historial',
  cleanupHistoryNoise: 'Limpiar entradas basura',
  deleteHistoryRow: 'Eliminar',
  confirmDeleteHistoryEntry: '¿Seguro que quieres eliminar este historial?',
  confirmDeleteHistoryAll: '¿Seguro que quieres borrar todo el historial de jugadores?',
  historyDeleteHint: 'Puedes borrar el registro seleccionado, limpiar entradas basura o vaciar todo el historial.',
  historyDeletedOk: 'Historial eliminado.',
  historyCleanupOk: 'Historial limpiado.'
});
Object.assign(T.en, {
  deleteHistoryEntry: 'Delete history',
  clearHistoryAll: 'Clear all history',
  cleanupHistoryNoise: 'Clean noisy entries',
  deleteHistoryRow: 'Delete',
  confirmDeleteHistoryEntry: 'Are you sure you want to delete this history entry?',
  confirmDeleteHistoryAll: 'Are you sure you want to clear the full player history?',
  historyDeleteHint: 'You can delete the selected record, clean noisy entries or clear the full history.',
  historyDeletedOk: 'History deleted.',
  historyCleanupOk: 'History cleaned.'
});

async function deleteSelectedHistory(key = ''){
  const targetKey = String(key || state.historySelectedKey || '').trim();
  if (!targetKey) { toast(t('noPlayerSelected'), true); return; }
  if (!confirm(t('confirmDeleteHistoryEntry'))) return;
  try {
    const res = await api('/api/players/history/delete', 'POST', { key: targetKey });
    if (state.historySelectedKey === targetKey) state.historySelectedKey = '';
    state.playerProfile = null;
    toast(res.message || t('historyDeletedOk'));
    await loadPlayersHistoryList(true);
    await loadPlayerProfile(true);
    render(true);
  } catch (err) {
    toast(err.message, true);
  }
}

async function clearAllPlayerHistory(){
  if (!confirm(t('confirmDeleteHistoryAll'))) return;
  try {
    const res = await api('/api/players/history/clear', 'POST', {});
    state.historySelectedKey = '';
    state.playerProfile = null;
    state.playerHistoryList = [];
    toast(res.message || t('historyDeletedOk'));
    render(true);
  } catch (err) {
    toast(err.message, true);
  }
}

async function cleanupNoisePlayerHistory(){
  try {
    const res = await api('/api/players/history/cleanup', 'POST', {});
    toast(res.message || t('historyCleanupOk'));
    await loadPlayersHistoryList(true);
    await loadPlayerProfile(true);
    render(true);
  } catch (err) {
    toast(err.message, true);
  }
}

(function(){
  const _playersViewHistoryActions = views.players;
  views.players = function(){
    let html = _playersViewHistoryActions();
    html = html.replace(
      /<div class="inline-actions"><button class="btn" onclick="loadPlayersHistoryList\(false\)">.*?<\/button><\/div>/,
      `<div class="inline-actions wrap-actions"><button class="btn" onclick="loadPlayersHistoryList(false)">${t('refresh')}</button><button class="btn" onclick="cleanupNoisePlayerHistory()">${t('cleanupHistoryNoise')}</button><button class="btn danger" onclick="deleteSelectedHistory()">${t('deleteHistoryEntry')}</button><button class="btn danger" onclick="clearAllPlayerHistory()">${t('clearHistoryAll')}</button></div>`
    );
    html = html.replace(
      /(<div class="help-text" style="margin-top:6px">.*?<\/div>)/,
      `$1<div class="help-text" style="margin-top:8px">${t('historyDeleteHint')}</div>`
    );
    html = html.replace(
      /<td><button class="small-btn" onclick="selectHistoryPlayer\('([^']*)'\)">([^<]*)<\/button><\/td>/g,
      (_, key, label) => `<td><div class="inline-actions wrap-actions"><button class="small-btn" onclick="selectHistoryPlayer('${key}')">${label}</button><button class="small-btn danger" onclick="deleteSelectedHistory('${key}')">${t('deleteHistoryRow')}</button></div></td>`
    );
    return html;
  };
})();

(function(){
  let kwLastUiActivity = Date.now();
  function markUiActivity(){ kwLastUiActivity = Date.now(); }
  ['scroll','wheel','touchmove','mousedown','keydown'].forEach(evt => {
    window.addEventListener(evt, markUiActivity, { passive: true });
  });
  function uiBusy(){
    const tag = document.activeElement ? document.activeElement.tagName : '';
    if (['INPUT','TEXTAREA','SELECT'].includes(tag)) return true;
    return (Date.now() - kwLastUiActivity) < 900;
  }

  const _kwSmoothRefreshState = refreshState;
  refreshState = async function(silent = false){
    if (silent && ['players','inventory','moderation'].includes(state.section) && uiBusy()) {
      try {
        const [st, collections] = await Promise.all([api('/api/state'), api('/api/collections')]);
        state.state = st.data;
        state.collections = collections.data;
        state.lang = (state.state?.config?.language || state.lang || 'es');
      } catch (_) {}
      return;
    }
    return _kwSmoothRefreshState(silent);
  };

  const _kwSmoothRefreshPlayers = refreshPlayers;
  refreshPlayers = async function(silent = false){
    if (!silent) return _kwSmoothRefreshPlayers(false);
    try {
      const res = await api('/api/players/refresh', 'POST', {});
      state.state = state.state || {};
      state.state.players_cache = res.data || [];
      state.state.last_players_refresh = new Date().toISOString().slice(0,19).replace('T',' ');
      await loadPlayersHistoryList(true);
      await loadPlayerProfile(true);
      if (!uiBusy() && ['players','inventory','moderation'].includes(state.section)) render(true);
    } catch (_) {}
  };
})();


/* ===== Final clean patch: exact time tasks/backups, manual refresh, clear settings ===== */
Object.assign(T.es, {
  refreshNowTop: 'Actualizar ahora',
  exactHour: 'Hora',
  exactMinute: 'Minuto',
  repeatMode: 'Repetición',
  repeatDaily: 'Diario',
  repeatOnce: 'Una vez',
  scheduledExactHelp: 'Elige una hora exacta del día. “Una vez” se ejecuta la próxima vez que llegue esa hora y luego se desactiva sola.',
  backupRetentionDays: 'Conservar backups (días)',
  backupRetentionHint: '0 = no borrar backups automáticamente.',
  saveBackupSettings: 'Guardar backups',
  inventoryApiHelpTitle: 'Cómo funciona la API de inventario',
  inventoryApiHelpText: 'Pon aquí la URL base de la Web API o del webmap que expone el inventario del servidor. Ejemplo habitual: http://127.0.0.1:8087 . Si tu API usa autenticación, rellena también usuario y contraseña. La carpeta de iconos es opcional: solo sirve para mostrar imágenes de objetos, no para leer el inventario real.',
  mapUrlLabelClear: 'URL del mapa web externo (opcional)',
  botStatusTitleClean: 'Estado del bot externo',
  botStatusTextClean: 'Aquí eliges el archivo real del bot externo (.bat, .cmd, .exe o .py). El ServerKit solo puede arrancarlo, pararlo y reiniciarlo desde los botones superiores.',
  sameServerFolderHint: 'Usa la misma ruta del servidor.',
  programming: 'Programación',
  taskType: 'Tipo',
  addCommandAutomation: 'Añadir automatización',
  testNow: 'Probar ahora',
  noCommandTasksYet: 'No hay automatizaciones todavía.',
  commandAutomationsTitle: 'Automatizaciones de comandos',
  commandAutomationsText: 'Programa un comando telnet a una hora exacta del día y decide si se repite a diario o si solo se ejecuta una vez.',
  restartTasksOnlyTitle: 'Reinicios programados',
  restartTasksOnlyText: 'Programa reinicios del servidor a una hora exacta y decide si se repiten a diario o si solo se ejecutan una vez.',
  backupTasksOnlyTitle: 'Backups programados',
  backupTasksOnlyText: 'Programa backups a una hora exacta del día y decide si se repiten a diario o si solo se ejecutan una vez.'
});
Object.assign(T.en, {
  refreshNowTop: 'Refresh now',
  exactHour: 'Hour',
  exactMinute: 'Minute',
  repeatMode: 'Repeat',
  repeatDaily: 'Daily',
  repeatOnce: 'One time',
  scheduledExactHelp: 'Choose an exact hour of the day. “One time” runs the next time that hour arrives and then disables itself.',
  backupRetentionDays: 'Backup retention (days)',
  backupRetentionHint: '0 = never auto-delete old backups.',
  saveBackupSettings: 'Save backups',
  inventoryApiHelpTitle: 'How the inventory API works',
  inventoryApiHelpText: 'Enter the base URL of the Web API or webmap that exposes the server inventory. Common example: http://127.0.0.1:8087 . If your API requires authentication, also fill user and password. The icons folder is optional: it only shows item images and does not affect real inventory reading.',
  mapUrlLabelClear: 'External web map URL (optional)',
  botStatusTitleClean: 'External bot status',
  botStatusTextClean: 'Choose the real startup file of the external bot (.bat, .cmd, .exe or .py). The ServerKit can only start, stop and restart it from the top buttons.',
  sameServerFolderHint: 'Uses the same server folder.',
  programming: 'Scheduling',
  taskType: 'Type',
  addCommandAutomation: 'Add automation',
  testNow: 'Test now',
  noCommandTasksYet: 'There are no automations yet.',
  commandAutomationsTitle: 'Command automations',
  commandAutomationsText: 'Schedule a telnet command at an exact hour of the day and decide whether it repeats daily or only runs once.',
  restartTasksOnlyTitle: 'Scheduled restarts',
  restartTasksOnlyText: 'Schedule server restarts at an exact hour and decide whether they repeat daily or only run once.',
  backupTasksOnlyTitle: 'Scheduled backups',
  backupTasksOnlyText: 'Schedule backups at an exact hour of the day and decide whether they repeat daily or only run once.'
});
(function(){
  function pad2(v){ return String(Math.max(0, Number.parseInt(v || 0, 10) || 0)).padStart(2,'0'); }
  function esc(v){ return escapeHtml(v == null ? '' : String(v)); }
  function taskNameDefault(type){
    if (type === 'backup') return 'Backup';
    if (type === 'command') return t('taskAutomation') || 'Automatización';
    return 'Reinicio';
  }
  function normalizeTaskUi(task, type){
    return {
      ...task,
      type,
      time_hour: Math.max(0, Math.min(23, Number.parseInt(task.time_hour, 10) || 6)),
      time_minute: Math.max(0, Math.min(59, Number.parseInt(task.time_minute, 10) || 0)),
      repeat_mode: String(task.repeat_mode || 'daily') === 'once' ? 'once' : 'daily'
    };
  }
  taskRowsByType = function(type){
    const rows = [];
    (state.collections.tasks || []).forEach((task,index)=>{ if ((task.type || 'restart') === type) rows.push({ task: normalizeTaskUi(task, type), index }); });
    return rows;
  };
  function hourOptions(selected){ return Array.from({length:24}, (_,i)=>`<option value="${pad2(i)}" ${Number(selected)===i?'selected':''}>${pad2(i)}</option>`).join(''); }
  function minuteOptions(selected){ return Array.from({length:60}, (_,i)=>`<option value="${pad2(i)}" ${Number(selected)===i?'selected':''}>${pad2(i)}</option>`).join(''); }
  function repeatOptions(selected){ const v = String(selected || 'daily'); return `<option value="daily" ${v==='daily'?'selected':''}>${t('repeatDaily')}</option><option value="once" ${v==='once'?'selected':''}>${t('repeatOnce')}</option>`; }
  addRestartTaskOnly = function(){ state.collections.tasks = state.collections.tasks || []; state.collections.tasks.push({id:`ui_${Date.now()}_${Math.random().toString(16).slice(2,8)}`,name:'Reinicio diario',type:'restart',time_hour:6,time_minute:0,repeat_mode:'daily',cron:'0 6 * * *',active:true}); render(true); };
  addBackupTaskOnly = function(){ state.collections.tasks = state.collections.tasks || []; state.collections.tasks.push({id:`ui_${Date.now()}_${Math.random().toString(16).slice(2,8)}`,name:'Backup diario',type:'backup',time_hour:6,time_minute:0,repeat_mode:'daily',cron:'0 6 * * *',active:true}); render(true); };
  addCommandTaskOnly = function(){ state.collections.tasks = state.collections.tasks || []; state.collections.tasks.push({id:`ui_${Date.now()}_${Math.random().toString(16).slice(2,8)}`,name:'Automatización',type:'command',command:'say "Mensaje automático"',time_hour:6,time_minute:0,repeat_mode:'daily',cron:'0 6 * * *',active:true}); render(true); };
  if (typeof removeTask !== 'function') { removeTask = function(index){ (state.collections.tasks || []).splice(index,1); render(true); }; }
  function renderExactRows(rows, emptyText, withCommand){
    const colspan = withCommand ? 7 : 5;
    if (!rows.length) return `<tr><td colspan="${colspan}" class="empty-note">${emptyText}</td></tr>`;
    return rows.map(({task,index})=>`
      <tr>
        <td><input data-task-index="${index}" data-key="name" value="${esc(task.name || '')}" placeholder="${esc(taskNameDefault(task.type))}"></td>
        <td>${esc(task.type === 'backup' ? t('backups') : (task.type === 'command' ? t('taskCommand') : t('restart')))}</td>
        ${withCommand ? `<td><input data-task-index="${index}" data-key="command" value="${esc(task.command || '')}" placeholder="say &quot;Mensaje automático&quot;"></td>` : ''}
        <td><div class="inline-actions wrap-actions"><div class="field" style="min-width:120px"><label>${t('exactHour')}</label><select data-task-index="${index}" data-key="time_hour">${hourOptions(task.time_hour)}</select></div><div class="field" style="min-width:120px"><label>${t('exactMinute')}</label><select data-task-index="${index}" data-key="time_minute">${minuteOptions(task.time_minute)}</select></div><div class="field" style="min-width:180px"><label>${t('repeatMode')}</label><select data-task-index="${index}" data-key="repeat_mode">${repeatOptions(task.repeat_mode)}</select></div></div></td>
        <td><label class="switch"><input type="checkbox" data-task-index="${index}" data-key="active" ${task.active !== false ? 'checked' : ''}><span></span></label></td>
        ${withCommand ? `<td><button type="button" class="btn" style="position:relative;z-index:2" onclick="return testTaskCommand(event, ${index})">${t('testNow')}</button></td>` : ''}
        <td><button type="button" class="btn danger" style="position:relative;z-index:2" onclick="removeTask(${index});render(true);return false">${t('remove')}</button></td>
      </tr>`).join('');
  }

  testTaskCommand = async function(event, index){
    try {
      if (event && typeof event.preventDefault === 'function') event.preventDefault();
      if (event && typeof event.stopPropagation === 'function') event.stopPropagation();
      const get = key => document.querySelector(`[data-task-index="${index}"][data-key="${key}"]`);
      const command = (get('command')?.value || '').trim();
      if (!command) { toast('Escribe un comando.', true); return false; }
      toast(`Probando: ${command}`);
      const res = await api('/api/tasks/test-command', 'POST', { command, source: 'task_test_now', task_index: index });
      toast(res.message || 'Comando probado.');
      await refreshState(true);
      return false;
    } catch (err) {
      toast(err.message, true);
      return false;
    }
  };

  saveTasks = async function(){
    try {
      const items = (state.collections.tasks || []).map((task,index)=>{
        const get = key => document.querySelector(`[data-task-index="${index}"][data-key="${key}"]`);
        const type = task.type || 'restart';
        const hour = Math.max(0, Math.min(23, Number.parseInt(get('time_hour')?.value ?? task.time_hour ?? 6, 10) || 6));
        const minute = Math.max(0, Math.min(59, Number.parseInt(get('time_minute')?.value ?? task.time_minute ?? 0, 10) || 0));
        const repeat = String(get('repeat_mode')?.value || task.repeat_mode || 'daily') === 'once' ? 'once' : 'daily';
        return {
          id: task.id || `task_${index}`,
          name: (get('name')?.value || task.name || taskNameDefault(type)).trim(),
          type,
          command: type === 'command' ? ((get('command')?.value || task.command || 'say "Mensaje automático"').trim()) : '',
          time_hour: hour,
          time_minute: minute,
          repeat_mode: repeat,
          cron: `${minute} ${hour} * * *`,
          active: !!get('active')?.checked
        };
      });
      state.collections.tasks = items;
      const res = await api('/api/collections/tasks', 'POST', { items });
      toast(res.message || t('saveTasks'));
      await refreshState(true);
      render(true);
    } catch (err) { toast(err.message, true); }
  };
  saveBackupSettings = async function(){
    try {
      const cfg = (state.state && state.state.config) || {};
      const el = document.getElementById('backup_retention_days');
      const days = Math.max(0, Number.parseInt(el?.value || cfg.backup_retention_days || 0, 10) || 0);
      await api('/api/config/save', 'POST', { backup_retention_days: days, server_folder: cfg.server_folder || '', working_directory: cfg.server_folder || cfg.working_directory || '', xml_path: cfg.xml_path || '', backup_folder: cfg.backup_folder || '' });
      toast(t('settingsSaved'));
      await refreshState(true);
      render(true);
    } catch (err) { toast(err.message, true); }
  };
  views.tasks = function(){
    const restartRows = taskRowsByType('restart');
    const automationRows = taskRowsByType('command');
    return `<div class="grid"><div class="card panel"><div class="panel-head-inline"><div><h2 style="margin:0">${t('restartTasksOnlyTitle')}</h2><div class="help-text" style="margin-top:6px">${t('scheduledExactHelp')}</div></div><div class="inline-actions"><button type="button" class="btn" onclick="addRestartTaskOnly();return false">${t('addRestartTask')}</button><button type="button" class="btn btn-primary" onclick="saveTasks();return false">${t('saveTasks')}</button></div></div><table class="table"><thead><tr><th>${t('name')}</th><th>${t('taskType')}</th><th>${t('programming')}</th><th>${t('active')}</th><th></th></tr></thead><tbody>${renderExactRows(restartRows, t('noRestartTasksYet'), false)}</tbody></table></div><div class="card panel"><div class="panel-head-inline"><div><h2 style="margin:0">${t('commandAutomationsTitle')}</h2><div class="help-text" style="margin-top:6px">${t('commandAutomationsText')}</div></div><div class="inline-actions"><button type="button" class="btn" onclick="addCommandTaskOnly();return false">${t('addCommandAutomation')}</button><button type="button" class="btn btn-primary" onclick="saveTasks();return false">${t('saveTasks')}</button></div></div><table class="table"><thead><tr><th>${t('name')}</th><th>${t('taskType')}</th><th>${t('commandToSend')}</th><th>${t('programming')}</th><th>${t('active')}</th><th>${t('testNow')}</th><th></th></tr></thead><tbody>${renderExactRows(automationRows, t('noCommandTasksYet'), true)}</tbody></table></div></div>`;
  };
  views.backups = function(){
    const backups = state.backups || [];
    const rows = taskRowsByType('backup');
    const cfg = (state.state && state.state.config) || {};
    return `<div class="grid"><div class="card panel"><div class="panel-head-inline"><div><h2>${t('backups')}</h2><div class="help-text" style="margin-top:6px">${t('backupHint')}</div><div class="help-text" style="margin-top:8px"><strong>${t('backupRoute')}:</strong> ${esc(cfg.backup_folder || '-')}</div><div class="kw-top-note">${t('backupRetentionHint')}</div></div><div class="inline-actions wrap-actions"><div class="field kw-inline-number"><label>${t('backupRetentionDays')}</label><input id="backup_retention_days" type="number" min="0" step="1" value="${esc(cfg.backup_retention_days ?? 1)}"></div><button type="button" class="btn" onclick="saveBackupSettings();return false">${t('saveBackupSettings')}</button><button type="button" class="btn btn-primary" onclick="serverAction('backup');return false">${t('createBackupNow')}</button><button type="button" class="btn" onclick="loadBackups();return false">${t('refreshList')}</button></div></div><table class="table"><thead><tr><th>${t('name')}</th><th>${t('backupModified')}</th><th>${t('backupSize')}</th><th>${t('backupActions')}</th></tr></thead><tbody>${backups.length ? backups.map(row => `<tr><td>${esc(row.name)}</td><td>${esc(row.modified || '-')}</td><td>${esc(row.size_text || '-')}</td><td><div class="inline-actions"><button class="btn" onclick="copyToClipboard('${String(row.path || '').replace(/'/g, "\\'")}')">${t('copyPath')}</button><button class="btn" onclick="restoreBackup('${String(row.path || '').replace(/'/g, "\\'")}')">${t('restore')}</button><button class="btn danger" onclick="deleteBackup('${String(row.path || '').replace(/'/g, "\\'")}')">${t('remove')}</button></div></td></tr>`).join('') : `<tr><td colspan="4" class="empty-note">${t('noBackupsYet')}</td></tr>`}</tbody></table></div><div class="card panel"><div class="panel-head-inline"><div><h2 style="margin:0">${t('backupTasksOnlyTitle')}</h2><div class="help-text" style="margin-top:6px">${t('scheduledExactHelp')}</div></div><div class="inline-actions"><button type="button" class="btn" onclick="addBackupTaskOnly();return false">${t('addBackupTask')}</button><button type="button" class="btn btn-primary" onclick="saveTasks();return false">${t('saveTasks')}</button></div></div><table class="table"><thead><tr><th>${t('name')}</th><th>${t('taskType')}</th><th>${t('programming')}</th><th>${t('active')}</th><th></th></tr></thead><tbody>${renderExactRows(rows, t('noBackupTasksYet'), false)}</tbody></table>${infoNote(t('backups'), t('backupHowWorks'))}</div></div>`;
  };
  const _prevSaveSettingsClean = saveSettings;
  saveSettings = async function(){
    const serverFolderEl = document.getElementById('server_folder');
    const workingDirEl = document.getElementById('working_directory');
    const xmlPathEl = document.getElementById('xml_path');
    if (serverFolderEl && workingDirEl) workingDirEl.value = serverFolderEl.value || '';
    if (serverFolderEl && xmlPathEl) {
      const current = String(xmlPathEl.value || '').trim();
      if (!current || /data[\\/]+serverconfig\.xml$/i.test(current)) {
        const sf = String(serverFolderEl.value || '').trim();
        if (sf) xmlPathEl.value = `${sf.replace(/[\\/]+$/,'')}\\serverconfig.xml`;
      }
    }
    return _prevSaveSettingsClean.apply(this, arguments);
  };
  views.discordbot = function(){
    const b = state.state.bot_config || {};
    const configured = (b.external_bot_entry || '').trim();
    return `<div class="grid grid-2"><div class="card panel"><div class="panel-head-inline"><h2>${t('botConfigTitle')}</h2><button class="btn btn-primary" onclick="saveBotConfig()">${t('saveBotConfig')}</button></div><div class="help-text" style="margin-bottom:16px">${t('botConfigHint')}</div><div class="input-grid">${fieldBrowse('bot_external_bot_entry', t('botFolder'), b.external_bot_entry || '', 'bot_entry', t('selectBotFolder'))}<div class="field"><label>${t('status')}</label><input value="${esc(state.state.bot_running ? t('botRunning') : (configured ? t('botConfiguredOnly') : t('botStopped')))}" disabled></div></div><div class="help-text" style="margin-top:14px">${t('botOnlyTopButtonsHint')}</div></div><div class="card panel">${infoNote(t('botStatusTitleClean'), t('botStatusTextClean'))}<div class="label-grid"><div>${t('botFolder')}</div><div>${esc(configured || '-')}</div><div>${t('status')}</div><div>${state.state.bot_running ? t('on') : t('off')}</div><div>${t('panelAddress')}</div><div>${esc(state.state.config.panel_host || '-')} : ${esc(state.state.config.panel_port || '-')}</div></div></div></div>`;
  };
  function enhanceSettingsView(){
    if (state.section !== 'settings') return;
    const serverFolder = document.getElementById('server_folder');
    const workingDir = document.getElementById('working_directory');
    const liveMap = document.getElementById('live_map_url');
    if (serverFolder && workingDir) {
      workingDir.value = serverFolder.value || workingDir.value || '';
      workingDir.readOnly = true;
      workingDir.classList.add('kw-readonly');
      const label = workingDir.parentElement && workingDir.parentElement.querySelector('label');
      if (label) label.textContent = `${t('workingDirectory')} · ${t('sameServerFolderHint')}`;
      serverFolder.addEventListener('input', ()=>{ workingDir.value = serverFolder.value || ''; });
    }
    if (liveMap) {
      const label = liveMap.parentElement && liveMap.parentElement.querySelector('label');
      if (label) label.textContent = t('mapUrlLabelClear');
    }

  }
  function ensureManualRefreshButton(){ const btn = document.getElementById('btnManualRefreshTop'); if (btn) btn.textContent = t('refreshNowTop'); }
  refreshNow = async function(){
    try {
      await refreshState(false);
      if (['players','inventory','moderation'].includes(state.section)) await refreshPlayers(false);
      if (state.section === 'backups') await loadBackups(false);
      if (state.section === 'serverconfig') await loadXmlAll();
      render(true);
    } catch (err) { toast(err.message, true); }
  };
  const _prevRenderCleanFinal = render;
  render = function(preserveScroll=false){ _prevRenderCleanFinal(preserveScroll); ensureManualRefreshButton(); enhanceSettingsView(); };
})();


/* ===== final patch v9: watchdog tab replaces summary, clean settings labels ===== */
Object.assign(T.es, {
  logsTitle: 'Watchdog',
  watchdogMenu: 'Watchdog',
  watchdogSectionTitle: 'Watchdog del servidor',
  watchdogSectionText: 'Supervisa el servidor por Telnet y lo reinicia automáticamente si deja de responder según los límites que configures aquí.',
  watchdogEnabled: 'Activar watchdog',
  watchdogCheckInterval: 'Comprobar cada (segundos)',
  watchdogStartupGrace: 'Espera inicial tras arrancar (segundos)',
  watchdogNoOutput: 'Tiempo máximo sin respuesta (segundos)',
  watchdogFailThreshold: 'Fallos seguidos antes de reiniciar',
  watchdogTelnetCommand: 'Comando Telnet de prueba',
  watchdogSave: 'Guardar watchdog',
  watchdogInfoTitle: 'Cómo funciona el watchdog',
  watchdogInfoText: 'Cada cierto tiempo envía un comando Telnet de prueba. Si el servidor no responde varias veces seguidas o pasa demasiado tiempo sin actividad, el ServerKit lo reinicia.',
  watchdogPanelNoteTitle: 'Dónde configurarlo',
  watchdogPanelNoteText: 'Esta pestaña sustituye al antiguo Resumen. Aquí es donde se configura el watchdog; ya no está mezclado dentro de Ajustes.',
  panelHostRemoteTitle: 'Entrar al panel desde otro ordenador',
  panelHostRemoteText: 'En Host del panel ServerKit usa 0.0.0.0 para escuchar en toda la red local. Luego abre en el otro PC: http://IP-DE-ESTE-PC:PUERTO-DEL-PANEL . No uses el puerto del juego.',
  panelHostHelpTitle: 'Panel web del ServerKit',
  panelHostHelpText: 'Estos campos controlan la dirección y el puerto del panel web del propio ServerKit. No son el puerto del juego ni el del mapa web.',
  settingsMapHelpTitle: 'Mapa web externo',
  settingsMapHelpText: 'Aquí solo va la URL externa del mapa web, si usas uno. No afecta al panel del ServerKit ni al bot externo.',
  sameServerFolderHint: 'Se usa la misma carpeta del servidor.',
  botStatusTitleClean: 'Estado del bot externo',
  botStatusTextClean: 'Aquí eliges el archivo real del bot externo (.bat, .cmd, .exe o .py). El ServerKit puede arrancarlo, pararlo y reiniciarlo desde los botones superiores.',
  botPanelAddressTitle: 'Panel web del ServerKit',
  botPanelAddressText: 'Esta dirección es del panel del ServerKit. No es una URL del bot ni del mapa web.',
  saveSettingsClean: 'Guardar ajustes',
  serverFolderWorkSame: 'Carpeta desde la que se ejecuta · misma ruta del servidor'
});
Object.assign(T.en, {
  logsTitle: 'Watchdog',
  watchdogMenu: 'Watchdog',
  watchdogSectionTitle: 'Server watchdog',
  watchdogSectionText: 'Monitors the server through Telnet and automatically restarts it if it stops responding according to the limits you set here.',
  watchdogEnabled: 'Enable watchdog',
  watchdogCheckInterval: 'Check every (seconds)',
  watchdogStartupGrace: 'Startup grace after launch (seconds)',
  watchdogNoOutput: 'Maximum time without response (seconds)',
  watchdogFailThreshold: 'Consecutive failures before restart',
  watchdogTelnetCommand: 'Test Telnet command',
  watchdogSave: 'Save watchdog',
  watchdogInfoTitle: 'How the watchdog works',
  watchdogInfoText: 'Every few seconds it sends a Telnet test command. If the server does not respond several times in a row or spends too long without activity, ServerKit restarts it.',
  watchdogPanelNoteTitle: 'Where to configure it',
  watchdogPanelNoteText: 'This tab replaces the old Summary. Configure the watchdog here; it is no longer mixed into Settings.',
  panelHostRemoteTitle: 'Open the panel from another computer',
  panelHostRemoteText: 'Use 0.0.0.0 as ServerKit panel host to listen on the local network. Then open on the other PC: http://THIS-PC-IP:PANEL-PORT . Do not use the game port.',
  panelHostHelpTitle: 'ServerKit web panel',
  panelHostHelpText: 'These fields control the address and port of the ServerKit web panel itself. They are not the game port or the external map port.',
  settingsMapHelpTitle: 'External web map',
  settingsMapHelpText: 'Only put the external web map URL here, if you use one. It does not affect the ServerKit panel or the external bot.',
  sameServerFolderHint: 'Uses the same server folder.',
  botStatusTitleClean: 'External bot status',
  botStatusTextClean: 'Choose the real startup file of the external bot (.bat, .cmd, .exe or .py). ServerKit can start, stop and restart it from the top buttons.',
  botPanelAddressTitle: 'ServerKit web panel',
  botPanelAddressText: 'This address belongs to the ServerKit panel. It is not a bot or web map URL.',
  saveSettingsClean: 'Save settings',
  serverFolderWorkSame: 'Working folder · same server path'
});
(function(){
  function esc(v){ return escapeHtml(v == null ? '' : String(v)); }
  menuLabel = function(key){
    const map = {
      dashboard: 'generalStatus',
      server: 'watchdogMenu',
      console: 'console',
      players: 'players',
      inventory: 'inventory',
      moderation: 'moderation',
      backups: 'backups',
      tasks: 'scheduledTasks',
      serverconfig: 'serverconfig',
      settings: 'settings',
      notifications: 'notifications',
      discordbot: 'discordBot',
      access: 'accessTitle',
      helpdocs: 'helpGuide'
    };
    return t(map[key] || key);
  };

  async function saveWatchdogSettings(){
    try {
      const cfg = (state.state && state.state.config) || {};
      const payload = {
        watchdog_enabled: (document.getElementById('watchdog_enabled')?.value || (cfg.watchdog_enabled ? 'true' : 'false')) === 'true',
        watchdog_check_interval_seconds: document.getElementById('watchdog_check_interval_seconds')?.value || cfg.watchdog_check_interval_seconds || 45,
        watchdog_startup_grace_seconds: document.getElementById('watchdog_startup_grace_seconds')?.value || cfg.watchdog_startup_grace_seconds || 180,
        watchdog_no_output_seconds: document.getElementById('watchdog_no_output_seconds')?.value || cfg.watchdog_no_output_seconds || 900,
        watchdog_fail_threshold: document.getElementById('watchdog_fail_threshold')?.value || cfg.watchdog_fail_threshold || 3,
        watchdog_telnet_command: document.getElementById('watchdog_telnet_command')?.value || cfg.watchdog_telnet_command || 'listplayers',
        panel_host: document.getElementById('panel_host')?.value || cfg.panel_host || '127.0.0.1',
        panel_port: document.getElementById('panel_port')?.value || cfg.panel_port || 26900
      };
      await api('/api/config/save', 'POST', payload);
      toast(t('settingsSaved'));
      await refreshState(true);
      go('server');
    } catch (err) { toast(err.message, true); }
  }
  window.saveWatchdogSettings = saveWatchdogSettings;

  views.server = function(){
    const s = state.state || {};
    const cfg = s.config || {};
    return `
      <div class="grid">
        <div class="card panel">
          <div class="panel-head-inline">
            <div>
              <h2 style="margin:0">${t('watchdogSectionTitle')}</h2>
              <div class="help-text" style="margin-top:6px">${t('watchdogSectionText')}</div>
            </div>
            <div class="inline-actions"><button class="btn btn-primary" onclick="saveWatchdogSettings()">${t('watchdogSave')}</button></div>
          </div>
          <div class="input-grid">
            ${fieldSelect('watchdog_enabled', t('watchdogEnabled'), cfg.watchdog_enabled ? 'true' : 'false', [{value:'false', label:t('disabled')},{value:'true', label:t('enabled')}])}
            ${field('watchdog_check_interval_seconds', t('watchdogCheckInterval'), cfg.watchdog_check_interval_seconds || 45, 'number')}
            ${field('watchdog_startup_grace_seconds', t('watchdogStartupGrace'), cfg.watchdog_startup_grace_seconds || 180, 'number')}
            ${field('watchdog_no_output_seconds', t('watchdogNoOutput'), cfg.watchdog_no_output_seconds || 900, 'number')}
            ${field('watchdog_fail_threshold', t('watchdogFailThreshold'), cfg.watchdog_fail_threshold || 3, 'number')}
            ${field('watchdog_telnet_command', t('watchdogTelnetCommand'), cfg.watchdog_telnet_command || 'listplayers')}
            ${field('panel_host', t('panelHostServerKit'), cfg.panel_host || '127.0.0.1')}
            ${field('panel_port', t('panelPortServerKit'), cfg.panel_port || 26900, 'number')}
          </div>
          <div class="grid grid-2" style="margin-top:14px">
            <div class="info-box"><h3>${t('watchdogInfoTitle')}</h3><div class="help-text">${t('watchdogInfoText')}</div></div>
            <div class="info-box"><h3>${t('watchdogPanelNoteTitle')}</h3><div class="help-text">${t('watchdogPanelNoteText')}</div></div>
            <div class="info-box"><h3>${t('panelHostHelpTitle')}</h3><div class="help-text">${t('panelHostHelpText')}</div></div>
            <div class="info-box"><h3>${t('panelHostRemoteTitle')}</h3><div class="help-text">${t('panelHostRemoteText')}</div></div>
          </div>
        </div>
      </div>`;
  };

  views.settings = function(){
    const c = state.state.config || {};
    return `
      <div class="grid">
        <div class="card panel">
          <div class="panel-head-inline">
            <div>
              <h2 style="margin:0">${t('generalSettings')}</h2>
              <div class="help-text" style="margin-top:6px">${t('settingsHint')}</div>
            </div>
            <div class="inline-actions">
              <button class="btn" onclick="chooseSplash()">${t('changeStartupImage')}</button>
              <button class="btn" onclick="exportManagerConfig()">${t('exportConfig')}</button>
              <button class="btn" onclick="importManagerConfig()">${t('importConfig')}</button>
              <button class="btn btn-primary" onclick="saveSettings()">${t('saveSettingsClean')}</button>
            </div>
          </div>
          <div class="input-grid">
            ${field('server_name', t('serverName'), c.server_name || '')}
            ${fieldSelect('language', t('language'), c.language || state.lang, [{value:'es', label:'Español'},{value:'en', label:'English'}])}
            ${fieldBrowse('server_folder', t('serverPath'), c.server_folder || '', 'folder', t('selectServerFolder'))}
            ${fieldBrowse('executable_path', t('exeOrBat'), c.executable_path || '', 'exe_bat', t('selectExecutable'))}
            ${fieldBrowse('working_directory', t('workingDirectory'), c.working_directory || c.server_folder || '', 'folder', t('selectWorkingDirectory'))}
            ${fieldBrowse('xml_path', t('realServerConfig'), c.xml_path || '', 'xml', t('selectServerConfig'))}
            ${fieldBrowse('backup_folder', t('backupFolder'), c.backup_folder || '', 'folder', t('selectBackupFolder'))}
            ${field('inventory_api_base_url', t('inventoryApiUrl'), c.inventory_api_base_url || '')}
            ${field('inventory_api_user', t('inventoryApiUser'), c.inventory_api_user || 'admin')}
            ${field('inventory_api_password', t('inventoryApiPassword'), c.inventory_api_password || '', 'password')}
            ${fieldBrowse('item_icons_folder', t('itemIconsFolder'), c.item_icons_folder || '', 'folder', t('selectItemIconsFolder'))}
            ${field('telnet_host', t('telnetHost'), c.telnet_host || '127.0.0.1')}
            ${field('telnet_port', t('telnetPort'), c.telnet_port || 8081, 'number')}
            ${field('telnet_password', t('telnetPassword'), c.telnet_password || '', 'password')}
            ${fieldSelect('ui_theme', t('uiTheme'), (c.ui_theme || 'dark'), [
              {value:'dark', label:t('themeDark')},
              {value:'ocean', label:t('themeOcean')},
              {value:'emerald', label:t('themeEmerald')},
              {value:'violet', label:t('themeViolet')},
              {value:'sunset', label:t('themeSunset')}
            ])}
            ${field('accent_color', t('accentColor'), c.accent_color || '#55a7ff')}
            ${fieldSelect('auto_restart_enabled', t('autoRestartEnabled'), c.auto_restart_enabled ? 'true' : 'false', [{value:'false', label:t('disabled')},{value:'true', label:t('enabled')}])}
            ${field('auto_restart_delay_seconds', t('autoRestartDelay'), c.auto_restart_delay_seconds || 15, 'number')}
          </div>
          <div class="card panel kw-startup-settings" style="margin-top:14px">
            <h2>${t('startupOptions')}</h2>
            <div class="help-text" style="margin-top:6px">${t('startupOptionsHint')}</div>
            <div class="inline-actions wrap-actions" style="margin-top:14px">
              <label class="kw-check-chip"><input id="startupManagerWindows" type="checkbox" ${c.start_with_windows_manager ? 'checked' : ''}><span>${t('startWithWindowsManager')}</span></label>
              <label class="kw-check-chip"><input id="startupServerWithManager" type="checkbox" ${c.start_server_with_manager ? 'checked' : ''}><span>${t('startServerWithManager')}</span></label>
              <button class="btn btn-primary" type="button" onclick="saveStartupFlags()">${t('saveStartupOptions')}</button>
            </div>
          </div>
          <div class="grid grid-2" style="margin-top:14px">
            <div class="info-box"><h3>${t('inventoryApiHelpTitle')}</h3><div class="help-text">${t('inventoryApiHelpText')}</div></div>
            <div class="info-box"><h3>${t('inventoryApiUserHelpTitle')}</h3><div class="help-text">${t('inventoryApiUserHelpText')}</div></div>
            <div class="info-box"><h3>${t('settingsMapHelpTitle')}</h3><div class="help-text">${t('settingsMapHelpText')}</div></div>
            <div class="info-box"><h3>${t('themeHelpTitle')}</h3><div class="help-text">${t('themeHelpText')}<br>${t('panelWillOpenLocal')}</div></div>
          </div>
        </div>
      </div>`;
  };

  const _prevEnhanceSettingsV9 = enhanceSettingsView;
  enhanceSettingsView = function(){
    if (typeof _prevEnhanceSettingsV9 === 'function') _prevEnhanceSettingsV9();
    if (state.section !== 'settings') return;
    const serverFolder = document.getElementById('server_folder');
    const workingDir = document.getElementById('working_directory');
    if (serverFolder && workingDir) {
      workingDir.value = serverFolder.value || workingDir.value || '';
      workingDir.readOnly = true;
      workingDir.classList.add('kw-readonly');
      const label = workingDir.parentElement && workingDir.parentElement.querySelector('label');
      if (label) label.textContent = t('serverFolderWorkSame');
      serverFolder.addEventListener('input', ()=>{ workingDir.value = serverFolder.value || ''; });
    }
  };

  const _prevDiscordViewV9 = views.discordbot;
  views.discordbot = function(){
    const html = _prevDiscordViewV9 ? _prevDiscordViewV9() : '';
    return String(html).replace(/<div>(?:Panel del ServerKit|Panel address)<\/div><div>.*?<\/div>/, `<div>${t('botPanelAddressTitle')}</div><div>${esc((state.state.config || {}).panel_host || '-')} : ${esc((state.state.config || {}).panel_port || '-')}</div>`);
  };
})();

/* ===== Final real fixes: rendimiento + restore seguro + inventario offline visible ===== */
(function(){
  Object.assign(T.es, {
    restore: 'Restaurar',
    remove: 'Borrar',
    refreshList: 'Actualizar lista',
    performanceMonitor: 'Monitor de rendimiento',
    performanceMonitorText: 'Lectura rápida del host, del disco del servidor y del propio manager.',
    perfHostCpu: 'CPU host',
    perfHostRam: 'RAM host',
    perfDisk: 'Disco servidor',
    perfManagerUptime: 'Uptime manager',
    perfServerUptime: 'Uptime servidor',
    perfManagerRam: 'RAM manager',
    perfServerRam: 'RAM servidor',
    perfUnavailable: 'Sin datos',
    safeRestoreTitle: 'Restauración segura',
    safeRestoreText: 'Antes de restaurar se crea una copia automática PRE_RESTORE dentro de la carpeta de backups. El servidor debe estar parado.',
    inventoryQuickSelect: 'Selección rápida de inventario',
    inventoryQuickOnline: 'Jugadores online',
    inventoryQuickHistory: 'Historial con snapshots',
    inventoryUseOnline: 'Usar jugador online',
    inventoryUseHistory: 'Usar historial',
    inventorySelectedOnline: 'Origen actual: jugador online',
    inventorySelectedHistory: 'Origen actual: historial / offline',
    inventoryPickHint: 'Puedes cargar inventario en vivo o revisar la última captura guardada de jugadores desconectados.',
    inventorySnapshotUsingFallback: 'Mostrando la última captura guardada porque el jugador está offline o no hay lectura en vivo disponible.',
    inventoryNoHistoryCandidates: 'No hay jugadores del historial con snapshots todavía.',
    inventoryNoOnlinePlayers: 'No hay jugadores online ahora mismo.',
    inventoryLiveOrSnapshot: 'Inventario en vivo o último snapshot',
    inventoryNoSelectionYet: 'Selecciona un jugador online o uno del historial para ver su inventario o su última captura guardada.'
  });
  Object.assign(T.en, {
    restore: 'Restore',
    remove: 'Delete',
    refreshList: 'Refresh list',
    performanceMonitor: 'Performance monitor',
    performanceMonitorText: 'Quick host, disk and manager metrics.',
    perfHostCpu: 'Host CPU',
    perfHostRam: 'Host RAM',
    perfDisk: 'Server disk',
    perfManagerUptime: 'Manager uptime',
    perfServerUptime: 'Server uptime',
    perfManagerRam: 'Manager RAM',
    perfServerRam: 'Server RAM',
    perfUnavailable: 'No data',
    safeRestoreTitle: 'Safe restore',
    safeRestoreText: 'Before restoring, an automatic PRE_RESTORE copy is created inside the backups folder. The server must be stopped.',
    inventoryQuickSelect: 'Quick inventory selection',
    inventoryQuickOnline: 'Online players',
    inventoryQuickHistory: 'History with snapshots',
    inventoryUseOnline: 'Use online player',
    inventoryUseHistory: 'Use history',
    inventorySelectedOnline: 'Current source: online player',
    inventorySelectedHistory: 'Current source: history / offline',
    inventoryPickHint: 'You can load live inventory or review the latest saved snapshot for offline players.',
    inventorySnapshotUsingFallback: 'Showing the latest saved snapshot because the player is offline or live reading is not available.',
    inventoryNoHistoryCandidates: 'There are no history players with snapshots yet.',
    inventoryNoOnlinePlayers: 'There are no online players right now.',
    inventoryLiveOrSnapshot: 'Live inventory or latest snapshot',
    inventoryNoSelectionYet: 'Select an online player or one from history to view the inventory or the latest saved snapshot.'
  });

  function kwFormatUptime(seconds){
    const total = Number(seconds || 0);
    if (!Number.isFinite(total) || total < 0) return t('perfUnavailable');
    const d = Math.floor(total / 86400);
    const h = Math.floor((total % 86400) / 3600);
    const m = Math.floor((total % 3600) / 60);
    if (d > 0) return `${d}d ${h}h ${m}m`;
    if (h > 0) return `${h}h ${m}m`;
    return `${m}m`;
  }
  function kwFormatPercent(v){
    return (v === null || v === undefined || v === '' || Number.isNaN(Number(v))) ? t('perfUnavailable') : `${Number(v).toFixed(1)}%`;
  }
  function kwFormatGb(v, suffix = ' GB'){
    return (v === null || v === undefined || v === '' || Number.isNaN(Number(v))) ? t('perfUnavailable') : `${Number(v).toFixed(2)}${suffix}`;
  }
  function kwMemoryText(mem){
    if (!mem) return t('perfUnavailable');
    const used = kwFormatGb(mem.used_gb, ' GB');
    const total = kwFormatGb(mem.total_gb, ' GB');
    const pct = kwFormatPercent(mem.percent);
    if (used === t('perfUnavailable') && total === t('perfUnavailable')) return t('perfUnavailable');
    return `${used} / ${total} · ${pct}`;
  }
  function kwProcMemoryText(mem){
    if (!mem) return t('perfUnavailable');
    return kwFormatGb(mem.rss_gb, ' GB');
  }
  function kwDiskText(disk){
    if (!disk) return t('perfUnavailable');
    const used = kwFormatGb(disk.used_gb, ' GB');
    const total = kwFormatGb(disk.total_gb, ' GB');
    const pct = kwFormatPercent(disk.percent);
    if (used === t('perfUnavailable') && total === t('perfUnavailable')) return t('perfUnavailable');
    return `${used} / ${total} · ${pct}`;
  }
  function kwPerformanceGrid(perf){
    const p = perf || {};
    return `
      <div class="card panel">
        <div class="panel-head-inline">
          <div>
            <h2>${t('performanceMonitor')}</h2>
            <div class="help-text" style="margin-top:6px">${t('performanceMonitorText')}</div>
          </div>
          <span class="badge default">${p.psutil_available ? 'psutil' : 'fallback'}</span>
        </div>
        <div class="label-grid">
          <div>${t('perfHostCpu')}</div><div>${kwFormatPercent(p.host_cpu_percent)}</div>
          <div>${t('perfHostRam')}</div><div>${kwMemoryText(p.host_memory)}</div>
          <div>${t('perfDisk')}</div><div>${kwDiskText(p.disk)}</div>
          <div>${t('perfManagerUptime')}</div><div>${kwFormatUptime(p.manager_uptime_seconds)}</div>
          <div>${t('perfServerUptime')}</div><div>${p.server_uptime_seconds === null || p.server_uptime_seconds === undefined ? '-' : kwFormatUptime(p.server_uptime_seconds)}</div>
          <div>${t('perfManagerRam')}</div><div>${kwProcMemoryText(p.manager_memory)}</div>
          <div>${t('perfServerRam')}</div><div>${kwProcMemoryText(p.server_memory)}</div>
        </div>
      </div>`;
  }

  const _kwDashboardPrev = views.dashboard;
  views.dashboard = function(){
    const s = state.state || {};
    const config = s.config || {};
    const autoRestartLabel = config.auto_restart_enabled ? `${t('enabled')} · ${config.auto_restart_delay_seconds || 15}s` : t('disabled');
    const startedAt = s.started_at ? formatDateTime(s.started_at) : '-';
    const recentLines = (s.console_lines || []).slice(-10);
    return `
      <div class="grid">
        <div class="stats stats-6">
          <div class="stat card"><small>${t('status')}</small><strong>${s.running ? t('on') : t('off')}</strong></div>
          <div class="stat card"><small>${t('playersOnline')}</small><strong>${(s.players_cache || []).length}</strong></div>
          <div class="stat card"><small>${t('pid')}</small><strong>${s.pid || '-'}</strong></div>
          <div class="stat card"><small>${t('startedAt')}</small><strong>${startedAt}</strong></div>
          <div class="stat card"><small>${t('autoRestart')}</small><strong>${autoRestartLabel}</strong></div>
        </div>
        ${kwPerformanceGrid(s.performance)}
        <div class="grid grid-2">
          <div class="card panel">
            <div class="panel-head-inline"><h2>${t('generalStatus')}</h2><span class="badge ${s.running ? 'ok' : 'off'}">${s.running ? t('serverOn') : t('serverOff')}</span></div>
            <div class="label-grid">
              <div>${t('serverFolder')}</div><div>${escapeHtml(config.server_folder || '-')}</div>
              <div>${t('executable')}</div><div>${escapeHtml(config.executable_path || '-')}</div>
              <div>${t('workingFolder')}</div><div>${escapeHtml(config.working_directory || '-')}</div>
              <div>${t('realXml')}</div><div>${escapeHtml(config.xml_path || '-')}</div>
              <div>${t('backupFolder')}</div><div>${escapeHtml(config.backup_folder || '-')}</div>
              <div>${t('inventoryIconsStatus')}</div><div>${escapeHtml(config.item_icons_folder || t('noIconsFolder'))}</div>
              <div>${t('telnet')}</div><div>${escapeHtml(config.telnet_host || '-')} : ${escapeHtml(config.telnet_port || '-')}</div>
              <div>${t('panelAddress')}</div><div>${escapeHtml(config.panel_host || '-')} : ${escapeHtml(config.panel_port || '-')}</div>
            </div>
            <div class="inline-actions wrap-actions" style="margin-top:14px"><button class="btn" onclick="go('backups')">${t('backups')}</button><button class="btn" onclick="go('tasks')">${t('scheduledTasks')}</button><button class="btn" onclick="go('inventory')">${t('inventory')}</button><button class="btn" onclick="openExternalMap()">${t('openMapLink')}</button></div>
          </div>
          <div class="card panel">
            <h2>${t('recentActivity')}</h2>
            <div class="console-box compact-box"><div class="console-output">${recentLines.length ? escapeHtml(recentLines.join('\\n')) : `<span class="empty-note">${t('noRecentEvents')}</span>`}</div></div>
          </div>
        </div>
      </div>`;
  };

  const _kwBackupsPrev = views.backups;
  views.backups = function(){
    const backups = state.backups || [];
    const rows = taskRowsByType('backup');
    const backupRoot = (state.state && state.state.config && state.state.config.backup_folder) || '-';
    return `
      <div class="grid">
        <div class="card panel">${infoNote(t('safeRestoreTitle'), t('safeRestoreText'))}</div>
        <div class="card panel">
          <div class="panel-head-inline">
            <div>
              <h2>${t('backups')}</h2>
              <div class="help-text" style="margin-top:6px">${t('backupHint')}</div>
              <div class="help-text" style="margin-top:8px"><strong>${t('backupRoute')}:</strong> ${escapeHtml(backupRoot)}</div>
            </div>
            <div class="inline-actions">
              <button type="button" class="btn btn-primary" onclick="serverAction('backup');return false">${t('createBackupNow')}</button>
              <button type="button" class="btn" onclick="loadBackups();return false">${t('refreshList')}</button>
            </div>
          </div>
          <table class="table">
            <thead><tr><th>${t('name')}</th><th>${t('backupModified')}</th><th>${t('backupSize')}</th><th>${t('backupActions')}</th></tr></thead>
            <tbody>
              ${backups.length ? backups.map(row => `
                <tr>
                  <td>${escapeHtml(row.name)}</td>
                  <td>${escapeHtml(row.modified || '-')}</td>
                  <td>${escapeHtml(row.size_text || '-')}</td>
                  <td>
                    <div class="inline-actions wrap-actions">
                      <button class="btn" onclick="copyToClipboard('${String(row.path || '').replace(/'/g, "\'")}')">${t('copyPath')}</button>
                      <button class="btn" onclick="restoreBackup('${String(row.path || '').replace(/'/g, "\'")}')">${t('restore')}</button>
                      <button class="btn danger" onclick="deleteBackup('${String(row.path || '').replace(/'/g, "\'")}')">${t('remove')}</button>
                    </div>
                  </td>
                </tr>`).join('') : `<tr><td colspan="4" class="empty-note">${t('noBackupsYet')}</td></tr>`}
            </tbody>
          </table>
        </div>
        <div class="card panel">
          <div class="panel-head-inline">
            <div>
              <h2 style="margin:0">${t('backupTasksOnlyTitle')}</h2>
              <div class="help-text" style="margin-top:6px">${t('backupTasksOnlyText')}</div>
            </div>
            <div class="inline-actions">
              <button type="button" class="btn" onclick="addBackupTaskOnly();return false">${t('addBackupTask')}</button>
              <button type="button" class="btn btn-primary" onclick="saveTasks();return false">${t('saveTasks')}</button>
            </div>
          </div>
          <table class="table">
            <thead><tr><th>${t('name')}</th><th>${t('taskType')}</th><th>${t('cron')}</th><th>${t('active')}</th><th></th></tr></thead>
            <tbody>${renderTaskTableRows(rows, t('noBackupTasksYet'))}</tbody>
          </table>
          ${infoNote(t('backups'), t('backupHowWorks'))}
        </div>
      </div>`;
  };

  function kwCurrentInventoryTarget(){
    if (state.historySelectedKey && state.playerProfile && state.playerProfile.record && state.playerProfile.record.key === state.historySelectedKey) {
      return historyPlayerFromRecord(state.playerProfile.record);
    }
    return selectedPlayer() || historyPlayerFromRecord(state.playerProfile?.record || null);
  }
  currentInventoryData = function(){
    const player = kwCurrentInventoryTarget();
    if (!player) return null;
    return state.playerInventories[inventoryPlayerKey(player)] || null;
  };
  const _kwLoadInventoryPrev = loadPlayerInventory;
  loadPlayerInventory = async function(silent = false) {
    const player = kwCurrentInventoryTarget();
    if (!player) {
      if (!silent) toast(t('noPlayerSelected'), true);
      return;
    }
    try {
      const res = await api('/api/player/inventory', 'POST', { player });
      state.playerInventories[inventoryPlayerKey(player)] = res.data || null;
      if (!silent && res.message) toast(res.message);
      if (!silent && !res.message) toast(t('inventoryReload'));
      if (state.section === 'inventory') render(true);
    } catch (err) {
      if (!silent) toast(err.message, true);
      state.playerInventories[inventoryPlayerKey(player)] = { error: err.message };
      if (state.section === 'inventory') render(true);
    }
  };

  function kwInventoryQuickSelector(){
    const online = state.state?.players_cache || [];
    const historyRows = (state.playerHistoryList || []).filter(row => Number(row.snapshot_count || 0) > 0).slice(0, 10);
    return `
      <div class="card panel">
        <div class="panel-head-inline">
          <div>
            <h2>${t('inventoryQuickSelect')}</h2>
            <div class="help-text" style="margin-top:6px">${t('inventoryPickHint')}</div>
          </div>
        </div>
        <div class="grid grid-2">
          <div>
            <h3 style="margin-top:0">${t('inventoryQuickOnline')}</h3>
            ${online.length ? `<div class="mini-log">${online.map((p, idx) => `<div class="mini-log-row"><strong>${escapeHtml(playerDisplayName(p))}</strong><span>${escapeHtml(playerSteamText(p))}</span><small><button class="small-btn" onclick="selectPlayer(${idx}); state.historySelectedKey=''; setTimeout(()=>loadPlayerProfile(true),40); render(true);">${t('inventoryUseOnline')}</button></small></div>`).join('')}</div>` : `<div class="empty-note">${t('inventoryNoOnlinePlayers')}</div>`}
          </div>
          <div>
            <h3 style="margin-top:0">${t('inventoryQuickHistory')}</h3>
            ${historyRows.length ? `<div class="mini-log">${historyRows.map(row => `<div class="mini-log-row"><strong>${escapeHtml(row.primary_name || '-')}</strong><span>${escapeHtml(historyIdText(row))}</span><small><button class="small-btn" onclick="selectHistoryPlayer('${String(row.key || '').replace(/'/g, "\'")}'); setTimeout(()=>render(true),60);">${t('inventoryUseHistory')}</button></small></div>`).join('')}</div>` : `<div class="empty-note">${t('inventoryNoHistoryCandidates')}</div>`}
          </div>
        </div>
      </div>`;
  }

  const _kwPlayerInventoryCardPrev = playerInventoryCard;
  playerInventoryCard = function(player) {
    const target = kwCurrentInventoryTarget();
    const effectivePlayer = target || player;
    if (!effectivePlayer) return `<div class="empty-note">${t('inventoryNoSelectionYet')}</div>`;
    const data = currentInventoryData();
    const record = inventoryProfileRecord(effectivePlayer) || state.playerProfile?.record || null;
    const snapshots = (record?.inventory_snapshots || []).slice().reverse();
    const latestSnapshot = snapshots[0] || null;
    const liveData = data && !data.error && !data.snapshot_only;
    const hasLiveData = liveData && ((liveData.belt && liveData.belt.length) || (liveData.bag && liveData.bag.length) || (liveData.equipment && Object.keys(liveData.equipment).length));
    const usingHistory = !!(state.historySelectedKey && record && record.key === state.historySelectedKey);
    const fallbackNotice = (data && data.snapshot_only) || (!hasLiveData && latestSnapshot);
    return `
      <div class="inventory-shell kw-inventory-shell-compact">
        <div class="panel-head-inline" style="margin-bottom:10px"><span class="badge ${usingHistory ? 'default' : 'ok'}">${usingHistory ? t('inventorySelectedHistory') : t('inventorySelectedOnline')}</span></div>
        ${inventoryMetaBox(effectivePlayer, data || latestSnapshot || {})}
        <div class="inline-actions wrap-actions" style="margin-top:12px;margin-bottom:6px"><button class="btn btn-primary" onclick="loadPlayerInventory()">${data ? t('inventoryReload') : t('inventoryLoad')}</button><button class="btn" onclick="refreshPlayers()">${t('refreshPlayers')}</button><button class="btn" onclick="loadPlayersHistoryList(false)">${t('refresh')}</button></div>
        ${data && data.error ? `<div class="empty-note">${escapeHtml(data.error)}<br>${t('inventoryErrorHint')}</div>` : ''}
        ${fallbackNotice ? `<div class="info-box" style="margin-top:12px"><h3>${t('inventoryLiveOrSnapshot')}</h3><div class="help-text">${t('inventorySnapshotUsingFallback')}</div></div>` : ''}
        ${hasLiveData ? `<div class="kw-inv-panels"><div class="card panel inventory-panel compact-inv-panel"><h3>${t('belt')}</h3>${inventoryItemsHtml(liveData.belt || [], t('inventoryEmptySection'))}</div><div class="card panel inventory-panel compact-inv-panel"><h3>${t('bag')}</h3>${inventoryItemsHtml(liveData.bag || [], t('inventoryEmptySection'))}</div><div class="card panel inventory-panel compact-inv-panel"><h3>${t('equipment')}</h3>${inventoryEquipmentHtml(liveData.equipment || {})}</div></div>` : ''}
        ${latestSnapshot ? inventorySnapshotCardHtml(latestSnapshot, t('inventorySnapshotLatest')) : (!hasLiveData ? `<div class="empty-note" style="margin-top:14px">${t('inventorySnapshotNone')}</div>` : '')}
      </div>`;
  };

  views.inventory = function() {
    const current = kwCurrentInventoryTarget();
    return `
      <div class="grid">
        ${kwInventoryQuickSelector()}
        <div class="card panel">
          <div class="panel-head-inline">
            <div>
              <h2>${t('inventory')}</h2>
              <div class="help-text" style="margin-top:6px">${t('inventoryPickHint')}</div>
            </div>
            <div class="inline-actions wrap-actions">
              <button class="btn" onclick="go('players')">${t('players')}</button>
              <button class="btn" onclick="go('moderation')">${t('moderation')}</button>
              <button class="btn" onclick="refreshPlayers()">${t('refreshPlayers')}</button>
              <button class="btn btn-primary" onclick="loadPlayerInventory()">${t('inventoryLoad')}</button>
            </div>
          </div>
          ${playerInventoryCard(current)}
        </div>
      </div>`;
  };

  const _kwSelectHistoryPrev = selectHistoryPlayer;
  selectHistoryPlayer = function(key){
    _kwSelectHistoryPrev(key);
    if (state.section === 'inventory') {
      setTimeout(() => { loadPlayerProfile(true); render(true); }, 60);
    }
  };
})();


/* ===== v43 patch: sin splash, refresco suave, top 5, borradores preservados ===== */
Object.assign(T.es, {
  top5Players: 'Top 5 jugadores conectados',
  top5PlayersHint: 'Vista rápida para no tener que entrar a Jugadores.',
  noOnlinePlayersTop5: 'No hay jugadores conectados ahora mismo.',
  autoRefreshEvery15: 'Actualización suave cada 15 segundos',
  splashDisabledMessage: 'Pantalla de carga desactivada en esta versión.'
});
Object.assign(T.en, {
  top5Players: 'Top 5 online players',
  top5PlayersHint: 'Quick view without opening Players.',
  noOnlinePlayersTop5: 'No players are currently online.',
  autoRefreshEvery15: 'Soft refresh every 15 seconds',
  splashDisabledMessage: 'Startup splash screen disabled in this build.'
});

window.chooseSplash = async function(){
  toast(t('splashDisabledMessage'));
};

function startSoftAutoRefresh() {
  if (window.__kwSoftAutoRefreshStarted) return;
  window.__kwSoftAutoRefreshStarted = true;
  document.addEventListener('input', () => { state._editingNowUntil = Date.now() + 3000; }, true);
  document.addEventListener('change', () => { state._editingNowUntil = Date.now() + 3000; }, true);
  document.addEventListener('focusin', (ev) => {
    const tag = String(ev?.target?.tagName || '').toUpperCase();
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') state._editingNowUntil = Date.now() + 3000;
  }, true);
  window.__kwSoftAutoRefreshTimer = setInterval(async () => {
    try {
      if (document.hidden) return;
      if ((Date.now() < Number(state._editingNowUntil || 0))) return;
      if (document.querySelector('.kw-bot-modal-backdrop')) return;
      await refreshState(true);
      if (state.section === 'backups') await loadBackups(true);
    } catch (_) {}
  }, 15000);
}

(function(){
  const prevRender = render;
  render = function(preserveScroll = false) {
    const out = prevRender(preserveScroll);
    try {
      document.querySelectorAll('[onclick*="chooseSplash"]').forEach(el => el.remove());
    } catch (_) {}
    return out;
  };
})();

(function(){
  views.dashboard = function(){
    const s = state.state || {};
    const config = s.config || {};
    const autoRestartLabel = config.auto_restart_enabled ? `${t('enabled')} · ${config.auto_restart_delay_seconds || 15}s` : t('disabled');
    const startedAt = s.started_at ? formatDateTime(s.started_at) : '-';
    const recentLines = (s.console_lines || []).slice(-10);
    const players = (s.players_cache || []).slice(0, 5);
    const top5Html = players.length ? `
      <div class="mini-log">${players.map((p, idx) => `
        <div class="mini-log-row">
          <strong>${escapeHtml(playerDisplayName(p))}</strong>
          <span>${escapeHtml(playerSteamText(p))}</span>
          <small>#${idx + 1} · ${escapeHtml(playerPosText(p))}</small>
        </div>`).join('')}</div>` : `<div class="empty-note">${t('noOnlinePlayersTop5')}</div>`;
    return `
      <div class="grid">
        <div class="stats stats-6">
          <div class="stat card"><small>${t('status')}</small><strong>${s.running ? t('on') : t('off')}</strong></div>
          <div class="stat card"><small>${t('playersOnline')}</small><strong>${(s.players_cache || []).length}</strong></div>
          <div class="stat card"><small>${t('pid')}</small><strong>${s.pid || '-'}</strong></div>
          <div class="stat card"><small>${t('startedAt')}</small><strong>${startedAt}</strong></div>
          <div class="stat card"><small>${t('autoRestart')}</small><strong>${autoRestartLabel}</strong></div>
        </div>
        ${typeof kwPerformanceGrid === 'function' ? kwPerformanceGrid(s.performance) : ''}
        <div class="grid grid-2">
          <div class="card panel">
            <div class="panel-head-inline"><h2>${t('generalStatus')}</h2><span class="badge ${s.running ? 'ok' : 'off'}">${s.running ? t('serverOn') : t('serverOff')}</span></div>
            <div class="label-grid">
              <div>${t('serverFolder')}</div><div>${escapeHtml(config.server_folder || '-')}</div>
              <div>${t('executable')}</div><div>${escapeHtml(config.executable_path || '-')}</div>
              <div>${t('workingFolder')}</div><div>${escapeHtml(config.working_directory || '-')}</div>
              <div>${t('realXml')}</div><div>${escapeHtml(config.xml_path || '-')}</div>
              <div>${t('backupFolder')}</div><div>${escapeHtml(config.backup_folder || '-')}</div>
              <div>${t('inventoryIconsStatus')}</div><div>${escapeHtml(config.item_icons_folder || t('noIconsFolder'))}</div>
              <div>${t('telnet')}</div><div>${escapeHtml(config.telnet_host || '-')} : ${escapeHtml(config.telnet_port || '-')}</div>
              <div>${t('panelAddress')}</div><div>${escapeHtml(config.panel_host || '-')} : ${escapeHtml(config.panel_port || '-')}</div>
            </div>
            <div class="inline-actions wrap-actions" style="margin-top:14px"><button class="btn" onclick="go('backups')">${t('backups')}</button><button class="btn" onclick="go('tasks')">${t('scheduledTasks')}</button><button class="btn" onclick="go('inventory')">${t('inventory')}</button><button class="btn" onclick="openExternalMap()">${t('openMapLink')}</button></div>
          </div>
          <div class="card panel">
            <h2>${t('recentActivity')}</h2>
            <div class="console-box compact-box"><div class="console-output">${recentLines.length ? escapeHtml(recentLines.join('\\n')) : `<span class="empty-note">${t('noRecentEvents')}</span>`}</div></div>
            <div class="help-text" style="margin-top:10px">${t('autoRefreshEvery15')}</div>
          </div>
        </div>
        <div class="grid grid-2">
          <div class="card panel">
            <div class="panel-head-inline"><div><h2>${t('top5Players')}</h2><div class="help-text" style="margin-top:6px">${t('top5PlayersHint')}</div></div><button class="btn" onclick="go('players')">${t('players')}</button></div>
            ${top5Html}
          </div>
          <div class="card panel">
            <div class="panel-head-inline"><h2>${t('scheduledTasks')}</h2><button class="btn" onclick="go('tasks')">${t('open')}</button></div>
            <div class="help-text" style="margin-top:6px">${t('taskHelpText')}</div>
            <div class="empty-note" style="margin-top:10px">${t('liveUpdating')} · ${t('lastRefresh')}: ${escapeHtml(s.last_players_refresh || '-')}</div>
          </div>
        </div>
      </div>`;
  };
})();


/* ===== v45 repairs: sin fondo, sin bot externo, refresco ligero, filtro de ruido ===== */
(function(){
  const NOISE_TOKENS = [
    'roboticinbox',
    'cntroboticinbox',
    'bloodmoonparty',
    'spawnzombie grp',
    'verified as a robotic inbox block',
    'storagemanager',
    '[roboticinbox.utilities.storagemanager]',
    'feralhordestage',
    'day/time '
  ];

  function kwJoinedHistoryText(row){
    return [
      row?.primary_name || '',
      ...(row?.names || []),
      ...(row?.steamids || []),
      ...(row?.eosids || []),
      ...(row?.entityids || []),
      row?.last_raw || ''
    ].join(' | ').toLowerCase();
  }

  function kwLooksLikeTimestampName(name){
    const txt = String(name || '').trim();
    if (!txt) return true;
    return /^\d{2}-\d{2}t\d{2}:\d{2}:\d{2}/i.test(txt) || /^\d{4}-\d{2}-\d{2}t\d{2}:\d{2}:\d{2}/i.test(txt);
  }

  function kwIsNoiseHistoryRow(row){
    if (!row || typeof row !== 'object') return true;
    const joined = kwJoinedHistoryText(row);
    if (NOISE_TOKENS.some(token => joined.includes(token))) return true;
    const hasIds = [...(row.steamids || []), ...(row.eosids || []), ...(row.entityids || [])].some(v => String(v || '').trim());
    const pos = row.last_position || {};
    const hasPos = Number.isFinite(Number(pos.x)) || Number.isFinite(Number(pos.z)) || String(pos.text || '').trim() && String(pos.text || '').trim() !== '-';
    if (!hasIds && !hasPos && kwLooksLikeTimestampName(row.primary_name || '')) return true;
    return false;
  }

  function kwIsNoisePlayerRow(player){
    if (!player || typeof player !== 'object') return true;
    const joined = [player.name || '', player.raw || '', player.steamid || '', player.eosid || '', player.entityid || ''].join(' | ').toLowerCase();
    if (NOISE_TOKENS.some(token => joined.includes(token))) return true;
    const hasIds = [player.steamid, player.eosid, player.entityid].some(v => String(v || '').trim());
    const hasPos = Number.isFinite(Number(player.x)) || Number.isFinite(Number(player.z));
    const hasName = String(player.name || '').trim();
    if (!hasName) return true;
    if (!hasIds && !hasPos && kwLooksLikeTimestampName(player.name || '')) return true;
    return false;
  }

  function kwFilterHistoryRows(rows){
    return (Array.isArray(rows) ? rows : []).filter(row => !kwIsNoiseHistoryRow(row));
  }

  function kwFilterPlayers(rows){
    return (Array.isArray(rows) ? rows : []).filter(row => !kwIsNoisePlayerRow(row));
  }

  function kwHideBotUi(){
    try {
      const idx = sectionKeys.indexOf('discordbot');
      if (idx >= 0) sectionKeys.splice(idx, 1);
      const fidx = footerSectionKeys.indexOf('discordbot');
      if (fidx >= 0) footerSectionKeys.splice(fidx, 1);
    } catch (_) {}
    ['btnStartBotTop','btnStopBotTop'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.remove();
    });
    document.querySelectorAll('#menu button, #sidebarFooter button').forEach(btn => {
      const txt = String(btn.textContent || '').trim().toLowerCase();
      if (txt === 'bot externo' || txt === 'external bot') btn.remove();
    });
    if (state.section === 'discordbot') state.section = 'dashboard';
  }

  const _kwGoV45 = go;
  go = function(section){
    if (section === 'discordbot') section = 'dashboard';
    return _kwGoV45(section);
  };

  const _kwBuildMenuV45 = buildMenu;
  buildMenu = function(){
    kwHideBotUi();
    return _kwBuildMenuV45();
  };

  const _kwRenderStaticTextsV45 = renderStaticTexts;
  renderStaticTexts = function(){
    const out = _kwRenderStaticTextsV45();
    kwHideBotUi();
    return out;
  };

  const _kwLoadPlayersHistoryListV45 = loadPlayersHistoryList;
  loadPlayersHistoryList = async function(silent = true){
    try {
      const res = await api('/api/players/history');
      state.playerHistoryList = kwFilterHistoryRows(res.data || []);
      if (!silent && ['players','inventory','moderation'].includes(state.section)) render(true);
    } catch (err) {
      if (!silent) toast(err.message, true);
    }
  };

  const _kwRefreshPlayersV45 = refreshPlayers;
  refreshPlayers = async function(silent = false){
    if (!silent) {
      try {
        const res = await api('/api/players/refresh', 'POST', {});
        state.state = state.state || {};
        state.state.players_cache = kwFilterPlayers(res.data || []);
        state.state.last_players_refresh = new Date().toISOString().slice(0,19).replace('T',' ');
        await loadPlayersHistoryList(true);
        await loadPlayerProfile(true);
        render(true);
        toast(res.message || t('panelUpdated'));
      } catch (err) {
        toast(err.message, true);
      }
      return;
    }
    try {
      const res = await api('/api/players/refresh', 'POST', {});
      state.state = state.state || {};
      state.state.players_cache = kwFilterPlayers(res.data || []);
      state.state.last_players_refresh = new Date().toISOString().slice(0,19).replace('T',' ');
      await loadPlayersHistoryList(true);
      await loadPlayerProfile(true);
      if (['players','inventory','moderation'].includes(state.section)) render(true);
    } catch (_) {}
  };

  const _kwRefreshStateV45 = refreshState;
  refreshState = async function(silent = false){
    if (!silent) return _kwRefreshStateV45(false);
    try {
      const st = await api('/api/state');
      state.state = st.data || {};
      state.state.players_cache = kwFilterPlayers(state.state.players_cache || []);
      state.lang = (state.state?.config?.language || state.lang || 'es');
      if (['players','inventory','moderation'].includes(state.section)) {
        await loadPlayersHistoryList(true);
        if (state.historySelectedKey || state.selectedPlayerIndex !== null) await loadPlayerProfile(true);
      }
      render(true);
    } catch (_) {}
  };

  const _kwRenderV45 = render;
  render = function(preserveScroll = false){
    const out = _kwRenderV45(preserveScroll);
    kwHideBotUi();
    return out;
  };

  const _kwDashboardV45 = views.dashboard;
  views.dashboard = function(){
    const s = state.state || {};
    const perf = s.performance || {};
    const config = s.config || {};
    const autoRestartLabel = config.auto_restart_enabled ? `${t('enabled')} · ${config.auto_restart_delay_seconds || 15}s` : t('disabled');
    const startedAt = s.started_at ? formatDateTime(s.started_at) : '-';
    const recentLines = (s.console_lines || []).slice(-10);
    const players = kwFilterPlayers((s.players_cache || []).slice(0, 5));
    const top5Html = players.length ? `
      <div class="mini-log">${players.map((p, idx) => `
        <div class="mini-log-row">
          <strong>${escapeHtml(playerDisplayName(p))}</strong>
          <span>${escapeHtml(playerSteamText(p))}</span>
          <small>#${idx + 1} · ${escapeHtml(playerPosText(p))}</small>
        </div>`).join('')}</div>` : `<div class="empty-note">${t('noOnlinePlayersTop5')}</div>`;
    return `
      <div class="grid">
        <div class="stats stats-6">
          <div class="stat card"><small>${t('status')}</small><strong>${s.running ? t('on') : t('off')}</strong></div>
          <div class="stat card"><small>${t('playersOnline')}</small><strong>${kwFilterPlayers(s.players_cache || []).length}</strong></div>
          <div class="stat card"><small>${t('pid')}</small><strong>${s.pid || '-'}</strong></div>
          <div class="stat card"><small>${t('startedAt')}</small><strong>${startedAt}</strong></div>
          <div class="stat card"><small>${t('autoRestart')}</small><strong>${autoRestartLabel}</strong></div>
          <div class="stat card"><small>${t('perfHostCpu')}</small><strong>${typeof kwFormatPercent === 'function' ? kwFormatPercent(perf.host_cpu_percent) : '-'}</strong></div>
        </div>
        ${typeof kwPerformanceGrid === 'function' ? kwPerformanceGrid(perf) : ''}
        <div class="grid grid-2">
          <div class="card panel">
            <div class="panel-head-inline"><h2>${t('generalStatus')}</h2><span class="badge ${s.running ? 'ok' : 'off'}">${s.running ? t('serverOn') : t('serverOff')}</span></div>
            <div class="label-grid">
              <div>${t('serverFolder')}</div><div>${escapeHtml(config.server_folder || '-')}</div>
              <div>${t('executable')}</div><div>${escapeHtml(config.executable_path || '-')}</div>
              <div>${t('workingFolder')}</div><div>${escapeHtml(config.working_directory || '-')}</div>
              <div>${t('realXml')}</div><div>${escapeHtml(config.xml_path || '-')}</div>
              <div>${t('backupFolder')}</div><div>${escapeHtml(config.backup_folder || '-')}</div>
              <div>${t('inventoryIconsStatus')}</div><div>${escapeHtml(config.item_icons_folder || t('noIconsFolder'))}</div>
              <div>${t('telnet')}</div><div>${escapeHtml(config.telnet_host || '-')} : ${escapeHtml(config.telnet_port || '-')}</div>
              <div>${t('panelAddress')}</div><div>${escapeHtml(config.panel_host || '-')} : ${escapeHtml(config.panel_port || '-')}</div>
            </div>
            <div class="inline-actions wrap-actions" style="margin-top:14px"><button class="btn" onclick="go('backups')">${t('backups')}</button><button class="btn" onclick="go('tasks')">${t('scheduledTasks')}</button><button class="btn" onclick="go('inventory')">${t('inventory')}</button><button class="btn" onclick="openExternalMap()">${t('openMapLink')}</button></div>
          </div>
          <div class="card panel">
            <h2>${t('recentActivity')}</h2>
            <div class="console-box compact-box"><div class="console-output">${recentLines.length ? escapeHtml(recentLines.join('\\n')) : `<span class="empty-note">${t('noRecentEvents')}</span>`}</div></div>
            <div class="help-text" style="margin-top:10px">${t('autoRefreshEvery15')}</div>
          </div>
        </div>
        <div class="grid grid-2">
          <div class="card panel">
            <div class="panel-head-inline"><div><h2>${t('top5Players')}</h2><div class="help-text" style="margin-top:6px">${t('top5PlayersHint')}</div></div><button class="btn" onclick="go('players')">${t('players')}</button></div>
            ${top5Html}
          </div>
          <div class="card panel">
            <div class="panel-head-inline"><h2>${t('scheduledTasks')}</h2><button class="btn" onclick="go('tasks')">${t('open')}</button></div>
            <div class="help-text" style="margin-top:6px">${t('taskHelpText')}</div>
            <div class="empty-note" style="margin-top:10px">${t('liveUpdating')} · ${t('lastRefresh')}: ${escapeHtml(s.last_players_refresh || '-')}</div>
          </div>
        </div>
      </div>`;
  };

  if (window.__kwSoftAutoRefreshTimer) {
    clearInterval(window.__kwSoftAutoRefreshTimer);
    window.__kwSoftAutoRefreshTimer = null;
  }
  window.__kwSoftAutoRefreshTimer = setInterval(async () => {
    try {
      if (document.hidden) return;
      if ((Date.now() < Number(state._editingNowUntil || 0))) return;
      if (document.querySelector('.kw-bot-modal-backdrop')) return;
      await refreshState(true);
      if (state.section === 'backups') await loadBackups(true);
    } catch (_) {}
  }, 15000);
})();



/* ===== KW final cleanup backup in app.js: remove external bot + web map ===== */
(function(){
  function kwMenuCleanup(){
    try{
      if (Array.isArray(window.KW_SECTION_OPTIONS)) {
        window.KW_SECTION_OPTIONS = window.KW_SECTION_OPTIONS.filter(k => !['discordbot','liveMap','openMap','__map__'].includes(String(k)));
      }
      if (window.authState) {
        if (Array.isArray(authState.sections_catalog)) authState.sections_catalog = authState.sections_catalog.filter(k => !['discordbot','liveMap','openMap','__map__'].includes(String(k)));
        if (Array.isArray(authState.actions_catalog)) authState.actions_catalog = authState.actions_catalog.filter(r => {
          const key = String((r && r.key) || '');
          return !/^discordbot\./i.test(key) && key !== 'map.open';
        });
      }
    }catch(_){}
  }
  openExternalMap = function(){ return false; };
  const _kwOldMenuLabel = typeof menuLabel === 'function' ? menuLabel : null;
  menuLabel = function(key){
    if (String(key) === 'discordbot') return '';
    const map = {
      dashboard:'generalStatus',
      server:'logsTitle',
      console:'console',
      players:'players',
      inventory:'inventory',
      moderation:'moderation',
      backups:'backups',
      tasks:'scheduledTasks',
      serverconfig:'serverconfig',
      settings:'settings',
      notifications:'notifications',
      access:'access',
      helpdocs:'helpGuide'
    };
    return t(map[key] || key);
  };
  buildMenu = function(){
    kwMenuCleanup();
    const ordered = ['dashboard','server','console','players','inventory','moderation','backups','tasks','serverconfig','settings','notifications','access'];
    const visibleKeys = ordered.filter(key => typeof canAccessSection === 'function' ? canAccessSection(key) : true);
    if ((typeof canAccessSection === 'function' ? canAccessSection('helpdocs') : true) && !visibleKeys.includes('helpdocs')) visibleKeys.push('helpdocs');
    if (!visibleKeys.includes(state.section)) state.section = visibleKeys[0] || 'dashboard';
    $('menu').innerHTML = visibleKeys.map(key => `<button data-section="${key}" class="${state.section === key ? 'active' : ''}" onclick="go('${key}')"><span class="menu-icon" aria-hidden="true"></span><span class="menu-label">${menuLabel(key)}</span></button>`).join('');
    if ($('sidebarFooter')) $('sidebarFooter').innerHTML = authState.auth_enabled && authState.logged_in ? `<button data-section="logout" onclick="panelLogout()"><span class="menu-icon" aria-hidden="true"></span><span class="menu-label">${t('logoutButton')}</span></button>` : '';
  };
})();

