import { StyleSheet } from 'react-native';

import { Theme } from 'src/theme/interfaces';

export const styles = ({ color }: Theme) =>
  StyleSheet.create({
    container: {
      width: 200,
      height: 30,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    index: {
      color: color.boardField,
      marginRight: 10,
    },
    indexHighlighted: {
      color: color.white,
    },
    input: {
      flex: 1,
      color: color.white,
      borderBottomColor: color.boardField,
      borderBottomWidth: 1,
    },
  });
