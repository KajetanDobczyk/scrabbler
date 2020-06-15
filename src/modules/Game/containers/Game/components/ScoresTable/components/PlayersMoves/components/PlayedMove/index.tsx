import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { IPlayedMove } from 'src/modules/Game/interfaces';
import { countPlayedWordPoints } from 'src/modules/Game/store/players/helpers';
import { selectTheme } from 'src/modules/Settings/store/selectors';

import { styles } from './styles';

type Props = {
  index: number;
  move: IPlayedMove;
  height?: number;
  onLayout: (index: number, height: number) => void;
};

const PlayedMove: React.FC<Props> = ({ index, move, height, onLayout }) => {
  const themedStyles = styles(useSelector(selectTheme));

  const isSeven = move.tiles.length === 7;

  let movePoints = isSeven ? 50 : 0;

  // Can't use nativeEvent's height, because it's same height as in given styles
  const handleOnLayout = () => {
    const localHeight =
      26 +
      (move.tiles.length === 7 ? move.words.length + 1 : move.words.length) *
        14;

    if (!height || height < localHeight) {
      onLayout(index, localHeight);
    }
  };

  return (
    <View
      style={
        height ? [themedStyles.container, { height }] : themedStyles.container
      }
      onLayout={handleOnLayout}
    >
      {move.words.map((word, i) => {
        const wordPoints = countPlayedWordPoints(word, move.tiles);
        movePoints += wordPoints;

        return (
          <View key={i} style={themedStyles.wordRow}>
            <View style={themedStyles.letters}>
              {word.map((field, j) => (
                <Text
                  key={j}
                  style={[
                    themedStyles.letter,
                    {
                      opacity: field.blankLetter ? 0.3 : 1,
                    },
                  ]}
                >
                  {field.blankLetter || field.letter}
                </Text>
              ))}
            </View>
            <Text style={themedStyles.points}>{wordPoints}</Text>
          </View>
        );
      })}
      {isSeven && (
        <View style={themedStyles.wordRow}>
          <View style={themedStyles.letters}>
            <Text style={[themedStyles.letter, themedStyles.bonus]}>Bonus</Text>
          </View>
          <Text style={[themedStyles.points, themedStyles.bonus]}>50</Text>
        </View>
      )}
      {move.type === 'skipped' && (
        <Text style={[themedStyles.movePoints, themedStyles.skipped]}>—</Text>
      )}
      {move.type === 'loss' && (
        <Text style={[themedStyles.movePoints, themedStyles.loss]}>X</Text>
      )}
      {!move.type && <Text style={themedStyles.movePoints}>{movePoints}</Text>}
    </View>
  );
};

export default PlayedMove;
