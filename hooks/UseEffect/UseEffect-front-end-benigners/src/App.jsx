import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Front end benigners</h1>

      <div className='card'>
        <p>foi rendereizado {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>Render</button>
      </div>
    </div>
  )
}

export default App
