import '../Banner/Banner.css'


const Banner = (props) => {

    const imgPath = './img/home.jpg'
    const alt = 'Banner from main website'

    return (
        <div className='banner-box'>
            <img src={imgPath} alt={alt} />
        </div>
    )
}



export default Banner;