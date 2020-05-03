import { StyleSheet } from 'react-native';

import { color, font } from 'src/theme';

export const styles = StyleSheet.create({
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
