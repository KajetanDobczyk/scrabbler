import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Dictionary from 'src/screens/Dictionary';
import Home from 'src/screens/Home';
import { color, hexToRGBA } from 'src/theme';

import { Screen, RootTabParamList } from './interfaces';

const tabsIcons: Record<Screen, { normal: string; focused: string }> = {
  Home: {
    normal: 'ios-square-outline',
    focused: 'ios-square',
  },
  Dictionary: {
    normal: 'ios-list',
    focused: 'ios-list-box',
  },
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const Navigation = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name={tabsIcons[route.name][focused ? 'focused' : 'normal']}
            size={size}
            color={color}
          />
        ),
      })}
      tabBarOptions={{
        activeBackgroundColor: hexToRGBA(color.green, 0.9),
        inactiveBackgroundColor: color.green,
        activeTintColor: color.white,
        inactiveTintColor: color.white,
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{ title: 'Plansza' }} />
      <Tab.Screen
        name="Dictionary"
        component={Dictionary}
        options={{ title: 'Dwuliterówki' }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default Navigation;
