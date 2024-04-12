import { useState, useEffect } from 'react'
import './App.css'

//Import Components
import Form from './Components/Form';
import List from './Components/List';

function App() {
  const [name, setName] = useState('');
  const [sobreNome, setSobrenome] = useState('');
  const [products, setProducts] = useState([]);
  const [submited, setSubmited] = useState(false);

  const url = 'http://localhost:3000/products';

  useEffect(() => {
    fechData();
  }, [submited])

  async function fechData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setProducts(data);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Evento previnido');

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: name,
        sobreNome,
      })
    })

    setSubmited(true);
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
      <List products={products} />
    </div>
  )

}

export default App;
