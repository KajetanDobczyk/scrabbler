import EStyleSheet from 'react-native-extended-stylesheet';

import { color, font } from 'src/theme';

export const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: color.black,
  },
  playerFooter: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: color.white,
    borderRightWidth: 1,
    borderColor: color.black,
  },
  'playerFooter:last-child': {
    borderRightWidth: 0,
  },
  playerPoints: {
    fontSize: font.size.sm,
    color: color.black,
  },
});
