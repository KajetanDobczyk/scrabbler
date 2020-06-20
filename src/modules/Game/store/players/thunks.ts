import noop from 'lodash/noop';
import last from 'lodash/last';
import { batch } from 'react-redux';
import { Alert } from 'react-native';

import { AppThunk } from 'src/redux/store';
import { IPlayersNames } from 'src/modules/Players/interfaces';

import {
  selectCurrentPlayerId,
  selectNextPlayerId,
  selectIsFirstMove,
} from '../players/selectors';
import {
  validateNewMove,
  getNewHorizontalMoves,
  getNewVerticalMoves,
} from '../board/helpers';
import { selectNewMove, selectBoardFields } from '../board/selectors';
import {
  addPlayerMove,
  removePlayerLastMove,
  setCurrentPlayerId,
  setupPlayers,
} from './slice';
import { startGame, setGameView } from '../config/slice';
import { resetNewMove, removeBoardTiles } from '../board/slice';
import {
  selectCurrentPlayerName,
  selectPreviousPlayerId,
  selectPlayers,
} from './selectors';
import i18n from 'src/services/i18n';

export const startNewGame = (playersNames: IPlayersNames): AppThunk => (
  dispatch,
) => {
  batch(() => {
    dispatch(setupPlayers(playersNames));
    dispatch(startGame());
  });
};

export const tryNewMove = (): AppThunk => (dispatch, getState) => {
  const currentPlayerId = selectCurrentPlayerId(getState());
  const nextPlayerId = selectNextPlayerId(getState());
  const { tiles } = selectNewMove(getState());
  const boardFields = selectBoardFields(getState());
  const isFirstMove = selectIsFirstMove(getState());

  const errorMessage = validateNewMove(boardFields, tiles, isFirstMove);

  if (errorMessage) {
    return Alert.alert(
      i18n.t('game:errors.moveUnallowed'),
      errorMessage,
      [{ text: 'Ok', onPress: () => noop, style: 'cancel' }],
      { cancelable: true },
    );
  }

  const newMoveWords = [
    ...getNewHorizontalMoves(boardFields, tiles),
    ...getNewVerticalMoves(boardFields, tiles),
  ];

  batch(() => {
    dispatch(
      addPlayerMove({
        playerId: currentPlayerId,
        move: {
          tiles,
          words: newMoveWords,
        },
      }),
    );
    dispatch(setCurrentPlayerId(nextPlayerId));
    dispatch(resetNewMove());
    dispatch(setGameView('points'));
  });
};

export const skipTurn = (): AppThunk => (dispatch, getState) => {
  const currentPlayerName = selectCurrentPlayerName(getState());
  const currentPlayerId = selectCurrentPlayerId(getState());
  const nextPlayerId = selectNextPlayerId(getState());

  return Alert.alert(
    `Pominąć ruch gracza ${currentPlayerName}?`,
    undefined,
    [
      { text: 'Anuluj', onPress: () => noop, style: 'cancel' },
      {
        text: 'Strata kolejki',
        onPress: () =>
          batch(() => {
            dispatch(
              addPlayerMove({
                playerId: currentPlayerId,
                move: {
                  type: 'loss',
                  tiles: [],
                  words: [],
                },
              }),
            );
            dispatch(setCurrentPlayerId(nextPlayerId));
          }),
        style: 'default',
      },
      {
        text: 'Pomiń',
        onPress: () => {
          batch(() => {
            dispatch(
              addPlayerMove({
                playerId: currentPlayerId,
                move: {
                  type: 'skipped',
                  tiles: [],
                  words: [],
                },
              }),
            );
            dispatch(setCurrentPlayerId(nextPlayerId));
          });
        },
        style: 'default',
      },
    ],
    { cancelable: true },
  );
};

export const removeLastMove = (): AppThunk => (dispatch, getState) => {
  const previousPlayerId = selectPreviousPlayerId(getState());
  const players = selectPlayers(getState());

  const previousPlayer = players[previousPlayerId];
  const previousPlayerLastMove = last(previousPlayer?.moves);
  const previousPlayerName = previousPlayer?.name;

  return (
    previousPlayerLastMove &&
    Alert.alert(
      `Cofnąć ruch gracza ${previousPlayerName}?`,
      undefined,
      [
        { text: 'Anuluj', onPress: () => noop, style: 'cancel' },
        {
          text: 'Strata kolejki',
          onPress: () =>
            batch(() => {
              dispatch(removeBoardTiles(previousPlayerLastMove.tiles));
              dispatch(removePlayerLastMove(previousPlayerId));
              dispatch(
                addPlayerMove({
                  playerId: previousPlayerId,
                  move: {
                    type: 'loss',
                    tiles: [],
                    words: [],
                  },
                }),
              );
            }),
          style: 'default',
        },
        {
          text: 'Cofnij',
          onPress: () =>
            batch(() => {
              dispatch(removeBoardTiles(previousPlayerLastMove.tiles));
              dispatch(removePlayerLastMove(previousPlayerId));
              dispatch(setCurrentPlayerId(previousPlayerId));
            }),
          style: 'default',
        },
      ],
      { cancelable: true },
    )
  );
};
