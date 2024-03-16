import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('alexandre');
  const [previusName, setPreviusName] = useState('')

  const changeName = () => {
    setPreviusName(name)
    setName('vitor')
  }


  return (
    <>

    <div>
      <h1>If no jsx </h1>


      {name === 'alexandre' ? (
        <div>
          <p>meu nome é {name}</p>
        </div>
      ) : (
        <div>
          <p>meu nome não é {previusName} é {name}</p>
        </div>
      )}

      <button onClick={changeName}>Mudar Nome</button>
    </div>
    </>
    

  )

}

export default App
