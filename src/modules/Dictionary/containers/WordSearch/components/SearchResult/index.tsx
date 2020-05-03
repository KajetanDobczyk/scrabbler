import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import {
  selectIsWordAllowed,
  selectSearchedWord,
  selectWordDescription,
} from 'src/modules/Dictionary/store/selectors';

import { styles } from './styles';

const SearchResult = () => {
  const isWordAllowed = useSelector(selectIsWordAllowed);
  const word = useSelector(selectSearchedWord);
  const description = useSelector(selectWordDescription);

  return (
    <View style={styles.container}>
      <Text style={styles.word}>{word}</Text>
      <Text
        style={[
          styles.isAllowedText,
          isWordAllowed ? styles.allowed : styles.unallowed,
        ]}
      >
        {isWordAllowed ? 'Dopuszczalne w grach' : 'Nie występuje w słowniku'}
      </Text>
      {description && <Text style={styles.description}>{description}</Text>}
    </View>
  );
};

export default SearchResult;
