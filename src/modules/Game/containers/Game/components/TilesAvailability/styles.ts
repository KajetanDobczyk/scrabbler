import { StyleSheet } from 'react-native';
import { color, font } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  tileInfoWrapper: {
    width: '20%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  letter: {
    width: 10,
    color: color.white,
    marginRight: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  amountLeft: {
    color: color.lightGreen,
  },
  totalAmount: {
    color: color.white,
  },
});
