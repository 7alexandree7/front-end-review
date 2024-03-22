import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Gerenciar o estado de algum valor 
// Getter Setter

function App() {
  const [name, setName] = useState('Alexandre');
  const [number, setNumber] = useState(1);

  console.log(name);
  console.log(number);

  const mudarNumero = () => {
    setNumber((prevNumber) => prevNumber + 1)
  }

  return (
    <>
    <div className='App'>

      <h2>Bem vindo {name}</h2>
      <input type="text" value={name} onChange={event => setName(event.target.value)}/>

      <div>
        <p>Mudar Numero {number}</p>
        <button onClick={mudarNumero}>Mudar</button>
      </div>

    </div>
    </>
  )
}

export default App;
