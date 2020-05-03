import React from 'react';
import { View, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import Header from 'src/layout/components/Header';
import TextButton from 'src/theme/components/TextButton';

import { styles } from './styles';
import { DictionaryTabParamList, DictionaryScreen } from '../../interfaces';

type Props = {
  navigation: StackNavigationProp<
    DictionaryTabParamList,
    DictionaryScreen.Home
  >;
};

const WordSearch: React.FC<Props> = ({ navigation }) => (
  <>
    <Header title={DictionaryScreen.Home}>
      <TextButton
        label="2L"
        onPress={() => navigation.navigate(DictionaryScreen.TwoLettersWords)}
      />
    </Header>
    <View style={styles.container}>
      <TextInput style={styles.input} />
    </View>
  </>
);

export default WordSearch;
