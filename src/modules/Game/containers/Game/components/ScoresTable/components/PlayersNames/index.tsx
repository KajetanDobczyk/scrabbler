import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';

import { PlayerId } from 'src/modules/Players/interfaces';
import {
  selectCurrentPlayerId,
  selectPlayers,
} from 'src/modules/Game/store/players/selectors';

import * as S from './styles';

const PlayersNames = () => {
  const currentPlayerId = useSelector(selectCurrentPlayerId);
  const players = useSelector(selectPlayers);

  return (
    <S.PlayersNamesWrapper>
      {(Object.keys(players) as PlayerId[]).map((playerId) => (
        <S.Name
          key={playerId}
          isCurrent={playerId === currentPlayerId.toString()}
        >
          {players[playerId]!.name}
        </S.Name>
      ))}
    </S.PlayersNamesWrapper>
  );
};

export default PlayersNames;
