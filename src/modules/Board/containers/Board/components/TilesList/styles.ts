import EStyleSheet from 'react-native-extended-stylesheet';

import { color } from 'src/theme';

import { boardPadding } from '../../styles';

export const styles = EStyleSheet.create({
  container: {
    marginTop: boardPadding,
    height: 60,
  },
  tileWrapper: {
    position: 'relative',
    aspectRatio: 1,
    width: 40,
    marginRight: 5,
  },
  'tileWrapper:last-child': {
    marginRight: 0,
  },
  amount: {
    position: 'absolute',
    bottom: -22,
    width: '100%',
    textAlign: 'center',
    color: color.lightGreen,
  },
});
