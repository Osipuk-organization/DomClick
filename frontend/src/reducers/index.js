import { combineReducers } from "redux";

// import flatsReducer from './flatsRedusers';
import { reducer as flatsReducer } from "./flatsRedusers";

export const rootReducer = combineReducers({
  flats: flatsReducer,
});

// export default combineReducers({
//   flats: flatsReducer,
// });
