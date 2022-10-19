/**
 * @format
 */

import { AppRegistry } from 'react-native';
import CounterApp from './CounterApp';
import LogIn from './Login';
import ScrollStyling from './ScrollStyling';
import OtpAppFront from './OTPAppFront';
import HexCodeInScreen from './HexCodeInScreen';
import HomeScreen from './HomeScreen';
import NavigateProjectScreens from './NavigateProjectScreens';
import TabNavigationProjectScreens from './TabNavigationProjectScreens';
import MyntraScreen from './MyntraScreen';
import MyntraNavigation from './MyntraNavigation';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => MyntraNavigation);
