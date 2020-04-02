import React from 'react';
import { View, Text } from 'react-native';

import { tilesPoints } from 'src/modules/Tiles/data';
import { Letter } from 'src/modules/Dictionary/interfaces';

import { styles } from './styles';

type Props = {
  letter: Letter;
};

const Tile: React.FC<Props> = ({ letter }) => (
  <View style={styles.container}>
    <Text style={styles.letter}>{letter}</Text>
    <Text style={styles.points}>{tilesPoints[letter]}</Text>
  </View>
);

export default Tile;
