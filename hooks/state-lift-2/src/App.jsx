import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import SeuNome from './components/SeuNome'
import Saudacao from './components/Saudacao'

function App() {

  const [count, setCount] = useState(0);
  const [nome, setNome] = useState('');

  return (
    <>
    <SeuNome  placeholderModificada= 'Digite seu nome: ' setNome={setNome}/>
    <Saudacao  nome={nome}/>
    </>
  )
}

export default App
