import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  const [people, setPeople] = useState([
    {id: 1, name: 'alexandre', sobreNome: 'oliveira' },
    {id: 2, name: 'Adriana', sobreNome: 'Santos'}
  ])

  const newPeople = {id: 3, name: 'Guilherme', sobreNome: 'pereira'}
  const peopleLenght = people.length

  console.log(people)
  console.log(peopleLenght)

  return (

    <div>
      <h2>State</h2>
      <div>   
        <button onClick={() => setPeople((prevPeople) => [...prevPeople, newPeople])}>Contador de Objetos no Array</button>
      </div>

      {<p>Quantidade {peopleLenght}</p>}
    </div>
  )
}

export default App
