import React from 'react';
import { View, Text } from 'react-native';

import { IPlayedMove } from 'src/modules/Players/interfaces';
import { countPlayedWordPoints } from 'src/modules/Players/helpers';

import { stylesFun } from './styles';

type Props = {
  move: IPlayedMove;
};

const PlayedMove: React.FC<Props> = ({ move }) => {
  const isSeven = move.tiles.length === 7;

  let movePoints = isSeven ? 50 : 0;

  const styles = stylesFun({});

  return (
    <View style={styles.container}>
      {move.words.map((word, i) => {
        const wordPoints = countPlayedWordPoints(word, move.tiles);
        movePoints += wordPoints;

        return (
          <View key={i} style={styles.wordRow}>
            <View style={styles.letters}>
              {word.map((field, j) => (
                <Text
                  key={j}
                  style={
                    stylesFun({
                      opacity: field.blankLetter ? 0.3 : 1,
                    }).letter
                  }
                >
                  {field.blankLetter || field.letter}
                </Text>
              ))}
            </View>
            <Text style={styles.points}>{wordPoints}</Text>
          </View>
        );
      })}
      {isSeven && (
        <View style={styles.wordRow}>
          <View style={styles.letters}>
            <Text style={styles.bonusInfo}>Bonus</Text>
          </View>
          <Text style={styles.bonusPoints}>50</Text>
        </View>
      )}
      <Text style={styles.movePoints}>{movePoints || '—'}</Text>
    </View>
  );
};

export default PlayedMove;
