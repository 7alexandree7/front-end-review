import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Carros from './Components/Carros/Carros'

const carrosList = [
  {id: 1, brand:' mercedes-Benz', year: '2023', color: 'preto-fosco', model: 'G63', horses: '585'},
  {id: 2, brand:' BMW', year: '2024', color: 'Gold', model: 'I8', horses: '374'},
  {id: 3, brand:' Audi', year: '2019', color: 'branco', model: 'R8', horses: '610'},
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {carrosList.map((car) => (
        <Carros
          brand={car.brand}
          year={car.year}
          color={car.color}
          model={car.model}
          horses={car.horses}
        />
      ))}
    </>
  )
}

export default App
