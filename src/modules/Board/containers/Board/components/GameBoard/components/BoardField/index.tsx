import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { IBoardField } from 'src/modules/Board/interfaces';
import Tile from 'src/modules/Tiles/components/Tile';
import { boardFieldsColors } from 'src/modules/Board/data';

import { styles as stylesFun } from './styles';

type Props = {
  x: number;
  y: number;
  field: IBoardField;
  onPress: (x: number, y: number) => void;
  isInNewMove: boolean;
};

const BoardField: React.FC<Props> = ({ x, y, field, onPress, isInNewMove }) => {
  const styles = stylesFun({
    backgroundColor: boardFieldsColors[field.bonus],
  });

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(x, y)}>
      {field.letter !== '' && (
        <View style={styles.tileWrapper}>
          <Tile
            letter={field.letter}
            blankLetter={field.blankLetter}
            isInNewMove={isInNewMove}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default BoardField;
