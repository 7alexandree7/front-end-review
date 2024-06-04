import { useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState('');
  const [people, setPeople] =  useState({ name: 'Alexandre', address: 'Rua do futuro' })
  console.log(people)


  return (

    <div>

      <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        {!!name && <p>{name}</p>}
      </div>

      <div>
        <input type="text" value={people.name}  onChange={(e) => setPeople((prev) => ({...prev, name: e.target.value}))}/>
        
      </div>
    </div>


  )
}

export default App
