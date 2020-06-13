import React from 'react';
import { TouchableOpacity } from 'react-native';

import Tile from 'src/modules/Game/components/Tile';
import { Letter } from 'src/modules/Dictionary/interfaces';

import { styles } from './styles';

type Props = {
  letter: Letter;
  amountLeft: number;
  onPress: (letter: Letter) => void;
};

const TilesListElement: React.FC<Props> = ({ letter, amountLeft, onPress }) => (
  <TouchableOpacity
    style={
      amountLeft
        ? styles.tileWrapper
        : [styles.tileWrapper, styles.noAmountLeft]
    }
    onPress={() => onPress(letter)}
    disabled={!amountLeft}
  >
    <Tile letter={letter} />
  </TouchableOpacity>
);

export default TilesListElement;
