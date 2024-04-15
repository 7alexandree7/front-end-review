const ListItems = ({ url, imageUrl, alt }) => {

    return (
        <li>
            <a
                target="_blank"
                href={url}>
                <img src={imageUrl}
                    alt={alt} />
            </a>
        </li>
    )
}


export default ListItems