import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const count = useRef(0);
  const inputRef = useRef();
  const buttonRef = useRef();

  return (
    <div>

      <h1>{count.current}</h1>

      <button onClick={() => {
        inputRef.current.value = 'valor';
        buttonRef.current.click();
        inputRef.current.focus();
      }}>Increment</button>

      <input
        type="text"
        ref={inputRef}
      />


      <button 
      onClick={() => alert('clicou')}
      ref={buttonRef}
      >
        Alert
      </button>
    </div>
  )
}

export default App
