import React from 'react';
import {
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Header from 'src/layout/components/Header';
import { selectTheme } from 'src/modules/Settings/store/selectors';

import * as S from './styles';
import { DictionaryTabParamList, DictionaryScreen } from '../../interfaces';
import SearchBar from './components/SearchBar';
import { selectWordSearchFetchStatus } from '../../store/selectors';
import SearchResult from './components/SearchResult';

type Props = {
  navigation: StackNavigationProp<
    DictionaryTabParamList,
    DictionaryScreen.Home
  >;
};

const WordSearch: React.FC<Props> = () => {
  const { t } = useTranslation('dictionary');

  const theme = useSelector(selectTheme);
  const fetchStatus = useSelector(selectWordSearchFetchStatus);

  return (
    <>
      <Header title={t('routeName')} />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <S.SearchBarWrapper>
          <SearchBar />
          {fetchStatus === 'inProgress' && (
            <ActivityIndicator color={theme.color.board} />
          )}
          {fetchStatus === 'succeeded' && <SearchResult />}
        </S.SearchBarWrapper>
      </TouchableWithoutFeedback>
    </>
  );
};

export default WordSearch;
