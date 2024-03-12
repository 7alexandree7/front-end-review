import './Banner.css'

const Banner = () => {

    const img = "./img/19168732.jpg"
    const altImgBanner = "Banner principal tema paisagem"
    
    return (
        <div className="box-banner">
            <img src={img} alt={altImgBanner} />
        </div>
    )
}


export default Banner