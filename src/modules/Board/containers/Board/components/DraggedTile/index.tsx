import React, { memo } from 'react';
import { Animated } from 'react-native';
import Modal from 'react-native-modal';

import Tile from 'src/modules/Tiles/components/Tile';
import { boardPadding } from 'src/modules/Board/containers/Board/styles';
import { IDraggedTile } from 'src/modules/Board/interfaces';

type Props = {
  draggedTile: IDraggedTile;
  size: number;
  translate: Animated.ValueXY;
};

const DraggedTile: React.FC<Props> = ({ draggedTile, size, translate }) => {
  const wrapperStyle = {
    position: 'absolute',
    left: draggedTile.x0 - boardPadding,
    top: draggedTile.y0 - boardPadding,
    width: size,
    transform: translate.getTranslateTransform(),
    opacity: 0.7,
  };

  return (
    <Modal
      isVisible
      animationIn="fadeIn"
      animationOut="fadeOut"
      hasBackdrop={false}
    >
      <Animated.View style={wrapperStyle}>
        <Tile letter={draggedTile.letter} />
      </Animated.View>
    </Modal>
  );
};

export default memo(DraggedTile);
