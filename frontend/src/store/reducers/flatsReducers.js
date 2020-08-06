import { handleActions } from 'redux-actions';

import {
  getFlatsAction,
  createFlatsAction,
  updateFlatsAction,
  deleteFlatsAction,
} from 'actions/flatsActions';

const initialState = {
  flats: [],
};

export default handleActions({

  [getFlatsAction]: (state, action) => {
    let res = {};

    if (action.payload.type !== "error") {
      res = {
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

  [createFlatsAction]: (state, action) => {
    let res = {};

    if (action.payload.type !== "error") {
      res = {
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

  [updateFlatsAction]: (state, action) => {
    let res = {};

    if (action.payload.type !== "error") {
      /**
       * todo
       * add filter and concat action.payload
       */
      res = {
        flats: action.payload,
      };
    } else {
      res = {
        ...state,
        error: action.payload.message,
      };
    }
    return res;
  },

  [deleteFlatsAction]: (state, action) => {
    let res = {};

    if (action.payload.type !== "error") {
      /**
       * todo
       * add filter
       */
      res = {
        flats: [],
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