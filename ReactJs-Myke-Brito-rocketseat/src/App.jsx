import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './Components/Header'
import Section from './Components/Section'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='App'>

      {/*Incluir o Header aqui*/}
      <Header />

      {/*Incluir o Main aqui*/}
      <main>
        {/*Incluir a Section aqui*/}
        <Section
          title='Meus Jogos'
          subTitle='Os games que eu mais curto'
           />

        <Section
          title='Canais e Streamers'
          subTitle='Os gamers que eu mais curto jogar'
           />
      </main>

    </div>
  )
}

export default App
