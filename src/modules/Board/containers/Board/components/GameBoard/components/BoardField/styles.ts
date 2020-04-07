import { StyleSheet } from 'react-native';

import { color } from 'src/theme';

export type StylesProps = {
  backgroundColor: string;
  opacity: number;
};

export const styles = ({ backgroundColor, opacity }: StylesProps) =>
  StyleSheet.create({
    container: {
      position: 'relative',
      flexGrow: 1,
      backgroundColor,
      borderColor: color.green,
      borderWidth: 1,
      opacity,
    },
    tileWrapper: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      padding: 2,
    },
  });
