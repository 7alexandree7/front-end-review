import '../Saudacao/saudacao.css'

const Saudacao = ({nome}) => {

    function gerarSaudacao (algumNome)  {
        return `Ola, ${algumNome}, tudo bem`
    }


    return (
        <div className="box-saudacao">
            <p className='p-saudacao'>{gerarSaudacao(nome)}</p>
        </div>
    )

}



export default Saudacao;