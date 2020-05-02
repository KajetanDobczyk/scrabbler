import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

type Props = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
};

const FlatButton: React.FC<Props> = ({ label, onPress, disabled }) => (
  <TouchableOpacity
    style={disabled ? [styles.container, styles.disabled] : styles.container}
    onPress={onPress}
    disabled={disabled}
  >
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

export default FlatButton;
