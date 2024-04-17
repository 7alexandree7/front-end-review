const ListItems = ({ url, imgHref, alt }) => {

    return (
        <li>
            <a
                target="_blank"
                href={url}>
                <img src={imgHref}
                    alt={alt}
                />
            </a>
        </li>
    )
}


export default ListItems