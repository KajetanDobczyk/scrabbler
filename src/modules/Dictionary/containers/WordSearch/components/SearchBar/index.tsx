import React from 'react';
import { View, TextInput, Keyboard } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { selectWordSearchQuery } from 'src/modules/Dictionary/store/selectors';
import { setSearchQuery } from 'src/modules/Dictionary/store/slice';
import { fetchWordData } from 'src/modules/Dictionary/store/thunks';
import IconButton from 'src/theme/components/IconButton';

import { styles } from './styles';

const SearchBar = () => {
  const dispatch = useDispatch();

  const query = useSelector(selectWordSearchQuery);

  const handleOnChangeText = (text: string) => {
    dispatch(setSearchQuery(text));
  };

  const handleSearch = () => {
    dispatch(fetchWordData());
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={query}
        onChangeText={handleOnChangeText}
      />
      <IconButton
        icon="ios-search"
        size={20}
        onPress={handleSearch}
        disabled={!query.length}
        dark
      />
    </View>
  );
};

export default SearchBar;
