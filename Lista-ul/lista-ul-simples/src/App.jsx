import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Lista from './component/Lista'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Lista item='List Itens' />
    </>
  )
}

export default App
