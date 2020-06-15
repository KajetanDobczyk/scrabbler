import React from 'react';
import { Image, View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { selectTheme } from 'src/modules/Settings/store/selectors';

import { styles } from './styles';

const Logo = () => {
  const themedStyles = styles(useSelector(selectTheme));

  return (
    <View style={themedStyles.container}>
      <Image
        style={[themedStyles.image, { transform: [{ rotate: '7deg' }] }]}
        source={require('assets/tile.png')}
      />
      <Text style={themedStyles.title}>Scrabbler</Text>
    </View>
  );
};

export default Logo;
