/* ==============================
   Virtual Herbal Garden - Quiz.js
   Interactive Quizzes: MCQ, Image, Jumbled
============================== */

/* ---------- Section Switching ---------- */
function showSection(sectionId) {
  document.querySelectorAll(".page").forEach(sec => sec.style.display = "none");
  const section = document.getElementById(sectionId);
  if (section) section.style.display = "block";

  if (sectionId === "mcq") loadMCQ();
  if (sectionId === "image") loadImageQuiz();
  if (sectionId === "jumbled") loadJumbledQuiz();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ---------- Helper: Display Score with Feedback ---------- */
function displayScore(score, total, scoreDivId) {
  const percent = Math.round((score / total) * 100);
  let message = "";

  if (percent >= 90) message = "🌟 Excellent work! You’re a true Herbal Expert!";
  else if (percent >= 70) message = "🌿 Good job! Keep learning and growing!";
  else message = "💡 Keep practicing — you’ll get even better!";

  const scoreDiv = document.getElementById(scoreDivId);
  scoreDiv.innerHTML = `
    <p><strong>Score:</strong> ${score} / ${total} (${percent}%)</p>
    <p>${message}</p>
  `;

  // Restart button
  const restartBtn = document.createElement("button");
  restartBtn.textContent = "🔄 Try Again";
  restartBtn.className = "back-btn";
  restartBtn.onclick = () => showSection("home");
  scoreDiv.appendChild(restartBtn);
}

/* ==============================
   🌿 Multiple Choice Quiz (MCQ)
============================== */
const mcqQuestions = [
  { question: "What part of the plant conducts photosynthesis?", options: ["Root", "Stem", "Leaf", "Flower"], ans: "Leaf" },
  { question: "Which plant is known as the 'King of Fruits'?", options: ["Apple", "Mango", "Banana", "Grapes"], ans: "Mango" },
  { question: "Which tree produces acorns?", options: ["Oak", "Pine", "Maple", "Cedar"], ans: "Oak" },
  { question: "Which plant is a succulent?", options: ["Cactus", "Rose", "Tulip", "Lily"], ans: "Cactus" },
  { question: "Which part of the plant absorbs water?", options: ["Leaf", "Root", "Flower", "Stem"], ans: "Root" },
  { question: "Which flower symbolizes love?", options: ["Rose", "Tulip", "Sunflower", "Lily"], ans: "Rose" },
  { question: "Which plant is carnivorous?", options: ["Venus Flytrap", "Cactus", "Bamboo", "Rose"], ans: "Venus Flytrap" },
  { question: "Which tree is used for making paper?", options: ["Teak", "Bamboo", "Oak", "Pine"], ans: "Bamboo" },
  { question: "Which plant has medicinal properties?", options: ["Tulip", "Aloe Vera", "Cactus", "Sunflower"], ans: "Aloe Vera" },
  { question: "Which fruit grows on a vine?", options: ["Mango", "Grapes", "Apple", "Banana"], ans: "Grapes" },
  { question: "Which plant is known as the 'Queen of Herbs'?", options: ["Tulsi", "Mint", "Basil", "Amla"], ans: "Tulsi" },
  { question: "Which part of the turmeric plant is used?", options: ["Leaf", "Root", "Flower", "Stem"], ans: "Root" },
  { question: "Which plant is used in mosquito repellents?", options: ["Neem", "Mint", "Lemongrass", "Tulsi"], ans: "Lemongrass" },
  { question: "Which plant is used to make tea?", options: ["Mint", "Basil", "Tulip", "Jasmine"], ans: "Mint" },
  { question: "Which plant is known for its cooling gel?", options: ["Aloe Vera", "Neem", "Cactus", "Tulsi"], ans: "Aloe Vera" },
  { question: "Which plant is called 'Indian Ginseng'?", options: ["Ashwagandha", "Tulsi", "Amla", "Ginger"], ans: "Ashwagandha" },
  { question: "Which plant gives curry leaves?", options: ["Curry Leaf Plant", "Neem", "Basil", "Amla"], ans: "Curry Leaf Plant" },
  { question: "Which part of the Ginger plant is used?", options: ["Root", "Stem", "Leaf", "Flower"], ans: "Root" },
  { question: "Which plant has antibacterial properties?", options: ["Neem", "Tulsi", "Both", "Amla"], ans: "Both" },
  { question: "Which fruit is rich in Vitamin C?", options: ["Amla", "Banana", "Papaya", "Mango"], ans: "Amla" }
];

function loadMCQ() {
  const container = document.getElementById("mcq-container");
  container.innerHTML = "";

  mcqQuestions.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "quiz-question";
    div.innerHTML = `<h3>${i + 1}. ${q.question}</h3>`;

    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "quiz-option";
      btn.textContent = opt;
      btn.onclick = () => selectMCQOption(btn);
      div.appendChild(btn);
    });
    container.appendChild(div);
  });

  const submitBtn = document.createElement("button");
  submitBtn.id = "submit-mcq";
  submitBtn.textContent = "✅ Submit Quiz";
  container.appendChild(submitBtn);

  const scoreDiv = document.createElement("div");
  scoreDiv.id = "mcq-score";
  container.appendChild(scoreDiv);

  submitBtn.addEventListener("click", () => {
    let score = 0;
    document.querySelectorAll(".quiz-question").forEach((qDiv, index) => {
      const selected = qDiv.querySelector(".selected");
      if (selected && selected.textContent === mcqQuestions[index].ans) score++;
    });
    displayScore(score, mcqQuestions.length, "mcq-score");
  });
}

function selectMCQOption(btn) {
  const siblings = btn.parentNode.querySelectorAll(".quiz-option");
  siblings.forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
}

/* ==============================
   🖼️ Image Recognition Quiz
============================== */
const imageQuestions = [
  { img: "images/tulsi.jpg", ans: "Tulsi" },
  { img: "images/Aloevera.jpg", ans: "Aloe Vera" },
  { img: "images/Neem.jpg", ans: "Neem" },
  { img: "images/Ginger.webp", ans: "Ginger" },
  { img: "images/Turmeric.webp", ans: "Turmeric" },
  { img: "images/Ashwa.jpg", ans: "Ashwagandha" },
  { img: "images/Mint.jpg", ans: "Mint" },
  { img: "images/Curryleaves.webp", ans: "Curry Leaves" },
  { img: "images/Lemongrass.webp", ans: "Lemongrass" },
  { img: "images/Amla.jpg", ans: "Amla" },
  { img: "images/Rose.jpg", ans: "Rose" },
  { img: "images/Lotus.webp", ans: "Lotus" },
  { img: "images/Sunflower.jpg", ans: "Sunflower" },
  { img: "images/Mango.jpg", ans: "Mango" },
  { img: "images/Banana.webp", ans: "Banana" },
  { img: "images/Apple.jpg", ans: "Apple" },
  { img: "images/Strawberry.webp", ans: "Strawberry" },
  { img: "images/Guava.png", ans: "Guava" },
  { img: "images/Orange.png", ans: "Orange" },
  { img: "images/Lemon.jpg", ans: "Lemon" }
];

function loadImageQuiz() {
  const container = document.getElementById("image-quiz");
  container.innerHTML = "";

  imageQuestions.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "image-question";
    div.innerHTML = `
      <h3>${i + 1}. Identify this plant/fruit:</h3>
      <img src="${q.img}" alt="Question ${i + 1}">
      <input type="text" id="image-answer-${i}" placeholder="Type your answer...">
    `;
    container.appendChild(div);
  });

  const submitBtn = document.createElement("button");
  submitBtn.id = "submit-image";
  submitBtn.textContent = "✅ Submit Answers";
  container.appendChild(submitBtn);

  const scoreDiv = document.createElement("div");
  scoreDiv.id = "image-score";
  container.appendChild(scoreDiv);

  submitBtn.addEventListener("click", () => {
    let score = 0;
    imageQuestions.forEach((q, i) => {
      const input = document.getElementById(`image-answer-${i}`);
      const val = input.value.trim().toLowerCase();
      input.style.background = "";
      if (val === q.ans.toLowerCase()) {
        score++;
        input.style.background = "#c8e6c9";
      } else {
        input.style.background = "#ffcdd2";
        input.value = `${input.value} (Correct: ${q.ans})`;
      }
    });
    displayScore(score, imageQuestions.length, "image-score");
  });
}

/* ==============================
   🔤 Jumbled Words Quiz
============================== */
const jumbledQuestions = [
  { word: "TUSLI", ans: "TULSI" },
  { word: "OELVA RAE", ans: "ALOE VERA" },
  { word: "NEEM", ans: "NEEM" },
  { word: "GNIREG", ans: "GINGER" },
  { word: "TICRUMER", ans: "TURMERIC" },
  { word: "SHAWA GADHNA", ans: "ASHWAGANDHA" },
  { word: "TINM", ans: "MINT" },
  { word: "URCRY VAEESL", ans: "CURRY LEAVES" },
  { word: "MONGERSSAL", ans: "LEMONGRASS" },
  { word: "MALA", ans: "AMLA" },
  { word: "ESOR", ans: "ROSE" },
  { word: "TUSOL", ans: "LOTUS" },
  { word: "SUNWLFREO", ans: "SUNFLOWER" },
  { word: "MANGO", ans: "MANGO" },
  { word: "BANANA", ans: "BANANA" },
  { word: "PAPLE", ans: "APPLE" },
  { word: "ARSTBRREWY", ans: "STRAWBERRY" },
  { word: "VAGUA", ans: "GUAVA" },
  { word: "GEONRA", ans: "ORANGE" },
  { word: "EMLNO", ans: "LEMON" }
];

function loadJumbledQuiz() {
  const container = document.getElementById("jumbled-quiz");
  container.innerHTML = "";

  jumbledQuestions.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "jumbled-question";
    div.innerHTML = `
      <h3>${i + 1}. Unscramble: <strong>${q.word}</strong></h3>
      <input type="text" id="jumble-answer-${i}" placeholder="Your answer...">
    `;
    container.appendChild(div);
  });

  const submitBtn = document.createElement("button");
  submitBtn.id = "submit-jumbled";
  submitBtn.textContent = "✅ Submit Answers";
  container.appendChild(submitBtn);

  const scoreDiv = document.createElement("div");
  scoreDiv.id = "jumbled-score";
  container.appendChild(scoreDiv);

  submitBtn.addEventListener("click", () => {
    let score = 0;
    jumbledQuestions.forEach((q, i) => {
      const input = document.getElementById(`jumble-answer-${i}`);
      const val = input.value.trim().toUpperCase();
      input.style.background = "";
      if (val === q.ans) {
        score++;
        input.style.background = "#c8e6c9";
      } else {
        input.style.background = "#ffcdd2";
        input.value = `${input.value} (Correct: ${q.ans})`;
      }
    });
    displayScore(score, jumbledQuestions.length, "jumbled-score");
  });
}
