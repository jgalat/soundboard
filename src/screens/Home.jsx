import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Appbar } from 'react-native-paper';

import { newSound } from '../store/actions/soundsActions';

import Board from '../components/Board';
import Nothing from '../components/Nothing';

function Home({ navigation }) {
  const dispatch = useDispatch();
  const sounds = useSelector(store => store.sounds);
  const newSoundCallback = useCallback(() => dispatch(newSound()));
  const settingsCallback = useCallback(() => navigation.push('Settings'));
  return (
    <React.Fragment>
      <Appbar.Header>
        <Appbar.Content
          title="Soundboard"
        />
        <Appbar.Action icon="playlist-add" onPress={newSoundCallback} />
        <Appbar.Action icon="settings" onPress={settingsCallback} />
      </Appbar.Header>
      {sounds.length > 0 ? (
        <Board sounds={sounds} />
      ) : (
        <Nothing />
      )}
    </React.Fragment>
  );
}

export default Home;
