import slider from '../stylesheet/components/slider.css'

const Slider = () => (
  <div className={slider.sliderHolder}>
    <span id="slider-image-1"></span>
    <span id="slider-image-2"></span>
    <span id="slider-image-3"></span>
    <div className={slider.imageHolder}>
      <img src="http://labs.qnimate.com/slider/1.jpg" className={slider.picture}></img>
      <img src="http://labs.qnimate.com/slider/2.jpg" className={slider.picture}></img>
      <img src="http://labs.qnimate.com/slider/3.jpg" className={slider.picture}></img>
    </div>
    <div className={slider.buttonHolder}>
      <a href="slider-image-1" className={slider.sliderChange} ></a>
      <a href="slider-image-2" className={slider.sliderChange} ></a>
      <a href="slider-image-3" className={slider.sliderChange} ></a>
    </div>
  </div>
)

export default Slider