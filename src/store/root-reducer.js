import { combineReducers } from 'redux';
import applicationReducer from './application/application-reducer';
import { NameSpace } from '../constants';

const rootReducer = combineReducers({
  [NameSpace.APPLICATION]: applicationReducer,
});

export default rootReducer;
