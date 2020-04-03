import EStyleSheet from 'react-native-extended-stylesheet';

import { color } from 'src/theme';

export const styles = EStyleSheet.create({
  container: {
    marginTop: 20,
  },
  tileWrapper: {
    aspectRatio: 1,
    width: 40,
    marginRight: 5,
  },
  'tileWrapper:last-child': {
    marginRight: 0,
  },
});
