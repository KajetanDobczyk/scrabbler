import { StyleSheet } from 'react-native';

import { color } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: color.lightGreen,
    borderRadius: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    color: color.white,
    marginBottom: 10,
  },
  minusPoints: {
    color: color.white,
  },
});
