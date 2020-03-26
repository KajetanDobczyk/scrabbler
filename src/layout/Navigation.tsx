import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Dictionary from 'src/screens/Dictionary';
import Home from 'src/screens/Home';
import { headerLayout } from 'src/layout/Header';

import { RootStackParamList } from './interfaces';

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ ...headerLayout }}>
      <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
      <Stack.Screen
        name="Dictionary"
        component={Dictionary}
        options={{ title: 'Dictionary' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
