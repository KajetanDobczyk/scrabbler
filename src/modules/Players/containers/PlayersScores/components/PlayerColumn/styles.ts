import { StyleSheet, Dimensions } from 'react-native';

import { color, font } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    borderRightColor: color.black,
    borderRightWidth: 1,
  },
  header: {
    backgroundColor: color.lightGreen,
  },
  name: {
    textAlign: 'center',
    fontSize: font.size.sm,
    color: color.white,
    borderBottomWidth: 1,
    borderBottomColor: color.green,
  },
  move: {
    position: 'relative',
    height: 150,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: color.green,
  },
  word: {},
  points: {
    position: 'absolute',
    bottom: 0,
    right: 2,
    fontSize: font.size.sm,
  },
});
