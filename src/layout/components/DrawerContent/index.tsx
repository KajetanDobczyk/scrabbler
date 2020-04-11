import React from 'react';
import { Image, View, Text } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentOptions,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

import { styles } from './styles';
import { color } from 'src/theme';

const DrawerContent: React.FC<DrawerContentComponentProps<
  DrawerContentOptions
>> = (props) => (
  <DrawerContentScrollView {...props} style={styles.container}>
    <View style={styles.header}>
      <Image
        style={[styles.image, { transform: [{ rotate: '7deg' }] }]}
        source={require('assets/tile.png')}
      />
      <Text style={styles.title}>Scrabbler</Text>
    </View>
    <DrawerItemList
      {...props}
      activeTintColor={color.white}
      inactiveTintColor={color.white}
    />
  </DrawerContentScrollView>
);

export default DrawerContent;
