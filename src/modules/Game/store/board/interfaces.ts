import { Letter } from 'src/modules/Dictionary/interfaces';

import {
  IBoardFields,
  ITilesList,
  WordDirection,
  INewMove,
  ICoordinates,
} from '../../interfaces';

export type IBoardState = {
  boardFields: IBoardFields;
  tilesList: ITilesList;
  newMove: INewMove;
};

export interface IAddNewMoveTilePayload extends ICoordinates {
  letter: Letter;
  blankLetter?: Letter;
}

export interface ISetNewMoveTileTargetPayload extends ICoordinates {
  direction?: WordDirection;
}
