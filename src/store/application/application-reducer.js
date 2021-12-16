import { createReducer } from '@reduxjs/toolkit';
import getDeviceType from '../../common/common';
import { changeDeviceType } from '../action';

const initialState = {
  deviceType: getDeviceType(),
};

const applicationReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeDeviceType, (state, action) => {
      state.deviceType = action.payload;
    });
});

export default applicationReducer;
