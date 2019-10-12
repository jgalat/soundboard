import React from 'react';
import { Appbar } from 'react-native-paper';

import Nothing from '../components/Nothing';

function Settings({ navigation }) {
  return (
    <React.Fragment>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack(null)} />
        <Appbar.Content
          title="Settings"
        />
      </Appbar.Header>
      <Nothing />
    </React.Fragment>
  );
}

export default Settings;
