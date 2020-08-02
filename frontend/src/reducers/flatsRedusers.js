import { handleActions } from 'redux-actions';

import { getFlatsAction } from 'actions/flatsActions';

const initialState = {
  flats: [],
};

// export default handleActions({
export const reducer = handleActions({
  [getFlatsAction]: (state, action) => {
    let res = {};
    if (!action.payload.message) {
      res = {
        ...state,
        flats: action.payload,
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