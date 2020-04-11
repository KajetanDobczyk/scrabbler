import EStyleSheet from 'react-native-extended-stylesheet';

import { color, font } from 'src/theme';

export const styles = EStyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: color.white,
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: color.black,
  },
  playerHeader: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: color.white,
    borderRightWidth: 1,
    borderColor: color.black,
  },
  'playerHeader:last-child': {
    borderRightWidth: 0,
  },
  playerName: {
    fontSize: font.size.sm,
    color: color.black,
  },
});
