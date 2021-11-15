import { DeviceType, MaxDiveceSize } from '../constants';

const getDeviceType = () => {
  const currentSize = document.documentElement.clientWidth;

  if (currentSize <= MaxDiveceSize.MOBILE) {
    return DeviceType.MOBILE;
  }

  if (currentSize <= MaxDiveceSize.TABLET) {
    return DeviceType.TABLET;
  }

  return DeviceType.DESKTOP;
};

export default getDeviceType;
