import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { RootTabParamList, Screen } from 'src/layout/interfaces';
import SettingsScreen from 'src/modules/Settings/containers/Settings';

type Props = {
  navigation: StackNavigationProp<RootTabParamList, Screen.PointsTracking>;
  route: RouteProp<RootTabParamList, Screen.PointsTracking>;
};

const Settings: React.FC<Props> = () => <SettingsScreen />;

export default Settings;
