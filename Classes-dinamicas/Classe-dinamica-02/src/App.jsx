import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Dinamic02 from './Components/Dinamic02'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Dinamic02  />
    </>
  )
}

export default App
