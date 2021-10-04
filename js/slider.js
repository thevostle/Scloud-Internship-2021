const btn_prev = document.querySelector(".slider-prev");
const btn_next = document.querySelector(".slider-next");

const slides = document.getElementsByClassName("slide__data");

let idx = 0;

function changeSlide (event) {
    let isForward = event.currentTarget.classList[2] == "slider-next";
    if (isForward) idx++;
    else idx--;

    if (idx == 5) idx = 0;
    if (idx == -1) idx = 4;

    for (let slide of slides)
        slide.style.display = "none";

    slides[idx].style.display = "block";
}

btn_prev.addEventListener("click", changeSlide);
btn_next.addEventListener("click", changeSlide);