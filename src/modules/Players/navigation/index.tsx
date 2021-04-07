import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { RootTabParamList, Screen } from 'src/layout/interfaces';
import LoginScreen from 'src/modules/Players/containers/Login';

type Props = {
  navigation: StackNavigationProp<RootTabParamList, Screen.Players>;
  route: RouteProp<RootTabParamList, Screen.Players>;
};

const PlayersTabContent: React.FC<Props> = () => <LoginScreen />;

export default PlayersTabContent;
