import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import useMap from './hooks/use-map';
import useMarkers from './hooks/use-markers';
import getDeviceType from '../../store/application/selectors';
import banksCoordinates from '../../mocks/bank-coordinates';
import arrowIcon from '../../img/map/icons/arrow.svg';
import 'leaflet/dist/leaflet.css';
import './location.scss';

const CURRENT_LOCATION_ZOOM = 14;

const setCurrentLocation = (map) => {
  if (window.navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      map.setView([coords.latitude, coords.longitude], CURRENT_LOCATION_ZOOM);
    });
  }
};

const Location = () => {
  const mapRef = useRef(null);
  const deviceType = useSelector(getDeviceType);
  const map = useMap(null);
  useMarkers(map, banksCoordinates, deviceType);

  const handleZoomInButtonClick = () => {
    map.zoomIn();
  };

  const handleZoomOutButtonClick = () => {
    map.zoomOut();
  };

  const handleLocationButtonClick = () => {
    setCurrentLocation(map);
  };

  return (
    <section className='location'>
      <h2 className='location__title'>Отделения Лига Банка</h2>
      <div className='location__map-container'>
        <div ref={mapRef} id='map' className='location__map' />
        <div className='location__map-controls'>
          <div className='location__map-zoom-controls-container'>
            <button onClick={handleZoomInButtonClick} className='location__map-control location__map-control--zoom' type='button' aria-label='Увеличить масштаб'>+</button>
            <button onClick={handleZoomOutButtonClick} className='location__map-control location__map-control--zoom' type='button' aria-label='Уменьшить масштаб'>&ndash;</button>
          </div>
          <button onClick={handleLocationButtonClick} className='location__map-control location__map-control--location' type='button' aria-label='Выше текущее местоположение'><img className='location__control-icon' src={arrowIcon} width='12' height='12' alt='' /></button>
        </div>
      </div>
    </section>
  );
};

export default Location;
