import { StyleSheet } from 'react-native';

import { Theme } from 'src/theme/interfaces';

export const styles = ({ color }: Theme) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      textAlign: 'center',
      color: color.white,
    },
    disabled: {
      opacity: 0.3,
    },
  });
