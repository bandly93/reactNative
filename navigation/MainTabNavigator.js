import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import StarredScreen from '../screens/StarredScreen';
import SharedScreen from '../screens/SharedScreen';
import FilesScreen from '../screens/FilesScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const navData = [
  {
    component : HomeScreen,
    name : 'Home',
    iosIconName : 'ios-home',
    otherIconName : 'ios-home',
    title : null,
  },
  {
    component : StarredScreen,
    name : 'Starred',
    iosIconName : 'ios-star-outline',
    otherIconName : 'ios-star-outline',
    title : 'Starred Documents',
  },
  {
    component : SharedScreen,
    name :'Shared',
    iosIconName : 'ios-people',
    otherIconName : 'ios-people',
    title : 'Shared Documents',
  },
  {
    component : FilesScreen,
    name :'Files',
    iosIconName : 'ios-folder',
    otherIconName : 'ios-folder',
    title: 'Files',
  }
];

const mapNavigationTabs = (navData) => {
  let tabs = {};
  navData.map(navOptions=> {
    const { name,component,title } = navOptions;
    const stack = createStackNavigator({name : component },config);
    stack.navigationOptions = {
      tabBarLabel : name,
      tabBarIcon : ({focused}) => (
        <TabBarIcon
          focused ={focused}
          name = {
            Platform.OS === 'ios'
              ? navOptions.iosIconName
              : navOptions.otherIconName
          }
        />
      ),
    }
    stack.path = '',
    tabs[name] = stack;
  })
  return createBottomTabNavigator(tabs);
}
export default mapNavigationTabs(navData);