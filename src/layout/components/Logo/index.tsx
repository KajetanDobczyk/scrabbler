import React from 'react';
import { Image, View, Text } from 'react-native';

import { styles } from './styles';

const Logo = () => (
  <View style={styles.container}>
    <Image
      style={[styles.image, { transform: [{ rotate: '7deg' }] }]}
      source={require('assets/tile.png')}
    />
    <Text style={styles.title}>Scrabbler</Text>
  </View>
);

export default Logo;
