import React from 'react';
import {
  View,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import Header from 'src/layout/components/Header';
import { color } from 'src/theme';

import { styles } from './styles';
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
  const fetchStatus = useSelector(selectWordSearchFetchStatus);

  return (
    <>
      <Header title={DictionaryScreen.Home} />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <SearchBar />
          {fetchStatus === 'inProgress' && (
            <ActivityIndicator color={color.green} />
          )}
          {fetchStatus === 'succeeded' && <SearchResult />}
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default WordSearch;
