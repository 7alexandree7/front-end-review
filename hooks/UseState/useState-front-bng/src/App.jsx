import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [valueInput, setValueInput] = useState('Alexandre')

  const add = () => {
     setCount(count + 1)
    console.log(count)
  }

  return (
    <>

      <div>
        <div>
          <h2>Bem vindo</h2>

          <h3>{count}</h3>
          <button onClick={add}>Adicionar</button>
        </div>

        <div>
          <h3>Mudar esse valor de forma dinamica: {valueInput}</h3>
          <input type="text"  value={valueInput} onChange={event => setValueInput(event.target.value)}/>
        </div>

      </div>
    </>
  )
}

export default App
