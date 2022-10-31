// Get Slider Items
const sliderImages = Array.from(document.querySelectorAll(".slider-container img"));
const slideNumberElement = document.getElementById("slide-number"); //  Slide Number Element
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
// Set Current Slide
let currentSlide = 0;
// Get the indicator number
const indicators = document.getElementById("indicators");
const bulletElement = document.createElement("ul");
bulletElement.setAttribute("id", "pagination-ul");
let bullets;
// Create bullets = to the number of present images
for (let i = 0; i <= sliderImages.length - 1; i++) {
  bullets = document.createElement("li");
  bullets.setAttribute("data-index", i);
  // append the numbers to li
  bullets.appendChild(document.createTextNode(i));
  // append the created li to ul
  bulletElement.appendChild(bullets);
}

// append the ul to the window object
indicators.appendChild(bulletElement);
let paginationsBullets = document.querySelectorAll("#pagination-ul li");
//  Creat check function
const check = () => {
  slideNumberElement.textContent = `Slide# ${currentSlide} of ${sliderImages.length - 1}`

  // Remove All Active Classes
  removeAllActive();

  // Set Active Class On Current Slide
  sliderImages[currentSlide].classList.add("active");

  // Set Active Class on Current Pagination Item
  bulletElement.children[currentSlide].classList.add("active");

  // Check if Current Slide is The First
  if (currentSlide == 0) {
    // Add Disabled Class on Previous Button
    prevButton.classList.add("disabled");
  } else {
    // Remove Disabled Class From Previous Button
    prevButton.classList.remove("disabled");
  }

  // Check if Current Slide is The Last
  if (currentSlide == sliderImages.length - 1) {
    // Add Disabled Class on Next Button
    nextButton.classList.add("disabled");
  } else {
    // Remove Disabled Class From Next Button
    nextButton.classList.remove("disabled");
  }
};
// Remove all active class
const removeAllActive = () => {
  sliderImages.forEach((item) => {
    item.classList.remove("active");
  });

  paginationsBullets.forEach((item) => {
    item.classList.remove("active");
  });
};
check();

paginationsBullets.forEach((item) => {
  item.onclick = function () {
    currentSlide = this.getAttribute("data-index");
    check();
  };
});

const next = () => {
  // don't increament the currentSlider if it has disable class
  if (nextButton.classList.contains("disabled")) {
    //Do nothing
    return false;
  } else {
    currentSlide++;
    check();
  }
};
const prev = () => {
  //don't increament the currentSlider if it has disable class
  if (prevButton.classList.contains("disabled")) {
    //Do nothing
    return false;
  } else {
    currentSlide--;
    check();
  }
};
// listen to buttons when clicked 
nextButton.addEventListener("click", next);
prevButton.addEventListener("click", prev);
