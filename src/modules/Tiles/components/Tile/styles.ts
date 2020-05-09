import { StyleSheet } from 'react-native';

import { color, font } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    aspectRatio: 1,
    position: 'relative',
    backgroundColor: color.cream,
    borderRadius: 2,
  },
  highlightOverlay: {
    backgroundColor: color.white,
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  content: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  letter: {
    textTransform: 'uppercase',
  },
  blankLetter: {
    opacity: 0.3,
  },
  points: {
    position: 'absolute',
    bottom: 0,
    right: 2,
    fontSize: font.size.xxs,
  },
});
