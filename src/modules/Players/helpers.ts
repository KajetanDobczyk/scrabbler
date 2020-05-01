import { IPlayedMove } from './interfaces';

export const sumMovesPoints = (moves: IPlayedMove[]) => {
  let points = 0;

  moves.forEach(
    (move) =>
      (points += move.words.reduce((acc, word) => acc + word.points, 0)),
  );

  return points;
};
