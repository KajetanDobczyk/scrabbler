import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { selectTilesList } from 'src/modules/Game/store/selectors';
import { initialTilesAmount } from 'src/modules/Game/store/data';
import { Letter } from 'src/modules/Dictionary/interfaces';
import { color } from 'src/theme';

import { styles } from './styles';

const TilesAvailability = () => {
  const tilesList = useSelector(selectTilesList);

  console.log(Object.keys(tilesList));

  return (
    <View style={styles.container}>
      {(Object.keys(tilesList) as Letter[]).map((letter) => (
        <View key={letter} style={styles.tileInfoWrapper}>
          <Text style={styles.letter}>{letter}</Text>
          <Text style={styles.amountLeft}>{tilesList[letter].amountLeft}</Text>
          <Text style={styles.totalAmount}>
            {' '}
            / {initialTilesAmount[letter]}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default TilesAvailability;
