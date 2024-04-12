import './Form.css'
import Button from './Button';
import ListaSuspensa from './ListaSuspensa';


const ListaDeAnimes = [
    'Naruto Shipuden',
    'Swoprd Art Online',
    'Solo Leveling',
    'Globin slayer',
    'no game no life',
    'Attack on Titan',
    'One Pierce',
    'Boku no Hero',
    'Sword Art Online',
    'Boruto',
  ]


const Form = ({ name, setName, sobreNome, setSobrenome, handleSubmit }) => {

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


                <ListaSuspensa ListaDeAnimes={ListaDeAnimes} />
                <Button />



            </div>

        </form>
    )
}


export default Form;