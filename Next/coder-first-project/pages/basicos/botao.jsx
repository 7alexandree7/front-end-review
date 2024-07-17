

export default function botao() {

    function acao01 () {
        console.log("clicou na ação1")
    }

    function acao02 () {
        console.log("clicou na ação 02")
    }

    return (



        <div>
            <input type="text" onChange={(e) => console.log(e.target.value)} />
            <button onClick={acao01}>Click #01</button>
            <button onClick={acao02}>Click #02</button>
            <button onClick={function () {
                console.log("Ação 3")
            }}>Click #03</button>
            <button onClick={() => console.log("Acção 4")}>Click #04</button>
            <button onClick={(e) => console.log(e)}>Click #05</button>
        </div>
    )
}