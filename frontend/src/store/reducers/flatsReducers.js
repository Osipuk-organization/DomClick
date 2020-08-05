import { handleActions } from 'redux-actions';

import {
  getFlatsAction
} from 'actions/flatsActions';

const initialState = {
  flats: [],
};

export default handleActions({
  [getFlatsAction]: (state, action) => {
    let res = {};

    if (action.payload.type !== "error") {
      res = {
        ...state,
        flats: state.flats.concat(action.payload),
      };
    } else {
      res = {
        ...state,
        error: action.payload.message,
      };
    }
    return res;
  },
}, initialState);