import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import CardDetails from './components/CardDetails'

function App() {
  const [count, setCount] = useState(0)

  const pessoas = [

    { id: 1, nome: 'Alexandre', idade: 21, profissao: 'front-end' },
    { id: 2, nome: 'Daniel', idade: 12, profissao: 'dev-moblie' },
    { id: 1, nome: 'Thauan', idade: 28, profissao: 'full-stack' },
  ]

  return (
    <>
      {pessoas.map((pessoa) => (
        <CardDetails
          nome={pessoa.nome}
          idade={pessoa.idade}
          profissao={pessoa.profissao}
        />
      ))}

    </>
  )
}

export default App
