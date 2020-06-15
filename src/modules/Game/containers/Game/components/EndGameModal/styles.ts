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
    controlTabWrapper: {
      marginTop: 10,
      marginBottom: 20,
    },
    controlTab: {
      backgroundColor: color.board,
      borderColor: color.boardField,
    },
    controlTabText: {
      color: color.boardField,
    },
    activeControlTab: {
      backgroundColor: color.boardField,
    },
    buttonsWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
  });
