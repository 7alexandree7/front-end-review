import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import PropsChildren from './components/PropsChildren'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PropsChildren title='Aqui é o titulo' valueBtn='Enviar'>
        <p>Aqui Vai o conteudo</p>
      </PropsChildren>

    </>
  )
}

export default App
