import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import { color } from 'src/theme';

import { styles } from './styles';
import TextButton from 'src/theme/components/TextButton';

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
        <TouchableOpacity onPress={onGoBack}>
          <Ionicons name="ios-arrow-back" size={20} style={styles.backIcon} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightMenu}>
        {children}
        {!hideMenuButton && (
          <TouchableOpacity
            onPress={openDrawerNavigation}
            style={styles.menuButton}
          >
            <Ionicons name="ios-menu" size={30} color={color.white} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
