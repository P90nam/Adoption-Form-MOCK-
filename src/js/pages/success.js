// ─── ADOPTION SUCCESS PAGE ──────────────────────────────
// Confirms that an adoption request was submitted.

function renderSuccess() {
  // Ambil data hewan untuk menampilkan pesan; fallback dipakai jika data hilang.
  const animal = animals.find(a=>a.id===state.adoptionTarget) || {name:'hewan',image:'🐾'};
  return `
    <div class="page success-page">
      <div class="success-card">
        <div class="success-icon">${animal.image}</div>
        <h2 class="success-title">Permohonan Terkirim!</h2>
        <p class="success-msg">Permohonan adopsimu untuk <strong>${animal.name}</strong> telah berhasil dikirim. Tim kami akan menghubungimu dalam 1-3 hari kerja melalui email <strong>${state.user?.email||''}</strong>.</p>
        <div style="display:flex;flex-direction:column;gap:12px">
          <button class="btn-primary" onclick="navigateTo('adopt')">Lihat Hewan Lainnya</button>
          <button class="btn-secondary" onclick="navigateTo('home')">Kembali ke Beranda</button>
        </div>
      </div>
    </div>`;
}
