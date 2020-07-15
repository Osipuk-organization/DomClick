import { handleActions } from 'redux-actions';

import {getFlatsAction} from 'actions/flatsAction';

const initialState = {
  flats: [],
};

export default handleActions({
  [getFlatsAction]: (state, action) => {
    let res = {};
    if (!action.payload.message) {
      res = {
        ...state,
        flats: true,
      };
    } else {
      res = {
        ...state,
        errors: action.payload.message,
      };
    }
    return res;
  },
}, initialState);