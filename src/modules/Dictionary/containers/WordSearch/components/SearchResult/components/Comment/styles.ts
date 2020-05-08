import { StyleSheet } from 'react-native';

import { color, font } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  author: {
    fontWeight: 'bold',
    color: color.green,
  },
  date: {
    fontSize: font.size.sm,
    opacity: 0.4,
  },
  content: {},
});
