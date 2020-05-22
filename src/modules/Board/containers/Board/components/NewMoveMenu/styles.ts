import EStyleSheet from 'react-native-extended-stylesheet';

import { color } from 'src/theme';

export const styles = EStyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: color.green,
    paddingHorizontal: 20,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 5,
  },
  button: {
    width: 25,
    height: 25,
    backgroundColor: color.lightGreen,
    borderRadius: 2,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
