import { StyleSheet } from 'react-native';

import { color, font } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    flexBasis: 0,
    flexGrow: 1,
    borderRightColor: color.green,
    borderRightWidth: 1,
  },
  'container:last-child': {
    borderRightWidth: 0,
  },
  header: {
    backgroundColor: color.lightGreen,
    borderBottomWidth: 1,
    borderBottomColor: color.green,
  },
  name: {
    textAlign: 'center',
    fontSize: font.size.xs,
    color: color.white,
  },
  moves: {
    backgroundColor: color.white,
    flexGrow: 1,
  },
  totalPoints: {
    fontSize: font.size.xs,
    fontWeight: 'bold',
    textAlign: 'right',
    padding: 5,
  },
});
