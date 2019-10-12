import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Button from './Button';

export default function Board({ sounds }) {
  const columns = 2;
  const fill = Array(sounds.length % columns).fill(false);
  const grid = sounds.concat(fill);
  return (
    <FlatList
      data={grid}
      renderItem={({ item }) => (
        <View style={styles.element}>
          {item && <Button sound={item} />}
        </View>
      )}
      numColumns={columns}
      keyExtractor={(_, index) => index}
    />
  );
}

const styles = StyleSheet.create({
  element: {
    flex: 1,
    flexDirection: 'column',
    margin: 5,
  },
});
