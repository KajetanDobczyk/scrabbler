import EStyleSheet from 'react-native-extended-stylesheet';

import { color, font } from 'src/theme';

export const styles = EStyleSheet.create({
  container: {
    flexBasis: 0,
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
  totalPoints: {
    fontSize: font.size.sm,
    fontWeight: 'bold',
    textAlign: 'right',
    padding: 5,
  },
});
