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



