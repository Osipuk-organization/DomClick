import { createAction } from 'redux-actions';
import {statusCode} from "utils/statusCode";

export const getUsersAction = createAction('[User] getUsersAction');
export const createUsersAction = createAction('[User] createUsersAction');
export const updateUsersAction = createAction('[User] updateUsersAction');
export const deleteUsersAction = createAction('[User] deleteUsersAction');

export const getUsers = ({id='', ...data}) => (dispatch) => {
  let req = [];

  for (let i in data) {
    req.push(`${i}=${data[i]}`)
  }
  req.push(`_r=${Math.random()}`)

  fetch(`http://osipuk.ru:4000/users/${id}?${req.join('&')}`,{
    method: 'get',
    cache: 'no-cache',
    credentials: 'same-origin',
  })
    .then(function parse(res) {
      statusCode(res, 200);
      return res.json()
    })
    .then(function result(user) {
      return dispatch(getUsersAction(user));
    })
    .catch(function error(err) {
      return dispatch(getUsersAction( {type: "error", message: err} ))
    });
};

export const createUsers = (data) => (dispatch) => {
  fetch('http://osipuk.ru:4000/users', {
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
    .then(function result(user) {
      return dispatch(createUsersAction(user));
    })
    .catch(function error(err) {
      return dispatch(createUsersAction( {type: "error", message: err} ))
    });
};

export const updateUsers = ({id='', ...data}) => (dispatch) => {
  fetch(`http://osipuk.ru:4000/users/${id}`, {
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
      statusCode(res, 200);
      return res.json()
    })
    .then(function result(user) {
      return dispatch(updateUsersAction(user));
    })
    .catch(function error(err) {
      return dispatch(updateUsersAction( {type: "error", message: err} ))
    });
};

export const deleteUsers = ({id='', ...data}={}) => (dispatch) => {
  fetch(`http://osipuk.ru:4000/users/${id}`, {
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
      statusCode(res, 200);
      return res.json()
    })
    .then(function result(user) {
      return dispatch(deleteUsersAction(user));
    })
    .catch(function error(err) {
      return dispatch(deleteUsersAction( {type: "error", message: err} ))
    });
};