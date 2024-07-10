export default function repeticao1() {

    const listaDeAprovados = ["alexandre", "adriana", "guilherme", "gustavo", "daniel"]

    return (
        <>
            <ul>
                {listaDeAprovados.map((item, indice) => {
                    return (
                        <li key={indice}>{item}</li>
                    )
                })}
            </ul>
        </>
    )
}