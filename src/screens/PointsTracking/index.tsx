import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RouteProp } from '@react-navigation/native';

import { RootTabParamList, Screen } from 'src/layout/interfaces';
import Board from 'src/modules/Board/containers/Board';
import NewGame from 'src/modules/Board/containers/NewGame';
import { PointsTrackingScreen } from 'src/modules/Board/interfaces';
import DrawerContent from 'src/layout/components/DrawerContent';
import FinishedGame from 'src/modules/Board/containers/FinishedGame';

const Drawer = createDrawerNavigator();

type Props = {
  navigation: StackNavigationProp<RootTabParamList, Screen.PointsTracking>;
  route: RouteProp<RootTabParamList, Screen.PointsTracking>;
};

const PointsTracking: React.FC<Props> = () => (
  <Drawer.Navigator
    initialRouteName={PointsTrackingScreen.NewGame}
    drawerContent={(props) => <DrawerContent {...props} />}
  >
    <Drawer.Screen name={PointsTrackingScreen.NewGame} component={NewGame} />
    <Drawer.Screen name={PointsTrackingScreen.Board} component={Board} />
    <Drawer.Screen
      name={PointsTrackingScreen.FinishedGame}
      component={FinishedGame}
    />
  </Drawer.Navigator>
);

export default PointsTracking;
