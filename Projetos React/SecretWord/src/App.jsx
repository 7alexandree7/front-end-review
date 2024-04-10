import { useState } from 'react'
import './App.css'

import StartScreen from './Components/StartScreen'
import Game from './Components/Game'
import GameOver from './Components/GameOver'
import {wordList} from './data/words'


function App() {

  const stages =  [
    {id: 1, name: 'start'},
    {id: 2, name: 'game'},
    {id: 3, name: 'end'},
  ]


  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordList);
  


  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [letters, setLetters] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)


  const pickedWordAndCategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    const word = words[category][Math.floor(Math.random() * words[category].length)];
 
    return {word, category}
    
  };


  const StartGame = () => {
    const {word, category} = pickedWordAndCategory();

    let wordLetters = word.split('');
    wordLetters = wordLetters.map((letra) => letra.toLowerCase());
    
    console.log(word, category);
    console.log(wordLetters);

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(letters);

    setGameStage(stages[1].name);
  }


  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }


  const retry = () => {
    setGameStage(stages[0].name);
  }


  return (
    
    <div className='App'>

      {gameStage == 'start' && <StartScreen StartGame={StartGame} />}

      {gameStage == 'game' && <Game verifyLetter={verifyLetter}
        pickedWord={pickedWord}
        pickedCategory={pickedCategory}
        letters={letters}
        guessedLetters={guessedLetters}
        wordLetters={wrongLetters}
        guesses={guesses}
        score={score}
      />}

      {gameStage == 'end' && <GameOver retry={retry} />}
      
    </div>
  )

}

export default App
