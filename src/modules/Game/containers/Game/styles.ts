import { Dimensions, StyleSheet } from 'react-native';

import { color } from 'src/theme';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
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
