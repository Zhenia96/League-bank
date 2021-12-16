import { combineReducers } from 'redux';
import applicationReducer from './application/application-reducer';
import historyReducer from './history/history-reducer';
import { NameSpace } from '../constants';

const rootReducer = combineReducers({
  [NameSpace.APPLICATION]: applicationReducer,
  [NameSpace.HISTORY]: historyReducer,
});

export default rootReducer;
