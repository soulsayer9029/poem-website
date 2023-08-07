const carousel = document.querySelector(".carousel");
const poems = document.querySelectorAll(".poem");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const poemIndexElement = document.getElementById("poemIndex");
const totalPoems = document.querySelectorAll(".poem").length;
const poemLinks = document.querySelectorAll('.poem-list a');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.querySelector('.sidebar');

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});
poemLinks.forEach((link, index) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    currentIndex = index;
    updateCarousel();
    updatePoemIndex();
  });
});
let currentIndex = 0;
function updatePoemIndex() {
  const currentPoemNumber = currentIndex + 1;
  poemIndexElement.textContent = `Poem ${currentPoemNumber} / ${totalPoems}`;
}
function updateCarousel() {

  poems.forEach((poem, index) => {
    if (index === currentIndex) {
      poem.classList.add("active");
    } else {
      poem.classList.remove("active");
    }
    window.scrollTo(top);
    
  });
}

function showNextPoem() {
  currentIndex = (currentIndex + 1) % poems.length;
  updateCarousel();
  updatePoemIndex();
}

function showPreviousPoem() {
  currentIndex = (currentIndex - 1 + poems.length) % poems.length;
  updateCarousel();
  updatePoemIndex();
}

nextButton.addEventListener("click", showNextPoem);
prevButton.addEventListener("click", showPreviousPoem);

// Initialize the carousel on page load
updateCarousel();
