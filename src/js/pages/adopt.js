// ─── ADOPT PAGE ──────────────────────────────────────────
// Lists animals and applies the selected species filter.

function renderAdopt() {
  // Daftar filter yang tersedia untuk jenis hewan.
  const filters = ['Semua','Kucing','Anjing','Kelinci'];
  // Jika filter Semua gunakan seluruh data, jika tidak cocokkan properti species.
  const filtered = state.filter==='Semua' ? animals : animals.filter(a=>a.species===state.filter);
  return `
    <div class="page">
      <div class="adopt-hero">
        <h1 class="adopt-hero-title">Hewan yang <em>Menunggu</em> Rumah</h1>
        <p class="adopt-hero-sub">Setiap hewan di sini membutuhkan kasih sayang dan rumah yang penuh cinta. Mungkin kamu adalah orang yang ditunggu-tunggu.</p>
      </div>
      <div class="filter-bar">
        <span class="filter-label">Filter:</span>
        ${filters.map(f=>`<button class="filter-btn ${state.filter===f?'active':''}" onclick="setFilter('${f}')">${f==='Semua'?'🐾 Semua':f==='Kucing'?'🐱 '+f:f==='Anjing'?'🐶 '+f:'🐰 '+f}</button>`).join('')}
      </div>
      <div class="adopt-grid-section">
        <p class="results-count">${filtered.length} hewan ditemukan</p>
        <div class="animals-grid">${filtered.map(AnimalCard).join('')}</div>
      </div>
      ${renderFooter()}
    </div>`;
}
