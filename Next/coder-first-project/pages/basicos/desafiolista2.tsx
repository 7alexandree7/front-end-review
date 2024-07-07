export default function novalista () {

    function gerarNovaLista (final: number) {
        const lista = [];
        for(let i = 0; i <= final; i++) {
            lista.push(<span>{i}</span>)
        }

        return lista
    }

    return (
        <div>
            {gerarNovaLista(20)}
        </div>
    )
}