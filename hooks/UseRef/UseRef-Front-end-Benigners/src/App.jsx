import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const buttonRef = useRef();

  useEffect(() => {
    countRef.current = count
    console.log(countRef.current);
  },[count])


  useEffect(() => {
    buttonRef.current.click();
  },[])

  return (

    <>

      <h1>UseRef Front-end benigners</h1>

      <div className="card">

        <h2>Contador Original: {count}</h2>
        <h2>Contador por referencia {countRef.current}</h2>

        <button ref={buttonRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

    </>
  )
}

export default App
