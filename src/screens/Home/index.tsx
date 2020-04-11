import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { color } from 'src/theme';
import { RootTabParamList } from 'src/layout/interfaces';
import Board from 'src/modules/Board/containers/Board';
import PlayersScores from 'src/modules/Players/containers/PlayersScores';

type Props = {
  navigation: StackNavigationProp<RootTabParamList, 'Home'>;
  route: RouteProp<RootTabParamList, 'Home'>;
};

const Home: React.FC<Props> = () => (
  <View style={styles.container}>
    <Board />
    <PlayersScores />
  </View>
);

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.green,
    flex: 1,
  },
});
