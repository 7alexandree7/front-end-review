import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const name = useRef()
  
  function getValueInput () {
    console.log(name.current.value)
  }

  return (
    <div>
      <input type="text"  ref={name} style={{outline:'none', marginRight:'30px'}}/>
      <button onClick={getValueInput}>Enviar</button>
    </div>
  )
}

export default App
