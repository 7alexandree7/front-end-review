import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa"

const Login = ({ }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Evento previnido");
        alert(`Seu dados foram enviados, ${email} ------- ${password}`)
    }

    return (
        <div>

            <form className="container" onSubmit={handleSubmit}>
                <h1>Acesse o Sistema</h1>

                <div className="input-field">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <FaUser className="icon" />
                </div>

                <div className="input-field">
                    <input
                        type="password"
                        name="senha"
                        id="senha"
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <FaLock className="icon" />
                </div>


                <div className="recall-forget">
                    <label>
                        <input type="checkbox" name="" id="" />
                        <span>Lembre De Mim</span>
                    </label>

                    <a href="#">Esqueceu a senha</a>
                </div>


                <button>Entrar</button>


                <div className="signup-link">
                    <p>Não tem conta? <a href="#">Registrar</a></p>
                </div>

            </form>

        </div>
    )
}


export default Login;