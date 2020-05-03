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
import TextButton from 'src/theme/components/TextButton';
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

const WordSearch: React.FC<Props> = ({ navigation }) => {
  const fetchStatus = useSelector(selectWordSearchFetchStatus);

  const openTwoLettersWords = () => {
    Keyboard.dismiss();
    navigation.navigate(DictionaryScreen.TwoLettersWords);
  };

  return (
    <>
      <Header title={DictionaryScreen.Home}>
        <TextButton label="Dwuliterówki" onPress={openTwoLettersWords} />
      </Header>
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
