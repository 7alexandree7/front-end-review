const ListEscolar = ({
    materialEscolar, pencil, pen, rubber, graphite
}) => {

    return (

        <div>
            <h2>Lista de {materialEscolar}</h2>

            <ul>
                <li>Item 01: {pencil}</li> 
                <li>Item 02: {pen}</li>
                <li>Item 03: {rubber}</li>
                <li>Item 04: {graphite}</li>
            </ul>
        </div>
    )
    
}

export default ListEscolar