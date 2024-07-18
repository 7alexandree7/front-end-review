import { useState } from "react"

export default function mouse() {

    const [x, alterarX] = useState()
    const [y, alterarY] = useState()

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



        function quandoMover (evento) {
            alterarX(evento.clientX);
            alterarY(evento.clientY);
        }
    

    return ( 

        <div style={estilo} onMouseMove={quandoMover}>  
          <span>Eixo x: {x} </span>
          <span>Eixo y: {y}</span>
        </div>
    )
}
