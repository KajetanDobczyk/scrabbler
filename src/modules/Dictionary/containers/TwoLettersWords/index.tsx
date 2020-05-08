import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';

import { twoLettersWords } from 'src/modules/Dictionary/data';
import Header from 'src/layout/components/Header';

import { styles } from './styles';
import {
  DictionaryTabParamList,
  DictionaryScreen,
  Letter,
} from '../../interfaces';
import { setSearchQuery } from '../../store/slice';
import { fetchWordData } from '../../store/thunks';

type Props = {
  navigation: StackNavigationProp<
    DictionaryTabParamList,
    DictionaryScreen.TwoLettersWords
  >;
};

const TwoLettersWords: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();

  const searchWord = (word: string) => () => {
    dispatch(setSearchQuery(word));
    dispatch(fetchWordData());
    navigation.goBack();
  };

  return (
    <>
      <Header
        title={DictionaryScreen.TwoLettersWords}
        onGoBack={() => navigation.goBack()}
        hideMenuButton
      />
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {(Object.keys(twoLettersWords) as Letter[]).map((letter) => (
            <View key={letter} style={styles.letterRow}>
              <Text style={styles.letter}>{letter}</Text>
              <View style={styles.letterWords}>
                {twoLettersWords[letter]!.map((word) => (
                  <TouchableOpacity key={word} onPress={searchWord(word)}>
                    <Text style={styles.word}>{word}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default TwoLettersWords;
