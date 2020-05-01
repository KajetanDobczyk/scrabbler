import { StyleSheet } from 'react-native';

import { color, font } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingTop: 5,
    paddingHorizontal: 5,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: color.green,
  },
  wordRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  word: {
    textTransform: 'uppercase',
    fontSize: font.size.sm,
  },
  wordPoints: {
    fontSize: font.size.sm,
  },
  movePoints: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    fontSize: font.size.sm,
  },
});
