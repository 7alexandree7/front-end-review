import { useState } from "react"

const StateInline = ({}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");


    return (

        <form>
            <div>
                <h2>My Formulary</h2>

                <div>
                    <label>
                        <span>Nome:</span>
                        <input type="text" name="nome" id="nome" onChange={(e) => setName(e.target.value)} />
                    </label>
                    <p>{name}</p>
                </div>

                <div>
                    <span>E-mail</span>
                    <input type="email" name="email" id="email" onChange={(e => setEmail(e.target.value))} />
                    <p>{email}</p>
                </div>


                <input type="submit" value="Enviar" />
            </div>
        </form>
    )
}

export default StateInline;