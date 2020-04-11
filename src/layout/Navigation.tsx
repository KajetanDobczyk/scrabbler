import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Dictionary from 'src/screens/Dictionary';
import PointsTracking from 'src/screens/PointsTracking';

import DrawerContent from './components/DrawerContent';

const Drawer = createDrawerNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Drawer.Navigator
      initialRouteName="PointsTracking"
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Licznik punktów" component={PointsTracking} />
      <Drawer.Screen name="Dwuliterówki" component={Dictionary} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default Navigation;
