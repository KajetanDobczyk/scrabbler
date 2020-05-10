import { StyleSheet } from 'react-native';

import { color } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.green,
    padding: 20,
    borderRadius: 4,
  },
  header: {
    color: color.white,
    marginBottom: 20,
  },
  tilesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  tileWrapper: {
    width: 25,
    marginRight: 8,
    marginBottom: 8,
  },
});
