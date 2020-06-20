import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import {
  selectIsWordAllowed,
  selectSearchedWord,
  selectWordDescription,
  selectWordComments,
} from 'src/modules/Dictionary/store/selectors';
import { selectTheme } from 'src/modules/Settings/store/selectors';

import { styles } from './styles';
import Comment from './components/Comment';
import { useTranslation } from 'react-i18next';

const SearchResult = () => {
  const { t } = useTranslation('dictionary');
  const isWordAllowed = useSelector(selectIsWordAllowed);
  const word = useSelector(selectSearchedWord);
  const description = useSelector(selectWordDescription);
  const comments = useSelector(selectWordComments);
  const themedStyles = styles(useSelector(selectTheme));

  return (
    <ScrollView style={themedStyles.container}>
      <Text style={themedStyles.word}>{word}</Text>
      <Text
        style={[
          themedStyles.isAllowedText,
          isWordAllowed ? themedStyles.allowed : themedStyles.unallowed,
        ]}
      >
        {isWordAllowed ? t('results.allowed') : t('results.unallowed')}
      </Text>
      {description && (
        <Text style={themedStyles.description}>{description}</Text>
      )}
      {comments?.length ? (
        <View style={themedStyles.comments}>
          {comments.map((comment, i) => (
            <Comment key={i} comment={comment} />
          ))}
        </View>
      ) : null}
    </ScrollView>
  );
};

export default SearchResult;
