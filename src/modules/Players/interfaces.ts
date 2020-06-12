import { IBoardTile, IBoardField } from 'src/modules/Game/interfaces';

import { Letter } from '../Dictionary/interfaces';

export type PlayerId = '0' | '1' | '2' | '3';

export type PlayedMoveType = 'skipped' | 'loss';

export type IPlayedMove = {
  type?: PlayedMoveType;
  tiles: IBoardTile[];
  words: IBoardField[][];
};

export interface IPlayer {
  name: string;
  moves: IPlayedMove[];
  finalTiles: Letter[];
}

export type IPlayersNames = Partial<Record<PlayerId, string>>;

export type IPlayers = Partial<Record<PlayerId, IPlayer>>;

export type IFinalPlayersTiles = Record<PlayerId, Letter[]>;
