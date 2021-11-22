import Leaflet from 'leaflet';
import { useState, useEffect } from 'react';

const DEFAULT_CENTER = [57.1717, 63.5068];
const DEFAULT_ZOOM = 5;
const MAP_URL = 'http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}';

const useMap = (mapRef) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!map) {
      const instance = Leaflet.map('map', {
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM,
        touchZoom: true,
        zoomControl: false,
      });

      Leaflet
        .tileLayer(MAP_URL)
        .addTo(instance);

      setMap(instance);
    }
  }, [map, mapRef]);

  return map;
};

export default useMap;
