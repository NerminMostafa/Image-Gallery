let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let dots = document.getElementById("pagination");
let interval;

// Create pagination dots
for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => currentSlide(i));
    dots.appendChild(dot);
}

// Show the initial slide
showSlide(slideIndex);

// Function to show a specific slide
function showSlide(index) {
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";

    let dotsArray = document.getElementsByClassName("dot");
    for (let i = 0; i < dotsArray.length; i++) {
        dotsArray[i].classList.remove("active");
    }
    dotsArray[slideIndex].classList.add("active");
}

// Show the next slide
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

// Show the previous slide
function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

// Show the current slide
function currentSlide(index) {
    slideIndex = index;
    showSlide(slideIndex);
}

// Start automatic slide change
function startSlideShow() {
    interval = setInterval(() => {
        slideIndex++;
        showSlide(slideIndex);
    }, 3000);
}

// Pause automatic slide change on hover
function pauseSlideShow() {
    clearInterval(interval);
}

// Resume slide show on mouse out
document.querySelector(".slider-container").addEventListener("mouseover", pauseSlideShow);
document.querySelector(".slider-container").addEventListener("mouseout", startSlideShow);

startSlideShow();
