import { StyleSheet } from 'react-native';

import { Theme } from 'src/theme/interfaces';

export const styles = ({ color }: Theme) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'space-between',
      backgroundColor: color.board,
      padding: 2.5,
    },
    buttonsWrapper: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingTop: 5,
      paddingHorizontal: 2.5,
      paddingBottom: 2.5,
    },
    leftButtonWrapper: {
      marginRight: 5,
    },
  });
