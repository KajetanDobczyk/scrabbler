import { StyleSheet } from 'react-native';

import { color } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    aspectRatio: 1,
    zIndex: 0,
    backgroundColor: color.green,
    paddingHorizontal: 20,
    paddingBottom: 20,
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
});
