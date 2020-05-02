import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

type Props = {
  label: string;
  onPress: () => void;
};

const FlatButton: React.FC<Props> = ({ label, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

export default FlatButton;
