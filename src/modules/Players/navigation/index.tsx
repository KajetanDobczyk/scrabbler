import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { RootTabParamList, Screen } from 'src/layout/interfaces';
import PlayersListScreen from 'src/modules/Players/containers/PlayersList';

type Props = {
  navigation: StackNavigationProp<RootTabParamList, Screen.Players>;
  route: RouteProp<RootTabParamList, Screen.Players>;
};

const PlayersTabContent: React.FC<Props> = () => <PlayersListScreen />;

export default PlayersTabContent;
