import React, { memo } from 'react';
import { Animated } from 'react-native';
import Modal from 'react-native-modal';

import Tile from 'src/modules/Tiles/components/Tile';
import { Letter } from 'src/modules/Dictionary/interfaces';
import { boardPadding } from 'src/modules/Board/containers/Board/styles';

type Props = {
  x: number;
  y: number;
  letter: Letter;
  size: number;
  translate: Animated.ValueXY;
};

const DraggedTile: React.FC<Props> = ({ x, y, letter, size, translate }) => {
  const wrapperStyle = {
    position: 'absolute',
    left: x - boardPadding,
    top: y - boardPadding,
    width: size,
    transform: translate.getTranslateTransform(),
    opacity: 0.7,
  };

  return (
    <Modal animationIn="fadeIn" animationOut="fadeOut" hasBackdrop={false}>
      <Animated.View style={wrapperStyle}>
        <Tile letter={letter} />
      </Animated.View>
    </Modal>
  );
};

export default memo(DraggedTile);
