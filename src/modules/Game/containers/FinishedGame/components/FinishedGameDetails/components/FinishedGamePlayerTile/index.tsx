import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { IPlayer } from 'src/modules/Game/interfaces';
import { selectTheme } from 'src/modules/Settings/store/selectors';

import { styles } from './styles';

type Props = {
  player: IPlayer;
  points: number;
  isWinner: boolean;
};

const FinishedGamePlayerTile: React.FC<Props> = ({
  player,
  points,
  isWinner,
}) => {
  const themedStyles = styles(useSelector(selectTheme));

  return (
    <View
      style={
        isWinner
          ? [themedStyles.container, themedStyles.winner]
          : themedStyles.container
      }
    >
      <Text style={themedStyles.name}>{player.name}</Text>
      <Text style={themedStyles.points}>{points}</Text>
    </View>
  );
};

export default FinishedGamePlayerTile;
