import { IBoardField, IBoardTile } from 'src/modules/Board/interfaces';
import { Letter } from 'src/modules/Dictionary/interfaces';

import { IPlayedMove } from './interfaces';
import { tilesPoints } from '../Tiles/data';

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
