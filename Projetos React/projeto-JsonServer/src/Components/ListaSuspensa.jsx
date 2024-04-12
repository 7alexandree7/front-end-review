import './ListaSuspensa.css'

const ListaSuspensa = ({ ListaDeAnimes }) => {

    return (
        <div className='select-box'>
            <select name="anime" id="anime">
                {ListaDeAnimes.map((anime) => {
                    return (
                        <option value="anime" key={anime}>{anime}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa;