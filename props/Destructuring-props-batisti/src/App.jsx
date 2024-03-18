import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import CarDetails from './components/CarDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CarDetails  brand= 'BMW' km={12000} color='black' newCar={true}/>
    <CarDetails  brand= 'Mercedes' km={8000} color='white' newCar={true}/>
    <CarDetails  brand= 'Audi' km={6200} color='red' newCar={false}/>
    </>
  )
}

export default App
