import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import {
  selectIsWordAllowed,
  selectSearchedWord,
  selectWordDescription,
  selectWordComments,
} from 'src/modules/Dictionary/store/selectors';

import { styles } from './styles';
import Comment from './components/Comment';

const SearchResult = () => {
  const isWordAllowed = useSelector(selectIsWordAllowed);
  const word = useSelector(selectSearchedWord);
  const description = useSelector(selectWordDescription);
  const comments = useSelector(selectWordComments);

  return (
    <ScrollView style={styles.container}>
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
      {comments?.length ? (
        <View style={styles.comments}>
          {comments.map((comment, i) => (
            <Comment key={i} comment={comment} />
          ))}
        </View>
      ) : null}
    </ScrollView>
  );
};

export default SearchResult;
