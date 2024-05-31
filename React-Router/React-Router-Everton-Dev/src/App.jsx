import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Login from './Login'
import Produto from './Produto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>

      <Routes>

        <Route path= '/' element={<Login />}></Route>
        <Route path= '/produto' element={<Produto />}></Route>
        <Route path= '*' element={<h1>Not found</h1>}></Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
