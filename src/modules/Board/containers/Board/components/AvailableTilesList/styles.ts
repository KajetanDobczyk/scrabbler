import EStyleSheet from 'react-native-extended-stylesheet';

export const tileMargin = 5;

export const styles = EStyleSheet.create({
  container: {
    position: 'relative',
    marginTop: 20,
  },
  tileWrapper: {
    aspectRatio: 1,
    width: 40,
    marginRight: tileMargin,
  },
  'tileWrapper:last-child': {
    marginRight: 0,
  },
});
