const WL = {
  es: {
    title: 'Karmacoins + tienda web',
    loading: 'Cargando configuración...',
    steamBtn: 'Login con Steam (preparado)',
    discordBtn: 'Vincular Discord (preparado)',
    access: 'Acceso',
    stripePending: 'Pendiente',
    playtime: 'Tiempo conectado',
    packsTitle: 'Packs de Karmacoins',
    packsNote: 'Compra saldo y luego gástalo en la tienda',
    itemsTitle: 'Objetos disponibles',
    itemsNote: 'Vista pública inicial',
    featured: 'Destacado',
    pack: 'Pack',
    bonusText: bonus => `Incluye bonus de ${bonus} KC.`,
    noBonus: 'Sin bonus adicional.',
    stripeReady: 'Stripe preparado',
    dailyLimit: n => `Límite diario ${n}`,
    noDailyLimit: 'Sin límite diario',
    cooldown: n => `Cooldown ${n} s`,
    buyWithBalance: 'Compra con saldo · preparado',
    heroNoticeFallback: 'Inicia sesión con Steam y vincula Discord para usar la tienda.',
    stripeDisabled: 'Pendiente de activar',
    playtimeDisabled: 'Desactivado',
    noPacks: 'No hay packs activos todavía.',
    noItems: 'No hay objetos visibles todavía.',
    catGeneral: 'General',
    catWeapons: 'Armas',
    catAmmo: 'Munición',
    catTools: 'Herramientas',
    catMedicine: 'Medicina',
    catFood: 'Comida',
    catResources: 'Recursos',
    catBuilding: 'Construcción',
    catVehicles: 'Vehículos',
    catPacks: 'Packs',
    catSpecial: 'Especiales',
    catVip: 'VIP',
    demoPackName: 'Pack inicio',
    demoPackDescription: '500 Karmacoins para gastar en la tienda web.',
    demoItemName: 'Kit básico',
    error: 'Error'
  },
  en: {
    title: 'Karmacoins + web store',
    loading: 'Loading configuration...',
    steamBtn: 'Steam login (prepared)',
    discordBtn: 'Link Discord (prepared)',
    access: 'Access',
    stripePending: 'Pending',
    playtime: 'Playtime',
    packsTitle: 'Karmacoins packs',
    packsNote: 'Buy balance and then spend it in the store',
    itemsTitle: 'Available items',
    itemsNote: 'Initial public view',
    featured: 'Featured',
    pack: 'Pack',
    bonusText: bonus => `Includes ${bonus} KC bonus.`,
    noBonus: 'No extra bonus.',
    stripeReady: 'Stripe prepared',
    dailyLimit: n => `Daily limit ${n}`,
    noDailyLimit: 'No daily limit',
    cooldown: n => `Cooldown ${n} s`,
    buyWithBalance: 'Buy with balance · prepared',
    heroNoticeFallback: 'Log in with Steam and link Discord to use the store.',
    stripeDisabled: 'Pending activation',
    playtimeDisabled: 'Disabled',
    noPacks: 'There are no active packs yet.',
    noItems: 'There are no visible items yet.',
    catGeneral: 'General',
    catWeapons: 'Weapons',
    catAmmo: 'Ammo',
    catTools: 'Tools',
    catMedicine: 'Medicine',
    catFood: 'Food',
    catResources: 'Resources',
    catBuilding: 'Building',
    catVehicles: 'Vehicles',
    catPacks: 'Packs',
    catSpecial: 'Special',
    catVip: 'VIP',
    demoPackName: 'Starter pack',
    demoPackDescription: '500 Karmacoins to spend in the web store.',
    demoItemName: 'Basic kit',
    error: 'Error'
  }
};
const WLANG = (navigator.language || 'es').toLowerCase().startsWith('en') ? 'en' : 'es';
const wt = key => WL[WLANG][key];
const WCAT = {
  'General':'catGeneral','Armas':'catWeapons','Munición':'catAmmo','Herramientas':'catTools','Medicina':'catMedicine','Comida':'catFood','Recursos':'catResources','Construcción':'catBuilding','Vehículos':'catVehicles','Packs':'catPacks','Especiales':'catSpecial','VIP':'catVip',
  'Weapons':'catWeapons','Ammo':'catAmmo','Tools':'catTools','Medicine':'catMedicine','Food':'catFood','Resources':'catResources','Building':'catBuilding','Vehicles':'catVehicles','Special':'catSpecial'
};

function localStoreText(value){
  const v = String(value || '').trim();
  const map = {
    'Pack inicio': wt('demoPackName'),
    'Starter pack': wt('demoPackName'),
    '500 Karmacoins para gastar en la tienda web.': wt('demoPackDescription'),
    '500 Karmacoins to spend in the web store.': wt('demoPackDescription'),
    'Kit básico': wt('demoItemName'),
    'Basic kit': wt('demoItemName')
  };
  return map[v] || v;
}
function localStoreCategory(value){
  const key = WCAT[String(value || '').trim()];
  return key ? wt(key) : String(value || '');
}

async function api(url){
  const res = await fetch(url);
  const data = await res.json();
  if(!res.ok || data.ok===false) throw new Error(data.message || wt('error'));
  return data.data;
}
function esc(text){return String(text ?? '').replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));}
function euro(v, c='EUR'){ return `${Number(v||0).toFixed(2)} ${esc(c)}`; }
function packCard(row){
  return `<article class="card"><span class="pill">${row.featured ? wt('featured') : wt('pack')}</span><h3>${esc(localStoreText(row.name))}</h3><p>${esc(localStoreText(row.description || ''))}</p><div class="price">${Number(row.coins||0)+Number(row.bonus_coins||0)} KC</div><p>${row.bonus_coins ? wt('bonusText')(Number(row.bonus_coins)) : wt('noBonus')}</p><button class="buy-btn" disabled>${euro(row.price_real,row.currency)} · ${wt('stripeReady')}</button></article>`;
}
function itemCard(row){
  const limit = Number(row.purchase_limit_daily||0) > 0 ? wt('dailyLimit')(Number(row.purchase_limit_daily)) : wt('noDailyLimit');
  return `<article class="card"><span class="pill">${esc(localStoreCategory(row.category || 'General'))}</span><h3>${esc(localStoreText(row.name))}</h3><p>${esc(localStoreText(row.description || ''))}</p><div class="price">${Number(row.price_coins||0)} KC</div><p>${limit}${Number(row.cooldown_seconds||0) ? ` · ${wt('cooldown')(Number(row.cooldown_seconds))}` : ''}</p><button class="buy-btn" disabled>${wt('buyWithBalance')}</button></article>`;
}
function applyStaticWalletTexts(){
  document.documentElement.lang = WLANG;
  document.getElementById('walletTitle').textContent = wt('title');
  document.getElementById('heroNotice').textContent = wt('loading');
  document.getElementById('walletSteamBtn').textContent = wt('steamBtn');
  document.getElementById('walletDiscordBtn').textContent = wt('discordBtn');
  document.getElementById('walletAccessLabel').textContent = wt('access');
  document.getElementById('walletPlaytimeLabel').textContent = wt('playtime');
  document.getElementById('walletPacksTitle').textContent = wt('packsTitle');
  document.getElementById('walletPacksNote').textContent = wt('packsNote');
  document.getElementById('walletItemsTitle').textContent = wt('itemsTitle');
  document.getElementById('walletItemsNote').textContent = wt('itemsNote');
  document.getElementById('walletStripe').textContent = wt('stripePending');
}
async function loadWallet(){
  try{
    const data = await api('/api/store/public');
    document.getElementById('heroNotice').textContent = data.web?.login_notice || wt('heroNoticeFallback');
    document.getElementById('walletAccess').textContent = `${data.web?.public_ip || location.hostname}:${data.web?.public_port || location.port || 8765}`;
    document.getElementById('walletStripe').textContent = data.web?.stripe_enabled ? `${data.web?.stripe_mode || 'test'} · ${data.web?.stripe_currency || 'EUR'}` : wt('stripeDisabled');
    document.getElementById('walletPlaytime').textContent = data.playtime?.enabled ? `${data.playtime?.coins_per_interval || 0} KC / ${data.playtime?.interval_minutes || 0} min` : wt('playtimeDisabled');
    document.getElementById('packsGrid').innerHTML = (data.coin_packs || []).filter(x => x.active).map(packCard).join('') || `<div class="empty">${wt('noPacks')}</div>`;
    document.getElementById('itemsGrid').innerHTML = (data.items || []).map(itemCard).join('') || `<div class="empty">${wt('noItems')}</div>`;
  }catch(err){
    document.getElementById('heroNotice').textContent = err.message;
  }
}
window.addEventListener('load', () => {
  applyStaticWalletTexts();
  loadWallet();
});
