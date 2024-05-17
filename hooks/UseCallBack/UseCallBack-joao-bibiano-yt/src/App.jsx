import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [user, setUser] = useState({user: 'alexandre'})
  const [category, setCategory] = useState({category: 'developer'})

  const updateName = useCallback(() => {
    setUser({name: 'Aphelios'})
    setCategory({category: 'qa'})
    console.log(user)
    console.log(category)
  },[category]) 


  return (
    <div>
      <button onClick={updateName}>Alterar o Usuario para outro nome:</button>
    </div>
  )
}

export default App
