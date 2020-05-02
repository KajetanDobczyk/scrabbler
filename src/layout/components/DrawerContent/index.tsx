import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentOptions,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { View } from 'react-native';

import { color } from 'src/theme';

import Logo from '../Logo';
import { styles } from './styles';

const DrawerContent: React.FC<DrawerContentComponentProps<
  DrawerContentOptions
>> = (props) => (
  <DrawerContentScrollView {...props} style={styles.container}>
    <View style={styles.logoWrapper}>
      <Logo />
    </View>
    <DrawerItemList
      {...props}
      activeTintColor={color.white}
      inactiveTintColor={color.white}
    />
  </DrawerContentScrollView>
);

export default DrawerContent;
