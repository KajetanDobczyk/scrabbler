import { StyleSheet } from 'react-native';

import { Theme } from 'src/theme/interfaces';

export const styles = ({ color, font }: Theme) =>
  StyleSheet.create({
    container: {
      marginBottom: 20,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
    },
    author: {
      fontWeight: 'bold',
      color: color.board,
    },
    date: {
      fontSize: font.size.sm,
      opacity: 0.4,
    },
    content: {},
  });
