import React from 'react';
import { View } from 'react-native';

import { IBoardField } from 'src/modules/Board/interfaces';
import Tile from 'src/modules/Tiles/components/Tile';
import { boardFieldsColors } from 'src/modules/Board/data';

import { styles as stylesFun } from './styles';

type Props = {
  field: IBoardField;
  isInNewMove: boolean;
};

const BoardField: React.FC<Props> = ({ field, isInNewMove }) => {
  const styles = stylesFun({
    backgroundColor: boardFieldsColors[field.bonus],
  });

  return (
    <View style={styles.container}>
      {field.letter !== '' && (
        <View style={styles.tileWrapper}>
          <Tile
            letter={field.letter}
            blankLetter={field.blankLetter}
            isInNewMove={isInNewMove}
          />
        </View>
      )}
    </View>
  );
};

export default BoardField;
