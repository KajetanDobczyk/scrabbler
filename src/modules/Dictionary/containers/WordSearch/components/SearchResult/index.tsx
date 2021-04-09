import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectIsWordAllowed,
  selectSearchedWord,
  selectWordDescription,
  selectWordComments,
} from 'src/modules/Dictionary/store/selectors';

import * as S from './styles';
import Comment from './components/Comment';
import { useTranslation } from 'react-i18next';

const SearchResult = () => {
  const { t } = useTranslation('dictionary');
  const isWordAllowed = useSelector(selectIsWordAllowed);
  const word = useSelector(selectSearchedWord);
  const description = useSelector(selectWordDescription);
  const comments = useSelector(selectWordComments);

  return (
    <S.SearchResultWrapper>
      <S.Word>{word}</S.Word>
      <S.IsAllowedText isAllowed={isWordAllowed}>
        {isWordAllowed ? t('results.allowed') : t('results.unallowed')}
      </S.IsAllowedText>
      {description && <S.Description>{description}</S.Description>}
      {comments?.length ? (
        <S.Comments>
          {comments.map((comment, i) => (
            <Comment key={i} comment={comment} />
          ))}
        </S.Comments>
      ) : null}
    </S.SearchResultWrapper>
  );
};

export default SearchResult;
