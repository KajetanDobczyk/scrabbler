import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, Entypo, FontAwesome5 } from '@expo/vector-icons';

import Dictionary from 'src/screens/Dictionary';
import PointsTracking from 'src/screens/PointsTracking';
import Settings from 'src/screens/Settings';
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
            return <FontAwesome5 name="chess-board" size={15} color={color} />;
          } else if (route.name === Screen.Dictionary) {
            return <Entypo name="book" size={20} color={color} />;
          } else if (route.name === Screen.Settings) {
            return <Ionicons name="md-settings" size={20} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeBackgroundColor: color.green,
        inactiveBackgroundColor: color.green,
        activeTintColor: color.white,
        inactiveTintColor: color.lightGreen,
        style: { borderTopColor: color.lightGreen },
      }}
    >
      <Tab.Screen name={Screen.PointsTracking} component={PointsTracking} />
      <Tab.Screen name={Screen.Dictionary} component={Dictionary} />
      <Tab.Screen name={Screen.Settings} component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default BottomTabNavigation;
