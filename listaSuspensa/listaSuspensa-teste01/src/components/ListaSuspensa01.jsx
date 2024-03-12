

const ListaSuspensa01 = (props) => {

    const ListaDeanimes = [
        'SoloLeving',
        'Attack on Titan',
        'Demon Slauyer',
        'Naruto Shipunden',
        'Fairy Taily',
        'Boku no Hero',
        'Spy x Family'
    ]


    return (
        <div>
            <h2>{props.title}</h2>

            <div>

                <label>{props.label} </label>

                <select required={props.obrigatorio} >
                    {ListaDeanimes.map((item, index) => {
                        return <option key={item}>{item}</option>
                    })}
                </select>

            </div>
        </div>
    )
}



export default ListaSuspensa01;