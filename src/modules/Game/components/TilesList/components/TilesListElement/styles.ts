import { StyleSheet } from 'react-native';

import { color, font } from 'src/theme';

export const styles = StyleSheet.create({
  tileWrapper: {
    position: 'relative',
    aspectRatio: 1,
    width: '10%',
  },
  noAmountLeft: {
    opacity: 0.5,
  },
  amount: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 10,
    top: 3,
    right: 3,
    textAlign: 'center',
    backgroundColor: color.lightGreen,
    color: color.white,
    fontSize: font.size.xxs,
  },
});
