import { StyleSheet } from 'react-native';

import { Theme } from 'src/theme/interfaces';
import { hexToRGBA } from 'src/theme';

export const styles = ({ color }: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: hexToRGBA(color.boardField, 0.2),
      padding: 10,
    },
    settingRow: {
      padding: 20,
      backgroundColor: color.white,
      borderRadius: 5,
      marginBottom: 10,
    },
    label: {},
  });
