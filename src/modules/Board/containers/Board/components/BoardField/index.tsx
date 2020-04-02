import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { boardFieldsColors } from 'src/modules/Board/config';
import { FieldBonus } from 'src/modules/Board/interfaces';
import { selectBoardLetters } from 'src/modules/Board/store/slice';
import Tile from 'src/modules/Tiles/components/Tile';

import { styles as stylesFun } from './styles';

type Props = {
  x: number;
  y: number;
  bonus: FieldBonus;
};

const BoardField: React.FC<Props> = ({ x, y, bonus }) => {
  const letters = useSelector(selectBoardLetters);

  const fieldLetter = letters[y][x];

  const styles = stylesFun({
    backgroundColor: boardFieldsColors[bonus],
  });

  return (
    <View style={styles.container}>
      {fieldLetter !== ' ' && (
        <View style={styles.tileWrapper}>
          <Tile letter={fieldLetter} />
        </View>
      )}
    </View>
  );
};

export default BoardField;
