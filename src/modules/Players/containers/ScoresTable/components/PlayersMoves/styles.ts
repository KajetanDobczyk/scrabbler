import EStyleSheet from 'react-native-extended-stylesheet';

import { color } from 'src/theme';

export const styles = EStyleSheet.create({
  container: {
    position: 'relative',
    flexBasis: 0,
    flexGrow: 1,
    backgroundColor: color.white,
    borderRightColor: color.green,
    borderRightWidth: 1,
  },
  'container:last-child': {
    borderRightWidth: 0,
  },
});
