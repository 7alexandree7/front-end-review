import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Form from './Components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form
        title='Formulario tipo Nome'
        titleSpan='Nome:'
        mudavel='text'
        placeholderModificada='Digite seu nome...'
      />


      <Form
        title='Formulario Tipo e-mail'
        titleSpan='email:'
        mudavel='email'
        placeholderModificada='Digite seu E-mail...'
      />
    </>
  )
}

export default App
