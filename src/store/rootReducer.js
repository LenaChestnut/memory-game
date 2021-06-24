import { combineReducers } from 'redux';
import infoReducer from './info/infoReducer';

const rootReducer = combineReducers({
  info: infoReducer,
});

export default rootReducer;
