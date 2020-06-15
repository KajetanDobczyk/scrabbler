import { StyleSheet } from 'react-native';

import { Theme } from 'src/theme/interfaces';

export const styles = ({ color }: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '100%',
      padding: 20,
    },
    input: {
      flex: 1,
      borderBottomWidth: 1,
      borderBottomColor: color.black,
      marginRight: 10,
    },
  });
