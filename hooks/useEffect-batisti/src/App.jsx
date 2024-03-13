import { useState, useEffect } from 'react'


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [countb, setCountb] = useState(10);

  useEffect (()=> {
    console.log('Roda a cada Renderização')
  })

  useEffect (() => {
    console.log('So roda quando o valor de algum estado selecionado for incrementado')
  }, [count])



  return (

    <>
    <div>
      <button onClick={() => setCount((prevCount) => count + 1)}>Renderinzar</button>
      <p>{count}</p>
    </div>


    <div>
      <button onClick={() => setCountb((prevCount) => countb + 1)}>Renderinzar</button>
      <p>{countb}</p>
    </div>

    </>

  )
}

export default App

