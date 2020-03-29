import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { color } from 'src/theme';
import { twoLettersWords } from 'src/config/dictionary';

const TwoLettersWordsList = () => (
  <View style={styles.container}>
    {twoLettersWords.map((wordsRow, i) => (
      <View key={i} style={styles.wordsRow}>
        {wordsRow.map(word => (
          <Text key={word} style={styles.word}>
            {word}
          </Text>
        ))}
      </View>
    ))}
  </View>
);

export default TwoLettersWordsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: color.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wordsRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  word: { marginRight: 5 },
});
