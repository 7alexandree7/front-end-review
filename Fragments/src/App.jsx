import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Fragments from './Components/Fragments'

function App() {
  const [count, setCount] = useState(0)

  const titulo = 'Meu titulo';
  const subTitulo = 'Meu Sub Titulo';
  const infotText = 'campo de texto secundario'

  return (
    <>
      <Fragments
        title={titulo}
        subtitle={subTitulo}
        info={infotText}
      />
    </>
  )
}

export default App
