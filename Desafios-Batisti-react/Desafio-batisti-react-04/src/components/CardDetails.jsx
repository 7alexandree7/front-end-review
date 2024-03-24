const CardDetails = ({nome, idade, profissao}) => {


    return (

        <div>
            <ul>
                <li>Nome: {nome}</li>
                <li>Idade: {idade}</li>
                <li>Profissão: {profissao}</li>
            </ul>


            {idade > 18 ? (
                <div>
                    <p>{nome} tem {idade} é de maior = Pode Tiar A CNH</p>
                </div>
            ) : (
                <div>
                    <p>{nome} tem {idade} é de menor</p>
                </div>
            )}

        </div>
    )
}


export default CardDetails;