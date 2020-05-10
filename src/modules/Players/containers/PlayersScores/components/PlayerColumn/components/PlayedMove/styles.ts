import { StyleSheet } from 'react-native';

import { color, font } from 'src/theme';

type StylesProps = {
  opacity?: number;
};

export const stylesFun = ({ opacity }: StylesProps) =>
  StyleSheet.create({
    container: {
      position: 'relative',
      paddingTop: 5,
      paddingHorizontal: 5,
      paddingBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: color.green,
    },
    wordRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    letters: {
      flexDirection: 'row',
    },
    letter: {
      textTransform: 'uppercase',
      fontSize: font.size.xs,
      opacity,
    },
    bonusInfo: {
      textTransform: 'uppercase',
      fontSize: font.size.xs,
      fontWeight: 'bold',
    },
    points: {
      fontSize: font.size.xs,
    },
    bonusPoints: {
      fontSize: font.size.xs,
      fontWeight: 'bold',
    },
    movePoints: {
      position: 'absolute',
      bottom: 5,
      right: 5,
      fontSize: font.size.xs,
    },
  });
