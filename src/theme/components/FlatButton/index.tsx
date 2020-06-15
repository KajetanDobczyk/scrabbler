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

const FlatButton: React.FC<Props> = ({ label, onPress, disabled }) => {
  const themedStyles = styles(useSelector(selectTheme));

  return (
    <TouchableOpacity
      style={
        disabled
          ? [themedStyles.container, themedStyles.disabled]
          : themedStyles.container
      }
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={themedStyles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default FlatButton;
