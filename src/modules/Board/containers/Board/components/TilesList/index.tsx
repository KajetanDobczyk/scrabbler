import React, { useEffect } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectTilesAmount,
  selectDraggedTile,
} from 'src/modules/Board/store/selectors';
import { setTilesList } from 'src/modules/Board/store/slice';
import Tile from 'src/modules/Tiles/components/Tile';
import { Letter } from 'src/modules/Dictionary/interfaces';
import { MEASURE_TIMEOUT } from 'src/config';

import { styles } from './styles';

const tilesRefs: Record<string, View | null> = {};
const tilesMeasurements: Record<
  string,
  { x: number; y: number; size: number }
> = {};
const measureTimeouts: Record<string, number> = {};

const TilesList = ({}) => {
  const dispatch = useDispatch();
  const tilesAmount = useSelector(selectTilesAmount);
  const draggedTile = useSelector(selectDraggedTile);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setTilesList({ tilesRefs, tilesMeasurements }));
    }, MEASURE_TIMEOUT);
  }, []);

  useEffect(() => {
    if (!draggedTile) {
      measureAllTiles();
    }
  }, [draggedTile]);

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

  const measureAllTiles = () => {
    Object.keys(tilesRefs).forEach(measureTile);

    setTimeout(() => {
      dispatch(setTilesList({ tilesRefs, tilesMeasurements }));
    }, MEASURE_TIMEOUT);
  };

  const setTileRef = (letter: string) => (ref: View | null) => {
    tilesRefs[letter] = ref;
    measureTile(letter);
  };

  const availableTiles = Object.keys(tilesAmount);

  return (
    <View style={styles.container}>
      <FlatList
        data={availableTiles.map((letter, index) => ({
          key: letter,
          amount: tilesAmount[letter as Letter],
          index,
        }))}
        horizontal
        onMomentumScrollEnd={measureAllTiles}
        renderItem={({ item }) =>
          item.amount ? (
            <View
              style={EStyleSheet.child(
                styles,
                'tileWrapper',
                item.index,
                availableTiles.length,
              )}
              ref={setTileRef(item.key)}
            >
              <Tile letter={item.key as Letter} />
              <Text style={styles.amount}>{item.amount}</Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default TilesList;
