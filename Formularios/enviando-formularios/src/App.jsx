import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import OnSubmit from './Components/OnSubmit'

function App() {
  const [count, setCount] = useState(0)

  const prevenir = (e) => {
    e.preventDefault();
    console.log('Formulario enviado')
  }

  return (
    <>
      <OnSubmit
        title='Enviando Formulario'
        placeholderModificada='Digite seu nome'
        obrigatorio={true}
        prevenir={prevenir}
      />
    </>
  )
}

export default App
