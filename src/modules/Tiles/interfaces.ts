import { Letter } from 'src/modules/Dictionary/interfaces';

export interface ITilesListElement {
  amountLeft: number;
}

export type ITilesList = Record<Letter, ITilesListElement>;
