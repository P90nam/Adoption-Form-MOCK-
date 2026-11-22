// ─── DATA AND STATE ──────────────────────────────────────
// Stores animal data, user data, and shared application state.

// ─── DATA ───────────────────────────────────────────────────
// Daftar hewan yang menjadi sumber kartu hewan dan data modal detail.
const animals = [
  { id:1, name:"Mochi", species:"Kucing", breed:"Domestic Shorthair", age:"2 tahun", gender:"Betina", status:"Tersedia", color:"Orange & Putih", weight:"3.2 kg", vaccinated:true, neutered:true, description:"Mochi adalah kucing yang sangat manja dan suka bermain. Ia sangat cocok untuk keluarga yang memiliki anak-anak. Mochi sudah terbiasa hidup di dalam rumah dan senang dipeluk.", image:"🐱", color_tag:"#FF9F43", personality:["Manja","Aktif","Bersahabat"] },
  { id:2, name:"Bruno", species:"Anjing", breed:"Labrador Mix", age:"3 tahun", gender:"Jantan", status:"Tersedia", color:"Coklat", weight:"18 kg", vaccinated:true, neutered:false, description:"Bruno adalah anjing yang loyal dan penuh energi. Ia suka berlari di taman dan sangat baik dengan anak-anak. Bruno sudah terlatih perintah dasar seperti duduk dan diam.", image:"🐶", color_tag:"#8B5E3C", personality:["Loyal","Energik","Ramah"] },
  { id:3, name:"Luna", species:"Kucing", breed:"Persian Mix", age:"1 tahun", gender:"Betina", status:"Tersedia", color:"Abu-abu", weight:"2.8 kg", vaccinated:true, neutered:true, description:"Luna adalah kucing cantik dengan bulu lebat. Ia pemalu di awal namun sangat penyayang setelah mengenal pemiliknya. Cocok untuk rumah yang tenang.", image:"🐱", color_tag:"#A8A8B3", personality:["Pemalu","Penyayang","Tenang"] },
  { id:4, name:"Kopi", species:"Anjing", breed:"Shih Tzu Mix", age:"4 tahun", gender:"Jantan", status:"Tersedia", color:"Hitam & Putih", weight:"5.5 kg", vaccinated:true, neutered:true, description:"Kopi adalah anjing kecil yang sangat ceria dan suka bermain. Ia mudah beradaptasi dan cocok untuk tinggal di apartemen. Kopi sangat suka diajak jalan-jalan.", image:"🐶", color_tag:"#2C2C2C", personality:["Ceria","Adaptif","Playful"] },
  { id:5, name:"Bulan", species:"Kelinci", breed:"Holland Lop", age:"8 bulan", gender:"Betina", status:"Tersedia", color:"Putih", weight:"1.8 kg", vaccinated:false, neutered:false, description:"Bulan adalah kelinci mini yang sangat lucu. Ia suka makan sayuran segar dan bermain di dalam kandang yang besar. Sangat cocok untuk pemula.", image:"🐰", color_tag:"#F0F0F0", personality:["Lucu","Pendiam","Jinak"] },
  { id:6, name:"Oreo", species:"Kucing", breed:"Domestic Longhair", age:"5 tahun", gender:"Jantan", status:"Proses Adopsi", color:"Hitam & Putih", weight:"4.1 kg", vaccinated:true, neutered:true, description:"Oreo adalah kucing dewasa yang tenang dan mandiri. Ia sudah terbiasa hidup bersama kucing lain. Sangat cocok untuk orang yang sibuk.", image:"🐱", color_tag:"#1A1A2E", personality:["Mandiri","Tenang","Dewasa"] },
  { id:7, name:"Hanan", species:"Anjing", breed:"Furry", age:"16 tahun", gender:"Jantan", status:"Tersedia", color:"Hitam", weight:"200 kg", vaccinated:true, neutered:true, description:"Hanan adalah orang gila yang berpura pura menjadi anjing.", image:"🐶", color_tag:"#000000", personality:["Suka makan semen","Sudah mati"] }
  ];

// Akun bawaan yang digunakan sebagai data login di memori aplikasi.
const usersDB = [
  { id:1, name:"Admin PawHome", email:"admin@pawhome.id", password:"admin123", role:"admin", avatar:"🐾" },
  { id:2, name:"Muhammad Arraya Azizzaki Barata", email:"zaki@email.com", password:"turu123", role:"user", avatar:"👤", phone:"08123456789", address:"Kudus, Jawa Tengah" },
];

// ─── STATE ──────────────────────────────────────────────────
// Satu objek state menyimpan halaman aktif, pengguna login, filter, dan permohonan.
let state = {
  // Halaman awal saat aplikasi pertama kali dibuka.
  page: 'home',
  // null berarti belum ada pengguna yang login.
  user: null,
  // Filter spesies awal menampilkan semua jenis hewan.
  filter: 'Semua',
  // Reserved untuk menyimpan hewan yang dipilih secara terpisah.
  selectedAnimal: null,
  // Menyimpan ID hewan yang dipilih untuk proses adopsi.
  adoptionTarget: null,
  // Menyimpan permohonan yang dikirim selama sesi berjalan.
  adoptionRequests: [],
  // Salinan usersDB memungkinkan akun baru ditambahkan tanpa mengubah usersDB asli.
  registeredUsers: [...usersDB],
};
