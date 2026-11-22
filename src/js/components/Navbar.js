// components/Navbar.jsx
// Versi komponen navbar berformat ekspor untuk struktur modular alternatif.
export const Navbar = ({ currentPage, setPage, user, onLogout }) => {
  // Tautan navigasi utama berisi ID halaman dan label tampil.
  const navLinks = [
    { id: "home", label: "Beranda" },
    { id: "adopt", label: "Adopsi" },
    { id: "about", label: "Tentang Kami" },
  ];

  return `
    <nav class="navbar">
      <div class="nav-brand" onclick="navigateTo('home')">
        <span class="brand-icon">🐾</span>
        <span class="brand-name">PawHome</span>
      </div>
      <div class="nav-links">
        ${navLinks
          .map(
            (link) => `
          <a class="nav-link ${currentPage === link.id ? "active" : ""}"
             onclick="navigateTo('${link.id}')">${link.label}</a>
        `
          )
          .join("")}
      </div>
      <div class="nav-auth">
        ${
          user
            ? `
          <div class="user-menu">
            <span class="user-avatar">${user.avatar}</span>
            <span class="user-name">${user.name.split(" ")[0]}</span>
            <button class="btn-logout" onclick="handleLogout()">Keluar</button>
          </div>
        `
            : `
          <button class="btn-login" onclick="navigateTo('login')">Masuk</button>
          <button class="btn-register" onclick="navigateTo('register')">Daftar</button>
        `
        }
      </div>
      <button class="nav-toggle" onclick="toggleMobileMenu()">☰</button>
    </nav>
  `;
};
