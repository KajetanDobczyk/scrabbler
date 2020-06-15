import React from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { boardFieldPressed } from 'src/modules/Game/store/board/thunks';
import {
  selectBoardFields,
  selectNewMove,
} from 'src/modules/Game/store/board/selectors';
import { selectTheme } from 'src/modules/Settings/store/selectors';

import BoardField from './components/BoardField';
import { styles } from './styles';

const Board = () => {
  const dispatch = useDispatch();

  const boardFields = useSelector(selectBoardFields);
  const newMove = useSelector(selectNewMove);
  const themedStyles = styles(useSelector(selectTheme));

  const handleOnBoardFieldPress = (x: number, y: number) => {
    dispatch(boardFieldPressed(x, y));
  };

  return (
    <View style={themedStyles.container}>
      {boardFields.map((row, y) => (
        <View key={y} style={themedStyles.row}>
          {row.map((field, x) => (
            <BoardField
              key={x}
              x={x}
              y={y}
              field={field}
              onPress={handleOnBoardFieldPress}
              isTarget={newMove.target?.x === x && newMove.target?.y === y}
              isInNewMove={
                !!newMove.tiles.find((tile) => tile.x === x && tile.y === y)
              }
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default Board;
