import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ListEscolar from './components/ListEscolar/ListEscolar'


function App() {
  const [count, setCount] = useState(0)

  const list = [

    { id: 1, materialEscolar: 'Itens escolares', pencil: 'Lapis', pen: 'caneta', rubber: 'borracha', graphite: 'grafite' },
    { id: 2, materialEscolar: 'Itens escolares', pencil: 'Lapis', pen: 'caneta', rubber: 'borracha', graphite: 'grafite' },
    { id: 3, materialEscolar: 'Itens escolares', pencil: 'Lapis', pen: 'caneta', rubber: 'borracha', graphite: 'grafite' },
    { id: 4, materialEscolar: 'Itens escolares', pencil: 'Lapis', pen: 'caneta', rubber: 'borracha', graphite: 'grafite' },
  ]

  return (
    <>
      {list.map((item, index) => (
        <ListEscolar
          materialEscolar={item.materialEscolar}
          pencil={item.pencil}
          pen={item.pen}
          rubber={item.rubber}
          graphite={item.graphite}
        />
      ))}
    </>
  )
}

export default App
