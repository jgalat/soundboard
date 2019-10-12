export const soundsActions = {
  NEW_SOUND: 'NEW_SOUND',
  STORE_SOUND: 'STORE_SOUND',
};

export function newSound() {
  return {
    type: soundsActions.NEW_SOUND,
  };
};

export function storeSound(sound) {
  return {
    type: soundsActions.STORE_SOUND,
    payload: sound,
  };
};

