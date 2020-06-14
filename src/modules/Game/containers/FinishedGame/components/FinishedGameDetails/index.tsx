import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectPlayers,
  selectEndingPlayerId,
  selectTotalFinalTilesPoints,
} from 'src/modules/Game/store/players/selectors';
import { PlayerId } from 'src/modules/Players/interfaces';
import { getFinalPlayersPoints } from 'src/modules/Game/store/players/helpers';

import FinishedGamePlayerTile from './components/FinishedGamePlayerTile';

const FinishedGameDetails = () => {
  const players = useSelector(selectPlayers);
  const endingPlayerId = useSelector(selectEndingPlayerId);
  const totalFinalTilesPoints = useSelector(selectTotalFinalTilesPoints);

  const playersIds = Object.keys(players) as PlayerId[];

  const playersPoints = getFinalPlayersPoints(
    players,
    endingPlayerId,
    totalFinalTilesPoints,
  );

  const getIsWinner = (playerId: PlayerId) =>
    Math.max(...Object.values(playersPoints)) === playersPoints[playerId];

  return (
    <>
      {playersIds.map((playerId) => (
        <FinishedGamePlayerTile
          key={playerId}
          player={players[playerId]!}
          points={playersPoints[playerId]!}
          isWinner={getIsWinner(playerId)}
        />
      ))}
    </>
  );
};

export default FinishedGameDetails;
