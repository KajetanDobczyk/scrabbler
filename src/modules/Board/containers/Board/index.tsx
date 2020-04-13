import React from 'react';
import { View, Animated, Platform } from 'react-native';
import {
  LongPressGestureHandler,
  LongPressGestureHandlerGestureEvent,
  State,
} from 'react-native-gesture-handler';
import isEmpty from 'lodash/isEmpty';
import { useDispatch, useSelector } from 'react-redux';

import { Letter } from 'src/modules/Dictionary/interfaces';
import { MEASURE_TIMEOUT } from 'src/config';

import DraggedTile from './components/DraggedTile';
import GameBoard from './components/GameBoard';
import TilesList from './components/TilesList';
import NewMoveConfirmationButtons from './components/NewMoveConfirmationButtons';
import { boardPadding, styles } from './styles';
import { dropBoardTile } from '../../store/thunks';
import { setDraggedTile } from '../../store/slice';
import { selectDraggedTile } from '../../store/selectors';

let x0 = 0;
let y0 = 0;

let tilesMeasurements: Record<
  string,
  { x: number; y: number; size: number }
> = {};
let measureTimeouts: Record<string, number> = {};

const Board = () => {
  const dispatch = useDispatch();
  const draggedTile = useSelector(selectDraggedTile);

  const translate = new Animated.ValueXY({ x: 0, y: 0 });
  const tilesRefs: Record<string, View | null> = {};

  const findTouchedLetter = (touchX: number) => {
    if (isEmpty(tilesMeasurements)) {
      return;
    }

    const foundTile = Object.keys(tilesRefs).find((letter) => {
      const { x, size } = tilesMeasurements[letter];

      return touchX + boardPadding - x >= 0 && touchX + boardPadding - x < size;
    });

    return (foundTile as Letter) || undefined;
  };

  const onDragStart = (event: LongPressGestureHandlerGestureEvent) => {
    const { x, y } = event.nativeEvent;
    const letter = findTouchedLetter(x);

    if (letter && letter !== draggedTile?.letter) {
      x0 = x;
      y0 = y;
      dispatch(setDraggedTile({ letter }));
    }
  };

  const onDragEnd = (x: number, y: number, state: State) => {
    x0 = 0;
    y0 = 0;

    if (state === State.END && draggedTile) {
      dispatch(dropBoardTile(x, y, draggedTile?.letter!));
      measureAllTiles();
    }

    dispatch(setDraggedTile(null));
    // dispatch(resetBoardFieldsHighlights());
  };

  const onGestureEvent = (event: LongPressGestureHandlerGestureEvent) => {
    const { x, y } = event.nativeEvent;

    translate.setValue({ x: x - x0, y: y - y0 });
    // dispatch(updateBoardFieldsHighlights(x, y));
  };

  const onHandlerStateChange = (event: LongPressGestureHandlerGestureEvent) => {
    const { x, y, state } = event.nativeEvent;

    if (state === State.ACTIVE) {
      onDragStart(event);
    } else if (state === State.END || state === State.CANCELLED) {
      onDragEnd(x, y, state);
    }
  };

  const measureAllTiles = () => {
    Object.keys(tilesRefs).forEach(measureTile);
  };

  const measureTile = (letter: string) => {
    // setTimeout is required, otherwise all measurements will be 0
    if (measureTimeouts[letter]) {
      clearTimeout(measureTimeouts[letter]);
    }

    measureTimeouts[letter] = setTimeout(() => {
      const element = tilesRefs[letter];

      if (!element || draggedTile) {
        return;
      }

      element.measureInWindow((x: number, y: number, width: number) => {
        tilesMeasurements[letter] = { x, y, size: width };
      });
    }, MEASURE_TIMEOUT);
  };

  const setTileRef = (letter: string) => (ref: View | null) => {
    tilesRefs[letter] = ref;
    measureTile(letter);
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
        <TilesList
          onMomentumScrollEnd={measureAllTiles}
          onSetTileRef={setTileRef}
        />
        <NewMoveConfirmationButtons />
        {draggedTile && (
          <DraggedTile
            letter={draggedTile.letter}
            x={tilesMeasurements[draggedTile.letter].x}
            y={tilesMeasurements[draggedTile.letter].y + boardPadding}
            size={40}
            translate={translate}
          />
        )}
      </View>
    </LongPressGestureHandler>
  );
};

export default Board;
