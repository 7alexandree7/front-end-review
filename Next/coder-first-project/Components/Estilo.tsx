export default function Estilo (props: any) {

    return (

        <div>
            <h1 style={{backgroundColor: props.numero >= 10 ?"#2d2" : "#333" }}>Testando Componente </h1>
        </div>
    )
}