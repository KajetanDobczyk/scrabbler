import { StyleSheet } from 'react-native';

import { Theme } from 'src/theme/interfaces';

export const styles = ({ color, font }: Theme) =>
  StyleSheet.create({
    tileWrapper: {
      position: 'relative',
      aspectRatio: 1,
      width: '8.33%',
      padding: 2.5,
    },
    noAmountLeft: {
      opacity: 0.5,
    },
    amountWrapper: {
      paddingTop: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    amount: {
      textAlign: 'center',
      color: color.white,
      fontSize: font.size.xs,
    },
    used: {
      color: color.lightGreen,
    },
  });
