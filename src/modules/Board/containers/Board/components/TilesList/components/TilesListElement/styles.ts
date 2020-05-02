import { StyleSheet } from 'react-native';

import { color, font } from 'src/theme';

export const styles = StyleSheet.create({
  tileWrapper: {
    position: 'relative',
    aspectRatio: 1,
    width: 50,
    paddingTop: 10,
    paddingRight: 10,
  },
  amount: {
    position: 'absolute',
    width: 15,
    height: 15,
    borderRadius: 10,
    top: 3,
    right: 3,
    textAlign: 'center',
    backgroundColor: color.lightGreen,
    color: color.white,
    fontSize: font.size.xs,
  },
});
