const form = window.document.querySelector(".campo-form");
const inputNome = window.document.querySelector(".input-txt")
const exibirNome = window.document.querySelector(".nome-mostrar")



form.addEventListener("submit", e => {
    
    e.preventDefault();
    
    const inputUsuarioDigitou = inputNome.value;
    exibirNome.textContent = `bem vindo ${inputUsuarioDigitou}`
})