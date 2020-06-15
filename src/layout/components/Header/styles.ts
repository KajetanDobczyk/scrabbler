import { StyleSheet } from 'react-native';

import { StatusBarHeight } from 'src/config';
import { Theme } from 'src/theme/interfaces';

export const styles = ({ color, font }: Theme) =>
  StyleSheet.create({
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
