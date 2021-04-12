import React from 'react';

import { IPlayer } from 'src/modules/Game/interfaces';

import PlayedMove from './components/PlayedMove';
import * as S from './styles';

type Props = {
  player: IPlayer;
  movesHeights: Record<string, number>;
  onAdjustMoveHeight: (index: number, height: number) => void;
};

const PlayersMoves: React.FC<Props> = ({
  player,
  movesHeights,
  onAdjustMoveHeight,
}) => (
  <S.PlayersMovesWrapper>
    {player.moves.map((move, i) => (
      <PlayedMove
        key={i}
        index={i}
        move={move}
        height={movesHeights[i]}
        onLayout={onAdjustMoveHeight}
      />
    ))}
  </S.PlayersMovesWrapper>
);

export default PlayersMoves;
