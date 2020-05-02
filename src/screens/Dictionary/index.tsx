import React from 'react';
import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { RootTabParamList, Screen } from 'src/layout/interfaces';
import TwoLettersWordsList from 'src/modules/Dictionary/containers/TwoLettersWordsList';
import Header from 'src/layout/components/Header';

import { styles } from './styles';

type Props = {
  navigation: StackNavigationProp<RootTabParamList, Screen.Dictionary>;
  route: RouteProp<RootTabParamList, Screen.Dictionary>;
};

const Dictionary: React.FC<Props> = () => (
  <>
    <Header title={Screen.Dictionary} />
    <View style={styles.container}>
      <TwoLettersWordsList />
    </View>
  </>
);

export default Dictionary;
