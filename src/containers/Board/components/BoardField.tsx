import React from 'react';
import { StyleSheet, View } from 'react-native';

import { color } from 'src/theme';

type Props = {
  x: number;
  y: number;
};

const BoardField: React.FC<Props> = ({ x, y }) => {
  return <View style={styles.container}></View>;
};

export default BoardField;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: color.lightGreen,
    borderColor: color.green,
    borderWidth: 2,
  },
});
