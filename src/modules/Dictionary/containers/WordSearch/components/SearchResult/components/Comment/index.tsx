import React from 'react';

import { IComment } from 'src/modules/Dictionary/interfaces';

import * as S from './styles';

type Props = {
  comment: IComment;
};

const Comment: React.FC<Props> = ({ comment }) => (
  <S.CommentWrapper>
    <S.Header>
      <S.Author>{comment.author}</S.Author>
      <S.Date>{comment.date}</S.Date>
    </S.Header>
    <S.Content>{comment.content}</S.Content>
  </S.CommentWrapper>
);

export default Comment;
