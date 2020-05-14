import { StyleSheet } from 'react-native';

import { color } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: color.lightGreen,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
