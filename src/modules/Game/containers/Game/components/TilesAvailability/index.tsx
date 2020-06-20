import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import { Letter } from 'src/modules/Dictionary/interfaces';
import { getAreAllLetterTilesUsed } from 'src/modules/Dictionary/helpers';
import { selectTilesList } from 'src/modules/Game/store/board/selectors';
import { selectTheme } from 'src/modules/Settings/store/selectors';
import { initialTilesAmount } from 'src/modules/Dictionary/data';

import { styles } from './styles';

const TilesAvailability = () => {
  const tilesList = useSelector(selectTilesList);
  const themedStyles = styles(useSelector(selectTheme));

  return (
    <ScrollView contentContainerStyle={themedStyles.container}>
      {(Object.keys(tilesList) as Letter[]).map((letter) => (
        <View key={letter} style={themedStyles.tileInfoWrapper}>
          <Text
            style={
              getAreAllLetterTilesUsed(tilesList, letter)
                ? [themedStyles.letter, themedStyles.used]
                : themedStyles.letter
            }
          >
            {letter}
          </Text>
          <Text
            style={
              getAreAllLetterTilesUsed(tilesList, letter)
                ? [themedStyles.amount, themedStyles.used]
                : themedStyles.amount
            }
          >
            {tilesList[letter].amountLeft}
          </Text>
          <Text
            style={
              getAreAllLetterTilesUsed(tilesList, letter)
                ? [themedStyles.amount, themedStyles.used]
                : themedStyles.amount
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
