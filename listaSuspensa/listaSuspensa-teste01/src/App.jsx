import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ListaSuspensa01 from './components/ListaSuspensa01'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListaSuspensa01
        title='bem vindo'
        label='Animes'
        obrigatorio={true} 
        />
    </>
  )
}

export default App
