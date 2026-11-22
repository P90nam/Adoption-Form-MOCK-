// ─── REVIEWS PAGE ────────────────────────────────────────
// Displays ratings and handles review filtering and submission.

// ─── REVIEWS DATA ────────────────────────────────────────────
const reviewsData = [
  { id:1, name:'Siti Rahayu', avatar:'🌸', type:'adopter', typeLabel:'Adopter', stars:5, date:'2 Juni 2026', text:'Service instant, ga pake lama. Recommended!', animal:'Luna 🐱', animalRef:true },
  { id:2, name:'Budi Santoso', avatar:'🧑', type:'adopter', typeLabel:'Adopter', stars:5, date:'28 Mei 2026', text:'Hewan datang dengan keadaan bagus, sehat, bersih. Puas banget.', animal:'Max 🐶', animalRef:true },
  { id:3, name:'Dewi Kusuma', avatar:'💁‍♀️', type:'visitor', typeLabel:'Pengunjung', stars:4, date:'20 Mei 2026', text:'Tempatnya oke, hewannya lucu-lucu. Staffnya ramah.', animal:null, animalRef:false },
  { id:4, name:'Ahmad Fauzi', avatar:'👨', type:'volunteer', typeLabel:'Relawan', stars:5, date:'15 Mei 2026', text:'Mantap jiwa, kerja disini asik. Rekomen buat yang mau volunteer.', animal:null, animalRef:false },
  { id:5, name:'Rina Marlina', avatar:'👩', type:'adopter', typeLabel:'Adopter', stars:5, date:'10 Mei 2026', text:'Prosesnya cepet bgt, ga ribet. Kucingnya sehat dan udah vaksin.', animal:'Mochi 🐱', animalRef:true },
  { id:6, name:'Teguh Prasetyo', avatar:'🧔', type:'visitor', typeLabel:'Pengunjung', stars:4, date:'5 Mei 2026', text:'Bagus, bersih, hewannya terawat. Worth it buat dikunjungi.', animal:null, animalRef:false },
  { id:7, name:'Nurul Aini', avatar:'🧕', type:'adopter', typeLabel:'Adopter', stars:5, date:'28 April 2026', text:'Anjingnya dateng udah sehat dan jinak. Terima kasih PawHome!', animal:'Rocky 🐶', animalRef:true },
  { id:8, name:'Hendra Wijaya', avatar:'🕵️', type:'volunteer', typeLabel:'Relawan', stars:5, date:'20 April 2026', text:'Tempat volunteering terbaik. Timnya solid dan hewannya happy.', animal:null, animalRef:false },
  { id:9, name:'Lestari Indah', avatar:'👩‍🦱', type:'adopter', typeLabel:'Adopter', stars:4, date:'12 April 2026', text:'Oke lah, pelayanan bagus. Kucingnya dateng kondisi prima.', animal:'Coco 🐱', animalRef:true },
];

let reviewFilter = 'Semua';
let tempStars = 0;

function renderReviews() {
  // Terapkan filter kategori ke daftar ulasan.
  const filtered = reviewFilter === 'Semua' ? reviewsData
    : reviewsData.filter(r => r.type === (reviewFilter==='Adopter'?'adopter':reviewFilter==='Relawan'?'volunteer':'visitor'));

  // Hitung rata-rata rating dan distribusi jumlah bintang.
  const totalRatings = reviewsData.reduce((s,r)=>s+r.stars,0);
  const avgRating = (totalRatings/reviewsData.length).toFixed(1);

  const barCounts = [5,4,3,2,1].map(s=>({ s, count: reviewsData.filter(r=>r.stars===s).length }));
  const maxCount = Math.max(...barCounts.map(b=>b.count));

  const starStr = (n) => '★'.repeat(n) + '☆'.repeat(5-n);

  return `
    <div class="page">
      <div class="reviews-hero">
        <div class="section-label">Ulasan Pelanggan</div>
        <h1 class="reviews-hero-title">Apa Kata <em>Mereka</em>?</h1>
        <p class="reviews-hero-sub">Dengar langsung dari para adopter, pengunjung, dan relawan yang telah merasakan layanan PawHome.</p>
        <div class="reviews-summary">
          <div class="reviews-avg">
            <div class="reviews-avg-num">${avgRating}</div>
            <div class="reviews-stars-big" style="color:#E67E22">${starStr(Math.round(parseFloat(avgRating)))}</div>
            <div class="reviews-avg-label">${reviewsData.length} ulasan</div>
          </div>
          <div class="reviews-bar-chart">
            ${barCounts.map(b=>`
              <div class="bar-row">
                <span class="bar-label">${b.s}★</span>
                <div class="bar-track"><div class="bar-fill" style="width:${maxCount?Math.round(b.count/maxCount*100):0}%"></div></div>
                <span class="bar-count">${b.count}</span>
              </div>`).join('')}
          </div>
        </div>
      </div>

      <div class="reviews-grid-section">
        <div class="reviews-toolbar">
          <div class="reviews-filters">
            ${['Semua','Adopter','Pengunjung','Relawan'].map(f=>`
              <button class="filter-btn-rev ${reviewFilter===f?'active':''}" onclick="setReviewFilter('${f}')">${f}</button>
            `).join('')}
          </div>
          <span class="review-count-label">${filtered.length} ulasan ditampilkan</span>
        </div>
        <div class="reviews-grid">
          ${filtered.map(r=>`
            <div class="review-card">
              <div class="review-card-top">
                <div class="review-avatar">${r.avatar}</div>
                <div class="review-meta">
                  <div class="review-name">${r.name}</div>
                  <div class="review-date">${r.date}</div>
                  <div class="review-stars" style="color:#E67E22">${starStr(r.stars)}</div>
                  <div class="review-badge-wrap">
                    <span class="review-type-badge ${r.type==='adopter'?'badge-adopter':r.type==='volunteer'?'badge-volunteer':'badge-visitor'}">${r.typeLabel}</span>
                  </div>
                </div>
              </div>
              <p class="review-text">${r.text}</p>
              ${r.animalRef?`<span class="review-animal-tag">🐾 Adopsi: ${r.animal}</span>`:''}
            </div>`).join('')}
        </div>
      </div>

      <div class="write-review-cta">
        <div class="write-review-cta-title">Punya Pengalaman Bersama PawHome?</div>
        <p class="write-review-cta-sub">Bantu sesama dengan berbagi cerita adopsi atau kunjungan Anda.</p>
        <button class="btn-write-review" onclick="openReviewForm()">✍️ Tulis Ulasan</button>
      </div>

      ${renderFooter()}
    </div>`;
}

function openReviewForm() {
  // Ulasan hanya boleh ditulis oleh pengguna yang sudah login.
  if (!state.user) {
    showToast('Silakan masuk terlebih dahulu untuk menulis ulasan.', 'error');
    navigateTo('login');
    return;
  }
  tempStars = 0;
  // Buat elemen overlay untuk menampilkan form sebagai modal.
  const overlay = document.createElement('div');
  overlay.className = 'review-form-overlay';
  overlay.id = 'review-form-overlay';
  overlay.onclick = (e) => { if (e.target===overlay) overlay.remove(); };
  overlay.innerHTML = `
    <div class="review-form-modal">
      <div class="review-form-title">Tulis Ulasan ✍️</div>
      <p class="review-form-sub">Bagikan pengalaman Anda dengan komunitas PawHome.</p>
      <div class="review-field">
        <label>Rating Anda</label>
        <div class="star-picker" id="star-picker">
          ${[1,2,3,4,5].map(i=>`<button class="star-btn" data-star="${i}" onclick="setTempStars(${i})">☆</button>`).join('')}
        </div>
      </div>
      <div class="review-field">
        <label>Kategori</label>
        <select id="rv-type">
          <option value="adopter">Adopter</option>
          <option value="visitor">Pengunjung</option>
          <option value="volunteer">Relawan</option>
        </select>
      </div>
      <div class="review-field">
        <label>Ulasan Anda</label>
        <textarea id="rv-text" placeholder="Ceritakan pengalaman Anda di PawHome..." rows="4"></textarea>
      </div>
      <div class="review-form-actions">
        <button class="btn-cancel-rev" onclick="document.getElementById('review-form-overlay').remove()">Batal</button>
        <button class="btn-submit-rev" onclick="submitReview()">Kirim Ulasan</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);
}

window.setTempStars = (n) => {
  // Simpan jumlah bintang dan ubah ikon pada pemilih rating.
  tempStars = n;
  const btns = document.querySelectorAll('.star-btn');
  btns.forEach(b => {
    b.textContent = parseInt(b.dataset.star) <= n ? '★' : '☆';
    b.style.color = parseInt(b.dataset.star) <= n ? '#E67E22' : '';
  });
};

window.submitReview = () => {
  // Validasi isi ulasan sebelum menambahkan data baru.
  const text = document.getElementById('rv-text').value.trim();
  const type = document.getElementById('rv-type').value;
  if (!tempStars) { showToast('Pilih rating bintang terlebih dahulu.', 'error'); return; }
  if (text.length < 5) { showToast('Ulasan terlalu pendek.', 'error'); return; }
  const typeLabel = type==='adopter'?'Adopter':type==='volunteer'?'Relawan':'Pengunjung';
  const today = new Date().toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'});
  // Tambahkan ulasan baru ke awal array agar tampil paling atas.
  reviewsData.unshift({
    id: Date.now(), name: state.user.name, avatar: state.user.avatar,
    type, typeLabel, stars: tempStars, date: today, text,
    animal: null, animalRef: false,
  });
  document.getElementById('review-form-overlay').remove();
  showToast('Ulasan berhasil dikirim! Terima kasih 🐾');
  reviewFilter = 'Semua';
  render();
};

window.setReviewFilter = (f) => {
  reviewFilter = f;
  state.page = 'reviews';
  render();
};
