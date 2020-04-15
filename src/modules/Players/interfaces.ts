import { IBoardTile } from 'src/modules/Board/interfaces';

export type PlayerId = 0 | 1 | 2 | 3;

export type IPlayedMove =
  | {
      tiles: IBoardTile[];
    }
  | 'skipped';

export interface IPlayer {
  name: string;
  points: number;
  moves: IPlayedMove[];
}

export type IPlayers = Record<PlayerId, IPlayer | null>;
