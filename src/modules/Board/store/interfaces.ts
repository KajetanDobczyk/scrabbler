import { Letter } from 'src/modules/Dictionary/interfaces';

import {
  IBoardFields,
  IBoardLayout,
  ITilesList,
  IPlayedMove,
  IBoardTile,
  IDraggedTile,
} from '../interfaces';

export type IBoardState = {
  boardFields: IBoardFields;
  tilesList: ITilesList;
  layout: IBoardLayout;
  newMove: IBoardTile[];
  draggedTile: IDraggedTile | null;
  movesHistory: IPlayedMove[];
};

export interface ICoordinates {
  x: number;
  y: number;
}
