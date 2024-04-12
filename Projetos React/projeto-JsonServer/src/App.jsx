import { useState } from 'react'
import './App.css'

//Import Components
import Form from './Components/Form';
import List from './Components/List';

function App() {


  const [name, setName] = useState('');
  const [sobreNome, setSobrenome] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Evento previnido');
    setName('');
    setSobrenome('');
  }


  return (
    <div className='App'>
      <Form
        name={name}
        sobreNome={sobreNome}
        setName={setName}
        setSobrenome={setSobrenome}
        handleSubmit={handleSubmit}
      />
      <List/>
    </div>
  )

}

export default App;
