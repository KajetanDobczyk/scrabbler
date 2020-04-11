import React from 'react';
import { Image, View, Text } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import { color } from 'src/theme';

import { styles } from './styles';

type Props = {
  title: string;
};

const Header: React.FC<Props> = ({ title }) => {
  const navigation = useNavigation();

  const openDrawerNavigation = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity onPress={openDrawerNavigation}>
        <Ionicons name="ios-menu" size={30} color={color.white} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
