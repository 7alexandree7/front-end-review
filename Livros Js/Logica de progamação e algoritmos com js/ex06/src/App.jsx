import { useState } from 'react'
import './App.css'

function App() {
  const [isClicked, setIsClicked] = useState(false)
  const [selectedFilme, setSelectedFilme] = useState('') // Estado para armazenar o filme selecionado
  const [inputValue, setInputValue] = useState('')
  const [horas, setHoras] = useState(0)
  const [min, setMin] = useState(0)
  const [filmes, setFilmes] = useState([
    'Karate Kid',
    'Transformes',
    'Demon Slayer',
    'Jurassic park',
    'Harry potter'
  ])

  function onButtonPress() {
    const inputValueNumber = parseInt(inputValue, 10)
    if (!isNaN(inputValueNumber)) {
      const calculatedHoras = Math.floor(inputValueNumber / 60)
      const calculatedMin = inputValueNumber % 60
      setHoras(calculatedHoras)
      setMin(calculatedMin)
      setIsClicked(true)
    }
  }

  function handleSelectChange(event) {
    setSelectedFilme(event.target.value) // Atualiza o estado com o filme selecionado
  }

  function handleInputChange(event) {
    setInputValue(event.target.value)
  }

  return (
    <>
      <h2>Cine Js: Filmes em cartaz</h2>

      <div>
        <p>Titulo do filme:</p>
        <select onChange={handleSelectChange}>
          <option value="">Selecione um filme</option> {/* Opção padrão */}
          {filmes.map((filme, index) => (
            <option key={index} value={filme}>
              {filme}
            </option>
          ))}
        </select>
      </div>

      <div>
        <p>Duração em min</p>
        <input type="number" onChange={handleInputChange} value={inputValue} />
      </div>

      <div style={{ marginTop: "2rem" }}>
        <button onClick={onButtonPress}>Converter Horas em Minutos</button>
      </div>

      <div>
        {isClicked && selectedFilme && ( // Verifica se o botão foi clicado e se um filme foi selecionado
          <div>
            <h3>Filme selecionado: {selectedFilme}</h3>
            <h4>{`${horas} horas e ${min} minutos`}</h4>
          </div>
        )}
      </div>
    </>
  )
}

export default App
