// ─── FOOTER COMPONENT ────────────────────────────────────
// Shared footer markup used by multiple pages.

function renderFooter() {
  // Menyimpan satu pembangun footer agar tampilan yang sama dipakai di banyak halaman.
  return `
    <footer>
      <div class="footer-inner">
        <div>
          <div class="footer-brand-name">🐾 PawHome</div>
          <p class="footer-desc">Platform adopsi hewan online.</p>
        </div>
        <div>
          <div class="footer-col-title">Navigasi</div>
          <ul class="footer-links">
            <li><a onclick="navigateTo('home')">Beranda</a></li>
            <li><a onclick="navigateTo('adopt')">Adopsi</a></li>
            <li><a onclick="navigateTo('about')">Tentang Kami</a></li>
            <li><a onclick="navigateTo('reviews')">Ulasan</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-col-title">Kontak</div>
          <ul class="footer-links">
            <li><a>📍 Valve lololol</a></li>
            <li><a>📞 (0291) 123-456</a></li>
            <li><a>✉️ halo@pawhome.id</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">© 2026 PawHome Adoption Center · Kudus, Jawa Tengah · Dibuat dengan Zaki</div>
    </footer>`;
}
