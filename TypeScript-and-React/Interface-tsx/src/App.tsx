import User from './Types/User'

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

  console.log(userObjt)
  
  return (

    <div className='App'>
      <h2>Interface com TypeScript</h2>
    </div>
  )
}

export default App
