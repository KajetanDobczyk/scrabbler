import React from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { css } from '@emotion/native';

import { twoLettersWords } from 'src/modules/Dictionary/data';
import Header from 'src/layout/components/Header';

import * as S from './styles';
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
      <S.TwoLettersWordsWrapper>
        <ScrollView contentContainerStyle={css({ padding: 20 })}>
          {(Object.keys(twoLettersWords) as Letter[]).map((letter) => (
            <S.LetterRow key={letter}>
              <S.Letter>{letter}</S.Letter>
              <S.LetterWords>
                {twoLettersWords[letter]!.map((word) => (
                  <TouchableOpacity key={word} onPress={searchWord(word)}>
                    <S.Word>{word}</S.Word>
                  </TouchableOpacity>
                ))}
              </S.LetterWords>
            </S.LetterRow>
          ))}
        </ScrollView>
      </S.TwoLettersWordsWrapper>
    </>
  );
};

export default TwoLettersWords;
