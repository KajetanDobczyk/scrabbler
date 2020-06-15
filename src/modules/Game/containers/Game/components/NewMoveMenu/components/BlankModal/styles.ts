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
      marginBottom: 20,
    },
    tilesList: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
    },
    tileWrapper: {
      width: 25,
      marginRight: 8,
      marginBottom: 8,
    },
  });
