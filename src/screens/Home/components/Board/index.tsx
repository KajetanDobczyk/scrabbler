import React from 'react';
import { StyleSheet, View } from 'react-native';

import { color } from 'src/theme';

type Props = {};

const Board: React.FC<Props> = () => <View style={styles.container}></View>;

export default Board;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: color.lightGreen,
  },
});
