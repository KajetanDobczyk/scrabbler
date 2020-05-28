import { StyleSheet } from 'react-native';

import { color, font } from 'src/theme';
import { StatusBarHeight } from 'src/config';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.green,
    paddingTop: StatusBarHeight + 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backIcon: {
    color: color.white,
  },
  title: {
    color: color.white,
    fontWeight: 'bold',
    fontSize: font.size.base,
  },
  rightMenu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    marginLeft: 20,
  },
});
