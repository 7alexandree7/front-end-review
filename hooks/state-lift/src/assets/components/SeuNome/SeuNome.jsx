import { useState } from "react";

const SeuNome = ({setNome, placeholderModificada}) => {


    return (

        <div>
            <p>Digite seu nome: </p>

            <input type="text"
                placeholder={placeholderModificada}
                onChange={(event) => setNome(event.target.value)}
            />
        </div>
    )
}


export default SeuNome;
