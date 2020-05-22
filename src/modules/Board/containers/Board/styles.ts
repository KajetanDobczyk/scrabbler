import EStyleSheet from 'react-native-extended-stylesheet';

import { color } from 'src/theme';

export const styles = EStyleSheet.create({
  container: {
    backgroundColor: color.green,
  },
  tilesListWrapper: {
    flexGrow: 1,
    backgroundColor: color.green,
    paddingHorizontal: 20,
  },
});
