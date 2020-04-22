import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { IPlayer } from 'src/modules/Players/interfaces';

type Props = {
  player: IPlayer;
};

const PlayerColumn: React.FC<Props> = ({ player }) => {
  let points = 0;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{player.name}</Text>
      </View>
      {player.moves.map((move, i) => (
        <View key={i} style={styles.move}>
          {move.words.map((word, j) => {
            points = points + word.points;

            return (
              <Text key={j} style={styles.word}>
                {word.word}
              </Text>
            );
          })}
          <Text style={styles.points}>{points}</Text>
        </View>
      ))}
    </View>
  );
};

export default PlayerColumn;
