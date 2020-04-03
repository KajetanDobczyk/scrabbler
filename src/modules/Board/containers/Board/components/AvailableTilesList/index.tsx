import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import Tile from 'src/modules/Tiles/components/Tile';
import { selectTilesAmount } from 'src/modules/Board/store/slice';
import { Letter } from 'src/modules/Dictionary/interfaces';

import { styles } from './styles';

const AvailableTilesList = () => {
  const tilesAmount = useSelector(selectTilesAmount);

  const letters = Object.keys(tilesAmount);

  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default AvailableTilesList;
