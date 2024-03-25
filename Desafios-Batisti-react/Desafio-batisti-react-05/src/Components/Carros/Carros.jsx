const Carros =  ({brand, year, color, model, horses}) => {

    return (

        <div>

            <h2>Marca: {brand}</h2>

        <ul>
            <li>Ano: {year}</li>
            <li>Cor: {color} </li>
            <li>Modelo: {model}</li>
            <li>Cvalos: {horses}</li>
        </ul>

     </div>
    )
}


export default Carros;