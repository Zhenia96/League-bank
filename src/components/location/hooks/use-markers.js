import { useEffect, useRef } from 'react';
import Leaflet from 'leaflet';
import { DeviceType } from '../../../constants';
import locationMarker from '../../../img/map/location-marker.svg';

const LocationMarker = {
  URL: locationMarker,
  BIG_SIZE: [35, 40],
  SMALL_SIZE: [29, 33],
  ANCHOR_FOR_BIG: [17.5, 40],
  ANCHOR_FOR_SMALL: [14.5, 33],
};

const MarkerSize = {
  BIG: 'big',
  SMALL: 'small',
};

const getIcon = (size) => Leaflet.icon(
  size === MarkerSize.BIG
    ? {
      iconUrl: LocationMarker.URL,
      iconSize: LocationMarker.BIG_SIZE,
      iconAnchor: LocationMarker.ANCHOR_FOR_BIG,
    }
    : {
      iconUrl: LocationMarker.URL,
      iconSize: LocationMarker.SMALL_SIZE,
      iconAnchor: LocationMarker.ANCHOR_FOR_SMALL,
    },
);

const getMarker = (coordinates, deviceType) => {
  const marker = Leaflet.marker(
    coordinates,
    {
      icon: getIcon(deviceType === DeviceType.MOBILE ? MarkerSize.SMALL : MarkerSize.BIG),
    },
  );
  return marker;
};

const useMarkers = (map, banksCoordinates, deviceType) => {
  const markersLayer = useRef(Leaflet.layerGroup([]));

  useEffect(() => {
    markersLayer.current.clearLayers();

    if (map) {
      banksCoordinates.forEach((coordinates) => {
        markersLayer.current.addLayer(getMarker(coordinates, deviceType));
      });
      markersLayer.current.addTo(map);
    }
  }, [map, banksCoordinates, deviceType]);
};

export default useMarkers;
