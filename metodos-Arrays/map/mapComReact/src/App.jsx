import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const users = [

    {
      name: 'alexandre',
      address: 'rua x',
      age: 21,
      isAdimin: false
    },

    {
      name: 'guilherme',
      address: 'rua e',
      age: 25,
      isAdimin: false
    },

    {
      name: 'adriana',
      address: 'rua sdf',
      age: 53,
      isAdimin: true
    },

    {
      name: 'alessandro',
      address: 'rua x',
      age: 48,
      isAdimin: false
    },

    {
      name: 'arnaldinho',
      address: 'rua yjukx',
      age: 55,
      isAdimin: true
    },

  ]

  return (
    <>
      {users.map((user, index) => {
        return (
          <div key={index}>
            <p>{user.name}</p>
            <p>{user.address}</p>
            <p>{user.age}</p>
            <p>{user.isAdimin}</p>
          </div>
        )
      })}
    </>
  )
}

export default App
