import { Letter } from 'src/modules/Dictionary/interfaces';

import {
  IBoardFields,
  IBoardLayout,
  IPlayedMove,
  ITilesAmount,
  IBoardTile,
} from '../interfaces';

export type IBoardState = {
  boardFields: IBoardFields;
  tilesAmount: ITilesAmount;
  layout: IBoardLayout;
  newMove: IBoardTile[];
  movesHistory: IPlayedMove[];
};

export interface ICoordinates {
  x: number;
  y: number;
}

export interface ICoordinatesWithLetter extends ICoordinates {
  letter: Letter;
}
