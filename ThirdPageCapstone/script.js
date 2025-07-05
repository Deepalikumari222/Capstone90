
// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  if (current === 'dark') {
    document.documentElement.removeAttribute('data-theme');
    themeToggle.textContent = '🌙';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
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

// Live Chat Widget logic
const chatOpenBtn = document.getElementById('chat-open-btn');
const chatPanel = document.getElementById('chat-panel');
const chatCloseBtn = document.getElementById('chat-close-btn');
chatOpenBtn.onclick = () => {
  chatPanel.classList.remove('hidden');
  chatOpenBtn.style.display = 'none';
};
chatCloseBtn.onclick = () => {
  chatPanel.classList.add('hidden');
  chatOpenBtn.style.display = 'block';
};

// Simple chat interaction (demo, not real API)
const chatBody = document.querySelector('.chat-body');
const chatInput = document.getElementById('chat-input');
const chatSendBtn = document.getElementById('chat-send-btn');
function appendMsg(msg, cls) {
  const div = document.createElement('div');
  div.className = cls + '-msg';
  div.textContent = msg;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}
chatSendBtn.onclick = () => {
  const msg = chatInput.value.trim();
  if (!msg) return;
  appendMsg(msg, 'user');
  chatInput.value = '';
  setTimeout(() => {
    appendMsg("🤖 (Demo) Sorry, I'm just a demo bot!", 'bot');
  }, 800);
};
chatInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') chatSendBtn.onclick();
});
