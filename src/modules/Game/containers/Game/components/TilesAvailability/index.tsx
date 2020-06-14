import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import { initialTilesAmount } from 'src/modules/Game/store/data';
import { Letter } from 'src/modules/Dictionary/interfaces';
import { getAreAllLetterTilesUsed } from 'src/modules/Dictionary/helpers';
import { selectTilesList } from 'src/modules/Game/store/board/selectors';

import { styles } from './styles';

const TilesAvailability = () => {
  const tilesList = useSelector(selectTilesList);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {(Object.keys(tilesList) as Letter[]).map((letter) => (
        <View key={letter} style={styles.tileInfoWrapper}>
          <Text
            style={
              getAreAllLetterTilesUsed(tilesList, letter)
                ? [styles.letter, styles.used]
                : styles.letter
            }
          >
            {letter}
          </Text>
          <Text
            style={
              getAreAllLetterTilesUsed(tilesList, letter)
                ? [styles.amount, styles.used]
                : styles.amount
            }
          >
            {tilesList[letter].amountLeft}
          </Text>
          <Text
            style={
              getAreAllLetterTilesUsed(tilesList, letter)
                ? [styles.amount, styles.used]
                : styles.amount
            }
          >
            {' '}
            / {initialTilesAmount[letter]}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default TilesAvailability;
