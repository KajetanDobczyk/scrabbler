import React from 'react';
import { StyleSheet, View } from 'react-native';
import range from 'lodash/range';

import { color } from 'src/theme';
import { boardWidth, boardHeight } from 'src/config/board';

import BoardField from './components/BoardField';

const Board = () => (
  <View style={styles.container}>
    {range(boardHeight).map(y => (
      <View style={styles.row}>
        {range(boardWidth).map(x => (
          <BoardField key={x} x={x} y={0} />
        ))}
      </View>
    ))}
  </View>
);

export default Board;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: color.green,
  },
  row: {
    flexGrow: 1,
    flexDirection: 'row',
  },
});
