import React from 'react';
import { View, Text, LayoutChangeEvent } from 'react-native';

import { IPlayedMove } from 'src/modules/Players/interfaces';
import { countPlayedWordPoints } from 'src/modules/Players/helpers';

import { stylesFun } from './styles';

type Props = {
  index: number;
  move: IPlayedMove;
  height?: number;
  onLayout: (index: number, height: number) => void;
};

const PlayedMove: React.FC<Props> = ({ index, move, height, onLayout }) => {
  const isSeven = move.tiles.length === 7;

  let movePoints = isSeven ? 50 : 0;

  const styles = stylesFun({});

  // Can't use nativeEvent's height, because it's same height as in given styles
  const handleOnLayout = () => {
    const localHeight = 26 + move.words.length * 14;

    if (!height || height < localHeight) {
      onLayout(index, localHeight);
    }
  };

  return (
    <View
      style={height ? [styles.container, { height }] : styles.container}
      onLayout={handleOnLayout}
    >
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
            <Text style={[styles.letter, styles.bonus]}>Bonus</Text>
          </View>
          <Text style={[styles.points, styles.bonus]}>50</Text>
        </View>
      )}
      {move.type === 'skipped' && (
        <Text style={[styles.movePoints, styles.skipped]}>—</Text>
      )}
      {move.type === 'loss' && (
        <Text style={[styles.movePoints, styles.loss]}>X</Text>
      )}
      {!move.type && <Text style={styles.movePoints}>{movePoints}</Text>}
    </View>
  );
};

export default PlayedMove;
