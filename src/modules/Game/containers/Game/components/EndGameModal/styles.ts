import { StyleSheet } from 'react-native';

import { Theme } from 'src/theme/interfaces';

export const styles = ({ color }: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: color.board,
      padding: 20,
      borderRadius: 4,
    },
    header: {
      color: color.white,
    },
    buttonsWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
  });
