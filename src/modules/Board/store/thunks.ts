import { Dimensions } from 'react-native';
import { batch } from 'react-redux';

import { AppThunk } from 'src/redux/store';

import { boardPadding } from '../containers/Board/styles';
import { rowFieldsAmount } from '../data';
import { setLayout, setBoardFieldsCoordinates } from './slice';

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
