// Interactive Fun Fact Logic
const facts = document.querySelectorAll(".fact");
const display = document.getElementById("fact-display");

facts.forEach(fact => {
  // Hover effect for desktop
  fact.addEventListener("mouseover", () => {
    display.textContent = fact.dataset.fact;
  });
  fact.addEventListener("mouseout", () => {
    display.textContent = "Hover or tap an icon to learn more!";
  });

  // Click/tap for mobile
  fact.addEventListener("click", () => {
    display.textContent = fact.dataset.fact;
  });
});
