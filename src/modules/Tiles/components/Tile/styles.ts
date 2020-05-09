import { StyleSheet } from 'react-native';

import { color, font } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    aspectRatio: 1,
    position: 'relative',
    backgroundColor: color.cream,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blankLetter: {
    textTransform: 'uppercase',
    opacity: 0.3,
  },
  letter: {
    textTransform: 'uppercase',
  },
  points: {
    position: 'absolute',
    bottom: 0,
    right: 2,
    fontSize: font.size.xxs,
  },
});
