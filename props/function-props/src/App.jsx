import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import PropsFunction from './components/PropsFunction'

function App() {
  const [count, setCount] = useState(0)


  function shohMessage() {
    console.log('msg via props')
  }

  return (
    <>
    <PropsFunction myFunction={shohMessage}/>
    </>
  )
}

export default App
