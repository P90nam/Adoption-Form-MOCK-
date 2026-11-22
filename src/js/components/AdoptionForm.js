// This component creates the adoption form as HTML.
// Versi modular komponen ini menerima hewan dan pengguna secara langsung.
export const AdoptionForm = (animal, user) => {
  // Ask the user to log in before showing personal fields.
  if (!user) {
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

  // Convert a list of text values into select options.
  const createOptions = (items) =>
    items.map((item) => `<option>${item}</option>`).join("");

  return `
    <div class="adoption-form-container">
      <!-- Show the selected animal at the top of the form. -->
      <div class="form-animal-preview">
        <span class="preview-emoji">${animal.image}</span>
        <div>
          <h3>${animal.name}</h3>
          <p>${animal.breed} · ${animal.age}</p>
        </div>
      </div>

      <!-- Submit the form using the selected animal's ID. -->
      <form id="adoptionForm" onsubmit="submitAdoption(event, ${animal.id})">
        <div class="form-group">
          <label>Nama Lengkap</label>
          <input type="text" value="${user.name}" readonly class="input-readonly" />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input type="email" value="${user.email}" readonly class="input-readonly" />
        </div>

        <div class="form-group">
          <label>Nomor Telepon *</label>
          <input type="tel" id="phone" placeholder="08xxxxxxxxxx" required />
        </div>

        <div class="form-group">
          <label>Alamat Lengkap *</label>
          <textarea id="address" placeholder="Masukkan alamat lengkap kamu..." required rows="3"></textarea>
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
};
