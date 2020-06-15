import { StyleSheet } from 'react-native';

import { Theme } from 'src/theme/interfaces';

export const styles = ({ color, font }: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: color.board,
    },
    name: {
      flexGrow: 1,
      textAlign: 'center',
      fontSize: font.size.xs,
      color: color.boardField,
      paddingBottom: 5,
    },
    currentName: {
      color: color.white,
    },
  });
