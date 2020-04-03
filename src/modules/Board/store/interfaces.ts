import { Letter } from 'src/modules/Dictionary/interfaces';
import { IPlayerId } from 'src/modules/Players/interfaces';

import {
  INewWord,
  IBoardFields,
  IBoardLayout,
  IPlayedWord,
  ITilesAmount,
} from '../interfaces';

export type IBoardState = {
  boardFields: IBoardFields;
  tilesAmount: ITilesAmount;
  layout: IBoardLayout;
  newWord: INewWord;
  wordsHistory: IPlayedWord[];
};

export type BoardLoadedPayload = {
  x: number;
  y: number;
  size: number;
};

export type InsertWordPayload = {
  x: number;
  y: number;
};

export type InsertWordLetterPayload = {
  letter: Letter;
  playerId: IPlayerId;
};
