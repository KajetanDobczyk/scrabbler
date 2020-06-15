import { StyleSheet } from 'react-native';

import { Theme } from 'src/theme/interfaces';

export const styles = ({ color }: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: color.board,
      paddingHorizontal: 2.5,
      paddingBottom: 5,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    buttonWrapper: {
      flexGrow: 1,
      flexDirection: 'column',
      paddingHorizontal: 2.5,
    },
  });
