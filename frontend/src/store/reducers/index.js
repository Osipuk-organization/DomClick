import { combineReducers } from 'redux';

import flatsReducer from './flatsReducers';
import userReducer from './userReducers';
import authReducers from './authReducers';

export default combineReducers({
  flats: flatsReducer,
  user: userReducer,
  auth: authReducers,
});
