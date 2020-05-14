import { StyleSheet } from 'react-native';

import { color, font } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: color.green,
  },
  name: {
    flexGrow: 1,
    textAlign: 'center',
    fontSize: font.size.xs,
    color: color.lightGreen,
  },
  currentName: {
    color: color.white,
  },
});
