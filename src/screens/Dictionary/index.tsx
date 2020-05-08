import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { RootTabParamList, Screen } from 'src/layout/interfaces';
import WordSearch from 'src/modules/Dictionary/containers/WordSearch/';
import TwoLettersWords from 'src/modules/Dictionary/containers/TwoLettersWords';
import { DictionaryScreen } from 'src/modules/Dictionary/interfaces';
import DrawerContent from 'src/layout/components/DrawerContent';

const Drawer = createDrawerNavigator();

type Props = {
  navigation: StackNavigationProp<RootTabParamList, Screen.Dictionary>;
  route: RouteProp<RootTabParamList, Screen.Dictionary>;
};

const Dictionary: React.FC<Props> = () => (
  <Drawer.Navigator
    initialRouteName={DictionaryScreen.Home}
    drawerContent={(props) => <DrawerContent {...props} />}
  >
    <Drawer.Screen name={DictionaryScreen.Home} component={WordSearch} />
    <Drawer.Screen
      name={DictionaryScreen.TwoLettersWords}
      component={TwoLettersWords}
    />
  </Drawer.Navigator>
);

export default Dictionary;
