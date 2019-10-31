import SlideShow from './carousel/Slideshow'
import carouselStyle from './carousel/carousel.css'
import slide1 from "../public/slider/1.jpg";
import slide2 from "../public/slider/2.jpg";
import slide3 from "../public/slider/3.jpg";
import slide4 from "../public/slider/4.jpg";
import slide5 from "../public/slider/5.jpg";

const slides = [slide1, slide2, slide3, slide4, slide5]

const CarouselSlider = () => (
  <div className={carouselStyle.container}>
    <SlideShow slides={slides} />
  </div>
  
)
export default CarouselSlider