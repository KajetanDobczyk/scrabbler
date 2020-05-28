import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { PlayerId } from 'src/modules/Players/interfaces';
import {
  selectPlayers,
  selectCurrentPlayerId,
} from 'src/modules/Players/store/selectors';
import { sumMovesPoints } from 'src/modules/Players/helpers';

import { styles } from './styles';

type Props = {
  playersAmount: number;
};

const PlayersNames: React.FC<Props> = ({ playersAmount }) => {
  const currentPlayerId = useSelector(selectCurrentPlayerId).toString();
  const players = useSelector(selectPlayers);

  return (
    <View style={styles.container}>
      {(Object.keys(players) as PlayerId[]).map((playerId, index) => (
        <View
          key={playerId}
          style={EStyleSheet.child(styles, 'playerRow', index, playersAmount)}
        >
          <Text
            key={playerId}
            style={
              playerId === currentPlayerId
                ? [styles.name, styles.currentPlayer]
                : styles.name
            }
          >
            {players[playerId]!.name}
          </Text>
          <Text
            style={
              playerId === currentPlayerId
                ? [styles.points, styles.currentPlayer]
                : styles.points
            }
          >
            {sumMovesPoints(players[playerId]!.moves)}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default PlayersNames;
