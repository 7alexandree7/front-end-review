import { useState } from "react";

const TodoForm = ({}) => {

    const [value, setValue] = useState("");
    const [category, setCategory] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Evento previnido, form enviado!")
        console.log(value, category)

        if(!value || category) return;

        setValue("");
        setCategory("");
        
    }

    return (
        <div className="todo-form">
            <h2>Criar Tarefa:</h2>

            <form onSubmit={handleSubmit}>
                <input type="text"  placeholder="Digite o Titulo..." onChange={(e) => setValue(e.target.value)} value={value}/>
                <select onChange={(e) => setCategory(e.target.value)} value={category}>
                    <option value="">Selecione Uma tarefa</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>

                <button type="submit">Criar Trefa</button>
            </form>
        </div>
    )
}


export default TodoForm;