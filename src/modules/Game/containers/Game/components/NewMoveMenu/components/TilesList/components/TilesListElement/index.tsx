import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import Tile from 'src/modules/Game/components/Tile';
import { Letter } from 'src/modules/Dictionary/interfaces';
import { selectTheme } from 'src/modules/Settings/store/selectors';

import { styles } from './styles';

type Props = {
  letter: Letter;
  amountLeft: number;
  onPress: (letter: Letter) => void;
};

const TilesListElement: React.FC<Props> = ({ letter, amountLeft, onPress }) => {
  const themedStyles = styles(useSelector(selectTheme));

  return (
    <TouchableOpacity
      style={
        amountLeft
          ? themedStyles.tileWrapper
          : [themedStyles.tileWrapper, themedStyles.noAmountLeft]
      }
      onPress={() => onPress(letter)}
      disabled={!amountLeft}
    >
      <Tile letter={letter} />
    </TouchableOpacity>
  );
};

export default TilesListElement;
