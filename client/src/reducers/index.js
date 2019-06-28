import { combineReducers } from 'redux';
import alert from './alert';
import secret from './secret';

export default combineReducers({
  alert,
  secret
});
