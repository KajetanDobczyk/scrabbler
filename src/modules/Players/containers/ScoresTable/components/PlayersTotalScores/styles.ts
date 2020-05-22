import EStyleSheet from 'react-native-extended-stylesheet';

import { color } from 'src/theme';

export const styles = EStyleSheet.create({
  container: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    backgroundColor: color.lightGreen,
  },
  pointsWrapper: {
    flexBasis: 0,
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    backgroundColor: color.lightGreen,
    borderRightColor: color.green,
    borderRightWidth: 1,
  },
  'pointsWrapper:last-child': {
    borderRightWidth: 0,
  },
  points: {
    fontWeight: 'bold',
    color: color.white,
  },
});
