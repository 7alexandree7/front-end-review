import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ShowUserName from './components/ShowUserName'

function App(props) {

  const [count, setCount] = useState(0)
  const [userName, setUserName] = useState('alice')



  return (
    <>
    <ShowUserName nome={userName}/>
    </>
  )
}

export default App
