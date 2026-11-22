// ─── UI COMPONENTS ───────────────────────────────────────
// Reusable HTML component functions used across multiple pages.

// ─── COMPONENT: NAVBAR ──────────────────────────────────────
function renderNavbar() {
  // Konfigurasi menu utama dibuat sebagai array agar mudah dirender.
  const links = [
    { id:'home', label:'Beranda' },
    { id:'adopt', label:'Adopsi' },
    { id:'about', label:'Tentang Kami' },
    { id:'reviews', label:'Ulasan' },
  ];
  document.getElementById('navbar-root').innerHTML = `
    <nav class="navbar">
      <div class="nav-brand" onclick="navigateTo('home')">
        <span class="brand-icon">🐾</span>
        <span class="brand-name">PawHome</span>
      </div>
      <div class="nav-links">
        ${links.map(l => `
          <a
            href="#${l.id}"
            class="nav-link ${state.page===l.id?'active':''}"
            onclick="event.preventDefault(); navigateTo('${l.id}')"
          >${l.label}</a>
        `).join('')}
      </div>
      <div class="nav-auth">
        ${state.user ? `
          <div class="user-menu">
            <span class="user-avatar">${state.user.avatar}</span>
            <span class="user-name">${state.user.name.split(' ')[0]}</span>
            <button class="btn-logout" onclick="handleLogout()">Keluar</button>
          </div>
        ` : `
          <button class="btn-login" onclick="navigateTo('login')">Masuk</button>
          <button class="btn-register" onclick="navigateTo('register')">Daftar</button>
        `}
      </div>
    </nav>
  `;
}

// ─── COMPONENT: ANIMAL CARD ─────────────────────────────────
function AnimalCard(a) {
  const sc = a.status==='Tersedia'?'status-available':a.status==='Proses Adopsi'?'status-process':'status-adopted';
  return `
    <div class="animal-card" onclick="viewAnimal(${a.id})">
      <div class="card-emoji-wrap" style="background:${a.color_tag}22;border-bottom:3px solid ${a.color_tag}">
        <span class="card-emoji">${a.image}</span>
        <span class="card-status ${sc}">${a.status}</span>
      </div>
      <div class="card-body">
        <h3 class="card-name">${a.name}</h3>
        <p class="card-breed">${a.breed}</p>
        <div class="card-meta">
          <span class="meta-item">📅 ${a.age}</span>
          <span class="meta-item">${a.gender==='Jantan'?'♂':'♀'} ${a.gender}</span>
          <span class="meta-item">⚖️ ${a.weight}</span>
        </div>
        <div class="card-tags">${a.personality.map(p=>`<span class="tag">${p}</span>`).join('')}</div>
        <div class="card-badges">
          ${a.vaccinated?'<span class="badge badge-green">✓ Vaksin</span>':'<span class="badge badge-gray">Belum Vaksin</span>'}
          ${a.neutered?'<span class="badge badge-green">✓ Steril</span>':''}
        </div>
        ${a.status==='Tersedia'
          ? `<button class="btn-adopt-card" onclick="event.stopPropagation();startAdoption(${a.id})">Adopsi Sekarang</button>`
          : `<button class="btn-adopt-card disabled" disabled>Sedang Diproses</button>`}
      </div>
    </div>`;
}

// ─── COMPONENT: ADOPTION FORM ───────────────────────────────
// Creates option elements from an array of simple text values.
function createOptions(items) {
  return items.map((item) => `<option>${item}</option>`).join("");
}

// Builds the adoption form and shows a login prompt for guests.
function AdoptionFormHTML(animal) {
  if (!state.user) {
    return `
      <div class="adoption-login-prompt">
        <div class="prompt-icon">🔐</div>
        <h3>Login Diperlukan</h3>
        <p>Kamu harus login terlebih dahulu untuk mengajukan adopsi.</p>
        <button class="btn-primary" onclick="navigateTo('login')">
          Login Sekarang
        </button>
      </div>
    `;
  }

  return `
    <div class="adoption-form-container">
      <!-- Preview of the animal chosen by the user. -->
      <div class="form-animal-preview">
        <span class="preview-emoji">${animal.image}</span>
        <div>
          <h3>${animal.name}</h3>
          <p>${animal.breed} · ${animal.age}</p>
        </div>
      </div>

      <!-- Sending this form passes the animal ID to the submit handler. -->
      <form id="adoptionForm" onsubmit="submitAdoption(event, ${animal.id})">
        <div class="form-group">
          <label>Nama Lengkap</label>
          <input type="text" value="${state.user.name}" readonly class="input-readonly" />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input type="email" value="${state.user.email}" readonly class="input-readonly" />
        </div>

        <div class="form-group">
          <label>Nomor Telepon *</label>
          <input type="tel" id="phone" placeholder="08xxxxxxxxxx" required />
        </div>

        <div class="form-group">
          <label>Alamat Lengkap *</label>
          <textarea id="address" placeholder="Masukkan alamat lengkap..." required rows="3"></textarea>
        </div>

        <div class="form-group">
          <label>Alasan Adopsi *</label>
          <textarea id="reason" placeholder="Ceritakan mengapa kamu ingin mengadopsi ${animal.name}..." required rows="4"></textarea>
        </div>

        <div class="form-group">
          <label>Pengalaman Memelihara Hewan</label>
          <select id="experience">
            ${createOptions([
              "Belum pernah memelihara hewan",
              "Pernah memelihara (1-2 tahun)",
              "Berpengalaman (3-5 tahun)",
              "Sangat berpengalaman (5+ tahun)",
            ])}
          </select>
        </div>

        <div class="form-group">
          <label>Kondisi Tempat Tinggal</label>
          <select id="housing">
            ${createOptions([
              "Rumah / Landed House",
              "Apartemen / Flat",
              "Kos / Indekos",
            ])}
          </select>
        </div>

        <div class="form-check">
          <input type="checkbox" id="agree" required />
          <label for="agree">
            Saya menyetujui syarat & ketentuan adopsi PawHome dan berkomitmen
            merawat hewan dengan baik.
          </label>
        </div>

        <button type="submit" class="btn-submit-adopt">
          <span>🐾</span> Kirim Permohonan Adopsi
        </button>
      </form>
    </div>
  `;
}
