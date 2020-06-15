import EStyleSheet from 'react-native-extended-stylesheet';

import { Theme } from 'src/theme/interfaces';

export const styles = ({ color }: Theme) =>
  EStyleSheet.create({
    container: {
      position: 'relative',
      flexBasis: 0,
      flexGrow: 1,
      backgroundColor: color.white,
      borderRightColor: color.green,
      borderRightWidth: 1,
    },
    'container:last-child': {
      borderRightWidth: 0,
    },
  });
