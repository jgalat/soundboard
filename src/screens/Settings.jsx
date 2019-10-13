import React from 'react';
import { Appbar } from 'react-native-paper';

import Nothing from '../components/Nothing';

function Settings({ navigation }) {
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack(null)} />
        <Appbar.Content
          title="Settings"
        />
      </Appbar.Header>
      <Nothing />
    </>
  );
}

export default Settings;
