import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../../assets/6886487.jpg";

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const sliderStyles = {
    height: "50vh", // Establecer la altura del Slider al 50% de la altura de la pantalla
  };

  const imgContentAllDivs = {
    height: "50vh", // Establecer la altura de todos los divs de las imágenes al 100% de la altura del Slider
  };

  return (
    <div style={sliderStyles} className="relative">
      <Slider {...settings} className="h-full" style={imgContentAllDivs}>
        <div style={imgContentAllDivs}>
          <img
            src={banner}
            alt="Product 1"
            className="w-full h-full object-cover"
            style={imgContentAllDivs}
          />
        </div>
        <div style={imgContentAllDivs}>
          <img
            src={banner}
            alt="Product 2"
            className="w-full h-full object-cover"
            style={imgContentAllDivs}
          />
        </div>
        <div style={imgContentAllDivs}>
          <img
            src={banner}
            alt="Product 3"
            className="w-full h-full object-cover"
            style={imgContentAllDivs}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Slide;
