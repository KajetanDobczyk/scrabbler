import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { tryNewMove } from 'src/modules/Board/store/thunks';
import { cancelNewMove } from 'src/modules/Board/store/slice';
import {
  selectNewMove,
  selectBoardLayout,
} from 'src/modules/Board/store/selectors';

import { styles } from './styles';
import { color } from 'src/theme';

const GameMenu = () => {
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);

  const newMove = useSelector(selectNewMove);
  const { tileSize } = useSelector(selectBoardLayout);

  const accept = () => {
    dispatch(tryNewMove());
  };

  const cancel = () => {
    dispatch(cancelNewMove());
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
            style={[styles.circleButton, styles.cancelButton]}
            onPress={cancel}
          >
            <Ionicons name="ios-close" style={styles.buttonIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.circleButton, styles.acceptButton]}
            onPress={accept}
          >
            <Ionicons name="ios-checkmark" style={styles.buttonIcon} />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity onPress={toggleIsExpanded}>
            <Ionicons name="ios-more" size={20} color={color.white} />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default GameMenu;
