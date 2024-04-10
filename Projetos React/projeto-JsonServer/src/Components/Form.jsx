import './Form.css'

const Form = ({name, setName, sobreNome, setSobrenome, handleSubmit}) => {

    return (

        <form onSubmit={handleSubmit}>


            <div className='flex-form'>
                
                <label>
                    <span>Nome:</span>
                    <input type="text" name="nome" id="nome" required value={name} onChange={(e) => setName(e.target.value)} />        
                </label>


                <label>
                    <span>SobreNome:</span>
                    <input type="text" name="sobreNome" id="sobreNome" required value={sobreNome} onChange={(e) => setSobrenome(e.target.value)} />
                </label>

                <div className='btn-box'>
                <button>Enviar</button>
                </div>
                
            </div>
            
        </form>
    )
}




export default Form;