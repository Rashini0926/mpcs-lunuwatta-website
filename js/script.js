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
