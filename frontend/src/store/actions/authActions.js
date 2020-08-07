import { createAction } from 'redux-actions';
import { getCookie } from 'utils/cookies';
import { statusCode } from 'utils/statusCode';

export const signinAuthAction = createAction('[Auth] signinAuthAction');
export const registerAuthAction = createAction('[Auth] registerAuthAction');
export const logoutAuthAction = createAction('[Auth] logoutAuthAction');

export const signinAuth = (data) => (dispatch) => {
  if (true) {
    /**
     * cookies
     */
    dispatch(signinAuthAction({_id:"admin", login:"admin", role:"admin", __v:0}));
  } else {
    fetch('/auth/signin', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      cache: 'no-cache',
      credentials: 'same-origin',
      // rememberMe: true
      body: JSON.stringify(data)
    })
      .then(function parse(res) {
        statusCode(res, 200);
        return res.json()
      })
      .then(function result(auth) {
        return dispatch(signinAuthAction(auth));
      })
      .catch(function error(err) {
        return dispatch(signinAuthAction( {type: "error", message: err} ))
      });
  }
};

export const registerAuth = (data) => (dispatch) => {
  fetch('/auth/register', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    cache: 'no-cache',
    credentials: 'same-origin',
    body: JSON.stringify(data)
  })
    .then(function parse(res) {
      statusCode(res, 200);
      return res.json()
    })
    .then(function result(auth) {
      return dispatch(registerAuthAction(auth));
    })
    .catch(function error(err) {
      return dispatch(registerAuthAction( {type: "error", message: err} ))
    });
};

export const logoutAuth = (data) => (dispatch) => {
  fetch('/auth/logout', {
    method: 'post',
    cache: 'no-cache',
    credentials: 'same-origin',
  })
    .then(function parse(res) {
      statusCode(res, 200);
      return res.json()
    })
    .then(function result(auth) {
      return dispatch(logoutAuthAction(auth));
    })
    .catch(function error(err) {
      return dispatch(logoutAuthAction( {type: "error", message: err} ))
    });
};