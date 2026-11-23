// KANTIN UNTAG SURABAYA — INTERACTIVE ENGINE
const DATA_KIOS = [
  { id: 'kios-1', kode: 'Kios 01', blok: 'Blok A-01', nama: 'Warung Bu Sri', subjudul: 'Ayam Geprek & Penyetan', deskripsi: 'Nasi Ayam Geprek, Lalapan, & Sambal Bawang', deskripsiPanjang: 'Spesialis ayam geprek sambal bawang dadakan, tahu tempe penyet, dan sayur asem segar.', kategori: 'Makanan Berat', status: 'Buka', badge: 'badge-pill-green', rating: '4.9', ulasan: '320+', estimasi: '5–10 menit', img: 'assets/images/kios-1.svg' },
  { id: 'kios-2', kode: 'Kios 02', blok: 'Blok A-02', nama: 'Soto Lamongan Cak Har', subjudul: 'Soto Ayam Koya & Rawon', deskripsi: 'Soto Ayam Koya, Rawon Daging, & Es Jeruk', deskripsiPanjang: 'Soto ayam khas Lamongan dengan taburan koya gurih melimpah dan kuah kaldu bening hangat.', kategori: 'Berkuah & Mie', status: 'Buka', badge: 'badge-pill-green', rating: '4.8', ulasan: '285+', estimasi: '5–8 menit', img: 'assets/images/kios-2.svg' },
  { id: 'kios-3', kode: 'Kios 03', blok: 'Blok B-01', nama: 'Kedai Kopi & Teh Kampus', subjudul: 'Minuman Segar & Roti Bakar', deskripsi: 'Es Teh Jumbo, Kopi Susu Gula Aren, Roti Bakar', deskripsiPanjang: 'Aneka minuman teh seduh, kopi susu gula aren kekinian, dan camilan pendamping kuliah.', kategori: 'Minuman & Kopi', status: 'Buka', badge: 'badge-pill-green', rating: '4.7', ulasan: '410+', estimasi: '3–5 menit', img: 'assets/images/kios-3.svg' },
  { id: 'kios-4', kode: 'Kios 04', blok: 'Blok B-02', nama: 'Mie Ayam & Bakso Solo', subjudul: 'Mie Ayam Pangsit & Bakso Urat', deskripsi: 'Mie Ayam Pangsit, Bakso Urat, Es Campur', deskripsiPanjang: 'Mie kenyal racikan sendiri dengan topping ayam kecap manis dan bakso daging sapi asli.', kategori: 'Berkuah & Mie', status: 'Antrean Padat', badge: 'badge-pill-amber', rating: '4.8', ulasan: '350+', estimasi: '10–15 menit', img: 'assets/images/kios-4.svg' },
  { id: 'kios-5', kode: 'Kios 05', blok: 'Blok A-03', nama: 'Nasi Padang Uni Salma', subjudul: 'Masakan Padang Asli', deskripsi: 'Rendang Daging, Ayam Pop, Gulai Tunjang', deskripsiPanjang: 'Sajian masakan Padang lengkap dengan bumbu rempah otentik dan sambal ijo khas.', kategori: 'Makanan Berat', status: 'Buka', badge: 'badge-pill-green', rating: '4.9', ulasan: '290+', estimasi: '4–7 menit', img: 'assets/images/kios-1.svg' },
  { id: 'kios-6', kode: 'Kios 06', blok: 'Blok C-01', nama: 'Gado-Gado & Rujak Cingur', subjudul: 'Kuliner Khas Surabaya', deskripsi: 'Gado-Gado Siram, Tahu Tek Telur Surabaya', deskripsiPanjang: 'Bumbu kacang ulek dadakan dengan petis udang pilihan khas Surabaya.', kategori: 'Makanan Berat', status: 'Buka', badge: 'badge-pill-green', rating: '4.6', ulasan: '195+', estimasi: '7–12 menit', img: 'assets/images/kios-2.svg' },
  { id: 'kios-7', kode: 'Kios 07', blok: 'Blok C-02', nama: 'Jus Buah & Salad Segar', subjudul: 'Minuman Sehat & Buah Potong', deskripsi: 'Jus Alpukat, Mangga, Sop Buah Kampus', deskripsiPanjang: 'Buah segar pilihan diblender tanpa pengawet, cocok untuk menyegarkan siang hari.', kategori: 'Minuman & Kopi', status: 'Buka', badge: 'badge-pill-green', rating: '4.8', ulasan: '240+', estimasi: '4–6 menit', img: 'assets/images/kios-3.svg' },
  { id: 'kios-8', kode: 'Kios 08', blok: 'Blok A-04', nama: 'Penyetan Mas Budi', subjudul: 'Aneka Penyetan & Sambal', deskripsi: 'Lele Penyet, Bebek Goreng, Terong Penyet', deskripsiPanjang: 'Lauk goreng garing disajikan hangat dengan sambal terasi tomat segar.', kategori: 'Makanan Berat', status: 'Tutup Sementara', badge: 'badge-pill-danger', rating: '4.7', ulasan: '215+', estimasi: 'Tutup', img: 'assets/images/kios-4.svg' }
];
const DATA_MENU = [
  { id: 'menu-geprek', kiosId: 'kios-1', kiosNama: 'Warung Bu Sri', nama: 'Nasi Ayam Geprek Sambal Bawang', harga: 15000, kategori: 'Paket Nasi', stok: 18, deskripsi: 'Potongan dada/paha ayam goreng tepung renyah yang digeprek langsung bersama sambal bawang segar, disajikan dengan nasi putih pulen dan lalapan timun & kubis.', img: 'assets/images/menu-geprek.svg' },
  { id: 'menu-esteh', kiosId: 'kios-1', kiosNama: 'Warung Bu Sri', nama: 'Es Teh Manis Jumbo', harga: 6000, kategori: 'Minuman', stok: 35, deskripsi: 'Teh melati seduh segar dengan gula pasir murni dalam ukuran gelas jumbo 22oz yang menyegarkan.', img: 'assets/images/menu-esteh.svg' },
  { id: 'menu-ayam-bakar', kiosId: 'kios-1', kiosNama: 'Warung Bu Sri', nama: 'Nasi Ayam Bakar Madu', harga: 17000, kategori: 'Paket Nasi', stok: 0, deskripsi: 'Ayam bakar bumbu rempah dan madu murni dilengkapi sambal terasi, tahu goreng, dan lalapan segar.', img: 'assets/images/menu-soto.svg' },
  { id: 'menu-soto', kiosId: 'kios-2', kiosNama: 'Soto Lamongan Cak Har', nama: 'Soto Ayam Lamongan Koya', harga: 14000, kategori: 'Paket Nasi', stok: 22, deskripsi: 'Soto ayam suwir kampung dengan kuah kuning gurih, telur rebus, soun, dan bubuk koya udang.', img: 'assets/images/menu-soto.svg' },
  { id: 'menu-bakso', kiosId: 'kios-4', kiosNama: 'Mie Ayam & Bakso Solo', nama: 'Bakso Urat Komplit', harga: 16000, kategori: 'Paket Nasi', stok: 15, deskripsi: 'Bakso urat sapi kenyal ukuran besar dengan bakso halus, tahu bakso, mie kuning, dan kuah kaldu sapi.', img: 'assets/images/menu-bakso.svg' }
];
const DEFAULT_CART = { kiosId: 'kios-1', kiosNama: 'Warung Bu Sri', kiosKode: 'Kios 01', items: [
  { id: 'menu-geprek', nama: 'Nasi Ayam Geprek Sambal Bawang', opsi: 'Level Pedas Sedang', catatan: '', harga: 15000, qty: 1, img: 'assets/images/menu-geprek.svg' },
  { id: 'menu-esteh', nama: 'Es Teh Manis Jumbo', opsi: 'Es Normal', catatan: '', harga: 6000, qty: 1, img: 'assets/images/menu-esteh.svg' }
]};
const DEFAULT_HISTORY = [
  { kode: '#KNT-20261123-074', waktu: '23 Nov 2026, 11:45 WIB', kiosId: 'kios-1', kiosNama: 'Warung Bu Sri', img: 'assets/images/kios-1.svg', ringkasan: '1x Nasi Ayam Geprek Sambal Bawang, 1x Es Teh Manis Jumbo', total: 22000, status: 'Selesai' },
  { kode: '#KNT-20261120-042', waktu: '20 Nov 2026, 12:15 WIB', kiosId: 'kios-2', kiosNama: 'Soto Lamongan Cak Har', img: 'assets/images/kios-2.svg', ringkasan: '1x Soto Ayam Lamongan Koya, 1x Es Jeruk Peras', total: 20000, status: 'Selesai' },
  { kode: '#KNT-20261118-019', waktu: '18 Nov 2026, 13:05 WIB', kiosId: 'kios-4', kiosNama: 'Mie Ayam & Bakso Solo', img: 'assets/images/kios-4.svg', ringkasan: '1x Bakso Urat Komplit (Dibatalkan sebelum disiapkan)', total: 17000, status: 'Dibatalkan' },
  { kode: '#KNT-20261115-011', waktu: '15 Nov 2026, 10:30 WIB', kiosId: 'kios-3', kiosNama: 'Kedai Kopi & Teh Kampus', img: 'assets/images/kios-3.svg', ringkasan: '2x Kopi Susu Gula Aren, 1x Roti Bakar Cokelat Keju', total: 31000, status: 'Selesai' }
];
function getCart() { const r = localStorage.getItem('kantin_cart'); if (!r) { localStorage.setItem('kantin_cart', JSON.stringify(DEFAULT_CART)); return JSON.parse(JSON.stringify(DEFAULT_CART)); } return JSON.parse(r); }
function saveCart(c) { localStorage.setItem('kantin_cart', JSON.stringify(c)); updateNavbarCartBadge(); }
function getActiveOrder() { const r = localStorage.getItem('kantin_active_order'); if (r === 'null') return null; if (!r) { const init = { kode: '#KNT-20261123-081', kodeAmbil: '#A-14', kiosNama: 'Warung Bu Sri', loket: 'Loket Blok A-01', waktuPesan: '11:32 WIB', estimasi: 'Estimasi 6 menit', itemsText: '1x Nasi Ayam Geprek Sambal Bawang, 1x Es Teh Manis Jumbo', total: 22000, status: 'preparing' }; localStorage.setItem('kantin_active_order', JSON.stringify(init)); return init; } return JSON.parse(r); }
function saveActiveOrder(o) { localStorage.setItem('kantin_active_order', o ? JSON.stringify(o) : 'null'); }
function getHistory() { const r = localStorage.getItem('kantin_history'); if (!r) { localStorage.setItem('kantin_history', JSON.stringify(DEFAULT_HISTORY)); return JSON.parse(JSON.stringify(DEFAULT_HISTORY)); } return JSON.parse(r); }
function saveHistory(h) { localStorage.setItem('kantin_history', JSON.stringify(h)); }
function formatRupiah(n) { return 'Rp ' + Number(n || 0).toLocaleString('id-ID'); }
function updateNavbarCartBadge() { const b = document.getElementById('navCartCount'); if (!b) return; const c = getCart(); const n = c.items.reduce((a, i) => a + i.qty, 0); b.textContent = n; b.style.display = n > 0 ? 'inline-block' : 'none'; }
function ensureModalAndToastContainers() {
  if (!document.getElementById('kantinGlobalModal')) {
    document.body.insertAdjacentHTML('beforeend', `<div id="kantinGlobalModal" class="kantin-modal-backdrop" role="dialog" aria-modal="true"><div class="kantin-modal-card"><div id="kantinModalIcon" class="kantin-modal-icon"></div><h3 id="kantinModalTitle" class="fw-bold fs-5 mb-2"></h3><p id="kantinModalText" class="text-secondary small mb-4" style="line-height:1.6;"></p><div id="kantinModalExtra" class="mb-4 d-none"></div><div class="d-flex justify-content-end gap-2"><button type="button" id="kantinModalCancel" class="btn btn-kantin-outline">Batal</button><button type="button" id="kantinModalConfirm" class="btn btn-kantin-primary">Konfirmasi</button></div></div></div><div id="kantinGlobalToast" class="kantin-toast"><i class="fa-solid fa-circle-check fs-5"></i><span id="kantinToastMsg"></span></div>`);
  }
}
function showFigmaModal({ type = 'question', title, text, extraHtml = '', confirmText = 'Ya, Lanjutkan', cancelText = 'Batal', onConfirm }) {
  ensureModalAndToastContainers();
  const backdrop = document.getElementById('kantinGlobalModal'), iconEl = document.getElementById('kantinModalIcon'), titleEl = document.getElementById('kantinModalTitle'), textEl = document.getElementById('kantinModalText'), extraEl = document.getElementById('kantinModalExtra'), btnCancel = document.getElementById('kantinModalCancel'), btnConfirm = document.getElementById('kantinModalConfirm');
  if (type === 'danger') { iconEl.className = 'kantin-modal-icon surface-danger-box'; iconEl.style.color = 'var(--status-danger)'; iconEl.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>'; btnConfirm.className = 'btn btn-kantin-danger'; }
  else if (type === 'warning') { iconEl.className = 'kantin-modal-icon surface-amber-box'; iconEl.style.color = 'var(--status-warning)'; iconEl.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>'; btnConfirm.className = 'btn btn-kantin-primary'; }
  else { iconEl.className = 'kantin-modal-icon surface-green-box'; iconEl.style.color = 'var(--green-900)'; iconEl.innerHTML = '<i class="fa-solid fa-repeat"></i>'; btnConfirm.className = 'btn btn-kantin-primary'; }
  titleEl.textContent = title; textEl.textContent = text; btnConfirm.textContent = confirmText; btnCancel.textContent = cancelText;
  if (extraHtml) { extraEl.innerHTML = extraHtml; extraEl.classList.remove('d-none'); } else { extraEl.innerHTML = ''; extraEl.classList.add('d-none'); }
  const closeModal = () => backdrop.classList.remove('show');
  btnCancel.onclick = closeModal; backdrop.onclick = (e) => { if (e.target === backdrop) closeModal(); };
  btnConfirm.onclick = () => { closeModal(); if (typeof onConfirm === 'function') onConfirm(); };
  backdrop.classList.add('show');
}
let toastTimer = null;
function showFigmaToast(msg) {
  ensureModalAndToastContainers();
  const t = document.getElementById('kantinGlobalToast'); document.getElementById('kantinToastMsg').textContent = msg;
  t.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}
function addItemToCart(menuId, qty = 1, opsi = 'Standar', catatan = '', onSuccess = null) {
  const menu = DATA_MENU.find(m => m.id === menuId) || DATA_MENU[0];
  if (menu.stok <= 0) { showFigmaToast('Maaf, stok menu ini sedang habis.'); return; }
  const cart = getCart();
  const doInsert = (target) => {
    const ex = target.items.find(i => i.id === menu.id && i.opsi === opsi);
    if (ex) { ex.qty += qty; if (catatan) ex.catatan = catatan; }
    else target.items.push({ id: menu.id, nama: menu.nama, opsi, catatan, harga: menu.harga, qty, img: menu.img });
    saveCart(target); showFigmaToast(`${menu.nama} (${qty}x) ditambahkan ke keranjang`);
    if (typeof onSuccess === 'function') onSuccess();
  };
  if (cart.items.length > 0 && cart.kiosId !== menu.kiosId) {
    showFigmaModal({ type: 'question', title: 'Ganti Kios Pemesanan?', text: `Keranjang saat ini berisi pesanan dari ${cart.kiosNama}. Mengganti kios akan menghapus item sebelumnya.`, confirmText: 'Ya, Ganti Kios', cancelText: 'Batal', onConfirm: () => {
      const k = DATA_KIOS.find(x => x.id === menu.kiosId);
      doInsert({ kiosId: menu.kiosId, kiosNama: menu.kiosNama, kiosKode: k ? k.kode : 'Kios', items: [] });
    }});
  } else {
    const k = DATA_KIOS.find(x => x.id === menu.kiosId);
    cart.kiosId = menu.kiosId; cart.kiosNama = menu.kiosNama; cart.kiosKode = k ? k.kode : 'Kios';
    doInsert(cart);
  }
}
let detailQty = 1, lastRemovedItem = null, paymentCountdownInterval = null, jelajahFilterKat = 'Semua', jelajahSearchQuery = '', currentDetailMenu = DATA_MENU[0];
document.addEventListener('DOMContentLoaded', () => {
  ensureModalAndToastContainers(); updateNavbarCartBadge();
  const u = JSON.parse(localStorage.getItem('kantin_user') || 'null');
  if (u) {
    document.querySelectorAll('.navbar-user-name').forEach(e => e.textContent = u.nama);
    document.querySelectorAll('.navbar-user-id').forEach(e => e.textContent = u.id);
    document.querySelectorAll('.navbar-user-initials').forEach(e => e.textContent = u.initials);
  }
  const togglePass = document.getElementById('togglePass'), loginPass = document.getElementById('loginPass'), loginForm = document.getElementById('loginForm');
  if (togglePass && loginPass) togglePass.addEventListener('click', () => { const p = loginPass.type === 'password'; loginPass.type = p ? 'text' : 'password'; togglePass.innerHTML = p ? '<i class="fa-regular fa-eye-slash"></i>' : '<i class="fa-regular fa-eye"></i>'; });
  if (loginForm) loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); const v = document.getElementById('loginUser').value.trim(), pw = document.getElementById('loginPass').value.trim();
    if (!v || !pw) { showFigmaModal({ type: 'warning', title: 'Data Masuk Belum Lengkap', text: 'Silakan masukkan NBI/NPP atau Email UNTAG beserta kata sandi Anda.', confirmText: 'Mengerti', cancelText: 'Tutup' }); return; }
    localStorage.setItem('kantin_user', JSON.stringify({ nama: v.includes('@') ? v.split('@')[0] : 'Muchamad Zidan', id: v, initials: 'MZ' }));
    window.location.href = 'beranda.html';
  });
  initBeranda(); initJelajah(); initKios(); initDetail(); initCart(); initCheckout(); initPayment(); initStatus(); initHistory();
});
function initBeranda() {
  const g = document.getElementById('berandaKiosGrid'); if (!g) return;
  const ao = document.getElementById('berandaActiveOrderCard'), ord = getActiveOrder();
  if (ao && !ord) ao.innerHTML = `<div class="d-flex justify-content-between align-items-center mb-2"><span class="badge-pill-green"><i class="fa-solid fa-utensils me-1"></i>Siap Memesan</span><span class="small text-secondary">Kantin Utama</span></div><div class="fw-bold mb-1">Belum Ada Pesanan Aktif</div><div class="small text-secondary mb-3">Pilih kios favoritmu dan pesan tanpa antre sekarang.</div><a href="jelajah-kios.html" class="btn btn-kantin-primary w-100 btn-sm">Mulai Pesan Sekarang</a>`;
  else if (ao && ord) ao.innerHTML = `<div class="d-flex justify-content-between align-items-center mb-2"><span class="${ord.status === 'ready' ? 'badge-pill-green' : 'badge-pill-amber'}"><i class="fa-solid ${ord.status === 'ready' ? 'fa-bell-concierge' : 'fa-fire-burner'} me-1"></i>${ord.status === 'ready' ? 'Siap Diambil' : 'Sedang Disiapkan'}</span><span class="small text-secondary">${ord.kode}</span></div><div class="fw-bold mb-1">${ord.kiosNama} (${ord.kodeAmbil})</div><div class="small text-secondary mb-3">${ord.itemsText}</div><a href="status-pesanan.html" class="btn btn-kantin-outline w-100 btn-sm">Pantau Status Pesanan</a>`;
  let kat = 'Semua';
  const render = () => {
    g.innerHTML = DATA_KIOS.slice(0, 4).filter(k => kat === 'Semua' || k.kategori === kat).map(k => `<div class="col-3"><div class="card-kantin hoverable overflow-hidden h-100 d-flex flex-column"><img src="${k.img}" class="w-100" style="height:160px;object-fit:cover;" alt="${k.nama}"><div class="p-3 d-flex flex-column flex-grow-1"><div class="d-flex justify-content-between align-items-start mb-1"><span class="${k.badge}">${k.status}</span><span class="small fw-semibold"><i class="fa-solid fa-star text-warning me-1"></i>${k.rating}</span></div><h3 class="fw-bold fs-6 mt-2 mb-1">${k.kode} — ${k.nama}</h3><p class="small text-secondary mb-3">${k.deskripsi}</p><a href="kios.html?kios=${k.id}" class="btn btn-kantin-outline w-100 mt-auto">Lihat Menu Kios</a></div></div></div>`).join('');
  };
  render();
  document.querySelectorAll('.beranda-kat-btn').forEach(b => b.addEventListener('click', () => { document.querySelectorAll('.beranda-kat-btn').forEach(x => x.className = 'btn btn-kantin-outline rounded-pill px-4 beranda-kat-btn'); b.className = 'btn btn-kantin-primary rounded-pill px-4 beranda-kat-btn'; kat = b.dataset.kat; render(); }));
  const si = document.getElementById('berandaSearchInput'), sb = document.getElementById('berandaSearchBtn');
  if (si && sb) { const go = () => { const q = encodeURIComponent(si.value.trim()); window.location.href = `jelajah-kios.html${q ? '?q=' + q : ''}`; }; sb.addEventListener('click', (e) => { if (si.value.trim()) { e.preventDefault(); go(); } }); si.addEventListener('keydown', (e) => { if (e.key === 'Enter') go(); }); }
}
function initJelajah() {
  const s = document.getElementById('jelajahStateSelector'); if (!s) return;
  const p = new URLSearchParams(window.location.search); if (p.get('q')) { jelajahSearchQuery = p.get('q'); const i = document.getElementById('searchKiosInput'); if (i) i.value = jelajahSearchQuery; }
  renderJelajahState('normal'); s.addEventListener('change', (e) => renderJelajahState(e.target.value));
  document.querySelectorAll('.jelajah-filter-btn').forEach(b => b.addEventListener('click', () => { document.querySelectorAll('.jelajah-filter-btn').forEach(x => x.className = 'btn btn-kantin-outline btn-sm rounded-pill px-3 jelajah-filter-btn'); b.className = 'btn btn-kantin-primary btn-sm rounded-pill px-3 jelajah-filter-btn'; jelajahFilterKat = b.dataset.filter; s.value = 'normal'; renderJelajahState('normal'); }));
  const i = document.getElementById('searchKiosInput'); if (i) i.addEventListener('input', (e) => { jelajahSearchQuery = e.target.value.trim().toLowerCase(); s.value = 'normal'; renderJelajahState('normal'); });
}
function renderJelajahState(state) {
  const c = document.getElementById('jelajahContentContainer'); if (!c) return;
  if (state === 'loading') { let sk = '<div class="row g-4">'; for (let i = 0; i < 8; i++) sk += `<div class="col-3"><div class="card-kantin p-3"><div class="skeleton mb-3" style="height:150px;"></div><div class="skeleton mb-2" style="height:18px;width:70%;"></div><div class="skeleton mb-3" style="height:14px;width:95%;"></div><div class="skeleton" style="height:38px;width:100%;"></div></div></div>`; c.innerHTML = sk + '</div>'; return; }
  if (state === 'error') { c.innerHTML = `<div class="card-kantin p-5 text-center"><div class="surface-danger-box d-inline-flex align-items-center justify-content-center mb-3" style="width:64px;height:64px;"><i class="fa-solid fa-wifi fs-3" style="color:var(--status-danger);"></i></div><h3 class="fw-bold fs-5 mb-2">Gagal Memuat Daftar Kios</h3><p class="text-secondary mb-4">Terjadi gangguan koneksi saat mengambil data kios Kantin UNTAG.</p><button class="btn btn-kantin-primary" onclick="renderJelajahState('normal')"><i class="fa-solid fa-rotate-right me-2"></i>Coba Muat Ulang</button></div>`; return; }
  const list = state === 'empty' ? [] : DATA_KIOS.filter(k => (jelajahFilterKat === 'Semua' || (jelajahFilterKat === 'Buka' ? k.status === 'Buka' : k.kategori === jelajahFilterKat)) && (!jelajahSearchQuery || k.nama.toLowerCase().includes(jelajahSearchQuery) || k.deskripsi.toLowerCase().includes(jelajahSearchQuery)));
  if (!list.length) { c.innerHTML = `<div class="card-kantin p-5 text-center"><div class="surface-green-box d-inline-flex align-items-center justify-content-center mb-3" style="width:64px;height:64px;"><i class="fa-solid fa-store-slash fs-3" style="color:var(--green-900);"></i></div><h3 class="fw-bold fs-5 mb-2">Kios Tidak Ditemukan</h3><p class="text-secondary mb-4">Tidak ada kios yang sesuai dengan kata kunci atau filter yang dipilih.</p><button class="btn btn-kantin-primary" onclick="resetJelajahFilter()">Reset Filter Pencarian</button></div>`; return; }
  c.innerHTML = '<div class="row g-4">' + list.map(k => `<div class="col-3"><div class="card-kantin hoverable overflow-hidden h-100 d-flex flex-column"><img src="${k.img}" class="w-100" style="height:155px;object-fit:cover;" alt="${k.nama}"><div class="p-3 d-flex flex-column flex-grow-1"><div class="d-flex justify-content-between align-items-center mb-2"><span class="${k.badge}">${k.status}</span><span class="small fw-semibold"><i class="fa-solid fa-star text-warning me-1"></i>${k.rating}</span></div><h3 class="fw-bold fs-6 mb-1">${k.kode} — ${k.nama}</h3><p class="small text-secondary mb-3">${k.deskripsi}</p><a href="kios.html?kios=${k.id}" class="btn btn-kantin-outline w-100 mt-auto">Buka Kios</a></div></div></div>`).join('') + '</div>';
}
function resetJelajahFilter() { jelajahFilterKat = 'Semua'; jelajahSearchQuery = ''; const i = document.getElementById('searchKiosInput'); if (i) i.value = ''; document.querySelectorAll('.jelajah-filter-btn').forEach((b, idx) => b.className = idx === 0 ? 'btn btn-kantin-primary btn-sm rounded-pill px-3 jelajah-filter-btn' : 'btn btn-kantin-outline btn-sm rounded-pill px-3 jelajah-filter-btn'); renderJelajahState('normal'); }
function initKios() {
  const g = document.getElementById('kiosMenuGrid'); if (!g) return;
  const k = DATA_KIOS.find(x => x.id === (new URLSearchParams(window.location.search).get('kios') || 'kios-1')) || DATA_KIOS[0];
  document.getElementById('kiosBreadcrumbName').textContent = k.nama; document.getElementById('kiosHeroImg').src = k.img;
  document.getElementById('kiosHeroBadge').className = k.badge; document.getElementById('kiosHeroBadge').textContent = `${k.status} • Tutup 17.00 WIB`;
  document.getElementById('kiosHeroBlok').textContent = `${k.kode} • ${k.blok}`; document.getElementById('kiosHeroTitle').textContent = `${k.nama} — ${k.subjudul}`;
  document.getElementById('kiosHeroDesc').textContent = k.deskripsiPanjang; document.getElementById('kiosHeroRating').innerHTML = `<i class="fa-solid fa-star text-warning me-1"></i>${k.rating} (${k.ulasan} ulasan)`;
  document.getElementById('kiosHeroEstimasi').innerHTML = `<i class="fa-regular fa-clock me-1" style="color:var(--green-900);"></i>Estimasi siap ${k.estimasi}`;
  const menus = DATA_MENU.filter(m => m.kiosId === k.id); const baseMenus = menus.length ? menus : DATA_MENU.slice(0, 3);
  let kat = 'Semua Menu';
  const render = () => { g.innerHTML = baseMenus.filter(m => kat === 'Semua Menu' || m.kategori === kat).map(m => { const h = m.stok <= 0; return `<div class="col-4"><div class="card-kantin hoverable overflow-hidden h-100 d-flex flex-column ${h ? 'opacity-75' : ''}"><img src="${m.img}" class="w-100" style="height:175px;object-fit:cover;${h ? 'filter:grayscale(65%);' : ''}" alt="${m.nama}"><div class="p-3 d-flex flex-column flex-grow-1"><div class="d-flex justify-content-between align-items-center mb-1"><span class="${h ? 'badge-pill-danger' : 'badge-pill-green'}">${h ? 'Stok Habis' : 'Tersedia (' + m.stok + ')'}</span><span class="fw-bold ${h ? 'text-secondary' : ''}" style="${!h ? 'color:var(--green-900);' : ''}">${formatRupiah(m.harga)}</span></div><h3 class="fw-bold fs-6 mt-1">${m.nama}</h3><p class="small text-secondary mb-3">${m.deskripsi}</p><div class="d-flex gap-2 mt-auto"><a href="detail-menu.html?menu=${m.id}${h ? '&state=outofstock' : ''}" class="btn btn-kantin-outline flex-grow-1">Detail Menu</a>${!h ? `<button class="btn btn-kantin-primary" onclick="addItemToCart('${m.id}', 1)"><i class="fa-solid fa-plus"></i></button>` : ''}</div></div></div></div>`; }).join(''); };
  render();
  document.querySelectorAll('.kios-menu-filter').forEach(b => b.addEventListener('click', () => { document.querySelectorAll('.kios-menu-filter').forEach(x => x.className = 'btn btn-kantin-outline btn-sm rounded-pill px-3 kios-menu-filter'); b.className = 'btn btn-kantin-primary btn-sm rounded-pill px-3 kios-menu-filter'; kat = b.dataset.kat; render(); }));
}
function initDetail() {
  const s = document.getElementById('detailStateSelector'); if (!s) return;
  const p = new URLSearchParams(window.location.search); currentDetailMenu = DATA_MENU.find(m => m.id === (p.get('menu') || 'menu-geprek')) || DATA_MENU[0];
  document.getElementById('detailMenuImg').src = currentDetailMenu.img; document.getElementById('detailMenuTitle').textContent = currentDetailMenu.nama;
  document.getElementById('detailMenuPrice').textContent = formatRupiah(currentDetailMenu.harga); document.getElementById('detailMenuDesc').textContent = currentDetailMenu.deskripsi;
  const bl = document.getElementById('detailBackLink'); if (bl) { bl.href = `kios.html?kios=${currentDetailMenu.kiosId}`; bl.innerHTML = `<i class="fa-solid fa-arrow-left me-2"></i>Kembali ke ${currentDetailMenu.kiosNama}`; }
  const init = p.get('state') || (currentDetailMenu.stok <= 0 ? 'outofstock' : 'normal'); s.value = init; setDetailState(init);
  s.addEventListener('change', (e) => setDetailState(e.target.value));
}
function ubahQtyDetail(d) { detailQty = Math.max(1, detailQty + d); document.getElementById('detailQtyVal').textContent = detailQty; const b = document.getElementById('btnAddMenuToCart'); if (b && !b.disabled) b.innerHTML = `<i class="fa-solid fa-bag-shopping me-2"></i>Tambah ke Keranjang — ${formatRupiah(detailQty * currentDetailMenu.harga)}`; }
function handleAddDetailToCart() { const r = document.querySelector('input[name="pedas"]:checked'); addItemToCart(currentDetailMenu.id, detailQty, r ? r.value : 'Tidak Pedas', (document.getElementById('detailCatatan')?.value || '').trim(), () => { const s = document.getElementById('detailStateSelector'); if (s) s.value = 'added'; setDetailState('added'); }); }
function setDetailState(state) {
  const banner = document.getElementById('detailAlertBanner'), badge = document.getElementById('detailStockBadge'), btnAdd = document.getElementById('btnAddMenuToCart'); if (!banner || !badge || !btnAdd) return;
  banner.className = 'd-none mb-4'; btnAdd.disabled = false;
  if (state === 'added') { banner.className = 'surface-green-box p-3 mb-4 d-flex justify-content-between align-items-center'; banner.innerHTML = `<div class="fw-semibold small" style="color:var(--green-900);"><i class="fa-solid fa-circle-check me-2"></i>Menu berhasil ditambahkan ke keranjang belanja!</div><a href="keranjang.html" class="btn btn-kantin-primary btn-sm">Lihat Keranjang</a>`; }
  else if (state === 'outofstock') { badge.innerHTML = `<span class="badge-pill-danger">Stok Habis</span><span class="small text-secondary">• ${currentDetailMenu.kiosNama}</span>`; btnAdd.disabled = true; btnAdd.innerHTML = `<i class="fa-solid fa-ban me-2"></i>Stok Menu Habis`; }
  else { badge.innerHTML = `<span class="badge-pill-green">Stok Tersedia (${currentDetailMenu.stok > 0 ? currentDetailMenu.stok : 18} porsi)</span><span class="small text-secondary">• ${currentDetailMenu.kiosNama}</span>`; btnAdd.innerHTML = `<i class="fa-solid fa-bag-shopping me-2"></i>Tambah ke Keranjang — ${formatRupiah(detailQty * currentDetailMenu.harga)}`; }
}
function initCart() { const s = document.getElementById('cartStateSelector'); if (!s) return; renderCartState('normal'); s.addEventListener('change', (e) => renderCartState(e.target.value)); }
function updateCartItemQty(idx, d) { const c = getCart(); if (!c.items[idx]) return; if (c.items[idx].qty + d <= 0) { removeCartItem(idx); return; } c.items[idx].qty += d; saveCart(c); renderCartState('normal'); }
function removeCartItem(idx) { const c = getCart(); if (!c.items[idx]) return; lastRemovedItem = { item: c.items[idx], idx }; c.items.splice(idx, 1); saveCart(c); renderCartState(c.items.length === 0 ? 'empty' : 'removed'); }
function undoRemoveCartItem() { if (!lastRemovedItem) return; const c = getCart(); c.items.splice(lastRemovedItem.idx, 0, lastRemovedItem.item); lastRemovedItem = null; saveCart(c); renderCartState('normal'); }
function renderCartState(state) {
  const itemsEl = document.getElementById('cartItemsContainer'), summaryEl = document.getElementById('cartSummaryContainer'), bannerEl = document.getElementById('cartAlertBanner'), btnCheckout = document.getElementById('btnProceedCheckout'); if (!itemsEl) return;
  const cart = getCart(); bannerEl.className = 'd-none mb-4'; summaryEl.classList.remove('d-none'); btnCheckout.classList.remove('disabled');
  if (state === 'loading') { itemsEl.className = 'col-8'; itemsEl.innerHTML = `<div class="card-kantin p-4"><div class="skeleton mb-3" style="height:24px;width:220px;"></div><div class="skeleton mb-3" style="height:88px;width:100%;"></div><div class="skeleton" style="height:88px;width:100%;"></div></div>`; return; }
  if (state === 'empty' || (state === 'normal' && cart.items.length === 0)) { summaryEl.classList.add('d-none'); itemsEl.className = 'col-12'; itemsEl.innerHTML = `<div class="card-kantin p-5 text-center"><div class="surface-green-box d-inline-flex align-items-center justify-content-center mb-3" style="width:64px;height:64px;"><i class="fa-solid fa-bag-shopping fs-3" style="color:var(--green-900);"></i></div><h3 class="fw-bold fs-5 mb-2">Keranjang Belanja Masih Kosong</h3><p class="text-secondary mb-4">Yuk pilih makanan atau minuman favoritmu dari kios-kios di Kantin UNTAG.</p><a href="jelajah-kios.html" class="btn btn-kantin-primary">Mulai Jelajah Kios</a></div>`; return; }
  itemsEl.className = 'col-8';
  if (state === 'outdated') { bannerEl.className = 'surface-amber-box p-3 mb-4 d-flex justify-content-between align-items-center'; bannerEl.innerHTML = `<div><strong style="color:var(--status-warning);"><i class="fa-solid fa-triangle-exclamation me-2"></i>Keranjang Perlu Diperbarui</strong><div class="small text-secondary">Stok atau harga pada salah satu item baru saja berubah di kios.</div></div><button class="btn btn-kantin-primary btn-sm" onclick="renderCartState('normal')">Perbarui Sekarang</button>`; btnCheckout.classList.add('disabled'); }
  if (state === 'removed') { bannerEl.className = 'surface-green-box p-3 mb-4 d-flex justify-content-between align-items-center'; bannerEl.innerHTML = `<div class="small fw-semibold" style="color:var(--green-900);"><i class="fa-solid fa-circle-check me-2"></i>1 item ("${lastRemovedItem ? lastRemovedItem.item.nama : 'Es Teh Manis Jumbo'}") telah dihapus dari keranjang.</div><button class="btn btn-kantin-outline btn-sm" onclick="undoRemoveCartItem()">Urungkan</button>`; }
  const sub = cart.items.reduce((a, b) => a + b.harga * b.qty, 0);
  document.getElementById('summaryCount').textContent = cart.items.reduce((a, b) => a + b.qty, 0);
  document.getElementById('summarySubtotal').textContent = formatRupiah(sub);
  document.getElementById('summaryTotal').textContent = formatRupiah(sub + 1000);
  itemsEl.innerHTML = `<div class="card-kantin p-4"><div class="d-flex justify-content-between align-items-center pb-3 mb-3 border-bottom"><div><span class="badge-pill-green me-2">${cart.kiosKode}</span><strong class="fs-6">${cart.kiosNama}</strong></div><button class="btn btn-sm btn-kantin-outline" onclick="konfirmasiGantiKios()">Ganti Kios</button></div>` + cart.items.map((it, idx) => `<div class="d-flex justify-content-between align-items-center py-3 ${idx < cart.items.length - 1 ? 'border-bottom' : ''}"><div class="d-flex align-items-center gap-3"><img src="${it.img}" class="rounded-3 border" style="width:64px;height:64px;object-fit:cover;" alt="${it.nama}"><div><div class="fw-bold">${it.nama}</div><div class="small text-secondary">${it.opsi}${it.catatan ? ' • "' + it.catatan + '"' : ''} • ${formatRupiah(it.harga)}</div></div></div><div class="d-flex align-items-center gap-3"><div class="btn-group btn-group-sm"><button class="btn btn-kantin-outline" onclick="updateCartItemQty(${idx}, -1)">-</button><button class="btn btn-kantin-outline disabled text-dark fw-bold">${it.qty}</button><button class="btn btn-kantin-outline" onclick="updateCartItemQty(${idx}, 1)">+</button></div><button class="btn btn-sm btn-kantin-danger-soft" onclick="removeCartItem(${idx})"><i class="fa-regular fa-trash-can"></i></button></div></div>`).join('') + '</div>';
}
function initCheckout() {
  const s = document.getElementById('checkoutStateSelector'), btn = document.getElementById('btnSubmitCheckout'), cart = getCart(), box = document.getElementById('checkoutOrderItems');
  if (box && cart.items.length) { const sub = cart.items.reduce((a, b) => a + b.harga * b.qty, 0); box.innerHTML = `<div class="small fw-semibold mb-2" style="color:var(--green-900);">${cart.kiosNama}</div>` + cart.items.map(i => `<div class="d-flex justify-content-between small mb-2"><span>${i.qty}x ${i.nama}</span><span>${formatRupiah(i.harga * i.qty)}</span></div>`).join('') + `<hr><div class="d-flex justify-content-between small mb-2"><span class="text-secondary">Biaya Layanan</span><span>Rp 1.000</span></div><div class="d-flex justify-content-between align-items-center mb-4"><span class="fw-bold">Total Pembayaran</span><span class="fw-bold fs-5" style="color:var(--green-900);">${formatRupiah(sub + 1000)}</span></div>`; }
  if (s) s.addEventListener('change', (e) => setCheckoutValidation(e.target.value === 'invalid'));
  if (btn) btn.addEventListener('click', () => {
    const nama = document.getElementById('chkNama').value.trim(), wa = document.getElementById('chkWa').value.trim();
    if (!nama || !wa) { setCheckoutValidation(true); return; }
    const sub = cart.items.reduce((a, b) => a + b.harga * b.qty, 0);
    saveActiveOrder({ kode: '#KNT-' + new Date().toISOString().slice(0, 10).replace(/-/g, '') + '-' + Math.floor(100 + Math.random() * 899), kodeAmbil: '#A-' + Math.floor(10 + Math.random() * 89), kiosId: cart.kiosId, kiosNama: cart.kiosNama, loket: 'Loket Blok A-01', waktuPesan: new Date().toTimeString().slice(0, 5) + ' WIB', estimasi: 'Estimasi 6 menit', itemsText: cart.items.map(i => `${i.qty}x ${i.nama}`).join(', '), total: sub + 1000, status: 'preparing' });
    window.location.href = 'pembayaran.html';
  });
}
function setCheckoutValidation(inv) { const n = document.getElementById('chkNama'), w = document.getElementById('chkWa'), b = document.getElementById('checkoutValidationBanner'); if (!n || !w) return; n.value = inv ? '' : 'Muchamad Zidan Amirulloh'; w.value = inv ? '' : '081234567890'; n.classList.toggle('is-invalid', inv); w.classList.toggle('is-invalid', inv); if (b) b.classList.toggle('d-none', !inv); }
function initPayment() { const s = document.getElementById('paymentStateSelector'); if (!s) return; const o = getActiveOrder(), sub = document.getElementById('paymentHeaderSubtitle'); if (sub && o) sub.innerHTML = `Kode Transaksi: <strong>${o.kode}</strong> • ${o.kiosNama}`; renderPaymentState('pending'); s.addEventListener('change', (e) => renderPaymentState(e.target.value)); }
function renderPaymentState(state) {
  const el = document.getElementById('paymentContainer'); if (!el) return; clearInterval(paymentCountdownInterval);
  const o = getActiveOrder(), total = o ? o.total : 22000, kios = o ? o.kiosNama : 'Warung Bu Sri';
  if (state === 'success') { const c = getCart(); c.items = []; saveCart(c); el.innerHTML = `<div class="card-kantin p-5 text-center"><div class="surface-green-box d-inline-flex align-items-center justify-content-center mb-3" style="width:72px;height:72px;"><i class="fa-solid fa-circle-check fs-1" style="color:var(--green-900);"></i></div><h2 class="fw-bold fs-4 mb-2">Pembayaran Berhasil Diterima!</h2><p class="text-secondary mb-4">Pesananmu telah diteruskan ke <strong>${kios}</strong> dan segera disiapkan.</p><a href="status-pesanan.html" class="btn btn-kantin-primary px-4">Pantau Status Pesanan</a></div>`; return; }
  if (state === 'failed') { el.innerHTML = `<div class="card-kantin p-5 text-center"><div class="surface-danger-box d-inline-flex align-items-center justify-content-center mb-3" style="width:72px;height:72px;"><i class="fa-solid fa-circle-xmark fs-1" style="color:var(--status-danger);"></i></div><h2 class="fw-bold fs-4 mb-2">Pembayaran Gagal Diproses</h2><p class="text-secondary mb-4">Saldo tidak mencukupi atau transaksi ditolak oleh penyedia pembayaran.</p><div class="d-flex justify-content-center gap-3"><button class="btn btn-kantin-primary" onclick="renderPaymentState('pending')">Coba Bayar Lagi</button><a href="keranjang.html" class="btn btn-kantin-outline">Kembali ke Keranjang</a></div></div>`; return; }
  if (state === 'expired') { el.innerHTML = `<div class="card-kantin p-5 text-center"><div class="surface-amber-box d-inline-flex align-items-center justify-content-center mb-3" style="width:72px;height:72px;"><i class="fa-solid fa-hourglass-end fs-1" style="color:var(--status-warning);"></i></div><h2 class="fw-bold fs-4 mb-2">Batas Waktu Pembayaran Kedaluwarsa</h2><p class="text-secondary mb-4">Kode QRIS tidak lagi berlaku karena melewati batas waktu 10 menit.</p><a href="keranjang.html" class="btn btn-kantin-primary px-4">Buat Pesanan Ulang</a></div>`; return; }
  el.innerHTML = `<div class="card-kantin p-4 text-center"><div class="surface-amber-box p-2 mb-4 small fw-semibold" style="color:var(--status-warning);"><i class="fa-regular fa-clock me-1"></i> Selesaikan pembayaran dalam <strong id="qrisTimerText">09:42</strong></div><div class="small text-secondary mb-1">Total Pembayaran QRIS</div><div class="fw-bold fs-2 mb-3" style="color:var(--green-900);">${formatRupiah(total)}</div><div class="my-3"><img src="assets/images/qris-code.svg" alt="QRIS Code" width="220" height="220" class="border rounded-4 p-2 bg-white"></div><p class="small text-secondary mb-4">Pindai kode QRIS di atas menggunakan aplikasi Mobile Banking atau E-Wallet pilihan Anda.</p><div class="d-flex justify-content-center gap-3"><button class="btn btn-kantin-primary" onclick="renderPaymentState('success')">Saya Sudah Bayar (Simulasi)</button><button class="btn btn-kantin-danger-soft" onclick="konfirmasiBatalkanPembayaran()">Batalkan Pembayaran</button></div></div>`;
  let rem = 582; paymentCountdownInterval = setInterval(() => { rem--; const t = document.getElementById('qrisTimerText'); if (!t) { clearInterval(paymentCountdownInterval); return; } if (rem <= 0) { clearInterval(paymentCountdownInterval); renderPaymentState('expired'); return; } t.textContent = `${String(Math.floor(rem / 60)).padStart(2, '0')}:${String(rem % 60).padStart(2, '0')}`; }, 1000);
}
function initStatus() { const s = document.getElementById('orderStatusSelector'); if (!s) return; const o = getActiveOrder(), init = o ? o.status : 'empty'; s.value = init; renderOrderStatusState(init); s.addEventListener('change', (e) => renderOrderStatusState(e.target.value)); }
function selesaikanPesananAktif() { const o = getActiveOrder(); if (o) { const h = getHistory(); h.unshift({ kode: o.kode, waktu: 'Baru saja • ' + o.waktuPesan, kiosId: o.kiosId || 'kios-1', kiosNama: o.kiosNama, img: 'assets/images/kios-1.svg', ringkasan: o.itemsText, total: o.total, status: 'Selesai' }); saveHistory(h); saveActiveOrder(null); } window.location.href = 'riwayat-pesanan.html'; }
function renderOrderStatusState(state) {
  const el = document.getElementById('orderStatusContainer'); if (!el) return;
  if (state === 'loading') { el.innerHTML = `<div class="card-kantin p-4"><div class="skeleton mb-3" style="height:28px;width:260px;"></div><div class="skeleton mb-3" style="height:90px;width:100%;"></div><div class="skeleton" style="height:140px;width:100%;"></div></div>`; return; }
  if (state === 'empty') { el.innerHTML = `<div class="card-kantin p-5 text-center"><div class="surface-green-box d-inline-flex align-items-center justify-content-center mb-3" style="width:64px;height:64px;"><i class="fa-solid fa-receipt fs-3" style="color:var(--green-900);"></i></div><h3 class="fw-bold fs-5 mb-2">Belum Ada Pesanan Aktif</h3><p class="text-secondary mb-4">Kamu belum memiliki pesanan yang sedang berlangsung saat ini.</p><a href="jelajah-kios.html" class="btn btn-kantin-primary">Pesan Makanan Sekarang</a></div>`; return; }
  if (state === 'error') { el.innerHTML = `<div class="card-kantin p-5 text-center"><div class="surface-danger-box d-inline-flex align-items-center justify-content-center mb-3" style="width:64px;height:64px;"><i class="fa-solid fa-triangle-exclamation fs-3" style="color:var(--status-danger);"></i></div><h3 class="fw-bold fs-5 mb-2">Gagal Memuat Status Pesanan</h3><p class="text-secondary mb-4">Koneksi ke server kios terputus. Silakan segarkan halaman.</p><button class="btn btn-kantin-primary" onclick="renderOrderStatusState('preparing')">Muat Ulang Status</button></div>`; return; }
  const o = getActiveOrder() || { kodeAmbil: '#A-14', kiosNama: 'Warung Bu Sri', loket: 'Loket Blok A-01', waktuPesan: '11:32 WIB', estimasi: 'Estimasi 6 menit', itemsText: '1x Nasi Ayam Geprek Sambal Bawang, 1x Es Teh Manis Jumbo', total: 22000 };
  const isReady = state === 'ready';
  el.innerHTML = `<div class="card-kantin p-4 mb-4"><div class="d-flex justify-content-between align-items-center pb-3 mb-4 border-bottom"><div><span class="${isReady ? 'badge-pill-green' : 'badge-pill-amber'} mb-2 d-inline-block">${isReady ? '<i class="fa-solid fa-bell-concierge me-1"></i>Pesanan Siap Diambil di Loket!' : '<i class="fa-solid fa-fire-burner me-1"></i>Sedang Disiapkan oleh Kios'}</span><h2 class="fw-bold fs-5 mb-0">${o.kiosNama} • Kode Ambil: <span style="color:var(--green-900);">${o.kodeAmbil}</span></h2></div>${!isReady ? `<button class="btn btn-kantin-danger-soft btn-sm" onclick="konfirmasiBatalkanPesanan()">Batalkan Sebelum Disiapkan</button>` : `<button class="btn btn-kantin-primary btn-sm" onclick="selesaikanPesananAktif()">Konfirmasi Sudah Diambil</button>`}</div><div class="d-flex justify-content-between align-items-center my-4 px-5"><div class="stepper-item completed"><div class="stepper-circle"><i class="fa-solid fa-check"></i></div><div class="fw-bold small">Pesanan Diterima</div><div class="text-secondary" style="font-size:12px;">${o.waktuPesan}</div></div><div class="flex-grow-1 border-top border-2 border-success mx-2"></div><div class="stepper-item ${isReady ? 'completed' : 'active'}"><div class="stepper-circle"><i class="fa-solid fa-utensils"></i></div><div class="fw-bold small">Sedang Disiapkan</div><div class="text-secondary" style="font-size:12px;">${isReady ? 'Selesai dimasak' : o.estimasi}</div></div><div class="flex-grow-1 border-top border-2 ${isReady ? 'border-success' : ''} mx-2"></div><div class="stepper-item ${isReady ? 'active' : ''}"><div class="stepper-circle"><i class="fa-solid fa-bag-shopping"></i></div><div class="fw-bold small">Siap Diambil</div><div class="text-secondary" style="font-size:12px;">${o.loket}</div></div></div><div class="surface-cream-box p-3 mt-3 d-flex justify-content-between align-items-center"><div class="small"><strong>Detail Item:</strong> ${o.itemsText}</div><div class="fw-bold" style="color:var(--green-900);">Total Lunas: ${formatRupiah(o.total)}</div></div></div>`;
}
function initHistory() {
  const c = document.getElementById('riwayatListContainer'); if (!c) return; let f = 'Semua';
  const render = () => {
    const h = getHistory();
    document.getElementById('filterRiwayatAll').textContent = `Semua (${h.length})`;
    document.getElementById('filterRiwayatDone').textContent = `Selesai (${h.filter(x => x.status === 'Selesai').length})`;
    document.getElementById('filterRiwayatCancel').textContent = `Dibatalkan (${h.filter(x => x.status === 'Dibatalkan').length})`;
    c.innerHTML = h.filter(x => f === 'Semua' || x.status === f).map(x => { const b = x.status === 'Dibatalkan'; return `<div class="card-kantin p-4 d-flex justify-content-between align-items-center"><div class="d-flex align-items-center gap-4"><img src="${x.img}" class="rounded-3 border" style="width:72px;height:72px;object-fit:cover;" alt="${x.kiosNama}"><div><div class="d-flex align-items-center gap-2 mb-1"><span class="${b ? 'badge-pill-danger' : 'badge-pill-green'}">${b ? 'Dibatalkan' : 'Selesai Diambil'}</span><span class="small text-secondary">${x.waktu} • ${x.kode}</span></div><div class="fw-bold fs-6">${x.kiosNama}</div><div class="small text-secondary">${x.ringkasan}</div></div></div><div class="text-end"><div class="small text-secondary">Total Bayar</div><div class="fw-bold fs-6 mb-2 ${b ? 'text-secondary' : ''}">${formatRupiah(x.total)}</div><a href="kios.html?kios=${x.kiosId}" class="btn btn-sm btn-kantin-outline">Pesan Lagi</a></div></div>`; }).join('');
  };
  render();
  document.querySelectorAll('.riwayat-filter-btn').forEach(b => b.addEventListener('click', () => { document.querySelectorAll('.riwayat-filter-btn').forEach(x => x.className = 'btn btn-kantin-outline btn-sm rounded-pill px-3 riwayat-filter-btn'); b.className = 'btn btn-kantin-primary btn-sm rounded-pill px-3 riwayat-filter-btn'; f = b.dataset.status; render(); }));
}
function konfirmasiGantiKios() { const c = getCart(); showFigmaModal({ type: 'question', title: 'Ganti Kios Pemesanan?', text: `Keranjang saat ini berisi menu dari ${c.kiosNama}. Memilih kios baru akan menghapus item yang sudah ada di keranjang.`, confirmText: 'Ya, Ganti Kios', cancelText: 'Tetap di Sini', onConfirm: () => { c.items = []; saveCart(c); window.location.href = 'jelajah-kios.html'; }}); }
function konfirmasiBatalkanPembayaran() { showFigmaModal({ type: 'danger', title: 'Batalkan Pembayaran QRIS?', text: 'Transaksi QRIS ini akan dibatalkan dan pesanan tidak akan diteruskan ke kios penjual.', confirmText: 'Ya, Batalkan Pembayaran', cancelText: 'Lanjutkan Bayar', onConfirm: () => { saveActiveOrder(null); window.location.href = 'keranjang.html'; }}); }
function konfirmasiBatalkanPesanan() { showFigmaModal({ type: 'danger', title: 'Batalkan Pesanan Sebelum Disiapkan?', text: 'Pesanan hanya dapat dibatalkan sebelum penjual mulai memasak. Dana pembayaran akan dikembalikan otomatis.', extraHtml: `<label class="form-label fw-semibold small mb-1">Alasan Pembatalan</label><select id="alasanBatalSelect" class="form-select form-select-sm input-kantin"><option>Ingin mengubah menu / jumlah pesanan</option><option>Salah memilih kios pemesanan</option><option>Jadwal kuliah berubah mendadak</option></select>`, confirmText: 'Ya, Batalkan Pesanan', cancelText: 'Kembali', onConfirm: () => { const o = getActiveOrder(); if (o) { const h = getHistory(); h.unshift({ kode: o.kode, waktu: 'Dibatalkan • ' + o.waktuPesan, kiosId: o.kiosId || 'kios-1', kiosNama: o.kiosNama, img: 'assets/images/kios-1.svg', ringkasan: o.itemsText + ' (Dibatalkan sebelum disiapkan)', total: o.total, status: 'Dibatalkan' }); saveHistory(h); saveActiveOrder(null); } window.location.href = 'riwayat-pesanan.html'; }}); }
/* --- AUTO-REPLACE PLACEHOLDER GAMBAR KIOS & MENU --- */
document.addEventListener('DOMContentLoaded', () => {
  const imageMap = {
    'kios-1.svg': 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    'kios-2.svg': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    'kios-3.svg': 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    'kios-4.svg': 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80',
    'menu-geprek.svg': 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
    'menu-soto.svg': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    'menu-esteh.svg': 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
    'menu-bakso.svg': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80'
  };

  function applyRealImages() {
    document.querySelectorAll('img').forEach((img) => {
      const src = img.getAttribute('src') || '';
      const fileName = src.split('/').pop();
      if (imageMap[fileName]) {
        img.src = imageMap[fileName];
      }
    });
  }

  applyRealImages();

  // Pantau perubahan dinamis (saat ganti state di jelajah-kios.html)
  const observer = new MutationObserver(() => applyRealImages());
  observer.observe(document.body, { childList: true, subtree: true });
});
