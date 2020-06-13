import { StyleSheet } from 'react-native';

import { color } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginTop: 10,
    borderWidth: 1,
    borderColor: color.lightGreen,
    borderRadius: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  name: {
    color: color.white,
    marginBottom: 10,
  },
  tilesLeft: {
    flexDirection: 'row',
  },
  tilePlaceholder: {
    width: 20,
    aspectRatio: 1,
    backgroundColor: color.white,
    opacity: 0.1,
    marginLeft: 5,
  },
  tileLeftWrapper: {
    width: 20,
    marginLeft: 5,
  },
  minusPointsWrapper: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderRadius: 20,
    bottom: -5,
    right: -5,
    backgroundColor: color.lightGreen,
  },
  minusPoints: {
    textAlign: 'center',
    color: color.white,
  },
});
