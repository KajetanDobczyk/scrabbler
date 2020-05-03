import { StyleSheet } from 'react-native';

import { color, font } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  word: {
    fontSize: font.size.xl,
    marginBottom: 5,
  },
  isAllowedText: {
    marginBottom: 20,
  },
  allowed: {
    color: color.green,
  },
  unallowed: {
    color: color.red,
  },
  description: {},
});
