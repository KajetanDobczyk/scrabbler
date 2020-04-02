import { StyleSheet } from 'react-native';

import { color } from 'src/theme';

export const styles = StyleSheet.create({
  container: {},
  board: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: color.green,
  },
  row: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  textInput: {
    opacity: 0,
  },
});
