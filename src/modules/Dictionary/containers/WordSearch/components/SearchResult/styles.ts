import { StyleSheet } from 'react-native';

import { color, font } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
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
  description: {
    marginBottom: 20,
  },
  comments: {
    paddingTop: 20,
    borderTopColor: color.black,
    borderTopWidth: 1,
  },
});
