import { Dimensions } from 'react-native';
import { batch } from 'react-redux';

import { AppThunk } from 'src/redux/store';
import { Letter } from 'src/modules/Dictionary/interfaces';

import { boardPadding } from '../containers/Board/styles';
import { rowFieldsAmount } from '../data';
import {
  initBoardLayout,
  highlightBoardField,
  resetBoardFieldsHighlights,
  placeTile,
  selectBoardLayout,
  selectBoardFields,
  selectNewMove,
} from './slice';

export const updateBoardLayout = (): AppThunk => async (dispatch) => {
  const screenWidth = Dimensions.get('window').width;
  const boardSize = screenWidth - 2 * boardPadding;

  const tileSize = Math.round((boardSize / rowFieldsAmount) * 100) / 100;

  dispatch(
    initBoardLayout({
      x: boardPadding,
      y: boardPadding,
      size: Math.round(boardSize * 100) / 100,
      tileSize,
    }),
  );
};

export const updateBoardFieldsHighlights = (
  x: number,
  y: number,
): AppThunk => async (dispatch, getState) => {
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
      dispatch(resetBoardFieldsHighlights());
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
  const newMove = selectNewMove(getState());

  if (newMove.length === 7) {
    return;
  }

  const tileX = Math.floor((x - layout.x) / layout.tileSize);
  const tileY = Math.floor((y - layout.y) / layout.tileSize);
  const boardField = boardFields[tileY][tileX];

  if (
    boardField.letter !== '' ||
    tileX > rowFieldsAmount - 1 ||
    tileY > rowFieldsAmount - 1
  ) {
    return;
  }

  dispatch(placeTile({ x: tileX, y: tileY, letter }));
};
