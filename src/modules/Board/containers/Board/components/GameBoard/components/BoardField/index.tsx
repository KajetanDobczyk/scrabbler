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
    opacity: field.isHighlighted ? 0.8 : 1,
  });

  return (
    <View
      style={[
        styles.container,
        { transform: isInNewMove ? [{ scale: 1.1 }] : undefined },
      ]}
    >
      {field.letter !== '' && (
        <View style={styles.tileWrapper}>
          <Tile letter={field.letter} />
        </View>
      )}
    </View>
  );
};

export default BoardField;
