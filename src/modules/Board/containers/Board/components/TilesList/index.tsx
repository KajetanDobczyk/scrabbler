import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

import { selectTilesList } from 'src/modules/Board/store/selectors';
import Tile from 'src/modules/Tiles/components/Tile';
import { Letter } from 'src/modules/Dictionary/interfaces';
import { setTilesListMeasurements } from 'src/modules/Board/store/slice';

import { styles } from './styles';

const TilesList = ({}) => {
  const dispatch = useDispatch();
  const tilesList = useSelector(selectTilesList);

  const tilesRefs: Record<string, View | null> = {};

  const measureAllTiles = () => {
    let measurements: Record<
      string,
      { x: number; y: number; size: number }
    > = {};

    Object.keys(tilesRefs).forEach((letter) => {
      const element = tilesRefs[letter];

      if (!element) {
        return;
      }

      element.measureInWindow((x: number, y: number, width: number) => {
        measurements[letter] = {
          x,
          y,
          size: width,
        };
      });
    });

    setTimeout(() => {
      dispatch(setTilesListMeasurements(measurements));
    }, 1);
  };

  const setTileRef = (letter: string) => (ref: View | null) => {
    tilesRefs[letter] = ref;
  };

  const availableTiles = Object.keys(tilesList) as Letter[];

  return (
    <ScrollView
      horizontal
      onLayout={measureAllTiles}
      onMomentumScrollEnd={measureAllTiles}
    >
      <View style={styles.container}>
        {availableTiles.map((letter, i) => (
          <View
            key={letter}
            style={EStyleSheet.child(
              styles,
              'tileWrapper',
              i,
              availableTiles.length,
            )}
            ref={setTileRef(letter)}
          >
            <Tile letter={letter as Letter} />
            <Text style={styles.amount}>{tilesList[letter].amountLeft}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default TilesList;
