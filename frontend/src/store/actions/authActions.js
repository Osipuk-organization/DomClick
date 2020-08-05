import { createAction } from 'redux-actions';
import { getCookie } from 'utils/cookies';

export const authSigninAction = createAction('[Auth] authSigninAction');
export const authRegisterAction = createAction('[Auth] authRegisterAction');
export const authLogoutAction = createAction('[Auth] authLogoutAction');

export const authSignin = (data) => (dispatch) => {
  if (getCookie("connect")) {
    /**
     * cookies
     */
    dispatch(authSigninAction({_id:"", login:"", role:"", __v:0}));
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
        return res.json()
      })
      .then(function result(auth) {
        return dispatch(authSigninAction(auth));
      })
      .catch(function error(err) {
        return dispatch(authSigninAction({type: "error", message: err}))
      });
  }
};

export const authRegister = (data) => (dispatch) => {
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
      return res.json()
    })
    .then(function result(auth) {
      return dispatch(authRegisterAction(auth));
    })
    .catch(function error(err) {
      return dispatch(authRegisterAction( {type: "error", message: err} ))
    });
};

export const authLogout = (data) => (dispatch) => {
  fetch('/auth/logout', {
    method: 'post',
    cache: 'no-cache',
    credentials: 'same-origin',
  })
    .then(function parse(res) {
      return res.json()
    })
    .then(function result(auth) {
      return dispatch(authLogoutAction(auth));
    })
    .catch(function error(err) {
      return dispatch(authLogoutAction( {type: "error", message: err} ))
    });
};