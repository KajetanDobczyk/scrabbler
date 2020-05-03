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
};

const IconButton: React.FC<Props> = ({
  icon,
  size,
  onPress,
  disabled,
  style,
}) => (
  <TouchableOpacity
    style={style ? [styles.container, style] : styles.container}
    onPress={onPress}
    disabled={disabled}
  >
    <Ionicons name={icon} size={size} style={styles.icon} />
  </TouchableOpacity>
);

export default IconButton;
