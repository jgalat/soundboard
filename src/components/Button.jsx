import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { Surface, Text, TouchableRipple } from 'react-native-paper';

import { play } from '../store/actions/playerActions';

export default function Button({ sound }) {
  const { name, file } = sound;
  const dispatch = useDispatch();
  const playCallback = useCallback(() => dispatch(play(file)));
  return (
    <View style={styles.square}>
      <Surface style={styles.surface}>
        <TouchableRipple style={styles.ripple} onPress={playCallback}>
          <Text>{name}</Text>
        </TouchableRipple>
      </Surface>
    </View>
  );
}

const styles = StyleSheet.create({
  square: {
    width: '100%',
    paddingTop: '100%',
    position: 'relative',
  },
  surface: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    elevation: 4,
  },
  ripple: {
    height: '100%',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
