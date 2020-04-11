import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Dictionary from 'src/screens/Dictionary';
import Home from 'src/screens/Home';

const Drawer = createDrawerNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Board">
      <Drawer.Screen
        name="Board"
        component={Home}
        options={{
          title: 'Plansza',
        }}
      />
      <Drawer.Screen
        name="Dictionary"
        component={Dictionary}
        options={{ title: 'Dwuliterówki' }}
      />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default Navigation;
