import { UserProps } from "../types/user";
import Search from "../components/Search";
import { useState } from "react";
import Name from "../components/Name";


const Home = () => {

    const [user, setUser] = useState<UserProps | null>(null);

    const loadUser = async (userName: string) => {

        try {
            const res = await fetch(`https://api.github.com/users/${userName}`);

            if (!res.ok) {
                // Verifica se a resposta não está OK e lança um erro
                throw new Error('Usuário não encontrado');
            }


            const data = await res.json();
            console.log(data);
            console.log(user?.login);

            const { avatar_url, login, location, followers, following } = data;

            const userData: UserProps = {
                avatar_url,
                login,
                location,
                followers,
                following
            };

            setUser(userData);
            
        }

        catch (error) {

            if (error instanceof Error) {
                alert("Erro ao pesquisar o usuário: " + error.message);
                

            } else {
                alert("Erro ao pesquisar o usuário: " + String(error));
            }
        }

    };



    return (

        <div>
            <Search loadUser={loadUser} />
            {user && <Name {...user}/>}
        </div>
    )
}

export default Home;