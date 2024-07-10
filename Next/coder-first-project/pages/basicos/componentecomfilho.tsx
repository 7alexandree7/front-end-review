import Item from "@/Components/Item";
import Lista from "@/Components/Lista";

export default function componentecomfilho (props: any) {

    return (
        
        <div>

            <h2 style={{marginBottom: "30px" }} >Componente Home Link</h2>

            <Lista>
                <Item conteudo="League of legends"/>
                <Item conteudo="Minecraft"/>
                <Item conteudo="Roblox"/>
                <Item conteudo="Valorant"/>
            </Lista>

        </div>
    )

}