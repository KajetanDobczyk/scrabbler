import { Letter } from 'src/modules/Dictionary/interfaces';
import { ITilesList } from 'src/modules/Tiles/interfaces';

import {
  IBoardFields,
  INewMove,
  GameStatus,
  GameView,
  WordDirection,
} from '../interfaces';

export type IGameState = {
  status: GameStatus;
  view: GameView;
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
