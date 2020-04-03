import React from 'react';
import { Animated, View } from 'react-native';
import Modal from 'react-native-modal';

import Tile from 'src/modules/Tiles/components/Tile';
import { Letter } from 'src/modules/Dictionary/interfaces';
import { boardPadding } from 'src/modules/Board/containers/Board/styles';

import { styles } from './styles';

type Props = {
  letter: Letter | null;
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
    <Modal
      isVisible={!!letter}
      animationIn="fadeIn"
      animationOut="fadeOut"
      hasBackdrop={false}
    >
      {letter ? (
        <Animated.View style={wrapperStyle}>
          <View style={styles.tileWrapper}>
            <Tile letter={letter} />
          </View>
        </Animated.View>
      ) : (
        <View />
      )}
    </Modal>
  );
};

export default DraggedTile;
