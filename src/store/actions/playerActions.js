export const playerActions = {
  PLAY: 'PLAY',
};

export function play(file) {
  return {
    type: playerActions.PLAY,
    payload: file,
  };
};
