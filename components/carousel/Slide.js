import React, { memo } from "react";
import PropTypes from 'prop-types';
import carouselStyle from '../../stylesheet/components/carousel.css'
import slideStyle from "../../stylesheet/components/slide.css";

const Slide = ({ image, alt, p1, p2, story }) => {

  const mystyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className={carouselStyle.slide}>
      <div className={slideStyle.main}>
        <div className={slideStyle.header}>{`Story 0${story}`}</div>
        <div className={slideStyle.title} style={mystyle}>
          <p>{p1}</p>
          <p>{p2}</p>
        </div>
        <div className={slideStyle.link}>
          <div className={slideStyle.readMore}>Read more</div>
          
        </div>
        {/* <div className={slideStyle.line}></div> */}
      </div>
      <img className={carouselStyle.image} src={image} alt={alt} />
    </div>
  )
}
Slide.propTypes = {
  image: PropTypes.node
}
export default memo(Slide)