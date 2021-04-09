import React from 'react';

import { IPlayer } from 'src/modules/Game/interfaces';

import * as S from './styles';

type Props = {
  player: IPlayer;
  points: number;
  isWinner: boolean;
};

const FinishedGamePlayerTile: React.FC<Props> = ({
  player,
  points,
  isWinner,
}) => (
  <S.FinishedGamePlayerTileWrapper isWinner={isWinner}>
    <S.Name>{player.name}</S.Name>
    <S.Points>{points}</S.Points>
  </S.FinishedGamePlayerTileWrapper>
);

export default FinishedGamePlayerTile;
