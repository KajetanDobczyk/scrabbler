import { Dimensions } from 'react-native';
import { batch } from 'react-redux';

import { AppThunk } from 'src/redux/store';
import { Letter } from 'src/modules/Dictionary/interfaces';

import { boardPadding } from '../containers/Board/styles';
import { rowFieldsAmount } from '../data';
import {
  setLayout,
  setBoardFieldsCoordinates,
  highlightBoardField,
  cleanBoardHighlights,
  placeTile,
  initNewWord,
  addNewWordLetter,
  setAllowedBoardFields,
} from './slice';
import {
  selectBoardLayout,
  selectBoardFields,
  selectNewWord,
} from './selectors';

export const initBoardLayout = (): AppThunk => async (dispatch) => {
  const screenWidth = Dimensions.get('window').width;
  const boardSize = screenWidth - 2 * boardPadding;

  const tileSize = Math.round((boardSize / rowFieldsAmount) * 100) / 100;

  batch(() => {
    dispatch(
      setLayout({
        x: boardPadding,
        y: boardPadding,
        size: Math.round(boardSize * 100) / 100,
        tileSize,
      }),
    );
    dispatch(setBoardFieldsCoordinates(tileSize));
  });
};

export const updateBoardHighlights = (x: number, y: number): AppThunk => async (
  dispatch,
  getState,
) => {
  const layout = selectBoardLayout(getState());
  const boardFields = selectBoardFields(getState());

  const tileX = Math.floor((x - layout.x) / layout.tileSize);
  const tileY = Math.floor((y - layout.y) / layout.tileSize);

  if (
    tileX <= rowFieldsAmount - 1 &&
    tileY <= rowFieldsAmount - 1 &&
    !boardFields[tileY][tileX].isHighlighted
  ) {
    batch(() => {
      dispatch(cleanBoardHighlights());
      dispatch(highlightBoardField({ x: tileX, y: tileY }));
    });
  }
};

export const dropBoardTile = (
  x: number,
  y: number,
  letter: Letter,
): AppThunk => async (dispatch, getState) => {
  const layout = selectBoardLayout(getState());
  const boardFields = selectBoardFields(getState());
  const newWord = selectNewWord(getState());

  if (newWord.word.length === 7) {
    return;
  }

  const tileX = Math.floor((x - layout.x) / layout.tileSize);
  const tileY = Math.floor((y - layout.y) / layout.tileSize);
  const boardField = boardFields[tileY][tileX];

  if (!boardField.isAllowed || boardField.letter !== '') {
    return;
  }

  // Place letter in correct place
  if (tileX <= rowFieldsAmount - 1 && tileY <= rowFieldsAmount - 1) {
    dispatch(placeTile({ x: tileX, y: tileY, letter }));
  }

  if (newWord.word === '') {
    batch(() => {
      dispatch(initNewWord({ x: tileX, y: tileY, letter }));
      dispatch(setAllowedBoardFields({ x: tileX, y: tileY }));
    });
  } else {
    batch(() => {
      dispatch(addNewWordLetter({ x: tileX, y: tileY, letter }));
      dispatch(setAllowedBoardFields({ x: tileX, y: tileY }));
    });
  }
};
