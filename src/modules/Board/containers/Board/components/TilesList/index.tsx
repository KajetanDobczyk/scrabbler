import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  View,
  Text,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import { selectTilesAmount } from 'src/modules/Board/store/selectors';
import Tile from 'src/modules/Tiles/components/Tile';
import { Letter } from 'src/modules/Dictionary/interfaces';

import { styles } from './styles';

type Props = {
  onMomentumScrollEnd: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  onSetTileRef: (letter: string) => (ref: View | null) => void;
};

const TilesList: React.FC<Props> = ({ onMomentumScrollEnd, onSetTileRef }) => {
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
        onMomentumScrollEnd={onMomentumScrollEnd}
        renderItem={({ item }) =>
          item.amount ? (
            <View
              style={EStyleSheet.child(
                styles,
                'tileWrapper',
                item.index,
                letters.length,
              )}
              ref={onSetTileRef(item.key)}
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
