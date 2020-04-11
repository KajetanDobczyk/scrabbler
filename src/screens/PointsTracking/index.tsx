import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { color } from 'src/theme';
import { RootTabParamList } from 'src/layout/interfaces';
import Board from 'src/modules/Board/containers/Board';
import PlayersScores from 'src/modules/Players/containers/PlayersScores';
import Header from 'src/layout/components/Header';

type Props = {
  navigation: StackNavigationProp<RootTabParamList, 'PointsTracking'>;
  route: RouteProp<RootTabParamList, 'PointsTracking'>;
};

const PointsTracking: React.FC<Props> = ({ route }) => (
  <>
    <Header title={route.name} />
    <View style={styles.container}>
      <Board />
      <PlayersScores />
    </View>
  </>
);

export default PointsTracking;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.green,
    flex: 1,
  },
});
