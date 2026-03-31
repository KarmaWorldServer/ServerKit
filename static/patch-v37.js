(function(){
  Object.assign(T.es, {
    remove: 'Borrar',
    restore: 'Restaurar',
    refreshList: 'Actualizar lista',
    performanceMonitor: 'Monitor de rendimiento',
    startWithWindowsManager: 'Arrancar manager con Windows',
    startServerWithManager: 'Iniciar servidor al abrir el manager',
    saveStartupOptions: 'Guardar arranque',
    startupOptions: 'Inicio automático',
    startupOptionsHint: 'Puedes hacer que el manager arranque con Windows y, si quieres, que al abrirse arranque también el servidor.',
    inventoryPlayersWithSnapshots: 'Jugadores con snapshots guardados',
    inventorySelectHint: 'Pulsa un jugador del historial para ver directamente su último inventario guardado, aunque esté offline.',
    inventoryLatestSnapshot: 'Último snapshot guardado',
    inventoryLiveRead: 'Inventario en vivo',
    inventorySnapshotView: 'Último snapshot',
    inventoryNoSnapshot: 'Ese jugador todavía no tiene snapshots guardados.',
    inventoryClickPlayer: 'Selecciona un jugador de la lista para ver su inventario.',
    moderationPlayerPicker: 'Jugador para moderación',
    moderationPlayerPickerHint: 'Aquí tienes toda la lista de jugadores online e históricos para elegir rápido.',
    moderationChoosePlayer: 'Elegir jugador',
    botsTopChooserTitle: 'Elige qué bot quieres controlar',
    botsTopStartAll: 'Iniciar todos',
    botsTopStopAll: 'Parar todos',
    botsTopPrimary: 'Bot principal',
    botsTopNoBots: 'No hay bots configurados.',
    chooseBotToStart: 'Elige qué bot quieres iniciar',
    chooseBotToStop: 'Elige qué bot quieres parar',
    chooseBotToRestart: 'Elige qué bot quieres reiniciar',
    close: 'Cerrar',
    startTopChooser: 'Iniciar bot',
    stopTopChooser: 'Parar bot',
    primaryTopAutostart: 'Iniciar con botón superior',
    primaryAutoStartWithServer: 'Iniciar con el servidor',
    botWindowsStart: 'Arrancar con Windows',
    managerWindowsStart: 'Arrancar manager con Windows',
    botsPanelTitle: 'Bots externos múltiples',
    botsPanelHint: 'Aquí configuras el bot principal y los bots adicionales. Desde los botones superiores eliges cuál arrancar o parar.',
    primaryBotTitle: 'Bot principal',
    extraBotsTitle: 'Bots adicionales',
    addBot: 'Añadir bot',
    saveBots: 'Guardar bots',
    botName: 'Nombre',
    botEntry: 'Archivo de arranque',
    botEnabled: 'Activo',
    botAutoStart: 'Iniciar con botón superior',
    botWithServer: 'Iniciar con el servidor',
    noExtraBots: 'No hay bots adicionales todavía.',
    selectPlayerFromList: 'Seleccionar jugador',
    recentSnapshot: 'Últimos snapshots',
    moderationTitleShort: 'Moderación',
    performanceHostCpu: 'CPU host',
    performanceHostRam: 'RAM host',
    performanceDisk: 'Disco servidor',
    performanceManagerUptime: 'Uptime manager',
    performanceServerUptime: 'Uptime servidor',
    performanceManagerRam: 'RAM manager',
    performanceServerRam: 'RAM servidor',
    inventoryOnlineOfflineTitle: 'Inventario online / offline',
    inventoryPanelTitle: 'Inventario',
    inventoryPanelText: 'Aquí puedes ver el inventario en vivo o la última captura guardada del jugador seleccionado.',
    statusOnline: 'Online'
  });
  Object.assign(T.en, {
    remove: 'Delete',
    restore: 'Restore',
    refreshList: 'Refresh list',
    performanceMonitor: 'Performance',
    startWithWindowsManager: 'Start manager with Windows',
    startServerWithManager: 'Start server when manager opens',
    saveStartupOptions: 'Save startup',
    startupOptions: 'Automatic startup',
    startupOptionsHint: 'Make the manager start with Windows and optionally start the server when the manager opens.',
    inventoryPlayersWithSnapshots: 'Players with saved snapshots',
    inventorySelectHint: 'Click a history player to view the latest saved inventory even while offline.',
    inventoryLatestSnapshot: 'Latest saved snapshot',
    inventoryLiveRead: 'Live inventory',
    inventorySnapshotView: 'Latest snapshot',
    inventoryNoSnapshot: 'This player has no saved snapshots yet.',
    inventoryClickPlayer: 'Select a player to view inventory.',
    moderationPlayerPicker: 'Moderation player',
    moderationPlayerPickerHint: 'Choose any online or history player from one dark dropdown.',
    moderationChoosePlayer: 'Choose player',
    botsTopChooserTitle: 'Choose which bot to control',
    botsTopStartAll: 'Start all',
    botsTopStopAll: 'Stop all',
    botsTopPrimary: 'Primary bot',
    botsTopNoBots: 'No bots configured.',
    chooseBotToStart: 'Choose which bot to start',
    chooseBotToStop: 'Choose which bot to stop',
    chooseBotToRestart: 'Choose which bot to restart',
    startTopChooser: 'Start bot',
    stopTopChooser: 'Stop bot',
    primaryTopAutostart: 'Start with top button',
    primaryAutoStartWithServer: 'Start with server',
    botWindowsStart: 'Start with Windows',
    managerWindowsStart: 'Start manager with Windows',
    botsPanelTitle: 'Multiple external bots',
    botsPanelHint: 'Configure the primary bot and extra bots here. The top buttons let you choose which bot to start or stop.',
    primaryBotTitle: 'Primary bot',
    extraBotsTitle: 'Additional bots',
    addBot: 'Add bot',
    saveBots: 'Save bots',
    botName: 'Name',
    botEntry: 'Startup file',
    botEnabled: 'Enabled',
    botAutoStart: 'Start with top button',
    botWithServer: 'Start with server',
    noExtraBots: 'No additional bots yet.',
    selectPlayerFromList: 'Select player',
    recentSnapshot: 'Recent snapshots',
    moderationTitleShort: 'Moderation',
    performanceHostCpu: 'Host CPU',
    performanceHostRam: 'Host RAM',
    performanceDisk: 'Server disk',
    performanceManagerUptime: 'Manager uptime',
    performanceServerUptime: 'Server uptime',
    performanceManagerRam: 'Manager RAM',
    performanceServerRam: 'Server RAM',
    inventoryOnlineOfflineTitle: 'Online / offline inventory',
    inventoryPanelTitle: 'Inventory',
    inventoryPanelText: 'Here you can view the live inventory or the latest saved snapshot of the selected player.',
    statusOnline: 'Online'
  });

  const esc = v => (typeof escapeHtml === 'function' ? escapeHtml(v ?? '') : String(v ?? ''));
  const fmtNum = n => Number.isFinite(Number(n)) ? Number(n) : null;
  const fmtPct = v => (Number.isFinite(Number(v)) ? `${Number(v).toFixed(1)}%` : '-');
  const fmtGb = v => (Number.isFinite(Number(v)) ? `${Number(v).toFixed(2)} GB` : '-');
  const fmtMem = m => m ? `${fmtGb(m.used_gb)} / ${fmtGb(m.total_gb)} · ${fmtPct(m.percent)}` : '-';
  const fmtDisk = d => d ? `${fmtGb(d.used_gb)} / ${fmtGb(d.total_gb)} · ${fmtPct(d.percent)}` : '-';
  const fmtProc = m => m ? fmtGb(m.rss_gb) : '-';
  function fmtUp(seconds){ const n = Number(seconds); if(!Number.isFinite(n) || n < 0) return '-'; const d=Math.floor(n/86400), h=Math.floor((n%86400)/3600), m=Math.floor((n%3600)/60); if(d>0) return `${d}d ${h}h ${m}m`; if(h>0) return `${h}h ${m}m`; return `${m}m`; }

  function injectStyles(){
    if(document.getElementById('kw-v38-styles')) return;
    const css = `
      .kw-dark-select, .kw-dark-select option{background:#08101b;color:#eef5ff;border:1px solid rgba(120,150,190,.22)}
      .kw-player-pick-grid{display:grid;grid-template-columns:minmax(260px,340px) 1fr;gap:18px}
      .kw-player-list{max-height:520px;overflow:auto;display:flex;flex-direction:column;gap:8px;padding-right:4px}
      .kw-player-row{display:flex;justify-content:space-between;gap:10px;align-items:center;background:rgba(5,12,24,.55);border:1px solid rgba(113,151,196,.14);padding:10px 12px;border-radius:14px;color:#eef5ff;cursor:pointer}
      .kw-player-row.active{border-color:rgba(96,163,255,.55);box-shadow:0 0 0 1px rgba(96,163,255,.25) inset}
      .kw-player-row small{display:block;color:#a8b9cf;line-height:1.35}
      .kw-player-row .badge{white-space:nowrap}
      .kw-startup-card .inline-actions{margin-top:14px;align-items:center;flex-wrap:wrap}
      .kw-check-chip{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:14px;background:rgba(5,12,24,.45);border:1px solid rgba(113,151,196,.14)}
      .kw-check-chip input{width:18px;height:18px}
      .kw-bot-modal-backdrop{position:fixed;inset:0;background:rgba(2,6,12,.68);display:flex;align-items:center;justify-content:center;z-index:9999;padding:20px}
      .kw-bot-modal{max-width:760px;width:100%;background:linear-gradient(180deg,#071221,#08172a);border:1px solid rgba(113,151,196,.18);border-radius:22px;padding:18px;box-shadow:0 18px 70px rgba(0,0,0,.45)}
      .kw-bot-modal .list{display:flex;flex-direction:column;gap:10px;margin-top:14px}
      .kw-bot-modal .row{display:flex;justify-content:space-between;gap:12px;align-items:center;padding:12px 14px;border-radius:16px;background:rgba(255,255,255,.03);border:1px solid rgba(113,151,196,.12)}
      .kw-bot-modal .row .meta{display:flex;flex-direction:column;gap:4px}
      .kw-mini-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:14px}
      .kw-mini-stat{padding:18px 18px 16px}
      .kw-mini-stat small{display:block;color:#b6c4d9;text-transform:uppercase;letter-spacing:.04em;margin-bottom:8px}
      .kw-mini-stat strong{font-size:18px;line-height:1.2;display:block}
      .kw-inventory-snapshots-list{display:flex;flex-direction:column;gap:8px;margin-top:12px}
      .kw-inventory-snapshots-list button{width:100%;text-align:left}
      @media (max-width: 1100px){ .kw-player-pick-grid{grid-template-columns:1fr} }
    `;
    const style=document.createElement('style'); style.id='kw-v38-styles'; style.textContent=css; document.head.appendChild(style);
  }

  function clearVersionMarkers(){
    const eye=document.getElementById('eyebrow'); if(eye) eye.textContent=t('eyebrow');
    const sub=document.getElementById('heroSubtitle'); if(sub){ sub.textContent=t('heroSubtitle'); }
    const backupBtn=document.getElementById('btnBackupTop'); if(backupBtn) backupBtn.style.display='none';
    const startBotBtn=document.getElementById('btnStartBotTop'); if(startBotBtn) startBotBtn.textContent=t('startTopChooser');
    const stopBotBtn=document.getElementById('btnStopBotTop'); if(stopBotBtn) stopBotBtn.textContent=t('stopTopChooser');
  }

  const _renderStaticTexts = renderStaticTexts;
  renderStaticTexts = function(){
    const out = _renderStaticTexts.apply(this, arguments);
    injectStyles();
    clearVersionMarkers();
    return out;
  };
  const _render = render;
  render = function(preserve){ const out = _render(preserve); setTimeout(()=>{injectStyles(); clearVersionMarkers();},0); return out; };

  function ensurePlayersHistoryFresh(){
    if (typeof loadPlayersHistoryList === 'function') loadPlayersHistoryList(true).catch(()=>{});
    if (typeof loadPlayerProfile === 'function') loadPlayerProfile(true).catch(()=>{});
  }
  const _refreshState = refreshState;
  refreshState = async function(silent){ const out = await _refreshState(silent); if(state.section==='inventory' || state.section==='moderation') ensurePlayersHistoryFresh(); setTimeout(clearVersionMarkers,0); return out; };
  const _go = go;
  go = function(section){ const out = _go(section); if(section==='inventory' || section==='moderation'){ setTimeout(ensurePlayersHistoryFresh,80); } return out; };

  function performanceCardsHtml(){
    const p = (state.state && state.state.performance) || {};
    const cards = [
      [t('performanceHostCpu'), fmtPct(p.host_cpu_percent)],
      [t('performanceHostRam'), fmtMem(p.host_memory)],
      [t('performanceDisk'), fmtDisk(p.disk)],
      [t('performanceManagerUptime'), fmtUp(p.manager_uptime_seconds)],
      [t('performanceServerUptime'), fmtUp(p.server_uptime_seconds)],
      [t('performanceManagerRam'), fmtProc(p.manager_memory)],
      [t('performanceServerRam'), fmtProc(p.server_memory)],
    ];
    return `<div class="kw-mini-stats">${cards.map(([label,val])=>`<div class="stat card kw-mini-stat"><small>${label}</small><strong>${esc(val)}</strong></div>`).join('')}</div>`;
  }

  async function saveStartupFlags(){
    try {
      const payload = {
        start_with_windows_manager: !!document.getElementById('startupManagerWindows')?.checked,
        start_server_with_manager: !!document.getElementById('startupServerWithManager')?.checked
      };
      const res = await api('/api/config/save', 'POST', payload);
      toast(res.message || t('settingsSaved'));
      await refreshState(true);
      go('dashboard');
    } catch(err){ toast(err.message, true); }
  }
  window.saveStartupFlags = saveStartupFlags;

  function startupOptionsHtml(){
    const cfg = (state.state && state.state.config) || {};
    return `<div class="card panel kw-startup-card"><h2>${t('startupOptions')}</h2><div class="help-text" style="margin-top:6px">${t('startupOptionsHint')}</div><div class="inline-actions"><label class="kw-check-chip"><input id="startupManagerWindows" type="checkbox" ${cfg.start_with_windows_manager ? 'checked' : ''}><span>${t('startWithWindowsManager')}</span></label><label class="kw-check-chip"><input id="startupServerWithManager" type="checkbox" ${cfg.start_server_with_manager ? 'checked' : ''}><span>${t('startServerWithManager')}</span></label><button class="btn btn-primary" onclick="saveStartupFlags()">${t('saveStartupOptions')}</button></div></div>`;
  }

  views.dashboard = function(){
    const s = state.state || {};
    const config = s.config || {};
    const autoRestartLabel = config.auto_restart_enabled ? `${t('enabled')} · ${config.auto_restart_delay_seconds || 15}s` : t('disabled');
    const startedAt = s.started_at ? formatDateTime(s.started_at) : '-';
    const recentLines = (s.console_lines || []).slice(-12);
    return `
      <div class="grid">
        <div class="stats stats-6">
          <div class="stat card"><small>${t('status')}</small><strong>${s.running ? t('on') : t('off')}</strong></div>
          <div class="stat card"><small>${t('playersOnline')}</small><strong>${(s.players_cache || []).length}</strong></div>
          <div class="stat card"><small>${t('pid')}</small><strong>${s.pid || '-'}</strong></div>
          <div class="stat card"><small>${t('startedAt')}</small><strong>${startedAt}</strong></div>
          <div class="stat card"><small>${t('autoRestart')}</small><strong>${autoRestartLabel}</strong></div>
        </div>
        ${performanceCardsHtml()}
        <div class="grid grid-2">
          <div class="card panel">
            <div class="panel-head-inline"><h2>${t('generalStatus')}</h2><span class="badge ${s.running ? 'ok' : 'off'}">${s.running ? t('serverOn') : t('serverOff')}</span></div>
            <div class="label-grid">
              <div>${t('serverFolder')}</div><div>${esc(config.server_folder || '-')}</div>
              <div>${t('executable')}</div><div>${esc(config.executable_path || '-')}</div>
              <div>${t('workingFolder')}</div><div>${esc(config.working_directory || '-')}</div>
              <div>${t('realXml')}</div><div>${esc(config.xml_path || '-')}</div>
              <div>${t('backupFolder')}</div><div>${esc(config.backup_folder || '-')}</div>
              <div>${t('inventoryIconsStatus')}</div><div>${esc(config.item_icons_folder || t('noIconsFolder'))}</div>
              <div>${t('telnet')}</div><div>${esc(config.telnet_host || '-')} : ${esc(config.telnet_port || '-')}</div>
              <div>${t('panelAddress')}</div><div>${esc(config.panel_host || '-')} : ${esc(config.panel_port || '-')}</div>
            </div>
            <div class="inline-actions" style="margin-top:14px"><button class="btn" onclick="go('backups')">${t('backups')}</button><button class="btn" onclick="go('tasks')">${t('scheduledTasks')}</button><button class="btn" onclick="go('inventory')">${t('inventory')}</button></div>
          </div>
          <div class="card panel">
            <h2>${t('recentActivity')}</h2>
            <div class="console-box compact-box"><div class="console-output">${recentLines.length ? esc(recentLines.join('\n')) : `<span class="empty-note">${t('noRecentEvents')}</span>`}</div></div>
          </div>
        </div>
        ${startupOptionsHtml()}
      </div>`;
  };

  function currentProfileRecord(){ return state.playerProfile && state.playerProfile.record ? state.playerProfile.record : null; }
  function currentLatestSnapshot(){
    const rec = currentProfileRecord();
    const snaps = (rec && rec.inventory_snapshots) ? rec.inventory_snapshots : [];
    if (!snaps || !snaps.length) return null;
    const reversed = snaps.slice().reverse();
    const idx = Math.max(0, Math.min(Number(state.v38SnapshotIndex || 0), reversed.length - 1));
    return reversed[idx] || reversed[0];
  }
  function inventoryTargetPlayer(){
    if (state.historySelectedKey && currentProfileRecord()) return historyPlayerFromRecord(currentProfileRecord());
    return selectedPlayer();
  }
  function inventoryDetailHtml(){
    const player = inventoryTargetPlayer();
    const rec = currentProfileRecord();
    const liveData = player && !state.historySelectedKey ? currentInventoryData() : null;
    const latest = currentLatestSnapshot();
    const showData = liveData && !liveData.error ? liveData : latest;
    const sourceTitle = liveData && !liveData.error ? t('inventoryLiveRead') : t('inventorySnapshotView');
    if (!player && !rec) return `<div class="card panel"><div class="empty-note">${t('inventoryClickPlayer')}</div></div>`;
    if (!showData) return `<div class="card panel"><div class="panel-head-inline"><div><h2>${t('inventoryLatestSnapshot')}</h2></div><span class="badge default">${esc(rec?.primary_name || player?.name || '-')}</span></div><div class="empty-note" style="margin-top:14px">${t('inventoryNoSnapshot')}</div></div>`;
    const hasData = ((showData.belt && showData.belt.length) || (showData.bag && showData.bag.length) || (showData.equipment && Object.keys(showData.equipment).length));
    const snapshots = ((rec && rec.inventory_snapshots) || []).slice().reverse();
    return `<div class="card panel">
      <div class="panel-head-inline"><div><h2>${esc(rec?.primary_name || player?.name || '-')}</h2><div class="help-text" style="margin-top:6px">${sourceTitle}${showData.updated_at || showData.at ? ' · ' + esc(formatDateTime(showData.updated_at || showData.at)) : ''}</div></div><span class="badge ${state.historySelectedKey ? 'default':'ok'}">${state.historySelectedKey ? t('historyStatusOffline') : t('historyStatusOnline')}</span></div>
      ${hasData ? `<div class="kw-inv-panels" style="margin-top:12px"><div class="card panel inventory-panel compact-inv-panel"><h3>${t('belt')}</h3>${inventoryItemsHtml(showData.belt || [], t('inventoryEmptySection'))}</div><div class="card panel inventory-panel compact-inv-panel"><h3>${t('bag')}</h3>${inventoryItemsHtml(showData.bag || [], t('inventoryEmptySection'))}</div><div class="card panel inventory-panel compact-inv-panel"><h3>${t('equipment')}</h3>${inventoryEquipmentHtml(showData.equipment || {})}</div></div>` : `<div class="empty-note" style="margin-top:12px">${t('inventoryNoData')}</div>`}
      <div class="inline-actions wrap-actions" style="margin-top:14px">${!state.historySelectedKey ? `<button class="btn btn-primary" onclick="loadPlayerInventory()">${t('inventoryLoad')}</button>` : ''}<button class="btn" onclick="go('moderation')">${t('moderation')}</button></div>
      ${snapshots.length > 1 ? `<div class="kw-inventory-snapshots-list">${snapshots.slice(0,8).map((row, idx)=>`<button class="btn ${idx===0 ? 'btn-primary':''}" onclick="showSnapshotIndex(${idx})">${esc(formatDateTime(row.at || row.updated_at || '-'))} · ${esc(snapshotSummaryText(row))}</button>`).join('')}</div>` : ''}
    </div>`;
  }
  window.showSnapshotIndex = function(idx){
    state.v38SnapshotIndex = Number(idx) || 0;
    render(true);
  };

  function historySnapshotRows(){ return (state.playerHistoryList || []).filter(r => Number(r.snapshot_count || 0) > 0); }
  function inventorySidebarHtml(){
    const online = state.state?.players_cache || [];
    const historyRows = historySnapshotRows();
    return `<div class="card panel"><div class="panel-head-inline"><div><h2>${t('inventory')}</h2><div class="help-text" style="margin-top:6px">${t('inventorySelectHint')}</div></div><div class="inline-actions"><button class="btn" onclick="refreshPlayers()">${t('refreshPlayers')}</button></div></div><div class="kw-player-pick-grid"><div><h3>${t('playersOnline')}</h3><div class="kw-player-list">${online.length ? online.map((p, idx)=>`<button class="kw-player-row ${!state.historySelectedKey && state.selectedPlayerIndex===idx ? 'active':''}" onclick="v38PickOnline(${idx})"><span><strong>${esc(playerDisplayName(p))}</strong><small>${esc(playerSteamText(p))}</small></span><span class="badge ok">${t('historyStatusOnline')}</span></button>`).join('') : `<div class="empty-note">${t('inventoryNoOnlinePlayers')}</div>`}</div><h3 style="margin-top:18px">${t('inventoryPlayersWithSnapshots')}</h3><div class="kw-player-list">${historyRows.length ? historyRows.map(row=>`<button class="kw-player-row ${state.historySelectedKey===row.key ? 'active':''}" onclick="v38PickHistory('${String(row.key||'').replace(/'/g,"\\'")}')"><span><strong>${esc(row.primary_name || '-')}</strong><small>${esc(historyIdText(row))}</small></span><span class="badge default">${esc(String(row.snapshot_count || 0))}</span></button>`).join('') : `<div class="empty-note">${t('inventoryNoHistoryCandidates')}</div>`}</div></div><div>${inventoryDetailHtml()}</div></div></div>`;
  }
  window.v38PickOnline = function(idx){ state.v38SnapshotIndex = 0; state.historySelectedKey=''; selectPlayer(idx); setTimeout(()=>{ loadPlayerProfile(true); render(true); }, 40); };
  window.v38PickHistory = function(key){ state.v38SnapshotIndex = 0; state.historySelectedKey=key||''; state.selectedPlayerIndex=null; loadPlayerProfile(true).then(()=>render(true)); };

  // override inventory view fully using active profile / latest snapshot
  views.inventory = function(){ return `<div class="grid">${inventorySidebarHtml()}</div>`; };

  const _loadPlayerInventory = loadPlayerInventory;
  loadPlayerInventory = async function(silent=false){
    const target = inventoryTargetPlayer();
    if(!target){ if(!silent) toast(t('noPlayerSelected'), true); return; }
    try {
      const res = await api('/api/player/inventory', 'POST', { player: target });
      state.playerInventories[inventoryPlayerKey(target) || '__history_preview__'] = res.data || null;
      toast(res.message || t('inventoryReload'));
      await loadPlayerProfile(true);
      render(true);
    } catch(err){ toast(err.message, true); }
  };

  // moderation dropdown + cleaner layout
  function moderationPickerHtml(){
    const online = (state.state?.players_cache || []).map((p, idx)=>({value:`live:${idx}`, label:`${playerDisplayName(p)} · ${playerSteamText(p)}`}));
    const history = (state.playerHistoryList || []).map(r=>({value:`hist:${r.key}`, label:`${r.primary_name || '-'} · ${historyIdText(r)}`}));
    const currentValue = state.historySelectedKey ? `hist:${state.historySelectedKey}` : (Number.isInteger(state.selectedPlayerIndex) ? `live:${state.selectedPlayerIndex}` : '');
    return `<div class="card panel"><div class="panel-head-inline"><div><h2>${t('moderationTitle')}</h2><div class="help-text" style="margin-top:6px">${t('moderationPlayerPickerHint')}</div></div><div class="inline-actions"><button class="btn" onclick="refreshPlayers()">${t('refreshPlayers')}</button></div></div><div class="field"><label>${t('moderationPlayerPicker')}</label><select id="moderationPlayerPicker" class="kw-dark-select" onchange="v38ModerationSelect(this.value)"><option value="">${t('moderationChoosePlayer')}</option>${online.length ? `<optgroup label="${t('playersOnline')}">${online.map(row=>`<option value="${esc(row.value)}" ${currentValue===row.value ? 'selected':''}>${esc(row.label)}</option>`).join('')}</optgroup>`:''}${history.length ? `<optgroup label="${t('historyTitle')}">${history.map(row=>`<option value="${esc(row.value)}" ${currentValue===row.value ? 'selected':''}>${esc(row.label)}</option>`).join('')}</optgroup>`:''}</select></div></div>`;
  }
  window.v38ModerationSelect = function(value){
    const raw = String(value || '');
    if(!raw) return;
    if(raw.startsWith('live:')){ state.historySelectedKey=''; selectPlayer(Number(raw.split(':')[1]||0)); loadPlayerProfile(true).then(()=>render(true)); return; }
    if(raw.startsWith('hist:')){ state.historySelectedKey=raw.slice(5); state.selectedPlayerIndex=null; loadPlayerProfile(true).then(()=>render(true)); return; }
  };

  const _moderationViewBase = views.moderation;
  views.moderation = function(){
    const body = _moderationViewBase ? _moderationViewBase() : '';
    return `<div class="grid">${moderationPickerHtml()}${body}</div>`;
  };

  // bots page clean layout
  function ensureBotDraft(){
    const cfg = (state.state && state.state.bot_config) || {};
    const sig = JSON.stringify({list: cfg.external_bots || [], primary: cfg.external_bot_entry || '', msw: !!cfg.manager_start_with_windows, psw: !!cfg.primary_start_with_windows, pas: !!cfg.primary_auto_start_with_server});
    if(state._botDraftSig !== sig){ state._botDraftSig = sig; state._extraBotsDraft = JSON.parse(JSON.stringify(cfg.external_bots || [])); }
    return cfg;
  }
  window.v38AddBotRow = function(){ ensureBotDraft(); state._extraBotsDraft.push({name:'Bot', entry:'', enabled:true, auto_start_with_server:true, start_with_windows:false}); render(true); };
  window.v38RemoveBotRow = function(idx){ ensureBotDraft(); state._extraBotsDraft.splice(idx,1); render(true); };
  window.v38BrowseBotRow = function(idx){ browseField(`v38_bot_entry_${idx}`, 'bot_entry', t('selectBotFolder')); };
  window.v38BotActionOne = async function(botId, action){
    try{ const res = await api(`/api/bots/${action}`, 'POST', {id: botId}); toast(res.message || 'OK'); await refreshState(true); go('discordbot'); }catch(err){ toast(err.message, true); }
  };
  window.v38SaveBotsConfig = async function(){
    try{
      const cfg = ensureBotDraft();
      const payload = {
        external_bot_entry: document.getElementById('bot_external_bot_entry')?.value || '',
        primary_start_with_windows: !!document.getElementById('v38_primary_start_with_windows')?.checked,
        primary_auto_start_with_server: !!document.getElementById('v38_primary_auto_start_server')?.checked,
        external_bots: (state._extraBotsDraft || []).map((row, idx)=>({
          id: row.id || '',
          name: document.getElementById(`v38_bot_name_${idx}`)?.value || row.name || `Bot ${idx+1}`,
          entry: document.getElementById(`v38_bot_entry_${idx}`)?.value || '',
          enabled: !!document.getElementById(`v38_bot_enabled_${idx}`)?.checked,
          auto_start_with_server: !!document.getElementById(`v38_bot_auto_${idx}`)?.checked,
          start_with_windows: !!document.getElementById(`v38_bot_windows_${idx}`)?.checked,
        }))
      };
      const res = await api('/api/bot/config/save', 'POST', payload);
      toast(res.message || t('saved'));
      state._botDraftSig='';
      await refreshState(true);
      go('discordbot');
    } catch(err){ toast(err.message, true); }
  };

  views.discordbot = function(){
    const cfg = ensureBotDraft();
    const extras = state._extraBotsDraft || [];
    const statuses = (state.state && state.state.external_bots_status) || [];
    const statusMap = Object.fromEntries(statuses.map(x => [String(x.id||''), x]));
    return `<div class="grid">
      <div class="card panel"><div class="panel-head-inline"><div><h2>${t('botsPanelTitle')}</h2><div class="help-text" style="margin-top:6px">${t('botsPanelHint')}</div></div><div class="inline-actions"><button class="btn" onclick="v38AddBotRow()">${t('addBot')}</button><button class="btn btn-primary" onclick="v38SaveBotsConfig()">${t('saveBots')}</button></div></div></div>
      <div class="grid grid-2">
        <div class="card panel"><h2>${t('primaryBotTitle')}</h2><div class="input-grid">${fieldBrowse('bot_external_bot_entry', t('botEntry'), cfg.external_bot_entry || '', 'bot_entry', t('selectBotFolder'))}<div class="field"><label>${t('status')}</label><input value="${esc(state.state?.bot_running ? t('on') : (cfg.external_bot_entry ? t('off') : '-'))}" disabled></div></div><div class="inline-actions wrap-actions" style="margin-top:14px"><label class="kw-check-chip"><input id="v38_primary_start_with_windows" type="checkbox" ${cfg.primary_start_with_windows ? 'checked' : ''}><span>${t('botWindowsStart')}</span></label><label class="kw-check-chip"><input id="v38_primary_auto_start_server" type="checkbox" ${cfg.primary_auto_start_with_server !== false ? 'checked' : ''}><span>${t('primaryAutoStartWithServer')}</span></label><button class="btn btn-primary" onclick="v38BotActionOne('primary','start')">${t('start')}</button><button class="btn" onclick="v38BotActionOne('primary','restart')">${t('restart')}</button><button class="btn btn-danger" onclick="v38BotActionOne('primary','stop')">${t('stop')}</button></div></div>
        <div class="card panel"><h2>${t('extraBotsTitle')}</h2>${extras.length ? extras.map((row, idx)=>{ const st = statusMap[String(row.id||'')] || {}; return `<div class="card" style="padding:12px;margin-bottom:12px"><div class="grid grid-2"><div class="field"><label>${t('botName')}</label><input id="v38_bot_name_${idx}" value="${esc(row.name || '')}"></div><div class="field"><label>${t('status')}</label><input value="${esc(st.running ? t('on') : t('off'))}" disabled></div></div><div class="field" style="margin-top:10px"><label>${t('botEntry')}</label><div class="inline-actions"><input id="v38_bot_entry_${idx}" value="${esc(row.entry || '')}" style="flex:1"><button class="btn" type="button" onclick="v38BrowseBotRow(${idx})">...</button></div></div><div class="inline-actions wrap-actions" style="margin-top:10px"><label class="kw-check-chip"><input id="v38_bot_enabled_${idx}" type="checkbox" ${row.enabled !== false ? 'checked' : ''}><span>${t('botEnabled')}</span></label><label class="kw-check-chip"><input id="v38_bot_auto_${idx}" type="checkbox" ${row.auto_start_with_server !== false ? 'checked' : ''}><span>${t('botWithServer')}</span></label><label class="kw-check-chip"><input id="v38_bot_windows_${idx}" type="checkbox" ${row.start_with_windows ? 'checked' : ''}><span>${t('botWindowsStart')}</span></label></div><div class="inline-actions wrap-actions" style="margin-top:10px"><button class="btn btn-primary" type="button" onclick="v38BotActionOne('${esc(row.id || '')}','start')">${t('start')}</button><button class="btn" type="button" onclick="v38BotActionOne('${esc(row.id || '')}','restart')">${t('restart')}</button><button class="btn btn-danger" type="button" onclick="v38BotActionOne('${esc(row.id || '')}','stop')">${t('stop')}</button><button class="btn btn-danger" type="button" onclick="v38RemoveBotRow(${idx})">${t('remove')}</button></div></div>`; }).join('') : `<div class="empty-note">${t('noExtraBots')}</div>`}</div>
      </div>
    </div>`;
  };

  function botsCatalog(){
    const cfg = (state.state && state.state.bot_config) || {};
    const extras = (state.state && state.state.external_bots_status) || [];
    const rows = [];
    if(String(cfg.external_bot_entry || '').trim()) rows.push({id:'primary', name:t('botsTopPrimary'), subtitle:cfg.external_bot_entry || '', running: !!state.state?.bot_running});
    extras.forEach(row=>{ if(row && row.id) rows.push({id:String(row.id), name: row.name || row.id, subtitle: row.entry || '', running: !!row.running}); });
    return rows;
  }
  window.closeBotChooser = function(){ const el=document.getElementById('kwBotChooser'); if(el) el.remove(); };
  window.v38BotChooserAction = async function(id, action){
    try {
      let res;
      if(id === '__all__'){
        const map = {start:'/api/bot/start', stop:'/api/bot/stop', restart:'/api/bot/restart'};
        res = await api(map[action], 'POST', {});
      } else {
        res = await api(`/api/bots/${action}`, 'POST', {id});
      }
      toast(res.message || 'OK');
      closeBotChooser();
      await refreshState(true);
    } catch(err){ toast(err.message, true); }
  };
  function openBotChooser(action){
    closeBotChooser();
    const rows = botsCatalog();
    const title = action === 'start' ? t('chooseBotToStart') : (action === 'stop' ? t('chooseBotToStop') : t('chooseBotToRestart'));
    const backdrop = document.createElement('div');
    backdrop.id='kwBotChooser';
    backdrop.className='kw-bot-modal-backdrop';
    backdrop.innerHTML = `<div class="kw-bot-modal"><div class="panel-head-inline"><div><h2>${title}</h2><div class="help-text" style="margin-top:6px">${t('botsTopChooserTitle')}</div></div><button class="btn" onclick="closeBotChooser()">${t('close')}</button></div><div class="list">${rows.length ? `${action !== 'restart' ? `<div class="row"><div class="meta"><strong>${action === 'start' ? t('botsTopStartAll') : t('botsTopStopAll')}</strong><small>${t('botsTopChooserTitle')}</small></div><button class="btn btn-primary" onclick="v38BotChooserAction('__all__','${action}')">${action === 'start' ? t('start') : t('stop')}</button></div>` : ''}${rows.map(row=>`<div class="row"><div class="meta"><strong>${esc(row.name)}</strong><small>${esc(row.subtitle || '-')} · ${row.running ? t('on') : t('off')}</small></div><div class="inline-actions"><button class="btn ${action==='start' ? 'btn-primary' : action==='stop' ? 'btn-danger' : ''}" onclick="v38BotChooserAction('${esc(row.id)}','${action}')">${action==='start' ? t('start') : action==='stop' ? t('stop') : t('restart')}</button></div></div>`).join('')}` : `<div class="empty-note">${t('botsTopNoBots')}</div>`}</div></div>`;
    backdrop.addEventListener('click', (e)=>{ if(e.target===backdrop) closeBotChooser(); });
    document.body.appendChild(backdrop);
  }
  botAction = function(action){ openBotChooser(action); };

})();


/* ===== patch v39: sync ui cleanup, startup in settings, better inventory, better refresh ===== */
(function(){
  Object.assign(T.es, {
    remove: 'Borrar',
    restore: 'Restaurar',
    refreshNowTop: 'Actualizar ahora',
    startupOptions: 'Inicio automático',
    startupOptionsHint: 'Puedes hacer que el manager arranque con Windows y, si quieres, que al abrirse arranque también el servidor.',
    startWithWindowsManager: 'Arrancar manager con Windows',
    startServerWithManager: 'Iniciar servidor al abrir el manager',
    saveStartupOptions: 'Guardar arranque',
    inventoryPlayersWithSnapshots: 'Jugadores con snapshots guardados',
    inventorySelectHint: 'Pulsa un jugador para cargar al momento su último inventario guardado o el inventario en vivo si está conectado.',
    inventoryNoSelectionYet: 'Selecciona un jugador conectado o uno del historial para ver su inventario.',
    inventoryUseOnline: 'Abrir',
    inventoryUseHistory: 'Abrir',
    inventoryLoad: 'Cargar inventario',
    inventoryReload: 'Actualizar inventario',
    refreshPlayers: 'Actualizar jugadores'
  });
  Object.assign(T.en, { remove: 'Delete', restore: 'Restore', refreshNowTop: 'Refresh now' });

  const css = document.createElement('style');
  css.textContent = `
    .card, .panel, .stat, .hero, .table tr, .btn, .small-btn, .kw-player-row, .kw-dark-select { transition: transform .18s ease, box-shadow .22s ease, border-color .22s ease, background .22s ease, opacity .22s ease; }
    .card:hover, .panel:hover { box-shadow: 0 10px 30px rgba(0,0,0,.22), 0 0 0 1px rgba(120,180,255,.08) inset; }
    .btn:hover, .small-btn:hover { transform: translateY(-1px); }
    .kw-player-row{display:flex;justify-content:space-between;align-items:center;gap:10px;width:100%;padding:12px 14px;border-radius:16px;border:1px solid rgba(255,255,255,.08);background:rgba(8,18,34,.55);color:#eef4ff;text-align:left;cursor:pointer;margin-bottom:8px}
    .kw-player-row:hover,.kw-player-row.active{border-color:rgba(110,170,255,.35);background:linear-gradient(180deg, rgba(30,55,95,.48), rgba(9,20,38,.72));box-shadow:0 0 0 1px rgba(110,170,255,.12) inset}
    .kw-player-row small{display:block;color:#a9b8d0;overflow-wrap:anywhere}
    .kw-player-grid{display:grid;grid-template-columns:1fr 1.2fr;gap:18px}
    .kw-player-list-wrap{max-height:520px;overflow:auto;padding-right:6px}
    .kw-startup-settings{margin-top:18px}
    .kw-dark-select, .kw-dark-select option{background:#0c1730;color:#eef4ff}
    .kw-startup-card{display:none !important}
    .kw-top-status-grid{display:grid;grid-template-columns:repeat(7,minmax(130px,1fr));gap:14px;margin:14px 0 2px}
    .kw-top-status-grid .stat{min-height:90px;display:flex;flex-direction:column;justify-content:center}
    .kw-top-status-grid .stat small{margin-bottom:6px;display:block;letter-spacing:.04em;text-transform:uppercase;color:#b6c3da}
    .kw-top-status-grid .stat strong{font-size:1.05rem;line-height:1.35}
    @media (max-width: 1180px){ .kw-player-grid{grid-template-columns:1fr} .kw-top-status-grid{grid-template-columns:repeat(2,minmax(140px,1fr));} }
  `;
  document.head.appendChild(css);

  function stripUiVersionText(){
    document.querySelectorAll('#eyebrow, h1, h2, h3, .help-text, .badge, .small-btn, .btn, .brand-title, .brand-subtitle, .menu button, .menu a, .hero, .card, .panel, label, span, div').forEach(el=>{
      if(el && el.childElementCount===0 && el.textContent && /UI v\d+/i.test(el.textContent)){
        el.textContent = el.textContent.replace(/\s*[·\-]\s*UI v\d+/ig,'').replace(/UI v\d+/ig,'').trim();
      }
    });
  }

  function startupCardHtml(){
    const cfg = (state.state && state.state.config) || {};
    return `<div class="card panel kw-startup-settings"><h2>${t('startupOptions')}</h2><div class="help-text" style="margin-top:6px">${t('startupOptionsHint')}</div><div class="inline-actions wrap-actions" style="margin-top:14px"><label class="kw-check-chip"><input id="startupManagerWindows" type="checkbox" ${cfg.start_with_windows_manager ? 'checked' : ''}><span>${t('startWithWindowsManager')}</span></label><label class="kw-check-chip"><input id="startupServerWithManager" type="checkbox" ${cfg.start_server_with_manager ? 'checked' : ''}><span>${t('startServerWithManager')}</span></label><button class="btn btn-primary" type="button" onclick="saveStartupFlags()">${t('saveStartupOptions')}</button></div></div>`;
  }

  const _saveStartupFlagsPrev = window.saveStartupFlags;
  window.saveStartupFlags = async function(){
    try {
      const payload = {
        start_with_windows_manager: !!document.getElementById('startupManagerWindows')?.checked,
        start_server_with_manager: !!document.getElementById('startupServerWithManager')?.checked
      };
      const res = await api('/api/config/save', 'POST', payload);
      toast(res.message || t('settingsSaved'));
      await refreshState(true);
      go('settings');
    } catch(err){ toast(err.message, true); }
  };

  const _refreshNowPrev = refreshNow;
  refreshNow = async function(ev){
    try{
      if(ev && ev.preventDefault) ev.preventDefault();
      if(ev && ev.stopPropagation) ev.stopPropagation();
      await refreshState(false);
      if (['players','inventory','moderation'].includes(state.section)) await refreshPlayers(false);
      if (state.section === 'backups') await loadBackups(false);
      if (state.section === 'serverconfig') await loadXmlAll();
      render(true);
    } catch(err){ toast(err.message, true); }
    return false;
  };

  const _renderPrevV39 = render;
  render = function(preserveScroll=false){
    _renderPrevV39(preserveScroll);
    stripUiVersionText();
    const btn = document.getElementById('btnManualRefreshTop');
    if(btn){ btn.type='button'; btn.textContent=t('refreshNowTop'); btn.onclick = (e)=>refreshNow(e); }
    const backupBtn = document.getElementById('btnBackupTop'); if(backupBtn) backupBtn.remove();
    if(state.section === 'dashboard'){
      document.querySelectorAll('.kw-startup-card,.kw-startup-settings').forEach(el=>el.remove());
    }
  };

  function currentInvPlayer(){
    if (state.historySelectedKey && state.playerProfile?.record && state.playerProfile.record.key === state.historySelectedKey) return historyPlayerFromRecord(state.playerProfile.record);
    return selectedPlayer() || historyPlayerFromRecord(state.playerProfile?.record || null);
  }

  window.v39PickOnline = async function(idx){
    state.historySelectedKey='';
    selectPlayer(idx);
    await loadPlayerProfile(true);
    await loadPlayerInventory(true);
    render(true);
  };
  window.v39PickHistory = async function(key){
    state.historySelectedKey=key || '';
    state.selectedPlayerIndex = null;
    await loadPlayerProfile(true);
    await loadPlayerInventory(true);
    render(true);
  };

  views.inventory = function(){
    const online = state.state?.players_cache || [];
    const historyRows = (state.playerHistoryList || []).filter(row => Number(row.snapshot_count || 0) > 0);
    const current = currentInvPlayer();
    return `<div class="grid">
      <div class="card panel">
        <div class="panel-head-inline"><div><h2>${t('inventoryOnlineOfflineTitle')}</h2><div class="help-text" style="margin-top:6px">${t('inventorySelectHint')}</div></div><div class="inline-actions wrap-actions"><button class="btn" type="button" onclick="refreshPlayers()">${t('refreshPlayers')}</button><button class="btn" type="button" onclick="loadPlayersHistoryList(false)">${t('refresh')}</button></div></div>
        <div class="kw-player-grid">
          <div>
            <h3>${t('playersOnline')}</h3>
            <div class="kw-player-list-wrap">${online.length ? online.map((p, idx)=>`<button class="kw-player-row ${!state.historySelectedKey && state.selectedPlayerIndex===idx ? 'active':''}" type="button" onclick="v39PickOnline(${idx})"><span><strong>${escapeHtml(playerDisplayName(p))}</strong><small>${escapeHtml(playerSteamText(p))}</small></span><span class="badge ok">${t('statusOnline')}</span></button>`).join('') : `<div class="empty-note">${t('inventoryNoOnlinePlayers')}</div>`}</div>
          </div>
          <div>
            <h3>${t('inventoryPlayersWithSnapshots')}</h3>
            <div class="kw-player-list-wrap">${historyRows.length ? historyRows.map(row=>`<button class="kw-player-row ${state.historySelectedKey===row.key ? 'active':''}" type="button" onclick="v39PickHistory('${String(row.key || '').replace(/'/g, "\\'")}')"><span><strong>${escapeHtml(row.primary_name || '-')}</strong><small>${escapeHtml(historyIdText(row))}</small></span><span class="badge default">${escapeHtml(String(row.snapshot_count || 0))}</span></button>`).join('') : `<div class="empty-note">${t('inventoryNoHistoryCandidates')}</div>`}</div>
          </div>
        </div>
      </div>
      <div class="card panel">
        <div class="panel-head-inline"><div><h2>${t('inventoryPanelTitle')}</h2><div class="help-text" style="margin-top:6px">${t('inventoryPanelText')}</div></div><div class="inline-actions wrap-actions"><button class="btn" type="button" onclick="go('players')">${t('players')}</button><button class="btn" type="button" onclick="go('moderation')">${t('moderation')}</button><button class="btn btn-primary" type="button" onclick="loadPlayerInventory()">${currentInventoryData() ? t('inventoryReload') : t('inventoryLoad')}</button></div></div>
        ${playerInventoryCard(current)}
      </div>
    </div>`;
  };


  if (!window.__kwDashboardRefreshV39) {
    window.__kwDashboardRefreshV39 = setInterval(async ()=>{
      try {
        if (document.hidden) return;
        if (!state || !state.section) return;
        if (['dashboard','inventory','moderation'].includes(state.section)) {
          await refreshState(true);
          if (state.section === 'inventory' || state.section === 'moderation') {
            await loadPlayersHistoryList(true);
            await loadPlayerProfile(true);
          }
          render(true);
        }
      } catch(_){}
    }, 5000);
  }

  const _viewsModerationPrev = views.moderation;
  views.moderation = function(){
    const html = _viewsModerationPrev ? _viewsModerationPrev() : '';
    return html.replace(/<select id="moderationPlayerPicker"/g,'<select id="moderationPlayerPicker" class="kw-dark-select"').replace(/<option /g,'<option style="background:#0c1730;color:#eef4ff" ');
  };
})();



/* ===== KW final cleanup: remove external bot + web map from UI ===== */
(function(){
  function kwNoBotMapCatalogs(){
    try{
      if (Array.isArray(window.KW_SECTION_OPTIONS)) {
        window.KW_SECTION_OPTIONS = window.KW_SECTION_OPTIONS.filter(k => !['discordbot','liveMap','openMap','__map__'].includes(String(k)));
      }
      if (window.authState) {
        if (Array.isArray(authState.sections_catalog)) {
          authState.sections_catalog = authState.sections_catalog.filter(k => !['discordbot','liveMap','openMap','__map__'].includes(String(k)));
        }
        if (Array.isArray(authState.actions_catalog)) {
          authState.actions_catalog = authState.actions_catalog.filter(r => {
            const key = String((r && r.key) || '');
            return !/^discordbot\./i.test(key) && key !== 'map.open';
          });
        }
      }
    }catch(_){}
  }

  const _kwCanAccessSection = typeof canAccessSection === 'function' ? canAccessSection : null;
  if (_kwCanAccessSection) {
    canAccessSection = function(section){
      if (String(section) === 'discordbot') return false;
      return _kwCanAccessSection.apply(this, arguments);
    };
  }

  const _kwEnsureAllowed = typeof ensureAllowed === 'function' ? ensureAllowed : null;
  if (_kwEnsureAllowed) {
    ensureAllowed = function(section, action){
      const sec = String(section || '');
      const act = String(action || '');
      if (sec === 'discordbot' || /^discordbot\./i.test(act) || act === 'map.open') return false;
      return _kwEnsureAllowed.apply(this, arguments);
    };
  }

  menuLabel = function(key){
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

  openExternalMap = function(){ return false; };

  buildMenu = function(){
    kwNoBotMapCatalogs();
    const ordered = ['dashboard','server','console','players','inventory','moderation','backups','tasks','serverconfig','settings','notifications','access'];
    const visibleKeys = ordered.filter(key => typeof canAccessSection === 'function' ? canAccessSection(key) : true);
    if ((typeof canAccessSection === 'function' ? canAccessSection('helpdocs') : true) && !visibleKeys.includes('helpdocs')) visibleKeys.push('helpdocs');
    if (!visibleKeys.includes(state.section)) state.section = visibleKeys[0] || 'dashboard';
    $('menu').innerHTML = visibleKeys.map(key => {
      return `<button data-section="${key}" class="${state.section === key ? 'active' : ''}" onclick="go('${key}')"><span class="menu-icon" aria-hidden="true"></span><span class="menu-label">${menuLabel(key)}</span></button>`;
    }).join('');
    if ($('sidebarFooter')) {
      $('sidebarFooter').innerHTML = authState.auth_enabled && authState.logged_in
        ? `<button data-section="logout" onclick="panelLogout()"><span class="menu-icon" aria-hidden="true"></span><span class="menu-label">${t('logoutButton')}</span></button>`
        : '';
    }
  };

  function removeLabelField(rx){
    document.querySelectorAll('.field').forEach(field=>{
      const label = field.querySelector('label');
      const txt = (label ? label.textContent : field.textContent || '').trim();
      if (rx.test(txt)) field.remove();
    });
  }

  function removeLabelGridPair(rx){
    document.querySelectorAll('.label-grid').forEach(grid=>{
      const children = Array.from(grid.children);
      for (let i=0;i<children.length;i+=2){
        const a = children[i], b = children[i+1];
        const txt = ((a && a.textContent) || '').trim();
        if (rx.test(txt)) { if (a) a.remove(); if (b) b.remove(); }
      }
    });
  }

  function kwUiCleanup(){
    kwNoBotMapCatalogs();
    if (state && state.section === 'discordbot') state.section = 'dashboard';

    document.querySelectorAll('[data-section="discordbot"], [data-section="openMap"]').forEach(el=>el.remove());
    document.querySelectorAll('[onclick*="openExternalMap"]').forEach(el=>el.remove());

    document.querySelectorAll('.stat, .stat.card, .top-status-card').forEach(card=>{
      const txt = (card.textContent || '').toLowerCase().replace(/\s+/g,' ');
      if (txt.includes('bot externo') || txt.includes('external bot') || txt === 'bot' || txt.includes('web map') || txt.includes('mapa web')) {
        card.remove();
      }
    });

    document.querySelectorAll('.btn, .small-btn').forEach(btn=>{
      const txt = (btn.textContent || '').toLowerCase().trim();
      if (txt.includes('abrir mapa web') || txt.includes('open web map') || txt === 'iniciar bot' || txt === 'parar bot' || txt === 'start bot' || txt === 'stop bot') {
        btn.remove();
      }
    });

    removeLabelField(/^(bot externo|external bot|url del mapa web externo \(opcional\)|web map url|url base api inventario \/ webmap|inventory api \/ webmap url|usuario api inventario|inventory api user|contraseña api inventario|inventory api password|bot token discord|discord bot token)$/i);
    removeLabelGridPair(/^(bot externo|external bot|mapa web|web map)$/i);

    document.querySelectorAll('.card.panel, .card, .kw-help-box').forEach(panel=>{
      const head = panel.querySelector('h2, h3');
      const txt = ((head && head.textContent) || '').trim().toLowerCase();
      if (txt === 'bot externo' || txt === 'external bot' || txt === 'mapa web externo' || txt === 'web map' || txt === 'mapa web') {
        panel.remove();
      }
    });
  }

  const _kwRender = typeof render === 'function' ? render : null;
  if (_kwRender) {
    render = function(preserve){
      const out = _kwRender.apply(this, arguments);
      setTimeout(kwUiCleanup, 0);
      return out;
    };
  }
  const _kwRefreshState = typeof refreshState === 'function' ? refreshState : null;
  if (_kwRefreshState) {
    refreshState = async function(){
      const out = await _kwRefreshState.apply(this, arguments);
      setTimeout(kwUiCleanup, 0);
      return out;
    };
  }
  const _kwGo = typeof go === 'function' ? go : null;
  if (_kwGo) {
    go = function(section){
      if (String(section) === 'discordbot') section = 'dashboard';
      const out = _kwGo.apply(this, [section]);
      setTimeout(kwUiCleanup, 0);
      return out;
    };
  }

  setTimeout(kwUiCleanup, 0);
  setInterval(kwUiCleanup, 1200);
})();

