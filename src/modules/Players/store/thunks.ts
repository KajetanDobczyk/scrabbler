import noop from 'lodash/noop';
import { batch } from 'react-redux';
import { Alert } from 'react-native';

import { AppThunk } from 'src/redux/store';
import {
  selectNewMove,
  selectBoardFields,
} from 'src/modules/Board/store/selectors';
import {
  getNewHorizontalMoves,
  getNewVerticalMoves,
  validateNewMove,
} from 'src/modules/Board/store/helpers';
import { resetNewMove } from 'src/modules/Board/store/slice';

import {
  selectIsFirstMove,
  selectCurrentPlayerName,
  selectCurrentPlayerId,
} from './selectors';
import { addCurrentPlayerMove } from './slice';

export const tryNewMove = (): AppThunk => (dispatch, getState) => {
  const newMove = selectNewMove(getState());
  const boardFields = selectBoardFields(getState());
  const isFirstMove = selectIsFirstMove(getState());

  // const errorMessage = validateNewMove(boardFields, newMove, isFirstMove);

  // if (errorMessage) {
  //   return Alert.alert(
  //     'Niedozwolony ruch',
  //     errorMessage,
  //     [{ text: 'Ok', onPress: () => noop, style: 'cancel' }],
  //     { cancelable: true },
  //   );
  // }

  const newMoveWords = [
    ...getNewHorizontalMoves(boardFields, newMove),
    ...getNewVerticalMoves(boardFields, newMove),
  ];

  if (newMoveWords.length === 1 && newMove.length === 7) {
    newMoveWords[0].points += 50;
  }

  batch(() => {
    dispatch(addCurrentPlayerMove({ tiles: newMove, words: newMoveWords }));
    dispatch(resetNewMove());
  });
};

export const skipTurn = (): AppThunk => (dispatch, getState) => {
  const currentPlayerName = selectCurrentPlayerName(getState());

  return Alert.alert(
    `${currentPlayerName} – pominąć ruch?`,
    undefined,
    [
      { text: 'Anuluj', onPress: () => noop, style: 'cancel' },
      {
        text: 'Pomiń',
        onPress: () => dispatch(addCurrentPlayerMove({ tiles: [], words: [] })),
        style: 'default',
      },
    ],
    { cancelable: true },
  );
};

export const removeLastMove = (): AppThunk => (dispatch, getState) => {};
