import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';

import Tile from 'src/modules/Tiles/components/Tile';
import { Letter } from 'src/modules/Dictionary/interfaces';

type Props = {
  letter: Letter;
  translate: Animated.ValueXY;
};

const DraggedTile: React.FC<Props> = ({ letter, translate }) => {
  const wrapperStyle = {
    position: 'absolute',
    left: 0,
    top: 0,
    transform: translate.getTranslateTransform(),
  };

  return (
    <Animated.View style={wrapperStyle}>
      <View style={styles.tileWrapper}>
        <Tile letter={letter} />
      </View>
    </Animated.View>
  );
};

export default DraggedTile;

const styles = StyleSheet.create({
  tileWrapper: {
    aspectRatio: 1,
    width: 20,
  },
});
