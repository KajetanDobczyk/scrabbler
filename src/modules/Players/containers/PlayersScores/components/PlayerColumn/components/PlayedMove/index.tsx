import React from 'react';
import { View, Text } from 'react-native';

import { IPlayedMove } from 'src/modules/Players/interfaces';

import { styles } from './styles';

type Props = {
  move: IPlayedMove;
};

const PlayedMove: React.FC<Props> = ({ move }) => {
  const movePoints = move.words.reduce((acc, word) => acc + word.points, 0);

  return (
    <View style={styles.container}>
      {move.words.map((word, j) => (
        <View key={j} style={styles.wordRow}>
          <Text style={styles.word}>{word.word}</Text>
          <Text style={styles.wordPoints}>{word.points}</Text>
        </View>
      ))}
      <Text style={styles.movePoints}>{movePoints || '—'}</Text>
    </View>
  );
};

export default PlayedMove;
