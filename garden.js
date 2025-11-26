// ================== PLANT DATA ==================
const plants = [
  {
    name: "Tulsi",
    botanical: "Holy Basil",
    scientific: "Ocimum tenuiflorum",
    image: "images/tulsi.jpg",
    model: "models/tulsi.glb",
    soil: "Loamy, well-drained soil",
    water: "Water every 2–3 days",
    growth: "1–2 feet in 6–8 weeks",
    category: "Ayurveda",
    description:
      "Tulsi is revered in Ayurveda for its medicinal properties. Used in herbal teas, immunity boosters, and traditional remedies. Worshipped in India for thousands of years as a sacred plant."
  },
  {
    name: "Aloe Vera",
    botanical: "Aloe",
    scientific: "Aloe barbadensis miller",
    image: "images/Aloevera.jpg",
    model: "models/Aloevera.glb",
    soil: "Sandy soil with good drainage",
    water: "Once every 2–3 weeks",
    growth: "Matures in 2–3 years",
    category: "Homeopathy",
    description:
      "Aloe Vera is a succulent known for its cooling medicinal gel used in skincare and healing. Applied to burns, wounds, and skin problems; also used in juices for digestion."
  },
  {
    name: "Chamomile",
    botanical: "German Chamomile",
    scientific: "Matricaria chamomilla",
    image: "images/Chamomile.jpg",
    model: "models/Chamomile.glb",
    soil: "Light, sandy soil",
    water: "Moderate watering",
    growth: "Flowers in 8–10 weeks",
    category: "Unani",
    description:
      "Chamomile is a small daisy-like plant valued for calming and anti-inflammatory properties. Used in ancient Greece and Rome for relaxation and medicine."
  },
  {
    name: "Rose",
    botanical: "Damask Rose",
    scientific: "Rosa × damascena",
    image: "images/Rose.jpg",
    model: "models/Rose.glb",
    soil: "Loamy soil, slightly acidic",
    water: "Every alternate day",
    growth: "Blooms in 8–12 weeks",
    category: "Ayurveda",
    description:
      "Roses are cherished for their beauty, fragrance, and healing properties. Rose water is used for skincare, perfumes, and cooling remedies in Ayurveda."
  },
  {
    name: "Basil",
    botanical: "Sweet Basil",
    scientific: "Ocimum basilicum",
    image: "images/Basil.jpg",
    model: "models/Basil.glb",
    soil: "Fertile, well-drained soil",
    water: "Keep soil moist",
    growth: "Harvestable in 4–6 weeks",
    category: "Ayurveda",
    description:
      "Sweet Basil is both a culinary and medicinal herb. Used in cooking, teas, and remedies for digestion and colds."
  },
  {
    name: "Lavender",
    botanical: "English Lavender",
    scientific: "Lavandula angustifolia",
    image: "images/Lavender.jpg",
    model: "models/lavender.glb",
    soil: "Sandy, alkaline soil",
    water: "Water weekly",
    growth: "Blooms in 2–3 months",
    category: "Homeopathy",
    description:
      "Lavender is prized for relaxation and skin healing. Essential oil used in perfumes, skin care, and aromatherapy."
  },
  {
    name: "Mint",
    botanical: "Peppermint",
    scientific: "Mentha × piperita",
    image: "images/Mint.jpg",
    model: "models/Mint.glb",
    soil: "Moist, rich soil",
    water: "Regular watering",
    growth: "Spreads quickly in 6–8 weeks",
    category: "Ayurveda",
    description:
      "Mint is a refreshing herb with cooling and digestive properties. Commonly used in teas, remedies, and oral care."
  },
  {
    name: "Neem",
    botanical: "Indian Lilac",
    scientific: "Azadirachta indica",
    image: "images/Neem.jpg",
    model: "models/Neem.glb",
    soil: "Deep sandy soil",
    water: "Low water requirement",
    growth: "Tree grows up to 20 feet",
    category: "Ayurveda",
    description:
      "Neem is known as the 'village pharmacy' of India. Used for skincare, immunity, dental care, and organic pesticides."
  },
  {
    name: "Ginger",
    botanical: "Ginger Root",
    scientific: "Zingiber officinale",
    image: "images/Ginger.webp",
    model: "models/Ginger.glb",
    soil: "Rich, loamy soil",
    water: "Keep soil moist",
    growth: "Harvest in 8–10 months",
    category: "Unani",
    description:
      "Ginger is a root spice used for flavor and medicinal benefits. Helps with colds, nausea, and digestion."
  },
  {
    name: "Ashwagandha",
    botanical: "Indian Ginseng",
    scientific: "Withania somnifera",
    image: "images/Ashwa.jpg",
    model: "models/Ashwa.glb",
    soil: "Sandy, well-drained soil",
    water: "Minimal watering",
    growth: "Harvest after 6 months",
    category: "Yoga",
    description:
      "Ashwagandha is an adaptogenic herb used for over 3,000 years in Ayurveda to improve vitality, reduce stress, and enhance stamina."
  },
  {
    name: "Karisalankanni",
    botanical: "False Daisy",
    scientific: "Eclipta prostrata",
    image: "images/kari.jpg",
    model: "models/kari.glb",
    soil: "Moist, fertile soil",
    water: "Regular watering",
    growth: "Matures in 2–3 months",
    category: "Siddha",
    description:
      "Karisalankanni supports liver health and hair growth, widely used in traditional Siddha medicine."
  },
  {
    name: "Turmeric",
    botanical: "Curcuma",
    scientific: "Curcuma longa",
    image: "images/Turmeric.webp",
    model: "models/Turmeric.glb",
    soil: "Rich, loamy soil",
    water: "Moderate watering",
    growth: "Harvest in 8–10 months",
    category: "Ayurveda",
    description:
      "Turmeric is known for its anti-inflammatory and healing powers. Used for centuries in cooking, rituals, and skincare."
  }
];

// ================== DOM ELEMENTS ==================
const gardenDiv = document.getElementById("garden");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeModal = document.getElementById("closeModal");

// ================== DISPLAY PLANTS ==================
function displayPlants(list) {
  gardenDiv.innerHTML = "";
  list.forEach((plant) => {
    const card = document.createElement("div");
    card.className = "plant-card";
    card.innerHTML = `
      <img src="${plant.image}" alt="${plant.name}">
      <h2>${plant.name}</h2>
      <p><strong>Botanical:</strong> ${plant.botanical}</p>
      <p><strong>Scientific:</strong> <em>${plant.scientific}</em></p>
      <span class="category">${plant.category}</span>
    `;
    card.addEventListener("click", () => showModal(plant));
    gardenDiv.appendChild(card);
  });
}

// ================== MODAL ==================
function showModal(plant) {
  modalBody.innerHTML = `
    <div class="modal-left">
      <img src="${plant.image}" alt="${plant.name}" class="modal-img">
    </div>
    <div class="modal-right">
      <h2 id="modalTitle">${plant.name}</h2>
      <p><strong>Botanical Name:</strong> ${plant.botanical}</p>
      <p><strong>Scientific Name:</strong> <em>${plant.scientific}</em></p>

      <div class="modal-tabs">
        <div class="modal-tab active" data-tab="details">Details</div>
        <div class="modal-tab" data-tab="growth">Growth</div>
        <div class="modal-tab" data-tab="model">3D View</div>
      </div>

      <div id="details" class="tab-content active">
        <p>${plant.description}</p>
      </div>
      <div id="growth" class="tab-content">
        <ul>
          <li><strong>Soil:</strong> ${plant.soil}</li>
          <li><strong>Water:</strong> ${plant.water}</li>
          <li><strong>Growth:</strong> ${plant.growth}</li>
        </ul>
      </div>
      <div id="model" class="tab-content">
        ${
          plant.model
            ? `<model-viewer src="${plant.model}" alt="${plant.name}" camera-controls auto-rotate></model-viewer>`
            : `<p><em>3D Model not available</em></p>`
        }
      </div>
    </div>
  `;

  modal.style.display = "flex";
  document.body.style.overflow = "hidden"; // Prevent background scroll

  // Tab switching
  const tabs = modalBody.querySelectorAll(".modal-tab");
  const contents = modalBody.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));
      tab.classList.add("active");
      modalBody.querySelector(`#${tab.dataset.tab}`).classList.add("active");
    });
  });
}

// ================== CLOSE MODAL ==================
function hideModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

closeModal.onclick = hideModal;
window.onclick = (e) => {
  if (e.target === modal) hideModal();
};

// Keyboard accessibility (ESC to close)
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "flex") hideModal();
});

// ================== FILTER BUTTONS ==================
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((b) =>
      b.classList.remove("active")
    );
    btn.classList.add("active");

    const category = btn.dataset.category;
    if (category === "All") displayPlants(plants);
    else displayPlants(plants.filter((p) => p.category === category));
  });
});

// ================== INIT ==================
displayPlants(plants);
