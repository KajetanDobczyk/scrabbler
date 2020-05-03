import { StyleSheet } from 'react-native';

import { color } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    textAlign: 'center',
    color: color.white,
  },
  darkIcon: {
    textAlign: 'center',
    color: color.black,
  },
  disabled: {
    opacity: 0.3,
  },
});
