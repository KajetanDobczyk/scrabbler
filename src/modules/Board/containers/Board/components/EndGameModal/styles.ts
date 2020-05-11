import { StyleSheet, ColorPropType } from 'react-native';

import { color } from 'src/theme';

export const styles = StyleSheet.create({
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
