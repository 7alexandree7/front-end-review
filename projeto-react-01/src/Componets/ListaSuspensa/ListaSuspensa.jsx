import '../ListaSuspensa/ListaSuspensa.css'


const ListaSuspensa = (props) => {

    return (

        <div className="sd">
            <select name="" id="">
                {props.animes.map((anime, index) => {
                    return (
                        <option value="anime" key={anime}> {anime} </option>
                    )
                })}
            </select>
        </div>

    )
}


export default ListaSuspensa;