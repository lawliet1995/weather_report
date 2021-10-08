import { combineReducers } from 'redux';
import areaReducer from './areaReducer';
import reportReducer from './reportReducer';

export default combineReducers({
  area: areaReducer,
  report: reportReducer
});
