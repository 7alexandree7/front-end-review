import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ListaSuspensa from './components/ListaSuspensa'

function App() {
  const [count, setCount] = useState(0)


  const listaDeDesenhos = [
    'Bob Esponja',
    'Pica Pau',
    'Bem 10',
    'Kick Butovisck',
    'Scooby Doo',
    'kit vs Kat',
    'Turma da monica',
    'Os Simpsonns',
    'Pokemon'
]

  


  return (
    <>  
    <ListaSuspensa listaDeDesenhos={listaDeDesenhos} titulo='Lista Suspensa'/>
    </>
  )
}

export default App

