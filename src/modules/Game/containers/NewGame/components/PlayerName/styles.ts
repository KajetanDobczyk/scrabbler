import { StyleSheet } from 'react-native';

import { color } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  index: {
    color: color.lightGreen,
    marginRight: 10,
  },
  indexHighlighted: {
    color: color.white,
  },
  input: {
    flex: 1,
    color: color.white,
    borderBottomColor: color.lightGreen,
    borderBottomWidth: 1,
  },
});
