import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { RootTabParamList, Screen } from 'src/layout/interfaces';
import Board from 'src/modules/Board/containers/Board';
import { selectGameStatus } from 'src/modules/Board/store/selectors';
import NewGame from 'src/modules/Board/containers/NewGame';

type Props = {
  navigation: StackNavigationProp<RootTabParamList, Screen.PointsTracking>;
  route: RouteProp<RootTabParamList, Screen.PointsTracking>;
};

const PointsTracking: React.FC<Props> = () => {
  const gameStatus = useSelector(selectGameStatus);

  return gameStatus === 'idle' ? <NewGame /> : <Board />;
};

export default PointsTracking;
