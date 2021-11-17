import React from 'react';
import { useSelector } from 'react-redux';
import Slider from '../slider/slider';
import PreviewItem from '../preview-item/preview-item';
import previews from '../../mocks/preview';
import getDeviceType from '../../store/application/selectors';
import { DeviceType } from '../../constants';

const Preview = () => {
  const deviceType = useSelector(getDeviceType);

  return (
    <section>
      <Slider
        isAutoplay
        isDraggable={deviceType !== DeviceType.DESKTOP}
      >
        {previews.map((preview) => (
          <PreviewItem
            key={preview.type}
            type={preview.type}
            slogan={preview.slogan}
            link={preview.link}
          />
        ))}
      </Slider>
    </section>
  );
};

export default Preview;
