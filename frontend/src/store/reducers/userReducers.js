import { handleActions } from 'redux-actions';

import {
  getUserAction,
  createUserAction,
  updateUserAction,
  deleteUserAction,
} from 'actions/userActions';

const initialState = {
  users: [],
};

export default handleActions({

  [getUserAction]: (state, action) => {
    let res = {};

    if (action.payload.type !== "error") {
      res = {
        users: state.users.concat(action.payload),
      };
    } else {
      res = {
        ...state,
        error: action.payload.message,
      };
    }
    return res;
  },

  [createUserAction]: (state, action) => {
    let res = {};

    if (action.payload.type !== "error") {
      res = {
        users: state.users.concat(action.payload),
      };
    } else {
      res = {
        ...state,
        error: action.payload.message,
      };
    }
    return res;
  },

  [updateUserAction]: (state, action) => {
    let res = {};

    if (action.payload.type !== "error") {
      /**
       * todo
       * add filter and concat action.payload
       */
      res = {
        users: action.payload,
      };
    } else {
      res = {
        ...state,
        error: action.payload.message,
      };
    }
    return res;
  },

  [deleteUserAction]: (state, action) => {
    let res = {};

    if (action.payload.type !== "error") {
      /**
       * todo
       * add filter
       */
      res = {
        users: [],
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