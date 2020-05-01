import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { tryNewMove, skipTurn } from 'src/modules/Board/store/thunks';
import { cancelNewMove } from 'src/modules/Board/store/slice';
import { selectNewMove } from 'src/modules/Board/store/selectors';

import { styles } from './styles';

const menuActions: Record<string, any> = {
  skip: skipTurn,
  cancel: cancelNewMove,
  accept: tryNewMove,
};

const GameMenu = () => {
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);

  const newMove = useSelector(selectNewMove);

  const handleMenuAction = (actionLabel: string) => () => {
    const action = menuActions[actionLabel];

    if (action) {
      dispatch(action());
    }
  };

  const toggleIsExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const isConfirmationMode = newMove.length;

  return (
    <View style={styles.container}>
      {isConfirmationMode ? (
        <>
          <TouchableOpacity
            style={styles.button}
            onPress={handleMenuAction('cancel')}
          >
            <Ionicons name="ios-close" size={30} style={styles.buttonIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.lastButton]}
            onPress={handleMenuAction('accept')}
          >
            <Ionicons
              name="ios-checkmark"
              size={30}
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
        </>
      ) : (
        <>
          {isExpanded && (
            <>
              <TouchableOpacity
                style={styles.button}
                onPress={handleMenuAction('skip')}
              >
                <Ionicons
                  name="ios-skip-forward"
                  size={20}
                  style={styles.buttonIcon}
                />
              </TouchableOpacity>
            </>
          )}
          <TouchableOpacity
            onPress={toggleIsExpanded}
            style={[styles.button, styles.lastButton]}
          >
            <Ionicons
              name="ios-more"
              size={20}
              style={
                isExpanded
                  ? [styles.buttonIcon, styles.buttonIconPressed]
                  : styles.buttonIcon
              }
            />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default GameMenu;
