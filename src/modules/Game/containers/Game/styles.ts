import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;

import { Theme } from 'src/theme/interfaces';

export const styles = ({ color }: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: color.green,
    },
    scrollViewContent: {
      flexGrow: 1,
      backgroundColor: color.green,
    },
    horizontalScreen: {
      flex: 1,
      width: screenWidth,
    },
  });
