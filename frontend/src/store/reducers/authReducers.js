import { handleActions } from 'redux-actions';

import {
  authSigninAction,
  authRegisterAction,
  authLogoutAction,
} from 'actions/authActions';

const initialState = {
  isAuth: false,
};

export default handleActions({

  [authSigninAction]: (state, action) => {
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

  [authRegisterAction]: (state, action) => {
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

  [authLogoutAction]: (state, action) => {
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