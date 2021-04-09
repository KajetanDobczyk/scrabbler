import React from 'react';

import * as S from './styles';

type Props = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
};

const FlatButton: React.FC<Props> = ({ label, onPress, disabled }) => (
  <S.FlatButtonWrapper disabled={Boolean(disabled)} onPress={onPress}>
    <S.Label>{label}</S.Label>
  </S.FlatButtonWrapper>
);

export default FlatButton;
