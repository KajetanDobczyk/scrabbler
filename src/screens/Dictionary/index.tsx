import React from 'react';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { RootTabParamList, Screen } from 'src/layout/interfaces';
import WordSearch from 'src/modules/Dictionary/containers/WordSearch/';
import TwoLettersWords from 'src/modules/Dictionary/containers/TwoLettersWords';
import { DictionaryScreen } from 'src/modules/Dictionary/interfaces';

const DictionaryStack = createStackNavigator();

type Props = {
  navigation: StackNavigationProp<RootTabParamList, Screen.Dictionary>;
  route: RouteProp<RootTabParamList, Screen.Dictionary>;
};

const Dictionary: React.FC<Props> = () => (
  <DictionaryStack.Navigator
    initialRouteName={DictionaryScreen.Home}
    screenOptions={{
      headerShown: false,
    }}
  >
    <DictionaryStack.Screen
      name={DictionaryScreen.Home}
      component={WordSearch}
    />
    <DictionaryStack.Screen
      name={DictionaryScreen.TwoLettersWords}
      component={TwoLettersWords}
    />
  </DictionaryStack.Navigator>
);

export default Dictionary;
