import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-slick';
import Dot from './dot/dot';
import './slider.scss';

const sliderSetting = {
  ANIMATION_SPEED: 500,
  AUTOPLAY_SPEED: 4000,
  SLIDES_TO_SHOW: 1,
};

function Slider({ children, isAutoplay, isDraggable }) {
  return (
    <Carousel
      dots
      autoplaySpeed={sliderSetting.AUTOPLAY_SPEED}
      speed={sliderSetting.ANIMATION_SPEED}
      customPaging={Dot}
      slidesToShow={sliderSetting.SLIDES_TO_SHOW}
      autoplay={isAutoplay}
      draggable={isDraggable}
    >
      {children}
    </Carousel>
  );
}

Slider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isAutoplay: PropTypes.bool,
  isDraggable: PropTypes.bool,
};

Slider.defaultProps = {
  isAutoplay: false,
  isDraggable: false,
};

export default Slider;
