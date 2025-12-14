//  <!-- /* ---------------- Container leftside 3 option rightside 3 images according to option---------------- */ -->

const items = document.querySelectorAll(".item");
const displayImage = document.getElementById("displayImage");
const highlightBar = document.getElementById("highlightBar");

let currentIndex = 0;
let interval;

function changeSlide(index) {
  items.forEach(i => i.classList.remove("active"));
  items[index].classList.add("active");

  displayImage.src = items[index].dataset.image;

  currentIndex = index;
}

function startAutoSlide() {
  interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    changeSlide(currentIndex);
  }, 3000);
}

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    clearInterval(interval);
    changeSlide(index);
    startAutoSlide();
  });
});

startAutoSlide();

    // <!-- /* ---------------- Text normal, photos animated ---------------- */ -->

const images = document.querySelectorAll(".slide");

function updateScale() {
    const centerX = window.innerWidth / 2;

    images.forEach(img => {
        const rect = img.getBoundingClientRect();
        const imgCenter = rect.left + rect.width / 2;

        const distance = Math.abs(centerX - imgCenter);
        const maxDistance = window.innerWidth / 2;

        // CENTER (distance = 0) → 0.8 scale (smaller)
        // EDGES (distance = max) → 1.2 scale (bigger)
        const scale = 0.9 + (distance / maxDistance) * 0.4;

        img.style.transform = `scale(${scale})`;
    });

    requestAnimationFrame(updateScale);
}

updateScale();
