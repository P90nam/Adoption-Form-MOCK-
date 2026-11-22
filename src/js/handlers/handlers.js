// ─── EVENT HANDLERS ─────────────────────────────────────
// Handles navigation, login, registration, filters, and adoption.

// ─── HANDLERS ───────────────────────────────────────────────
window.navigateTo = (page) => {
  // Perbarui halaman aktif lalu render ulang seluruh UI.
  state.page = page;
  render();
};

window.setFilter = (f) => {
  // Simpan filter dan kembali ke halaman daftar adopsi.
  state.filter = f;
  state.page = 'adopt';
  render();
};

window.viewAnimal = (id) => {
  // Cari hewan berdasarkan ID kartu yang diklik.
  const animal = animals.find(a=>a.id===id);
  // Hanya buka modal bila ID tersebut ditemukan.
  if (animal) showAnimalModal(animal);
};

window.startAdoption = (id) => {
  // Simpan target adopsi untuk digunakan form dan halaman sukses.
  state.adoptionTarget = id;
  state.page = 'adoptForm';
  render();
};

window.handleLogout = () => {
  // Kosongkan sesi pengguna aktif.
  state.user = null;
  // Beri feedback, lalu tampilkan halaman beranda.
  showToast('Berhasil keluar. Sampai jumpa!');
  navigateTo('home');
};

window.handleLogin = (e) => {
  // Cegah reload karena form login dikirim melalui JavaScript.
  e.preventDefault();
  // Ambil dan bersihkan nilai email serta ambil password mentah.
  const email = document.getElementById('loginEmail').value.trim();
  const pass = document.getElementById('loginPass').value;
  const errEl = document.getElementById('loginError');
  const found = state.registeredUsers.find(u=>u.email===email && u.password===pass);
  if (found) {
    // Simpan akun yang cocok sebagai pengguna aktif.
    state.user = found;
    showToast(`Selamat datang, ${found.name.split(' ')[0]}! 🐾`);
    const redirect = state.adoptionTarget ? 'adoptForm' : 'home';
    navigateTo(redirect);
  } else {
    // Tampilkan pesan kesalahan di bawah form.
    errEl.textContent = 'Email atau password salah. Coba lagi.';
    errEl.style.display = 'block';
  }
};

window.handleRegister = (e) => {
  e.preventDefault();
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const pass = document.getElementById('regPass').value;
  const pass2 = document.getElementById('regPass2').value;
  const errEl = document.getElementById('regError');
  if (pass !== pass2) { errEl.textContent='Password tidak cocok.'; errEl.style.display='block'; return; }
  if (state.registeredUsers.find(u=>u.email===email)) { errEl.textContent='Email sudah terdaftar.'; errEl.style.display='block'; return; }
  const newUser = { id: Date.now(), name, email, password: pass, role:'user', avatar:'👤' };
  state.registeredUsers.push(newUser);
  state.user = newUser;
  showToast(`Akun berhasil dibuat! Selamat datang, ${name.split(' ')[0]}! 🐾`);
  navigateTo('home');
};

window.submitAdoption = (e, animalId) => {
  e.preventDefault();
  const req = {
    id: Date.now(),
    userId: state.user.id,
    animalId,
    phone: document.getElementById('phone').value,
    address: document.getElementById('address').value,
    reason: document.getElementById('reason').value,
    experience: document.getElementById('experience').value,
    housing: document.getElementById('housing').value,
    status: 'Menunggu Review',
    date: new Date().toLocaleDateString('id-ID'),
  };
  state.adoptionRequests.push(req);
  // Update animal status
  const animal = animals.find(a=>a.id===animalId);
  if (animal) animal.status = 'Proses Adopsi';
  state.page = 'success';
  render();
};
