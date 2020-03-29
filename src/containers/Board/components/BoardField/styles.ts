import { StyleSheet } from 'react-native';

import { color } from 'src/theme';

export type StylesProps = {
  backgroundColor: string;
};

export const styles = ({ backgroundColor }: StylesProps) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor,
      borderColor: color.green,
      borderWidth: 1,
    },
  });
