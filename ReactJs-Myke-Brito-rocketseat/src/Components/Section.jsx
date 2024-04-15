const Section = ({title, subTitle, children}) => {

    return (
        <section>
            <div>
                <h2>{title}</h2>
                <p>{subTitle}</p>
                <ul class="games-list">
                    {children}
                </ul>
            </div>
        </section>
    )
}


export default Section;