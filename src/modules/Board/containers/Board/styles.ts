import EStyleSheet from 'react-native-extended-stylesheet';

import { color } from 'src/theme';

export const styles = EStyleSheet.create({
  container: {
    backgroundColor: color.green,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  tilesListWrapper: {
    marginTop: 13,
  },
});
