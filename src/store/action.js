import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../constants';

const changeDeviceType = createAction(ActionType.CHANGE_DEVICE_TYPE, (deviceType) => ({
  payload: deviceType,
}));

const clearHistory = createAction(ActionType.CLEAR_HISTORY);

const addHistory = createAction(ActionType.ADD_HISTORY, (historyItem) => ({
  payload: historyItem,
}));

export {
  changeDeviceType,
  clearHistory,
  addHistory,
};
