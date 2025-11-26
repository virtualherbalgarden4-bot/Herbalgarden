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
  description: "Tulsi is revered in Ayurveda for its medicinal properties ,Tulsi has been worshipped in India for thousands of years as a sacred plant.,Used in herbal teas, immunity boosters, and traditional remedies."
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
    description: "Aloe Vera is a succulent known for its medicinal gel used in skincare and healing.,Used in ancient Egypt as the 'plant of immortality' and widely cultivated across tropical regions.,Applied to burns, wounds, and skin problems; also used in juices for digestion."
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
    description: "Chamomile is a small daisy-like plant valued for calming and anti-inflammatory properties.,Used in ancient Egypt, Greece, and Rome for medicine and relaxation.,Chamomile tea for relaxation, stress relief, sleep aid, and skin care."
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
    description: "Roses are aromatic flowers cherished for beauty, fragrance, and healing qualities.,Cultivated for over 5,000 years in Persia and India for perfumes and medicine.,Rose water for skin, perfumes, and as a cooling agent in Ayurveda."
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
    description: "Sweet Basil is a culinary and medicinal herb with strong aromatic properties.,Originated in India over 4,000 years ago, later spreading to Europe and the Mediterranean.,Used in cooking, herbal teas, and remedies for digestion and colds."
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
    description: "Lavender is an aromatic herb prized for relaxation and skin healing.,Used in Roman baths and Egyptian mummification rituals.,Essential oil for relaxation, perfumes, skin care, and insect repellent."
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
    description: "Mint is a refreshing herb known for cooling properties and culinary uses.,Traced back to ancient Greece and Egypt for medicinal and culinary purposes.,Used in teas, digestion remedies, oral care, and flavoring."
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
    description: "Neem is a multipurpose medicinal tree often called the 'village pharmacy'.,Used in India for over 2,000 years for health, agriculture, and cosmetics.,Neem oil for skin, leaves for immunity, and bark for dental care."
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
    description: "Ginger is a root spice widely used for flavor and medicinal properties.,Originated in Southeast Asia; traded globally for thousands of years.,Used in teas, cooking, and remedies for colds, nausea, and digestion."
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
    description: "Ashwagandha is an adaptogenic herb that helps the body manage stress.,Used in Ayurveda for over 3,000 years for vitality and strength.,Improves immunity, reduces stress, and enhances stamina."
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
    description: "Karisalankanni is a medicinal herb used in Siddha medicine for liver health.,Traditionally used in South India as a liver tonic and hair growth remedy.,Promotes liver health, hair growth, and improves skin condition."
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
    description: "Turmeric is a golden spice known for its anti-inflammatory and healing properties.,Used in India for over 4,000 years in cooking, rituals, and medicine.,Key ingredient in curries, remedies for inflammation, and skin care."
  }
];


// Modal elements
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeModal = document.getElementById("closeModal");

function showModal(plant) {
  modalBody.innerHTML = `
    <div class="modal-left">
      <img src="${plant.image}" alt="${plant.name}" class="modal-img">
    </div>
    <div class="modal-right">
      <h2>${plant.name}</h2>
      <p><strong>Botanical Name:</strong> ${plant.botanical}</p>
      <p><strong>Scientific Name:</strong> <em>${plant.scientific}</em></p>

      <!-- Tabs -->
      <div class="modal-tabs">
        <div class="modal-tab active" data-tab="details">Details</div>
        <div class="modal-tab" data-tab="growth">Growth</div>
        <div class="modal-tab" data-tab="model">3D View</div>
      </div>

      <!-- Tab Contents -->
      <div id="details" class="tab-content active">
        <p>${plant.description || "No description available."}</p>
      </div>

      <div id="growth" class="tab-content">
        <ul>
          <li><strong>Soil:</strong> ${plant.soil}</li>
          <li><strong>Water:</strong> ${plant.water}</li>
          <li><strong>Growth:</strong> ${plant.growth}</li>
        </ul>
      </div>

      <div id="model" class="tab-content">
        ${plant.model ? `
          <model-viewer src="${plant.model}" alt="${plant.name}"
            camera-controls auto-rotate>
          </model-viewer>` 
        : `<p><em>3D Model not available</em></p>`}
      </div>
    </div>
  `;

  modal.style.display = "flex";

  // Tab Switching Logic
  const tabs = modalBody.querySelectorAll(".modal-tab");
  const contents = modalBody.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      tab.classList.add("active");
      modalBody.querySelector(`#${tab.dataset.tab}`).classList.add("active");
    });
  });
}


function displayPlants(list) {
  gardenDiv.innerHTML = "";
  list.forEach(plant => {
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

// Init
const gardenDiv = document.getElementById("garden");
displayPlants(plants);

// Filter buttons
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-category");
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    if (category === "All") {
      displayPlants(plants);
    } else {
      displayPlants(plants.filter(p => p.category === category));
    }
  });
});

// Close modal
closeModal.onclick = () => { modal.style.display = "none"; }
window.onclick = (e) => { if(e.target === modal) modal.style.display = "none"; }


