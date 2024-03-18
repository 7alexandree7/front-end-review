import '../Form/Form.css'
import CampoTexto from '../CampoTexto/CampoTexto.jsx';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa.jsx';
import Button from '../Button/Button.jsx';



const Form = (props) => {

    const animes = [
        'Sword Art Online',
        'Naruto Shipuden',
        'Boruto',
        'Solo Leveling',
        'Attack on Titan',
        'Spy x Family',
        'One Pierce',
        'No game No Life'
    ]


    return (

        <section className='container-form'>

            <form className='form-box'>

                <h2>{props.title}</h2>

                <div className="input-box">

                    <CampoTexto
                        label="Nome"
                        name="name"
                        onChange={props.onChangeField}
                        placeholder="Digite seu Nome..."
                    />

                    <CampoTexto
                        label="SobreNome"
                        name="mid-name"
                        onChange={props.onChangeField}
                        placeholder="Digite seu SobreNome..."
                    />


                    <CampoTexto
                        label="Idade"
                        name="age"
                        onChange={props.onChangeField}
                        placeholder="Digite sua Idade..."
                    />


                    <ListaSuspensa animes={animes} />
                    <Button />


                </div>

            </form>

        </section>
    )
}

export default Form;