import React, { memo } from "react"; 
import PropTypes from 'prop-types'; 
import carouselStyle from './carousel.css'

const Slide = ({image, alt}) => (
  <div className={carouselStyle.slide}>
    <img className={carouselStyle.image} src={image} alt={alt}/>
  </div>
)

Slide.propTypes = {
  image: PropTypes.node
}
export default memo(Slide)