import { StyleSheet } from 'react-native';

import { color, font } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: color.cream,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  letter: {
    textTransform: 'uppercase',
  },
  points: {
    position: 'absolute',
    bottom: 1,
    right: 1,
    fontSize: font.size.xs,
  },
});
