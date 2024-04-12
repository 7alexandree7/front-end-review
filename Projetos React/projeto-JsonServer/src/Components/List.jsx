import { useState, useEffect } from 'react';
import './List.css'

const url = 'http://localhost:3000/products';

const List = ({}) => {
    const [products, setProducts] = useState([])


    useEffect(() => {
        async function fechData ()  {
            const response = await fetch(url);
            const data = await response.json();
            setProducts(data);
        }

        fechData();
    }, [])

     return (
        <div className='list'>
            <h2>Minha Lista do Banco de Dados</h2>

            {products.map((product) => {
                return (
                    <ul>
                        <li key={product.id}>{product.nome}</li>
                        <li key={product.id}>{product.sobreNome}</li>
                    </ul>
                )
            })}
        </div>
     )
}

export default List;