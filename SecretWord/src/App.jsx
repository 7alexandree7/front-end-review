import { useState } from 'react'
import './App.css'

import StartScreen from './Components/StartScreen'
import Game from './Components/Game'
import {wordList} from './data/words'


function App() {

  const stages =  [
    {id: 1, name: 'start'},
    {id: 2, name: 'game'},
    {id: 3, name: 'end'},
  ]

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordList)
  console.log(words)

  return (
    <div className='App'>
      {gameStage == 'start' && <StartScreen />}
      {gameStage == 'game' && <Game />}
      {gameStage == 'end' && <GameOver/>}
    </div>
  )
}

export default App
