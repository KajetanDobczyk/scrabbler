import React, { useState } from 'react';
import {
  FlatList,
  LongPressGestureHandler,
  LongPressGestureHandlerGestureEvent,
  State,
} from 'react-native-gesture-handler';
import { View, Animated, Platform, Text } from 'react-native';
import { useSelector } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import Modal from 'react-native-modal';

import Tile from 'src/modules/Tiles/components/Tile';
import { selectTilesAmount } from 'src/modules/Board/store/slice';
import { Letter } from 'src/modules/Dictionary/interfaces';
import { boardPadding } from 'src/modules/Board/containers/Board/styles';

import { styles } from './styles';
import DraggedTile from './components/DraggedTile';

const MEASURE_TIMEOUT = Platform.select({
  android: 300,
  ios: 100,
});

let tilesMeasurements: Record<
  string,
  { x: number; y: number; size: number }
> = {};
let measureTimeouts: Record<string, number> = {};

const AvailableTilesList = () => {
  const tilesAmount = useSelector(selectTilesAmount);
  const [draggedTile, setDraggedTile] = useState<Letter | null>(null);

  const letters = Object.keys(tilesAmount);

  let translate = new Animated.ValueXY({ x: 0, y: 0 });
  let x0 = 0;
  let y0 = 0;

  const tilesRefs: Record<string, View | null> = {};

  const findTouchedTile = (touchX: number) =>
    Object.keys(tilesRefs).find((letter) => {
      const { x, size } = tilesMeasurements[letter];

      return touchX + boardPadding - x >= 0 && touchX + boardPadding - x < size;
    });

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
    }
    if (state === State.END || state === State.CANCELLED) {
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
    <View style={styles.container}>
      <LongPressGestureHandler
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onHandlerStateChange}
      >
        <FlatList
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
      </LongPressGestureHandler>
      <Modal
        isVisible={!!draggedTile}
        animationIn="fadeIn"
        animationOut="fadeOut"
        hasBackdrop={false}
      >
        {draggedTile ? (
          <DraggedTile letter={draggedTile} translate={translate} />
        ) : (
          <View />
        )}
      </Modal>
    </View>
  );
};

export default AvailableTilesList;
