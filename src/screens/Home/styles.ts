import { StyleSheet } from 'react-native';

import { color } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.green,
    flex: 1,
  },
  button: {
    backgroundColor: color.lightGreen,
    marginTop: 10,
    borderRadius: 4,
    padding: 10,
    width: 150,
  },
  buttonLabel: {
    color: color.white,
  },
});
