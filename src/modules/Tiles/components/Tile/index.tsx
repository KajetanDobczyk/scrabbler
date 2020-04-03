import React from 'react';
import { View, Text } from 'react-native';

import { tilesPoints } from 'src/modules/Tiles/data';
import { Letter } from 'src/modules/Dictionary/interfaces';

import { styles } from './styles';

type Props = {
  letter: Letter;
};

const Tile: React.FC<Props> = ({ letter }) => {
  const points = tilesPoints[letter];

  return (
    <View style={styles.container}>
      <Text style={styles.letter}>{letter !== '?' ? letter : ''}</Text>
      {points ? <Text style={styles.points}>{tilesPoints[letter]}</Text> : null}
    </View>
  );
};

export default Tile;
