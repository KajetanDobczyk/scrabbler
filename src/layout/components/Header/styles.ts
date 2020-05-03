import { StyleSheet } from 'react-native';

import { color, font } from 'src/theme';
import { boardPadding } from 'src/modules/Board/containers/Board/styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.green,
    paddingTop: boardPadding * 2,
    paddingHorizontal: boardPadding,
    paddingBottom: boardPadding,
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
