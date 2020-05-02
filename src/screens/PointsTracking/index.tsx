import React from 'react';
import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { RootTabParamList, Screen } from 'src/layout/interfaces';
import Board from 'src/modules/Board/containers/Board';
import PlayersScores from 'src/modules/Players/containers/PlayersScores';
import Header from 'src/layout/components/Header';

import { styles } from './styles';

type Props = {
  navigation: StackNavigationProp<RootTabParamList, Screen.PointsTracking>;
  route: RouteProp<RootTabParamList, Screen.PointsTracking>;
};

const PointsTracking: React.FC<Props> = () => {
  return (
    <>
      <Header title={Screen.PointsTracking} />
      <View style={styles.container}>
        <Board />
        <PlayersScores />
      </View>
    </>
  );
};

export default PointsTracking;
