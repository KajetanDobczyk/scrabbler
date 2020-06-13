import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { RootTabParamList, Screen } from 'src/layout/interfaces';
import SettingsScreen from 'src/modules/Settings/containers/Settings';

type Props = {
  navigation: StackNavigationProp<RootTabParamList, Screen.Game>;
  route: RouteProp<RootTabParamList, Screen.Game>;
};

const SettingsTabContent: React.FC<Props> = () => <SettingsScreen />;

export default SettingsTabContent;
