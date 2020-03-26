import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dictionary from 'src/screens/Dictionary';
import Home from 'src/screens/Home';
import { color, hexToRGBA } from 'src/theme';

import { RootTabParamList } from './interfaces';

const Tab = createBottomTabNavigator<RootTabParamList>();

const Navigation = () => (
  <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: hexToRGBA(color.green, 0.9),
        inactiveBackgroundColor: color.green,
        activeTintColor: color.white,
        inactiveTintColor: color.white,
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{ title: 'Home' }} />
      <Tab.Screen
        name="Dictionary"
        component={Dictionary}
        options={{ title: 'Dictionary' }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default Navigation;
