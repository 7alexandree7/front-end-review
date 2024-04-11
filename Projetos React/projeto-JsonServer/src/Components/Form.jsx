import './Form.css'
import Button from './Button';

const Form = ({name, setName, sobreNome, setSobrenome, handleSubmit}) => {

    return (

        <form onSubmit={handleSubmit}>

            <h1 className='title'>Adicionar novos Elementos ao Json server</h1>


            <div className='flex-form'>

                <label>
                    <span>Nome:</span>
                    <input type="text" name="nome" id="nome" required value={name} onChange={(e) => setName(e.target.value)} />
                </label>


                <label>
                    <span>SobreNome:</span>
                    <input type="text" name="sobreNome" id="sobreNome" required value={sobreNome} onChange={(e) => setSobrenome(e.target.value)} />
                </label>

                <Button />

            </div>

        </form>
    )
}


export default Form;