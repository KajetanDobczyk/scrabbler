import { StyleSheet } from 'react-native';

import { Theme } from 'src/theme/interfaces';

export const styles = ({ color }: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.white,
      padding: 20,
    },
    settingRow: {
      marginBottom: 10,
    },
    label: {},
  });
