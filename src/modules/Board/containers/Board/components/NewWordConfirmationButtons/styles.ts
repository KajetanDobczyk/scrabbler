import { StyleSheet } from 'react-native';

import { color } from 'src/theme';

import { boardPadding } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: boardPadding,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButton: {
    marginRight: 10,
    backgroundColor: color.red,
  },
  acceptButton: {
    backgroundColor: color.lightGreen,
  },
  buttonIcon: {
    fontSize: 30,
    textAlign: 'center',
    color: color.white,
  },
});
