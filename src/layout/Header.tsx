import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import {
  StackHeaderTitleProps,
  StackNavigationOptions,
} from '@react-navigation/stack';

import { color, font } from 'src/theme';

const Header = (props: StackHeaderTitleProps) => (
  <View style={styles.container}>
    <Image
      style={[styles.image, { transform: [{ rotate: '7deg' }] }]}
      source={require('assets/tile.png')}
    />
    <Text style={styles.text}>{props.children}</Text>
  </View>
);

export const headerLayout: Partial<StackNavigationOptions> = {
  headerTitle: (props: StackHeaderTitleProps) => <Header {...props} />,
  headerStyle: {
    backgroundColor: color.green,
  },
  headerTintColor: color.white,
  headerTitleAlign: 'center',
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 35,
    height: 35,
  },
  text: {
    marginLeft: 15,
    color: color.white,
    fontWeight: 'bold',
    fontSize: font.size.xl,
  },
});
