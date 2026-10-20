const body = document.body;

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    themeBtn.textContent = "☀️ Light Mode";
  } else {
    themeBtn.textContent = "🌙 Dark Mode";
  }
});

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("open");

  menuBtn.textContent = navbar.classList.contains("open")
    ? "✕"
    : "☰";
});

navbar.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navbar.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;
let slideshowTimer;

function showSlide(index) {
  currentSlide = index;

  slides.forEach(function (slide, i) {
    slide.classList.toggle("active", i === index);
  });

  dots.forEach(function (dot, i) {
    dot.classList.toggle("active", i === index);
  });
}

function startSlideshow() {
  clearInterval(slideshowTimer);

  slideshowTimer = setInterval(function () {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 4000);
}

dots.forEach(function (dot) {
  dot.addEventListener("click", function () {
    showSlide(Number(dot.dataset.slide));
    startSlideshow();
  });
});

showSlide(0);
startSlideshow();

const readBtn = document.getElementById("readBtn");
const moreInfo = document.getElementById("moreInfo");

readBtn.addEventListener("click", function () {
  moreInfo.hidden = !moreInfo.hidden;

  readBtn.textContent = moreInfo.hidden
    ? "Read More"
    : "Read Less";
});

document.getElementById("contactBtn").addEventListener(
  "click",
  function () {
    alert("Thank you for visiting my portfolio!");
  }
);

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", function () {
  backTop.classList.toggle("visible", window.scrollY > 300);
});

backTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

document.getElementById("year").textContent =
  new Date().getFullYear();


document.querySelectorAll(".project-link").forEach(
  function (link) {
    link.addEventListener("click", function (event) {
      if (link.getAttribute("href") === "#") {
        event.preventDefault();
        alert("Please add your actual project link.");
      }
    });
  }
);