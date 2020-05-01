import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text } from 'react-native';

import Tile from 'src/modules/Tiles/components/Tile';
import { Letter } from 'src/modules/Dictionary/interfaces';

import { styles } from './styles';
import { ITilesListElement } from 'src/modules/Board/interfaces';

type Props = {
  letter: Letter;
  tile: ITilesListElement;
  onSetTileRef: (ref: View | null) => void;
};

const TilesListElement: React.FC<Props> = ({ letter, tile, onSetTileRef }) =>
  tile.amountLeft ? (
    <View style={styles.tileWrapper} ref={onSetTileRef}>
      <Tile letter={letter} />
      <Text style={styles.amount}>{tile.amountLeft}</Text>
    </View>
  ) : null;

export default TilesListElement;
