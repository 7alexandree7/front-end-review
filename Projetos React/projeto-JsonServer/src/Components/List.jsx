import { useState, useEffect } from 'react';
import './List.css'

const List = ({ products }) => {
     return (
        <div className='list'>
            <h2>Minha Lista do Banco de Dados</h2>

            {products.map((product) => {
                return (
                    <ul key={product.id}>
                        <li>{product.nome}</li>
                        <li>{product.sobreNome}</li>
                    </ul>
                )
            })}
        </div>
     )
}

export default List;