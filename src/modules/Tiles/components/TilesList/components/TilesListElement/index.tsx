import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import Tile from 'src/modules/Tiles/components/Tile';
import { Letter } from 'src/modules/Dictionary/interfaces';
import { selectIsTilesAmountDisplayed } from 'src/modules/Settings/store/selectors';

import { styles } from './styles';

type Props = {
  letter: Letter;
  amountLeft: number;
  onPress: (letter: Letter) => void;
  hideNotLeft?: boolean;
};

const TilesListElement: React.FC<Props> = ({
  letter,
  amountLeft,
  onPress,
  hideNotLeft,
}) => {
  const isTilesAmountDisplayed = useSelector(selectIsTilesAmountDisplayed);

  return hideNotLeft && !amountLeft ? null : (
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
      {!!amountLeft && isTilesAmountDisplayed && (
        <Text style={styles.amount}>{amountLeft}</Text>
      )}
    </TouchableOpacity>
  );
};

export default TilesListElement;
