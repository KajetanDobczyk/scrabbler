import EStyleSheet from 'react-native-extended-stylesheet';

import { color } from 'src/theme';

export const boardPadding = 20;

export const styles = EStyleSheet.create({
  container: {
    backgroundColor: color.green,
    paddingHorizontal: boardPadding,
    paddingBottom: boardPadding,
  },
});
