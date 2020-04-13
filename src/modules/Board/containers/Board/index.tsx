import React from 'react';
import { View, Animated } from 'react-native';
import {
  LongPressGestureHandler,
  LongPressGestureHandlerGestureEvent,
  State,
} from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

import DraggedTile from './components/DraggedTile';
import GameBoard from './components/GameBoard';
import TilesList from './components/TilesList';
import NewMoveConfirmationButtons from './components/NewMoveConfirmationButtons';
import { styles } from './styles';
import { dropDraggedTile, initDraggedTileFromList } from '../../store/thunks';
import { setDraggedTile } from '../../store/slice';
import { selectDraggedTile, selectBoardLayout } from '../../store/selectors';

let x0 = 0;
let y0 = 0;

const Board = () => {
  const dispatch = useDispatch();
  const draggedTile = useSelector(selectDraggedTile);
  const layout = useSelector(selectBoardLayout);

  const translate = new Animated.ValueXY({ x: 0, y: 0 });

  const onDragStart = (event: LongPressGestureHandlerGestureEvent) => {
    const { x, y } = event.nativeEvent;

    if (y > layout.size) {
      x0 = x;
      y0 = y;

      dispatch(initDraggedTileFromList(x));
    } else {
      //TODO: Init dragged tile from board
    }
  };

  const onDragEnd = (x: number, y: number, state: State) => {
    x0 = 0;
    y0 = 0;

    if (state === State.END && draggedTile) {
      dispatch(dropDraggedTile(x, y));
    }

    dispatch(setDraggedTile(null));
  };

  const onGestureEvent = (event: LongPressGestureHandlerGestureEvent) => {
    const { x, y } = event.nativeEvent;

    translate.setValue({ x: x - x0, y: y - y0 });
  };

  const onHandlerStateChange = (event: LongPressGestureHandlerGestureEvent) => {
    const { x, y, state } = event.nativeEvent;

    if (state === State.ACTIVE) {
      onDragStart(event);
    } else if (state === State.END || state === State.CANCELLED) {
      onDragEnd(x, y, state);
    }
  };

  return (
    <LongPressGestureHandler
      minDurationMs={100}
      maxDist={Number.MAX_SAFE_INTEGER}
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={onHandlerStateChange}
    >
      <View style={styles.container}>
        <GameBoard />
        <TilesList />
        <NewMoveConfirmationButtons />
        {draggedTile && (
          <DraggedTile
            x={x0}
            y={y0}
            letter={draggedTile.letter}
            size={40}
            translate={translate}
          />
        )}
      </View>
    </LongPressGestureHandler>
  );
};

export default Board;
