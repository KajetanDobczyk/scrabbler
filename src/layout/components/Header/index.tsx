import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { css } from '@emotion/native';

import IconButton from 'src/components/IconButton';

import * as S from './styles';

type Props = {
  title: string;
  onGoBack?: () => void;
  hideMenuButton?: boolean;
};

const Header: React.FC<Props> = ({
  title,
  onGoBack,
  hideMenuButton,
  children,
}) => {
  const navigation = useNavigation();

  const openDrawerNavigation = () => {
    Keyboard.dismiss();
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <S.HeaderWrapper>
        {onGoBack && (
          <IconButton icon="ios-arrow-back" size={20} onPress={onGoBack} />
        )}
        <S.Title>{title}</S.Title>
        <S.RightMenu>
          {children}
          {!hideMenuButton && (
            <View style={css({ marginLeft: 10 })}>
              <IconButton
                icon="ios-menu"
                size={20}
                onPress={openDrawerNavigation}
              />
            </View>
          )}
        </S.RightMenu>
      </S.HeaderWrapper>
    </TouchableWithoutFeedback>
  );
};

export default Header;
