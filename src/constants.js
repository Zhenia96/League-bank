const HISTORY_LENGTH = 10;

const DeviceType = {
  MOBILE: 'mobile',
  TABLET: 'tablet',
  DESKTOP: 'desktop',
};

const MaxDiveceSize = {
  MOBILE: 767,
  TABLET: 1023,
};

const NameSpace = {
  APPLICATION: 'application',
  HISTORY: 'history',
};

const ActionType = {
  CHANGE_DEVICE_TYPE: 'change device type',
  CLEAR_HISTORY: 'history/clearHistory',
  ADD_HISTORY: 'history/addHistory',
};

const Path = {
  MAIN: '/',
  CONVERTER: '/converter',
};

const DateFormat = {
  DEFAULT: 'YYYY-MM-DD',
};

export {
  HISTORY_LENGTH,
  DeviceType,
  MaxDiveceSize,
  NameSpace,
  ActionType,
  Path,
  DateFormat,
};
