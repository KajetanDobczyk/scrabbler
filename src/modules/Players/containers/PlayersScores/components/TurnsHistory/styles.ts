import EStyleSheet from 'react-native-extended-stylesheet';

import { color } from 'src/theme';

export const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  playerMoves: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: color.white,
    borderRightWidth: 1,
    borderColor: color.black,
  },
  'playerMoves:last-child': {
    borderRightWidth: 0,
  },
});
