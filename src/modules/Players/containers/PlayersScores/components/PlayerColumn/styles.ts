import EStyleSheet from 'react-native-extended-stylesheet';

import { color, font } from 'src/theme';

export const styles = EStyleSheet.create({
  container: {
    flexGrow: 1,
    borderRightColor: color.green,
    borderRightWidth: 1,
  },
  'container:last-child': {
    borderRightWidth: 0,
  },
  header: {
    backgroundColor: color.lightGreen,
    borderBottomWidth: 1,
    borderBottomColor: color.green,
  },
  name: {
    textAlign: 'center',
    fontSize: font.size.sm,
    color: color.white,
  },
  moves: {
    backgroundColor: color.white,
    flexGrow: 1,
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
