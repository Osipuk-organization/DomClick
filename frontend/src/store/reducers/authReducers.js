import { handleActions } from 'redux-actions';

import {
  signinAuthAction,
  registerAuthAction,
  logoutAuthAction,
} from 'actions/authActions';

const initialState = {
  isAuth: false,
};

export default handleActions({

  [signinAuthAction]: (state, action) => {
    let res = {};

    if (action.payload.type !== "error") {
      res = {
        ...state,
        isAuth: true,
      };
    } else {
      res = {
        ...state,
        error: action.payload.message,
      };
    }
    return res;
  },

  [registerAuthAction]: (state, action) => {
    let res = {};

    if (action.payload.type !== "error") {
      res = {
        ...state,
        isAuth: true,
      };
    } else {
      res = {
        ...state,
        error: action.payload.message,
      };
    }
    return res;
  },

  [logoutAuthAction]: (state, action) => {
    let res = {};

    if (action.payload.type !== "error") {
      res = {
        ...state,
        isAuth: false,
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