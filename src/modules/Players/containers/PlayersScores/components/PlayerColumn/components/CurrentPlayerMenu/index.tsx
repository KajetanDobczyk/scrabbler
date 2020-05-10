import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
  skipTurn,
  removeLastMove,
  tryNewMove,
} from 'src/modules/Players/store/thunks';
import { selectIsFirstMove } from 'src/modules/Players/store/selectors';
import IconButton from 'src/theme/components/IconButton';
import { cancelNewMove } from 'src/modules/Board/store/slice';
import { selectNewMove } from 'src/modules/Board/store/selectors';

import { styles } from './styles';

const menuActions: Record<string, any> = {
  cancel: cancelNewMove,
  accept: tryNewMove,
  reverse: removeLastMove,
  skip: skipTurn,
};

const CurrentPlayerMenu = () => {
  const dispatch = useDispatch();

  const newMove = useSelector(selectNewMove);
  const isFirstMove = useSelector(selectIsFirstMove);

  const handleMenuAction = (actionLabel: string) => () => {
    const action = menuActions[actionLabel];

    if (action) {
      dispatch(action());
    }
  };

  const isConfirmationMode = newMove.tiles.length;

  return (
    <View style={styles.container}>
      {isConfirmationMode ? (
        <>
          <IconButton
            icon="ios-close"
            size={30}
            onPress={handleMenuAction('cancel')}
            style={styles.button}
          />
          <IconButton
            icon="ios-checkmark"
            size={30}
            onPress={handleMenuAction('accept')}
            style={styles.button}
          />
        </>
      ) : (
        <>
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
        </>
      )}
    </View>
  );
};

export default CurrentPlayerMenu;
