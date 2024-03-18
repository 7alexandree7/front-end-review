
const ListBus = ({
    automovel, brand, engine,
    color, model, year
}) => {

    return (

        <div>
            <h2>Lista de {automovel}</h2>

            <ul>
                <li>Marca: {brand}</li>
                <li>Motor: {engine}</li>
                <li>cor: {color}</li>
                <li>modelo: {model}</li>
                <li>Ano: {year}</li>
            </ul>
        </div>
    )
}
    
export default ListBus;