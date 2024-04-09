import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//custom hook
import { useFetch } from './hooks/useFetch'

// URL do localHost
const url = 'http://localhost:3000/poducts';

function App() {

  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const {data: items}= useFetch(url)

  // resgatando dados
 // useEffect(() => {

   // async function fetchData() {
     // const res = await fetch(url);
     // const data = await res.json();
     // setProducts(data);
   // }

    //fetchData()

  //}, []);



  const handleSubmit = async (e) => {

    e.preventDefault();

    const product = {
      name,
      price,
    }

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })

    console.log(product);


    // Carregamento dinamico
    const addProductDinamic = await res.json();
    setProducts((prevProducts) => [...prevProducts, addProductDinamic]);

    setName('');
    setPrice('');
  }


  return (

    <div className='App'>
      <h1>Lista de Produtos com json server</h1>


      {items && items.map((product) => {
        return (
          <ul>
            <li key={product.id}>{product.name} - {product.price}</li>
          </ul>

        )
      })}

      <div className='add-product'>

        <form  onSubmit={handleSubmit}>

          <label>
            name:
            <input type="text" name="txt" id="txt" value={name}  onChange={(e) => setName(e.target.value)} />
          </label>


          <label>
            Price:
            <input type="number" name="txt" id="txt" value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>

          <input type="submit" value="Criar" />

        </form>

      </div>
    </div>
  )
}

export default App
