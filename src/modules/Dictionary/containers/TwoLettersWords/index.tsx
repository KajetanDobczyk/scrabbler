import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { twoLettersWords } from 'src/modules/Dictionary/data';
import Header from 'src/layout/components/Header';
import { selectTheme } from 'src/modules/Settings/store/selectors';

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
  const { t } = useTranslation('dictionary');
  const dispatch = useDispatch();

  const themedStyles = styles(useSelector(selectTheme));

  const searchWord = (word: string) => () => {
    dispatch(setSearchQuery(word));
    dispatch(fetchWordData());
    navigation.goBack();
  };

  return (
    <>
      <Header
        title={t('twoLettersWords')}
        onGoBack={() => navigation.goBack()}
        hideMenuButton
      />
      <View style={themedStyles.container}>
        <ScrollView contentContainerStyle={themedStyles.scrollContainer}>
          {(Object.keys(twoLettersWords) as Letter[]).map((letter) => (
            <View key={letter} style={themedStyles.letterRow}>
              <Text style={themedStyles.letter}>{letter}</Text>
              <View style={themedStyles.letterWords}>
                {twoLettersWords[letter]!.map((word) => (
                  <TouchableOpacity key={word} onPress={searchWord(word)}>
                    <Text style={themedStyles.word}>{word}</Text>
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
