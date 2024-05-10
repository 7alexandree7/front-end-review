import { useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='container'>

      <h1 className='title'>Bucasdor De Cep</h1>

      <div className='container-input'>

        <input type="text" name="" id="" placeholder='Digite seu CEP...'/>
        <button className='buttonSearch'> <FiSearch size={25} color='#000'/> </button>

      </div>


      <main className='main'>

        <h2>CEP: 42.700-600</h2>

        <span>Rua: alguma rua</span>
        <span>Complemento: algum complemento</span>
        <span>Bairro: algum bairro</span>
        <span>Campo grande - ms</span>

      </main>

    </div>
  )
}

export default App
