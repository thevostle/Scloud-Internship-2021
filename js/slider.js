const btn_prev = document.querySelector(".slider-prev");
const btn_next = document.querySelector(".slider-next");

const slides = document.getElementsByClassName("slide__data");
const sliderPoints = document.getElementsByClassName("slider-point");

let idx = 0;

function changeSlide (event) {
    slides[idx].style.opacity = 0;
    slides[idx].classList.remove("slide_active");
    sliderPoints[idx].classList.remove("slider-point_active");

    let isForward = event.currentTarget.classList[2] == "slider-next";
    if (isForward) idx++;
    else idx--;

    if (idx == 5) idx = 0;
    if (idx == -1) idx = 4;

    slides[idx].classList.add("slide_active");
    sliderPoints[idx].classList.add("slider-point_active");
    setTimeout(() => {
        slides[idx].style.opacity = 1;
    }, 100);
}

btn_prev.addEventListener("click", changeSlide);
btn_next.addEventListener("click", changeSlide);