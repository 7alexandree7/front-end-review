import Titulo from "@/Components/Titulo"

export default function usandotitulo() {


    return (
        <>
            <Titulo
                principal="Titulo em h1 pois pequeno é true"
                secundario="Subtile da page"
                pequeno={true}
            />

            <Titulo
                principal="Titulo em paragrafo para demostrar que o pequeo é false nesse bloco de codigo condicvional"
                secundario="subtitle menu option"
                
            />
        </>
    )
}