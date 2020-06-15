import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';

import { PlayerId } from 'src/modules/Players/interfaces';
import {
  selectPlayers,
  selectCurrentPlayerId,
} from 'src/modules/Game/store/players/selectors';
import { sumMovesPoints } from 'src/modules/Game/store/players/helpers';
import { selectTheme } from 'src/modules/Settings/store/selectors';

import { styles } from './styles';

const PlayersTotalScores = () => {
  const players = useSelector(selectPlayers);
  const currentPlayerId = useSelector(selectCurrentPlayerId);
  const themedStyles = styles(useSelector(selectTheme));

  return (
    <View style={themedStyles.container}>
      {(Object.keys(players) as PlayerId[]).map((playerId, i) => (
        <View key={i} style={themedStyles.pointsWrapper}>
          <Text
            style={
              currentPlayerId === playerId
                ? [themedStyles.points, themedStyles.currentPlayerPoints]
                : themedStyles.points
            }
          >
            {sumMovesPoints(players[playerId]!.moves)}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default PlayersTotalScores;
