import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { skipTurn, removeLastMove } from 'src/modules/Players/store/thunks';
import { selectIsFirstMove } from 'src/modules/Players/store/selectors';
import IconButton from 'src/theme/components/IconButton';

import { styles } from './styles';

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

  return (
    <View style={styles.container}>
      {!isFirstMove && (
        <IconButton
          icon="ios-skip-backward"
          size={15}
          onPress={handleMenuAction('reverse')}
          style={styles.button}
        />
      )}
      <IconButton
        icon="ios-skip-forward"
        size={15}
        onPress={handleMenuAction('skip')}
        style={styles.button}
      />
    </View>
  );
};

export default CurrentPlayerMenu;
