import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { useSelector } from 'react-redux';
import { css } from '@emotion/native';

import { RootTabParamList, Screen } from 'src/layout/interfaces';
import WordSearch from 'src/modules/Dictionary/containers/WordSearch/';
import TwoLettersWords from 'src/modules/Dictionary/containers/TwoLettersWords';
import { DictionaryScreen } from 'src/modules/Dictionary/interfaces';
import { selectTheme } from 'src/modules/Settings/store/selectors';

import DrawerContent from './components/DrawerContent';

const Drawer = createDrawerNavigator();

type Props = {
  navigation: StackNavigationProp<RootTabParamList, Screen.Dictionary>;
  route: RouteProp<RootTabParamList, Screen.Dictionary>;
};

const DictionaryTabContent: React.FC<Props> = () => {
  const { color } = useSelector(selectTheme);

  return (
    <Drawer.Navigator
      initialRouteName={DictionaryScreen.Home}
      drawerContent={(props) => (
        <DrawerContentScrollView style={css({ backgroundColor: color.board })}>
          <DrawerContent {...props} />
        </DrawerContentScrollView>
      )}
    >
      <Drawer.Screen name={DictionaryScreen.Home} component={WordSearch} />
      <Drawer.Screen
        name={DictionaryScreen.TwoLettersWords}
        component={TwoLettersWords}
      />
    </Drawer.Navigator>
  );
};

export default DictionaryTabContent;
