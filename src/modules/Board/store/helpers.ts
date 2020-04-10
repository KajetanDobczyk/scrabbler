import { IBoardTile, IBoardFields } from '../interfaces';

export const isMoveThroughCenter = (newMove: IBoardTile[]) =>
  newMove.find((tile) => tile.x === 7 && tile.y === 7);

export const areLettersUnalligned = (newMove: IBoardTile[]) =>
  !(
    newMove.every((tile) => tile.x === newMove[0].x) ||
    newMove.every((tile) => tile.y === newMove[0].y)
  );

export const isAnyLetterLoose = (
  newMove: IBoardTile[],
  boardFields: IBoardFields,
) =>
  newMove
    .map(
      ({ x, y }) =>
        (boardFields[y][x - 1] && boardFields[y][x - 1].letter !== '') ||
        (boardFields[y][x + 1] && boardFields[y][x + 1].letter !== '') ||
        (boardFields[y - 1] && boardFields[y - 1][x].letter !== '') ||
        (boardFields[y + 1] && boardFields[y + 1][x].letter !== ''),
    )
    .includes(false);
