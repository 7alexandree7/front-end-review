import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import SeuNome from './assets/components/SeuNome/SeuNome'
import Saudacao from './assets/components/Saudacao/Saudacao'

function App() {

  const [count, setCount] = useState(0)
  const [nome, setNome] = useState("");


  return (
    <>

      <div>

        <h1>State Lift</h1>

        <SeuNome placeholderModificada="Qual é seu nome" setNome={setNome} />
        <Saudacao nome={nome}/>
        
      </div>
    </>
  )
}

export default App
