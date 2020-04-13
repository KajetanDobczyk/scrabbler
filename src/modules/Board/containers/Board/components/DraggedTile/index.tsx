import React, { memo } from 'react';
import { Animated } from 'react-native';
import Modal from 'react-native-modal';
import { useSelector } from 'react-redux';

import Tile from 'src/modules/Tiles/components/Tile';
import { boardPadding } from 'src/modules/Board/containers/Board/styles';
import { selectDraggedTile } from 'src/modules/Board/store/selectors';

type Props = {
  size: number;
  translate: Animated.ValueXY;
};

const DraggedTile: React.FC<Props> = ({ size, translate }) => {
  const draggedTile = useSelector(selectDraggedTile);

  if (!draggedTile) {
    return null;
  }

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
      isVisible={true}
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
