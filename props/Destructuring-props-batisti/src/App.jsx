import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import CarDetails from './components/CarDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CarDetails  brand= 'BMW' km={12000} color='black'/>
    </>
  )
}

export default App
