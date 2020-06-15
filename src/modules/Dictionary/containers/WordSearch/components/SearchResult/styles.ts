import { StyleSheet } from 'react-native';

import { Theme } from 'src/theme/interfaces';

export const styles = ({ color, font }: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
    },
    word: {
      fontSize: font.size.xl,
      marginBottom: 5,
    },
    isAllowedText: {
      marginBottom: 20,
    },
    allowed: {
      color: color.board,
    },
    unallowed: {
      color: color.trippleWord,
    },
    description: {
      marginBottom: 20,
    },
    comments: {
      paddingTop: 20,
      borderTopColor: color.black,
      borderTopWidth: 1,
    },
  });
