import {
  combineReducers
} from 'redux';

import flatsReducer from './flatsReduser';

export default combineReducers({
  flats: flatsReducer,
});
