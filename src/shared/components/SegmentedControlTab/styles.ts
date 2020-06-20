import { StyleSheet } from 'react-native';

import { Theme } from 'src/theme/interfaces';

export const styles = ({ color }: Theme) =>
  StyleSheet.create({
    controlTabWrapper: {
      marginTop: 10,
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
  });
