import { StyleSheet } from 'react-native';

import { Theme } from 'src/theme/interfaces';

export const styles = ({ color, font }: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 15,
    },
    image: {
      marginVertical: 10,
      marginRight: 10,
      width: 25,
      height: 25,
    },
    title: {
      color: color.white,
      fontSize: font.size.xl,
    },
  });
