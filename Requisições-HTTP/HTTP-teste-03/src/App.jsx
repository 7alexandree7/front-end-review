import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const url = ('http://localhost:3000/pdroducts');

function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);


  useEffect(() => {

    async function fetchData () {

      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    }

    fetchData()
  })

  return (

    <div className='App'>
      <h2>Treinando requisição HTTP com Json server Teste 3</h2>

      {products.map((product) => {

        return (
          <ul>
            <li key={product.id}>{product.name}</li>
            <li key={product.id}>{product.cargo}</li>
            <li key={product.id}>{product.idade}</li>
          </ul>
        )
      })}
    </div>
  )
}

export default App
