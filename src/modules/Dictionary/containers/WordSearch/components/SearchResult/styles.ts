import { StyleSheet } from 'react-native';

import { color, font } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  word: {
    fontSize: font.size.xl,
    marginBottom: 10,
  },
  isAllowedText: {},
  allowed: {
    color: color.green,
  },
  unallowed: {
    color: color.red,
  },
});
