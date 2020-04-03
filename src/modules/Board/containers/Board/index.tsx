import React, { useState } from 'react';
import { View, Animated, Platform, Text } from 'react-native';
import {
  FlatList,
  LongPressGestureHandler,
  LongPressGestureHandlerGestureEvent,
  State,
} from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import isEmpty from 'lodash/isEmpty';

import Tile from 'src/modules/Tiles/components/Tile';
import { selectTilesAmount } from 'src/modules/Board/store/slice';
import { Letter } from 'src/modules/Dictionary/interfaces';

import DraggedTile from './components/DraggedTile';
import GameBoard from './components/GameBoard';
import { boardPadding, styles } from './styles';

const MEASURE_TIMEOUT = Platform.select({
  android: 300,
  ios: 100,
});

let x0 = 0;
let y0 = 0;

let tilesMeasurements: Record<
  string,
  { x: number; y: number; size: number }
> = {};
let measureTimeouts: Record<string, number> = {};

const Board = () => {
  const tilesAmount = useSelector(selectTilesAmount);
  const [draggedTile, setDraggedTile] = useState<Letter | null>(null);

  const letters = Object.keys(tilesAmount);

  let translate = new Animated.ValueXY({ x: 0, y: 0 });

  const tilesRefs: Record<string, View | null> = {};

  const findTouchedTile = (touchX: number) => {
    if (isEmpty(tilesMeasurements)) {
      return;
    }

    return Object.keys(tilesRefs).find((letter) => {
      const { x, size } = tilesMeasurements[letter];

      return touchX + boardPadding - x >= 0 && touchX + boardPadding - x < size;
    });
  };

  const onDragStart = (event: LongPressGestureHandlerGestureEvent) => {
    const { x, y } = event.nativeEvent;
    const tile = findTouchedTile(x);

    if (tile && tile !== draggedTile) {
      x0 = x;
      y0 = y;
      setDraggedTile(tile as Letter);
    }
  };

  const onDragEnd = () => {
    x0 = 0;
    y0 = 0;
    setDraggedTile(null);
  };

  const onGestureEvent = (event: LongPressGestureHandlerGestureEvent) => {
    const { x, y } = event.nativeEvent;

    translate.setValue({ x: x - x0, y: y - y0 });
  };

  const onHandlerStateChange = (event: LongPressGestureHandlerGestureEvent) => {
    const { state } = event.nativeEvent;

    if (state === State.ACTIVE) {
      onDragStart(event);
    } else if (state === State.END || state === State.CANCELLED) {
      onDragEnd();
    }
  };

  const measureAllTiles = () => {
    const itemKeys = Object.keys(tilesRefs);
    itemKeys.forEach(measureTile);
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
      minDurationMs={200}
      maxDist={Number.MAX_SAFE_INTEGER}
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={onHandlerStateChange}
    >
      <View style={styles.container}>
        <GameBoard />
        <FlatList
          style={styles.list}
          data={letters.map((letter, index) => ({
            key: letter,
            amount: tilesAmount[letter as Letter],
            index,
          }))}
          horizontal
          onMomentumScrollEnd={measureAllTiles}
          renderItem={({ item }) => (
            <View
              style={EStyleSheet.child(
                styles,
                'tileWrapper',
                item.index,
                letters.length,
              )}
              ref={setTileRef(item.key)}
            >
              <Tile letter={item.key as Letter} />
              <Text style={styles.amount}>{item.amount}</Text>
            </View>
          )}
        />
        <DraggedTile
          letter={draggedTile}
          measurements={
            draggedTile
              ? tilesMeasurements[draggedTile]
              : { x: 0, y: 0, size: 0 }
          }
          translate={translate}
        />
      </View>
    </LongPressGestureHandler>
  );
};

export default Board;
