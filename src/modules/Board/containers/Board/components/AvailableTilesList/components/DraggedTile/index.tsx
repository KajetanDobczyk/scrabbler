import React from 'react';
import { Animated, View } from 'react-native';

import Tile from 'src/modules/Tiles/components/Tile';
import { Letter } from 'src/modules/Dictionary/interfaces';
import { boardPadding } from 'src/modules/Board/containers/Board/styles';

import { styles } from './styles';

type Props = {
  letter: Letter;
  measurements: {
    x: number;
    y: number;
    size: number;
  };
  translate: Animated.ValueXY;
};

const DraggedTile: React.FC<Props> = ({
  letter,
  measurements: { x, y },
  translate,
}) => {
  const wrapperStyle = {
    position: 'absolute',
    left: x - boardPadding,
    top: y - boardPadding,
    transform: translate.getTranslateTransform(),
  };

  return (
    <Animated.View style={wrapperStyle}>
      <View style={styles.tileWrapper}>
        <Tile letter={letter} />
      </View>
    </Animated.View>
  );
};

export default DraggedTile;
