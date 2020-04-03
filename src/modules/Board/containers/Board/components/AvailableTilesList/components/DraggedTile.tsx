import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';

import Tile from 'src/modules/Tiles/components/Tile';

type Props = {
  translate: Animated.ValueXY;
};

const DraggedTile: React.FC<Props> = ({ translate }) => {
  const style = {
    position: 'absolute',
    left: 0,
    top: 0,
    transform: translate.getTranslateTransform(),
  };

  return (
    <Animated.View style={style}>
      <View style={styles.tileWrapper}>
        <Tile letter={'i'} />
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
