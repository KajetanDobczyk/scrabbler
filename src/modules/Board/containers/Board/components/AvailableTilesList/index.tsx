import React, { useState } from 'react';
import {
  FlatList,
  LongPressGestureHandler,
  LongPressGestureHandlerGestureEvent,
  State,
} from 'react-native-gesture-handler';
import { View, Animated } from 'react-native';
import { useSelector } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import Modal from 'react-native-modal';

import Tile from 'src/modules/Tiles/components/Tile';
import { selectTilesAmount } from 'src/modules/Board/store/slice';
import { Letter } from 'src/modules/Dictionary/interfaces';

import { styles } from './styles';
import DraggedTile from './components/DraggedTile';

const AvailableTilesList = () => {
  const tilesAmount = useSelector(selectTilesAmount);
  const [draggedTile, setDraggedTile] = useState<Letter | null>(null);

  const letters = Object.keys(tilesAmount);

  let translate = new Animated.ValueXY({ x: 0, y: 0 });
  let x0 = 0;
  let y0 = 0;

  const onDragStart = (event: LongPressGestureHandlerGestureEvent) => {
    const { x, y } = event.nativeEvent;

    setDraggedTile('i');
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
          renderItem={({ item }) => (
            <View
              style={EStyleSheet.child(
                styles,
                'tileWrapper',
                item.index,
                letters.length,
              )}
            >
              <Tile letter={item.key as Letter} />
            </View>
          )}
        />
      </LongPressGestureHandler>
      <Modal
        isVisible={!!draggedTile}
        animationIn="fadeIn"
        animationOut="fadeOut"
        hasBackdrop={false}
        style={styles.modal}
      >
        {draggedTile ? <DraggedTile translate={translate} /> : <View />}
      </Modal>
    </View>
  );
};

export default AvailableTilesList;
