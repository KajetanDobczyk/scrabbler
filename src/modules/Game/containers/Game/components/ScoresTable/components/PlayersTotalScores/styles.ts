import { StyleSheet } from 'react-native';

import { Theme } from 'src/theme/interfaces';

export const styles = ({ color }: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: color.boardField,
    },
    pointsWrapper: {
      flexBasis: 0,
      flexGrow: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: 5,
      backgroundColor: color.board,
    },
    points: {
      fontWeight: 'bold',
      color: color.boardField,
    },
    currentPlayerPoints: {
      color: color.white,
    },
  });
