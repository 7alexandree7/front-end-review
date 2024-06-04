import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState({name: 'xandinho', address: 'rua do futuro' })
  
  console.log(user);

  return (

    <div>
      <div>
        <input type="text" value={user.name} onChange={(e) => setUser((previusUver) => ({...previusUver, name: e.target.value}))} />
        <p>{!!user && <p>{user.name}</p>}</p>
      </div>
    </div>
  )
}

export default App
