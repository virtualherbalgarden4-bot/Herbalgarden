// Fun fact hover effect
const facts = document.querySelectorAll(".fact");
const display = document.getElementById("fact-display");

facts.forEach(fact => {
  fact.addEventListener("mouseover", () => {
    display.textContent = fact.dataset.fact;
  });
  fact.addEventListener("mouseout", () => {
    display.textContent = "Hover on an icon to learn more!";
  });
});
