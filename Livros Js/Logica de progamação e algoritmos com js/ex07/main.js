const carName = window.document.querySelector(".inputCarName");
const precoInput = window.document.querySelector(".inputPreco");
const btn = window.document.querySelector(".btn");
const carResult = window.document.querySelector(".carResult");
const entradaResult = window.document.querySelector(".entradaResult");
const parcelaResult = window.document.querySelector(".parcelaResult");

btn.addEventListener("click", () => {
    carResult.textContent = `Promoção ${carName.value}`
    
    const entrada = (precoInput.value / 2)
    entradaResult.textContent = `Entrada de R$: ${entrada.toFixed(2)}`

    const parcelas = (precoInput.value / 2)
    const distribuirParcelas = (parcelas / 12)
    parcelaResult.textContent = `+12x de R$ ${distribuirParcelas}`
})
