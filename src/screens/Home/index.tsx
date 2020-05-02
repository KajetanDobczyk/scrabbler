import React from 'react';
import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { RootTabParamList, Screen } from 'src/layout/interfaces';
import Logo from 'src/layout/components/Logo';
import FlatButton from 'src/theme/components/FlatButton';

import { styles } from './styles';

type Props = {
  navigation: StackNavigationProp<RootTabParamList, Screen.Home>;
  route: RouteProp<RootTabParamList, Screen.Home>;
};

const Home: React.FC<Props> = ({ navigation }) => (
  <View style={styles.container}>
    <Logo />
    <FlatButton
      label={Screen.PointsTracking}
      onPress={() => navigation.navigate(Screen.PointsTracking)}
    />
    <FlatButton
      label={Screen.Dictionary}
      onPress={() => navigation.navigate(Screen.Dictionary)}
    />
  </View>
);

export default Home;
