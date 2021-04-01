import React from 'react';
import { View, TextInput, Keyboard } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { selectWordSearchQuery } from 'src/modules/Dictionary/store/selectors';
import { setSearchQuery } from 'src/modules/Dictionary/store/slice';
import { fetchWordData } from 'src/modules/Dictionary/store/thunks';
import IconButton from 'src/theme/components/IconButton';
import { selectTheme } from 'src/modules/Settings/store/selectors';

import { styles } from './styles';

const SearchBar = () => {
  const dispatch = useDispatch();

  const themedStyles = styles(useSelector(selectTheme));
  const query = useSelector(selectWordSearchQuery);

  const handleOnChangeText = (text: string) => {
    dispatch(setSearchQuery(text));
  };

  const handleSearch = () => {
    dispatch(fetchWordData());
    Keyboard.dismiss();
  };

  return (
    <View style={themedStyles.container}>
      <TextInput
        style={themedStyles.input}
        value={query}
        onChangeText={handleOnChangeText}
      />
      <IconButton
        icon="ios-search"
        size={20}
        onPress={handleSearch}
        disabled={!query.length}
        iconStyle={themedStyles.searchIcon}
      />
    </View>
  );
};

export default SearchBar;
