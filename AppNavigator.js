import { createStackNavigator } from 'react-navigation';
import Home from './Home';

const AppNavigator = createStackNavigator(
  {
    Home: Home
  },
  {
    initialRouteName: 'Home',
  });

export default AppNavigator;
