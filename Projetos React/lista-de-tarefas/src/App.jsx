import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Todo from './Components/Todo';
import TodoForm from './Components/TodoForm';
import Search from './Components/Search';
import Filter from './Components/Filter';

function App() {

  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('');
  const [search, setSearch] = useState('');
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

    const newTodo = [
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
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);
    setTodos(filteredTodos);
    console.log(filteredTodos);
    console.log(id);

  }


  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo))
    setTodos(newTodos)

  }



  return (

    <div className='app'>
      <h1>Lista de tarefas</h1>

      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />

      <div className='todo-list'>

        {todos

          .filter((todo) =>
            filter === 'All'
              ? true
              : filter === 'Completed'
                ? todo.isCompleted
                : !todo.isCompleted
          )
          .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))

          .sort((a, b) => 
            sort === 'ASC'
            ? a.text.localeCompare(b.text)
            : b.text.localeCompare(a.text)
          )
          

          .map((todo) => {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
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

