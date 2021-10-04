const select = document.getElementsByClassName("selector-item");
const btns = document.querySelectorAll(".button-selector");

function selector (event) {
    let idx = event.currentTarget.id[13]-1; // 13 - индекс номера в id вызывающей кнопки

    for (let selection of select)
        selection.style.display = "none";

    select[idx].style.display = "flex";

    for (let btn of btns)
        btn.classList.remove('button-main-transparent_active');

    btns[idx].classList.add("button-main-transparent_active");
}

for (let btn of btns)
    btn.addEventListener("click", selector);


