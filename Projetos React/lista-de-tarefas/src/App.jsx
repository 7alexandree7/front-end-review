import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Todo from './Components/Todo';
import TodoForm from './Components/TodoForm';

function App() {

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([

    {
      id: 1,
      text: 'Criar funcionalidade x no sistema',
      category: 'Trabalho',
      isCompleted: false,
    },


    {
      id: 2,
      text: 'Ir para a academia',
      category: 'pessoal',
      isCompleted: false,
    },


    {
      id: 3,
      text: 'Estudar React',
      category: 'Estudos',
      isCompleted: false,
    }

  ]);


  const addTodo = (value, category) => {

    const newTodo= [
      ...todos,

      {
        id: Math.floor(Math.random() * 10000),
        text: value,
        category: category,
        isCompleted: false
      },
    ];

    setTodos(newTodo)
  }


  const removeTodo = (id) => {

    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null );
    setTodos(filteredTodos);
    console.log(filteredTodos);

  }
  


  return (

    <div className='app'>
      <h1>Lista de tarefas</h1>

      <div className='todo-list'>
        {todos.map((todo) => {
          return (
            <Todo
              todo={todo}
              key={todo.id}
              removeTodo={removeTodo}
            />
          )
        })}
      </div>

      <TodoForm
        addTodo={addTodo}
      />
    </div>

  )
}

export default App;
