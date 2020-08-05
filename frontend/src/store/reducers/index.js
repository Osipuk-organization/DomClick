import { reducer as flatsReducer } from "./flatsRedusers";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  flats: flatsReducer,
});

// export default combineReducers({
//   flats: flatsReducer,
// });

export const store = createStore(rootReducer, applyMiddleware(thunk));

// import { createStore } from 'redux';

// import { rootReducer } from 'reducers';

// export const store = createStore(rootReducer);
