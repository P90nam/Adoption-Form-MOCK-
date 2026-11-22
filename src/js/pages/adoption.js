// ─── ADOPTION FORM PAGE ─────────────────────────────────
// Shows the selected animal and adoption application form.

function renderAdoptionForm() {
  // Cari hewan yang dipilih dari state.adoptionTarget.
  const animal = animals.find(a=>a.id===state.adoptionTarget);
  // Jika target tidak valid, arahkan pengguna kembali ke daftar.
  if (!animal) { navigateTo('adopt'); return ''; }
  return `
    <div class="page form-page">
      <button style="background:none;border:none;color:var(--text-muted);margin-bottom:16px;font-size:0.9rem;cursor:pointer;display:flex;align-items:center;gap:6px" onclick="navigateTo('adopt')">← Kembali</button>
      <h1 class="form-page-title">Formulir Adopsi</h1>
      <p class="form-page-sub">Lengkapi formulir di bawah ini untuk mengajukan permohonan adopsi <strong>${animal.name}</strong>.</p>
      ${AdoptionFormHTML(animal)}
    </div>`;
}
