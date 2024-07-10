import listaDeProdutos from "../../data/listaDeProdutos"

export default function repeticao2() {


    return (

        <>

            {listaDeProdutos.map((produto, indice) => {

                return (
                    <ul key={indice} style={{margin: "30px"}}>

                        <li>{produto.id}</li>
                        <li>{produto.nome}</li>
                        <li>{produto.preco}</li>
                    </ul>
                )
            })}
    
        </>
    )
}