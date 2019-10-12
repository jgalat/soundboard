import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/Home';
import Settings from '../screens/Settings';

const StackNavigator = createStackNavigator({
  Home: { screen: Home },
  Settings: { screen: Settings },
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    header: null,
  },
});

export default createAppContainer(StackNavigator);
