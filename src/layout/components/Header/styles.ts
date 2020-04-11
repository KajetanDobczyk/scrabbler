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
  image: {
    width: 35,
    height: 35,
  },
  text: {
    color: color.white,
    fontWeight: 'bold',
    fontSize: font.size.base,
  },
});
