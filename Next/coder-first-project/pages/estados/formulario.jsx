import { useState } from "react"

export default function formulario () {

    const [valor, setValor] = useState("Inicial");

    const estilo = {

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#222",
        color: "red",
        width: "100%",
        height: "100vh",
        gap: "3rem",
        fontSize: "30px",
    }

    return (

        <div style={estilo}> 
            <form action="">
                <div style={{display: "flex", flexDirection: "column", gap: "3rem"}}>
                <input type="text" value={valor} onChange={e => setValor(e.target.value)}/>
                <button >Mudar estado</button>
                </div>
 
            </form>
        </div>
    )
}