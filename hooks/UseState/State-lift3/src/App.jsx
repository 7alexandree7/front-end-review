import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Saudacao from './Components/Saudacao'
import SeuNome from './Components/SeuNome'

function App() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  

  return (
    <>
    <Saudacao name={name} />
    <SeuNome setName={setName} obrigatorio={true} placeholderModificada= 'Digite seu nome'/>
    </>
  )
}

export default App
