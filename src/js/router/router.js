// ─── ROUTER ──────────────────────────────────────────────
// Chooses and renders the page for the current state.

// ─── ROUTER ─────────────────────────────────────────────────
function render() {
  // Elemen #app adalah tempat semua tampilan halaman ditaruh.
  const app = document.getElementById('app');
  // Navbar selalu diperbarui agar status login dan menu aktif tetap sinkron.
  renderNavbar();
  // state.page menentukan fungsi halaman mana yang membangun innerHTML.
  switch(state.page) {
    case 'home':       app.innerHTML = renderHome(); break;
    case 'adopt':      app.innerHTML = renderAdopt(); break;
    case 'login':      app.innerHTML = renderLogin(); break;
    case 'register':   app.innerHTML = renderRegister(); break;
    case 'adoptForm':  app.innerHTML = renderAdoptionForm(); break;
    case 'success':    app.innerHTML = renderSuccess(); break;
    case 'about':      app.innerHTML = renderAbout(); break;
    case 'reviews':    app.innerHTML = renderReviews(); break;
    default:           app.innerHTML = renderHome();
  }
  // Setiap perpindahan halaman menggulir tampilan kembali ke bagian atas.
  window.scrollTo(0,0);
}
