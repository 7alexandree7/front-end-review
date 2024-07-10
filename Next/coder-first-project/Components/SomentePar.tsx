export default function SomentePar (props: any) {

    if (props.number % 2 === 0) {
        return <h1>{props.number} é par</h1>
    }

    else {
        return null
    }
}