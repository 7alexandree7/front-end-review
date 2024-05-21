import {memo} from 'react'

const Child1 = ({value}) => {

    return (
        <h1>{value}</h1>
    )
}


export default memo(Child1) ;