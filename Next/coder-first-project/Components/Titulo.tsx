interface texto {
    principal: string
    secundario: string
    pequeno?: boolean
}


const Titulo: React.FC<texto> = ({ principal, secundario, pequeno }) => {


    return pequeno ? (
        <>
            <h1>{principal}</h1>
            <h2>{secundario}</h2>
        </>
    ) : (
        <>
            <p style={{color: "red"}}>{principal}</p>
            <p style={{color: "red"}}>{secundario}</p>
        </>
    )
}


export default Titulo