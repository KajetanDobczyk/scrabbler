import { StyleSheet } from 'react-native';

import { Theme } from 'src/theme/interfaces';

export const styles = ({ color }: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: color.green,
      padding: 20,
      borderRadius: 4,
    },
    header: {
      color: color.white,
    },
    controlTabWrapper: {
      marginTop: 10,
      marginBottom: 20,
    },
    controlTab: {
      backgroundColor: color.green,
      borderColor: color.lightGreen,
    },
    controlTabText: {
      color: color.lightGreen,
    },
    activeControlTab: {
      backgroundColor: color.lightGreen,
    },
    buttonsWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
  });
