import React from 'react';
import { View, Text } from 'react-native';

import { twoLettersWords } from 'src/config/dictionary';

import { styles } from './styles';

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
