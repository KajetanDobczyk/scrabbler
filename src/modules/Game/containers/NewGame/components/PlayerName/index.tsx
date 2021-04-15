import React from 'react';

import { PlayerId } from 'src/modules/Players/interfaces';

import * as S from './styles';

type Props = {
  id: PlayerId;
  name: string;
  onChange: (id: PlayerId) => (name: string) => void;
  autoFocus?: boolean;
};

const PlayerName: React.FC<Props> = ({ id, name, onChange, autoFocus }) => {
  const normalizedIndex = parseInt(id) + 1;

  return (
    <S.PlayerNameWrapper>
      <S.Index isHighlighted={name !== ''}>{normalizedIndex}</S.Index>
      <S.Input
        value={name}
        onChangeText={onChange(id)}
        autoFocus={autoFocus}
        autoCapitalize="sentences"
      />
    </S.PlayerNameWrapper>
  );
};

export default PlayerName;
