import { StyleSheet } from 'react-native';

import { color } from 'src/theme';

import { boardPadding } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: boardPadding,
  },
  button: {
    width: 20,
    height: 40,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIcon: {
    textAlign: 'center',
    color: color.white,
  },
  buttonIconPressed: {
    color: color.lightGreen,
  },
});
