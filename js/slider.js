const btn_prev = document.querySelector(".btn-prev");
const btn_next = document.querySelector(".btn-next");

const slides = document.getElementsByClassName("slide-data");

let idx = 0;

function changeSlide (event) {
    let isForward = event.currentTarget.classList[1] == "btn-next";
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