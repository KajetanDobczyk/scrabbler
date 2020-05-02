import { StyleSheet } from 'react-native';

import { color } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  index: {
    color: color.lightGreen,
    marginRight: 10,
  },
  input: {
    width: 150,
    height: 30,
    color: color.white,
    borderBottomColor: color.lightGreen,
    borderBottomWidth: 1,
  },
});
