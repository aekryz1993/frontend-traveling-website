import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Slide from './Slide'
import carouselStyle from './carousel.css'

const SlideShow = ({ slides }) => {

  const [current, setCurrent] = useState(slides.length)
  useEffect(() => {
    const next = (current + 1) % (slides.length + 1)
    if(current !== 0) {
      const timer = setTimeout(() => setCurrent(next), 3000)
      return () => clearTimeout(timer)
    }
    else if(current === 0) {
      const timer = setTimeout(() => setCurrent(next), 0)
      return () => clearTimeout(timer)
    }
  }, [current]);

  const animation = () => {
    switch (current) {
      case 0:
        return ''
      case 1:
        return `${carouselStyle.animation} ${carouselStyle.transition1l}`
      case 2:
        return `${carouselStyle.animation} ${carouselStyle.transition2l}`
      case 3:
        return `${carouselStyle.animation} ${carouselStyle.transition3l}`
      case 4:
        return `${carouselStyle.animation} ${carouselStyle.transition4l}`
      case 5:
        return `${carouselStyle.animation} ${carouselStyle.transition5l}`
      default:
        return '';
    }
  }

  return (
    <div className={`${carouselStyle.slideShow} ${animation()}`}>
      <Slide image={slides[slides.length - 1]} />
      {

        slides.map((slide, index) =>
          <Slide key={index} image={slide} alt={slide} />
        )
      }
      <Slide image={slides[0]} />
    </div>
  )
}

SlideShow.propTypes = {
  slides: PropTypes.array
}

export default SlideShow