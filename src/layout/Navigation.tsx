import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Dictionary from 'src/screens/Dictionary';
import PointsTracking from 'src/screens/PointsTracking';
import Home from 'src/screens/Home';

import DrawerContent from './components/DrawerContent';
import { Screen } from './interfaces';

const Drawer = createDrawerNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Drawer.Navigator
      initialRouteName={Screen.Home}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name={Screen.Home} component={Home} />
      <Drawer.Screen name={Screen.PointsTracking} component={PointsTracking} />
      <Drawer.Screen name={Screen.Dictionary} component={Dictionary} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default Navigation;
