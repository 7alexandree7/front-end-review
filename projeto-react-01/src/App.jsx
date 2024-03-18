import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Banner from './Componets/Banner/Banner'
import Form from './Componets/Form/Form'


function App() {
  const [count, setCount] = useState(0)
  const [fieldValues, setFieldValues] = useState('')

  console.log({ fieldValues })

  const onChangeInput = (name, event) => {
    setFieldValues({
      ...fieldValues,
      [name]: event.target.value
    })
  }

  return (
    <>
    <Banner />
    <Form onChangeField={onChangeInput} fields={fieldValues} />
    </>
  )
}

export default App 
