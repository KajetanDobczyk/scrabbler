import { Letter } from './interfaces';
import { ITilesList } from '../Game/interfaces';
import { initialTilesAmount } from './data';

export const getIsLetterTileUsed = (tilesList: ITilesList, letter: Letter) =>
  tilesList[letter].amountLeft !== initialTilesAmount[letter];

export const getAreAllLetterTilesUsed = (
  tilesList: ITilesList,
  letter: Letter,
) => !tilesList[letter].amountLeft;
