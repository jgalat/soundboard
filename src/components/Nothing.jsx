import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default function Nothing() {
  return (
    <View style={styles.nothing}>
      <Text>There seems to be nothing here...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  nothing: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
