const form = window.document.querySelector(".form");
const emailInput = window.document.querySelector(".input");
const resultMessage = window.document.querySelector("#resultMessage");


form.addEventListener("submit", function (event)  {

    event.preventDefault();

    const email = emailInput.value;

    const isValid = validateEmail(email)
    console.log(isValid)

    if (isValid) {
        resultMessage.textContent = "Seu Email foi validado com sucesso";
        resultMessage.style.color = "green"
    }


    else {
        resultMessage.textContent = "Seu email foi inserido incorreto";
        resultMessage.style.color = "red";
    }

    validateEmail(email)
})



const validateEmail = (email) => {

    const regex = /^[^\s]+@[^\s]+\.[^\s]+$/
    return regex.test(email)
}
