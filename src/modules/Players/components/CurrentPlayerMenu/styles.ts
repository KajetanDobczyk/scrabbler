import { StyleSheet } from 'react-native';

import { color } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 20,
    height: 20,
    backgroundColor: color.lightGreen,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
