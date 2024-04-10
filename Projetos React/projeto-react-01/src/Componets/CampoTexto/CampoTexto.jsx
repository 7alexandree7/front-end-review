import '../CampoTexto/CampoTexto.css'


const CampoTexto = (props) => {
    const { label } = props;

    return (

        <div className='campo-texto-box'>

            <label>{label}</label>
            <input type="text"  placeholder={props.placeholder}  onChange={(e) => props.onChange(props.name, e)}/>
        </div>
    )
}


export default CampoTexto;