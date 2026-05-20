/* SCROLL REVEAL */
window.addEventListener("scroll", reveal);

function reveal(){
    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach(el => {
        let windowHeight = window.innerHeight;
        let top = el.getBoundingClientRect().top;

        if(top < windowHeight - 100){
            el.classList.add("active");
        }
    });
}

/* GALLERY ANIMATION */
const galleryItems = document.querySelectorAll(".gallery-item");

function animateGallery(){
    let windowHeight = window.innerHeight;

    galleryItems.forEach((item, i) => {
        let top = item.getBoundingClientRect().top;

        if(top < windowHeight - 100){
            setTimeout(() => {
                item.classList.add("active");
            }, i * 150);
        }
    });
}

window.addEventListener("scroll", animateGallery);
window.addEventListener("load", () => {
    reveal();
    animateGallery();
});

/* EVENT GALLERY SLIDER */
const slides = document.querySelectorAll(".event-slider .slide");
const prevBtn = document.querySelector(".slider-btn.prev");
const nextBtn = document.querySelector(".slider-btn.next");
const dotsContainer = document.querySelector(".slider-dots");
let currentSlide = 0;
let slideTimer;

function showSlide(index){
    if(!slides.length){
        return;
    }

    currentSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
        slide.classList.toggle("current-slide", i === currentSlide);
    });

    document.querySelectorAll(".slider-dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === currentSlide);
    });
}

function startSlideShow(){
    clearInterval(slideTimer);
    slideTimer = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 4000);
}

if(slides.length && dotsContainer && prevBtn && nextBtn){
    slides.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "slider-dot";
        dot.setAttribute("aria-label", `Show event photo ${i + 1}`);
        dot.addEventListener("click", () => {
            showSlide(i);
            startSlideShow();
        });
        dotsContainer.appendChild(dot);
    });

    prevBtn.addEventListener("click", () => {
        showSlide(currentSlide - 1);
        startSlideShow();
    });

    nextBtn.addEventListener("click", () => {
        showSlide(currentSlide + 1);
        startSlideShow();
    });

    showSlide(0);
    startSlideShow();
}

/* LIGHTBOX */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");

document.addEventListener("click", (e) => {
    const img = e.target.closest(".gallery-item img");

    if(img){
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    }
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if(e.target === lightbox){
        lightbox.style.display = "none";
    }
});
