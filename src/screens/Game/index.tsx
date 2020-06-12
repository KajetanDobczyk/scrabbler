import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RouteProp } from '@react-navigation/native';

import { RootTabParamList, Screen } from 'src/layout/interfaces';
import NewGame from 'src/modules/Game/containers/NewGame';
import GameContainer from 'src/modules/Game/containers/Game';
import FinishedGame from 'src/modules/Game/containers/FinishedGame';
import { GameScreen } from 'src/modules/Game/interfaces';
import DrawerContent from 'src/layout/components/DrawerContent';

const Drawer = createDrawerNavigator();

type Props = {
  navigation: StackNavigationProp<RootTabParamList, Screen.Game>;
  route: RouteProp<RootTabParamList, Screen.Game>;
};

const Game: React.FC<Props> = () => (
  <Drawer.Navigator
    initialRouteName={GameScreen.NewGame}
    drawerContent={(props) => <DrawerContent {...props} />}
  >
    <Drawer.Screen name={GameScreen.NewGame} component={NewGame} />
    <Drawer.Screen name={GameScreen.Game} component={GameContainer} />
    <Drawer.Screen name={GameScreen.FinishedGame} component={FinishedGame} />
  </Drawer.Navigator>
);

export default Game;
