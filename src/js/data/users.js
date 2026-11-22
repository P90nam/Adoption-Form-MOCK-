// Sumber data pengguna untuk versi modular aplikasi.
export const users = [
  {
    id: 1,
    name: "Admin PawHome",
    email: "admin@pawhome.id",
    password: "admin123",
    role: "admin",
    avatar: "🐾",
  },
  {
    id: 2,
    name: "Zaki",
    email: "zaki@email.com",
    password: "turu123",
    role: "user",
    avatar: "👤",
    phone: "08123456789",
    address: "Kudus, Jawa Tengah",
  },
  {
    id: 3,
    name: "Siti Rahma",
    email: "siti@email.com",
    password: "siti123",
    role: "user",
    avatar: "👤",
    phone: "08987654321",
    address: "Semarang, Jawa Tengah",
  },
];

export const adoptionRequests = [
  {
    id: 1,
    userId: 2,
    animalId: 1,
    status: "Menunggu Review",
    date: "2026-05-20",
    reason: "Saya ingin memelihara kucing karena rumah saya sudah siap.",
    experience: "Sudah pernah memelihara kucing sebelumnya.",
  },
];

// Mencari akun dengan mencocokkan email dan password.
export const findUser = (email, password) =>
  users.find((u) => u.email === email && u.password === password);
