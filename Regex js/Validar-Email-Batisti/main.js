const emailInput = window.document.querySelector(".input");
const buttonInput = window.document.querySelector(".btn");
const resultMessage = window.document.querySelector("#resultMessage");
const form = window.document.querySelector(".form");


form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value;

    //Validar Email
    const isValid = validateEmail(email);

    if (isValid) {
        resultMessage.textContent ="Email verificado com sucesso";
        resultMessage.style.color = "green";
    }
    else {
        resultMessage.textContent = "Formatção Invalida, tente novamente";
        resultMessage.style.color = "red";
    }

    validateEmail(email);

})


//Function para a validação de email
const validateEmail = (email) => {

    //Padrão texto@texto.texto
    const regex = /^[^\s]+@[^\s]+\.[^\s]+$/
    return regex.test(email);
}
