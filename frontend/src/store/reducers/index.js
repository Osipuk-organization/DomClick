import { combineReducers } from 'redux';

import flatsReducer from './flatsReducers';
import userReducer from './userReducers';

export default combineReducers({
  flats: flatsReducer,
  user: userReducer,
});
