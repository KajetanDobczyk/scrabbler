import React from 'react';
import { TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';

type Props = {
  icon: string;
  size: number;
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  dark?: boolean;
};

const IconButton: React.FC<Props> = ({
  icon,
  size,
  onPress,
  disabled,
  style,
  dark,
}) => (
  <TouchableOpacity
    style={style ? [styles.container, style] : styles.container}
    onPress={onPress}
    disabled={disabled}
  >
    <Ionicons
      name={icon}
      size={size}
      style={dark ? [styles.icon, styles.darkIcon] : styles.icon}
    />
  </TouchableOpacity>
);

export default IconButton;
