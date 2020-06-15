import React from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import IconButton from 'src/theme/components/IconButton';
import { selectTheme } from 'src/modules/Settings/store/selectors';

import { styles } from './styles';

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

  const themedStyles = styles(useSelector(selectTheme));

  const openDrawerNavigation = () => {
    Keyboard.dismiss();
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={themedStyles.container}>
        {onGoBack && (
          <IconButton icon="ios-arrow-back" size={20} onPress={onGoBack} />
        )}
        <Text style={themedStyles.title}>{title}</Text>
        <View style={themedStyles.rightMenu}>
          {children}
          {!hideMenuButton && (
            <IconButton
              icon="ios-menu"
              size={20}
              onPress={openDrawerNavigation}
              style={themedStyles.menuButton}
            />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Header;
