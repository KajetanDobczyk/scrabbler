import { StyleSheet } from 'react-native';
import { color } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.green,
    paddingHorizontal: 2.5,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonWrapper: {
    flexGrow: 1,
    flexDirection: 'column',
    paddingHorizontal: 2.5,
  },
});
