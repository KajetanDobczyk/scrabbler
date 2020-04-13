import { Dimensions, Alert } from 'react-native';
import noop from 'lodash/noop';
import { batch } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import { AppThunk } from 'src/redux/store';
import { Letter } from 'src/modules/Dictionary/interfaces';

import { boardPadding } from '../containers/Board/styles';
import { rowFieldsAmount } from '../data';
import {
  initBoardLayout,
  placeTile,
  acceptNewMove,
  resetBoardFieldsHighlights,
  highlightBoardField,
  setDraggedTile,
} from './slice';
import {
  selectBoardLayout,
  selectBoardFields,
  selectNewMove,
  selectMovesHistory,
  selectTilesList,
  selectDraggedTile,
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

export const initDraggedTileFromList = (touchX: number): AppThunk => async (
  dispatch,
  getState,
) => {
  const tilesList = selectTilesList(getState());

  if (isEmpty(tilesList)) {
    return;
  }

  const letter = Object.keys(tilesList).find((letter) => {
    const { x, size } = (tilesList as any)[letter]?.measurements;

    return touchX + boardPadding - x >= 0 && touchX + boardPadding - x < size;
  }) as Letter | undefined;

  if (letter) {
    const tile = tilesList[letter];

    dispatch(
      setDraggedTile({
        x0: tile.measurements!.x,
        y0: tile.measurements!.y,
        letter,
        source: 'list',
      }),
    );
  }
};

export const dropDraggedTile = (x: number, y: number): AppThunk => async (
  dispatch,
  getState,
) => {
  const layout = selectBoardLayout(getState());
  const boardFields = selectBoardFields(getState());
  const newMove = selectNewMove(getState());
  const draggedTile = selectDraggedTile(getState());

  if (!draggedTile) {
    return;
  }

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

  dispatch(placeTile({ x: tileX, y: tileY, letter: draggedTile.letter }));
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
