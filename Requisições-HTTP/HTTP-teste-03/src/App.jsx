import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  return (

    <div className='App'>
      <h2>Treinando requisição HTTP com Json server Teste 3</h2>
    </div>
  )
}

export default App
