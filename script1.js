AOS.init({
  duration: 900,
  once: true
});

// Typing Effect
const words = ["Web Developer", "Java Developer", "UI Focused"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;
const typing = document.getElementById("typing");

function type() {
  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      current = words[i].substring(0, j++);
    }
    if (isDeleting && j >= 0) {
      current = words[i].substring(0, j--);
    }
    typing.textContent = current;

    if (j === words[i].length) isDeleting = true;
    if (isDeleting && j === 0) {
      isDeleting = false;
      i++;
    }
  }
  setTimeout(type, 120);
}
type();

// Theme Toggle
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
};
