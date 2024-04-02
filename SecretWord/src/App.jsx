import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import StartScreen from './Components/StartScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <StartScreen />
    </div>
  )
}

export default App
