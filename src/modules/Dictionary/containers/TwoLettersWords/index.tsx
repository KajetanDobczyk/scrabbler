import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { twoLettersWords } from 'src/modules/Dictionary/config';
import Header from 'src/layout/components/Header';

import { styles } from './styles';
import { DictionaryTabParamList, DictionaryScreen } from '../../interfaces';

type Props = {
  navigation: StackNavigationProp<
    DictionaryTabParamList,
    DictionaryScreen.TwoLettersWords
  >;
};

const TwoLettersWords: React.FC<Props> = ({ navigation }) => (
  <>
    <Header
      title={DictionaryScreen.TwoLettersWords}
      onGoBack={() => navigation.goBack()}
      hideMenuButton
    />
    <View style={styles.container}>
      {twoLettersWords.map((wordsRow, i) => (
        <View key={i} style={styles.wordsRow}>
          {wordsRow.map((word) => (
            <Text key={word} style={styles.word}>
              {word}
            </Text>
          ))}
        </View>
      ))}
    </View>
  </>
);

export default TwoLettersWords;
