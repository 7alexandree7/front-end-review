import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Child1 from './Components/Child1'
import Child2 from './Components/Child2'



function App() {

  const [count, setCount] = useState(0)
  const [secondCount, setSecondCount] = useState(0)

  return (
    <div className='App'>

      <h1>Hello word!</h1>

      <Child1 value={count}/>
      <button onClick={() => setCount(count + 1)}>Increment</button>


      <Child2 value={secondCount}/>
      <button onClick={() => setSecondCount((secondCount + 1))}>Increment</button>
      
    </div>
  )
}

export default App
