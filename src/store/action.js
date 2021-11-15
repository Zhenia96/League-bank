import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../constants';

const changeDeviceType = createAction(ActionType.CHANGE_DEVICE_TYPE, (deviceType) => ({
  payload: deviceType,
}));

export default changeDeviceType;
