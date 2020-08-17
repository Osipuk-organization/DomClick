import { handleActions } from 'redux-actions';

import {
  getUsersAction,
  createUsersAction,
  updateUsersAction,
  deleteUsersAction,
} from 'actions/userActions';

const initialState = {
  users: [],
};

export default handleActions({

  [getUsersAction]: (state, action) => {
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

  [createUsersAction]: (state, action) => {
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

  [updateUsersAction]: (state, action) => {
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

  [deleteUsersAction]: (state, action) => {
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