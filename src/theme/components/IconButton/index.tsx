import React, { ComponentType } from 'react';
import { TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

import { styles } from './styles';

const iconSets: Record<string, ComponentType<any>> = {
  FontAwesome5: FontAwesome5,
  Ionicons: Ionicons,
};

type Props = {
  icon: string;
  iconSet?: string;
  size: number;
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  dark?: boolean;
};

const IconButton: React.FC<Props> = ({
  icon,
  iconSet = 'Ionicons',
  size,
  onPress,
  disabled,
  style,
  dark,
}) => {
  const IconComponent = iconSets[iconSet];

  return (
    <TouchableOpacity
      style={style ? [styles.container, style] : styles.container}
      onPress={onPress}
      disabled={disabled}
    >
      <IconComponent
        name={icon}
        size={size}
        style={dark ? [styles.icon, styles.darkIcon] : styles.icon}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
