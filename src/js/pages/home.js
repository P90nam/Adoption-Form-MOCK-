// ─── HOME PAGE ───────────────────────────────────────────
// Displays featured animals and adoption steps.

function renderHome() {
  // Ambil empat hewan berstatus tersedia untuk ditampilkan sebagai unggulan.
  const featured = animals.filter(a=>a.status==='Tersedia').slice(0,4);
  return `
    <div class="page">
      <section class="hero">
        <div class="hero-content">
          <div class="hero-eyebrow">🐾 Pusat Adopsi Hewan Kudus</div>
          <h1 class="hero-title">Temukan Sahabat<br><em>Berbulu</em> Barumu</h1>
          <p class="hero-sub">PawHome menghubungkan hewan peliharaan yang membutuhkan rumah dengan keluarga yang penuh kasih. Proses adopsi mudah, transparan, dan terpercaya.</p>
          <div class="hero-actions">
            <button class="btn-primary" onclick="navigateTo('adopt')">🐾 Lihat Hewan Tersedia</button>
            <button class="btn-secondary" onclick="navigateTo('about')">Pelajari Lebih Lanjut</button>
          </div>
        </div>
        <div class="hero-visual">
          <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=420&fit=crop&q=80" alt="Kucing lucu" style="border-radius:var(--radius);width:100%;height:210px;object-fit:cover;box-shadow:var(--shadow);margin-top:24px;">
          <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&h=420&fit=crop&q=80" alt="Anjing lucu" style="border-radius:var(--radius);width:100%;height:210px;object-fit:cover;box-shadow:var(--shadow);">
          <img src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=420&fit=crop&q=80" alt="Kucing Persian" style="border-radius:var(--radius);width:100%;height:210px;object-fit:cover;box-shadow:var(--shadow);">
          <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=420&fit=crop&q=80" alt="Anjing Shih Tzu" style="border-radius:var(--radius);width:100%;height:210px;object-fit:cover;box-shadow:var(--shadow);margin-top:24px;">
        </div>
      </section>

      <div class="stats-bar">
        <div class="stat-item"><div class="stat-num">${animals.filter(a=>a.status==='Tersedia').length}</div><div class="stat-label">Hewan Tersedia</div></div>
        <div class="stat-item"><div class="stat-num">42+</div><div class="stat-label">Adopsi Berhasil</div></div>
        <div class="stat-item"><div class="stat-num">100%</div><div class="stat-label">Proses Transparan</div></div>
        <div class="stat-item"><div class="stat-num">3</div><div class="stat-label">Jenis Hewan</div></div>
      </div>

      <section class="section">
        <div class="section-label">Hewan Terbaru</div>
        <h2 class="section-title">Siap Mencari Keluarga Baru</h2>
        <p class="section-sub">Semua hewan telah melalui pemeriksaan kesehatan oleh dokter hewan kami.</p>
        <div class="animals-grid">${featured.map(AnimalCard).join('')}</div>
        <div style="text-align:center;margin-top:36px">
          <button class="btn-secondary" onclick="navigateTo('adopt')">Lihat Semua Hewan →</button>
        </div>
      </section>

      <section style="background:var(--bg2);padding:72px 0">
        <div class="section" style="padding-top:0;padding-bottom:0">
          <div class="section-label">Cara Adopsi</div>
          <h2 class="section-title">Langkah Mudah Adopsi</h2>
          <p class="section-sub">Proses adopsi kami dirancang untuk memastikan hewan mendapatkan rumah yang tepat.</p>
          <div class="steps-grid">
            ${[
              {num:'01',icon:'🔍',title:'Pilih Hewan',desc:'Jelajahi daftar hewan tersedia. Baca profil lengkap dan kenali kepribadiannya.'},
              {num:'02',icon:'📝',title:'Isi Formulir',desc:'Lengkapi formulir adopsi dengan informasi diri dan kondisi tempat tinggalmu.'},
              {num:'03',icon:'✅',title:'Verifikasi',desc:'Tim kami akan mereview permohonanmu dalam 1-3 hari kerja.'},
              {num:'04',icon:'🏠',title:'Bawa Pulang',desc:'Setelah disetujui, jadwalkan kunjungan dan bawa sahabat berbulu barumu ke rumah!'},
            ].map(s=>`
              <div class="step-card">
                <div class="step-num">${s.num}</div>
                <div class="step-icon">${s.icon}</div>
                <div class="step-title">${s.title}</div>
                <div class="step-desc">${s.desc}</div>
              </div>`).join('')}
          </div>
        </div>
      </section>

      ${renderFooter()}
    </div>`;
}
