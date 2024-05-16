import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);


  //Vai renderizar sempre
  useEffect(() => {
    console.log('executa sempre');
  })


  //vai renderizar so uma vez quando a pagina for carregada
  useEffect(() => {
    console.log('executa na primeira vez que a pagina é carregada');
  }, [])


  //Rendereiza sempre que um estado especifico é alterado
  useEffect(() => {
    console.log('executa sempre que um estado especifico é alterado');
  }, [secondCount])



  useEffect(() => {

    const timer = setTimeout(() => {
      console.log(`O count foi executado ${count} vezes`)
    },2000) 

    return () => {
      clearInterval(timer)
    }
  },[count])



  return (
    <div>
      <h1>Front end benigners</h1>

      <div className='card'>
        <p>foi rendereizado {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>Render</button>
      </div>


      <div className='card'>
        <p>foi rendereizado {secondCount}</p>
        <button onClick={() => setSecondCount((secondCount) => secondCount + 1)}>Render</button>
      </div>

    </div>
  )
}

export default App
