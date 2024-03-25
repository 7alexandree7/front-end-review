import { useState } from 'react';
import './MyForm.css'

const MyForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState(''); 

    const handleName = (e) => {
       setName(e.target.value)
    }
    console.log(name)

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    console.log(email)

    return (

        <form >

            <h2>Meu Primeiro Formulario</h2>

            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name='name' placeholder='Digite seu nome' onChange={handleName} />
            </div>

            <div>
                <label>
                    <span>E-mail</span>
                    <input type="email" name="email" id="email"  onChange={handleEmail}/>
                </label>
            </div>

            <input type="submit" value="Enviar" />
        </form>
    )
}

export default MyForm;