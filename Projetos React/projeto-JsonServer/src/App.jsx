import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Import Components
import Form from './Components/Form';

function App() {

  const [name, setNmae] = useState('');
  const [sobreNome, setSobrenome] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <div className='App'>
      <Form
        name={name}
        sobreNome={sobreNome}
        setName={setNmae}
        setSobrenome={setSobrenome}
      />
    </div>
  )

}

export default App;
