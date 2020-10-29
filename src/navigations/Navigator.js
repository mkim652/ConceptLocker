import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import DetailResult from '../screens/DetailResult';
import Tutorial from '../screens/Tutorial';

const stackNavigatorOptions = {
    headerShown:false
}
const AppNavigator = createStackNavigator({
    Login:{screen:Login},
    Register:{screen:Register},
    Home:{screen:Home},
    DetailResult:{screen:DetailResult},
    Tutorial:{screen:Tutorial},
},

{
    defaultNavigationOptions : stackNavigatorOptions
}  

);
export default createAppContainer(AppNavigator);

//export default DashboardTabNavigator