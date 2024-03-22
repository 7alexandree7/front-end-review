const DinamicaTeste = () => {


    const redTitle = true;
    const txt = false;


    return (

        <div>
            <h2 className={redTitle ? 'red-title' : 'title'}>Css com classes Dinamicas</h2>
            <p className={txt ? 'txt-true' : 'txt-false'}>um texto qualquer</p>
        </div>
    )

}


export default DinamicaTeste;
