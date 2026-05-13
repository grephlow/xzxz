
const header = document.getElementById('siteHeader');
const mobileToggle = document.getElementById('mobileToggle');
if (mobileToggle && header) {
  mobileToggle.addEventListener('click', () => header.classList.toggle('mobile-open'));
}
document.querySelectorAll('.country-item').forEach((button) => {
  button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.target);
    document.querySelectorAll('.country-panel').forEach(panel => {
      if (panel !== target) panel.classList.remove('active');
    });
    if (target) target.classList.toggle('active');
  });
});
document.querySelectorAll('.faq-q').forEach((button) => {
  button.addEventListener('click', () => {
    button.closest('.faq-item').classList.toggle('active');
  });
});
const galleryData = [
  {
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    title: "International student experience",
    text: "Colorful moments from classrooms, ceremonies and student activities."
  },
  {
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
    title: "Exam day atmosphere",
    text: "A modern visual area for photos and video highlights from each edition."
  },
  {
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    title: "Awards and recognition",
    text: "Medal ceremonies, certificates and student success stories."
  }
];
let galleryIndex = 0;
const galleryFeature = document.getElementById('galleryFeature');
function updateGallery(direction) {
  if (!galleryFeature) return;
  galleryIndex = (galleryIndex + direction + galleryData.length) % galleryData.length;
  const item = galleryData[galleryIndex];
  galleryFeature.style.setProperty('--bg', `url('${item.image}')`);
  const h3 = galleryFeature.querySelector('h3');
  const p = galleryFeature.querySelector('p');
  if (h3) h3.textContent = item.title;
  if (p) p.textContent = item.text;
}
const prev = document.getElementById('prevGallery');
const next = document.getElementById('nextGallery');
if (prev) prev.addEventListener('click', () => updateGallery(-1));
if (next) next.addEventListener('click', () => updateGallery(1));
