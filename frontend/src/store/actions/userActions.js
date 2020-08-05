import { createAction } from 'redux-actions';

export const getUserAction = createAction('[User] getUserAction');
export const createUserAction = createAction('[User] createUserAction');
export const updateUserAction = createAction('[User] updateUserAction');
export const deleteUserAction = createAction('[User] deleteUserAction');

export const getUser = (data) => (dispatch) => {
  let id = typeof data === "number" ? data : '';
  fetch(`/users/${id}`,{
    method: 'get',
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
    .then(function result(user) {
      return dispatch(getUserAction(user));
    })
    .catch(function error(err) {
      return dispatch(getUserAction( {type: "error", message: err} ))
    });
};

export const createUser = (data) => (dispatch) => {
  fetch('/users', {
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
    .then(function result(user) {
      return dispatch(createUserAction(user));
    })
    .catch(function error(err) {
      return dispatch(createUserAction( {type: "error", message: err} ))
    });
};

export const updateUser = (data) => (dispatch) => {
  fetch('/users', {
    method: 'put',
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
    .then(function result(user) {
      return dispatch(updateUserAction(user));
    })
    .catch(function error(err) {
      return dispatch(updateUserAction( {type: "error", message: err} ))
    });
};

export const deleteUser = (data) => (dispatch) => {
  fetch(`/users/${id}`, {
    method: 'delete',
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
    .then(function result(user) {
      return dispatch(deleteUserAction(user));
    })
    .catch(function error(err) {
      return dispatch(deleteUserAction( {type: "error", message: err} ))
    });
};