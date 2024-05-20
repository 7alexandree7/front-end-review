import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const numberRef = useRef(0);
  const buttonRef = useRef();
  const oldCountRef = useRef();


  //Não reneriza o componente
  useEffect(() => {
    //setNumber((prevNumber) => prevNumber + 10);
    numberRef.current = Math.random();
  })

  // Referencia ao elemento DOM
  useEffect(() => {
    buttonRef.current.click()
  }, [])


  //Referencia ao valor anterior
  useEffect(() => {
    oldCountRef.current = count
  }, [count])




  return (

    <div>
      <h1>O nunmero é {number}</h1>
      <h1>O numero do UseRef é {numberRef.current}</h1>
      <h1>O contador é {count}</h1>
      <h2>O contador anterior era {oldCountRef.current}</h2>
      <button ref={buttonRef} onClick={() => setCount((prevCount) => prevCount + 1)}>Adicionar</button>
    </div>
  )
}

export default App
