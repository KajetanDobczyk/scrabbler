import { StyleSheet } from 'react-native';

import { Theme } from 'src/theme/interfaces';

export const styles = ({ color }: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color.green,
    },
    header: {
      color: color.white,
      marginBottom: 20,
    },
  });
