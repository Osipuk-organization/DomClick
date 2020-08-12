import { createAction } from 'redux-actions';
import {statusCode} from "utils/statusCode";

export const getFlatsAction = createAction('[Flats] getFlatsAction');
export const createFlatsAction = createAction('[Flats] createFlatsAction');
export const updateFlatsAction = createAction('[Flats] updateFlatsAction');
export const deleteFlatsAction = createAction('[Flats] deleteFlatsAction');
export const updateFormAction = createAction('[Flats] updateFormAction');

export const getFlats = ({id='', ...data}={}) => (dispatch) => {
  let req = [];

  for (let i in data) {
    req.push(`${i}=${data[i]}`)
  }

  fetch(`/flats/${id}?${req.join('&')}`)
    .then(function parse(res) {
      statusCode(res, 200);
      return res.json()
    })
    .then(function result(flats) {
      dispatch(getFlatsAction(flats))
    })
    .catch(function error(err) {
      dispatch(getFlatsAction( {type: "error", message: err} ))
    });
};

export const createFlats = (data, history) => (dispatch) => {
  let formData = new FormData();
  formData.append('json', JSON.stringify(data));

  function append(binary, name) {
    binary.forEach(i => {
      formData.append(`${name}`, i, i.name);
    })
  }

  append(data.documentsBinary, 'documents');
  append(data.fotoBinary, 'foto');
  append(data.videoBinary, 'video');

  fetch('/flats', {
    method: 'post',
    cache: 'no-cache',
    credentials: 'same-origin',
    body: formData,
  })
    .then(function parse(res) {
      statusCode(res, 200);
      return res.json()
    })
    .then(function result(flats) {
      dispatch(createFlatsAction(flats))
      if (history) {
        history.push('/');
        history.replace('/');
      }
    })
    .catch(function error(err) {
      dispatch(createFlatsAction( {type: "error", message: err} ))
    });
};

export const updateFlats = ({id='', ...data}) => (dispatch) => {
  fetch(`/flats/${id}`, {
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
    .then(function result(flats) {
      dispatch(updateFlatsAction(flats))
    })
    .catch(function error(err) {
      dispatch(updateFlatsAction( {type: "error", message: err} ))
    });
};

export const deleteFlats = ({id='', ...data}) => (dispatch) => {
  fetch(`/flats/${id}`, {
    method: 'delete',
    cache: 'no-cache',
    credentials: 'same-origin',
  })
    .then(function result(res) {
      statusCode(res, 204);
      dispatch(deleteFlatsAction(id))
    })
    .catch(function error(err) {
      dispatch(deleteFlatsAction( {type: "error", message: err} ))
    });
};

export const updateForm = (value, name) => (dispatch) => {
  try {
    dispatch(updateFormAction(value, name))
  } catch (err) {
    dispatch(updateFormAction({type: "error", message: err}))
  }
};