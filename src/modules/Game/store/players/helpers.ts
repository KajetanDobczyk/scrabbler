import { Letter } from 'src/modules/Dictionary/interfaces';

import { tilesPoints } from 'src/modules/Dictionary/data';
import { PlayerId } from 'src/modules/Players/interfaces';

import {
  IPlayedMove,
  IPlayer,
  IPlayers,
  IBoardField,
  IBoardTile,
} from '../../interfaces';

export const countPlayedWordPoints = (
  wordBoardFields: IBoardField[],
  newMove: IBoardTile[],
) => {
  let wordMultiplier = 1;

  let wordPoints = wordBoardFields.reduce((acc, field) => {
    const isNotUsed = !newMove.find(
      (tile) => tile.x === field.x && tile.y === field.y,
    );

    const tilePoints = field.blankLetter
      ? 0
      : tilesPoints[field.letter as Letter];
    const fieldBonus = !!isNotUsed && field.bonus;

    switch (fieldBonus) {
      case 'dl':
        return acc + tilePoints * 2;
      case 'tl':
        return acc + tilePoints * 3;
      case 'dw':
        wordMultiplier *= 2;
        return acc + tilePoints;
      case 'tw':
        wordMultiplier *= 3;
        return acc + tilePoints;
      default:
        return acc + tilePoints;
    }
  }, 0);

  return wordPoints * wordMultiplier;
};

export const sumMovesPoints = (moves: IPlayedMove[]) =>
  moves.reduce(
    (points, move) =>
      points +
      move.words.reduce(
        (acc, word) => acc + countPlayedWordPoints(word, move.tiles),
        move.tiles.length === 7 ? 50 : 0,
      ),
    0,
  );

export const sumFinalPlayerPoints = (
  isEndingPlayer: boolean,
  player: IPlayer,
  totalFinalTilesPoints: number,
) => {
  let points = sumMovesPoints(player.moves);

  if (isEndingPlayer) {
    points += totalFinalTilesPoints;
  } else if (player.finalTiles) {
    points -= player.finalTiles.reduce(
      (acc, letter) => acc + tilesPoints[letter],
      0,
    );
  }

  return points;
};

export const getFinalPlayersPoints = (
  players: IPlayers,
  endingPlayerId: PlayerId | undefined,
  totalFinalTilesPoints: number,
) => {
  const playersIds = Object.keys(players) as PlayerId[];

  return playersIds.reduce(
    (acc, playerId) => ({
      ...acc,
      [playerId]: sumFinalPlayerPoints(
        endingPlayerId === playerId,
        players[playerId]!,
        totalFinalTilesPoints,
      ),
    }),
    {} as Record<PlayerId, number>,
  );
};
