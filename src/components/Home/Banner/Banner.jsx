import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALE</h1>
                    <p>
                        Convallis interdum purus adipiscing dis parturiend
                        posure ac a quam a eleifend montes parturient posure
                        curae tempor
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;
