import { createAction } from 'redux-actions';

export const getFlatsAction = createAction('[Flats] getFlatsAction');

export const getFlats = (params=[]) => (dispatch) => {
  fetch('http://osipuk.ru:4000/flats?'+params.join('&'))
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