import { useState } from "react";

const Form = ({ title,
    placeholderModificadaNome,
    obrigatorio,
    placeholderModificadaNomeEmail,
    placeholderModificadaTextArea,

}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState('');
    const [opcao, setOpcao] = useState('');

    return (

        <form>
            <div>
                <h2>{title}</h2>

                <div>
                    <label>
                        <span>Nome:</span>
                        <input type="text"
                            placeholder={placeholderModificadaNome}
                            required={obrigatorio}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </label>
                    <p>Seu nome: {name}</p>
                </div>


                <div>
                    <label>
                        <span>Email</span>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required={obrigatorio}
                            placeholder={placeholderModificadaNomeEmail}
                            onChange={(event) => setEmail(event.target.value)}
                        />

                    </label>
                    <p>Seu Email: {email}</p>
                </div>

                <div>
                    <textarea
                        name="txt"
                        id="txt"
                        cols="50"
                        rows="5"
                        required={obrigatorio}
                        placeholder={placeholderModificadaTextArea}
                        onChange={(e) => setBio(e.target.value)}              
                    ></textarea>
                    <p>Sua Descrição {bio}</p>
                </div>


                <div>
                    <label>
                        <span>Função No Sistema</span>

                        <select name="role" id="role" onChange={(e) => setOpcao(e.target.value)}>
                            <option value="profissao">Profissão</option>
                            <option value="idade">idade</option>
                            <option value="lazer">Lazer</option>
                            <option value="Comida">Comida</option>
                        </select>
                    </label>

                    <p>Opção selecionada {opcao}</p>
                </div>

            </div>
        </form>
    )
}


export default Form;
