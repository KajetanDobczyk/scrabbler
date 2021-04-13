import React from 'react';
import { useSelector } from 'react-redux';

import { PlayerId } from 'src/modules/Players/interfaces';
import {
  selectPlayers,
  selectCurrentPlayerId,
} from 'src/modules/Game/store/players/selectors';
import { sumMovesPoints } from 'src/modules/Game/store/players/helpers';

import * as S from './styles';

const PlayersTotalScores = () => {
  const players = useSelector(selectPlayers);
  const currentPlayerId = useSelector(selectCurrentPlayerId);

  return (
    <S.PlayersTotalScoresWrapper>
      {(Object.keys(players) as PlayerId[]).map((playerId, i) => (
        <S.PointsWrapper key={i}>
          <S.Points isCurrentPlayer={currentPlayerId === playerId}>
            {sumMovesPoints(players[playerId]!.moves)}
          </S.Points>
        </S.PointsWrapper>
      ))}
    </S.PlayersTotalScoresWrapper>
  );
};

export default PlayersTotalScores;
