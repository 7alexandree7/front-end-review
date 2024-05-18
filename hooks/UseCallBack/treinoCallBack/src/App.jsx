import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [user, setUser]  = useState({nome: 'alexandre'});
  const [category, setCategory] = useState({categoria: 'developer'})


  const handleUser = useCallback(() => {
    setUser({nome: 'Aphelios'})
    setCategory({categoria: 'qa'});
    console.log(category, user)
  },[category])

  return (


    <div>
      <button onClick={handleUser}>Aplicar mudanças</button>
    </div>

  )
}

export default App
