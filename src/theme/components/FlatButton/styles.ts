import { StyleSheet } from 'react-native';

import { color, font } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: color.lightGreen,
    borderRadius: 4,
    padding: 10,
  },
  disabled: {
    opacity: 0.3,
  },
  label: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: font.size.sm,
    color: color.white,
  },
});
