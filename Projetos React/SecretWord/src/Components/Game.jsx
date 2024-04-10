import "./Game.css"

const Game = ({
    verifyLetters,
    pickedWord,
    pickedCategory,
    letters,
    guessedLetters,
    wordLetters,
    guesses,
    score,
}) => {

    return (

        <div className="game">
            <p className="points">
                <span>Pontuação: {score}</span>
            </p>

            <h1>Adivinhe a palavra</h1>
            <h3 className="tip">Dica sobre a palavra <span>{pickedCategory}</span></h3>
            <p>Voce ainda tem {guesses} tentativas</p>

            <div className="wordContainer">
                <span className="letter">A</span>
                <span className="blankSquare"></span>
            </div>

            <div className="letterContainer">
                <p>Tente adivinhar uma letra da palavra</p>

                <form className="f">
                    <input type="text" name="letter" maxLength="1" required />
                    <button>Jogar</button>
                </form>
            </div>

            <div className="wrongLettersContainer">
                <p>Letras ja utilizadas</p>
                <span>a,</span>
                <span>b,</span>
            </div>
        </div>
    )

    
}

export default Game;