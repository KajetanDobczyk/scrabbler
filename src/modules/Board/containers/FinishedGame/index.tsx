import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import FlatButton from 'src/theme/components/FlatButton';
import PlayersEndGameDetails from 'src/modules/Players/components/FinishedGameDetails';

import { styles } from './styles';
import {
  PointsTrackingScreen,
  PointsTrackingTabParamList,
} from '../../interfaces';

type Props = {
  navigation: StackNavigationProp<
    PointsTrackingTabParamList,
    PointsTrackingScreen.FinishedGame
  >;
};

const FinishedGame: React.FC<Props> = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.header}>Gra zakończona!</Text>
    <PlayersEndGameDetails />
    <FlatButton
      label="Nowa gra"
      onPress={() => navigation.navigate(PointsTrackingScreen.NewGame)}
    />
  </View>
);

export default FinishedGame;
