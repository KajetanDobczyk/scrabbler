import { StyleSheet } from 'react-native';

import { color } from 'src/theme';

import { boardPadding } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: boardPadding,
    paddingLeft: boardPadding,
  },
  button: {
    width: 20,
    height: 40,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lastButton: {
    marginRight: 0,
  },
  buttonIcon: {
    textAlign: 'center',
    color: color.white,
  },
  buttonIconPressed: {
    color: color.lightGreen,
  },
});
