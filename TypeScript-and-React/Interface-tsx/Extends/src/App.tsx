import './App.css'

import { Pessoa, Gamer } from './Types/Familia'


function App() {

  const MyPersona: Pessoa | Gamer = {
    nome: 'dudu',
    idade: 23,
    mouse: 'hyperxy',
  }



  console.log(MyPersona)


  return (
    <>
      
    </>
  )
}

export default App
