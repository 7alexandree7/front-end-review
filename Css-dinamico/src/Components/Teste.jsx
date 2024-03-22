const Teste = () => {

    const a = 15;
    const b = 20;

    return (

        <div>
            <h2 style={a > 10 ? {color: 'pink'} : {color: 'gold'}}>Css dinamico Inline</h2>
            <p style={b > 21 ? {background: 'red'} : {background: 'gold'}}>paragrafo teste</p>
        </div>
    )
}


export default Teste;