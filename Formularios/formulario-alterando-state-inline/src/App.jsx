import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import StateInline from './Components/StateInline'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <StateInline />
    </>
  )
}

export default App
