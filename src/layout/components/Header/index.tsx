import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';

import IconButton from 'src/theme/components/IconButton';

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

  const openDrawerNavigation = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={styles.container}>
      {onGoBack && (
        <IconButton icon="ios-arrow-back" size={20} onPress={onGoBack} />
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightMenu}>
        {children}
        {!hideMenuButton && (
          <IconButton
            icon="ios-menu"
            size={30}
            onPress={openDrawerNavigation}
            style={styles.menuButton}
          />
        )}
      </View>
    </View>
  );
};

export default Header;
