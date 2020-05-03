import { StyleSheet } from 'react-native';

import { color } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: color.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wordsRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  word: { marginRight: 5 },
});
