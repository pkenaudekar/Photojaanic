import { combineReducers } from 'redux';
import pictureReducer from './pictureReducer';

export default combineReducers({
  pics: pictureReducer,
});
