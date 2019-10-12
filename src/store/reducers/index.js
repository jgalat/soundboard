import { combineReducers } from 'redux';

import soundsReducer from './soundsReducer';

export default combineReducers({
  sounds: soundsReducer,
});
