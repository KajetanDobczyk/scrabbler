import React from 'react';
import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { RootTabParamList, Screen } from 'src/layout/interfaces';
import Board from 'src/modules/Board/containers/Board';
import Header from 'src/layout/components/Header';
import { selectGameStatus } from 'src/modules/Board/store/selectors';
import NewGame from 'src/modules/Board/containers/NewGame';

import { styles } from './styles';
import { useSelector } from 'react-redux';

type Props = {
  navigation: StackNavigationProp<RootTabParamList, Screen.PointsTracking>;
  route: RouteProp<RootTabParamList, Screen.PointsTracking>;
};

const PointsTracking: React.FC<Props> = () => {
  const gameStatus = useSelector(selectGameStatus);

  return (
    <View style={styles.container}>
      {gameStatus === 'idle' ? <NewGame /> : <Board />}
    </View>
  );
};

export default PointsTracking;
