import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { useSelector } from 'react-redux';

import { RootTabParamList, Screen } from 'src/layout/interfaces';
import WordSearch from 'src/modules/Dictionary/containers/WordSearch/';
import TwoLettersWords from 'src/modules/Dictionary/containers/TwoLettersWords';
import { DictionaryScreen } from 'src/modules/Dictionary/interfaces';
import { selectTheme } from 'src/modules/Settings/store/selectors';

import DrawerContent from './components/DrawerContent';
import { styles } from './styles';

const Drawer = createDrawerNavigator();

type Props = {
  navigation: StackNavigationProp<RootTabParamList, Screen.Dictionary>;
  route: RouteProp<RootTabParamList, Screen.Dictionary>;
};

const DictionaryTabContent: React.FC<Props> = () => {
  const themedStyles = styles(useSelector(selectTheme));

  return (
    <Drawer.Navigator
      initialRouteName={DictionaryScreen.Home}
      drawerContent={(props) => (
        <DrawerContentScrollView style={themedStyles.container}>
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
