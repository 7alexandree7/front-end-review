import { memo } from "react";

const Child2 = ({value}) => {

    return (
        <h1>{value}</h1>
    )
}


export default memo(Child2);