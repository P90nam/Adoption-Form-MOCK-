// ─── LOGIN PAGE ──────────────────────────────────────────
// Renders the login form and demo account information.

function renderLogin() {
  // Form login dipanggil oleh handler handleLogin saat dikirim.
  return `
    <div class="page auth-page">
      <div class="auth-card">
        <div class="auth-logo">
          <div class="auth-logo-icon">🐾</div>
          <div class="auth-logo-name">PawHome</div>
        </div>
        <h2 class="auth-title">Selamat Datang</h2>
        <p class="auth-sub">Masuk untuk mengajukan permohonan adopsi</p>
        <div class="error-msg" id="loginError"></div>
        <form class="auth-form" onsubmit="handleLogin(event)">
          <div class="form-group">
            <label>Email</label>
            <input type="email" id="loginEmail" placeholder="contoh@email.com" required />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" id="loginPass" placeholder="••••••••" required />
          </div>
          <button type="submit" class="btn-auth">Masuk</button>
        </form>
        <div class="auth-switch">Belum punya akun? <a onclick="navigateTo('register')">Daftar sekarang</a></div>
        <div class="demo-box">
          <p>Akun Demo</p>
          <div style="display:flex;flex-direction:column;gap:4px">
            <div><code>zaki@email.com</code> / <code>turu123</code></div>
            <div><code>admin@pawhome.id</code> / <code>admin123</code></div>
          </div>
        </div>
      </div>
    </div>`;
}
