import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { skipTurn, removeLastMove } from 'src/modules/Players/store/thunks';
import { selectIsFirstMove } from 'src/modules/Players/store/selectors';

import { styles } from './styles';
import FlatButton from 'src/theme/components/FlatButton';
import { setGameView } from 'src/modules/Game/store/slice';

const menuActions: Record<string, any> = {
  reverse: removeLastMove,
  skip: skipTurn,
};

const CurrentPlayerMenu = () => {
  const dispatch = useDispatch();

  const isFirstMove = useSelector(selectIsFirstMove);

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
    <View style={styles.container}>
      {!isFirstMove && (
        <View style={styles.buttonWrapper}>
          <FlatButton label="Cofnij" onPress={handleMenuAction('reverse')} />
        </View>
      )}
      <View style={styles.buttonWrapper}>
        <FlatButton label="Wymiana / pas" onPress={handleMenuAction('skip')} />
      </View>
      <View style={styles.buttonWrapper}>
        <FlatButton label="Ułóż słowo" onPress={scrollToBoard} />
      </View>
    </View>
  );
};

export default CurrentPlayerMenu;
