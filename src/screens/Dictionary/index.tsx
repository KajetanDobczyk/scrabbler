import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { color } from 'src/theme';
import { RootTabParamList } from 'src/layout/interfaces';

import TwoLettersWordsList from './components/TwoLettersWordsList';

type Props = {
  navigation: StackNavigationProp<RootTabParamList, 'Dictionary'>;
  route: RouteProp<RootTabParamList, 'Dictionary'>;
};

const Dictionary: React.FC<Props> = () => (
  <View style={styles.container}>
    <TwoLettersWordsList />
  </View>
);

export default Dictionary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
