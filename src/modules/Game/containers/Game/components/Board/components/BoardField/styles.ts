import { StyleSheet } from 'react-native';

import { Theme } from 'src/theme/interfaces';

type StylesProps = {
  backgroundColor: string;
};

export const styles = ({ color }: Theme, { backgroundColor }: StylesProps) =>
  StyleSheet.create({
    container: {
      position: 'relative',
      flexGrow: 1,
      flexBasis: 0,
      backgroundColor,
      borderColor: color.green,
      borderWidth: 1,
    },
    highlightOverlay: {
      backgroundColor: color.white,
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: 0,
    },
    tileWrapper: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      padding: 2,
      zIndex: 1,
    },
  });
