import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import { navListData } from '../constants/NavListData';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const mapNavigationTabs = (navListData) => {
  let tabs = {};
  navListData.map(navOptions=> {
    const { name,component } = navOptions;
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
export default mapNavigationTabs(navListData);