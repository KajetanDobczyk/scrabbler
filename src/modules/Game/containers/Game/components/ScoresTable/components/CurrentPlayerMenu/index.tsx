import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import FlatButton from 'src/theme/components/FlatButton';
import {
  removeLastMove,
  skipTurn,
} from 'src/modules/Game/store/players/thunks';
import { selectIsFirstMove } from 'src/modules/Game/store/players/selectors';
import { setGameView } from 'src/modules/Game/store/config/slice';
import { selectTheme } from 'src/modules/Settings/store/selectors';

import { styles } from './styles';

const menuActions: Record<string, any> = {
  reverse: removeLastMove,
  skip: skipTurn,
};

const CurrentPlayerMenu = () => {
  const dispatch = useDispatch();

  const isFirstMove = useSelector(selectIsFirstMove);
  const themedStyles = styles(useSelector(selectTheme));

  const handleMenuAction = (actionLabel: string) => () => {
    const action = menuActions[actionLabel];

    if (action) {
      dispatch(action());
    }
  };

  const scrollToBoard = () => {
    dispatch(setGameView('board'));
  };

  return (
    <View style={themedStyles.container}>
      {!isFirstMove && (
        <View style={themedStyles.buttonWrapper}>
          <FlatButton label="Cofnij" onPress={handleMenuAction('reverse')} />
        </View>
      )}
      <View style={themedStyles.buttonWrapper}>
        <FlatButton label="Wymiana / pas" onPress={handleMenuAction('skip')} />
      </View>
      <View style={themedStyles.buttonWrapper}>
        <FlatButton label="Ułóż słowo" onPress={scrollToBoard} />
      </View>
    </View>
  );
};

export default CurrentPlayerMenu;
