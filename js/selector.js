const select = document.getElementsByClassName("selector__item");
const btns = document.querySelectorAll(".button_selector");

function selector (event) {
    let idx = event.currentTarget.id[13]-1; // 13 - индекс номера в id вызывающей кнопки

    for (let selection of select)
        selection.style.display = "none";

    select[idx].style.display = "flex";

    for (let btn of btns)
        btn.classList.remove('button_main_transparent_active');

    btns[idx].classList.add("button_main_transparent_active");
}

for (let btn of btns)
    btn.addEventListener("click", selector);


