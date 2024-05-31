import './App.css'

function App() {
  
  let nome = 'alexandre';
  let idade = 20;
  let isStrong = true;

  nome = 'pedro'
  idade = 12
  isStrong = false

  console.log(nome, idade, isStrong)


  const circ = (diameter: number) => {
    return diameter * Math.PI
  }

  console.log(circ(20))


  return (

    <div>

    </div>
  )
}

export default App
