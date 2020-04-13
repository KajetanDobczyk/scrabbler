import React, { useEffect } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';

import { selectTilesList } from 'src/modules/Board/store/selectors';
import { Letter } from 'src/modules/Dictionary/interfaces';
import { setTilesListMeasurements } from 'src/modules/Board/store/slice';
import { ITileMeasurements } from 'src/modules/Board/interfaces';

import { styles } from './styles';
import TilesListElement from './components/TilesListElement';

const TilesList = () => {
  const dispatch = useDispatch();
  const tilesList = useSelector(selectTilesList);

  useEffect(() => {
    measureAllTiles();
  }, []);

  const tilesRefs: Record<string, View | null> = {};

  const measureAllTiles = () => {
    let measurements: Record<string, ITileMeasurements> = {};

    Object.keys(tilesRefs).forEach((letter) => {
      const element = tilesRefs[letter];

      if (!element) {
        return;
      }

      element.measureInWindow((x: number, y: number, width: number) => {
        measurements[letter] = {
          x,
          y: y + 10,
          size: width,
        };
      });
    });

    setTimeout(() => {
      dispatch(setTilesListMeasurements(measurements));
    }, 300);
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
          <TilesListElement
            key={letter}
            letter={letter}
            tile={tilesList[letter]}
            index={i}
            listLength={availableTiles.length}
            onSetTileRef={setTileRef(letter)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default TilesList;
