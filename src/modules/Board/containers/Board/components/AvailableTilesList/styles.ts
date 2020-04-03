import EStyleSheet from 'react-native-extended-stylesheet';
import { color } from 'src/theme';

export const tileMargin = 5;

export const styles = EStyleSheet.create({
  container: {
    position: 'relative',
    marginTop: 20,
  },
  tileWrapper: {
    position: 'relative',
    aspectRatio: 1,
    width: 40,
    marginRight: tileMargin,
  },
  amount: {
    position: 'absolute',
    bottom: -22,
    width: '100%',
    textAlign: 'center',
    color: color.lightGreen,
  },
  'tileWrapper:last-child': {
    marginRight: 0,
  },
});
