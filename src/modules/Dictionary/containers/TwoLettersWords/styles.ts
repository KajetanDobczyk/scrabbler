import { StyleSheet } from 'react-native';

import { Theme } from 'src/theme/interfaces';

export const styles = ({ color }: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.white,
    },
    scrollContainer: {
      padding: 20,
    },
    letterRow: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    letter: {
      width: 25,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      color: color.board,
    },
    letterWords: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    word: {
      textTransform: 'uppercase',
      marginRight: 10,
      marginBottom: 2,
    },
  });
