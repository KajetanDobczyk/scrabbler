import { Platform } from 'react-native';

export const MEASURE_TIMEOUT = Platform.select({
  android: 300,
  ios: 100,
});
