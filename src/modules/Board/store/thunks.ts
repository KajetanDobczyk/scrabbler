import { Dimensions, Alert } from 'react-native';
import noop from 'lodash/noop';

import { AppThunk } from 'src/redux/store';
import { Letter } from 'src/modules/Dictionary/interfaces';

import { boardPadding } from '../containers/Board/styles';
import { rowFieldsAmount } from '../data';
import { initBoardLayout, placeTile, acceptNewMove } from './slice';
import {
  selectBoardLayout,
  selectBoardFields,
  selectNewMove,
  selectMovesHistory,
} from './selectors';
import {
  areLettersUnalligned,
  isAnyLetterLoose,
  isMoveThroughCenter,
} from './helpers';

export const updateBoardLayout = (): AppThunk => async (dispatch) => {
  const screenWidth = Dimensions.get('window').width;
  const boardSize = screenWidth - 2 * boardPadding;

  const tileSize = Math.round((boardSize / rowFieldsAmount) * 100) / 100;

  dispatch(
    initBoardLayout({
      x: boardPadding,
      y: 0,
      size: Math.round(boardSize * 100) / 100,
      tileSize,
    }),
  );
};

export const dropBoardTile = (
  x: number,
  y: number,
  letter: Letter,
): AppThunk => async (dispatch, getState) => {
  const layout = selectBoardLayout(getState());
  const boardFields = selectBoardFields(getState());
  const newMove = selectNewMove(getState());

  const tileX = Math.floor((x - layout.x) / layout.tileSize);
  const tileY = Math.floor((y - layout.y) / layout.tileSize);

  if (
    newMove.length === 7 ||
    tileX > rowFieldsAmount - 1 ||
    tileY > rowFieldsAmount - 1 ||
    boardFields[tileY][tileX].letter !== ''
  ) {
    return;
  }

  dispatch(placeTile({ x: tileX, y: tileY, letter }));
};

export const tryNewMove = (): AppThunk => async (dispatch, getState) => {
  const newMove = selectNewMove(getState());
  const boardFields = selectBoardFields(getState());
  const movesHistory = selectMovesHistory(getState());

  let errorMessage = undefined;

  if (!movesHistory.length && newMove.length === 1) {
    errorMessage = 'Pierwszy ruch musi tworzyć wyraz!';
  } else if (!movesHistory.length && !isMoveThroughCenter(newMove)) {
    errorMessage = 'Pierwszy ruch musi przechodzić przez środek!';
  } else if (isAnyLetterLoose(newMove, boardFields)) {
    errorMessage = 'Nie wszystkie litery przylegają do innych!';
  } else if (areLettersUnalligned(newMove)) {
    errorMessage = 'Nowe litery nie są w jednej linii!';
  }

  if (errorMessage) {
    Alert.alert(
      'Niedozwolony ruch',
      errorMessage,
      [{ text: 'Ok', onPress: () => noop, style: 'cancel' }],
      { cancelable: true },
    );
  } else {
    dispatch(acceptNewMove());
  }
};
