import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Teste from './Components/Teste'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Teste />
    </>
  )
}

export default App
