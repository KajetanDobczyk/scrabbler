import { StyleSheet } from 'react-native';

import { color } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexBasis: 0,
    flexGrow: 1,
    backgroundColor: color.white,
    borderRightColor: color.green,
    borderRightWidth: 1,
  },
  'container:last-child': {
    borderRightWidth: 0,
  },
  moves: {
    backgroundColor: color.white,
    flexGrow: 1,
    paddingBottom: 40,
  },
  totalPoints: {
    fontWeight: 'bold',
    textAlign: 'right',
    padding: 5,
    color: color.green,
  },
});
