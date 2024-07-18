import { useState } from "react"

export default function contador() {


    const [number, setNumber] = useState(0)


    function changeNumberAcima () {
         setNumber(number + 1)
         console.log(number)
    }


    function changeNumberAbaixo () {
        setNumber(number - 1)
        console.log(number)
   }

   
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

            <div style={{
                width: "100px",
                height: "100px",
                textAlign: "center",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%"
            }}><p>{number}</p></div>

            <div style={{ display: "flex", gap: "3rem" }}>
                <button style={{ padding: "0.4rem 1.5rem", cursor: "pointer" }} onClick={changeNumberAbaixo} >-</button>
                <button style={{ padding: "0.4rem 1.5rem", cursor: "pointer" }}  onClick={changeNumberAcima} >+</button>
            </div>
        </div>
    )
}