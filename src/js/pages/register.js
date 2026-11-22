// ─── REGISTER PAGE ───────────────────────────────────────
// Renders the account registration form.

function renderRegister() {
  // Form registrasi memanggil handleRegister melalui atribut onsubmit.
  return `
    <div class="page auth-page">
      <div class="auth-card">
        <div class="auth-logo">
          <div class="auth-logo-icon">🐾</div>
          <div class="auth-logo-name">PawHome</div>
        </div>
        <h2 class="auth-title">Buat Akun</h2>
        <p class="auth-sub">Bergabung dan mulai proses adopsi</p>
        <div class="error-msg" id="regError"></div>
        <form class="auth-form" onsubmit="handleRegister(event)">
          <div class="form-group">
            <label>Nama Lengkap</label>
            <input type="text" id="regName" placeholder="Nama lengkapmu" required />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" id="regEmail" placeholder="email@contoh.com" required />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" id="regPass" placeholder="Min. 6 karakter" required minlength="6"/>
          </div>
          <div class="form-group">
            <label>Konfirmasi Password</label>
            <input type="password" id="regPass2" placeholder="Ulangi password" required />
          </div>
          <button type="submit" class="btn-auth">Buat Akun</button>
        </form>
        <div class="auth-switch">Sudah punya akun? <a onclick="navigateTo('login')">Masuk</a></div>
      </div>
    </div>`;
}
