 // Theme toggle
// const themeToggle = document.getElementById('theme-toggle');
// themeToggle.addEventListener('click', () => {
//   const current = document.documentElement.getAttribute('data-theme');
//   if (current === 'dark') {
//     document.documentElement.removeAttribute('data-theme');
//     themeToggle.textContent = '🌙';
//   } else {
//     document.documentElement.setAttribute('data-theme', 'dark');
//     themeToggle.textContent = '☀️';
//   }
// });

const themeToggle = document.getElementById('theme-toggle');

// Set initial theme to dark
document.documentElement.setAttribute('data-theme', 'dark');
themeToggle.textContent = '☀️'; // Show sun icon for switching to light

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  if (current === 'dark') {
    // Switch to light mode
    document.documentElement.removeAttribute('data-theme');
    themeToggle.textContent = '🌙'; // Show moon icon for switching to dark
  } else {
    // Switch to dark mode
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️'; // Show sun icon for switching to light
  }
});


// Carousel logic
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;
function showCarouselItem(idx) {
  carouselItems.forEach((item, i) => {
    item.classList.toggle('active', i === idx);
  });
}
document.getElementById('prev').onclick = () => {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showCarouselItem(currentIndex);
};
document.getElementById('next').onclick = () => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showCarouselItem(currentIndex);
};
// Auto-advance every 7 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showCarouselItem(currentIndex);
}, 7000);