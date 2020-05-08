import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Entypo, FontAwesome5 } from '@expo/vector-icons';

import Dictionary from 'src/screens/Dictionary';
import PointsTracking from 'src/screens/PointsTracking';
import { color } from 'src/theme';

import { Screen } from './interfaces';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName={Screen.PointsTracking}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          if (route.name === Screen.PointsTracking) {
            return <FontAwesome5 name="chess-board" size={17} color={color} />;
          } else if (route.name === Screen.Dictionary) {
            return <Entypo name="book" size={20} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeBackgroundColor: color.green,
        inactiveBackgroundColor: color.green,
        activeTintColor: color.white,
        inactiveTintColor: color.lightGreen,
      }}
    >
      <Tab.Screen name={Screen.PointsTracking} component={PointsTracking} />
      <Tab.Screen name={Screen.Dictionary} component={Dictionary} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default BottomTabNavigation;
