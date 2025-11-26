const searchInput = document.getElementById("searchInput");
const plantGrid = document.getElementById("plantGrid");
const plantDetail = document.getElementById("plantDetail");
const backBtn = document.getElementById("backBtn");

const modelModal = document.getElementById("modelModal");
const modelViewer = document.getElementById("modelViewer");
const closeModelModal = document.getElementById("closeModelModal");

// Plant data (add all 10 plants)
const plantsData = [
  { name:"Tulsi", image:"images/tulsi.jpg", botanical:"Ocimum tenuiflorum", scientific:"Ocimum sanctum", grow:"Needs sunlight, moderate watering, grows well in pots and gardens.", uses:"Boosts immunity, helps with cough, cold, and respiratory issues.", model:"models/tulsi.glb" },
  { name:"Aloe Vera", image:"images/Aloevera.jpg", botanical:"Aloe barbadensis", scientific:"Aloe vera", grow:"Thrives in sunlight, requires minimal water, grows best in dry soil.", uses:"Heals burns, improves skin health, supports digestion.", model:"models/Aloevera.glb" },
  { name:"Neem", image:"images/Neem.jpg", botanical:"Azadirachta indica", scientific:"Melia azadirachta", grow:"Grows easily in warm climates, needs sunlight and regular watering.", uses:"Natural antiseptic, treats skin problems, boosts oral health.", model:"models/Neem.glb" },
  { name:"Ginger", image:"images/Ginger.webp", botanical:"Zingiber officinale", scientific:"Amomum zingiber", grow:"Plant rhizomes in moist soil, needs shade and regular watering.", uses:"Aids digestion, relieves nausea, helps with cold and sore throat.", model:"models/Ginger.glb" },
  { name:"Turmeric", image:"images/Turmeric.webp", botanical:"Curcuma longa", scientific:"Curcuma domestica", grow:"Requires warm, humid climate, plant rhizomes in fertile soil.", uses:"Anti-inflammatory, boosts immunity, promotes skin health.", model:"models/Turmeric.glb" },
  { name:"Ashwagandha", image:"images/Ashwa.jpg", botanical:"Withania somnifera", scientific:"Physalis somnifera", grow:"Prefers dry soil, moderate watering, grows well in sunlight.", uses:"Reduces stress, improves energy, boosts immunity.", model:"models/Ashwa.glb" },
  { name:"Mint", image:"images/Mint.jpg", botanical:"Mentha", scientific:"Mentha arvensis", grow:"Grows in moist soil, needs partial sunlight, spreads quickly.", uses:"Refreshes breath, aids digestion, used in teas and remedies.", model:"models/Mint.glb" },
  { name:"Curry Leaves", image:"images/Curryleaves.webp", botanical:"Murraya koenigii", scientific:"Bergera koenigii", grow:"Needs full sunlight, regular watering, grows well in pots.", uses:"Improves digestion, good for hair health, rich in antioxidants.", model:"models/curryleaves.glb" },
  { name:"Lemongrass", image:"images/Lemongrass.webp", botanical:"Cymbopogon citratus", scientific:"Cymbopogon flexuosus", grow:"Requires sunlight, grows well in clumps, regular watering.", uses:"Reduces stress, helps digestion, used in teas and oils.", model:"models/lemongrass.glb" },
  { name:"Amla", image:"images/Amla.jpg", botanical:"Phyllanthus emblica", scientific:"Emblica officinalis", grow:"Prefers well-drained soil, full sunlight, regular care.", uses:"Rich in Vitamin C, boosts immunity, strengthens hair.", model:"models/Amla.glb" }
];

// Render only image + name
function renderPlantCards() {
  plantGrid.innerHTML = "";
  plantsData.forEach((plant, index) => {
    const card = document.createElement("div");
    card.className = "plant-card";
    card.innerHTML = `
      <img src="${plant.image}" alt="${plant.name}">
      <h2>🌱 ${plant.name}</h2>
    `;
    card.addEventListener("click", () => showPlant(index));
    plantGrid.appendChild(card);
  });
}

// Show plant detail when clicked
function showPlant(index) {
  const plant = plantsData[index];
  plantDetail.innerHTML = `
    <img src="${plant.image}" alt="${plant.name}">
    <div class="details-text">
      <h2>🌱 ${plant.name}</h2>
      <p><strong>Botanical Name:</strong> ${plant.botanical}</p>
      <p><strong>Scientific Name:</strong> ${plant.scientific}</p>
      <p><strong>How to Grow:</strong> ${plant.grow}</p>
      <p><strong>Uses:</strong> ${plant.uses}</p>
      <button id="view3DBtn">View 3D Model</button>
    </div>
  `;
  plantGrid.style.display = "none";
  plantDetail.style.display = "flex";
  backBtn.style.display = "block";

  // 3D model button
  document.getElementById("view3DBtn").addEventListener("click", () => {
    modelViewer.src = plant.model;
    modelModal.style.display = "flex";
  });

  history.pushState({ plantIndex: index }, "", `#${plant.name.replace(/\s+/g, '-')}`);
}

// Back button
backBtn.addEventListener("click", () => {
  plantDetail.style.display = "none";
  backBtn.style.display = "none";
  plantGrid.style.display = "grid";
  history.pushState({}, "", "learn.html");
});

// 3D Modal close
closeModelModal.addEventListener("click", () => {
  modelModal.style.display = "none";
  modelViewer.src = "";
});

window.addEventListener("click", e => {
  if (e.target === modelModal) {
    modelModal.style.display = "none";
    modelViewer.src = "";
  }
});

// Search filter
searchInput.addEventListener("keyup", function() {
  const searchValue = this.value.toLowerCase();
  document.querySelectorAll(".plant-card").forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(searchValue) ? "block" : "none";
  });
});

// On load
window.addEventListener("load", () => {
  renderPlantCards();
  const hash = window.location.hash.slice(1).replace(/-/g, ' ');
  if (hash) {
    const index = plantsData.findIndex(p => p.name.toLowerCase() === hash.toLowerCase());
    if (index >= 0) showPlant(index);
  }
});
