import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectPlayers,
  selectEndingPlayerId,
  selectTotalFinalTilesPoints,
} from 'src/modules/Players/store/selectors';
import { PlayerId, IPlayer } from 'src/modules/Players/interfaces';
import { tilesPoints } from 'src/modules/Tiles/data';

import PlayerEndGameDetails from './PlayerFinishedGameDetails';
import { sumMovesPoints } from '../../helpers';

const FinishedGameDetails = () => {
  const players = useSelector(selectPlayers);
  const endingPlayerId = useSelector(selectEndingPlayerId);
  const totalFinalTilesPoints = useSelector(selectTotalFinalTilesPoints);

  const playersIds = Object.keys(players) as PlayerId[];

  const sumPlayerPoints = (playerId: PlayerId, player: IPlayer) => {
    let points = sumMovesPoints(player.moves);

    if (playerId === endingPlayerId) {
      points += totalFinalTilesPoints;
    } else if (player.finalTiles) {
      points -= player.finalTiles.reduce(
        (acc, letter) => acc + tilesPoints[letter],
        0,
      );
    }

    return points;
  };

  const playersPoints = playersIds.reduce(
    (acc, playerId) => ({
      ...acc,
      [playerId]: sumPlayerPoints(playerId, players[playerId]!),
    }),
    {} as Record<PlayerId, number>,
  );

  return (
    <>
      {playersIds.map((playerId) => (
        <PlayerEndGameDetails
          key={playerId}
          player={players[playerId]!}
          points={playersPoints[playerId]!}
          isWinner={
            Math.max(...Object.values(playersPoints)) ===
            playersPoints[playerId]
          }
        />
      ))}
    </>
  );
};

export default FinishedGameDetails;
