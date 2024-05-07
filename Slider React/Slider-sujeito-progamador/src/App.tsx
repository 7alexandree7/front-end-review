import { useState } from 'react'
<<<<<<< HEAD
=======
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
>>>>>>> bfde08d7a93016dfd7e379e939cd98bcfc7ee1b3
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<<<<<<< HEAD

    <div className='App'>
      <div className='container'>
        <h2>Slider com React Js</h2>
      </div>
    </div>
=======
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
>>>>>>> bfde08d7a93016dfd7e379e939cd98bcfc7ee1b3
  )
}

export default App
