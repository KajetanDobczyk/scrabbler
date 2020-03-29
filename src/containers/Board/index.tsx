import React from 'react';
import { StyleSheet, View } from 'react-native';
import range from 'lodash/range';

import { color } from 'src/theme';
import { boardFields } from 'src/config/board';

import BoardField from './components/BoardField';

const Board = () => (
  <View style={styles.container}>
    {boardFields.map((row, y) => (
      <View key={y} style={styles.row}>
        {row.map((field, x) => (
          <BoardField key={x} x={x} y={y} bonus={field} />
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
