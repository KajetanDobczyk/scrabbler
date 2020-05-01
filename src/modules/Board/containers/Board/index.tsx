import React, { useState } from 'react';
import { View, Animated } from 'react-native';
import {
  State,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

import { Letter } from 'src/modules/Dictionary/interfaces';

import DraggedTile from './components/DraggedTile';
import GameBoard from './components/GameBoard';
import TilesList from './components/TilesList';
import BlankLetterModal from './components/BlankLetterModal';
import NewMoveConfirmationButtons from './components/NewMoveConfirmationButtons';
import {
  dropDraggedTile,
  initDraggedTileFromList,
  initDraggedTileFromBoard,
} from '../../store/thunks';
import { setDraggedTile } from '../../store/slice';
import { selectDraggedTile, selectBoardLayout } from '../../store/selectors';
import { styles } from './styles';

let x0 = 0;
let y0 = 0;
let dragInitialY = 0;

const Board = () => {
  const dispatch = useDispatch();
  const draggedTile = useSelector(selectDraggedTile);
  const layout = useSelector(selectBoardLayout);

  const [isBlankLetterModalVisible, setIsBlankLetterModalVisible] = useState(
    false,
  );

  const translate = new Animated.ValueXY({ x: 0, y: 0 });

  const onDragStart = (event: PanGestureHandlerGestureEvent) => {
    const { x, y } = event.nativeEvent;

    x0 = x;
    y0 = y;
    translate.setValue({ x: 0, y: 0 });

    if (dragInitialY > layout.size) {
      dispatch(initDraggedTileFromList(x));
    } else {
      dispatch(initDraggedTileFromBoard(x, y));
    }
  };

  const onDragEnd = (x: number, y: number, state: State) => {
    if (state === State.END && draggedTile) {
      if (draggedTile.letter === '?') {
        setIsBlankLetterModalVisible(true);
      } else {
        dispatch(dropDraggedTile(x, y));
      }
    }

    dragInitialY = 0;
    dispatch(setDraggedTile(null));
  };

  const onGestureEvent = (event: PanGestureHandlerGestureEvent) => {
    const { x, y } = event.nativeEvent;

    translate.setValue({ x: x - x0, y: y - y0 });
  };

  const onHandlerStateChange = (event: PanGestureHandlerGestureEvent) => {
    const { x, y, state } = event.nativeEvent;

    if (state === State.BEGAN) {
      dragInitialY = y;
    } else if (state === State.ACTIVE) {
      onDragStart(event);
    } else if (state === State.END || state === State.CANCELLED) {
      onDragEnd(x, y, state);
    }
  };

  return (
    <PanGestureHandler
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={onHandlerStateChange}
    >
      <View style={styles.container}>
        <GameBoard />
        <TilesList />
        <NewMoveConfirmationButtons />
        {draggedTile && (
          <DraggedTile
            draggedTile={draggedTile}
            size={draggedTile?.source === 'list' ? 40 : layout.tileSize}
            translate={translate}
          />
        )}
        {isBlankLetterModalVisible && (
          <BlankLetterModal
            onSelectLetter={(letter: Letter) => console.log(letter)}
            onClose={() => setIsBlankLetterModalVisible(false)}
          />
        )}
      </View>
    </PanGestureHandler>
  );
};

export default Board;
