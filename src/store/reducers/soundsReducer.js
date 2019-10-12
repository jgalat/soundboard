import { soundsActions } from '../actions/soundsActions';

export default function soundsReducer(store = [], action) {
  switch(action.type) {
    case soundsActions.STORE_SOUND:
      return [
        ...store,
        action.payload,
      ];
    default:
      return store;
  }
};
