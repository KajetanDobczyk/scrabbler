import { StyleSheet } from 'react-native';

import { color, font } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
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
