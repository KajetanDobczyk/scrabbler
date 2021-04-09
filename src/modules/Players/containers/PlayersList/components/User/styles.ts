import { StyleSheet } from 'react-native';

import { Theme } from 'src/theme/interfaces';
import { font } from 'src/theme/variables';

export const styles = ({ color }: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: color.board,
    },
    profilePic: {
      width: 60,
      height: 60,
      borderRadius: 4,
    },
    name: {
      fontWeight: 'bold',
      color: color.board,
      marginLeft: 10,
      fontSize: font.size.md,
    },
  });
