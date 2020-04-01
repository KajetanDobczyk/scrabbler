import React from 'react';
import { View, GestureResponderEvent } from 'react-native';
import { useSelector } from 'react-redux';

import { FieldBonus } from 'src/interfaces';
import { boardFieldsColors } from 'src/config/board';
import Tile from 'src/components/Tile';

import { styles as stylesFun } from './styles';
import { selectBoard } from '../../store/slice';

type Props = {
  x: number;
  y: number;
  bonus: FieldBonus;
  onTouchEnd: (x: number, y: number) => (event: GestureResponderEvent) => void;
};

const BoardField: React.FC<Props> = ({ x, y, bonus, onTouchEnd }) => {
  const board = useSelector(selectBoard);

  const fieldLetter = board[y][x];

  const styles = stylesFun({
    backgroundColor: boardFieldsColors[bonus],
  });

  return (
    <View style={styles.container} onTouchEnd={onTouchEnd(x, y)}>
      {fieldLetter !== ' ' && (
        <View style={styles.tileWrapper}>
          <Tile letter={fieldLetter} />
        </View>
      )}
    </View>
  );
};

export default BoardField;
