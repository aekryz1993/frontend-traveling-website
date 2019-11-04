import React, { useState, useEffect } from 'react';
import carouselStyle from './carousel.css'

const Dots = ({ slides, current }) => {
  const [clicked, setClicked] = useState(0)

  const setTimer = new Promise((resolve, reject) => {
    const timer = setTimeout(() => setAutoplay(true), 3000);
    resolve(timer)
  })

  return (
    <div className={carouselStyle.paginationbuttons}>
      {
        slides.map((slide, index) =>
          <div key={index} onClick={() => { handleClickPagination(index) }} className={`${carouselStyle.pagination}`}></div>
        )
      }
    </div>
  )
}

export default Dots