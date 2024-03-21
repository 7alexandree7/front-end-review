const SeuNome = ({setNome, placeholderModificada}) => {


    return (

        <div>
            <p>Digite seu Nome:</p>

            <input
                type="text"
                placeholder={placeholderModificada}
                onChange={(e) => setNome(e.target.value)}
            />
        </div>

    )
}

export default SeuNome