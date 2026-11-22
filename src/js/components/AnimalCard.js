// components/AnimalCard.jsx
// Komponen ini mengubah satu objek hewan menjadi HTML kartu responsif.
export const AnimalCard = (animal) => {
  // Pilih kelas warna status sesuai kondisi adopsi hewan.
  const statusClass =
    animal.status === "Tersedia"
      ? "status-available"
      : animal.status === "Proses Adopsi"
      ? "status-process"
      : "status-adopted";

  return `
    <div class="animal-card" onclick="viewAnimal(${animal.id})">
      <div class="card-emoji-wrap" style="background: ${animal.color_tag}22; border-bottom: 3px solid ${animal.color_tag}">
        <span class="card-emoji">${animal.image}</span>
        <span class="card-status ${statusClass}">${animal.status}</span>
      </div>
      <div class="card-body">
        <h3 class="card-name">${animal.name}</h3>
        <p class="card-breed">${animal.breed}</p>
        <div class="card-meta">
          <span class="meta-item">📅 ${animal.age}</span>
          <span class="meta-item">${animal.gender === "Jantan" ? "♂" : "♀"} ${animal.gender}</span>
          <span class="meta-item">⚖️ ${animal.weight}</span>
        </div>
        <div class="card-tags">
          ${animal.personality.map((p) => `<span class="tag">${p}</span>`).join("")}
        </div>
        <div class="card-badges">
          ${animal.vaccinated ? '<span class="badge badge-green">✓ Vaksin</span>' : '<span class="badge badge-gray">Belum Vaksin</span>'}
          ${animal.neutered ? '<span class="badge badge-green">✓ Steril</span>' : ""}
        </div>
        ${
          animal.status === "Tersedia"
            ? `<button class="btn-adopt-card" onclick="event.stopPropagation(); startAdoption(${animal.id})">Adopsi Sekarang</button>`
            : `<button class="btn-adopt-card disabled" disabled>Sedang Diproses</button>`
        }
      </div>
    </div>
  `;
};
