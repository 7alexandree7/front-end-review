import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const url = ('http://localhost:3000/products');

function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  const [pai, setPai] = useState('');
  const [mae, setMae] = useState('');

  useEffect(() => {
    async function fechData () {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data)
    }

    fechData()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      pai,
      mae,
    }

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })

    console.log(product)
  }

  
  return (
    <div className='App'>
      <h2>Treinando HTTP com Json server teste 4 </h2>

      {products.map((product) => {
        return (
          <ul>
            <li key={product.id}>{product.name}</li>
            <li key={product.id}>{product.cor}</li>
            <li key={product.id}>{product.price}</li>
            <li key={product.id}>{product.marca}</li>
            <li key={product.id}>{product.pai}</li>
            <li key={product.id}>{product.mae}</li>

          </ul>
        )
      })}

      <form onSubmit={handleSubmit}>
        <div>
          <h2>My formulary</h2>

          <label>
            Nome do Pai:
            <input type="text" name="txtPai" id="txtPai" value={pai}  onChange={(e => setPai(e.target.value))}/>
          </label>


          <label>
            Nome da mãe:
            <input type="text" name="txtmon" id="txtmon"  value={mae} onChange={(e => setMae(e.target.value))}/>
          </label>

          <input type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  )
}

export default App
