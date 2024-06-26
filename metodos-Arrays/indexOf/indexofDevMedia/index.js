const exibirPalavra = () => {

    const inputFrase = window.document.getElementById("input-texto").value
    const inputPalavraAbuscar = window.document.getElementById("input-termo").value

    console.log(inputFrase);
    console.log(inputPalavraAbuscar);
 

    let posicao = inputFrase.indexOf(inputPalavraAbuscar)
    let resultado;

    if (posicao === -1) {
        resultado = "Não encontrado no texto"
    }

    else {
        resultado = "foi encontrada no indice " + posicao
    }

    window.document.getElementById("resultado").innerHTML = resultado
}


