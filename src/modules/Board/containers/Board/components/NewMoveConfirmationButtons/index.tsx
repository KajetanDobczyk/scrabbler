import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { acceptNewMove, cancelNewMove } from 'src/modules/Board/store/slice';

import { styles } from './styles';

const NewMoveConfirmationButtons: React.FC = () => {
  const dispatch = useDispatch();

  const accept = () => {
    dispatch(acceptNewMove());
  };

  const cancel = () => {
    dispatch(cancelNewMove());
  };

  // return newMove.word ? (
  return true ? (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.cancelButton]}
        onPress={cancel}
      >
        <Ionicons name="ios-close" size={20} style={styles.buttonIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.acceptButton]}
        onPress={accept}
      >
        <Ionicons name="ios-checkmark" size={20} style={styles.buttonIcon} />
      </TouchableOpacity>
    </View>
  ) : null;
};

export default NewMoveConfirmationButtons;
