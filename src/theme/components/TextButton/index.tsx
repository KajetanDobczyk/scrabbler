import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

type Props = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
};

const TextButton: React.FC<Props> = ({ label, onPress, disabled }) => (
  <TouchableOpacity onPress={onPress} disabled={disabled}>
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

export default TextButton;
