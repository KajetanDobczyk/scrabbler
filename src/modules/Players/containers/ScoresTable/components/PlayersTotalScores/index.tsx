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
import CurrentPlayerMenu from 'src/modules/Players/components/CurrentPlayerMenu';

import { styles } from './styles';
const TableHeader = () => {
  const currentPlayerId = useSelector(selectCurrentPlayerId);
  const players = useSelector(selectPlayers);

  const playersAmount = Object.keys(players).length;

  return (
    <View style={styles.container}>
      {(Object.keys(players) as PlayerId[]).map((playerId, i) => (
        <View
          style={EStyleSheet.child(styles, 'pointsWrapper', i, playersAmount)}
        >
          <View>
            {currentPlayerId.toString() === Object.keys(players)[i] && (
              <CurrentPlayerMenu />
            )}
          </View>
          <Text style={styles.points}>
            {sumMovesPoints(players[playerId]!.moves)}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default TableHeader;
