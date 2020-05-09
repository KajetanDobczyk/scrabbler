import { StyleSheet } from 'react-native';

import { color } from 'src/theme';

type StylesProps = {
  backgroundColor: string;
};

export const styles = ({ backgroundColor }: StylesProps) =>
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
