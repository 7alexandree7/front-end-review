import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const url = 'http://localhost:3000/products'

function App() {
  const [count, setCount] = useState(0)
  const[products, setProducts] = useState([])

  useEffect(()=> {
    async function fetchdata () {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data)
    }

    fetchdata()
  },[])

  return (
    <div className='App'>

      <h1>Minha lista</h1>


      {products.map((product) => {
        return (
          <ul>
            <li key={product.id}>{product.name} -  </li>
            <li key={product.id}>{product.cor} -  </li>
            <li key={product.id}>{product.price} -  </li>
            <li key={product.id}>{product.marca} -  </li>
          </ul>
        )
      })}

    </div>
  )
}

export default App
