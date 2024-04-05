import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// URL do localHost
const url = 'http://localhost:3000/poducts';

function App() {

  const [count, setCount] = useState(0)
  const [products, setProducts] = useState([]);

  // resgatando dados
  useEffect(() => {

    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data)
    }

    fetchData()

  }, []); 


  return (

    <div className='App'>
      <h1>Lista de Produtos com json server</h1>

      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>{product.name}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
