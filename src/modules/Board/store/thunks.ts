import { Dimensions } from 'react-native';
import { batch } from 'react-redux';

import { AppThunk } from 'src/redux/store';

import { boardPadding } from '../containers/Board/styles';
import { rowFieldsAmount } from '../data';
import {
  setLayout,
  setBoardFieldsCoordinates,
  highlightBoardField,
  cleanBoardHighlights,
} from './slice';
import { selectBoardLayout, selectBoardFields } from './selectors';

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
