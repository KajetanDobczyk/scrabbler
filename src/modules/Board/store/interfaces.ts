import { Letter } from 'src/modules/Dictionary/interfaces';

import {
  IBoardFields,
  IBoardLayout,
  ITilesList,
  IBoardTile,
  IDraggedTile,
  GameStatus,
} from '../interfaces';

export type IBoardState = {
  gameStatus: GameStatus;
  boardFields: IBoardFields;
  tilesList: ITilesList;
  layout: IBoardLayout;
  newMove: IBoardTile[];
  draggedTile: IDraggedTile | null;
};

export interface ICoordinates {
  x: number;
  y: number;
}

export interface IAddNewMoveTilePayload extends ICoordinates {
  blankLetter?: Letter;
}
