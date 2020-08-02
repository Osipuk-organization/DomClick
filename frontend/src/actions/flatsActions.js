import { createAction } from 'redux-actions';

export const getFlatsAction = createAction('[Flats] getFlatsAction');

export const getFlats = (params = []) => (dispatch) => {
  console.log('fetch')
  fetch('/api/flats?' + params.join('&'))
    .then(response => response.json())
    .then((flats) => {
      dispatch(getFlatsAction(flats));
    })
    .catch(function error(err) {
      dispatch(getFlatsAction({ error: err }))
    });
};