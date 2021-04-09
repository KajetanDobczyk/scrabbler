import React, { ComponentType } from 'react';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { css } from '@emotion/native';

import { selectTheme } from 'src/modules/Settings/store/selectors';

import * as S from './styles';

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
  color?: string;
};

const IconButton: React.FC<Props> = ({
  icon,
  iconSet = 'Ionicons',
  size,
  onPress,
  disabled,
  color,
}) => {
  const theme = useSelector(selectTheme);

  const IconComponent = iconSets[iconSet];

  return (
    <S.IconButtonWrapper onPress={onPress} disabled={disabled}>
      <IconComponent
        name={icon}
        size={size}
        style={css({
          textAlign: 'center',
          color: color || theme.color.white,
        })}
      />
    </S.IconButtonWrapper>
  );
};

export default IconButton;
