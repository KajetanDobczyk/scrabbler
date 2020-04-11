import React from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { IPlayers, IPlayerId } from 'src/modules/Players/interfaces';

import { styles } from './styles';

type Props = {
  players: IPlayers;
};

const PlayersScoresHeader: React.FC<Props> = ({ players }) => (
  <View style={styles.container}>
    {Object.keys(players).map((playerKey, i) => (
      <View
        key={i}
        style={EStyleSheet.child(
          styles,
          'playerHeader',
          i,
          Object.keys(players).length,
        )}
      >
        <Text style={styles.playerName}>
          {(players as any)[playerKey].name}
        </Text>
      </View>
    ))}
  </View>
);

export default PlayersScoresHeader;
