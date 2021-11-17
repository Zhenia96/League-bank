import React from 'react';
import Slider from '../slider/slider';
import ServicesDeposit from '../services-deposit/services-deposit';
import ServicesCredit from '../services-credit/services-credit';
import ServicesInsurance from '../services-insurance/services-insurance';
import ServicesOnline from '../services-online/services-online';
import './services-slider.scss';

const ServicesSlider = () => (
  <Slider
    isDraggable
  >
    <ServicesDeposit />
    <ServicesCredit />
    <ServicesInsurance />
    <ServicesOnline />
  </Slider>
);

export default ServicesSlider;
