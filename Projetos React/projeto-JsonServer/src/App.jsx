import { useState } from 'react'
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
