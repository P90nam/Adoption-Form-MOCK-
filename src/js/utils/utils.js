// ─── UI UTILITIES ─────────────────────────────────────────
// Small helpers for modals and toast notifications.

// ─── MODAL ──────────────────────────────────────────────────
// Opens a popup containing the selected animal's complete information.
function showAnimalModal(animal) {
  // Map the animal status to a CSS class for the status label color.
  const sc = animal.status==='Tersedia'?'status-available':animal.status==='Proses Adopsi'?'status-process':'status-adopted';

  // Create the dark background that covers the page.
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';

  // Close the popup only when the user clicks outside the modal box.
  overlay.onclick = (e) => { if (e.target===overlay) overlay.remove(); };

  // Build the modal content using values from the selected animal.
  overlay.innerHTML = `
    <div class="modal">
      <div class="modal-header">
        <div class="modal-emoji">${animal.image}</div>
        <div>
          <h2 class="modal-animal-name">${animal.name}</h2>
          <p class="modal-animal-breed">${animal.breed}</p>
          <span class="card-status ${sc}" style="display:inline-block;margin-top:8px">${animal.status}</span>
        </div>
        <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">✕</button>
      </div>
      <div class="modal-body">
        <div class="modal-info-grid">
          <div class="info-item"><div class="info-key">Usia</div><div class="info-val">${animal.age}</div></div>
          <div class="info-item"><div class="info-key">Jenis Kelamin</div><div class="info-val">${animal.gender}</div></div>
          <div class="info-item"><div class="info-key">Berat</div><div class="info-val">${animal.weight}</div></div>
          <div class="info-item"><div class="info-key">Warna</div><div class="info-val">${animal.color}</div></div>
          <div class="info-item"><div class="info-key">Vaksinasi</div><div class="info-val">${animal.vaccinated?'✅ Sudah':'❌ Belum'}</div></div>
          <div class="info-item"><div class="info-key">Sterilisasi</div><div class="info-val">${animal.neutered?'✅ Sudah':'❌ Belum'}</div></div>
        </div>
        <p class="modal-desc">${animal.description}</p>
        <div class="card-tags" style="margin-bottom:20px">${animal.personality.map(p=>`<span class="tag">${p}</span>`).join('')}</div>
        ${animal.status==='Tersedia'
          ? `<button class="btn-adopt-modal" onclick="this.closest('.modal-overlay').remove();startAdoption(${animal.id})">🐾 Adopsi ${animal.name}</button>`
          : `<button class="btn-adopt-modal" style="background:#CCC;cursor:default" disabled>Sedang dalam Proses Adopsi</button>`}
      </div>
    </div>`;

  // Add the finished modal to the page so it becomes visible.
  document.body.appendChild(overlay);
}

// ─── TOAST ──────────────────────────────────────────────────
// Displays a short success or error message in the top-right area.
function showToast(msg, type='success') {
  // Remove old messages so only one toast can appear at a time.
  document.querySelectorAll('.toast').forEach(t=>t.remove());

  // Create the toast element and choose the success or error icon.
  const t = document.createElement('div');
  t.className = `toast toast-${type}`;
  t.innerHTML = `<span class="toast-icon">${type==='success'?'✓':'✕'}</span><span>${msg}</span>`;

  // Insert the toast into the page and start its enter animation.
  document.body.appendChild(t);
  setTimeout(()=>t.classList.add('show'), 10);

  // Fade out after three seconds, then remove the element from the DOM.
  setTimeout(()=>{ t.classList.remove('show'); setTimeout(()=>t.remove(),300); }, 3000);
}
