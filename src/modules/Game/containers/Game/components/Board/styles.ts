import { StyleSheet } from 'react-native';

import { Theme } from 'src/theme/interfaces';

export const styles = ({ color }: Theme) =>
  StyleSheet.create({
    container: {
      position: 'relative',
      width: '100%',
      aspectRatio: 1,
      zIndex: 0,
      backgroundColor: color.green,
      paddingHorizontal: 5,
      paddingBottom: 5,
    },
    row: {
      flexGrow: 1,
      flexDirection: 'row',
      alignItems: 'stretch',
    },
    tileWrapper: {
      width: 20,
      height: 20,
      marginRight: 5,
    },
  });
