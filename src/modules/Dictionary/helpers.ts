import { Letter } from './interfaces';
import { initialTilesAmount } from '../Game/store/data';
import { ITilesList } from '../Game/interfaces';

export const getIsLetterTileUsed = (tilesList: ITilesList, letter: Letter) =>
  tilesList[letter].amountLeft !== initialTilesAmount[letter];

export const getAreAllLetterTilesUsed = (
  tilesList: ITilesList,
  letter: Letter,
) => !tilesList[letter].amountLeft;
