import { StyleSheet } from 'react-native';

import { Theme } from 'src/theme/interfaces';
import { hexToRGBA } from 'src/theme';

export const styles = ({ color }: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 250,
      backgroundColor: hexToRGBA(color.white, 0.1),
      padding: 10,
      borderRadius: 4,
      marginBottom: 20,
    },
    winner: {
      backgroundColor: hexToRGBA(color.white, 0.3),
    },
    name: {
      color: color.white,
    },
    points: {
      color: color.white,
      fontWeight: 'bold',
    },
  });
