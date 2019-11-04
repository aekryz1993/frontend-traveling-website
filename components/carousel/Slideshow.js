import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Slide from './Slide'
import carouselStyle from '../../stylesheet/components/carousel.css'

const SlideShow = ({ slides }) => {

  const [current, setCurrent] = useState(slides.length)
  const [clicked, setClicked] = useState(0)
  const [autoplay, setAutoplay] = useState(true)


  useEffect(() => {
    const next = (current + 1) % (slides.length + 1)
    if (current !== 0) {
      const timer = setTimeout(() => setCurrent(next), 5000)
      return () => clearTimeout(timer)
    }
    else if (current === 0) {
      const timer = setTimeout(() => setCurrent(next), 0)
      return () => clearTimeout(timer)
    }
  }, [current]);

  const animation = (current) => {
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

  const setTimer = new Promise((resolve, reject) => {
    const timer = setTimeout(() => setAutoplay(true), 3000);
    resolve(timer)
  })

  const handleClickPagination = (index) => {
    setAutoplay(false)
    if (index === 0) {
      setClicked(5)
      setCurrent(5)
    } else {
      setClicked(index)
      setCurrent(index)
    }
    setTimer.then(timer => clearTimeout(timer))

  }

  const animetePagination = () => {
    switch (clicked) {
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

  const handlePrev = () => {
    if(current === 1) {
      setCurrent(5)
    } else {
      setCurrent(current - 1)
    }
  }
  const handleNext = () => setCurrent((current + 1) % (slides.length + 1)) 

  const animationChoise = (autoplay) => autoplay ? animation(current) : animetePagination(clicked)


  return (
    <div>
      <div className={`${carouselStyle.slideShow} ${animationChoise(autoplay)}`}>
        <Slide 
          image={slides[slides.length - 1].path} 
          p1={slides[slides.length - 1].title1}
          p2={slides[slides.length - 1].title2}
          alt={`${slides[slides.length - 1].title1} ${slides[slides.length - 1].title2}`}  
          story={5} />
        {

          slides.map((slide, index) =>
            <Slide 
              key={index} 
              image={slide.path} 
              alt={`${slide.title1} ${slide.title2}`}
              p1={slide.title1}
              p2={slide.title2}
              story={index + 1} />
          )
        }
        <Slide 
          image={slides[0].path} 
          alt={`${slides[0].title1} ${slides[0].title2}`} 
          p1={slides[0].title1}
          p2={slides[0].title2}
          story={1} />
      </div>
      <div className={carouselStyle.paginationbuttons}>
        {
          slides.map((slide, index) =>
            <div key={index} onClick={() => { handleClickPagination(index) }} className={`${carouselStyle.pagination}`}></div>
          )
        }
      </div>
      <div className={carouselStyle.buttonPrevNext}>
        <div className={carouselStyle.buttonPrev} onClick={() => handlePrev()}>Prev</div>
        <div className={carouselStyle.lineButton}></div>
        <div className={carouselStyle.buttonNext} onClick={() => handleNext()}>Next</div>
      </div>
    </div>
  )
}

SlideShow.propTypes = {
  slides: PropTypes.array
}

export default SlideShow