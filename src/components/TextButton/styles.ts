import { StyleSheet } from 'react-native';

import { Theme } from 'src/theme/interfaces';

export const styles = ({ color, font }: Theme) =>
  StyleSheet.create({
    disabled: {
      opacity: 0.3,
    },
    label: {
      textAlign: 'center',
      textTransform: 'uppercase',
      fontSize: font.size.sm,
      color: color.white,
    },
  });
