import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = uuid.v4();
  // Call alert from reducer
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  // Set timeout for alert to dissappear
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
