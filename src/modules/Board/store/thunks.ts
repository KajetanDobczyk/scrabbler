import { Dimensions, Alert } from 'react-native';
import noop from 'lodash/noop';
import { batch } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import { AppThunk } from 'src/redux/store';
import { Letter } from 'src/modules/Dictionary/interfaces';
import {
  addCurrentPlayerMove,
  selectIsFirstMove,
} from 'src/modules/Players/store/slice';

import { boardPadding } from '../containers/Board/styles';
import { rowFieldsAmount } from '../data';
import {
  initBoardLayout,
  addNewMoveTile,
  removeNewMoveTile,
  resetNewMove,
  resetBoardFieldsHighlights,
  highlightBoardField,
  setDraggedTile,
} from './slice';
import {
  selectBoardLayout,
  selectBoardFields,
  selectNewMove,
  selectTilesList,
  selectDraggedTile,
} from './selectors';
import {
  areLettersUnalligned,
  isAnyLetterLoose,
  isMoveThroughCenter,
} from './helpers';
import { IPlayedWord } from '../interfaces';

export const updateBoardLayout = (): AppThunk => async (dispatch) => {
  const screenWidth = Dimensions.get('window').width;
  const boardSize = screenWidth - 2 * boardPadding;

  const tileSize = Math.round((boardSize / rowFieldsAmount) * 100) / 100;

  dispatch(
    initBoardLayout({
      x: boardPadding,
      y: 0, //TODO: Get board y properly
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

  const touchedLetter = (Object.keys(tilesList) as Letter[]).find((letter) => {
    const { measurements } = tilesList[letter];

    return measurements
      ? touchX + boardPadding - measurements.x >= 0 &&
          touchX + boardPadding - measurements.x < measurements.size
      : false;
  });

  if (touchedLetter) {
    const tile = tilesList[touchedLetter];

    dispatch(
      setDraggedTile({
        x0: tile.measurements!.x,
        y0: tile.measurements!.y,
        letter: touchedLetter,
        source: 'list',
      }),
    );
  }
};

export const initDraggedTileFromBoard = (
  touchX: number,
  touchY: number,
): AppThunk => async (dispatch, getState) => {
  const layout = selectBoardLayout(getState());
  const newMove = selectNewMove(getState());

  if (!newMove.length) {
    return;
  }

  const tileX = Math.floor((touchX - layout.x) / layout.tileSize);
  const tileY = Math.floor((touchY - layout.y) / layout.tileSize);

  const tile = newMove.find((tile) => tile.x === tileX && tile.y === tileY);

  if (!tile) {
    return;
  }

  batch(() => {
    dispatch(removeNewMoveTile({ x: tileX, y: tileY }));
    dispatch(
      setDraggedTile({
        x0: tileX * layout.tileSize + layout.x,
        y0: tileY * layout.tileSize + 70,
        letter: tile.letter,
        source: 'board',
      }),
    );
  });
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

  dispatch(addNewMoveTile({ x: tileX, y: tileY }));
};

export const tryNewMove = (): AppThunk => async (dispatch, getState) => {
  const newMove = selectNewMove(getState());
  const boardFields = selectBoardFields(getState());
  const isFirstMove = selectIsFirstMove(getState());

  // let errorMessage = undefined;

  // if (isFirstMove && newMove.length === 1) {
  //   errorMessage = 'Pierwszy ruch musi tworzyć wyraz!';
  // } else if (isFirstMove && !isMoveThroughCenter(newMove)) {
  //   errorMessage = 'Pierwszy ruch musi przechodzić przez środek!';
  // } else if (isAnyLetterLoose(newMove, boardFields)) {
  //   errorMessage = 'Nie wszystkie litery przylegają do innych!';
  // } else if (areLettersUnalligned(newMove)) {
  //   errorMessage = 'Nowe litery nie są w jednej linii!';
  // }

  // if (errorMessage) {
  //   return Alert.alert(
  //     'Niedozwolony ruch',
  //     errorMessage,
  //     [{ text: 'Ok', onPress: () => noop, style: 'cancel' }],
  //     { cancelable: true },
  //   );
  // }

  let newMoveWords: IPlayedWord[] = [];
  let alreadyUsedH = false;
  let alreadyUsedV = false;

  const getFieldLetter = (x: number, y: number) =>
    (boardFields[y][x] && boardFields[y][x].letter) || '';

  //Check for new horizontal words
  newMove.forEach(({ x, y, letter }) => {
    if (
      !alreadyUsedH &&
      (getFieldLetter(x - 1, y) !== '' || getFieldLetter(x + 1, y) !== '')
    ) {
      //Letter to the left or right present, form a new word
      let leftX = x;
      let rightX = x;
      let word: string = letter;

      while (getFieldLetter(leftX - 1, y) !== '') {
        leftX--;
        word = `${boardFields[y][leftX].letter}${word}`;
      }
      while (getFieldLetter(rightX + 1, y) !== '') {
        rightX++;
        word = `${word}${boardFields[y][rightX].letter}`;
      }

      newMoveWords.push({
        x: leftX,
        y,
        word,
        direction: 'horizontal',
        points: 2,
      });

      // Check if new move is horizontal, if so, don't check for new horizontal words
      alreadyUsedH = newMove.every((tile) => tile.y === newMove[0].y);
    }
  });

  //Check for new vertical words
  newMove.forEach(({ x, y, letter }) => {
    if (
      !alreadyUsedV &&
      (getFieldLetter(x, y - 1) !== '' || getFieldLetter(x, y + 1) !== '')
    ) {
      //Letter above or below present, form a new word
      let upY = y;
      let downY = y;
      let word: string = letter;

      while (getFieldLetter(x, upY - 1) !== '') {
        upY--;
        word = `${boardFields[upY][x].letter}${word}`;
      }
      while (getFieldLetter(x, downY + 1) !== '') {
        downY++;
        word = `${word}${boardFields[downY][x].letter}`;
      }

      newMoveWords.push({
        x,
        y: upY,
        word,
        direction: 'vertical',
        points: 3,
      });

      // Check if new move is vertical, if so, don't check for new vertical words
      alreadyUsedV = newMove.every((tile) => tile.x === newMove[0].x);
    }
  });

  batch(() => {
    dispatch(addCurrentPlayerMove({ tiles: newMove, words: newMoveWords }));
    dispatch(resetNewMove());
  });
};
