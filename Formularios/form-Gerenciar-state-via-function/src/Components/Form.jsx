import { useState } from 'react';
import './Form.css'

const Form = ({title, titleSpan,  mudavel, placeholderModificada}) => {

    const [name, setName] =useState('');
    const [email, setEmail] = useState('');

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    console.log(name)


    return (

        <form>
            <div>
                <h2>{title}</h2>

                <div className='box'>
                    <label>
                        <span>{titleSpan}</span>
                        <input type={mudavel}  placeholder={placeholderModificada} onChange={handleName ? handleName : handleEmail}/>
                    </label>
                </div>

                <input className='dd'  type="submit" value="Enviar" />

            </div>
        </form>
    )
}


export default Form;