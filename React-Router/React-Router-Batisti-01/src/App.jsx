import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//1- config react router
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// import pages
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <h2>React Router</h2>

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />

        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
