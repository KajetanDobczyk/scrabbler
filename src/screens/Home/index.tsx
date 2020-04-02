import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { color } from 'src/theme';
import { RootTabParamList } from 'src/layout/interfaces';
import Board from 'src/modules/Board/containers/Board';

type Props = {
  navigation: StackNavigationProp<RootTabParamList, 'Home'>;
  route: RouteProp<RootTabParamList, 'Home'>;
};

const Home: React.FC<Props> = () => (
  <View style={styles.container}>
    <Board />
  </View>
);

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: color.green,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
