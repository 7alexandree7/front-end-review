import './StartScreen.css'

const StartScreen = ({StartGame}) => {

    return (
        <div>
            <h1>Secret Word</h1>
            <p>Clique no botão para começar a jogar</p>
            <button onClick={StartGame}>Começar o jogo</button>
        </div>
    )
}


export default StartScreen;