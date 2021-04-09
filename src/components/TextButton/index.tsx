import React from 'react';

import * as S from './styles';

type Props = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
};

const TextButton: React.FC<Props> = ({ label, onPress, disabled }) => (
  <S.TextButtonWrapper disabled={disabled} onPress={onPress}>
    <S.Label>{label}</S.Label>
  </S.TextButtonWrapper>
);

export default TextButton;
