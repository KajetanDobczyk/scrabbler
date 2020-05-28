import { StyleSheet } from 'react-native';

import { color, font } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: color.lightGreen,
  },
  playerRow: {
    flexBasis: 0,
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderColor: color.green,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  'playerRow:last-child': {
    borderRightWidth: 0,
  },
  name: {
    fontSize: font.size.xs,
    color: color.green,
  },
  points: {
    color: color.green,
    fontSize: font.size.sm,
    fontWeight: 'bold',
  },
  currentPlayer: {
    color: color.white,
  },
});
