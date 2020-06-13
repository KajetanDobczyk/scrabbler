import EStyleSheet from 'react-native-extended-stylesheet';

import { color } from 'src/theme';

export const styles = EStyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
    backgroundColor: color.green,
    padding: 2.5,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 5,
    paddingHorizontal: 2.5,
    paddingBottom: 2.5,
  },
  leftButtonWrapper: {
    marginRight: 5,
  },
});
