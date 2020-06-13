import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import { selectTilesList } from 'src/modules/Game/store/selectors';
import { initialTilesAmount } from 'src/modules/Game/store/data';
import { Letter } from 'src/modules/Dictionary/interfaces';

import { styles } from './styles';

const TilesAvailability = () => {
  const tilesList = useSelector(selectTilesList);

  const isUsed = (letter: Letter) =>
    tilesList[letter].amountLeft !== initialTilesAmount[letter];
  const areAllUsed = (letter: Letter) => !tilesList[letter].amountLeft;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {(Object.keys(tilesList) as Letter[]).map((letter) => (
        <View key={letter} style={styles.tileInfoWrapper}>
          <Text
            style={
              areAllUsed(letter) ? [styles.letter, styles.used] : styles.letter
            }
          >
            {letter}
          </Text>
          <Text
            style={
              isUsed(letter) ? [styles.amount, styles.used] : styles.amount
            }
          >
            {tilesList[letter].amountLeft}
          </Text>
          <Text
            style={
              areAllUsed(letter) ? [styles.amount, styles.used] : styles.amount
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
