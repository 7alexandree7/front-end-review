import './OnSubmit.css'
import { useState } from "react"

const OnSubmit = ({prevenir, title, placeholderModificada, obrigatorio}) => {

    const [name, setName] = useState("");


    return (

        <form onSubmit={prevenir}>
            <div>
                <h2>{title}</h2>

                <div>
                    <label>
                        <span>Nome Digitado: {name}</span>
                        <input type="text"
                            placeholder={placeholderModificada}
                            required={obrigatorio}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>

                    <input type="submit" value="Enviar" />
                </div>
            </div>
        </form>
    )
}

export default OnSubmit;