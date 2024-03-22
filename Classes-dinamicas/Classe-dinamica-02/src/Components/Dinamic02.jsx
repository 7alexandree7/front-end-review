const Dinamic02 = () => {

    const colorTitle = true;
    const colorP = true;

    return (

        <div>
            <h2 className={colorTitle ? 'first' : 'second'}>Aqui é um titulo do css dinamico com classes</h2>
            <p className={colorP ? 'firstt' : 'secondd'}>Apenas um paragrafo qualquer para teste</p>
        </div>
    )
}


export default Dinamic02;