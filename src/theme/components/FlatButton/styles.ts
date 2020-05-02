import { StyleSheet } from 'react-native';

import { color } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.lightGreen,
    marginTop: 10,
    borderRadius: 4,
    padding: 10,
    width: 150,
  },
  disabled: {
    opacity: 0.5,
    color: color.green,
  },
  label: {
    color: color.white,
  },
});
