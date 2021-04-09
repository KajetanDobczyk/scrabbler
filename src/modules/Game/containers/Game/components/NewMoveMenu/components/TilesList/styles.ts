import { StyleSheet } from 'react-native';

import { Theme } from 'src/theme/interfaces';

export const styles = ({ color }: Theme) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
    },
  });
