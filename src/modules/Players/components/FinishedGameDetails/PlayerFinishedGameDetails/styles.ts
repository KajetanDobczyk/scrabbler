import { StyleSheet } from 'react-native';

import { color, hexToRGBA } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 250,
    backgroundColor: hexToRGBA(color.white, 0.1),
    padding: 10,
    borderRadius: 4,
    marginBottom: 20,
  },
  winner: {
    backgroundColor: hexToRGBA(color.white, 0.3),
  },
  name: {
    color: color.white,
  },
  points: {
    color: color.white,
    fontWeight: 'bold',
  },
});
