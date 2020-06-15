import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';

import { PlayerId } from 'src/modules/Players/interfaces';
import {
  selectCurrentPlayerId,
  selectPlayers,
} from 'src/modules/Game/store/players/selectors';
import { selectTheme } from 'src/modules/Settings/store/selectors';

import { styles } from './styles';

const PlayersNames = () => {
  const currentPlayerId = useSelector(selectCurrentPlayerId);
  const players = useSelector(selectPlayers);
  const themedStyles = styles(useSelector(selectTheme));

  return (
    <View style={themedStyles.container}>
      {(Object.keys(players) as PlayerId[]).map((playerId) => (
        <Text
          key={playerId}
          style={
            playerId === currentPlayerId.toString()
              ? [themedStyles.name, themedStyles.currentName]
              : themedStyles.name
          }
        >
          {players[playerId]!.name}
        </Text>
      ))}
    </View>
  );
};

export default PlayersNames;
