const openModalButton = window.document.querySelector(".open");
const closeModalButton = window.document.querySelector("#close_modal");
const modal = window.document.querySelector("#modal");
const fade = window.document.querySelector("#fade");


const togleModal = () => {
    [modal, fade].forEach((element) => {element.classList.toggle("hide")})

}

[openModalButton, closeModalButton, fade].forEach((element) => {
    element.addEventListener("click", () => {
        togleModal()
    })
})