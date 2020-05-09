import { Letter } from 'src/modules/Dictionary/interfaces';
import { PlayerId } from 'src/modules/Players/interfaces';

import {
  IBoardFields,
  IBoardLayout,
  ITilesList,
  INewMove,
  GameStatus,
} from '../interfaces';

export type IBoardState = {
  gameStatus: GameStatus;
  boardFields: IBoardFields;
  tilesList: ITilesList;
  layout: IBoardLayout;
  newMove: INewMove;
};

export interface ICoordinates {
  x: number;
  y: number;
}

export interface IAddNewMoveTilePayload extends ICoordinates {
  letter: Letter;
  blankLetter?: Letter;
}
