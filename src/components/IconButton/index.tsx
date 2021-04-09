import React, { ComponentType } from 'react';
import { TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

import { selectTheme } from 'src/modules/Settings/store/selectors';

import { styles } from './styles';

type IconSet = 'FontAwesome5' | 'Ionicons' | 'MaterialIcons';

const iconSets: Record<IconSet, ComponentType<any>> = {
  FontAwesome5: FontAwesome5,
  Ionicons: Ionicons,
  MaterialIcons: MaterialIcons,
};

type Props = {
  icon: string;
  iconSet?: IconSet;
  size: number;
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ViewStyle>;
  dark?: boolean;
};

const IconButton: React.FC<Props> = ({
  icon,
  iconSet = 'Ionicons',
  size,
  onPress,
  disabled,
  style,
  iconStyle,
}) => {
  const themedStyles = styles(useSelector(selectTheme));

  const IconComponent = iconSets[iconSet];

  return (
    <TouchableOpacity
      style={style ? [themedStyles.container, style] : themedStyles.container}
      onPress={onPress}
      disabled={disabled}
    >
      <IconComponent
        name={icon}
        size={size}
        style={iconStyle ? [themedStyles.icon, iconStyle] : themedStyles.icon}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
