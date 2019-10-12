import { takeEvery, put } from 'redux-saga/effects';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

import { soundsActions, storeSound } from '../actions/soundsActions';

function* newSound() {
  // TODO: A setup saga to create directories?
  try {
    yield FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'sounds');
  } catch(e) {};

  try {
    const soundFile = yield DocumentPicker.getDocumentAsync({
      type: 'audio/*',
    });
  
    switch(soundFile.type) {
      case 'success':
        const { name, uri: fromCache } = soundFile;
        const id = Date.now();
        const location = `sounds/${id}${name}`;
        const toPersistent = FileSystem.documentDirectory + location;
        yield FileSystem.moveAsync({
          from: fromCache,
          to: toPersistent,
        });
        yield put(storeSound({
          name,
          file: location,
        }));
        break;
      case 'cancel':
      default:
    }
  } catch (e) {
    console.log(e);
  }
}

export default function* watchNewSound() {
  yield takeEvery(soundsActions.NEW_SOUND, newSound);
};
