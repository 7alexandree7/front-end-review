import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ListCar from './Components/Listcar/ListCar'
import ListBus from './Components/ListBus/ListBus'

function App() {
  const [count, setCount] = useState(0)


  const cars = [
    {id: 1, automovel: 'Carro', brand: 'Kia', engine: 'v10', color: 'green', model: 'spit', year:'2013'  },
    {id: 2, automovel: 'Caminhao', brand: 'Fiat', engine: 'v120', color: 'red', model: 'long', year:'2012'  },
    {id: 3, automovel: 'Carreta', brand: 'Estrada', engine: 'v16', color: 'pink', model: 'cold', year:'2008'  },
    {id: 4, automovel: 'aviao', brand: 'gol', engine: 'v2', color: 'blue', model: 'ret', year:'2005'  },
  ]

  return (
    <>
      {cars.map((car) => (
        <ListCar
          automovel={car.automovel}
          brand={car.brand}
          engine={car.engine}
          color={car.color}
          model={car.model}
          year={car.year}

        />
        
      ))}
    </>
  )
}

export default App
