import { IBoardTile, IBoardField } from 'src/modules/Board/interfaces';

export type PlayerId = '0' | '1' | '2' | '3';

export type PlayedMoveType = 'skipped' | 'loss';

export type IPlayedMove = {
  type?: PlayedMoveType;
  tiles: IBoardTile[];
  words: IBoardField[][];
};

export interface IPlayer {
  name: string;
  points: number;
  moves: IPlayedMove[];
}

export type IPlayersNames = Partial<Record<PlayerId, string>>;

export type IPlayers = Partial<Record<PlayerId, IPlayer>>;
