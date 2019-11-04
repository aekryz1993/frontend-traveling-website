import SlideShow from './carousel/Slideshow'
import carouselStyle from '../stylesheet/components/carousel.css'
import slide1 from "../public/slider/1.jpg";
import slide2 from "../public/slider/2.jpg";
import slide3 from "../public/slider/3.jpg";
import slide4 from "../public/slider/4.jpg";
import slide5 from "../public/slider/5.jpg";

const slides = [
  {path: slide1, title1: 'Sands', title2:'of time'},
  {path: slide2, title1: 'Living', title2:'outside'},
  {path: slide3, title1: 'Feeling', title2:'liberated'},
  {path: slide4, title1: 'Winter', title2:'is coming'},
  {path: slide5, title1: 'Flattering', title2:'Disasters'},
]

const CarouselSlider = () => (
  <div className={carouselStyle.container}>
    <SlideShow slides={slides} />
  </div>
  
)
export default CarouselSlider