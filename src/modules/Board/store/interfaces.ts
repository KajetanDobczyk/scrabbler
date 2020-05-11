import { Letter } from 'src/modules/Dictionary/interfaces';
import { ITilesList } from 'src/modules/Tiles/interfaces';

import {
  IBoardFields,
  INewMove,
  GameStatus,
  WordDirection,
} from '../interfaces';

export type IBoardState = {
  gameStatus: GameStatus;
  boardFields: IBoardFields;
  tilesList: ITilesList;
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

export interface ISetNewMoveTileTargetPayload extends ICoordinates {
  direction?: WordDirection;
}
