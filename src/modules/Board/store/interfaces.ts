import { Letter } from 'src/modules/Dictionary/interfaces';

import {
  IBoardFields,
  IBoardLayout,
  ITilesList,
  IBoardTile,
  IDraggedTile,
} from '../interfaces';

export type IBoardState = {
  boardFields: IBoardFields;
  tilesList: ITilesList;
  layout: IBoardLayout;
  newMove: IBoardTile[];
  draggedTile: IDraggedTile | null;
  isMenuOpen: boolean;
};

export interface ICoordinates {
  x: number;
  y: number;
}

export interface IAddNewMoveTilePayload extends ICoordinates {
  blankLetter?: Letter;
}
