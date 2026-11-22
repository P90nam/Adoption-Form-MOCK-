// ─── ABOUT PAGE ──────────────────────────────────────────
// Displays the PawHome mission and team information.

function renderAbout() {
  // Data projectDetails menjelaskan tujuan pembelajaran yang menjadi tema aplikasi.
  // Project details explain the purpose of this website.
  const projectDetails = [
    {
      icon: '💻',
      title: 'Website Biasa',
      desc: 'PawHome adalah website sederhana yang dibuat untuk latihan dan pembelajaran.',
    },
    {
      icon: '🎓',
      title: 'Belajar Coding',
      desc: 'Website ini digunakan untuk mempraktikkan HTML, CSS, dan JavaScript.',
    },
    {
      icon: '🐾',
      title: 'Tema Adopsi Hewan',
      desc: 'Seluruh fitur dibuat sebagai contoh aplikasi adopsi hewan.',
    },
  ];


  // Team data is displayed in the card grid below.
  const team = [
    {avatar:'👨‍💻',name:'Muhammad Arraya Azizzaki Barata',role:'Lead Developer'},
  ];

  return `
    <div class="page">
      <div class="about-hero">
        <h1 class="about-hero-title">Tentang <em>PawHome</em></h1>
        <p class="about-hero-sub">PawHome adalah website biasa yang dibuat untuk belajar membuat aplikasi web.</p>
      </div>
      <section class="section">
        <div class="section-label">Tentang Website</div>
        <h2 class="section-title">Website untuk Belajar</h2>
        <div class="mission-grid">${projectDetails.map(detail=>`
          <div class="mission-card">
            <div class="mission-icon">${detail.icon}</div>
            <div class="mission-title">${detail.title}</div>
            <div class="mission-desc">${detail.desc}</div>
          </div>`).join('')}</div>
      </section>
      <section class="section">
        <div class="section-label">Misi & Nilai</div>
        <h2 class="section-title">Mengapa PawHome?</h2>
        <div class="mission-grid">${missions.map(m=>`
          <div class="mission-card">
            <div class="mission-icon">${m.icon}</div>
            <div class="mission-title">${m.title}</div>
            <div class="mission-desc">${m.desc}</div>
          </div>`).join('')}</div>
      </section>
      <section style="background:var(--bg2);padding:72px 0">
        <div class="section" style="padding-top:0;padding-bottom:0">
          <div class="section-label">Tim Kami</div>
          <h2 class="section-title">Orang-orang di Balik PawHome</h2>
          <div class="team-grid">${team.map(t=>`
            <div class="team-card">
              <div class="team-avatar">${t.avatar}</div>
              <div class="team-name">${t.name}</div>
              <div class="team-role">${t.role}</div>
            </div>`).join('')}</div>
        </div>
      </section>
      ${renderFooter()}
    </div>`;
}
