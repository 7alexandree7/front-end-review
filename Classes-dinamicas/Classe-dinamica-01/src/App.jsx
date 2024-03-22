import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import DinamicaTeste from './Components/Dinamica-teste1'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <DinamicaTeste /> 
    </>
  )
}

export default App
