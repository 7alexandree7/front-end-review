const btn = window.document.querySelector(".btn");
const btnClose = window.document.querySelector(".btn-close")
const modal = window.document.querySelector(".modal");


btn.addEventListener("click", () => {
    modal.showModal()
})


btnClose.addEventListener("click", () => {
    modal.close()
})