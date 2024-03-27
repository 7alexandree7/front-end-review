import { useState } from 'react'
import './Form.css'

const Form = ({title, obrigatorio, user}) => {

    const [nome, SetNome] = useState(user ? user.nome: '');
    const [email, setEmail] = useState(user ? user.email : '');

    const prevent = (e) => {
        e.preventDefault();
        console.log('Formulario enviado');

        console.log(nome, email)

        SetNome('')
        setEmail('')
    }


    return (

        <form onSubmit={prevent}>
            <div>
                <h2>{title}</h2>

                <div>
                    <label>
                        <span>Digite seu Nome: {nome}</span>
                        <input
                            type="text"
                            required={obrigatorio}
                            value={nome} 
                            onChange={(e) => SetNome(e.target.value)}/>


                    </label>
                </div>

                <div>
                    <span>Digite seu Email: {email}</span>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required={obrigatorio}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />

                </div>

                <input type="submit" value="Enviar" />
            </div>
        </form>
    )
}


export default Form