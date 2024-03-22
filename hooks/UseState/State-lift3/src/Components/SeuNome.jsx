const SeuNome = ({setName, placeholderModificada, obrigatorio}) => {


    return (
        
        <div>
            <p>Digite seu Nome: </p>

            <input
                type="text"
                placeholder={placeholderModificada}
                required={obrigatorio}
                onChange={(e) => setName(e.target.value)}
                
            />
        </div>
    )

}


export default SeuNome;