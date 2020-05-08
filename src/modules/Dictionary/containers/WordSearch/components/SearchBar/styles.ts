import { StyleSheet } from 'react-native';

import { color } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    padding: 20,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: color.black,
    marginRight: 10,
  },
});
