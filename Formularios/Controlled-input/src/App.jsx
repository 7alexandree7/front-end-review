import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Form from './Components/Form'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Form  obrigatorio={true} title='My Formulary' user={{nome: 'Alexandre', email: 'alexandre020602@gmail.com'}}/>
    </>
  )
}

export default App
