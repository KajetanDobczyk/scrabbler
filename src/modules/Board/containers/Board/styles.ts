import { StyleSheet } from 'react-native';

import { color } from 'src/theme';

export const boardPadding = 20;

export const styles = StyleSheet.create({
  container: {
    padding: boardPadding,
  },
  board: {
    position: 'relative',
    width: '100%',
    aspectRatio: 1,
    zIndex: 0,
    backgroundColor: color.green,
  },
  row: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  tileWrapper: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  textInput: {
    opacity: 0,
  },
});
