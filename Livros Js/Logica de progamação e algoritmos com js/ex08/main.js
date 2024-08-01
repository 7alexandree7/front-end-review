const titleInput = window.document.querySelector(".titleInput");
const precoInput = window.document.querySelector(".precoInput");
const btn = window.document.querySelector(".btn");
const titleResult = window.document.querySelector(".titleResult");
const promocaoResult = window.document.querySelector(".promocaoResult");


btn.addEventListener("click", () => {
    //console.log("click")
    const title = titleInput.value

    if(!title) {
        return;
    }

    else {
        titleResult.textContent = `Promoção de ${title}`
    }
})