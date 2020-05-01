import EStyleSheet from 'react-native-extended-stylesheet';

export const boardPadding = 20;

export const styles = EStyleSheet.create({
  container: {
    paddingHorizontal: boardPadding,
    paddingBottom: boardPadding,
  },
  menuWrapper: {
    flexDirection: 'row',
  },
});
