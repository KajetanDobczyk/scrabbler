import { StyleSheet } from 'react-native';
import { color } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexGrow: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: color.red,
  },
});
