import EStyleSheet from 'react-native-extended-stylesheet';

import { color } from 'src/theme';

export const styles = EStyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
    backgroundColor: color.green,
    paddingHorizontal: 20,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingBottom: 55,
  },
  button: {
    width: 40,
    height: 40,
  },
});
