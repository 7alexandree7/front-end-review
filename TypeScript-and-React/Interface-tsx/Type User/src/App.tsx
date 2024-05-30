import User from './Types/User'
import { Aluno } from './Types/Extends'
import { Pessoa } from './Types/Extends'

import './App.css'

function App() {

  const userObjt: User = {
    name: 'alexandre',
    sobreNome: 'oliveira',
    age: 21,
    altura: 180,
    nacionalidade: 'BR',
    hetero: true,
  }


  const MyPersonaObj: Pessoa | Aluno = {
    nome: 'adriana',
    idade: 45,
    curso: 'dev',
    materiaFavorita: 'matematica'
  }


  console.log(MyPersonaObj)

  console.log(userObjt)
  
  return (

    <div className='App'>
      <h2>Interface com TypeScript</h2>
    </div>
  )
}

export default App
