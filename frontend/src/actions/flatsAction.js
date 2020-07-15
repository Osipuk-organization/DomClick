import { createAction } from 'redux-actions';

export const getFlatsAction = createAction('[Flats] getFlatsAction');

export const getFlats = (params=[]) => (dispatch) => {
  fetch('/api/flats?'+params.join('&'))
    .then(function parse(res) {
      return res.json()
    })
    .then(function result(flats) {
      dispatch(getFlatsAction(flats))
    })
    .catch(function error(err) {
      dispatch(getFlatsAction( {error: err} ))
    });
};