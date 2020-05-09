import { StyleSheet } from 'react-native';

import { color } from 'src/theme';

import { boardPadding } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.green,
    padding: boardPadding,
    borderRadius: 4,
  },
  header: {
    color: color.white,
    marginBottom: boardPadding,
  },
  tilesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  tileWrapper: {
    width: 30,
    marginRight: 5,
    marginBottom: 5,
  },
});
