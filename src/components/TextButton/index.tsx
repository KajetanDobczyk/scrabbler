import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { selectTheme } from 'src/modules/Settings/store/selectors';

import { styles } from './styles';

type Props = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
};

const TextButton: React.FC<Props> = ({ label, onPress, disabled }) => {
  const themedStyles = styles(useSelector(selectTheme));

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Text style={themedStyles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;
