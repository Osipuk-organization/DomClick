import {
  combineReducers
} from 'redux';

import flatsReducer from './flatsRedusers';

export default combineReducers({
  flats: flatsReducer,
});
