const PropsChildren = ({title,valueBtn, children}) => {

    return (

        <div>
            <h2>{title}</h2>
            {children}

            <button>{valueBtn}</button>

        </div>
    )
}


export default PropsChildren