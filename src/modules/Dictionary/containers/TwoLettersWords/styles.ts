import { StyleSheet } from 'react-native';

import { color } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  scrollContainer: {
    padding: 20,
  },
  letterRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  letter: {
    width: 25,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: color.green,
  },
  letterWords: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  word: {
    textTransform: 'uppercase',
    marginRight: 10,
    marginBottom: 2,
  },
});
