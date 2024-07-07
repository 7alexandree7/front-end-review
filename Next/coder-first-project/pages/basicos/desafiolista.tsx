export default function desafiolista() {

    function gerarLista() {
        const lista = []
        for (let i = 0; i <= 10; i++) {
            lista.push(<span>{i}</span>)
        }

        return lista
    }

    return (

        <div>
            {gerarLista()}
        </div>

    )
}
