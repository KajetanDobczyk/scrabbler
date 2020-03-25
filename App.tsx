import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { color } from 'src/theme';

const App = () => (
  <View style={styles.container}>
    <Text>Scrabbler</Text>
  </View>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
