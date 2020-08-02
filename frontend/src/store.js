import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

// import { createStore } from 'redux';

// import { rootReducer } from 'reducers';

// export const store = createStore(rootReducer);
