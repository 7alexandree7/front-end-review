const ListaSuspensa = ({ titulo, listaDeDesenhos }) => {

    return (

        <div>
            <h2>{titulo}</h2>


            <select name="campoName" id="campoId">
                {listaDeDesenhos.map((desenho) => {
                    return <option key={desenho} value="valor">{desenho}</option>
                })}
            </select>

        </div>
    )

}


export default ListaSuspensa