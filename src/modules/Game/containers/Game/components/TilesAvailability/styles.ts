import { StyleSheet } from 'react-native';
import { color, font } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    paddingTop: 8,
    paddingHorizontal: 10,
  },
  tileInfoWrapper: {
    width: '20%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 8,
    paddingHorizontal: 5,
  },
  letter: {
    width: 12,
    color: color.white,
    marginRight: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  amount: {
    color: color.white,
    fontSize: font.size.sm,
  },
  used: {
    color: color.lightGreen,
  },
});
