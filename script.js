const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('navUl');
const button = document.getElementById("button-navbar-rules");
const box = document.getElementById("rulesBox");

hamburger.addEventListener('click', () => {
  navUl.classList.toggle('show');
});


document.getElementById("button-navbar-start").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

document.getElementById("button-navbar-camps").addEventListener("click", function () {
  document.querySelector(".card-container").scrollIntoView({
    behavior: "smooth"
  });
});

document.getElementById("button-navbar-contact").addEventListener("click", function () {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
});

button.addEventListener("click", function () {
  if (box.style.display === "none") {
    box.style.display = "block";
    button.textContent = "Hide Text";
  } else {
    box.style.display = "none";
    button.textContent = "Rules";
  }
});

const images = [
  "/images/home.png",
  "/images/home1.png",
  "/images/home2.png",
  "/images/home3.png"
];

let currentIndex = 0;

const card = document.querySelector(".card-button-home");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateBackground() {
  card.style.opacity = '0.7';

  setTimeout(() => {
    card.style.backgroundImage = `url('${images[currentIndex]}')`;
    card.style.opacity = '1';
  }, 200);
}

prevBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  showPrevImage();
});

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  showNextImage();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    showPrevImage();
  } else if (e.key === "ArrowRight") {
    showNextImage();
  }
});

function showPrevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateBackground();
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateBackground();
}

updateBackground();
