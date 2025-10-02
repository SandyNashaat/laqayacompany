// Mobile menu toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');
mobileToggle.addEventListener('click', () => navMenu.classList.toggle('active'));

// Search
const searchContainer = document.querySelector('.search-container');
const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

searchIcon.addEventListener('click', () => {
  searchContainer.classList.toggle('active');
  if(searchContainer.classList.contains('active')) searchInput.focus();
});

searchBtn.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if(query) window.location.href = `/Pages/portfolio.html?q=${encodeURIComponent(query)}`;
});

searchInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') searchBtn.click();
});

// Slider
const slides = document.querySelectorAll(".slides");
const dotsContainer = document.querySelector(".dots");
let index = 0;

slides.forEach((_, i) => {
  const dot = document.createElement("span");
  if (i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dots span");

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
    if (i === n) {
      slide.classList.add("active");
      dots[i].classList.add("active");
    }
  });
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

setInterval(nextSlide, 3000);
