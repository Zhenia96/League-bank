import React from 'react';
import { useSelector } from 'react-redux';
import ServicesTabs from '../services-tabs/services-tabs';
import ServicesSlider from '../services-slider/services-slider';
import getDeviceType from '../../store/application/selectors';
import { DeviceType } from '../../constants';
import './services.scss';

const Services = () => {
  const deviceType = useSelector(getDeviceType);

  return (
    <section className='services'>
      {deviceType === DeviceType.DESKTOP
        ? <ServicesTabs />
        : <ServicesSlider />}
    </section>
  );
};

export default Services;
