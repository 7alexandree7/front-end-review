import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(props) {

  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const [name, setName] = useState('');

  
  const changeName = (event) => {
    setName(event.target.value)
  }

  const changeNumber = (event) => {
    setNumber(number + 1)
  }


  return (
    <>

    <div>
      <h2> Bem vindo {name}</h2>
      <input type="text" value={name} onChange={changeName} />
    </div>


    <div>
      <p>Numero: {number}</p>
      <button onClick={changeNumber}>Adicionar</button>
    </div>
    </>
  )
}

export default App
