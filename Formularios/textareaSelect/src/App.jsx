import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Form from './Components/Form'


function App() {
  const [count, setCount] = useState(0)

  const title = 'My Formulary'
  const obrigatorio = true
  const placeholderModificadaNome = 'Digite seu nome'
  const placeholderModificadaNomeEmail = 'Digite seu Email'
  const placeholderModificadaTextArea = 'Suas Informações Pessoais'

  return (
    <>
      <Form
        title={title}
        obrigatorio={obrigatorio}
        placeholderModificadaNome={placeholderModificadaNome} 
        placeholderModificadaNomeEmail={placeholderModificadaNomeEmail}
        placeholderModificadaTextArea={placeholderModificadaTextArea}
        />
    </>
  )
}

export default App
