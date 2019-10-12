import { takeEvery } from 'redux-saga/effects';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';

import { playerActions } from '../actions/playerActions';

function* play({ payload }) {
  const sound = new Audio.Sound();
  try {
    yield sound.loadAsync({
      uri: FileSystem.documentDirectory + payload 
    });
    yield sound.playAsync();
  } catch (e) {
    console.log(e);
  }

}

export default function* watchPlay() {
  yield takeEvery(playerActions.PLAY, play);
};
