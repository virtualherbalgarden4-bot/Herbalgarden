/* -----------------
   Switch Sections
------------------ */
function showSection(sectionId) {
  document.querySelectorAll('.quiz-section').forEach(sec => sec.style.display = "none");
  const selected = document.getElementById(sectionId);
  selected.style.display = "block";

  if(sectionId === "mcq") loadMCQ();
  if(sectionId === "image") loadImageQuiz();
  if(sectionId === "jumbled") loadJumbledQuiz();
}

/* -----------------
   Helper: Display score with message
------------------ */
function displayScore(score, total, scoreDivId){
  const percent = Math.round((score / total) * 100);
  let message = "";
  if(percent >= 90) message = "🌟 Excellent!";
  else if(percent >= 70) message = "👍 Good Try!";
  else message = "💡 Keep Practicing!";
  document.getElementById(scoreDivId).innerHTML = `Score: ${score} / ${total} (${percent}%)<br>${message}`;
}

/* -----------------
   MCQ Questions (20)
------------------ */
const mcqQuestions = [
  { question: "What part of the plant conducts photosynthesis?", options: ["Root","Stem","Leaf","Flower"], ans: "Leaf" },
  { question: "Which plant is known as the 'King of Fruits'?", options: ["Apple","Mango","Banana","Grapes"], ans: "Mango" },
  { question: "Which tree produces acorns?", options: ["Oak","Pine","Maple","Cedar"], ans: "Oak" },
  { question: "Which plant is a succulent?", options: ["Cactus","Rose","Tulip","Lily"], ans: "Cactus" },
  { question: "Which part of the plant absorbs water?", options: ["Leaf","Root","Flower","Stem"], ans: "Root" },
  { question: "Which flower symbolizes love?", options: ["Rose","Tulip","Sunflower","Lily"], ans: "Rose" },
  { question: "Which plant is carnivorous?", options: ["Venus Flytrap","Cactus","Bamboo","Rose"], ans: "Venus Flytrap" },
  { question: "Which tree is used for making paper?", options: ["Teak","Bamboo","Oak","Pine"], ans: "Bamboo" },
  { question: "Which plant is known for medicinal properties?", options: ["Tulip","Aloe Vera","Cactus","Sunflower"], ans: "Aloe Vera" },
  { question: "Which fruit grows on a vine?", options: ["Mango","Grapes","Apple","Banana"], ans: "Grapes" },
  { question: "Which plant has thorns?", options: ["Cactus","Rose","Tulip","All"], ans: "All" },
  { question: "Which tree produces maple syrup?", options: ["Maple","Oak","Pine","Birch"], ans: "Maple" },
  { question: "Which plant is aquatic?", options: ["Water Lily","Rose","Cactus","Sunflower"], ans: "Water Lily" },
  { question: "Which plant is used to make perfume?", options: ["Rose","Cactus","Lily","Tulip"], ans: "Rose" },
  { question: "Which plant fixes nitrogen in soil?", options: ["Legumes","Rose","Tulip","Sunflower"], ans: "Legumes" },
  { question: "Which tree gives cinnamon?", options: ["Cinnamon Tree","Maple","Oak","Pine"], ans: "Cinnamon Tree" },
  { question: "Which plant produces vanilla?", options: ["Vanilla Orchid","Cactus","Rose","Tulip"], ans: "Vanilla Orchid" },
  { question: "Which plant is a climber?", options: ["Ivy","Rose","Cactus","Sunflower"], ans: "Ivy" },
  { question: "Which plant blooms at night?", options: ["Moonflower","Rose","Tulip","Lily"], ans: "Moonflower" },
  { question: "Which plant is used in tea?", options: ["Mint","Rose","Tulip","Sunflower"], ans: "Mint" }
];

/* -----------------
   Image Recognition Questions (20)
------------------ */
const imageQuestions = [
  { img:"images/tulsi.jpg", ans:"Tulsi" },
  { img:"images/Aloevera.jpg", ans:"Aloe Vera" },
  { img:"images/Rose.jpg", ans:"Rose" },
  { img:"images/lotus.webp", ans:"Lotus" },
  { img:"images/tulip.jpg", ans:"Tulip" },
  { img:"images/sunflower.jpg", ans:"Sunflower" },
  { img:"images/mango.jpg", ans:"Mango" },
  { img:"images/banana.webp", ans:"Banana" },
  { img:"images/apple.jpg", ans:"Apple" },
  { img:"images/strawberry.webp", ans:"Strawberry" },
  { img:"images/guava.png", ans:"Guava" },
  { img:"images/orange.png", ans:"Orange" },
  { img:"images/peech.webp", ans:"Peach" },
  { img:"images/lemon.jpg", ans:"Lemon" },
  { img:"images/Cherry.png", ans:"Cherry" },
  { img:"images/papaya.jpg", ans:"Papaya" },
  { img:"images/watermelon.jpg", ans:"Watermelon" },
  { img:"images/pineapple.webp", ans:"Pineapple" },
];

/* -----------------
   Jumbled Words Questions (20)
------------------ */
const jumbledQuestions = [
  { word:"TUSLI", ans:"TULSI" },
  { word:"OELVA RAE", ans:"ALOE VERA" },
  { word:"ROSE", ans:"ROSE" },
  { word:"TLUIP", ans:"TULIP" },
  { word:"SUHNFLOWER", ans:"SUNFLOWER" },
  { word:"LOTUS", ans:"LOTUS" },
  { word:"MANGO", ans:"MANGO" },
  { word:"BANANA", ans:"BANANA" },
  { word:"APPLE", ans:"APPLE" },
  { word:"GRAPES", ans:"GRAPES" },
  { word:"LEMON", ans:"LEMON" },
  { word:"PEACH", ans:"PEACH" },
  { word:"CHERRY", ans:"CHERRY" },
  { word:"PAPAYA", ans:"PAPAYA" },
  { word:"WATERMELON", ans:"WATERMELON" },
  { word:"PINEAPPLE", ans:"PINEAPPLE" },
  { word:"GUAVA", ans:"GUAVA" },
  { word:"PEAR", ans:"PEAR" },
  { word:"ORANGE", ans:"ORANGE" },
  { word:"STRAWBERRY", ans:"STRAWBERRY" }
];

/* -----------------
   MCQ Quiz with highlighting
------------------ */
function loadMCQ(){
  const container = document.getElementById("mcq-container");
  container.innerHTML = "";

  mcqQuestions.forEach((q,i)=>{
    const div = document.createElement("div");
    div.classList.add("quiz-question");
    div.innerHTML=`<h3>${i+1}. ${q.question}</h3>`;
    q.options.forEach(opt=>{
      const label = document.createElement("label");
      label.style.display="block";
      label.innerHTML=`<input type="radio" name="q${i}" value="${opt}"> ${opt}`;
      div.appendChild(label);
    });
    container.appendChild(div);
  });

  let submitBtn = document.getElementById("submit-mcq");
  if(!submitBtn){
    submitBtn = document.createElement("button");
    submitBtn.id="submit-mcq";
    submitBtn.textContent="Submit Quiz";
    submitBtn.style.marginTop="10px";
    container.appendChild(submitBtn);

    const scoreDiv=document.createElement("div");
    scoreDiv.id="mcq-score";
    scoreDiv.style.marginTop="10px";
    container.appendChild(scoreDiv);

    submitBtn.addEventListener("click", ()=>{
      let score = 0;
      mcqQuestions.forEach((q,i)=>{
        const radios = document.getElementsByName(`q${i}`);
        radios.forEach(r=>{
          const label = r.parentElement;
          label.style.background = "";
          if(r.checked && r.value===q.ans) {
            score++;
            label.style.background="#c8e6c9";
          } else if(r.checked && r.value!==q.ans) {
            label.style.background="#ffcdd2";
          }
          if(r.value===q.ans) label.style.border="1px solid #2e7d32";
        });
      });
      displayScore(score, mcqQuestions.length, "mcq-score");
    });
  }
}

/* -----------------
   Image Quiz with highlighting
------------------ */
function loadImageQuiz(){
  const container=document.getElementById("image-quiz");
  container.innerHTML="";
  imageQuestions.forEach((q,i)=>{
    const div=document.createElement("div");
    div.classList.add("image-question");
    div.innerHTML=`<h3>${i+1}. Identify this plant/fruit:</h3>
                   <img src="${q.img}" alt="Image">`;
    const input=document.createElement("input");
    input.placeholder="Type your answer...";
    input.id=`image-answer-${i}`;
    div.appendChild(input);
    container.appendChild(div);
  });

  let submitBtn=document.getElementById("submit-image");
  if(!submitBtn){
    submitBtn=document.createElement("button");
    submitBtn.id="submit-image";
    submitBtn.textContent="Submit Answers";
    submitBtn.style.marginTop="10px";
    container.appendChild(submitBtn);

    const scoreDiv=document.createElement("div");
    scoreDiv.id="image-score";
    scoreDiv.style.marginTop="10px";
    container.appendChild(scoreDiv);

    submitBtn.addEventListener("click", ()=>{
      let score=0;
      imageQuestions.forEach((q,i)=>{
        const input=document.getElementById(`image-answer-${i}`);
        const val=input.value.trim().toLowerCase();
        input.style.background="";
        if(val===q.ans.toLowerCase()){
          score++;
          input.style.background="#c8e6c9";
        } else {
          input.style.background="#ffcdd2";
          input.value = `${input.value} (Correct: ${q.ans})`;
        }
      });
      displayScore(score, imageQuestions.length, "image-score");
    });
  }
}

/* -----------------
   Jumbled Words Quiz with highlighting
------------------ */
function loadJumbledQuiz(){
  const container=document.getElementById("jumbled-quiz");
  container.innerHTML="";
  jumbledQuestions.forEach((q,i)=>{
    const div=document.createElement("div");
    div.classList.add("jumbled-question");
    div.innerHTML=`<h3>${i+1}. Unscramble: <strong>${q.word}</strong></h3>`;
    const input=document.createElement("input");
    input.placeholder="Your answer...";
    input.id=`jumble-answer-${i}`;
    div.appendChild(input);
    container.appendChild(div);
  });

  let submitBtn=document.getElementById("submit-jumbled");
  if(!submitBtn){
    submitBtn=document.createElement("button");
    submitBtn.id="submit-jumbled";
    submitBtn.textContent="Submit Answers";
    submitBtn.style.marginTop="10px";
    container.appendChild(submitBtn);

    const scoreDiv=document.createElement("div");
    scoreDiv.id="jumbled-score";
    scoreDiv.style.marginTop="10px";
    container.appendChild(scoreDiv);

    submitBtn.addEventListener("click", ()=>{
      let score=0;
      jumbledQuestions.forEach((q,i)=>{
        const input=document.getElementById(`jumble-answer-${i}`);
        const val=input.value.trim().toUpperCase();
        input.style.background="";
        if(val===q.ans){
          score++;
          input.style.background="#c8e6c9";
        } else {
          input.style.background="#ffcdd2";
          input.value = `${input.value} (Correct: ${q.ans})`;
        }
      });
      displayScore(score, jumbledQuestions.length, "jumbled-score");
    });
  }
}
