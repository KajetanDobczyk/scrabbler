import EStyleSheet from 'react-native-extended-stylesheet';

import { color, font } from 'src/theme';

export const styles = EStyleSheet.create({
  tileWrapper: {
    position: 'relative',
    aspectRatio: 1,
    width: 40,
    marginRight: 10,
  },
  'tileWrapper:last-child': {
    marginRight: 0,
  },
  amount: {
    position: 'absolute',
    width: 15,
    height: 15,
    borderRadius: 10,
    top: -5,
    right: -5,
    textAlign: 'center',
    backgroundColor: color.lightGreen,
    color: color.white,
    fontSize: font.size.sm,
  },
});
