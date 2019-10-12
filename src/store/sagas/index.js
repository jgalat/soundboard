import { all } from 'redux-saga/effects';

import newSoundSaga from './newSoundSaga';
import playerSaga from './playerSaga';

export default function* rootSaga() {
  yield all([
    newSoundSaga(),
    playerSaga(),
  ]);
};
