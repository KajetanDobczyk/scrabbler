import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { RootTabParamList, Screen } from 'src/layout/interfaces';
import Logo from 'src/layout/components/Logo';

import { styles } from './styles';

type Props = {
  navigation: StackNavigationProp<RootTabParamList, Screen.Home>;
  route: RouteProp<RootTabParamList, Screen.Home>;
};

const Home: React.FC<Props> = ({ navigation }) => (
  <View style={styles.container}>
    <Logo />
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate(Screen.PointsTracking)}
    >
      <Text style={styles.buttonLabel}>{Screen.PointsTracking}</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate(Screen.Dictionary)}
    >
      <Text style={styles.buttonLabel}>{Screen.Dictionary}</Text>
    </TouchableOpacity>
  </View>
);

export default Home;
